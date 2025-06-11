# LangGraph 101: Building Stateful AI Workflows in Python

Welcome to LangGraph 101! In this beginner-friendly guide, we'll introduce LangGraph – a powerful framework for building stateful AI agent workflows on top of LangChain `medium.com`. We’ll start by brushing up on some foundational Python concepts that LangGraph uses heavily (like dictionaries, type hints, and lambdas). Then, with those basics in hand, we’ll dive into LangGraph’s core components – think of things like State, Nodes, Edges, Tools, etc. – using real-world analogies (a whiteboard, an assembly line, and more) to make the ideas stick. By the end, you should have a clear mental model of how LangGraph works and how to start building your own AI agent graphs. Let's get started!

## Python Building Blocks for LangGraph

LangGraph is written in Python and leverages some intermediate features of the language. Don’t worry if these sound new – we’ll explain each in plain English. Mastering these will help you understand LangGraph code more easily.

### Normal Dictionaries (Key-Value Storage and Limitations)

Python’s normal dictionary (`dict`) is a built-in way to store data as key-value pairs. You can think of a `dict` as a simple labeled storage box: each key is a label and each value is the content. For example, we might store a user's info in a dict:

```python
user_info = {"name": "Alice", "age": 30}
print(user_info["name"])  # "Alice"
```

This is flexible – you can add or remove keys at runtime – but that flexibility comes with no safety checks. The dict doesn’t enforce what keys should exist or what type the values should be. If you mistype a key or pass the wrong type, Python won’t complain until you actually use the data (which might lead to runtime errors). In a large project (or an AI agent’s state), a stray typo like `user_info["Nam"]` or a wrong-type value can cause hard-to-find bugs. As one developer recounted, working with deeply nested plain dicts can lead to “lack of clarity and type consistency,” making debugging painful `medium.com`. Essentially, a normal dict is powerful but "anything goes," which can be dangerous in complex workflows.

### Typed Dictionaries (Type Safety and Readability)

Enter `TypedDict` – a feature in Python’s `typing` module that gives dictionaries a specific schema (structure). With `TypedDict`, you define upfront what keys a dict should have and what type of data each key holds `medium.com`. This is like designing a form with fixed fields: each field (key) has an expected type of content. The result is type safety and better readability – your code editor can warn you if you use a wrong key or type. LangGraph uses `TypedDict`s for its state to ensure each piece of data is where it’s supposed to be. For example, let's define a user profile using a `TypedDict` instead of a plain dict:

```python
from typing import TypedDict, Optional

class UserProfile(TypedDict):
    name: str
    age: int
    nickname: Optional[str]  # nickname can be a string or None

profile: UserProfile = {"name": "Alice", "age": 30, "nickname": None}
# profile["age"] = "thirty"  # 🔴 This would be flagged by a type checker as an error
```

In this snippet, `UserProfile` is a `TypedDict` with specific fields. If we try to assign the wrong type (like setting age to `"thirty"` above), static type checkers (like mypy or your IDE) will catch it. LangGraph takes advantage of this – when you define your graph’s state as a `TypedDict`, it ensures each field in the state has the correct type when populated `realpython.com`. This means fewer surprises at runtime and self-documenting code (anyone reading the `TypedDict` definition can see what data the state should contain). Overall, `TypedDict`s give us the best of both worlds: the flexibility of dictionaries with the structural safety of defined data models `medium.com`.

### Union Types (Either-Or Types for Flexibility)

Sometimes a value can be more than one type. For instance, maybe a user ID could be an `int` or a `str`. Python’s `Union` type hint allows you to specify “this thing can be either X or Y.” In Python 3.10+, you can use the `|` operator as shorthand for `Union`. For example:

```python
from typing import Union

def process_value(x: Union[int, str]) -> str:
    # x can be int or str
    return f"Value is {x}"
```

Here, `process_value` accepts either an integer or a string. Union types are useful in LangGraph state definitions where a field might hold different kinds of data over time. In fact, the `GraphState` in a LangGraph often has fields that start as `None` and later become a specific type (for example, a field that is `None` until a node fills it with a string result). You’ll often see a union with `None` to express an optional value, which leads us to...

### Optional Types (Maybe a Value, Maybe Not)

`Optional` is not a new type per se, but a convenient way to say "this value could be of type T, or it could be None." `Optional[X]` is just shorthand for `Union[X, None]`. For instance, `Optional[str]` means "either a string or None." In our `UserProfile TypedDict` above, we used `Optional[str]` for the `nickname` field, indicating that `nickname` might be a string (if provided) or might be absent (`None`). LangGraph uses Optionals a lot because the graph’s state gets built up step by step. At the start, many fields in the state are empty (`None`) and only get filled when certain nodes run. By declaring a field as optional, you (and your type checker) won’t be surprised if it’s still `None` at a given point. For example, in a LangGraph state for a conversation, you might have `last_user_message: Optional[str]` – before the user says anything, it’s `None`, and once a message comes in, it becomes a `str`. Optional types help model this evolving state clearly.

### The Any Type (Disabling Type Checks When Needed)

What about cases where any type of value is acceptable? Python’s `Any` type hint is the escape hatch that basically says "I’m not specifying a type here." If a function parameter or state field is annotated as `Any`, it can be an int, str, list, or any other object – no questions asked by the type checker. This is the ultimate flexibility, but it comes at the cost of losing the safety net. LangGraph tries to avoid `Any` where possible, favoring clear types, but sometimes you’ll see it (for example, in generic utility functions or when integrating with loosely-typed APIs). As a beginner, just know that `Any` is a way to opt-out of type enforcement. If you see `Any` in LangGraph code, it usually means "this could be literally anything." Use it sparingly in your own code – it's there for situations where strict typing isn't feasible.

### Lambda Functions (Short Anonymous Functions)

A lambda function in Python is a tiny anonymous function – essentially a one-liner function without a name. Lambdas are often used for short, throwaway operations or as inline callbacks. The syntax is `lambda parameters: expression`. For example:

```python
multiply = lambda a, b: a * b
print(multiply(2, 3))  # Outputs 6
```

In the context of LangGraph, lambdas can come in handy for simple node or edge logic. Since LangGraph nodes are essentially Python functions that operate on the state, you can sometimes define a quick node using a lambda instead of writing a full `def` block. For instance, if you just need a node to add two numbers from the state, you could do something like:

```python
graph.add_node("sum_numbers", lambda state: {"result": state["a"] + state["b"]})
```

Here we used a lambda to define a node that reads `a` and `b` from the state and returns a new piece of state with their sum. Lambdas keep the code concise for simple operations, though for anything substantial or for clarity, regular `def` functions are usually better.

Now that we've covered the Python basics (dictionaries, type hints, and lambdas) frequently seen in LangGraph code, let's move on to the LangGraph itself – and see how these pieces come together in building AI agent flows.

## Core Concepts of LangGraph

At its heart, LangGraph lets you build a stateful graph of computations for AI agents `medium.com`. That sounds fancy, but we can break it down. Imagine an assembly line in a factory or a flowchart of tasks – that's your graph. Each step on the assembly line is a node that does some work. A conveyor belt connecting steps is like an edge that passes the product along. And the product on this assembly line is the state – a bundle of information (think of it like a whiteboard that gets updated at each step). LangGraph gives you tools to define these nodes, connect them with edges (including conditional forks), and even loop back (cycles) when needed, creating a flexible workflow for your AI to follow. Let’s explore each component with this analogy in mind.

### State (The AI’s Shared Memory/Whiteboard)

The state is a dictionary (often a `TypedDict`) that holds all the information being passed through your graph. You can picture the state as a whiteboard that everyone in a meeting can read and write on. Initially, you scribble some input on it (like a user query or initial data). Each node in the graph can look at the whiteboard (read some info) and then update it (write some new info or modify existing info) before handing it off to the next node. In LangGraph, you define a state schema (structure) up front by using a `TypedDict` class (as we saw earlier). This `GraphState` describes what pieces of data the state contains. For example, if you're building a support-ticket assistant, your state might have fields like `{"user_message": str, "parsed_issue": dict, "needs_escalation": bool, ...}`. By defining it as a `TypedDict`, LangGraph knows the expected fields and types. As mentioned, LangGraph ensures that each field in your state stays of the correct type as it gets updated `realpython.com`. Crucially, the state persists throughout the graph run: one node's output becomes part of the state for the next node. This is why we call it a stateful graph – unlike a stateless function pipeline, here the data (state) accumulates and evolves. You start with an initial state (some fields filled, others maybe `None`), then each node function takes the current state, does its thing, and returns an updated state. Analogy: If it helps, think of the state/whiteboard in a team meeting. Initially, it might just have the meeting agenda. As the meeting goes on, team members (nodes) add notes, decisions, and action items to the board. By the end, the whiteboard has the full story of what happened. Similarly, in LangGraph the state at the end contains the cumulative result of all nodes' actions.

### Nodes (Steps in the Workflow – Assembly Line Stations)

Nodes are the building blocks of your LangGraph `medium.com`. Each node represents a single step or action in your workflow – in code, it's basically a function that takes the state and returns (an updated) state. If the state is our whiteboard, a node is like a person at a station reading the whiteboard, doing some work, and then writing the results back. For example, a node might be "parse the user question", or "call an API to get weather info", or "format the final answer". In LangGraph you define a node by writing a Python function (or using a lambda) that accepts the state (usually as a dictionary or `TypedDict` instance) and returns a dictionary with some updates. In general, a node should not destroy the existing state; it should add or modify keys as needed and leave the rest untouched. LangGraph will merge this returned dictionary into the state for you. Here's a simple node function example:

```python
def classify_input_node(state: dict) -> dict:
    """Determine if the user's question is a greeting or a search query."""
    text = state.get("question", "").lower()
    if any(greet in text for greet in ["hello", "hi", "hey"]):
        state["classification"] = "greeting"
    else:
        state["classification"] = "search"
    return state
```

This node reads `state["question"]`, classifies it, stores the result in `state["classification"]`, and returns the state. In LangGraph, every node function should follow this pattern: take the state, update it, and return it `realpython.com`. Under the hood, LangGraph will handle inserting those updates into the central state object appropriately. You add nodes to a graph by giving each node a name and the function it should run. For instance:

```python
workflow = StateGraph(GraphState)  # create a new graph with our state schema
workflow.add_node("classify_input", classify_input_node)
```

This registers a node called `"classify_input"` associated with our function. We can add more nodes similarly (e.g., a `"handle_greeting"` node, a `"handle_search"` node, etc., which we'll see soon). Naming nodes allows us to refer to them when we connect the graph’s flow. Analogy: If nodes are like stations on an assembly line, each station has a specific task. One station might be Cutting, another Painting, another Inspecting. In our AI workflow, one node might Analyze the question, another Fetch data from a tool, another Compose an answer. Just as each assembly line station receives a product, works on it, and passes it on, each node receives the state, updates it, and passes it along.

### Graph and Edges (Connecting the Dots in a Flow)

A graph in LangGraph is the overall structure that ties nodes together. When we talk about "the graph", we mean the network of nodes plus the connections (edges) between them. You can think of the graph as the blueprint or map of the workflow: it specifies which node runs first, which node runs next, and so on. Edges are the connections that determine the order of node execution `medium.com`. An edge essentially says "after node X is done, go to node Y next." When you add edges in LangGraph, you are building this road map for the state to flow through. By default, edges are like straight conveyor belts – always go from this node to that node. For example, if we always want to follow node A with node B, we add an edge A -> B. In code:

```python
workflow.add_edge("classify_input", "handle_greeting")
```

This would mean once `classify_input` node finishes, the graph moves to `handle_greeting` node. However, in practice, we often need conditional behavior – that’s where conditional edges come in (next section). But first, let's mention special start/end edges. Every graph has a start point and an end point. In LangGraph, `START` and `END` are special pseudo-nodes to mark the beginning and termination of the graph. `START` isn’t a real node that runs code; it’s a placeholder indicating where to begin. Similarly, `END` is not a function, but a marker that the workflow should stop there. We typically add an edge from `START` to our first real node, and one from a final node to `END`. For instance:

```python
from langgraph.graph import START, END
workflow.add_edge(START, "classify_input")       # graph begins at classify_input
workflow.add_edge("handle_greeting", END)        # after handle_greeting, we're done
workflow.add_edge("handle_search", END)          # after handle_search, we're done
```

`START` and `END` help LangGraph know how to kick off and when to stop. `START` is essentially the entry door where the initial state enters the graph, and `END` is the exit door where results come out `realpython.com`. Analogy: If our nodes are stations on an assembly line, `START` is like the loading dock where raw materials (initial state) get put on the conveyor, and `END` is the unloading dock where the finished product (final state/output) comes off. The edges are the conveyor belts connecting the stations in sequence.

### Conditional Edges (Branching Decisions – The IF/ELSE of the Graph)

Not all workflows are a straight line. Often we need to make decisions: "if condition X, go this way; otherwise, go that way." LangGraph handles this with conditional edges. A conditional edge is like a fork in the road (or a railroad switch) that directs the flow to one of multiple possible next nodes based on some logic. When you add a conditional edge, you provide:

* The node where the decision is made (the node output we will inspect).
* A function (let’s call it a routing function) that looks at the state and returns a string label indicating which path to take.
* A mapping of possible string outputs from that function to the next node names.

For example, suppose after our `classify_input` node, we want to branch: if the classification is `"greeting"`, go to `handle_greeting` node; if it's `"search"`, go to `handle_search` node. We could write a routing function like:

```python
def decide_next_node(state: dict) -> str:
    # state["classification"] was set by classify_input_node
    if state.get("classification") == "greeting":
        return "handle_greeting"
    else:
        return "handle_search"
```

And add a conditional edge:

```python
workflow.add_conditional_edges(
    "classify_input",         # the node after which we branch
    decide_next_node,         # the function that decides where to go next
    {
        "handle_greeting": "handle_greeting",   # if decide_next_node returns "handle_greeting", go there
        "handle_search": "handle_search"        # if returns "handle_search", go there
    }
)
```

Now, when the graph runs, it will execute `classify_input`. Then, instead of a fixed next step, it uses `decide_next_node` to choose the next node. If the state indicated a greeting, the next node will be `handle_greeting`; otherwise it’ll be `handle_search`. Under the hood, LangGraph expects the routing function to return a string which it then maps to the correct node name `realpython.com`. Any unmapped result or unexpected string could throw an error – so your mapping dict should cover all possibilities of the function's output. In the assembly line analogy: a conditional edge is like a smart conveyor belt with a sensor. After a station, the product goes onto a belt that can switch tracks. For example, imagine a quality-check station that marks items as "pass" or "fail". A conditional conveyor might send "pass" items to packaging and "fail" items back for rework or discarding. In our LangGraph, the `classify_input` node is like that quality check – labeling the query – and the conditional edges route the flow to the appropriate handler node. LangGraph visualizations often show conditional edges as dotted arrows (versus solid arrows for normal edges) `realpython.com`. This makes it clear that the flow isn't guaranteed to go down every dotted line, only the one that matches the condition at runtime.

### Example: Putting It Together (Greeting vs Search Graph)

Let's solidify these ideas with a concrete mini-example. We’ll build a simple LangGraph that classifies a user's input as either a greeting or a search query and responds accordingly (perhaps by calling a search tool or giving a greeting response). This example is inspired by the LangGraph tutorial `medium.com`, and it's a great demonstration of state, nodes, edges, and conditional logic in action.

#### Step 1: Define the State

We create a `GraphState TypedDict` for our data. It will hold the user's question, the classification of that question, and a response. Initially, these can be empty/None.

```python
from typing import TypedDict, Optional

class GraphState(TypedDict):
    question: Optional[str]
    classification: Optional[str]
    response: Optional[str]
```

#### Step 2: Create the Graph and Nodes

Next, we create a `StateGraph` with this state schema and add our nodes:

```python
from langgraph.graph import StateGraph, START, END

# Initialize the graph with our state schema
workflow = StateGraph(GraphState)

# Define node functions
def classify_input_node(state: GraphState) -> GraphState:
    text = (state.get("question") or "").strip().lower()
    if text in ["hi", "hello", "hey"]:
        state["classification"] = "greeting"
    else:
        state["classification"] = "search"
    return state

def handle_greeting_node(state: GraphState) -> GraphState:
    user_q = state.get("question") or ""
    state["response"] = f"Hi there! You said: '{user_q}'"
    return state

def handle_search_node(state: GraphState) -> GraphState:
    user_q = state.get("question") or ""
    # For demo, we won't actually call an API. Just pretend we searched.
    state["response"] = f"🔍 Searching for \"{user_q}\"... [fake search results]"
    return state

# Add nodes to the graph
workflow.add_node("classify_input", classify_input_node)
workflow.add_node("handle_greeting", handle_greeting_node)
workflow.add_node("handle_search", handle_search_node)
```

We now have three nodes in our graph, each with a clear job:

* `"classify_input"` reads the question and sets classification to `"greeting"` or `"search"`.
* `"handle_greeting"` prepares a friendly response if it was a greeting.
* `"handle_search"` simulates a search result response.

#### Step 3: Add Edges (including Conditional Edge)

We'll connect the nodes: start at `classify_input`, then branch to either greeting or search, and finally end the graph after handling:

```python
# Set up the start and end of the graph
workflow.add_edge(START, "classify_input")

# Conditional edge: after classify_input, decide where to go
def route_by_classification(state: GraphState) -> str:
    return "handle_greeting" if state.get("classification") == "greeting" else "handle_search"

workflow.add_conditional_edges(
    "classify_input",       # from this node
    route_by_classification, 
    {
        "handle_greeting": "handle_greeting",
        "handle_search": "handle_search"
    }
)

# After either handler, go to END
workflow.add_edge("handle_greeting", END)
workflow.add_edge("handle_search", END)
```

Now our graph's flow is fully defined:

```
START -> classify_input -> (conditional fork) -> handle_greeting or handle_search -> END.
```

#### Step 4: Compile and Run the Graph

Before running, we compile the graph into a Runnable:

```python
app = workflow.compile()
```

Compiling turns our graph definition into an executable object (`app`) that behaves like a function or chain. It supports methods like `.invoke()` to run it, `.stream()` for streaming output, etc., just like LangChain runnables `blog.langchain.dev`. Essentially, `app` is our assembled machine, ready to process input. Let's run a couple of tests:

```python
# Test with a greeting input
initial_state = {"question": "Hello there!", "classification": None, "response": None}
result_state = app.invoke(initial_state)
print(result_state["response"])  
# Expected output: "Hi there! You said: 'Hello there!'"

# Test with a search-like input
initial_state2 = {"question": "What is the weather today?", "classification": None, "response": None}
result_state2 = app.invoke(initial_state2)
print(result_state2["response"])
# Expected output: "🔍 Searching for \"What is the weather today?\"... [fake search results]"
```

We initialize the state with a question (leaving classification/response as `None`), then call the compiled `app`. The graph executes: classification node -> chooses a branch -> appropriate handler -> end. The final state's response contains our answer. Even in this simple example, you can see the power of LangGraph: it's straightforward to add more branches or steps. For instance, if we wanted to add a node for handling "farewell" messages, we could classify those and extend the conditional mapping – all while keeping the logic organized in separate nodes. (Aside: In a real scenario, the classify() might be an AI model call, and `handle_search_node` might actually call an external search API or tool. LangGraph can accommodate that easily – which brings us to tools!)

## Tools (External Abilities for Your AI)

One of the exciting parts of modern AI agents is their ability to use tools – performing actions like web search, calculations, database queries, etc., as part of answering a question. In LangChain (and LangGraph), a tool is typically a function or an API wrapper that the AI can call. For example, a tool might be a function `get_weather(city: str) -> str` that returns weather info, or `search_web(query: str) -> str` that returns top search results. Tools extend what your AI can do beyond just reasoning with text; they let it take actions in the world or fetch fresh information. In LangGraph, tools are integrated as special nodes or via a dedicated component called `ToolNode`. Conceptually, you can think of a tool as an external device or machine our assembly line can use at a station. If each node is a worker, a "tool" is like that worker picking up a telephone to call an expert, or using a calculator, or googling something, then coming back with the result and writing it on the whiteboard (state). You can add tools to a LangGraph in two ways:

1. **Directly as Node actions**: You could have a node function that calls an external API or function (like inside `handle_search_node` above, we could have made it call a real search API).
2. **Via a ToolNode (recommended for complex agents)**: A `ToolNode` is a provided utility that handles multiple tools and works closely with an LLM that can decide which tool to use.

Let’s discuss the `ToolNode` approach, as it's a core concept in LangGraph for agents.

### ToolNode (The Swiss Army Knife Node for Tools)

A `ToolNode` is a special LangGraph node that is designed to invoke tools based on the AI’s requests. It’s essentially a wrapper around one or more tool functions, and it's built to parse the AI's intention to use a tool and execute the appropriate one. In fact, the `ToolNode` is implemented as a LangChain Runnable that takes the graph state (with a message list) as input and outputs an updated state with tool results `langchain-ai.github.io`. That was a mouthful – let's break it down with an analogy and a bit of technical detail:

**Analogy**: Imagine on our assembly line we have a station that doesn't do just one thing, but can operate any tool in a toolbox depending on what’s needed. The worker at this station reads the whiteboard (state) and if they see a note like "I need to use the search tool with query X", they’ll pick up the Search tool and use it; if instead there's a note "I need to calculate Y+Z", they'll pick up the Calculator tool. This station then writes the result of that tool back onto the whiteboard. That's what `ToolNode` does – it's a flexible station that can perform any of a set of tools depending on what the AI (LLM) has requested.

**Under the hood**: When using LangGraph to build an agent, typically the AI model (LLM) will output a special message indicating a tool request (for example, "use `search_web` with argument XYZ"). LangGraph captures this in the state as a `ToolMessage` or as part of the messages list. The `ToolNode` sees that and knows "Ah, the AI wants to call `search_web`". It then calls the actual `search_web` Python function, gets the result, and returns a new message (a `ToolMessage`) with the result. The state is updated with this `ToolMessage`, and then the flow usually goes back to the AI model node to incorporate that result and continue the conversation.

Practically, to use `ToolNode`, you do something like:

```python
from langgraph.prebuilt import ToolNode

# Define some tools (simple functions)
def search_web(query: str) -> str:
    # ... implement actual search or dummy result
    return f"Results for '{query}' ..."

def get_weather(location: str) -> str:
    # ... call real API or dummy result
    return f"The weather in {location} is sunny."

tools = [search_web, get_weather]  # list of tool functions

# Create a ToolNode with these tools
tool_node = ToolNode(tools)
workflow.add_node("tool_handler", tool_node)
```

Now we have a node `"tool_handler"` that can execute either `search_web` or `get_weather` based on what the LLM asks for. We’d integrate this node into the graph such that when the AI’s reasoning indicates a tool use, the graph transitions to this `tool_handler` node. Typically, this is done with a conditional edge after the AI node, e.g., if `model_output == "tool_call"`, go to `tool_handler`; if `model_output == "done"`, go to `END`. In fact, the LangGraph prebuilt ReAct agent sets up exactly that: a loop where the AI node decides to act or finish, and the `ToolNode` carries out tool actions in that loop `langchain-ai.github.io` `langchain-ai.github.io`. The key point is: `ToolNode` simplifies tool execution. You hand it your list of available tools, and it figures out which one to run at runtime. It also handles formatting the tool call results into the state. Under the hood, it's leveraging LangChain's tool and message system – for instance, creating `ToolMessage` objects that store the tool’s output and which tool was used. To summarize in plainer terms: `ToolNode` is like giving your LangGraph agent a "helper" that automatically uses any tool the AI asks for, and puts the result back into the conversation. This frees you from writing a lot of boilerplate to check which tool to call and to call it. If you’re building an agent that uses tools (like a chatbot that can search or do math on demand), you'll likely have a `ToolNode` in your graph.

### StateGraph and Runnable (Putting the Graph to Work)

We’ve been using the term `StateGraph` already – this is the main class in LangGraph that we use to construct our graph. When we do `workflow = StateGraph(GraphState)`, we’re initializing a new graph with a given state schema. Think of `StateGraph` as the engineer’s drawing board where you lay out nodes and edges. It's responsible for holding the graph structure as you build it. After adding all our nodes and edges, we call `workflow.compile()`. This step finalizes the graph into a Runnable form (often just called `app` or similar). A Runnable in LangGraph/LangChain is an object you can actually execute – it has methods like `invoke()` to run it with a given input state, or `stream()` to get step-by-step outputs. Internally, the Runnable is orchestrating the execution of your nodes in the order defined by the graph, managing the state as it goes. You can think of the compiled graph (the Runnable) as the assembled machine ready to do work. Before compiling, you had a pile of parts (nodes, edges, tools) and a blueprint (`StateGraph`) for how to connect them. After compiling, you have a functioning machine. As the LangChain team puts it, `workflow.compile()` produces a Runnable that you can invoke, stream, batch, etc., just like any chain or pipeline `realpython.com`. In other words, your graph becomes as easy to use as a regular function call – but under the hood, it's doing a lot of complex orchestration! One neat thing is that you can visualize a `StateGraph` before or after compiling. LangGraph provides methods (as seen in some tutorials) to output a diagram (often via Mermaid). These diagrams help you see nodes (as boxes) and edges (as arrows, with dotted lines for conditionals) to verify the flow is as you expect. It's a great way to debug or explain your workflow.

### Messages: Human, AI, Tool, System, etc. (The Conversation History)

Finally, let's talk about messages. In many AI agent scenarios – especially conversational agents – part of the state includes a history of messages. This is how the context of a conversation is maintained. LangGraph leverages LangChain’s message objects to represent this history in a structured way. In LangChain (and by extension LangGraph), messages come in different flavors (classes), mainly:

* **HumanMessage** – a message from the human/user (equivalent to a user query or prompt) `python.langchain.com`.
* **AIMessage** – a message from the AI/assistant model (the model’s response in the conversation) `python.langchain.com`.
* **SystemMessage** – a message that sets context or instructions for the AI (e.g., "You are a helpful assistant..." prompt) `python.langchain.com`.
* **ToolMessage** – a message representing a tool’s result (kind of like a special assistant message that comes from executing a tool) `python.langchain.com`.
* **FunctionMessage** – (in OpenAI’s API, this is used to represent a function call result; LangChain has a legacy `FunctionMessage` class, but newer versions often just use `ToolMessage` for tool outputs) `python.langchain.com`.

LangGraph often uses a list of messages in the state to keep track of the dialogue or sequence of actions. For example, the state might have a key `messages` which is a list containing a `SystemMessage` (initial instruction), then a `HumanMessage` (user question), then an `AIMessage` (model’s answer or tool request), then maybe a `ToolMessage` (result of a tool), and so on. Managing this list properly is important for the LLM to have the full context each time it generates a new output. When you use a prebuilt agent or the `ToolNode` in LangGraph, it automatically handles appending messages. For instance, when the AI produces a tool request, LangGraph will append an `AIMessage` that includes a tool\_call, and after the tool is executed by `ToolNode`, it appends a `ToolMessage` with the result. Then the flow usually goes back to the AI node, which sees all these messages (including the tool result) and can generate a final answer or decide to use another tool. Think of the `messages` list as the transcript or memory of the conversation/decision process. Each message object carries who said/did what:

* A `HumanMessage` might contain: `content="What's the weather?"` (from the user).
* A `SystemMessage` might contain instructions like `content="You are a weather bot."`.
* An `AIMessage` might contain: `content="[Tool: get_weather] {"location": "Paris"}"` indicating the AI wants to call a `get_weather` tool with "Paris".
* A `ToolMessage` would then contain the actual result of that call, e.g. `content="It's 15°C and sunny in Paris.", name="get_weather"`.
* Another `AIMessage` might then be the assistant using that info to answer the user, `content="The weather in Paris is 15°C and sunny right now."`.

LangGraph's design encourages using messages because it's a robust way to keep track of interactions, especially when the AI might go through several thinking/acting steps before final output. By separating roles (human vs AI vs tool) in the message list, the model can differentiate what each piece of information is (e.g., it knows which text came from a human vs what came from a tool result). When building your own LangGraph, if you're doing a conversational agent, you'll likely use a provided `MessagesState` or simply include `messages: list` in your `GraphState` (often annotated to automatically handle appends). The message types listed above come from LangChain’s schema `python.langchain.com`, so you're reusing a well-defined format for conversation. To recap messages: This is how LangGraph (and LangChain) keeps track of the dialogue. Human, AI, System, Tool messages each play a role – system sets the stage, human provides input, AI does reasoning or tool requests, tool messages feed results back, and AI (assistant) ultimately produces a response. As a LangGraph developer, you mostly set up the initial messages and let the framework append new ones as the graph runs. Just ensure your state has a `messages` field if you're using tools or multi-step reasoning, since `ToolNode` specifically expects `state["messages"]` to exist to do its job `langchain-ai.github.io`.

## Conclusion

In this blog post, we started from the ground up: reviewing Python basics like dictionaries (and why `TypedDict`s are awesome for avoiding mistakes), union/optional types for flexibility in our data, and lambda functions for quick inline logic. These building blocks set the stage for understanding LangGraph. We then took a tour of LangGraph’s core concepts:

* **State**: the evolving data (our whiteboard) that carries information through the agent’s reasoning process.
* **Nodes**: the actions or steps (stations on the assembly line) that read and update the state.
* **Graph & Edges**: the overall workflow structure (the map/conveyor system) connecting nodes, including conditional edges for dynamic branching (the IF/ELSE forks).
* **START/END**: special markers to kick off and stop the graph (entry and exit points of our workflow).
* **Tools & ToolNode**: the way to give our AI agent extra powers (phone-a-friend). Tools are functions the AI can call, and `ToolNode` is the nifty mechanism to route and execute those tool calls seamlessly within the graph.
* **StateGraph & Runnable**: how we define the graph in code and then compile it into an executable form we can run like a regular function call.
* **Messages**: the structured record of conversation and actions, allowing complex interactions with proper context (distinguishing user inputs, AI outputs, and tool results).

Throughout, we used analogies like whiteboards and assembly lines to make these ideas more tangible. We also walked through a simple example of a greeting/search classifier agent, showing actual code snippets of how nodes and edges come together in LangGraph. Where to go from here? With these basics under your belt, you can start experimenting with LangGraph. Try extending the example – maybe add a new branch, or integrate a real API as a tool. LangGraph shines as things get more complex (multiple tools, loops of reasoning, etc.), so don’t be afraid to dream up an advanced workflow. Because LangGraph is built on LangChain, you have a whole ecosystem of LLMs and tools at your disposal. Most importantly, keep that mental model in mind: state is your source of truth, nodes are the thinkers/doers, and the graph is the game plan that decides which thinker goes next (with conditional twists and turns as needed). With that, you're well on your way to building intelligent, stateful AI agents! Happy hacking with LangGraph 🚀.

## References

* Real Python – LangGraph: Build Stateful AI Agents in Python
  realpython.com
* LangChain/LangGraph Documentation – LangGraph Introduction and Concepts
  medium.com
* LangChain Documentation – Messages in LangChain
  python.langchain.com
