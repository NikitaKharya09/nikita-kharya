export const responses = {
  coreProblem: {
    quick: "LLM explanations are long text walls. Humans miss errors. We made them interactive. 10% accuracy boost.",
    
    medium: `**The LLM Verification Problem**

Traditional Chain-of-Thought = walls of text.

The Problem:
- 1000+ token explanations
- Subtle errors invisible
- Cognitive overload
- 39% lower accuracy

Solution: Interactive interfaces that help humans catch mistakes.`,

    detailed: `**The LLM Verification Problem**

Traditional Chain-of-Thought explanations are "walls of text"—long, dense, hard to parse.

The Problem:
- LLMs generate 1000+ token explanations
- Humans can't detect subtle errors
- Cognitive overload makes verification slow
- Mistakes look plausible

The Impact:
- Can't trust AI in high-stakes domains
- Users miss critical errors
- Over-reliance on wrong answers
- 39% lower error detection

This matters in education, finance, healthcare—anywhere wrong answers cost.

[Try the demo →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`
  },

  iGraph: {
    quick: "iGraph = reasoning as flowchart. Nodes = steps, edges = logic. 72% accuracy vs 61% text. Visual > linear.",
    
    medium: `**iGraph: Interactive Graph Visualization**

Your LLM reasoning as a flowchart:
- Nodes = reasoning steps
- Edges = logical connections
- Color-coded variables
- Left-to-right flow

Result: 72% accuracy vs 61% with text.
Visual reasoning flow = faster error detection.

[Try it →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`,

    detailed: `**iGraph: Reasoning as Visual Flow**

Traditional CoT gives you paragraphs. iGraph gives you a map.

How It Works:
1. **Nodes**: Each circle = one reasoning step
   - Problem variables (inputs)
   - Intermediate calculations
   - Final results

2. **Edges**: Arrows show dependencies
   - What depends on what?
   - Data flow visualization
   - Logical progression

3. **Interactive Features**:
   • Hover to see full step details
   • Color-coded variables (consistent across graph)
   • Left-to-right temporal flow
   • Dual-panel: problem | solution

Why It Wins:
- 72% accuracy (vs 61% text)
- 18 seconds faster per problem
- 85% user satisfaction
- Errors visually "jump out"

The key insight: 2D spatial layout > linear text for tracing logic.

[Try iGraph demo →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment) | [Read paper →](https://arxiv.org/abs/2510.22922)`
  },

  // Add more responses following the templates in RESEARCH_NODE_RESPONSES.md
  // For brevity, showing structure only
  
  results: { quick: "...", medium: "...", detailed: "..." },
  applications: { quick: "...", medium: "...", detailed: "..." },
  personalStory: { quick: "...", medium: "...", detailed: "..." },
  demo: { quick: "...", medium: "...", detailed: "..." },
  // ... etc
};
