import React, { useState, useEffect, useRef } from 'react';
import { Brain, Send, Sparkles, Network, Mail, Linkedin, Download, MapPin, Award, Compass, Briefcase, BookOpen, Rocket, ChevronRight, Layers, Zap, Code, Database, GitBranch } from 'lucide-react';

// ============================================================================
// KNOWLEDGE BASES FOR AI ASSISTANT 
// ============================================================================

const EXPERIENCE_KNOWLEDGE = {
  meta: {
    nodeName: "Experience & Skills",
    totalYears: 12,
    currentTitle: "Vice President, UI Engineering & Architecture",
    currentCompany: "Morgan Stanley"
  },

  careerSummary: {
    headline: "Creative and impact-driven Front-End Architect with 12+ years of experience",
    industries: ["Healthcare", "Telecom", "Banking", "Cloud Computing", "Fintech"],
    specializations: ["Enterprise-grade web applications", "Modern UI engineering", "AI-forward design strategies", "Cross-team leadership"],
    keyTheme: "Elevating product value through modern UI engineering and AI-augmented development"
  },

  currentRole: {
    company: "Morgan Stanley",
    title: "Vice President, UI Engineering & Architecture",
    period: "October 2023 - Present",
    teamSize: 8,
    
    aiSquadCatalyst: {
      title: "AI Squad Catalyst",
      selectionType: "Peer leader selection",
      mission: "Guide squad into agent-native GenAI development",
      philosophy: "AI isn't just a tool—it's the architectural foundation",
      impact: "Scaling AI-accelerated workflows across entire squad"
    },

    majorProjects: [
      {
        name: "One UI Platform",
        description: "Consolidated three major applications into a unified workflow",
        metrics: { timeSaved: "33+ hours saved daily", processingTime: "25 min → 15 min per account", accountsProcessed: "~200 accounts" },
        technologies: ["React 18", "TypeScript", "GraphQL"]
      },
      {
        name: "AI-Accelerated Development Framework",
        metrics: { speedup: "10x faster", oldTimeline: "3 weeks", newTimeline: "2 days" },
        impact: "Compressed multi-week development cycles into hours/days"
      },
      {
        name: "Enterprise Compliance Platform",
        status: "Firm-wide standard",
        impact: "Eliminated compliance gaps across multiple business domains"
      }
    ],

    technologies: ["React", "TypeScript", "GraphQL", "AI/LLM Integration", "Micro-Frontends", "Agent-Native Development"]
  },

  previousRoles: [
    {
      company: "VMware",
      title: "Member of Technical Staff 3",
      period: "May 2022 - July 2023",
      achievements: ["Modernized CloudHealth UI through React migration", "Built UI-as-a-Service library serving 8+ teams", "POC showed 35% reduction in analysis time"],
      technologies: ["React", "TypeScript", "UIaaS", "Multi-Cloud", "D3.js"],
      keyLearning: "Component libraries are products, not side projects"
    },
    {
      company: "Deutsche Bank",
      title: "Assistant Vice President",
      period: "February 2019 - May 2022",
      teamSize: 6,
      achievements: ["Led transaction monitoring platform UI", "Built config-driven framework where JSON schemas generate UIs", "Reduced manual compliance review risk"],
      technologies: ["React", "TypeScript", "Config-Driven UI", "Compliance Tech"],
      keyLearning: "Configuration beats customization at scale"
    },
    {
      company: "Accenture",
      title: "Senior Software Engineer",
      period: "2017 - 2019",
      achievements: ["Led AngularJS → Angular migration with zero defects", "Multi-client delivery across telecom and banking"],
      technologies: ["Angular", "TypeScript", "UX Design"],
      keyLearning: "Migration strategy > migration speed"
    },
    {
      company: "Cognizant",
      title: "Associate",
      period: "2013 - 2017",
      achievements: ["Built 3 healthcare applications end-to-end", "Solo developer with full ownership"],
      technologies: ["JavaScript", "HTML5", "CSS3", "AngularJS"],
      keyLearning: "User needs trump technical elegance"
    }
  ],

  technicalExpertise: {
    frontend: ["React", "TypeScript", "Redux", "MobX", "Angular", "React Native", "Material UI", "HTML5", "CSS3/SASS", "Web Components", "WCAG Accessibility", "Responsive Design"],
    architecture: ["Micro-Frontends", "GraphQL", "REST APIs", "Config-Driven Architecture", "Component Libraries", "BFF Patterns", "CI/CD", "Docker"],
    aiUI: ["LLM-Driven Flows", "AI-Assisted Development", "Reasoning Visualization", "Prompt Engineering", "Human-AI Verification", "Interactive D3.js"],
    leadership: ["Team Management", "Technical Mentorship", "Cross-Domain Collaboration", "Agile/Scrum", "Product Strategy", "Stakeholder Management"]
  },

  achievements: {
    metrics: [
      { metric: "Time Saved", value: "33+ hours daily", project: "One UI Platform" },
      { metric: "Development Speedup", value: "10x", project: "AI Framework" },
      { metric: "Migration Quality", value: "Zero defects", project: "Angular Migration" },
      { metric: "Workflow Improvement", value: "35% faster", project: "CloudHealth UIaaS" }
    ]
  }
};

const RESEARCH_KNOWLEDGE = {
  meta: {
    nodeName: "Research",
    focus: "AI Transparency & Human-AI Interaction",
    status: "Published Author & Active Researcher"
  },

  publication: {
    title: "When AI Reasoning Meets Interface Design",
    year: 2024,
    type: "Independent Research",
    
    problemStatement: {
      challenge: "AI explanations are text walls that users cannot verify",
      issues: ["Users can't verify AI reasoning", "Error detection is difficult", "Black box decision-making", "Compliance and trust issues"]
    },

    solution: {
      name: "iGraph Visualization System",
      tagline: "Turning 'trust me' AI into 'let me show you' AI",
      concept: "Structured reasoning visualization that makes AI transparent",
      methodology: ["Tag AI reasoning (facts, steps, calculations)", "Generate interactive graphs", "Enable visual path tracing", "Provide real-time verification"],
      architecture: ["Facts → Steps → Calculations → Results flow", "Interactive node graphs", "Error highlighting", "Cognitive load reduction"]
    }
  },

  iGraphSystem: {
    name: "iGraph",
    purpose: "Make AI reasoning transparent and verifiable",
    
    benefits: {
      transparency: "Complete visibility into AI decision-making",
      verification: "Users can verify each step of reasoning",
      errorDetection: "Visual errors are immediately obvious",
      trust: "Builds trust through explainability",
      compliance: "Meets regulatory requirements for AI transparency"
    }
  },

  productionDeployment: {
    organization: "Morgan Stanley",
    domain: "Compliance Verification Workflows",
    useCase: "When AI flags suspicious transactions, analysts see complete reasoning chain",
    impact: "Faster verification, reduced errors, improved regulatory compliance",
    realWorldValue: "Solving real problems in high-stakes finance, not academic"
  },

  researchPhilosophy: {
    belief: "Transparency isn't optional—it's how we build trustworthy AI",
    vision: "The future isn't AI that's smarter—it's AI we can understand and verify"
  }
};

const INNOVATION_KNOWLEDGE = {
  meta: {
    nodeName: "Innovation",
    focus: "Future of UI+AI Interactions",
    role: "AI Squad Catalyst guiding team into agent-native development"
  },

  agentNativeDevelopment: {
    name: "Agent-Native Development",
    tagline: "The next paradigm shift in software engineering",
    
    paradigmComparison: {
      traditional: { approach: "Humans write code", aiRole: "AI assists with autocomplete", aiPosition: "AI is a tool" },
      agentNative: { approach: "Humans guide, verify, orchestrate", aiRole: "AI agents are architectural components", aiPosition: "AI is the foundation, not a feature" }
    },

    implementation: {
      structuredLLMWorkflows: { description: "Compress multi-week cycles into days", results: "3 weeks → 2 days (10x speedup)" },
      verificationInterfaces: { description: "iGraph-style reasoning visualization", purpose: "Humans verify AI outputs" },
      selfOrganizingSystems: { description: "Systems that adapt and optimize themselves" }
    }
  },

  currentExperiments: [
    { name: "AI-Accelerated Development Framework", status: "Production at Morgan Stanley", description: "Structured LLM prompts that compress weeks into days" },
    { name: "Generative UI Systems", concept: "Interfaces that adapt and generate based on context" },
    { name: "Self-Organizing Dashboards", description: "UI that reorganizes based on usage patterns" },
    { name: "Intent-Driven Interfaces", concept: "Predict user goals and reconfigure interface accordingly" }
  ],

  futureVision: {
    timeframe: "5 years (2025-2030)",
    trends: [
      { name: "Adaptive Complexity", description: "Interfaces auto-adjust to user expertise" },
      { name: "Conversational Everything", description: "Forms die, natural language wins" },
      { name: "Predictive Surfaces", description: "UI appears before you search for it" },
      { name: "Explainable AI Everywhere", description: "Every AI decision has a reasoning graph" },
      { name: "Zero-State Design", description: "Apps build themselves from patterns" },
      { name: "Generative UI Systems", description: "AI creates interfaces on demand" }
    ],
    philosophy: "Future = intelligent simplification, not more features"
  },

  technicalStack: {
    frontend: ["React", "TypeScript", "Redux", "MobX", "Angular", "React Native", "Material UI"],
    architecture: ["Micro-Frontends", "GraphQL", "REST", "WebSockets", "BFF Architecture"],
    aiUI: ["LLM-driven Flows", "Prompt Engineering", "AI-Assisted Development", "Reasoning Visualization", "D3.js"],
    tools: ["Webpack", "Vite", "CI/CD", "Docker"],
    specializations: ["WCAG Accessibility", "Responsive Design", "Config-Driven Architecture"]
  }
};

const CANVAS_CODE_KNOWLEDGE = {
  meta: {
    nodeName: "Canvas & Code",
    focus: "Where art meets technology",
    theme: "Design philosophy, painting practice, and visual thinking"
  },

  designPhilosophy: {
    coreBeliefs: {
      primary: "Interfaces should amplify human intelligence, not replace it",
      principles: [
        "Code is craft, but outcomes are purpose",
        "AI should explain itself",
        "Configuration beats customization at scale",
        "Best UI is invisible",
        "Users focus on goals, not your interface"
      ],
      fundamentalTruth: "User needs trump technical elegance—every time"
    },

    designValues: {
      simplicity: "Complexity should be hidden, not eliminated",
      clarity: "Make the complex simple through design",
      purposeDriven: "Design for outcomes, not aesthetics",
      humanCentric: "Technology serves humans, not the other way around",
      transparency: "Show reasoning, don't hide complexity in black boxes"
    },

    approachToUI: {
      philosophy: "Design systems, not screens",
      focus: "UI craft + technical architecture + AI-driven intelligence"
    }
  },

  artAndCode: {
    connection: "Art and code are both acts of creation through constraint",
    
    parallels: {
      composition: "Both require seeing the whole while crafting the parts",
      iteration: "Both improve through continuous refinement",
      constraint: "Constraints drive creativity",
      craft: "Excellence comes from practiced skill"
    },

    philosophy: "Code is as much an art as painting—both require vision, craft, and care"
  },

  paintingPractice: {
    impact: "Painting trains the eye for visual balance, color harmony, negative space, and emotional impact",
    application: "These skills directly improve UI design",
    philosophy: "Art isn't separate from engineering—it's how I think about design"
  },

  designFrameworks: [
    {
      name: "Adaptive Cognitive Density",
      concept: "Interfaces that adjust information density based on user expertise",
      example: "Beginner sees 'Send Payment'. Expert sees 'Send | Schedule | Batch | API'."
    },
    {
      name: "AI-Assisted Navigation Loops",
      concept: "Navigation that learns patterns and suggests optimal paths"
    },
    {
      name: "Predictive UI Simplification",
      concept: "Interfaces that hide complexity until needed, predicted by AI"
    },
    {
      name: "Confidence Gradient Visual System",
      concept: "Visual cues showing AI confidence levels in real-time"
    }
  ],

  designPrinciples: [
    { principle: "The best UI is invisible", meaning: "Users should focus on their goals, not the interface" },
    { principle: "Simplicity is the ultimate sophistication", meaning: "Make complex things simple, not simple things complex" },
    { principle: "Design for outcomes, not aesthetics", meaning: "Beauty serves function, not the other way around" },
    { principle: "Show, don't hide", meaning: "Make system state visible and understandable" },
    { principle: "Systems should adapt to users", meaning: "Don't force users to adapt to rigid systems" }
  ],

  teachingPhilosophy: {
    onDesign: "Design is not decoration—it's problem-solving with constraints",
    onCode: "Write code for humans first, computers second",
    onAI: "AI should enhance human capability, not replace human judgment",
    onCraft: "Excellence comes from caring about details others ignore"
  }
};

const KNOWLEDGE_BASES = {
  experience: EXPERIENCE_KNOWLEDGE,
  research: RESEARCH_KNOWLEDGE,
  innovation: INNOVATION_KNOWLEDGE,
  principles: CANVAS_CODE_KNOWLEDGE
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

function MainPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorScale, setCursorScale] = useState(1);
  const [magnetTarget, setMagnetTarget] = useState(null);
  const [showAI, setShowAI] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const [lightboxImage, setLightboxImage] = useState(null);
  const [hoveredPainting, setHoveredPainting] = useState(null);
  const messagesEndRef = useRef(null);
  const canvasRef = useRef(null);
  const shaderCanvasRef = useRef(null);
  const sectionRefs = useRef({});
  const scrollVelocity = useRef(0);
  const currentScroll = useRef(0);
  const targetScroll = useRef(0);

  // Portfolio Data
  const portfolioData = {
    name: "Nikita Kharya",
    title: "VP Frontend Engineering",
    company: "Morgan Stanley",
    tagline: "Designing the Interfaces of an Intelligent Future",
    subtitle: "UI + AI | VP of Frontend | AI Squad Catalyst | Researcher | Systems Thinker",
    
    neuralNodes: [
      { 
        id: 'experience', 
        label: 'Experience & Skills', 
        icon: Briefcase,
        color: 'cyan',
        description: '12+ years across industries'
      },
      { 
        id: 'research', 
        label: 'Research', 
        icon: BookOpen,
        color: 'blue',
        description: 'AI transparency & visualization'
      },
      { 
        id: 'innovation', 
        label: 'Innovation', 
        icon: Rocket,
        color: 'purple',
        description: 'Future UI experiments'
      },
      { 
        id: 'principles', 
        label: 'Canvas & Code', 
        icon: Compass,
        color: 'pink',
        description: 'Art & design philosophy'
      }
    ],

    timeline: [
      {
        id: 1,
        phase: "Foundations — The Pattern Seeker",
        years: "2013-2017",
        company: "Cognizant",
        role: "Associate",
        story: "Built healthcare applications end-to-end with complete ownership.\n\n• Sole developer for 3 production applications\n• Learned user-centric design through real-world feedback\n• Discovered that elegant code means nothing if users struggle",
        tech: ["JavaScript", "HTML5", "CSS3", "AngularJS"],
        icon: Code,
        metrics: { apps: 3, domain: "Healthcare" }
      },
      {
        id: 2,
        phase: "Multi-Industry Era — The Explorer",
        years: "2017-2019",
        company: "Accenture",
        role: "Senior Software Engineer",
        story: "Led enterprise migration projects across telecom and banking domains.\n\n• Zero-defect AngularJS → Angular migration\n• Multi-client delivery in high-stakes environments\n• Developed systematic approach to technical transformation",
        tech: ["Angular", "TypeScript", "UX Design", "Agile"],
        icon: GitBranch,
        metrics: { defects: 0, clients: "Multi" }
      },
      {
        id: 3,
        phase: "Fintech Leadership — The Systems Architect",
        years: "2019-2022",
        company: "Deutsche Bank",
        role: "Assistant Vice President",
        story: "Architected config-driven systems for transaction monitoring and compliance.\n\n• Built framework where JSON schemas generate entire UIs\n• Led and mentored team of 6 engineers\n• Reduced manual compliance review risk through automation",
        tech: ["React", "TypeScript", "Config-Driven UI", "Compliance Tech"],
        icon: Database,
        metrics: { team: 6, apps: "Multiple" }
      },
      {
        id: 4,
        phase: "Cloud Systems — The Component Thinker",
        years: "2022-2023",
        company: "VMware",
        role: "Member of Technical Staff 3",
        story: "Modernized CloudHealth UI and pioneered reusable component architecture.\n\n• React migration for multi-cloud analysis workflows\n• Built UI-as-a-Service library serving 8+ teams\n• POC demonstrated 35% reduction in analysis time",
        tech: ["React", "TypeScript", "UIaaS", "Multi-Cloud", "D3.js"],
        icon: Layers,
        metrics: { speedup: "35%", teams: "8+" }
      },
      {
        id: 5,
        phase: "VP Evolution — The AI-Augmented Architect",
        years: "2023-Present",
        company: "Morgan Stanley",
        role: "Vice President",
        story: "Leading enterprise transformation through AI-augmented development and unified platforms.\n\n• Selected as AI Squad Catalyst, guiding my squad into agent-native GenAI development\n• One UI Platform: 3 apps → 1 workflow = 33+ hours saved daily\n• AI Framework: Compressed 3-week cycles into 2 days (10x speedup)\n• The developed compliance platform is now a firm-wide standard\n• Managing 8 engineers across multiple high-impact projects\n\nKey Insight: AI amplifies great architecture, it doesn't replace it.",
        tech: ["React", "TypeScript", "GraphQL", "AI/LLM Integration", "Micro-Frontends", "Agent-Native Development"],
        icon: Zap,
        current: true,
        catalyst: true,
        metrics: { team: 8, saved: "33h/day", speedup: "10x" }
      },
      {
        id: 6,
        phase: "Research — The Future Builder",
        years: "2024",
        company: "Independent Research",
        role: "Author & Innovator",
        story: "Published research transforming how humans interact with AI systems.\n\n• Paper: 'When AI Reasoning Meets Interface Design'\n• Introduced iGraph visualization for AI transparency\n\nKey Insight: The future isn't just smarter AI, it's AI we can understand and verify.",
        tech: ["AI Transparency", "iGraph", "Reasoning Visualization", "Human-AI Verification"],
        icon: BookOpen,
        research: true,
        metrics: { application: "UI + AI" }
      }
    ],

    expertise: [
      { 
        category: "Frontend & UI Engineering",
        skills: "React • TypeScript • Redux • Angular • Material UI • HTML5/CSS3 • Web Components • WCAG Accessibility • Responsive Design"
      },
      { 
        category: "Architecture & Systems",
        skills: "Micro-Frontends • GraphQL • REST APIs • Config-Driven Architecture • Component Libraries • BFF Patterns • CI/CD • Docker"
      },
      { 
        category: "AI + UI Innovation",
        skills: "LLM-Driven Flows • AI-Assisted Development • Reasoning Visualization • Prompt Engineering • Human-AI Verification • Interactive D3.js"
      },
      { 
        category: "Leadership & Delivery",
        skills: "Team Management • Technical Mentorship • Cross-Domain Collaboration • Agile/Scrum • Product Strategy • Stakeholder Management"
      }
    ],

    blogs: [
      {
        id: 1,
        title: "An Engineer's Guide to AI-Augmented Development: Wins, Pitfalls, and What Actually Works",
        subtitle: "How we can leverage frontier models to define the new era for development in a restricted environment",
        date: "September 2024",
        readTime: "6 min read",
        tags: ["AI", "React", "AI-Accelerated Development"],
        status: "published",
        platform: "Medium",
        link: "https://medium.com/@nikitakharya09/an-engineers-guide-to-ai-augmented-development-wins-pitfalls-and-what-actually-works-9187057d8b17",
        featured: true
      }
    ],
    paintings: [
      {
        id: 1,
        title: "Life",
        filename: "abstract-face.jpg",
        description: "The struggles of life make you stronger, wiser, more beautiful. Every crack tells a story of resilience, every shadow holds a lesson learned.",
        medium: "Acrylic on Canvas",
        theme: "Existential Abstraction"
      },
      {
        id: 2,
        title: "Friends",
        filename: "birds-on-wire.jpg",
        description: "True friendship is finding your flock! Those souls who sit beside you in comfortable silence, who stay through the seasons, who make the journey lighter simply by being there.",
        medium: "Acrylic on Canvas",
        theme: "Connection & Belonging"
      },
      {
        id: 3,
        title: "Spring Triptych",
        filename: "spring-triptych.jpg",
        description: "Happiness blooms in three acts: the promise of dawn, the fullness of day, the peace of twilight. Joy is not a moment but a journey through seasons of color and light.",
        medium: "Acrylic on Canvas (3-Panel)",
        theme: "Joy & Renewal"
      },
      {
        id: 4,
        title: "Vision",
        filename: "eye-reflection.jpg",
        description: "We don't see the world as it is, we see it as we are. Every eye holds a universe, every gaze reflects a truth. What you see depends on how you look.",
        medium: "Acrylic on Canvas",
        theme: "Perception & Perspective"
      },
      {
        id: 5,
        title: "Breathe",
        filename: "water-joy.jpg",
        description: "In the chaos, remember to breathe. Like water finding its way, like waves returning to shore. Let go, flow freely, and trust the current of life.",
        medium: "Acrylic on Canvas",
        theme: "Serenity & Release"
      },
      {
        id: 6,
        title: "Snoopy Love",
        filename: "snoopy-love.jpg",
        description: "Love is simple, pure, and unconditional! Like a loyal companion who sees only the best in you. Sometimes the smallest hearts hold the biggest love.",
        medium: "Acrylic on Canvas",
        theme: "Innocence & Devotion"
      },
      {
        id: 7,
        title: "Heritage",
        filename: "cultural-portrait.jpg",
        description: "We carry our ancestors in our eyes, our traditions in our hands, our stories in our hearts. This portrait honors the beauty of cultural identity, the past woven into the present, creating who we are.",
        medium: "Acrylic on Canvas",
        theme: "Identity & Legacy"
      }
    ]
  };

  // Node contexts
  const nodeContexts = {
    principles: {
      welcome: "**Canvas & Code Node**\n\nWhere art meets technology. I maintain an active painting practice with 7 works in my gallery.\n\nAsk me:\n• Show me your paintings\n• Tell me about your art\n• What's your design philosophy?\n• How do art and code connect?\n• Tell me about specific paintings"
    },
    experience: {
      welcome: "**Experience & Skills Node**\n\n12+ years across healthcare, telecom, banking, cloud, and fintech. Selected as AI Squad Catalyst at Morgan Stanley.\n\nAsk me:\n• What is AI Squad Catalyst?\n• Tell me about Morgan Stanley\n• What did you build at VMware?\n• Your Deutsche Bank work?\n• Accenture migration projects?\n• Where did you start?"
    },
 research: {
    welcome: `**Research Node**

Published: *"Improving Human Verification of LLM Reasoning through Interactive Explanation Interfaces"*

📄 **Paper:** [arXiv:2510.22922](https://arxiv.org/abs/2510.22922)
🎮 **Demo:** [Try Interactive Interfaces](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)

**Ask me about:**

🎯 **The Problem**
- What problem does this solve?
- Why is LLM verification hard?

💡 **The Solution**
- What is iGraph?
- What is iPoT?
- What is iCoT?
- How do they work?

📊 **Results**
- What were the findings?
- How much better is iGraph?
- Show me the statistics

🎨 **Design & Tech**
- What are the design features?
- How did you build this?
- What's the architecture?

💭 **Personal Story**
- Why did you do this research?
- How does frontend experience help?
- What's your background?

🚀 **Applications**
- Where can I use this?
- How does it help education/finance?
- What's the ROI?

Try: "What is iGraph?" or "Show me the results" or "Why did you do this?"`
  },
    innovation: {
      welcome: "**Innovation Node**\n\nExploring the future of UI+AI interactions.\n\nAI Squad Catalyst guiding team into agent-native development.\n\nAsk me:\n• What will interfaces look like in 5 years?\n• Tell me about your experiments\n• What are you working on?\n• What's your technical stack?\n• What is agent-native development?"
    }
  };

  // AI responses - using fallback system for production deployment
  // Claude API only works in claude.ai artifacts, not in deployed apps due to CORS
  const getAIResponse = async (query, context) => {
    // For deployed version, use fallback directly
    // To enable API: Set up a backend proxy (see deployment guide)
    const USE_API = false; // Set to true only if you have a backend proxy
    
    if (!USE_API) {
      return getFallbackResponse(query, context);
    }

    // API integration code (only runs if USE_API is true)
    const knowledge = KNOWLEDGE_BASES[context];
    
    if (!knowledge) {
      return getFallbackResponse(query, context);
    }

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 600,
          messages: [{
            role: "user",
            content: `You are Nikita Kharya's portfolio assistant answering questions about the "${knowledge.meta.nodeName}" section.

KNOWLEDGE BASE:
${JSON.stringify(knowledge, null, 2)}

USER QUESTION: ${query}

INSTRUCTIONS:
- Answer naturally and conversationally based ONLY on the knowledge provided above
- Be specific with numbers, metrics, and examples from the data when relevant
- Keep responses under 250 words but be thorough
- Use bullet points (•) for clarity when listing multiple items
- If asked about something not clearly covered in the knowledge base, provide the closest relevant information or politely say you don't have that specific detail
- Match the tone to the node:
  * Experience: Professional, achievement-focused, specific
  * Research: Technical, visionary, impact-oriented
  * Innovation: Forward-thinking, experimental, paradigm-shifting
  * Canvas & Code: Philosophical, creative, principle-driven
- Never mention "the knowledge base" or "the data provided" - speak as if you are Nikita's assistant with direct knowledge
- Format responses with markdown for readability: **bold** for headers, bullet points for lists
- If multiple aspects of the knowledge relate to the question, synthesize them into a cohesive answer

Answer the user's question:`
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data.content[0].text;

    } catch (error) {
      console.warn("Claude API unavailable, using fallback responses:", error.message);
      return getFallbackResponse(query, context);
    }
  };

  // Enhanced fallback responses for production deployment
  const getFallbackResponse = (query, context) => {
    const q = query.toLowerCase();

     if (context === 'research') {
    // CORE PROBLEM
    if (q.includes('problem') || q.includes('why difficult') || q.includes('wall of text') || q.includes('verify')) {
      return `**The LLM Verification Problem**

Traditional Chain-of-Thought explanations are "walls of text"—long, dense, hard to parse.

**The Problem:**
- LLMs generate 1000+ token explanations
- Humans can't detect subtle errors
- Cognitive overload makes verification slow
- Mistakes look plausible

**The Impact:**
- Can't trust AI in high-stakes domains
- Users miss critical errors
- 39% lower error detection vs interactive formats

This matters in education, finance, healthcare—anywhere wrong answers cost.

[Try the demo →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`;
    }

    // iGRAPH
    if (q.includes('igraph') || q.includes('graph visualization') || q.includes('visual')) {
      return `**iGraph: Interactive Graph Visualization**

Your LLM reasoning as a flowchart:
- **Nodes** = reasoning steps (inputs, calculations, results)
- **Edges** = logical connections and dependencies
- **Color-coded variables** throughout
- **Left-to-right flow** shows temporal progression

**Why It Wins:**
- 72% accuracy vs 61% with text
- 18 seconds faster per problem
- 85% user satisfaction
- Errors visually "jump out"

The key: 2D spatial layout > linear text for tracing logic.

[Try iGraph →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`;
    }

    // iCoT
    if (q.includes('icot') || q.includes('interactive chain')) {
      return `**iCoT: Interactive Chain-of-Thought**

Same CoT content, better presentation:

**Features:**
✓ Step-by-step reveal with playback controls
✓ Color-coded variables throughout
✓ Problem summary panel
✓ Discrete, highlighted segments
✓ No scrolling needed

**Results:**
- 69% accuracy vs 61% traditional CoT
- 10 seconds faster verification
- 79% liked dual-panel layout

Best for: Users who prefer text but need structure.`;
    }

    // iPOT
    if (q.includes('ipot') || q.includes('program of thought') || q.includes('code') || q.includes('pseudo')) {
      return `**iPoT: Reasoning as Code**

Transform math reasoning into pseudo-code format:

\`\`\`python
# Input
num_students = 24
pencils_per_student = 3
extra_pencils = 5

# Calculate
total_needed = num_students * pencils_per_student
final_total = total_needed + extra_pencils

# Result = 77
\`\`\`

**Features:**
- Each line = one logical step
- Variable tracking panel
- Execute step-by-step
- Debug-like interface

**Results:** 70% accuracy, high engagement among technical users.`;
    }

    // RESULTS / FINDINGS
    if (q.includes('results') || q.includes('findings') || q.includes('accuracy') || q.includes('statistics')) {
      return `**Key Results: Interactivity Wins**

**VERIFICATION ACCURACY:**
- iGraph:  71.9% ✓✓✓
- iPoT:    70.2% ✓✓
- iCoT:    69.3% ✓
- CoT:     61.0% ✗

**ERROR LOCALIZATION:**
- iGraph:  59.7%
- iPoT:    58.1%
- iCoT:    56.7%
- CoT:     48.7%

**TIME PER QUESTION:**
- iGraph:  119 sec ⚡
- iPoT:    127 sec
- iCoT:    127 sec
- CoT:     137 sec

**Bottom line:** Interactive formats = 10-point accuracy jump + 18 seconds faster.

All differences statistically significant (p < 0.05).`;
    }

    // WHY iGRAPH BEST
    if (q.includes('why igraph') || q.includes('igraph best') || q.includes('igraph win')) {
      return `**Why iGraph Dominated**

Three reasons visual beats text:

**1. Spatial Processing**
- 2D layout uses different brain pathways
- Relationships visible at a glance
- Pattern recognition faster than reading

**2. Reduced Cognitive Load**
- No tracking in working memory
- Structure externalized on screen
- "See" the whole reasoning flow

**3. Error Salience**
- Broken connections visually obvious
- Inconsistencies stand out
- Visual anomalies trigger attention

Users said: "I could *see* where it went wrong."

That's the power of visual reasoning.`;
    }

    // APPLICATIONS / REAL WORLD
    if (q.includes('use') || q.includes('application') || q.includes('real world') || q.includes('practical')) {
      return `**Where This Matters**

**HIGH-STAKES DOMAINS:**

🎓 **Education**
- Homework help verification
- Tutoring systems
- Student error detection

💰 **Finance**
- Model explainability
- Compliance auditing
- Risk analysis verification

⚕️ **Healthcare**
- Diagnosis support systems
- Treatment recommendation review
- Clinical decision support

⚖️ **Legal**
- Contract analysis
- Case reasoning review
- Compliance checking

🏗️ **Engineering**
- Design validation
- Safety analysis
- System verification

Anywhere wrong answers are expensive. Anywhere trust requires verifiability.`;
    }

    // EDUCATION SPECIFIC
    if (q.includes('education') || q.includes('student') || q.includes('learning') || q.includes('teaching')) {
      return `**Education Applications**

**The Problem:**
Students use ChatGPT for homework but can't verify if it's correct.

**How iGraph Helps:**

**For Students:**
- Understand step-by-step reasoning visually
- Spot where their reasoning diverges
- Learn to verify, not just accept
- Build critical thinking skills

**For Teachers:**
- Quickly scan student work
- Identify common misconceptions
- See error patterns across class
- Save grading time

**Impact:**
- 10+ point accuracy improvement
- 18 seconds faster verification
- Higher engagement scores
- Better learning outcomes

This isn't just checking answers—it's building understanding.`;
    }

    // DESIGN FEATURES
    if (q.includes('design') || q.includes('features') || q.includes('dual panel') || q.includes('color')) {
      return `**4 Key Design Features**

Every interactive interface has:

**1. Dual-Panel Layout** (85% approval)
- Left: Problem + summary
- Right: Step-by-step solution
- No scrolling, no context loss

**2. Color-Coded Variables** (89% approval)
- Each variable = unique color
- Same color everywhere it appears
- Easy to trace through steps

**3. Problem Summarization** (87% approval)
- Key info at a glance
- Quick reference while reading
- Reduces cognitive load

**4. Step-by-Step Controls** (82% approval)
- Forward/back buttons
- Control your pace
- Progressive disclosure

**Design Principle:** Reduce mental effort, increase clarity.

Based on cognitive load theory.`;
    }

    // METHODOLOGY
    if (q.includes('methodology') || q.includes('study') || q.includes('test') || q.includes('participant') || q.includes('gsm8k')) {
      return `**Study Design**

**Participants:** 125 undergraduate students
**Format:** Between-subjects (each person = 1 interface)
**Task:** Review 10 math problems, identify errors

**Dataset:**
- 500 GSM8K problems (4-7 reasoning steps)
- 450 with injected errors (9 error types)
- 50 correct solutions

**Error Types:**
Calculation, Counting, Context Value, Contradictory Step, Missing Step, Hallucination, Unit Conversion, Operator, Formula Confusion

**Metrics:**
✓ Verification accuracy
✓ Error localization accuracy
✓ Time per question
✓ Click-level interaction logs
✓ Post-study surveys (7-point Likert)

**Result:** All interactive > CoT (p < 0.05)`;
    }

    // IMPLEMENTATION / TECH
    if (q.includes('build') || q.includes('implement') || q.includes('tech') || q.includes('architecture') || q.includes('pipeline')) {
      return `**Implementation Architecture**

**2-Stage Pipeline:**

**Stage 1: Content Generation**
- Input: Math problem + solution
- LLM: Claude 3.7 Sonnet
- Output: Tagged intermediate representation
  \`\`\`xml
  <fact>...</fact>
  <step>...</step>
  <formula>...</formula>
  <var>x = 5</var>
  \`\`\`

**Stage 2: Interface Rendering**
- Input: Tags + Interface template
- LLM: Generate HTML/JS application
- Output: Interactive interface

**Why 2 Stages?**
- Ensures consistency across formats
- Same content, different presentations
- Eliminates LLM output variation

**Tech Stack:**
- Frontend: HTML/CSS/JavaScript
- Backend: Python + FastAPI
- Hosting: HuggingFace Spaces
- LLM: Claude 3.7 Sonnet API

[View demo code →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`;
    }

    // DEMO
    if (q.includes('demo') || q.includes('try') || q.includes('show')) {
      return `**Try It Yourself!**

🔗 **Live Demo:** https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment

**What You'll Experience:**
1. See all 4 formats side-by-side
2. Try to find errors in LLM reasoning
3. Compare your accuracy across formats
4. Feel the difference interactivity makes

**Quick Start:**
- No login required
- 5-10 minutes to test
- Mobile-friendly
- Share with colleagues

**What to Notice:**
✓ How much easier graphs make it
✓ How colors help tracking
✓ How step-by-step reduces overwhelm
✓ How playback controls help focus

**Then Read:**
📄 Full Paper: https://arxiv.org/abs/2510.22922`;
    }

    // PERSONAL STORY / BACKGROUND
    if (q.includes('your') || q.includes('background') || q.includes('first paper') || q.includes('story') || q.includes('frontend') || q.includes('motivation')) {
      return `**From Frontend to Research**

I'm a Lead Software Engineer & VP at a fintech company. 12+ years building UIs, leading teams, shipping products.

Then I co-authored my first research paper.

**The Connection:**
My frontend experience directly shaped this research:

**UI/UX Perspective:**
- LLM outputs are interfaces
- User comprehension matters
- Design affects outcomes
- Interaction enables understanding

**Real-World Constraints:**
- Production systems need trust
- Users aren't AI experts
- Errors have consequences
- Time is money

**The Insight:**
If you're building AI products, the interface matters as much as the model.

**My Contribution:**
I brought practical design thinking to an academic problem. Result: 10-point accuracy jump through design alone.

This is the future: AI+UX together.`;
    }

    // WHY DID YOU DO THIS
    if (q.includes('why') && (q.includes('you') || q.includes('do this'))) {
      return `**Why This Research Matters to Me**

**The Spark:**
Working in fintech, I saw LLMs making financial calculations. Smart models, but users couldn't verify the reasoning. Blind trust in high-stakes decisions = unacceptable.

**The Problem:**
- Users just accepted plausible explanations
- Errors went unnoticed
- Trust was binary: believe it or don't
- No verification possible

**The Question:**
What if we redesigned how LLMs present reasoning?

**The Approach:**
Apply 12 years of frontend experience to AI explanations—user-centered design, cognitive load principles, interactive affordances.

**The Result:**
Proof that design matters in AI systems. 10-point accuracy improvement through better UX.

**The Mission:**
Build AI systems humans can actually work with. Not "trust me" AI, but "let me show you" AI.

This is about democratizing AI verification. Anyone should be able to check if the AI is right.`;
    }

    // FUTURE WORK
    if (q.includes('future') || q.includes('next') || q.includes('roadmap') || q.includes('improve')) {
      return `**What's Next**

**Short Term (Research):**
- Adaptive interfaces (auto-select format per user)
- Multi-modal explanations (text + graph + code)
- More domains beyond math
- Real-time error highlighting

**Medium Term (Product):**
- Browser extension for ChatGPT/Claude
- API for developers
- Educational platform integration
- Enterprise auditing tools

**Long Term (Vision):**
- Every LLM output is interactive
- Self-explaining AI systems
- Verification as a service
- Universal explainability layer

**The Big Question:**
Can we make ALL AI reasoning this verifiable?

The goal: AI you can actually trust because you can actually verify.

[Follow my research] [Collaborate with me]`;
    }

    // LIMITATIONS
    if (q.includes('limitation') || q.includes('downside') || q.includes('challenge') || q.includes('doesn\'t work')) {
      return `**Honest Limitations**

**iGraph Challenges:**
- Complex problems → cluttered graphs
- Too many nodes = visual overload
- Requires graph literacy

**iPoT Challenges:**
- Not everyone reads code
- Syntax can intimidate
- Technical users only

**General Limitations:**
- Tested only on math (GSM8K)
- Undergraduate participants only
- 4-7 step problems only
- English only
- Single LLM (Claude 3.7)

**When This Might NOT Work:**
- Very simple problems (overkill)
- Very complex proofs (too many nodes)
- Non-technical audiences (iPoT)
- Low-stakes quick answers

**The Trade-off:**
Better verification costs development time, computational resources, and interface complexity.

Worth it for high-stakes? YES.
Worth it for casual chat? Maybe not.`;
    }

    // COMPARISON
    if (q.includes('compare') || q.includes('vs') || q.includes('difference') || q.includes('which better')) {
      return `**Format Comparison**

| Format | Accuracy | Speed | Best For |
|--------|----------|-------|----------|
| **iGraph** | 72% | 119s | Visual learners, complex problems |
| **iPoT** | 70% | 127s | Technical users, programmers |
| **iCoT** | 69% | 127s | Text-preferring users |
| **CoT** | 61% | 137s | Legacy compatibility only |

**When to Use Each:**

**iGraph** (Recommended):
✓ Complex multi-step problems
✓ Visual learners
✓ When speed matters
✓ Error detection critical

**iPoT:**
✓ Technical audiences
✓ Logic-heavy problems

**iCoT:**
✓ Text-preferring users
✓ Simple problems

**The Verdict:** Start with iGraph.`;
    }

    // ROI / DECISION
    if (q.includes('should i') || q.includes('worth') || q.includes('roi') || q.includes('cost')) {
      return `**Should You Implement This?**

✅ **YES, if you have:**
- High-stakes decisions ($$$ or safety)
- Users who need to verify AI
- Complex multi-step reasoning
- Error costs > implementation costs

⚠️ **MAYBE, if you have:**
- Medium-stakes scenarios
- Budget constraints

❌ **NO, if you have:**
- Low-stakes casual use
- Very simple problems

**ROI Calculation:**

**Cost to Implement:**
- 2-4 weeks dev time
- LLM API costs (~$0.01/query)
- Hosting (~$50/mo)

**Benefit Per User:**
- 10% better accuracy = catch 10% more errors
- 18 sec time savings
- Trust improvement

**Break-even:** ~100 users in high-stakes domain

**Bottom Line:**
If error costs > $1000, implement immediately.`;
    }

    // PAPER / RESEARCH GENERAL
    if (q.includes('paper') || q.includes('research') || q.includes('explain')) {
      return `**My Research: "When AI Reasoning Meets Interface Design"**

Problem: AI explanations are text walls. Users can't verify.

**Solution:** Three interactive interfaces
- **iGraph** - Visual flowchart (72% accuracy)
- **iPoT** - Code-based format (70% accuracy)
- **iCoT** - Structured text (69% accuracy)
vs Traditional CoT (61% accuracy)

**Key Innovation:**
Changed paradigm from *text-in, text-out* to *text-in, application-out*.

**Impact:**
- 10+ point accuracy improvement
- 18 seconds faster verification
- 125-person user study
- Published on arXiv

I turned "trust me" AI into "let me show you" AI.

This is how we trust AI in finance, healthcare, education.

[Read paper →](https://arxiv.org/abs/2510.22922) | [Try demo →](https://huggingface.co/spaces/interactiveReasoning/interactive_explanation_experiment)`;
    }

    // DEFAULT RESEARCH
    return nodeContexts.research.welcome;
  }
    
    if (context === 'experience') {
      // AI Squad Catalyst
      if (q.includes('catalyst') || q.includes('squad')) {
        return "**AI Squad Catalyst**\n\nSelected as peer leader at Morgan Stanley to guide squad into agent-native GenAI development.\n\n**What It Means:**\n• Peer leadership recognition\n• Guiding engineers into the next frontier\n• Agent-native development paradigm\n• Strategic AI integration across projects\n\n**Impact:**\nCompressed multi-week development cycles into days through structured LLM workflows. Now scaling this across the entire squad.";
      }
      
      // Morgan Stanley
      if (q.includes('morgan') || q.includes('current') || q.includes('now')) {
        return "**Morgan Stanley (2023-Present)**\n\nVice President, UI Engineering & Architecture\n\n**AI Squad Catalyst:**\n• Selected peer leader for agent-native GenAI development\n• Guiding squad into next frontier of AI-augmented engineering\n\n**One UI Platform:**\n• 3 apps → 1 unified workflow\n• 25 min → 15 min per account\n• 33+ hours saved daily (~200 accounts)\n\n**AI Framework:**\n• 10x speedup: 3 weeks → 2 days\n• Structured LLM prompts + workflows\n\n**Compliance Platform:**\n• Firm-wide standard eliminating compliance gaps\n\n**Team:** Leading 8 engineers (FTE + contractors)\n\n**Technologies:** React, TypeScript, GraphQL, AI/LLM Integration, Micro-Frontends";
      }
      
      // VMware
      if (q.includes('vmware') || q.includes('cloud')) {
        return "**VMware (2022-2023)**\n\nMember of Technical Staff 3\n\n**CloudHealth UI Modernization:**\n• React migration for multi-cloud analysis\n• Improved usability and workflows\n\n**UI-as-a-Service (UIaaS):**\n• Component library serving 8+ teams\n• 35% reduction in analysis time (POC)\n• Unified experience across platform\n\n**Technologies:** React, TypeScript, UIaaS, Multi-Cloud, D3.js\n\n**Key Learning:** Component libraries are products, not side projects.";
      }
      
      // Deutsche Bank
      if (q.includes('deutsche') || q.includes('bank') || q.includes('db')) {
        return "**Deutsche Bank (2019-2022)**\n\nAssistant Vice President\n\n**Transaction Monitoring Platform:**\n• Led UI for automated compliance\n• Reduced manual review risk\n\n**Config-Driven Framework:**\n• JSON schemas generate entire UIs\n• Reused across multiple banking apps\n• Led team of 6 engineers\n\n**Technologies:** React, TypeScript, Config-Driven UI, Compliance Tech\n\n**Key Learning:** Configuration beats customization at scale.";
      }
      
      // Accenture
      if (q.includes('accenture')) {
        return "**Accenture (2017-2019)**\n\nSenior Software Engineer\n\n• Led AngularJS → Angular migration\n• Zero defects across enterprise clients\n• Multi-client delivery (telecom & banking)\n\n**Technologies:** Angular, TypeScript, UX Design, Agile\n\n**Key Learning:** Migration strategy > migration speed. Plan for change, not perfection.";
      }
      
      // Cognizant / Career Start
      if (q.includes('cognizant') || q.includes('start') || q.includes('begin') || q.includes('first')) {
        return "**Cognizant (2013-2017)**\n\nAssociate\n\n• Built 3 healthcare applications end-to-end\n• Solo developer with full ownership\n• Learned user-centric design through real feedback\n\n**Technologies:** JavaScript, HTML5, CSS3, AngularJS\n\n**Key Learning:** User needs trump technical elegance. Code is only half the battle.";
      }
      
      // Technical Skills
      if (q.includes('tech') || q.includes('skill') || q.includes('stack') || q.includes('know')) {
        return "**Technical Expertise:**\n\n**Frontend:** React • TypeScript • Redux • MobX • Angular • React Native • Material UI • HTML5/CSS3\n\n**Architecture:** Micro-Frontends • GraphQL • REST APIs • Config-Driven Architecture • Component Libraries • CI/CD • Docker\n\n**AI + UI:** LLM-Driven Flows • AI-Assisted Development • Reasoning Visualization • Prompt Engineering • Human-AI Verification\n\n**Leadership:** Team Management • Technical Mentorship • Agile/Scrum • Product Strategy\n\n**Specializations:** WCAG Accessibility • Responsive Design • 12+ years experience";
      }
      
      // Frontend Specific
      if (q.includes('frontend') || q.includes('front-end') || q.includes('front end') || q.includes('ui engineer')) {
        return "**Frontend Engineering Expertise:**\n\n**12+ Years of Frontend Development**\n\n**Core Technologies:**\n• React (Expert - 6+ years)\n• TypeScript (Expert - 5+ years)\n• Angular/AngularJS (5+ years)\n• JavaScript/ES6+ (12+ years)\n• HTML5/CSS3/SASS (12+ years)\n\n**Frontend Architecture:**\n• Micro-Frontends design & implementation\n• Component library architecture (UIaaS at VMware)\n• Config-driven UI systems (Deutsche Bank)\n• Responsive & accessible design (WCAG)\n\n**Current Focus:**\n• AI-augmented frontend development\n• Generative UI systems\n• Agent-native development patterns\n\n**Philosophy:** Build scalable, maintainable systems—not just features.";
      }
      
      // React Specific
      if (q.includes('react') && !q.includes('native')) {
        return "**React Expertise:**\n\n**Experience:** 6+ years with React (2019-Present)\n\n**Advanced React:**\n• React 18 with concurrent features\n• Custom hooks and composition patterns\n• State management (Redux, MobX, Context)\n• Performance optimization\n• Server-side rendering concepts\n\n**Production Projects:**\n• **Morgan Stanley:** One UI Platform (React 18 + TypeScript + GraphQL)\n• **VMware:** CloudHealth UI modernization (React migration)\n• **Deutsche Bank:** Transaction monitoring platform (React + TypeScript)\n\n**Architecture:**\n• Micro-frontend architecture with React\n• Reusable component library design\n• Config-driven React applications\n\n**Current:** Using React for AI-driven interfaces and generative UI systems.";
      }
      
      // React Native
      if (q.includes('react native') || q.includes('mobile') || q.includes('native')) {
        return "**React Native & Mobile Experience:**\n\n**React Native Projects:**\n• Mobile Fashion App (cross-platform)\n• React → React Native GenAI Migration Pipeline\n\n**Mobile Development:**\n• Cross-platform development (iOS + Android)\n• Native module integration\n• Performance optimization for mobile\n• Responsive mobile UI design\n\n**Approach:**\n• Code reuse between web and mobile\n• Platform-specific optimizations\n• User-centric mobile design\n\n**Philosophy:** Mobile-first thinking with cross-platform efficiency.";
      }
      
      // TypeScript Specific
      if (q.includes('typescript') || q.includes('ts')) {
        return "**TypeScript Expertise:**\n\n**Experience:** 5+ years (2019-Present)\n\n**All Recent Projects Use TypeScript:**\n• Morgan Stanley (2023-Present)\n• VMware (2022-2023)\n• Deutsche Bank (2019-2022)\n\n**Advanced TypeScript:**\n• Complex type systems and generics\n• Type-safe API integrations\n• Type inference and utility types\n• Strict mode configuration\n\n**Benefits I Deliver:**\n• Catch errors at compile time\n• Better IDE support and refactoring\n• Self-documenting code\n• Improved maintainability at scale\n\n**Philosophy:** TypeScript is essential for enterprise-grade frontends. Type safety = fewer production bugs.";
      }
      
      // Angular Specific
      if (q.includes('angular')) {
        return "**Angular Expertise:**\n\n**Experience:** 5+ years (2015-2020)\n\n**Major Projects:**\n• **Accenture:** Led AngularJS → Angular migration with ZERO defects\n• **Cognizant:** Built healthcare apps with AngularJS\n• Multiple enterprise clients across telecom & banking\n\n**Angular Skills:**\n• AngularJS (1.x) legacy systems\n• Angular (2+) modern applications\n• RxJS and reactive programming\n• TypeScript integration\n• Component architecture\n\n**Migration Expertise:**\n• Systematic migration strategies\n• Zero-defect migration approach\n• Planning for change vs. chasing perfection\n\n**Current:** Now focused on React, but strong Angular foundation for enterprise apps.";
      }
      
      // JavaScript Specific
      if (q.includes('javascript') || q.includes('js')) {
        return "**JavaScript Expertise:**\n\n**Experience:** 12+ years (2013-Present)\n\n**JavaScript Evolution:**\n• Started with vanilla JS and jQuery\n• Mastered ES6+ features\n• Modern async/await patterns\n• Functional programming concepts\n\n**Frameworks & Libraries:**\n• React (current primary)\n• Angular/AngularJS (5+ years)\n• TypeScript (preferred)\n• Redux, MobX (state management)\n\n**Advanced Concepts:**\n• Closures and scope management\n• Prototypal inheritance\n• Event loop and async operations\n• Memory management\n• Performance optimization\n\n**Current Focus:**\n• AI-augmented JavaScript development\n• LLM-driven code generation\n• Modern build tools (Webpack, Vite)\n\n**Philosophy:** JavaScript is the foundation—master it deeply before frameworks.";
      }
      
      // GraphQL Specific
      if (q.includes('graphql')) {
        return "**GraphQL Experience:**\n\n**Current:** Using GraphQL at Morgan Stanley (2023-Present)\n\n**Implementation:**\n• GraphQL client integration with React\n• Query optimization and caching\n• Type-safe GraphQL with TypeScript\n• Real-time subscriptions\n\n**Projects:**\n• One UI Platform (React + GraphQL)\n• Data aggregation across multiple sources\n• Efficient data fetching strategies\n\n**Benefits:**\n• Precise data fetching (no over/under fetching)\n• Strong typing with schema\n• Single endpoint for multiple resources\n• Better frontend-backend collaboration\n\n**Philosophy:** GraphQL empowers frontend teams to fetch exactly what they need.";
      }
      
      // Architecture Specific
      if (q.includes('architect') || q.includes('design pattern') || q.includes('system design')) {
        return "**Architecture & System Design:**\n\n**Current Title:** VP, UI Engineering & Architecture\n\n**Architectural Expertise:**\n\n**Micro-Frontends:**\n• Designed and implemented at scale\n• Module federation patterns\n• Independent deployments\n• Team autonomy with consistency\n\n**Config-Driven Architecture:**\n• JSON schemas generate UIs (Deutsche Bank)\n• Configuration beats customization at scale\n• Reusable across multiple apps\n\n**Component Libraries:**\n• UIaaS serving 8+ teams (VMware)\n• Design system architecture\n• Versioning and backwards compatibility\n\n**Design Patterns:**\n• BFF (Backend for Frontend)\n• Repository pattern for data\n• Factory patterns for UI generation\n• Observer patterns (pub/sub)\n\n**Philosophy:** Design systems, not screens. Architecture enables scale.";
      }
      
      // State Management
      if (q.includes('redux') || q.includes('mobx') || q.includes('state')) {
        return "**State Management Expertise:**\n\n**Experience:**\n• Redux (5+ years)\n• MobX (3+ years)\n• React Context API\n• Local state patterns\n\n**Approach:**\n• Choose right tool for complexity level\n• Redux for large-scale apps with complex flows\n• MobX for simpler reactivity needs\n• Context for shared UI state\n• Local state when possible\n\n**Best Practices:**\n• Normalized state structure\n• Selective subscriptions for performance\n• Middleware for side effects\n• DevTools integration\n\n**Philosophy:** State management should simplify, not complicate. Use the lightest solution that works.";
      }
      
      // Component Libraries / Design Systems
      if (q.includes('component') || q.includes('design system') || q.includes('library')) {
        return "**Component Library & Design System Experience:**\n\n**VMware - UIaaS:**\n• Built UI-as-a-Service component library\n• Served 8+ teams across organization\n• 200+ components\n• 80% reuse rate achieved\n\n**Approach:**\n• Component libraries are products, not side projects\n• Versioning and documentation critical\n• Design tokens for consistency\n• Accessibility built-in (WCAG)\n\n**Technologies:**\n• React component architecture\n• Material UI customization\n• Storybook for documentation\n• TypeScript for type safety\n\n**Philosophy:** Great component libraries enable teams to move fast without sacrificing quality or consistency.";
      }
      
      // CSS/Styling
      if (q.includes('css') || q.includes('sass') || q.includes('style') || q.includes('styling')) {
        return "**CSS & Styling Expertise:**\n\n**Experience:** 12+ years of CSS mastery\n\n**Modern CSS:**\n• CSS3 features and animations\n• Flexbox and Grid layouts\n• CSS-in-JS (styled-components, emotion)\n• SASS/SCSS preprocessors\n• Responsive design patterns\n\n**Methodologies:**\n• BEM naming conventions\n• CSS Modules for scoping\n• Utility-first CSS (Tailwind concepts)\n• Design tokens and theming\n\n**Responsive Design:**\n• Mobile-first approach\n• Breakpoint strategies\n• Fluid typography and spacing\n• Cross-browser compatibility\n\n**Philosophy:** CSS is as important as JavaScript. Great UIs need both technical skill and design sense.";
      }
      
      // Performance
      if (q.includes('performance') || q.includes('optimize') || q.includes('speed') || q.includes('fast')) {
        return "**Performance Optimization Expertise:**\n\n**Proven Results:**\n• 35% faster workflows at VMware (CloudHealth)\n• 10x development speedup at Morgan Stanley\n• 33+ hours saved daily through optimized workflows\n\n**Frontend Performance:**\n• Code splitting and lazy loading\n• Bundle size optimization (Webpack/Vite)\n• React performance patterns (memo, useMemo, useCallback)\n• Virtual scrolling for large lists\n• Image optimization and lazy loading\n\n**Metrics I Track:**\n• First Contentful Paint (FCP)\n• Time to Interactive (TTI)\n• Lighthouse scores\n• Bundle size analysis\n• Runtime performance profiling\n\n**Philosophy:** Performance is a feature, not an afterthought. Fast UIs = better user experience.";
      }
      
      // Accessibility
      if (q.includes('accessibility') || q.includes('a11y') || q.includes('wcag')) {
        return "**Accessibility (WCAG) Expertise:**\n\n**Commitment:** Accessibility is built-in, not bolted-on.\n\n**WCAG Compliance:**\n• WCAG 2.1 AA standards\n• Semantic HTML structure\n• ARIA labels and roles\n• Keyboard navigation patterns\n• Screen reader compatibility\n\n**Implementation:**\n• Accessible component libraries\n• Color contrast ratios\n• Focus management\n• Alt text for images\n• Form accessibility\n\n**Tools:**\n• Automated testing (axe, Lighthouse)\n• Manual screen reader testing\n• Keyboard-only navigation testing\n\n**Philosophy:** Great UIs are usable by everyone. Accessibility isn't optional—it's essential for inclusive design.";
      }
      
      // Build Tools
      if (q.includes('webpack') || q.includes('vite') || q.includes('build') || q.includes('bundl')) {
        return "**Build Tools & Tooling:**\n\n**Current Stack:**\n• Vite (modern, fast builds)\n• Webpack (enterprise configurations)\n• Babel (transpilation)\n\n**Build Optimization:**\n• Code splitting strategies\n• Tree shaking for smaller bundles\n• Asset optimization (images, fonts)\n• Development vs. production configs\n• Source maps for debugging\n\n**CI/CD Integration:**\n• Automated builds and deployments\n• Build performance monitoring\n• Deploy previews for PRs\n• Environment-specific configurations\n\n**Docker:**\n• Containerized frontend builds\n• Consistent dev environments\n• Multi-stage builds for optimization\n\n**Philosophy:** Great tooling enables great productivity. Invest in your build pipeline.";
      }
      
      // Testing
      if (q.includes('test') || q.includes('quality') || q.includes('qa')) {
        return "**Testing & Quality Assurance:**\n\n**Zero-Defect Track Record:**\n• Accenture: Zero defects in Angular migration\n• Systematic testing approach\n• Quality-first mindset\n\n**Testing Approach:**\n• Component testing (Jest, React Testing Library)\n• Integration testing\n• End-to-end testing concepts\n• Visual regression testing\n• Accessibility testing\n\n**Quality Practices:**\n• Code reviews (giving and receiving)\n• TypeScript for compile-time safety\n• ESLint and Prettier for consistency\n• Pre-commit hooks\n• Automated CI/CD checks\n\n**Philosophy:** Quality isn't tested in—it's built in. Prevention > detection.";
      }
      
      // API / REST / Backend Integration
      if (q.includes('api') || q.includes('rest') || q.includes('backend') || q.includes('integration')) {
        return "**API & Backend Integration:**\n\n**Experience:**\n• GraphQL (current - Morgan Stanley)\n• REST APIs (12+ years)\n• WebSockets (real-time data)\n\n**Integration Patterns:**\n• BFF (Backend for Frontend) architecture\n• API client libraries and SDKs\n• Error handling and retry logic\n• Request/response caching\n• Optimistic updates\n\n**Technologies:**\n• Axios, Fetch API\n• GraphQL clients (Apollo, Relay concepts)\n• Real-time data with WebSockets\n• API authentication (JWT, OAuth)\n\n**Best Practices:**\n• Type-safe API contracts\n• Error boundaries and fallbacks\n• Loading and error states\n• Request deduplication\n\n**Philosophy:** Great frontends need great API integration. Treat your API layer as a first-class citizen.";
      }
      
      // Micro-frontends
      if (q.includes('micro') || q.includes('microfrontend') || q.includes('micro-frontend')) {
        return "**Micro-Frontend Architecture:**\n\n**Experience:** Designed and implemented at Morgan Stanley\n\n**Approach:**\n• Module Federation (Webpack 5)\n• Independent deployments\n• Team autonomy with consistency\n• Shared dependencies optimization\n\n**Benefits:**\n• Teams can deploy independently\n• Technology flexibility per module\n• Incremental upgrades possible\n• Better fault isolation\n\n**Challenges Solved:**\n• Shared state management\n• Routing between micro-apps\n• Consistent styling and UX\n• Build time optimization\n\n**Philosophy:** Micro-frontends enable organizational scale. Architecture should mirror team structure.";
      }
      
      // Comparison Questions
      if (q.includes('vs') || q.includes('versus') || q.includes('compare') || q.includes('difference')) {
        if (q.includes('react') && q.includes('angular')) {
          return "**React vs Angular:**\n\n**Both Expert Level:**\n• React: 6+ years (current)\n• Angular: 5+ years (2015-2020)\n\n**When I Choose React:**\n• More flexibility needed\n• Simpler learning curve for team\n• Better ecosystem for modern needs\n• Lighter weight applications\n\n**When I'd Choose Angular:**\n• Enterprise apps needing opinionated structure\n• Teams preferring full framework\n• Strong TypeScript integration from start\n\n**Current Focus:** React for flexibility and modern AI-driven UIs, but Angular foundation valuable for enterprise thinking.\n\n**Philosophy:** Right tool for the job. Both are excellent frameworks.";
        }
        return "**Technology Comparisons:**\n\nI've worked extensively with:\n• React vs Angular (both expert level)\n• Redux vs MobX (context-dependent)\n• REST vs GraphQL (GraphQL preferred for modern apps)\n• Webpack vs Vite (Vite for new projects)\n\nAsk me about a specific comparison!";
      }
      
      // Career Journey / Experience
      if (q.includes('career') || q.includes('journey') || q.includes('experience') || q.includes('background')) {
        return "**Career Journey (12+ Years):**\n\n**2023-Present:** VP at Morgan Stanley | AI Squad Catalyst\n**2022-2023:** MTS-3 at VMware | CloudHealth & UIaaS\n**2019-2022:** AVP at Deutsche Bank | Compliance & Config Systems\n**2017-2019:** Senior Engineer at Accenture | Zero-defect migrations\n**2013-2017:** Associate at Cognizant | Healthcare apps\n\n**Industries:** Healthcare → Telecom → Banking → Cloud → Fintech\n\n**Progression:** Associate → Senior → AVP → MTS-3 → VP\n\n**Focus:** Modern UI engineering + AI-forward strategies + Team leadership";
      }
      
      // Team / Leadership
      if (q.includes('team') || q.includes('lead') || q.includes('manage') || q.includes('mentor')) {
        return "**Leadership Experience:**\n\n**Current (Morgan Stanley):**\n• Leading 8 engineers (FTE + contractors)\n• AI Squad Catalyst - peer leader role\n• Technical mentorship & delivery excellence\n\n**Previous:**\n• Deutsche Bank: Led team of 6 engineers\n• Mentored 15+ developers throughout career\n\n**Approach:**\n• Empower through architecture, not micromanagement\n• Technical mentorship focused\n• Cross-functional collaboration\n• Agile/Scrum methodology";
      }
      
      // Achievements / Metrics
      if (q.includes('achieve') || q.includes('impact') || q.includes('metric') || q.includes('success')) {
        return "**Key Achievements:**\n\n**Time Saved:** 33+ hours daily (One UI Platform)\n**Development Speed:** 10x faster (3 weeks → 2 days)\n**Migration Quality:** Zero defects (Accenture migrations)\n**Performance:** 35% faster workflows (VMware UIaaS)\n**Team Impact:** 8+ teams served with component library\n\n**Recognition:**\n• Selected as AI Squad Catalyst\n• Built firm-wide compliance standard\n• Published researcher in AI+UI field";
      }
      
      return nodeContexts.experience.welcome;
    }
    
    if (context === 'research') {
      // iGraph
      if (q.includes('igraph')) {
        return "**iGraph Visualization System**\n\nStructured reasoning visualization for AI transparency.\n\n**Core Concept:**\n• Tag AI reasoning (facts, steps, calculations)\n• Generate interactive graphs (nodes + edges)\n• Enable path tracing and gap detection\n• Make errors visually obvious\n\n**Production Use:**\nDeployed at Morgan Stanley for compliance verification. When AI flags suspicious transactions, analysts see the complete reasoning chain—no black box.\n\n**Impact:** Faster verification, reduced errors, improved regulatory compliance.\n\nTransparency isn't optional—it's how we build trustworthy AI.";
      }
      
      // Research / Publication
      if (q.includes('research') || q.includes('paper') || q.includes('publication') || q.includes('publish')) {
        return "**Research: 'When AI Reasoning Meets Interface Design'**\n\n**Problem:** AI explanations are text walls that users can't verify or check for errors.\n\n**Solution:** iGraph visualization system\n• Facts → Steps → Calculations → Results flow\n• Interactive node graphs\n• Real-time verification\n• Visual error detection\n\n**Production Deployment:**\nMorgan Stanley compliance verification workflows. When AI flags transactions, users see exact reasoning paths.\n\n**Philosophy:** I turned 'trust me' AI into 'let me show you' AI.\n\n**Impact:** Solving real problems in high-stakes finance, not just academic research.";
      }
      
      // Production Use
      if (q.includes('production') || q.includes('use') || q.includes('deploy') || q.includes('real')) {
        return "**iGraph in Production**\n\nCurrently deployed at Morgan Stanley for compliance verification workflows.\n\n**Use Case:**\nTransaction monitoring + automated compliance\n\n**How It Works:**\n1. AI analyzes transactions\n2. AI flags potential issues\n3. iGraph visualizes complete reasoning\n4. Analysts verify each step\n5. Decision made with full transparency\n\n**Benefits:**\n• Analysts verify AI decisions visually\n• Error detection is faster\n• Regulatory compliance improved\n• Cognitive load reduced\n\nThis isn't academic—it's solving real problems in high-stakes finance.";
      }
      
      // Transparency / Why
      if (q.includes('transparen') || q.includes('why') || q.includes('matter') || q.includes('important')) {
        return "**Why AI Transparency Matters:**\n\n**Trust:** Users can't trust what they can't verify\n\n**Compliance:** Regulatory requirements demand explainability\n\n**Error Detection:** Visual reasoning makes errors obvious\n\n**Verification:** Humans need to verify AI decisions, not blindly trust them\n\n**High-Stakes Decisions:** In finance, healthcare, legal—we need to see the reasoning\n\n**My Philosophy:**\nTransparency isn't optional—it's how we build trustworthy AI.\n\nThe future isn't AI that's smarter—it's AI we can understand and verify.";
      }
      
      return nodeContexts.research.welcome;
    }
    
    if (context === 'innovation') {
      // Agent-Native Development
      if (q.includes('agent') || q.includes('native')) {
        return "**Agent-Native Development**\n\nThe next paradigm shift in software engineering.\n\n**Traditional Approach:**\n• Humans write code\n• AI assists with autocomplete\n• AI is a tool\n\n**Agent-Native Approach:**\n• AI agents are architectural components\n• Systems designed for AI reasoning\n• Humans guide, verify, orchestrate\n• AI is the foundation, not a feature\n\n**What I'm Building:**\n• Structured LLM workflows (weeks → days)\n• Verification interfaces (iGraph-style)\n• Self-organizing systems\n• Human-AI collaboration patterns\n\nAs AI Squad Catalyst, I'm guiding my entire squad into this paradigm.";
      }
      
      // Future / 5 Years
      if (q.includes('future') || q.includes('5 year') || q.includes('coming') || q.includes('next')) {
        return "**Interfaces in 5 Years:**\n\n1. **Adaptive Complexity** - Auto-adjusts to user expertise\n2. **Conversational Everything** - Forms die, natural language wins\n3. **Predictive Surfaces** - UI appears before you search\n4. **Explainable AI** - Every decision has reasoning graph\n5. **Zero-State Design** - Apps build themselves from patterns\n6. **Generative UI** - AI creates interfaces on demand\n\n**What Disappears:**\n• Static menus\n• Traditional forms\n• Fixed dashboards\n• Manual configuration\n\n**Philosophy:** Future = intelligent simplification, not more features.";
      }
      
      // Current Work / Experiments
      if (q.includes('work') || q.includes('experiment') || q.includes('building') || q.includes('current')) {
        return "**Current Work:**\n\n**AI Squad Catalyst @ Morgan Stanley:**\nPeer leader guiding squad into agent-native GenAI development—the next frontier.\n\n**AI-Accelerated Development:**\n• Structured LLM prompts\n• Compressed weeks → days\n• 10x speedup achieved\n\n**Generative UI Systems:**\nInterfaces that adapt and generate based on context\n\n**Agent-Native Architecture:**\nBuilding for AI-first development paradigm\n\n**Human-AI Verification:**\niGraph-style reasoning visualization in production\n\n**Self-Organizing Interfaces:**\nUI that reorganizes based on usage patterns\n\nThese aren't academic—they're directional prototypes becoming production reality.";
      }
      
      // Vision / Philosophy
      if (q.includes('vision') || q.includes('believe') || q.includes('philosophy')) {
        return "**My Vision:**\n\nAI doesn't replace great engineers—it amplifies them.\n\n**Core Beliefs:**\n• AI should be the foundation, not a feature\n• Humans guide, verify, orchestrate\n• Transparency enables trust\n• Intelligence should simplify, not complicate\n• Future = adaptive, conversational, predictive\n\n**Goal:**\nBuilding the future of AI-augmented software development where:\n• Systems adapt to users\n• Interfaces predict needs\n• AI explains its reasoning\n• Complexity becomes simple\n\n**As AI Squad Catalyst:**\nGuiding entire teams into this paradigm at scale.";
      }
      
      return nodeContexts.innovation.welcome;
    }
    
    if (context === 'principles') {
      // Design Philosophy
      if (q.includes('paint') || q.includes('art') || q.includes('show') || q.includes('gallery') || q.includes('work')) {
        return "**My Painting Practice:**\n\nI maintain an active painting practice that directly informs my UI design work.\n\n**Featured Work:**\n• **Life** - Resilience and existential beauty through abstract expression\n• **Spring Triptych** - Joy's journey through dawn, day, and twilight\n• **Friends** - Connection and belonging through simple moments\n• **Vision** - Perception shapes reality in every gaze\n• **Breathe** - Flow and serenity like water finding its way\n• **Heritage** - Cultural identity woven through generations\n• **Snoopy Love** - Pure, unconditional devotion\n\n**What Painting Teaches:**\n• **Composition** → Visual hierarchy in UI\n• **Color Theory** → Emotional design & brand palettes\n• **Negative Space** → Simplicity in code\n• **Light & Contrast** → Accessibility & depth\n• **Storytelling** → Meaningful user experiences\n\n**Media:** Acrylic on canvas (various sizes)\n\n**Check the gallery** section to see all 7 paintings and how art and engineering converge!";
      }
      
      // Design Philosophy
      if (q.includes('philosophy') || q.includes('believe') || q.includes('principle')) {
        return "**My Design Philosophy:**\n\nInterfaces should amplify human intelligence, not replace it.\n\n**Core Principles:**\n• Code is craft, but outcomes are purpose\n• AI should explain itself\n• Configuration beats customization at scale\n• Best UI is invisible\n• Users focus on goals, not your interface\n\n**Design Values:**\n• Simplicity - Hide complexity, don't eliminate it\n• Clarity - Make complex things simple\n• Purpose - Design for outcomes, not aesthetics\n• Transparency - Show reasoning, don't hide it\n\n**After 12+ years:** Users care about their goals, not your interface.\n\n**Art Connection:** Check out my painting gallery to see how visual arts inform my design thinking!";
      }
      
      // Art & Code Connection
      if (q.includes('creative') || q.includes('connect') || q.includes('design')) {
       return "**Art & Code Connection:**\n\nArt and code are both acts of creation through constraint.\n\n**Parallels:**\n• **Composition:** Both require seeing the whole while crafting parts\n• **Iteration:** Both improve through continuous refinement\n• **Constraint:** Limitations drive creativity\n• **Craft:** Excellence comes from practiced skill\n• **Meaning:** Both tell stories through deliberate choices\n\n**From Canvas to Code:**\n• **Spring Triptych** demonstrates color harmony → Gradient systems & emotional palettes\n• **Vision** teaches perspective and depth → Layer hierarchy & UI focus\n• **Life** experiments with texture and resilience → Component composition & state\n• **Friends** explores connection → Information architecture & user flows\n• **Breathe** captures flow and serenity → Animation & interaction design\n\n**Philosophy:**\nCode is as much an art as painting—both require vision, craft, and care.\n\nArt isn't separate from engineering—it's how I think about design.\n\n**See my gallery** to explore all 7 paintings and their engineering parallels!";
      }
      
      return nodeContexts.principles.welcome;
    }
    
    // Default fallback
    return "I'm Nikita's AI assistant—trained on 12+ years of UI/UX experience across finance, cloud, healthcare, and telecom.\n\nNikita is an AI Squad Catalyst at Morgan Stanley—peer leader guiding teams into agent-native GenAI development.\n\nAsk about:\n• AI Squad Catalyst role\n• Experience & Skills (Morgan Stanley, VMware, Deutsche Bank, Accenture, Cognizant)\n• Research (iGraph, AI transparency)\n• Innovation (Future of UI, agent-native development)\n• Canvas & Code (Art + design philosophy)";
  };

  const FloatingParticles = ({ isActive }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-cyan-400 rounded-full ${isActive ? 'animate-float' : 'opacity-0'}`}
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    );
  };

  // Smooth inertia scrolling (desktop only)
  useEffect(() => {
    // Detect if device has touch capability (mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // Skip smooth scroll on mobile - use native scrolling
    if (isTouchDevice) {
      return;
    }
  
    const handleWheel = (e) => {
      if (showAI) return; // Disable when modal is open
      e.preventDefault();
      targetScroll.current += e.deltaY;
      targetScroll.current = Math.max(0, Math.min(targetScroll.current, document.body.scrollHeight - window.innerHeight));
    };
  
    const smoothScroll = () => {
      scrollVelocity.current = (targetScroll.current - currentScroll.current) * 0.08;
      currentScroll.current += scrollVelocity.current;
      window.scrollTo(0, currentScroll.current);
      requestAnimationFrame(smoothScroll);
    };
  
    window.addEventListener('wheel', handleWheel, { passive: false });
    const animId = requestAnimationFrame(smoothScroll);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      cancelAnimationFrame(animId);
    };
  }, [showAI]);

  // Magnetic cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      let finalX = e.clientX;
      let finalY = e.clientY;

      if (magnetTarget) {
        const rect = magnetTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
        );

        if (distance < 120) {
          const pullStrength = Math.max(0, 1 - distance / 120);
          finalX = e.clientX + (centerX - e.clientX) * pullStrength * 0.5;
          finalY = e.clientY + (centerY - e.clientY) * pullStrength * 0.5;
          setCursorScale(1.5);
        } else {
          setCursorScale(1);
        }
      }

      setCursorPos({ x: finalX, y: finalY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [magnetTarget]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]));
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Simple particles for hero only
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    let particles = [];

    // Minimal particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 255, 255, 0.3)';
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Fluid shader background (like example)
  useEffect(() => {
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    let animationId;

    const draw = () => {
      time += 0.005;

      // Multiple flowing gradients
      const gradient1 = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time) * 200,
        canvas.height * 0.3 + Math.cos(time * 0.8) * 200,
        0,
        canvas.width * 0.3,
        canvas.height * 0.3,
        canvas.width * 0.7
      );
      gradient1.addColorStop(0, 'rgba(34, 211, 238, 0.15)');
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.cos(time * 1.2) * 250,
        canvas.height * 0.6 + Math.sin(time * 0.6) * 250,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        canvas.width * 0.8
      );
      gradient2.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Cursor-reactive gradient
      const cursorGradient = ctx.createRadialGradient(
        mousePos.x,
        mousePos.y,
        0,
        mousePos.x,
        mousePos.y,
        300
      );
      cursorGradient.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
      cursorGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw gradients
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Flowing lines (shader-like effect)
      for (let i = 0; i < 5; i++) {
        const y = (Math.sin(time + i) * 0.5 + 0.5) * canvas.height;
        const waveOffset = Math.sin(time * 2 + i) * 50;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const offsetY = Math.sin(x * 0.01 + time + i) * 30;
          ctx.lineTo(x, y + offsetY + waveOffset);
        }
        ctx.strokeStyle = `rgba(34, 211, 238, ${0.05 + i * 0.01})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePos]);

  const handleSend = async () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    const query = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    try {
      // Call the async AI response function
      const response = await getAIResponse(query, selectedNode);
      setMessages(prev => [...prev, { type: 'ai', text: response }]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      setMessages(prev => [...prev, { 
        type: 'ai', 
        text: "I'm having trouble processing that request right now. Please try again or ask something else!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx>{`
        html {
          font-size: 18px !important;
        }
        
        @media (max-width: 640px) {
          html {
            font-size: 16px !important;
          }
        }
        
        body {
          font-size: 1.125rem;
          line-height: 1.7;
          overscroll-behavior: none;
        }
        
        p {
          font-size: 1.125rem !important;
          line-height: 1.8 !important;
        }
        
        .text-xs { font-size: 0.875rem !important; }
        .text-sm { font-size: 1rem !important; }
        .text-base { font-size: 1.125rem !important; }
        .text-lg { font-size: 1.25rem !important; }
        .text-xl { font-size: 1.5rem !important; }
        
        * {
          letter-spacing: 0.01em;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.5); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease-out forwards; }
        
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
      `}</style>

      {/* Magnetic Cursor */}

      {/* Shader Background - Visible across all sections */}
      <canvas
        ref={shaderCanvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ mixBlendMode: 'screen', zIndex: 0, opacity: 0.8 }}
      />

      {/* Main Content Wrapper */}
      <div className="relative" style={{ zIndex: 1 }}>

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 transition-all shadow-lg shadow-cyan-400/50" 
          style={{ width: `${scrollProgress}%` }} 
        />
      </div>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
        <canvas ref={canvasRef} className="absolute inset-0 opacity-20" style={{ zIndex: 2 }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" style={{ zIndex: 3 }} />

        <div className="relative z-10 text-center px-8 max-w-4xl" style={{ position: 'relative', zIndex: 10 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Nikita Kharya
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 text-gray-300 animate-fadeInUp stagger-1">
            {portfolioData.tagline}
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-cyan-300/70 font-light mb-12 px-4 animate-fadeInUp stagger-2">
            {portfolioData.subtitle}
          </p>

          <div className="flex items-center justify-center gap-12 text-sm text-gray-400 animate-fadeInUp stagger-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{portfolioData.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>12+ Years</span>
            </div>
          </div>
        </div>
      </section>

      {/* Get to Know Me */}
      <section 
        ref={el => sectionRefs.current['nodes'] = el}
        data-section="nodes"
        className="relative py-20 px-8 pb-80 sm:pb-20 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 ${visibleSections.has('nodes') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get to Know Me
            </h2>
            <p className="text-xl text-gray-400 font-light">Click any area to explore</p>
          </div>

          <div 
            className="relative h-[500px]"
            style={{ perspective: '2000px' }}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-cyan-400/30 rounded-full ${visibleSections.has('nodes') ? 'animate-float' : 'opacity-0'}`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`,
                    transform: `translate(${mousePos.x * (i * 2)}px, ${mousePos.y * (i * 2)}px)`,
                    transition: 'transform 0.3s ease-out',
                  }}
                />
              ))}
            </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 h-full items-center justify-center max-w-5xl mx-auto px-4">
              {portfolioData.neuralNodes.map((node, index) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;
                const isVisible = visibleSections.has('nodes');

                const colorMap = {
                  cyan: '#22d3ee',
                  blue: '#818cf8',
                  purple: '#a78bfa',
                  pink: '#f472b6'
                };

                const hexColor = colorMap[node.color] || '#22d3ee';

                const depth = index + 1;
                const parallaxStrength = 1 / depth;
                const parallaxX = mousePos.x * 40 * parallaxStrength;
                const parallaxY = mousePos.y * 40 * parallaxStrength;

                const rotateX = -mousePos.y * 8;
                const rotateY = mousePos.x * 8;

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => { setActiveNode(node.id); setMagnetTarget(null); }}
                    onMouseLeave={() => { setActiveNode(null); }}
                    onClick={() => { setSelectedNode(node.id); setMessages([]); setShowAI(true); }}
                    className={`relative group flex flex-col items-center ${isVisible ? 'animate-scaleIn' : 'opacity-0'}`}
                    style={{
                      transform: `
                        translateX(${parallaxX}px)
                        translateY(${parallaxY}px)
                        translateZ(${isHovered ? 100 : 0}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(${isHovered ? 1.15 : 1})
                      `,
                      transformStyle: 'preserve-3d',
                      transition: isHovered 
                        ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' 
                        : 'transform 0.15s ease-out',
                      zIndex: isHovered ? 50 : depth,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    {isHovered && (
                      <div 
                        className="absolute inset-0 blur-3xl opacity-60 rounded-full animate-pulse"
                        style={{ background: hexColor }}
                      />
                    )}

                    <div
                      className={`
                        w-32 h-32 rounded-full flex items-center justify-center
                        backdrop-blur-xl border-2
                        transition-all duration-500 mb-6
                        ${isHovered ? 'rotate-12' : 'rotate-0'}
                      `}
                      style={{
                        background: isHovered 
                          ? `linear-gradient(135deg, ${hexColor}40, ${hexColor}20)` 
                          : `linear-gradient(135deg, ${hexColor}20, ${hexColor}10)`,
                        borderColor: isHovered ? hexColor : `${hexColor}40`,
                        boxShadow: isHovered 
                          ? `0 20px 60px ${hexColor}60, inset 0 1px 0 rgba(255,255,255,0.2)` 
                          : 'none'
                      }}
                    >
                      <Icon 
                        className="transition-all duration-500" 
                        style={{ 
                          width: isHovered ? '56px' : '48px',
                          height: isHovered ? '56px' : '48px',
                          color: hexColor 
                        }} 
                      />
                    </div>

                    <h3 
                      className={`
                        text-center font-light transition-all duration-300
                        ${isHovered ? 'text-lg text-white' : 'text-sm text-gray-400'}
                      `}
                      style={{
                        color: isHovered ? hexColor : undefined
                      }}
                    >
                      {node.label}
                    </h3>

                    {isHovered && (
                      <p className="text-xs text-gray-500 text-center mt-2 max-w-[150px] animate-fadeInUp">
                        {node.description}
                      </p>
                    )}

                    {isHovered && (
                      <>
                        <Sparkles 
                          className="absolute -top-2 -right-2 w-4 h-4 animate-pulse"
                          style={{ color: hexColor }}
                        />
                        <Sparkles 
                          className="absolute -bottom-2 -left-2 w-3 h-3 animate-pulse"
                          style={{ color: hexColor, animationDelay: '0.5s' }}
                        />
                      </>
                    )}

                    <div 
                      className="absolute inset-0 bg-black/60 blur-2xl rounded-full -z-10 transition-opacity duration-500"
                      style={{
                        transform: 'translateY(20px) scale(0.8)',
                        opacity: isHovered ? 0.6 : 0.2
                      }}
                    />
                  </button>
                );
              })}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-cyan-400/20 animate-ping" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400/50" />
            </div>
          </div>
        </div>
      </section>

     {/* Timeline */}
      <section 
        ref={el => sectionRefs.current['timeline'] = el}
        data-section="timeline"
        className="relative mt-40 sm:mt-0 pt-20 sm:pt-20 pb-20 px-4 sm:px-8 bg-transparent min-h-screen"
        style={{ position: 'relative', zIndex: 10 }}
      >
        {/* Strong background to ensure visibility */}
        <div className="absolute inset-0 bg-black/90 pointer-events-none" style={{ zIndex: 0 }} />
        
        <div className="max-w-5xl mx-auto relative" style={{ zIndex: 1 }}>
          <div className={`text-center mb-12 sm:mb-16 ${visibleSections.has('timeline') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Evolution
            </h2>
          </div>

          <div className="relative overflow-visible">
            {/* Timeline line - visible on desktop (sm and up) */}
            <div className="absolute left-8 top-0 bottom-0 w-px hidden sm:block" style={{ zIndex: 0 }}>
              <div className={`h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 ${visibleSections.has('timeline') ? 'animate-pulse' : ''}`} />
            </div>

            {[...portfolioData.timeline].reverse().map((phase, index) => {
              const Icon = phase.icon;
              const isHovered = hoveredTimeline === phase.id;
              const isVisible = visibleSections.has('timeline');
              
              return (
                <React.Fragment key={phase.id}>
                  <div 
                    className={`relative mb-8 sm:mb-12 md:mb-16 pl-0 sm:pl-24 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.15}s`, position: 'relative', zIndex: 1 }}
                    onMouseEnter={() => { setHoveredTimeline(phase.id); setMagnetTarget(null); }}
                    onMouseLeave={() => { setHoveredTimeline(null); }}
                  >
                    <FloatingParticles isActive={isHovered} />
                    
                    {/* Icon - hidden on mobile, absolute positioned on desktop */}
                    <div className={`
                      hidden sm:flex
                      absolute left-0 top-0
                      w-16 h-16 
                      rounded-full border-2 
                      ${phase.current ? 'border-cyan-400' : phase.research ? 'border-purple-400' : 'border-gray-600'} 
                      ${phase.current || phase.research ? 'animate-pulse' : ''} 
                      bg-black items-center justify-center 
                      transition-all duration-300 
                      ${isHovered ? 'scale-125' : ''}
                    `}
                    style={{ zIndex: 2 }}
                    >
                      <Icon className={`w-6 h-6 ${phase.current ? 'text-cyan-400' : phase.research ? 'text-purple-400' : 'text-gray-400'}`} />
                      {isHovered && (
                        <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400 animate-pulse-ring" />
                      )}
                    </div>

                    {index < portfolioData.timeline.length - 1 && isHovered && (
                      <div className="absolute left-8 top-16 w-px h-24 overflow-hidden hidden sm:block">
                        <div className="h-full bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
                      </div>
                    )}

                    <div className={`
                        border border-gray-800 rounded-xl sm:rounded-2xl 
                        p-4 sm:p-6 lg:p-8 
                        backdrop-blur-xl bg-gray-900/90
                        hover:border-cyan-400/50 
                        transition-all duration-300 
                        ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-cyan-400/20' : ''}
                        w-full overflow-hidden
                      `}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 sm:gap-3 mb-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                            {phase.years}
                          </span>
                          {phase.current && <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-cyan-400/20 text-cyan-400 animate-pulse">CURRENT</span>}
                          {phase.catalyst && (
                            <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-gradient-to-r from-purple-400/20 to-cyan-400/20 border border-purple-400/50 text-purple-400 animate-pulse">
                              AI SQUAD CATALYST
                            </span>
                          )}
                          {phase.research && <span className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-purple-400/20 text-purple-400">RESEARCH</span>}
                        </div>
                        
                        {phase.metrics && (
                          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm">
                            {Object.entries(phase.metrics).map(([key, value]) => (
                              <div key={key} className="px-2 sm:px-3 py-1 rounded-full bg-gray-800 text-gray-400 text-xs sm:text-sm">
                                <span className="text-cyan-400">{value}</span> {key}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-2 text-cyan-400 break-words">{phase.phase}</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 break-words">{phase.company} • {phase.role}</p>

                      <div className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border ${isHovered ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-cyan-400/20 bg-cyan-400/5'} mb-4 transition-all overflow-hidden`}>
                        <div className="flex items-center gap-2 mb-2 sm:mb-3">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                          <span className="text-xs sm:text-sm text-cyan-400 font-medium">Key Impact</span>
                        </div>
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line break-words">{phase.story}</p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {phase.tech.map((tech, i) => (
                          <span 
                            key={i} 
                            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-800 text-gray-300 border border-gray-700 transition-all ${isHovered ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-400' : ''}`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile separator - only show between cards, not after last one */}
                  {index < portfolioData.timeline.length - 1 && (
                    <div className="block sm:hidden mb-8" style={{ position: 'relative', zIndex: 1 }}>
                      <div className="relative h-12 flex items-center">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
                        </div>
                        <div className="relative mx-auto w-8 h-8 rounded-full border border-cyan-400/30 bg-black/80 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section 
        ref={el => sectionRefs.current['expertise'] = el}
        data-section="expertise"
        className="relative py-20 px-4 sm:px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('expertise') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light">12+ years of hands-on experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {portfolioData.expertise.map((item, i) => (
              <div 
                key={i} 
                className={`group p-4 sm:p-6 lg:p-8 border border-gray-800 rounded-xl sm:rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all hover:transform hover:-translate-y-1 ${visibleSections.has('expertise') ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                onMouseLeave={() => setMagnetTarget(null)}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-light mb-3 sm:mb-4 text-cyan-400 group-hover:animate-glow break-words">{item.category}</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed break-words">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section 
        ref={el => sectionRefs.current['blog'] = el}
        data-section="blog"
        className="relative py-20 px-4 sm:px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('blog') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Thought Leadership
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light px-4">Writing about the intersection of AI, UI, and human experience</p>
          </div>

          <div className="grid gap-6 sm:gap-8">
            {portfolioData.blogs.map((blog, idx) => (
              <div 
                key={blog.id} 
                className={`group relative ${visibleSections.has('blog') ? 'animate-scaleIn' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 0.2}s` }}
                onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                onMouseLeave={() => setMagnetTarget(null)}
              >
                {blog.featured && (
                  <div className="absolute -top-3 left-8 z-10">
                    <span className="px-4 py-1 text-xs bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full text-black font-medium">
                      FEATURED POST
                    </span>
                  </div>
                )}

                <div className="border border-gray-800 rounded-xl sm:rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
                  <div className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400" />
                  
                  <div className="p-4 sm:p-6 lg:p-8">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-sm">
                      <span className="text-sm text-cyan-400">{blog.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{blog.readTime}</span>
                      {blog.platform && (
                        <>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-400">Published on {blog.platform}</span>
                        </>
                      )}
                      {blog.status === 'published' && (
                        <>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="flex items-center gap-1 text-sm text-green-400">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Live
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-3 text-white group-hover:text-cyan-400 transition-colors break-words">
                      {blog.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-400 mb-4 sm:mb-6 font-light break-words">
                      {blog.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {blog.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all group/btn"
                    >
                      <BookOpen className="w-4 h-4 text-cyan-400 group-hover/btn:animate-pulse" />
                      <span className="text-cyan-400">Read on {blog.platform || 'Blog'}</span>
                      <ChevronRight className="w-4 h-4 text-cyan-400 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}

            <div 
              className={`border border-gray-800/50 rounded-2xl bg-gray-900/30 p-12 text-center ${visibleSections.has('blog') ? 'animate-fadeInUp stagger-2' : 'opacity-0'}`}
              onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
              onMouseLeave={() => setMagnetTarget(null)}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gray-700 bg-gray-800/50 mb-6">
                <Sparkles className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-light text-gray-500 mb-3">More Insights Coming Soon</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto">
                Currently crafting articles on AI-driven design systems, the future of adaptive interfaces, and lessons from leading frontend teams at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* Art Gallery - Canvas & Code */}
      <section 
        ref={el => sectionRefs.current['gallery'] = el}
        data-section="gallery"
        className="relative py-20 px-4 sm:px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('gallery') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Canvas & Code: Where Art Meets Technology
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-light max-w-3xl mx-auto px-4">
              My painting practice trains the eye for composition, color harmony, and visual balance; skills that directly translate to exceptional UI design. Here's proof that art and engineering aren't separate worlds.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {portfolioData.paintings.map((painting, index) => {
              const isHovered = hoveredPainting === painting.id;
              const isVisible = visibleSections.has('gallery');
              
              return (
                <div
                  key={painting.id}
                  className={`group relative ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => { setHoveredPainting(painting.id); setMagnetTarget(null); }}
                  onMouseLeave={() => setHoveredPainting(null)}
                  onClick={() => setLightboxImage(painting)}
                >
                  <div className={`
                    relative overflow-hidden rounded-2xl border-2 cursor-pointer
                    transition-all duration-500
                    ${isHovered ? 'border-pink-400/50 transform -translate-y-2 shadow-2xl shadow-pink-400/20' : 'border-gray-800'}
                  `}>
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-gray-900">
                      <img 
                        src={`/painting/${painting.filename}`}
                        alt={painting.title}
                        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                      />
                      
                      {/* Overlay */}
                      <div className={`
                        absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent
                        transition-opacity duration-500
                        ${isHovered ? 'opacity-100' : 'opacity-0'}
                      `}>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-2xl font-light text-white mb-2">{painting.title}</h3>
                          <p className="text-sm text-cyan-400 mb-3">{painting.medium}</p>
                          <p className="text-sm text-gray-300 leading-relaxed">{painting.description}</p>
                          <div className="mt-4 flex items-center gap-2 text-xs text-pink-400">
                            <Sparkles className="w-3 h-3" />
                            <span>{painting.theme}</span>
                          </div>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {painting.featured && (
                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs bg-gradient-to-r from-pink-400 to-purple-400 text-black font-medium">
                          FEATURED
                        </div>
                      )}
                    </div>

                    {/* Quick Info (visible on mobile/non-hover) */}
                    <div className="p-4 bg-gray-900/90 md:hidden">
                      <h3 className="text-lg font-light text-white mb-1">{painting.title}</h3>
                      <p className="text-xs text-cyan-400">{painting.medium}</p>
                    </div>
                  </div>

                  {/* Floating glow effect on hover */}
                  {isHovered && (
                    <div 
                      className="absolute inset-0 -z-10 blur-3xl opacity-60 rounded-2xl"
                      style={{ background: 'linear-gradient(135deg, #f472b6, #a78bfa, #22d3ee)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-xl animate-fadeInUp overflow-y-auto"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="fixed top-4 right-4 z-[201] w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-pink-400 bg-black/80 hover:bg-pink-400/20 text-pink-400 hover:text-white transition-all flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg"
            onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
            onMouseLeave={() => setMagnetTarget(null)}
          >
            ✕
          </button>

          <div className="max-w-6xl w-full my-4 sm:my-0" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-start">
              {/* Image */}
              <div className="relative max-h-[50vh] sm:max-h-none overflow-hidden">
                <img 
                  src={`/painting/${lightboxImage.filename}`}
                  alt={lightboxImage.title}
                  className="w-full h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border-2 border-pink-400/30"
                />
                {lightboxImage.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs bg-gradient-to-r from-pink-400 to-purple-400 text-black font-medium">
                    FEATURED
                  </div>
                )}
              </div>

              {/* Details */}
             <div className="text-left px-4 sm:px-0">
                <h2 className="text-2xl sm:text-4xl font-light mb-3 sm:mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {lightboxImage.title}
                </h2>
                <div className="mb-6">
                  <p className="text-cyan-400 text-lg mb-2">{lightboxImage.medium}</p>
                  <div className="flex items-center gap-2 text-sm text-pink-400">
                    <Sparkles className="w-4 h-4" />
                    <span>{lightboxImage.theme}</span>
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {lightboxImage.description}
                </p>
                
                {/* Connection to Engineering */}
                <div className="border-t border-gray-800 pt-6">
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-3">Design Skills Applied</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs border border-pink-400/30 bg-pink-400/10 text-pink-400">
                      Color Theory
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs border border-purple-400/30 bg-purple-400/10 text-purple-400">
                      Composition
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                      Visual Balance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      <section 
        ref={el => sectionRefs.current['contact'] = el}
        data-section="contact"
        className="relative py-20 px-4 sm:px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-px h-24 bg-gradient-to-b from-transparent to-cyan-400 mx-auto mb-8 ${visibleSections.has('contact') ? 'animate-fadeInUp' : 'opacity-0'}`} />
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-light mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-1' : 'opacity-0'}`}>
            Let's Build the Future
          </h2>
          <p className={`text-sm sm:text-base lg:text-lg text-gray-300 font-light mb-12 px-4 max-w-2xl mx-auto ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-2' : 'opacity-0'}`}>
            I design systems, not screens. My work sits at the intersection of UI craft, technical architecture, and AI-driven intelligence.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-3' : 'opacity-0'}`}>
            <a 
              href="mailto:nikitakharya09@gmail.com" 
              className="w-full sm:w-auto px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2 group"
              onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
              onMouseLeave={() => setMagnetTarget(null)}
            >
              <Mail className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nikita-kharya-14a83670/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2 group"
              onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
              onMouseLeave={() => setMagnetTarget(null)}
            >
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">LinkedIn</span>
            </a>
            <a 
              href="/Nikita_Kharya_Resume.docx"
              download="/Nikita_Kharya_Resume.docx"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/50 rounded-full hover:from-cyan-400/30 hover:to-purple-400/30 transition-all flex items-center justify-center gap-2 group"
              onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
              onMouseLeave={() => setMagnetTarget(null)}
            >
              <Download className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">Resume</span>
            </a>
          </div>
        </div>
      </section>
      </div>

      {/* AI Chat */}
      {showAI && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 lg:p-8 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl h-[80vh] sm:h-[600px] border border-cyan-400/30 rounded-2xl sm:rounded-3xl bg-black/90 flex flex-col overflow-hidden shadow-2xl animate-scaleIn">
            <div className="p-4 sm:p-6 border-b border-cyan-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-cyan-400/50 bg-cyan-400/10 flex items-center justify-center">
                  <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-light">Nikita's AI Assistant</h3>
                  <p className="text-xs text-gray-400">
                    {selectedNode ? `${portfolioData.neuralNodes.find(n => n.id === selectedNode)?.label || 'Chat'}` : 'Ask me anything'}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setShowAI(false)} 
                className="text-gray-400 hover:text-white transition-colors"
                onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                onMouseLeave={() => setMagnetTarget(null)}
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 bg-black">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <Brain className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-cyan-400/30 bg-cyan-400/10 p-3 sm:p-4 mx-auto mb-4 animate-pulse text-cyan-400" />
                  <p className="text-sm sm:text-base text-gray-300 font-light mb-6 text-left max-w-md mx-auto whitespace-pre-line leading-relaxed px-2">
                    {selectedNode && nodeContexts[selectedNode] ? nodeContexts[selectedNode].welcome : 
                      "Hi! I'm here to answer questions about Nikita's work, experience, research, and vision. Ask me anything!"}
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[80%] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-3 ${msg.type === 'user' ? 'bg-cyan-400/20 border border-cyan-400/30' : 'bg-gray-900/50 border border-gray-800'}`}>
                    {msg.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-3 h-3 text-cyan-400" />
                        <span className="text-sm text-cyan-400">AI Response</span>
                      </div>
                    )}
                    <p className="text-sm sm:text-base font-light leading-relaxed whitespace-pre-line text-white break-words">{msg.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-2xl px-5 py-4">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 sm:p-4 lg:p-6 border-t border-cyan-400/20 bg-black">
              <div className="flex gap-2 sm:gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about design philosophy, projects, or the future..."
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-900/50 border border-gray-800 rounded-lg sm:rounded-xl focus:outline-none focus:border-cyan-400/50 text-white placeholder-gray-500 font-light text-sm sm:text-base"
                  onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                  onMouseLeave={() => setMagnetTarget(null)}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputMessage.trim()}
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/50 rounded-lg sm:rounded-xl hover:from-cyan-400/30 disabled:opacity-30"
                  onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                  onMouseLeave={() => setMagnetTarget(null)}
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
