> **Sector:** Automation / Computer Vision &nbsp;·&nbsp; **Type:** Vision-Based UI Automation + AI Agent

## Executive Summary

Developed a **vision-based desktop UI automation system** that interacts with interface elements using visual understanding and OCR rather than traditional selectors, DOM inspection, or accessibility APIs. By treating automation as a perception problem — "where is the target element, and how confident are we?" — the system extends automation coverage to environments where conventional RPA approaches break down.

---

## Business Context

Conventional desktop automation relies on stable, inspectable UI structures:
- Accessibility tree APIs
- Element selectors (XPath, CSS-equivalent for desktop)
- Hardcoded window coordinates

These work well for well-structured, modern applications. They break on:
- Legacy enterprise applications with non-inspectable UI rendering
- Remote desktop environments where accessibility APIs are unavailable
- Applications that render interfaces as visual surfaces rather than accessible element trees
- Workflows across multiple applications where each uses different automation approaches
- Dynamic layouts where element positions shift across sessions

For many organizations, these are exactly the applications that most need automation. The inability to automate them locks humans into repetitive, high-volume, low-value workflows.

---

## Problem Statement

The target automation environment consisted of desktop applications where:
- UI element trees were incomplete or inaccessible
- Selectors were unavailable or unstable across sessions
- Interfaces rendered as visual surfaces rather than structured element hierarchies
- Traditional RPA tools required custom plugins or failed entirely

The business need was clear — these workflows needed automation — but the technical path through conventional RPA was blocked. The solution had to work from **what is visible on screen**, not from what is structurally accessible.

---

## Objectives & Success Criteria

- Automate interactions with UI elements using visual targeting alone
- Handle element position variation across sessions without breaking
- Support common automation actions: click, type, read, navigate, extract
- Maintain confidence-aware behavior — avoid risky actions when target certainty is low
- Work across multiple application types without per-application configuration

---

## Constraints & Requirements

- No reliable access to element trees or accessibility APIs
- Screen content varies with session state, application version, and window sizing
- OCR accuracy on desktop UIs is imperfect — must handle noise gracefully
- Automation must be fault-tolerant: a failed element identification should not cause downstream data corruption
- Latency requirements for workflows expected to run interactively

---

## Solution Overview

Designed a **perception-driven automation system** with four core layers: screen capture, visual perception, element matching and anchoring, and action execution. The system replaces "find the element by selector" with "find the element by visual context and confidence score."

The critical design principle: every action requires meeting a confidence threshold. The system does not act on low-certainty identifications — it either retries with refined targeting or escalates to human review.

---

## System Architecture

```
Automation Workflow Definition
     │
     ▼
Screen Capture Layer
(full-screen or region capture at action trigger points)
     │
     ▼
Perception Layer
├─ OCR extraction (PaddleOCR, Tesseract)
├─ Visual region analysis
└─ Layout segmentation (button / input / label / table)
     │
     ▼
Matching & Anchoring Layer
├─ Target text fuzzy matching
├─ Spatial anchor resolution (element relative to landmark)
├─ Confidence scoring per candidate
└─ Multi-candidate ranking
     │
     ▼
Decision Layer
├─ Confidence threshold check
├─ Retry with refined capture on low confidence
└─ Escalation flag on persistent failure
     │
     ▼
Action Execution Layer
(click / type / scroll / extract / navigate)
     │
     ▼
Verification Layer
(post-action screen comparison for confirmation)
```

**Core components:**

1. **Screen Capture** — Region-aware capture to focus perception on relevant UI areas, reducing noise
2. **Perception Layer** — Multi-engine OCR + visual analysis for text and layout understanding
3. **Matching & Anchoring** — Fuzzy text matching with spatial context anchoring (button near label text, field below header) to handle position variation
4. **Confidence Decision** — All actions gated by confidence thresholds; low-confidence cases trigger retry or escalation
5. **Post-Action Verification** — Screen state comparison after each action to confirm expected result before proceeding

---

## Technical Highlights

- Vision-only UI targeting without selector or accessibility tree dependency
- Multi-engine OCR pipeline (PaddleOCR + Tesseract) with adaptive routing
- Fuzzy text matching with spatial anchor resolution for position-variant interfaces
- Confidence-weighted candidate ranking before action execution
- Confidence threshold gating: action blocked below threshold, retry initiated
- Post-action verification layer to detect failed interactions before downstream steps
- Region-scoped capture to reduce OCR noise and improve matching precision
- Support for action types: click, double-click, right-click, type, scroll, extract, wait

---

## Challenges Solved

### Non-Deterministic Layout Across Sessions

Desktop applications frequently shift element positions across sessions — different screen resolutions, maximized vs. windowed state, dynamic content loading. Coordinate-based targeting fails under these conditions.

Spatial anchor resolution solved this: instead of targeting an element at (x=340, y=210), the system identifies "the input field to the right of the 'Username' label" — a relationship that remains stable even when absolute positions change.

### Imperfect OCR on UI Surfaces

Desktop UIs are not designed for OCR. Small fonts, anti-aliasing, background gradients, and overlapping elements produce imperfect OCR output. The matching layer used fuzzy matching with configurable similarity thresholds to handle minor character errors without breaking the automation.

### Acting Safely Under Uncertainty

Unlike a human who knows when they are confused, an automation system can confidently perform the wrong action. The confidence threshold design ensured the system escalated uncertainty rather than acting on it. Post-action verification added a second safety layer by confirming expected UI state changes after each interaction.

---

## Outcome

The system demonstrated a viable path to **AI-powered desktop automation** for environments where traditional RPA methods are inapplicable. Key outcomes:

- Automated workflows in legacy application environments previously considered "unautomatable"
- Stable operation across session-to-session layout variation
- Confidence-aware failure handling that avoided data corruption from incorrect element targeting
- Reusable vision automation framework applicable across multiple application types

---

## Lessons Learned

- Spatial anchoring (element relative to landmark) is far more robust than coordinate targeting for desktop automation
- Fuzzy matching must be tuned per domain — too loose produces false matches, too strict breaks on OCR noise
- Post-action verification is non-negotiable for any automation touching operational data
- Confidence thresholds require calibration per action type — clicking the wrong button carries different risk than reading the wrong label
- Region-scoped capture dramatically improves OCR accuracy compared to full-screen extraction

---

## Future Roadmap

- LLM-guided workflow orchestration: describe a multi-step task, system plans and executes
- Adaptive threshold calibration based on per-application performance history
- Screen recording replay for debugging failed automation runs
- Cross-platform support (Linux, macOS) with platform-appropriate capture APIs
