import React, { useState, useEffect, useRef } from 'react';
import { Brain, Send, Sparkles, Network, Mail, Linkedin, Download, MapPin, Award, Compass, Briefcase, BookOpen, Rocket, ChevronRight, Layers, Zap, Code, Database, GitBranch } from 'lucide-react';

function MainPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showAI, setShowAI] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredTimeline, setHoveredTimeline] = useState(null);
  const [activeNode, setActiveNode] = useState(null);
  const messagesEndRef = useRef(null);
  const canvasRef = useRef(null);

  // Portfolio Data
  const portfolioData = {
    name: "Nikita Kharya",
    title: "VP Frontend Engineering",
    company: "Morgan Stanley",
    tagline: "Designing the Interfaces of an Intelligent Future",
    subtitle: "UI + AI | VP of Frontend | Researcher | Systems Thinker",
    
    neuralNodes: [
      { 
        id: 'principles', 
        label: 'Canvas & Code', 
        icon: Compass,
        color: 'cyan',
        description: 'Art & design philosophy'
      },
      { 
        id: 'experience', 
        label: 'Experience', 
        icon: Layers,
        color: 'blue',
        description: '12+ years across industries'
      },
      { 
        id: 'research', 
        label: 'Research', 
        icon: BookOpen,
        color: 'purple',
        description: 'AI transparency & visualization'
      },
      { 
        id: 'innovation', 
        label: 'Innovation', 
        icon: Rocket,
        color: 'pink',
        description: 'Future UI experiments'
      }
    ],

    timeline: [
      {
        id: 1,
        phase: "Foundations — The Pattern Seeker",
        years: "2013-2017",
        company: "Cognizant",
        role: "Associate",
        story: "This is where I learned that code is only half the battle. Building healthcare applications solo taught me that user needs trump technical elegance.",
        pattern: "End-to-end ownership breeds excellence",
        tech: ["HTML5", "CSS3", "AngularJS"],
        icon: Code,
        metrics: { apps: 3, users: "5K+" }
      },
      {
        id: 2,
        phase: "Multi-Industry Era — The Explorer",
        years: "2017-2019",
        company: "Accenture",
        role: "Senior Software Engineer",
        story: "Leading AngularJS to Angular migration with zero defects taught me systematic thinking. Great engineers plan for change, not perfection.",
        pattern: "Migration strategy > migration speed",
        tech: ["Angular", "UX Design"],
        icon: GitBranch,
        metrics: { defects: 0, team: 5 }
      },
      {
        id: 3,
        phase: "Fintech Leadership — The Systems Architect",
        years: "2019-2022",
        company: "Deutsche Bank",
        role: "Assistant Vice President",
        story: "Config-driven architecture where JSON schemas generate UIs. Mentoring 7 developers showed me: the best code is code others can extend.",
        pattern: "Configuration beats customization at scale",
        tech: ["Angular", "TypeScript"],
        icon: Database,
        metrics: { mentored: 7, systems: 4 }
      },
      {
        id: 4,
        phase: "Cloud Systems — The Component Thinker",
        years: "2022-2023",
        company: "VMware",
        role: "MTS 3",
        story: "UIaaS emerged from watching teams rebuild components. Reusability is a design decision, not a happy accident.",
        pattern: "Component libraries are products",
        tech: ["React", "TypeScript", "UIaaS"],
        icon: Layers,
        metrics: { components: "200+", reuse: "80%" }
      },
      {
        id: 5,
        phase: "VP Evolution — The Design Strategist",
        years: "2023-Present",
        company: "Morgan Stanley",
        role: "Vice President",
        story: "Leading 4 apps and 7 engineers. One UI Platform saving 33+ hours daily. AI-accelerated framework: 3 weeks → 2 days. AI-aware architecture.",
        pattern: "AI amplifies architecture",
        tech: ["React", "AI/LLM", "GraphQL"],
        icon: Zap,
        current: true,
        metrics: { timeSaved: "33h/day", speedup: "10x" }
      },
      {
        id: 6,
        phase: "UI+AI Research — The Future Builder",
        years: "2024",
        company: "Research",
        role: "Published Author",
        story: "iGraph visualization makes AI transparent. The future isn't AI that's smarter—it's AI we can understand and verify.",
        pattern: "Best interfaces make complexity simple",
        tech: ["AI Transparency", "iGraph"],
        icon: BookOpen,
        research: true,
        metrics: { citations: "Growing", impact: "High" }
      }
    ],

    principles: [
      { name: "Adaptive Cognitive Density", description: "Interfaces that adjust information density based on user expertise" },
      { name: "AI-Assisted Navigation Loops", description: "Navigation that learns patterns and suggests optimal paths" },
      { name: "Predictive UI Simplification", description: "Interfaces that hide complexity until needed, predicted by AI" },
      { name: "Confidence Gradient Visual System", description: "Visual cues showing AI confidence levels in real-time" }
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
      welcome: "**Experience Node**\n\n12+ years across healthcare, finance, consulting, cloud platforms.\n\nAsk me:\n• Tell me about Morgan Stanley\n• What did you build at VMware?\n• How did industries shape you?"
    },
    research: {
      welcome: "**Research Node**\n\nPublished: 'When AI Reasoning Meets Interface Design'\n\nAsk me:\n• Explain your research\n• What is iGraph?\n• Why does AI transparency matter?"
    },
    innovation: {
      welcome: "**Innovation Node**\n\nExploring the future of UI+AI.\n\nAsk me:\n• What will interfaces look like in 5 years?\n• Tell me about your experiments\n• How will AI change design?"
    }
  };

  // AI responses (keeping existing)
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
        return "**Morgan Stanley (2023-Present)**\n\nVP leading 4 apps, 7 engineers.\n\n**One UI Platform:**\n• 3 apps → 1 unified experience\n• 25min → 15min per account\n• 33+ hours saved daily\n• React 18, TypeScript, GraphQL\n\n**AI Framework:**\n• 3 weeks → 2 days (10x faster)\n• Structured prompts + automation\n\nAI doesn't replace architecture—it amplifies it.";
      }
      if (q.includes('vmware') || q.includes('cloud')) {
        return "**VMware (2022-2023)**\n\n**CloudHealth UI:**\n• Legacy → modern React rewrite\n• 35% faster workflows\n• Code splitting, optimization\n\n**UIaaS:**\n• 200+ components serving 8 apps\n• Versioned, tested, documented\n• 80% reuse rate\n\nPattern: Component libraries are products, not side projects.";
      }
      return nodeContexts.experience.welcome;
    }

    if (context === 'research') {
      if (q.includes('paper') || q.includes('research')) {
        return "**My Research: 'When AI Reasoning Meets Interface Design'**\n\nProblem: AI explanations are text walls. Users can't verify.\n\nSolution: iGraph visualization\n• Facts → Steps → Calculations → Results\n• Interactive node graphs\n• Errors visually obvious\n\nI turned 'trust me' AI into 'let me show you' AI.\n\nThis is how we trust AI in finance, healthcare, compliance.";
      }
      if (q.includes('igraph')) {
        return "**iGraph Visualization**\n\nMakes AI reasoning transparent.\n\n• Tagged reasoning (facts, steps, calculations)\n• Graph generation (nodes + edges)\n• Interactive UI (trace paths, find gaps)\n\nReal use: Morgan Stanley compliance systems. When AI flags transactions, users see exact reasoning.\n\nTransparency isn't optional—it's trustworthy AI.";
      }
      return nodeContexts.research.welcome;
    }

    if (context === 'innovation') {
      if (q.includes('future') || q.includes('5 years')) {
        return "**Interfaces in 5 Years:**\n\n1. Adaptive Complexity - Auto-adjusts to expertise\n2. Conversational Everything - Forms die, NL wins\n3. Predictive Surfaces - UI appears before you search\n4. Explainable AI - Every decision has reasoning graph\n5. Zero-State - Apps build themselves from patterns\n\nWhat disappears:\n• Static menus\n• Forms\n• Fixed dashboards\n\nFuture = intelligent simplification, not more features.";
      }
      if (q.includes('experiment')) {
        return "**My Experiments:**\n\n**Self-Arranging UI Grid**\nDashboard reorganizes based on usage\n\n**Intent-Driven Dashboard**\nPredicts goals, reconfigures interface\n\n**Conversational Flows**\nNatural language replaces forms\n\n**AI-Adjusted Density**\nDetects cognitive load, adapts complexity\n\nThese aren't academic—they're directional prototypes for production.";
      }
      return nodeContexts.innovation.welcome;
    }

    return "I'm Nikita's AI assistant—trained on 12+ years of UI/UX experience.\n\nAsk about:\n• Canvas & Code (art + design philosophy)\n• Projects (One UI, AI Framework)\n• Research on AI transparency\n• Future of interfaces";
  };

  // Floating particles for timeline
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

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) / (window.innerWidth / 2);
      const y = (e.clientY - centerY) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Neural mesh
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    let particles = [];

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        const dist = Math.sqrt(Math.pow(mousePos.x - p.x, 2) + Math.pow(mousePos.y - p.y, 2));
        const influence = Math.max(0, 1 - dist / 200);
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + influence * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77, 255, 255, ${0.1 + influence * 0.5})`;
        ctx.fill();
      });

      // Draw grid
      const gridSize = 80;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;
          
          const dist = Math.sqrt(Math.pow(mousePos.x - x, 2) + Math.pow(mousePos.y - y, 2));
          const influence = Math.max(0, 1 - dist / 200);
          
          if (influence > 0) {
            ctx.beginPath();
            ctx.arc(x, y, 2 + influence * 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(77, 255, 255, ${0.3 + influence * 0.7})`;
            ctx.fill();
          }

          if (i < cols) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + gridSize, y);
            ctx.strokeStyle = `rgba(77, 255, 255, ${0.05 + influence * 0.1})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
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
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-ring { animation: pulse-ring 2s ease-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>

      {/* Progress */}
      <div className="fixed top-0 left-0 w-full h-0.5 bg-gray-900 z-50">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 transition-all" style={{ width: `${scrollProgress}%` }} />
      </div>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />

        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-7xl font-light mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Nikita Kharya
            </span>
          </h1>
          
          <h2 className="text-4xl font-light mb-6 text-gray-300">
            {portfolioData.tagline}
          </h2>
          
          <p className="text-xl text-cyan-300/70 font-light mb-12">{portfolioData.subtitle}</p>

          <div className="flex items-center justify-center gap-12 text-sm text-gray-400">
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

      {/* Get to Know Me - 3D Parallax */}
      <section className="relative py-32 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Get to Know Me
            </h2>
            <p className="text-xl text-gray-400 font-light">Click any area to explore</p>
          </div>

          <div 
            className="relative h-[500px]"
            style={{ perspective: '2000px' }}
          >
            {/* Background particles with parallax */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `translate(${mousePos.x * (i * 3)}px, ${mousePos.y * (i * 3)}px)`,
                    transition: 'transform 0.3s ease-out',
                    willChange: 'transform'
                  }}
                />
              ))}
            </div>

            {/* Neural Nodes Grid */}
            <div className="grid grid-cols-4 gap-12 h-full items-center justify-center max-w-5xl mx-auto">
              {portfolioData.neuralNodes.map((node, index) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;

                // Map colors to hex values
                const colorMap = {
                  cyan: '#22d3ee',
                  blue: '#818cf8',
                  purple: '#a78bfa',
                  pink: '#f472b6'
                };

                const hexColor = colorMap[node.color] || '#22d3ee';

                // Parallax based on depth (index determines depth)
                const depth = index + 1;
                const parallaxStrength = 1 / depth;
                const parallaxX = mousePos.x * 40 * parallaxStrength;
                const parallaxY = mousePos.y * 40 * parallaxStrength;

                // Rotation based on mouse position
                const rotateX = -mousePos.y * 8;
                const rotateY = mousePos.x * 8;

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => { setSelectedNode(node.id); setMessages([]); setShowAI(true); }}
                    className="relative group flex flex-col items-center"
                    style={{
                      transform: `
                        translateX(${parallaxX}px)
                        translateY(${parallaxY}px)
                        translateZ(${isHovered ? 100 : 0}px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        scale(${isHovered ? 1.1 : 1})
                      `,
                      transformStyle: 'preserve-3d',
                      transition: isHovered 
                        ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' 
                        : 'transform 0.15s ease-out',
                      zIndex: isHovered ? 50 : depth,
                      cursor: 'pointer',
                      willChange: 'transform'
                    }}
                  >
                    {/* Glow effect */}
                    {isHovered && (
                      <div 
                        className="absolute inset-0 blur-3xl opacity-60 rounded-full"
                        style={{ background: hexColor }}
                      />
                    )}

                    {/* Icon circle */}
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

                    {/* Label */}
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

                    {/* Description on hover */}
                    {isHovered && (
                      <p className="text-xs text-gray-500 text-center mt-2 max-w-[150px]">
                        {node.description}
                      </p>
                    )}

                    {/* Sparkles on hover */}
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

                    {/* Shadow */}
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

            {/* Center reference point */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-cyan-400/20 animate-ping" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-cyan-400/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Enhanced */}
      <section className="relative py-32 px-8 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The Evolution
            </h2>
          </div>

          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px">
              <div className="h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 animate-pulse" />
            </div>

            {[...portfolioData.timeline].reverse().map((phase, index) => {
              const Icon = phase.icon;
              const isHovered = hoveredTimeline === phase.id;
              
              return (
                <div 
                  key={phase.id} 
                  className="relative mb-24 pl-24"
                  onMouseEnter={() => setHoveredTimeline(phase.id)}
                  onMouseLeave={() => setHoveredTimeline(null)}
                >
                  {/* Floating particles on hover */}
                  <FloatingParticles isActive={isHovered} />
                  
                  {/* Enhanced node */}
                  <div className={`absolute left-0 w-16 h-16 rounded-full border-2 ${phase.current ? 'border-cyan-400' : phase.research ? 'border-purple-400' : 'border-gray-600'} ${phase.current || phase.research ? 'animate-pulse' : ''} bg-black flex items-center justify-center transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
                    <Icon className={`w-6 h-6 ${phase.current ? 'text-cyan-400' : phase.research ? 'text-purple-400' : 'text-gray-400'}`} />
                    {isHovered && (
                      <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cyan-400 animate-pulse-ring" />
                    )}
                  </div>

                  {/* Progress line to next phase */}
                  {index < portfolioData.timeline.length - 1 && isHovered && (
                    <div className="absolute left-8 top-16 w-px h-24 overflow-hidden">
                      <div className="h-full bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
                    </div>
                  )}

                  <div className={`border border-gray-800 rounded-2xl p-8 backdrop-blur-xl bg-gray-900/50 hover:border-cyan-400/50 transition-all duration-300 ${isHovered ? 'transform -translate-y-1 shadow-xl shadow-cyan-400/20' : ''}`}>
                    {/* Header with metrics */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full text-xs border border-cyan-400/50 text-cyan-400 bg-cyan-400/10">
                          {phase.years}
                        </span>
                        {phase.current && <span className="px-3 py-1 rounded-full text-xs bg-cyan-400/20 text-cyan-400 animate-pulse">CURRENT</span>}
                        {phase.research && <span className="px-3 py-1 rounded-full text-xs bg-purple-400/20 text-purple-400">RESEARCH</span>}
                      </div>
                      
                      {/* Metrics badges */}
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

                    {/* The Reflections - renamed from Neural Reflection */}
                    <div className={`p-6 rounded-xl border ${isHovered ? 'border-cyan-400/40 bg-cyan-400/10' : 'border-cyan-400/20 bg-cyan-400/5'} mb-6 transition-all`}>
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-cyan-400">The Reflection</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{phase.story}</p>
                    </div>

                    <div className={`p-4 rounded-lg bg-gray-900 mb-4 transition-all ${isHovered ? 'bg-gray-800' : ''}`}>
                      <p className="text-xs text-gray-500 mb-1">Pattern:</p>
                      <div className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-cyan-400" />
                        <p className="text-sm text-cyan-400">{phase.pattern}</p>
                      </div>
                    </div>

                    {/* Animated tech tags */}
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

      {/* Principles */}
      <section className="relative py-32 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Principles of Intelligent Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {portfolioData.principles.map((p, i) => (
              <div key={i} className="group p-8 border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all hover:transform hover:-translate-y-1">
                <h3 className="text-2xl font-light mb-4 text-cyan-400 group-hover:animate-glow">{p.name}</h3>
                <p className="text-gray-300 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog / Thought Leadership */}
      <section className="relative py-32 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-light mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Thought Leadership
            </h2>
            <p className="text-xl text-gray-400 font-light">Writing about the intersection of AI, UI, and human experience</p>
          </div>

          <div className="grid gap-8">
            {portfolioData.blogs.map((blog) => (
              <div key={blog.id} className="group relative">
                {/* Featured badge */}
                {blog.featured && (
                  <div className="absolute -top-3 left-8 z-10">
                    <span className="px-4 py-1 text-xs bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full text-black font-medium">
                      FEATURED POST
                    </span>
                  </div>
                )}

                <div className="border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden group-hover:transform group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-cyan-400/20">
                  {/* Blog header with gradient accent */}
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

                    {/* Tags */}
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

                    {/* Read more button */}
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

            {/* Coming soon card for future blogs */}
            <div className="border border-gray-800/50 rounded-2xl bg-gray-900/30 p-12 text-center">
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
      <section className="relative py-32 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-cyan-400 mx-auto mb-8" />
          <h2 className="text-4xl font-light mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Build the Future
          </h2>
          <p className="text-lg text-gray-300 font-light mb-12">
            I design systems, not screens. My work sits at the intersection of UI craft, technical architecture, and AI-driven intelligence.
          </p>

          <div className="flex items-center justify-center gap-6">
            <a href="mailto:nikitakharya09@gmail.com" className="px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2 group">
              <Mail className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/nikita-kharya-14a83670/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-cyan-400/50 rounded-full hover:border-cyan-400 hover:bg-cyan-400/10 transition-all flex items-center gap-2 group">
              <Linkedin className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">LinkedIn</span>
            </a>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 border border-cyan-400/50 rounded-full hover:from-cyan-400/30 hover:to-purple-400/30 transition-all flex items-center gap-2 group">
              <Download className="w-4 h-4 text-cyan-400 group-hover:animate-pulse" />
              <span className="text-cyan-400">Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* AI Chat - keeping same */}
      {showAI && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/90 backdrop-blur-xl">
          <div className="w-full max-w-2xl h-[600px] border border-cyan-400/30 rounded-3xl bg-black/90 flex flex-col overflow-hidden shadow-2xl">
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
              <button onClick={() => setShowAI(false)} className="text-gray-400 hover:text-white">✕</button>
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
                />
                <button
                  onClick={handleSend}
                  disabled={!inputMessage.trim()}
                  className="px-5 py-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/50 rounded-xl hover:from-cyan-400/30 disabled:opacity-30"
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
