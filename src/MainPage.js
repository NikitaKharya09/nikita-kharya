import React, { useState, useEffect, useRef } from 'react';
import { Brain, Send, Sparkles, Network, Mail, Linkedin, Download, MapPin, Award, Compass, Briefcase, BookOpen, Rocket, ChevronRight, Layers, Zap, Code, Database, GitBranch } from 'lucide-react';

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
    subtitle: "UI + AI | VP of Frontend | Researcher | Systems Thinker",
    
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
        story: "Built healthcare applications end-to-end with complete ownership.\n\n• Sole developer for 3 production applications\n• Learned user-centric design through real-world feedback\n• Discovered that elegant code means nothing if users struggle\n\nKey Insight: User needs trump technical perfection—every time.",
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
        story: "Led enterprise migration projects across telecom and banking domains.\n\n• Zero-defect AngularJS → Angular migration\n• Multi-client delivery in high-stakes environments\n• Developed systematic approach to technical transformation\n\nKey Insight: Great migrations require planning for change, not chasing perfection.",
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
        story: "Architected config-driven systems for transaction monitoring and compliance.\n\n• Built framework where JSON schemas generate entire UIs\n• Led and mentored team of 6 engineers\n• Reduced manual compliance review risk through automation\n\nKey Insight: Configuration beats customization at scale—make systems extensible, not just functional.",
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
        story: "Modernized CloudHealth UI and pioneered reusable component architecture.\n\n• React migration for multi-cloud analysis workflows\n• Built UI-as-a-Service library serving 8+ teams\n• POC demonstrated 35% reduction in analysis time\n\nKey Insight: Component libraries are products, not side projects—invest accordingly.",
        tech: ["React", "TypeScript", "UIaaS", "Multi-Cloud", "D3.js"],
        icon: Layers,
        metrics: { speedup: "35%", teams: "8+" }
      },
      {
        id: 5,
        phase: "VP Evolution — The AI-Augmented Architect",
        years: "2023-Present",
        company: "Morgan Stanley",
        role: "Vice President, UI Engineering & Architecture",
        story: "Leading enterprise transformation through AI-augmented development and unified platforms.\n\n• One UI Platform: 3 apps → 1 workflow = 33+ hours saved daily\n• AI Framework: Compressed 3-week cycles into 2 days (10x speedup)\n• Compliance platform now firm-wide standard\n• Managing 8 engineers across multiple high-impact projects\n\nKey Insight: AI amplifies great architecture—it doesn't replace it.",
        tech: ["React", "TypeScript", "GraphQL", "AI/LLM Integration", "Micro-Frontends"],
        icon: Zap,
        current: true,
        metrics: { team: 8, saved: "33h/day", speedup: "10x" }
      },
      {
        id: 6,
        phase: "Research — The Future Builder",
        years: "2024",
        company: "Independent Research",
        role: "Published Author & Innovator",
        story: "Published research transforming how humans interact with AI systems.\n\n• Paper: 'When AI Reasoning Meets Interface Design'\n• Introduced iGraph visualization for AI transparency\n• Deployed in production at Morgan Stanley for compliance verification\n\nKey Insight: The future isn't smarter AI—it's AI we can understand and verify.",
        tech: ["AI Transparency", "iGraph", "Reasoning Visualization", "Human-AI Verification"],
        icon: BookOpen,
        research: true,
        metrics: { impact: "Firm-wide", focus: "AI+UI" }
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
    ]
  };

  // Node contexts
  const nodeContexts = {
    principles: {
      welcome: "**Canvas & Code Node**\n\nWhere art meets technology. I discuss my design frameworks, painting practice, and visual philosophy.\n\nAsk me:\n• What's your design philosophy?\n• Tell me about your paintings\n• How do art and code connect?"
    },
    experience: {
      welcome: "**Experience & Skills Node**\n\n12+ years across healthcare, telecom, banking, cloud, and fintech.\n\nAsk me:\n• Tell me about Morgan Stanley\n• What did you build at VMware?\n• Your Deutsche Bank work?\n• Accenture migration projects?\n• Where did you start?"
    },
    research: {
      welcome: "**Research Node**\n\nPublished: 'When AI Reasoning Meets Interface Design'\n\nIntroducing the iGraph system for AI transparency.\n\nAsk me:\n• Explain your research\n• What is iGraph?\n• How is it used in production?\n• Why does AI transparency matter?"
    },
    innovation: {
      welcome: "**Innovation Node**\n\nExploring the future of UI+AI interactions.\n\nAsk me:\n• What will interfaces look like in 5 years?\n• Tell me about your experiments\n• What are you working on?\n• What's your technical stack?"
    }
  };

  // AI responses
  const getAIResponse = (query, context) => {
    const q = query.toLowerCase();

    if (context === 'principles') {
      if (q.includes('philosophy') || q.includes('stand for')) {
        return "**My Design Philosophy:**\n\nInterfaces should amplify human intelligence, not replace it.\n\n• Code is craft, but outcomes are purpose\n• AI should explain itself\n• Configuration beats customization at scale\n• Best UI is invisible\n\nAfter 12+ years, I've learned: users focus on goals, not your interface.";
      }
      if (q.includes('density') || q.includes('adaptive')) {
        return "**Adaptive Cognitive Density**\n\nInterfaces that adjust complexity based on user expertise.\n\n• Track user proficiency through behavior\n• Adjust information density progressively\n• Beginners see simple, experts see full power\n• No mode switching—it just knows\n\nExample: Beginner sees 'Send Payment'. Expert sees 'Send | Schedule | Batch | API'.";
      }
      return nodeContexts.principles.welcome;
    }

    if (context === 'experience') {
      if (q.includes('morgan')) {
        return "**Morgan Stanley (2023-Present)**\n\nVP leading 8 engineers across FTE and contractor resources.\n\n**One UI Platform:**\n• 3 apps → 1 unified workflow\n• 25min → 15min per account\n• 33+ hours saved daily (~200 accounts)\n• React 18, TypeScript, GraphQL\n\n**AI Framework:**\n• Pioneered AI-accelerated development\n• 3 weeks → 2 days (10x faster)\n• Structured LLM prompts + workflows\n\n**Compliance Platform:**\n• Now firm-wide standard\n• Eliminated compliance gaps\n\nTransformed onboarding platform into complete account-management solution in 1 year.";
      }
      if (q.includes('vmware') || q.includes('cloud')) {
        return "**VMware (2022-2023)**\n\n**CloudHealth UI:**\n• React migration for multi-cloud analysis\n• Improved usability + workflows\n\n**UIaaS:**\n• UI-as-a-Service component library\n• Unified experience across 8+ teams\n• Visualization POC: 35% faster analysis\n\nPattern: Component libraries are products, not side projects.";
      }
      if (q.includes('deutsche') || q.includes('bank')) {
        return "**Deutsche Bank (2019-2022)**\n\nAssistant Vice President\n\n**Transaction Monitoring Platform:**\n• Automated compliance workflows\n• Reduced manual review risk\n\n**Config-Driven Framework:**\n• JSON schemas generate UIs\n• Reused across multiple banking apps\n• Led & mentored team of 6 engineers\n\nPattern: Configuration beats customization at scale.";
      }
      if (q.includes('accenture')) {
        return "**Accenture (2017-2019)**\n\nSenior Software Engineer\n\n• Led AngularJS → Angular migration\n• Zero defects across enterprise clients\n• Telecom & banking domains\n\nLearned: Migration strategy > migration speed. Plan for change, not perfection.";
      }
      if (q.includes('cognizant') || q.includes('start')) {
        return "**Cognizant (2013-2017)**\n\nAssociate\n\n• Built healthcare applications end-to-end\n• Solo development, full ownership\n• Multiple production apps\n\nThis is where I learned: User needs trump technical elegance. Code is only half the battle.";
      }
      return nodeContexts.experience.welcome;
    }

    if (context === 'research') {
      if (q.includes('paper') || q.includes('research') || q.includes('publication')) {
        return "**My Research: 'When AI Reasoning Meets Interface Design'**\n\nProblem: AI explanations are text walls. Users can't verify reasoning or catch errors.\n\nSolution: iGraph visualization system\n• Facts → Steps → Calculations → Results\n• Interactive node graphs\n• Errors visually obvious\n• Real-time verification\n\n**Production Use:**\nDeployed at Morgan Stanley for compliance verification. When AI flags transactions, users see exact reasoning paths.\n\nI turned 'trust me' AI into 'let me show you' AI.";
      }
      if (q.includes('igraph')) {
        return "**iGraph Visualization System**\n\nStructured reasoning visualization for AI transparency.\n\n**Core Concept:**\n• Tag AI reasoning (facts, steps, calculations)\n• Generate interactive graphs (nodes + edges)\n• Enable path tracing and gap detection\n\n**Real Impact:**\nMorgan Stanley compliance systems use this. When AI flags suspicious transactions, analysts see the complete reasoning chain—no black box.\n\nTransparency isn't optional. It's how we build trustworthy AI.";
      }
      if (q.includes('apply') || q.includes('production') || q.includes('use')) {
        return "**iGraph in Production**\n\nCurrently deployed at Morgan Stanley for compliance verification workflows.\n\n**Use Case:**\nTransaction monitoring + automated compliance\n\n**Why It Matters:**\n• Analysts verify AI decisions visually\n• Error detection is faster\n• Regulatory compliance improved\n• Cognitive load reduced\n\nThis isn't academic—it's solving real problems in high-stakes finance.";
      }
      return nodeContexts.research.welcome;
    }

    if (context === 'innovation') {
      if (q.includes('future') || q.includes('5 years')) {
        return "**Interfaces in 5 Years:**\n\n1. Adaptive Complexity - Auto-adjusts to user expertise\n2. Conversational Everything - Forms die, natural language wins\n3. Predictive Surfaces - UI appears before you search\n4. Explainable AI - Every decision has reasoning graph\n5. Zero-State Design - Apps build themselves from patterns\n6. Generative UI Systems - AI creates interfaces on demand\n\nWhat disappears:\n• Static menus\n• Traditional forms\n• Fixed dashboards\n• Manual configuration\n\nFuture = intelligent simplification, not more features.";
      }
      if (q.includes('experiment') || q.includes('working')) {
        return "**My Current Experiments:**\n\n**AI-Accelerated Development:**\nStructured LLM prompts compressing weeks into days\n\n**Generative UI Systems:**\nInterfaces that adapt and generate based on context\n\n**Self-Arranging Dashboards:**\nUI reorganizes based on usage patterns\n\n**Intent-Driven Interfaces:**\nPredicts user goals, reconfigures accordingly\n\n**Human-AI Verification:**\niGraph-style reasoning visualization\n\nThese aren't academic—they're directional prototypes heading to production.";
      }
      if (q.includes('skill') || q.includes('tech')) {
        return "**Technical Arsenal:**\n\n**Frontend:**\nReact • TypeScript • Redux • MobX • Angular • React Native • Material UI\n\n**Architecture:**\nMicro-Frontends • GraphQL • REST • WebSockets • BFF Architecture\n\n**AI + UI:**\nLLM-driven Flows • Prompt Engineering • AI-Assisted Development • Reasoning Visualization • D3.js\n\n**Tooling:**\nWebpack • Vite • CI/CD • Docker\n\n**Specialization:**\nAccessibility (WCAG) • Responsive Design • Config-Driven Architecture";
      }
      return nodeContexts.innovation.welcome;
    }

    return "I'm Nikita's AI assistant—trained on 12+ years of UI/UX experience across finance, cloud, healthcare, and telecom.\n\nAsk about:\n• Experience & Skills (Morgan Stanley, VMware, Deutsche Bank, Accenture, Cognizant)\n• Research (iGraph, AI transparency)\n• Innovation (Future of UI, AI-accelerated development)\n• Canvas & Code (Art + design philosophy)";
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

  // Smooth inertia scrolling
  useEffect(() => {
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

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);
    const query = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'ai', text: getAIResponse(query, selectedNode) }]);
      setIsTyping(false);
    }, 1200);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <style jsx>{`
        * {
          cursor: none !important;
        }
        
        body {
          overscroll-behavior: none;
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
      <div
        className="fixed pointer-events-none z-[100]"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorScale})`,
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <div className="w-10 h-10 border-2 border-cyan-400 rounded-full opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full" />
        <div className="absolute inset-0 w-10 h-10 bg-cyan-400 rounded-full blur-xl opacity-30 animate-pulse" />
      </div>

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
          <h1 className="text-7xl font-light mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Nikita Kharya
            </span>
          </h1>
          
          <h2 className="text-4xl font-light mb-6 text-gray-300 animate-fadeInUp stagger-1">
            {portfolioData.tagline}
          </h2>
          
          <p className="text-xl text-cyan-300/70 font-light mb-12 animate-fadeInUp stagger-2">
            {portfolioData.subtitle}
          </p>

          <div className="flex items-center justify-center gap-12 text-sm text-gray-400 animate-fadeInUp stagger-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{portfolioData.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Boston, MA</span>
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
        className="relative py-20 px-8 bg-transparent"
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

            <div className="grid grid-cols-4 gap-12 h-full items-center justify-center max-w-5xl mx-auto">
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
        className="relative py-20 px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-5xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('timeline') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Evolution
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px">
              <div className={`h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 ${visibleSections.has('timeline') ? 'animate-pulse' : ''}`} />
            </div>

            {[...portfolioData.timeline].reverse().map((phase, index) => {
              const Icon = phase.icon;
              const isHovered = hoveredTimeline === phase.id;
              const isVisible = visibleSections.has('timeline');
              
              return (
                <div 
                  key={phase.id} 
                  className={`relative mb-16 pl-24 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => { setHoveredTimeline(phase.id); setMagnetTarget(null); }}
                  onMouseLeave={() => { setHoveredTimeline(null); }}
                >
                  <FloatingParticles isActive={isHovered} />
                  
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-2 ${phase.current ? 'border-cyan-400' : phase.research ? 'border-purple-400' : 'border-gray-600'} ${phase.current || phase.research ? 'animate-pulse' : ''} bg-black flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
                    <Icon className={`w-6 h-6 ${phase.current ? 'text-cyan-400' : phase.research ? 'text-purple-400' : 'text-gray-400'}`} />
                    {isHovered && (
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400 animate-pulse-ring" />
                    )}
                  </div>

                  {index < portfolioData.timeline.length - 1 && isHovered && (
                    <div className="absolute left-8 top-16 w-px h-24 overflow-hidden">
                      <div className="h-full bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
                    </div>
                  )}

                  <div className={`border border-gray-800 rounded-2xl p-8 backdrop-blur-xl bg-gray-900/50 hover:border-cyan-400/50 transition-all duration-300 ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-cyan-400/20' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs border border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                          {phase.years}
                        </span>
                        {phase.current && <span className="px-3 py-1 rounded-full text-xs bg-cyan-400/20 text-cyan-400 animate-pulse">CURRENT</span>}
                        {phase.research && <span className="px-3 py-1 rounded-full text-xs bg-purple-400/20 text-purple-400">RESEARCH</span>}
                      </div>
                      
                      {phase.metrics && (
                        <div className="flex gap-3 text-xs">
                          {Object.entries(phase.metrics).map(([key, value]) => (
                            <div key={key} className="px-3 py-1 rounded-full bg-gray-800 text-gray-400">
                              <span className="text-cyan-400">{value}</span> {key}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <h3 className="text-3xl font-light mb-2 text-cyan-400">{phase.phase}</h3>
                    <p className="text-lg text-gray-300 mb-6">{phase.company} • {phase.role}</p>

                    <div className={`p-6 rounded-xl border ${isHovered ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-cyan-400/20 bg-cyan-400/5'} mb-4 transition-all`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-400 font-medium">Key Impact</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{phase.story}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {phase.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-300 border border-gray-700 transition-all ${isHovered ? 'border-cyan-400/50 bg-cyan-400/10 text-cyan-400' : ''}`}
                          style={{ transitionDelay: `${i * 50}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section 
        ref={el => sectionRefs.current['expertise'] = el}
        data-section="expertise"
        className="relative py-20 px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('expertise') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-400 font-light">12+ years of hands-on experience</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {portfolioData.expertise.map((item, i) => (
              <div 
                key={i} 
                className={`group p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all hover:transform hover:-translate-y-1 ${visibleSections.has('expertise') ? 'animate-fadeInUp' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                onMouseLeave={() => setMagnetTarget(null)}
              >
                <h3 className="text-2xl font-light mb-4 text-cyan-400 group-hover:animate-glow">{item.category}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.skills}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section 
        ref={el => sectionRefs.current['blog'] = el}
        data-section="blog"
        className="relative py-20 px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 ${visibleSections.has('blog') ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Thought Leadership
            </h2>
            <p className="text-xl text-gray-400 font-light">Writing about the intersection of AI, UI, and human experience</p>
          </div>

          <div className="grid gap-8">
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

                <div className="border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
                  <div className="h-1 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400" />
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
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

                    <h3 className="text-3xl font-light mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-lg text-gray-400 mb-6 font-light">
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

      {/* Contact */}
      <section 
        ref={el => sectionRefs.current['contact'] = el}
        data-section="contact"
        className="relative py-20 px-8 bg-transparent"
      >
        {/* Dimmer overlay for this section */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none" style={{ zIndex: -1 }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-px h-24 bg-gradient-to-b from-transparent to-cyan-400 mx-auto mb-8 ${visibleSections.has('contact') ? 'animate-fadeInUp' : 'opacity-0'}`} />
          <h2 className={`text-4xl font-light mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-1' : 'opacity-0'}`}>
            Let's Build the Future
          </h2>
          <p className={`text-lg text-gray-300 font-light mb-12 ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-2' : 'opacity-0'}`}>
            I design systems, not screens. My work sits at the intersection of UI craft, technical architecture, and AI-driven intelligence.
          </p>

          <div className={`flex items-center justify-center gap-6 ${visibleSections.has('contact') ? 'animate-fadeInUp stagger-3' : 'opacity-0'}`}>
            <a 
              href="mailto:nikitakharya09@gmail.com" 
              className="px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2 group"
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
              className="px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2 group"
              onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
              onMouseLeave={() => setMagnetTarget(null)}
            >
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">LinkedIn</span>
            </a>
            <a 
              href="/Nikita_Kharya_Resume.txt"
              download="Nikita_Kharya_Resume.txt"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/50 rounded-full hover:from-cyan-400/30 hover:to-purple-400/30 transition-all flex items-center gap-2 group"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl h-[600px] border border-cyan-400/30 rounded-3xl bg-black/90 flex flex-col overflow-hidden shadow-2xl animate-scaleIn">
            <div className="p-6 border-b border-cyan-400/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-cyan-400/50 bg-cyan-400/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-light">Nikita's AI Assistant</h3>
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

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-black">
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <Brain className="w-16 h-16 rounded-full border border-cyan-400/30 bg-cyan-400/10 p-4 mx-auto mb-4 animate-pulse text-cyan-400" />
                  <p className="text-gray-300 font-light mb-6 text-left max-w-md mx-auto whitespace-pre-line">
                    {selectedNode && nodeContexts[selectedNode] ? nodeContexts[selectedNode].welcome : 
                      "Hi! I'm here to answer questions about Nikita's work, experience, research, and vision. Ask me anything!"}
                  </p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-5 py-4 ${msg.type === 'user' ? 'bg-cyan-400/20 border border-cyan-400/30' : 'bg-gray-900/50 border border-gray-800'}`}>
                    {msg.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-3 h-3 text-cyan-400" />
                        <span className="text-xs text-cyan-400">AI Response</span>
                      </div>
                    )}
                    <p className="text-sm font-light leading-relaxed whitespace-pre-line text-white">{msg.text}</p>
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

            <div className="p-6 border-t border-cyan-400/20 bg-black">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about design philosophy, projects, or the future..."
                  className="flex-1 px-5 py-3 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-cyan-400/50 text-white placeholder-gray-500 font-light text-sm"
                  onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                  onMouseLeave={() => setMagnetTarget(null)}
                />
                <button
                  onClick={handleSend}
                  disabled={!inputMessage.trim()}
                  className="px-5 py-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/50 rounded-xl hover:from-cyan-400/30 disabled:opacity-30"
                  onMouseEnter={(e) => setMagnetTarget(e.currentTarget)}
                  onMouseLeave={() => setMagnetTarget(null)}
                >
                  <Send className="w-5 h-5 text-cyan-400" />
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
