# Prompt Engineering 101: Best Practices for Crafting Effective Queries
![Prompt engineering 101](/prompt-engineering-101.png)
Large Language Models (LLMs) like OpenAI’s **GPT-4**, Meta’s **LLaMA 3**, and Google DeepMind’s **Gemma** have opened up new possibilities – but getting the best results from them isn’t as simple as asking a question. This is where **prompt engineering** comes in. In this post, we’ll demystify prompt engineering fundamentals and explore key techniques (chain-of-thought, few-shot, zero-shot, role-based prompts, instruction tuning) with examples. The goal is to help developers, students, and professionals craft queries that these models understand and respond to effectively. We’ll also compare how these techniques perform across GPT-4, LLaMA 3, and Gemma. The tone here is casual and instructional – think of it as a friendly guide to communicating with your AI partner.

## What is Prompt Engineering?

Prompt engineering (also known as *in-context prompting*) is the art/science of communicating with an AI model to steer its behavior **without changing the model’s code or weights**. Instead of writing traditional code, we “program” the model by carefully phrasing our input (the *prompt*). A well-crafted prompt can mean the difference between a brilliant answer and a nonsensical one. Prompt engineering is highly empirical – what works well on one model might not work on another, so it often requires experimentation and tweaking.

At its core, prompt engineering is about aligning the model’s output with our intent. We give the model context, instructions, or examples in the prompt to guide its response. In practice, this involves techniques like providing examples of the task, asking the model to think step-by-step, or setting a role or persona for the response. In the sections below, we’ll break down the most commonly used prompt techniques and how to apply them.

*(Note: Throughout this post, we’ll refer to GPT-4, LLaMA 3, and Gemma as our example models. GPT-4 is a state-of-the-art closed model known for its strong capabilities, LLaMA 3 is an advanced open model from Meta, and Gemma is a lightweight open model (2B–7B parameters) from Google DeepMind designed with Gemini’s tech.)*

## Zero-Shot vs Few-Shot Prompting

**Zero-shot prompting** is the simplest approach: you just ask the question or give the task **with no examples or extra guidance**. The model has to figure out what you want from the query alone. For example, a zero-shot prompt might be:

```
Translate the following sentence to French:
Good morning, how are you?
```

and the model hopefully outputs a reasonable translation.

**Few-shot prompting** means you provide a few **demonstration examples** in your prompt to show the model exactly what you expect. Essentially, you’re *pre-training on the fly* by giving input-output pairs for similar tasks. This helps the model understand the format or approach required. For instance:

```
Text: (lawrence bounces) all over the stage, dancing, running, sweating, mopping his face and generally displaying the wacky talent that brought him fame in the first place.
Sentiment: positive

Text: despite all evidence to the contrary, this clunker has somehow managed to pose as an actual feature movie, the kind that charges full admission and gets hyped on tv and purports to amuse small children and ostensible adults.
Sentiment: negative

Text: for the first time in years, de niro digs deep emotionally, perhaps because he's been stirred by the powerful work of his co-stars.
Sentiment: positive

Text: i'll bet the video game is a lot more fun than the film.
Sentiment:

```

Few-shot prompting often leads to better performance on complex tasks than zero-shot prompting, at the cost of a longer prompt.



## Chain-of-Thought Prompting (CoT)

Sometimes, you want the AI to **show its work**. **Chain-of-thought prompting** encourages the model to generate a *step-by-step reasoning process* before giving the final answer. This approach is great for complex problems: math word problems, logical reasoning puzzles, multi-step decision making, etc.

> **Example**:
>
> **Prompt (CoT):**  
> “A farmer has 15 apples. He gives 6 to his friend and eats 2. How many apples remain? Think step by step.”

This often produces:

1. The farmer starts with 15 apples.  
2. He gives 6 to his friend: 15 - 6 = 9.  
3. He eats 2: 9 - 2 = 7.  
4. **Answer:** 7 apples remain.

Chain-of-thought prompting can significantly improve accuracy on complex tasks by making the reasoning **explicit and transparent**. However, it does make the response longer and may not be necessary for simple queries.

![Chain of Thought Diagram](/cot_diagram.png)

## Role-Based Prompting (Persona Prompts)

Another powerful technique is **role-based prompting** – giving the model a specific role or persona to adopt. This often starts with:

```
You are a friendly chef. Explain how to make an omelette.
```

By assigning a role, you provide context that shapes tone, style, or domain knowledge.

> **Prompt (Role-Based):**  
> “You are a seasoned cybersecurity expert. Explain multi-factor authentication to a non-technical audience.”

Role-based prompts are extremely useful for tailoring the style of the response to specific audiences.

## Instruction Tuning and Why It Matters

Modern models like GPT-4 and Gemma-Instruct have been **instruction-tuned**: fine-tuned on example tasks paired with human feedback to follow instructions in natural language. This means you can often get great results just by writing a clear instruction of what you want:

```
Summarize the following article in one paragraph focusing on climate change impacts.
```

Instruction tuning makes our lives easier: a direct imperative is usually sufficient. The key is to **be clear and specific** in your instructions.

## Comparing Techniques Across Models

| Technique                | GPT-4                                             | LLaMA 3                                         | Gemma (2B/7B)                                |
|--------------------------|---------------------------------------------------|-------------------------------------------------|----------------------------------------------|
| Zero-Shot                | Excels at zero-shot. Often produces correct and detailed answers with no examples needed, thanks to extensive training and alignment. E.g. ask a question plainly, GPT-4 usually handles it.                | Good performance on straightforward queries, especially if using an instruction-tuned/chat version. The base model may need format cues. Likely answers simple questions well, but maybe not as thoroughly as GPT-4. | Can handle simple tasks zero-shot, especially with the Instruct model. However, answers may be shorter or less nuanced due to smaller knowledge capacity. Complex queries might get shallow answers unless further guided.      |
| Few-Shot                 | Improves consistency or format adherence when needed, though GPT-4 might not need it for many tasks. Few-shot can help steer style or teach the model a very specific task format. Uses more context but GPT-4 has a large context window (up to 128K in GPT-4 Turbo!).     | Beneficial for tasks where the model might be unsure or to provide a pattern. With LLaMA 3, a couple of examples can boost performance on reasoning or specialized format tasks. However, limited context length (likely 4K-16K) means you can’t overdo it.         | Often very helpful. Being a smaller model, Gemma gains a lot from good examples. Few-shot demonstrations can significantly improve its performance on tasks it otherwise struggles with (e.g. multi-step reasoning, unfamiliar formats). Just watch the context length (Gemma supports up to 8192 tokens context, which is quite decent).          |
| Chain-of-Thought (CoT)   | GPT-4 can do CoT brilliantly and generally doesn’t need it to get the right answer, but if you want the reasoning or need to ensure it thoroughly checks a complex problem, CoT is effective. It will dutifully produce step-by-step explanations if asked, usually correct. CoT rarely hurts GPT-4 except making responses longer (it’s a “reasoning-tuned” model).                   | LLaMA 3’s performance with CoT will depend on its training. If it’s not specifically tuned for reasoning, CoT instructions (“think step by step”) can greatly help it solve logic/math problems. Larger LLaMA models (e.g. 70B) have shown decent CoT abilities; we can expect LLaMA 3 to continue that trend. Smaller LLaMa variants might still struggle with CoT correctness, but will attempt it.                      | Gemma (7B) benefits significantly from CoT prompting on reasoning tasks. It won’t magically turn Gemma into a genius, but it guides the model to break down problems. Example: Gemma can enumerate steps for “why is the sky blue” or simple math, as shown in its demo. Without CoT, it might jump to an answer and potentially err. With CoT, it at least tries a logical route. Keep expectations reasonable: it’s not as advanced as GPT-4, so its “thoughts” might still miss the mark on very hard puzzles.         |
| Role-Based               | Extremely effective. GPT-4 adapts tone/register expertly to given roles. Set a role in the system or user prompt (“You are a humorous storyteller…”) and it will usually produce a fitting response. Does not improve factual accuracy per se, but will change style and approach. Great for customizing output for different audiences.                             | Effective for guided style/tone. LLaMA 3 chat models likely incorporate system prompts for roles. It might not be as nuanced as GPT-4 in imitating highly specialized personas, but it will follow the general instruction (especially for common roles like teacher, doctor, engineer). Role prompts help focus its domain knowledge if relevant data was in training (e.g. “As a medical expert…” might make it pull more medical-sounding info).                              | Works for steering style and level of explanation. As demonstrated, Gemma can take on a “2nd-grade teacher” role and simplify answers. Smaller models have less world knowledge, so extremely specific roles (e.g. “You are Dr. John Smith, a leading researcher in quantum thermodynamics…”) won’t give it actual new knowledge, but it will attempt the style. Role prompting in Gemma is mainly useful to adjust reading level, tone, or context focus.                   |
| Instruction Following    | Very high. GPT-4 was built to follow user instructions closely while staying within safe bounds. It excels at understanding even complex, nuanced instructions (and can handle multi-step or multi-constraint instructions in one go). You can usually just tell it exactly what you need, and it will comply if possible.                               | High (for the chat-tuned model). LLaMA 3’s instruct model would be fine-tuned to follow plain directives well. It might occasionally require more direct phrasing or simple language for best results (less “clever” instruction parsing than GPT-4). But overall, it should follow tasks given clearly. Possibly less constrained by safety than GPT-4 (depending on how Meta tunes it) – meaning it might follow even questionable instructions, so users need to exercise caution.                          | Moderate to High (for Gemma Instruct). Gemma was RLHF-trained to follow instructions, so it behaves like a polite assistant for straightforward requests. It will do its best on clear tasks. However, given its smaller brain, it might misunderstand complex instructions or miss subtle details more often than the bigger models. It’s also English-only, so it won’t follow instructions in other languages. For best results, keep instructions simple and unambiguous with Gemma.  |

## Best Practices for Effective Prompts

1. **Be Clear and Specific:** State exactly what you want.
2. **Provide Context:** Anchor the model with background information.
3. **Break Down Complex Tasks:** Use CoT or sub-questions.
4. **Use Examples if Needed:** Few-shot for format or style.
5. **Leverage Roles and Tone:** “Explain like I’m five” or “formal report.”
6. **Avoid Negations When Possible:** Prefer positive instructions.
7. **Iterate and Refine:** Treat prompts as experiments.
8. **Mind Model Limits:** Knowledge cutoff, context length, languages.
9. **Stay Within Policies:** Respect model safety constraints.

Prompt engineering is both an art and a science. By mastering these techniques, you can effectively “program” LLMs to serve as powerful assistants, advisors, or creative partners. Happy prompting!

