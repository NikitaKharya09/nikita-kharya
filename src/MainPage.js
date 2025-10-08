import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Code2, Lightbulb, Zap, TrendingUp, Cpu, Mail, Linkedin, Github, Download, ExternalLink, Palette, BookOpen, MapPin } from 'lucide-react';

import painting1 from "../assets/images/painting1.jpg";
import painting2 from "../assets/images/painting2.jpg";
import painting3 from "../assets/images/painting3.jpg";
import painting4 from "../assets/images/painting4.jpg";
import painting5 from "../assets/images/painting5.jpg";
import painting6 from "../assets/images/painting6.jpg";
import painting7 from "../assets/images/painting7.jpg";
import painting8 from "../assets/images/painting8.jpg";

// Nikita Kharya's Portfolio Data
const portfolioData = {
  name: "Nikita Kharya",
  title: "Vice President, Frontend Engineering",
  company: "Morgan Stanley",
  tagline: "Building AI-Native Frontend Systems at Enterprise Scale",
  yearsExperience: "12+",
  contact: {
    email: "nikitakharya09@gmail.com",
    linkedin: "https://www.linkedin.com/in/nikita-kharya-14a83670/",
    location: "Boston, MA"
  },
  resumeUrl: "/path-to-your-resume.pdf",
  blogs: [
    {
      title: "An Engineer's Guide to AI-Augmented Development: Wins, Pitfalls, and What Actually Works",
      description: "How we can leverage frontier models to define the new era for development in a restricted environment",
      date: "Sep 2025",
      readTime: "6 min read",
      url: "https://medium.com/@nikitakharya09/an-engineers-guide-to-ai-augmented-development-wins-pitfalls-and-what-actually-works-9187057d8b17",
      tags: ["AI", "React", "AI-Accelerated Development"]
    }
  ],
  paintings: [
    {
      title: "Struggles",
      imageUrl: painting4,
    },
    {
      title: "Breathe",
      imageUrl: painting2,
    },
    {
      title: "Vision",
      imageUrl: painting3,
    },
    {
      title: "Peace",
      imageUrl: painting1,
    }
  ]
};

// Personality configurations
const personalities = {
  architect: {
    name: "The Architect",
    icon: Code2,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    description: "System design, scalability, technical foundation",
    stats: [
      { label: "Apps Architected", value: "20+", icon: Cpu },
      { label: "Performance Gain", value: "40%", icon: Zap },
      { label: "Code Quality", value: "95%", icon: TrendingUp }
    ]
  },
  artist: {
    name: "The Artist",
    icon: Sparkles,
    gradient: "from-purple-500 via-violet-500 to-fuchsia-500",
    description: "Creating beautiful experiences, visual design, painting",
    stats: [
      { label: "Design Systems", value: "5+", icon: Sparkles },
      { label: "UI Components", value: "200+", icon: Code2 },
      { label: "UX Improvements", value: "60%", icon: TrendingUp }
    ]
  },
  visionary: {
    name: "The Visionary",
    icon: Lightbulb,
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    description: "AI integration, future tech, breakthrough thinking",
    stats: [
      { label: "AI Projects", value: "8+", icon: Lightbulb },
      { label: "Innovation Impact", value: "3x", icon: TrendingUp },
      { label: "Tech Leadership", value: "12y", icon: Sparkles }
    ]
  }
};

// Intelligent response system
const getIntelligentResponse = (personality, message) => {
  const msg = message.toLowerCase();
  
  const responses = {
    architect: {
      greeting: [
        "Hello. I'm The Architect - I design the foundations and structures of systems. With over 12 years of experience building enterprise-scale frontend architectures, I can discuss system design, scalability, and technical foundations. What would you like to explore?",
        "Greetings. As The Architect, I design platforms that serve millions with robust, scalable foundations. Currently VP at Morgan Stanley. What technical aspects interest you?"
      ],
      projects: [
        "The Enterprise Oversight Solution at Morgan Stanley is my most complex architectural achievement. Built from scratch, I collaborated across multiple business domains and technical teams to eliminate compliance gaps and operational blind spots. This established a scalable foundation now serving as the firm-wide standard oversight solution. React, TypeScript, GraphQL - architected for massive scale.",
        "The One UI Platform for CRG consolidated three disparate applications - onboarding, restrictions, instructions, and radius maintenance - into a single integrated experience. This wasn't just code consolidation; it required deep domain modeling to unify different business workflows into coherent UX. Substantially reduced context switching and improved operational efficiency across the organization.",
        "The Cocoa Platform transformation was a strategic pivot. I evolved it from a basic tool into a comprehensive account management solution by consolidating Radius accounts and enabling direct management of Contact Maintenance, Investor Relationship Management, Holdings, Fee & Billing, and Investable Universe. This accelerated onboarding timelines and eliminated critical business bottlenecks.",
        "The CloudHealth transformation at VMware was a complete legacy-to-modern rewrite. We migrated the entire UI to the latest React version, implementing code splitting, lazy loading, and bundle optimization. The result: simplified cloud spending analysis and reporting for Enterprise customers, with measurably better performance metrics."
      ],
      experience: [
        "At Morgan Stanley as VP, I architect enterprise-wide solutions serving critical financial systems. The Enterprise Oversight Solution was built from scratch - collaborating across domains to create the firm-wide standard. The One UI Platform consolidated 3 apps into unified experience. The Cocoa transformation enabled comprehensive account management. Each project required deep architectural thinking and cross-functional leadership.",
        "My VMware tenure (2022-2023) focused on next-generation cloud management. Revamped the entire CloudHealth UI to latest React, enabling Enterprise customers to better manage multi-cloud spending. Built UIaaS (UI Components as a Service) - versioned, tested components consumed across multiple applications for consistent user experience. Proposed data visualization POC forecasted to reduce user time by 35%.",
        "At Deutsche Bank (2019-2022) as Assistant VP, I managed the transaction monitoring application UI from inception. This enabled automated compliance checks across all transactions - faster processing, better regulatory compliance, reduced manual error risk. Devised configuration-based standardized UI approach, producing modular components utilized across multiple bank projects. Mentored 7 junior developers, providing technical guidance and career coaching.",
        "Accenture (2017-2019): Supervised migration of legacy applications to latest Angular version while consistently improving UX through creative design, client collaboration, and cross-team coordination. Result: 20% increase in user engagement through better experience design.",
        "Cognizant (2013-2017): Single-handedly executed full front-end development of healthcare web application. Complete UI creation with HTML5, CSS3, and AngularJS. This foundational experience taught me end-to-end ownership and attention to detail in enterprise applications."
      ],
      skills: [
        "My technical stack spans the modern frontend ecosystem: JavaScript/TypeScript as foundation, React with Redux and MobX for state management, React Native for mobile, Angular for enterprise apps. HTML5 and CSS/SASS for styling, GraphQL and REST for APIs, CI/CD for deployment automation. I choose technologies based on problem requirements, not trends.",
        "I'm proficient across the full spectrum: React, Redux, MobX, TypeScript, React Native, Angular, HTML5, CSS/SASS, GraphQL, REST APIs, Agile methodologies, and CI/CD pipelines. My strength is knowing which tool solves which problem - architectural thinking over technology fandom."
      ],
      education: [
        "I hold a Bachelor of Technology in Computer Science and Engineering from Rajiv Gandhi Prodyogiki Vishwavidhyalaya (2012). The CS fundamentals - algorithms, data structures, systems thinking - remain the foundation of everything I architect today."
      ],
      mentorship: [
        "At Deutsche Bank, I mentored 7 junior front-end developers, providing technical guidance, code review coaching, and career development support. Mentorship isn't just about teaching syntax - it's about instilling architectural thinking, quality mindset, and professional growth. Watching them advance in their careers has been incredibly rewarding."
      ],
      default: [
        "I can provide a detailed technical analysis on that topic. With experience across financial services (Morgan Stanley, Deutsche Bank), cloud platforms (VMware), consulting (Accenture), and healthcare (Cognizant), I've architected solutions for diverse domains. All decisions are data-driven and optimized for scale. What specific technical area interests you?",
        "That's an interesting technical question. My approach combines engineering best practices with pragmatic business thinking. What aspect should we explore further?"
      ]
    },
    artist: {
      greeting: [
        "Hey there! 👋 I'm The Artist - I create beautiful, delightful experiences. From UI systems to actual paintings, I love bringing aesthetics and creativity to everything. What would you like to explore?",
        "Hello! ✨ As The Artist, I focus on the visual and experiential. From design systems to canvas art, I'm passionate about creating things that are both functional and beautiful!"
      ],
      projects: [
        "The One UI Platform for CRG is design excellence at enterprise scale! Consolidating three disparate applications - onboarding, restrictions, instructions, radius maintenance - into one cohesive experience required creating a unified design language that serves multiple business domains. The challenge was making complex workflows feel simple and reducing context switching. Beautiful design that actually works! ✨",
        "The UIaaS project at VMware was incredibly rewarding! We created UI Components as a Service - a library serving multiple multi-cloud applications. Every component was designed with flexibility in mind: proper design tokens, consistent spacing systems, accessibility baked in, and a visual language that scales. This is design systems done right!",
        "The Cocoa Platform transformation showcases design's strategic impact! We evolved it into a comprehensive account management solution - Contact Maintenance, Investor Relationship Management, Holdings, Fee & Billing, Investable Universe. The UX challenge was unifying these diverse domains into intuitive workflows that accelerated onboarding and eliminated bottlenecks.",
        "The CloudHealth data visualization POC is a perfect example of design-driven innovation! Identifying the need for improved visualizations and proposing a solution forecasted to reduce user time by 35%. Good design isn't just aesthetics - it's about making complex cloud spending data instantly comprehensible through smart visual hierarchy and interaction patterns."
      ],
      experience: [
        "At Morgan Stanley, I lead design strategy for enterprise solutions! The Cocoa Platform UX accelerated onboarding through thoughtful design that removes friction. The Enterprise Oversight Solution required creating intuitive interfaces for complex compliance workflows. The One UI Platform unified three apps with consistent design language. Design impact measured in business outcomes - that's what I deliver! ✨",
        "The VMware CloudHealth redesign (2022-2023) was transformative! We took a legacy interface and created a modern, beautiful experience with the latest React. The data visualization improvements weren't just prettier - they were purposefully designed to surface cloud management insights faster. Built UIaaS for consistent experience across multi-cloud apps. Color, hierarchy, interaction - everything intentional!",
        "At Deutsche Bank (2019-2022), I was founding design lead for transaction monitoring UI enabling automated compliance checks. The fascinating challenge? Creating standardized UI interfaces using configuration-based approach. Built a design system from scratch that flexed across different compliance needs while maintaining visual consistency. Modular components, reusable patterns, cohesive visual language serving multiple bank projects!",
        "Accenture (2017-2019): Led AngularJS to Angular migration while consistently improving UX through creative design ideation and client collaboration. Result: 20% increase in user engagement through better experience design. Design and development working together!",
        "Cognizant (2013-2017): Single-handedly crafted the complete UI for a healthcare web application. HTML5, CSS3, AngularJS - where accessibility wasn't optional, it was essential. This taught me that beautiful design must also be inclusive and functional."
      ],
      skills: [
        "My design toolkit combines technical implementation with visual thinking: React for building, TypeScript for type-safe components, HTML5/CSS/SASS for pixel-perfect styling, design systems for consistency, accessibility standards for inclusion. I bridge the gap between design vision and technical reality!"
      ],
      mentorship: [
        "Mentoring 7 junior developers at Deutsche Bank was about teaching design thinking, not just code patterns. How to critique interfaces, understand user needs, build reusable components, and think systematically about UX. Watching them grow from implementers to design-minded engineers was incredible!"
      ],
      default: [
        "That's a great question! My design philosophy centers on creating systems that scale - both technically and organizationally. Whether it's component libraries, design tokens, or UX patterns, everything is built to serve enterprise needs while delighting users. What specific aspect interests you?",
        "I appreciate your curiosity! Design at the enterprise level is fascinating because it's equal parts creativity and systems thinking. Want to dive deeper into a specific project or approach?"
      ]
    },
    visionary: {
      greeting: [
        "Hey! 🚀 I'm The Visionary - I see what's coming next. AI-augmented workflows, self-optimizing systems, breakthrough thinking - that's my domain. I'm building the future of frontend development. What excites you?",
        "Hello! As The Visionary, I focus on what's possible tomorrow. From AI-accelerated development to paradigm shifts in how we build software, I explore the frontier. What future possibilities interest you?"
      ],
      projects: [
        "The AI-accelerated development framework at Morgan Stanley is genuinely revolutionary! I pioneered structured LLM prompts and workflow automation that compressed traditional 3-week development cycles to just 2 days - that's 10x faster delivery while maintaining quality standards. This positions our organization as an AI-development leader and fundamentally changes how we think about software velocity! 🤖",
        "The React to React Native migration project using state-of-the-art Generative AI models showcases the power of AI tooling. I'm not just using AI assistants - I'm building systematic frameworks for AI-augmented development that scale across teams!",
        "The Enterprise Oversight Solution demonstrates strategic tech vision. Built from scratch, collaborating across domains to eliminate compliance gaps. This wasn't just executing requirements - it was envisioning what firm-wide oversight should be and making it reality.",
        "Mobile Fashion Application with React Native shows my personal exploration of cross-platform innovation. Always experimenting with new paradigms, building personal projects to stay ahead of the curve!"
      ],
      experience: [
        "At Morgan Stanley, I'm pioneering the future of development! The AI-accelerated framework I built compresses 3-week cycles to 2 days using structured LLM prompts - 10x faster, same quality. This isn't incremental improvement; it's paradigm shift! The Cocoa Platform transformation and Enterprise Oversight Solution required visionary thinking - seeing opportunities others missed, positioning UI teams as strategic technology intelligence.",
        "VMware (2022-2023): Proactively identified the need for better data visualization before anyone asked. Proposed POC for CloudHealth FlexOrgs forecasted to reduce user time by 35%. Built UIaaS thinking ahead about component reusability across future applications. Innovation means anticipating needs, not just responding to them!",
        "At Deutsche Bank (2019-2022), the configuration-based UI approach was ahead of its time - early low-code thinking before it was mainstream! Building standardized, modular components that could be programmatically composed for different compliance scenarios. Mentored 7 developers not just in current tech, but in forward-thinking approaches. Always asking: what's next?",
        "Accenture (2017-2019): Leading AngularJS to Angular migration wasn't just version upgrade - it was strategic modernization. 20% user engagement increase through progressive UX improvements. Each migration taught me how to navigate paradigm shifts!",
        "Cognizant (2013-2017): Single-handedly built healthcare web app, pushing for modern frameworks (AngularJS) when others were stuck in jQuery. Innovation journey spans 12 years - from pushing for better tools to building AI-native development! 🚀"
      ],
      skills: [
        "My skill set is forward-focused: React, TypeScript, React Native for modern development, GraphQL for efficient data fetching, CI/CD for automation, Agile for iterative innovation. But skills are just tools - the real superpower is seeing where technology is heading and positioning ahead of the curve!",
        "JavaScript, React, Redux, MobX, TypeScript, React Native, Angular, GraphQL, REST - I know the tools. But more importantly, I know which emerging patterns will matter in 2-3 years and how to prepare teams for inevitable transitions."
      ],
      ai: [
        "AI-augmented development is my current frontier! At Morgan Stanley, I pioneered a framework using structured LLM prompts and workflow automation - traditional 3-week cycles compressed to 2 days, 10x faster delivery. The key is systematic prompt engineering and workflow integration, not just ad-hoc AI tool usage. I'm building frameworks that enable entire teams to leverage AI effectively!",
        "The React to React Native migration project using Generative AI models demonstrates next-gen development approaches. AI isn't replacing developers - it's amplifying our capabilities. I'm exploring how AI can understand codebases, suggest optimal architectures, and accelerate development systematically."
      ],
      personal: [
        "My personal projects keep me on the cutting edge! Mobile Fashion Application with React Native explores cross-platform possibilities. React to React Native migration using state-of-the-art AI models tests how far we can push AI-augmented development. I build to learn, experiment to innovate!"
      ],
      default: [
        "That's exactly the kind of forward-thinking question I love! The intersection of AI and frontend development is exploding with possibilities. We're at an inflection point where tools and paradigms are fundamentally changing. What specific aspect interests you most?",
        "Great question! Innovation in frontend isn't just about new libraries - it's about reimagining how we build software. What possibilities excite you?"
      ]
    }
  };

  const personalityResponses = responses[personality];
  
  // Greeting
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey') || msg.includes('greet')) {
    return personalityResponses.greeting[Math.floor(Math.random() * personalityResponses.greeting.length)];
  }
  // Comprehensive Experience Overview - when asking about overall experience
  else if ((msg.includes('tell me about your experience') || msg.includes('tell me about experience') || 
            msg.includes('your experience') || msg.includes('work history') || msg.includes('career history')) && 
           !msg.includes('morgan') && !msg.includes('vmware') && !msg.includes('deutsche') && 
           !msg.includes('accenture') && !msg.includes('cognizant')) {
    return `Here's my complete career journey spanning 12+ years:\n\n**Morgan Stanley** - Vice President (Oct 2023 - Present)\nLeading enterprise-wide frontend solutions and pioneering AI-accelerated development.\n\n**VMware** - Member of Technical Staff 3 (May 2022 - Jul 2023)\nRevamped CloudHealth UI and built UIaaS for multi-cloud applications.\n\n**Deutsche Bank** - Assistant Vice President (Feb 2019 - May 2022)\nManaged transaction monitoring UI and mentored 7 developers.\n\n**Accenture** - Senior Software Engineer (Aug 2017 - Feb 2019)\nLed Angular migrations and improved user engagement by 20%.\n\n**Cognizant Technology Solutions** - Associate (Jun 2013 - Jun 2017)\nBuilt healthcare web applications with AngularJS.\n\nEach role built upon the last, growing from hands-on development to architectural leadership and innovation!`;
  }
  // Experience & Work - general queries
  else if (msg.includes('experience') || msg.includes('work') || msg.includes('career') || msg.includes('job') || 
           msg.includes('role') || msg.includes('company') || msg.includes('background') || msg.includes('journey')) {
    return personalityResponses.experience[Math.floor(Math.random() * personalityResponses.experience.length)];
  }
  // Company-specific queries
  else if (msg.includes('morgan') || msg.includes('stanley') || msg.includes('current role') || msg.includes('vp') || msg.includes('vice president')) {
    return personalityResponses.experience[0];
  }
  else if (msg.includes('vmware') || msg.includes('cloudhealth') || msg.includes('cloud health')) {
    return personalityResponses.experience[1];
  }
  else if (msg.includes('deutsche') || msg.includes('db') || msg.includes('bank') || msg.includes('deutsche bank')) {
    return personalityResponses.experience[2];
  }
  else if (msg.includes('accenture')) {
    return personalityResponses.experience[3];
  }
  else if (msg.includes('cognizant') || msg.includes('cts')) {
    return personalityResponses.experience[4];
  }
  // Projects
  else if (msg.includes('project') || msg.includes('built') || msg.includes('created') || msg.includes('developed')) {
    return personalityResponses.projects[Math.floor(Math.random() * personalityResponses.projects.length)];
  }
  // Specific project queries
  else if (msg.includes('oversight') || msg.includes('enterprise solution')) {
    return personalityResponses.projects[0];
  }
  else if (msg.includes('cocoa') || msg.includes('account management') || msg.includes('onboarding')) {
    return personalityResponses.projects[2] || personalityResponses.projects[0];
  }
  else if (msg.includes('one ui') || msg.includes('crg') || msg.includes('consolidat')) {
    return personalityResponses.projects[0];
  }
  else if (msg.includes('uiaas') || msg.includes('component') || msg.includes('design system')) {
    return personalityResponses.projects[1];
  }
  // AI-related queries
  else if (msg.includes('ai') || msg.includes('artificial intelligence') || msg.includes('llm') || 
           msg.includes('gpt') || msg.includes('machine learning') || msg.includes('automation')) {
    return personalityResponses.ai?.[Math.floor(Math.random() * personalityResponses.ai.length)] || 
           personalityResponses.projects[0];
  }
  // Skills
  else if (msg.includes('skill') || msg.includes('technolog') || msg.includes('stack') || 
           msg.includes('react') || msg.includes('typescript') || msg.includes('angular') || 
           msg.includes('javascript') || msg.includes('graphql')) {
    return personalityResponses.skills?.[Math.floor(Math.random() * personalityResponses.skills.length)] || 
           personalityResponses.default[0];
  }
  // Education
  else if (msg.includes('education') || msg.includes('degree') || msg.includes('university') || 
           msg.includes('college') || msg.includes('study') || msg.includes('studied')) {
    return personalityResponses.education?.[0] || 
           "I hold a Bachelor of Technology in Computer Science and Engineering from Rajiv Gandhi Prodyogiki Vishwavidhyalaya (2012). The CS fundamentals remain the foundation of everything I build today.";
  }
  // Mentorship & Leadership
  else if (msg.includes('mentor') || msg.includes('teach') || msg.includes('lead') || 
           msg.includes('team') || msg.includes('manage') || msg.includes('coach')) {
    return personalityResponses.mentorship?.[0] || personalityResponses.experience[2];
  }
  // Personal projects
  else if (msg.includes('personal') || msg.includes('side project') || msg.includes('hobby project') || 
           msg.includes('mobile') || msg.includes('react native') || msg.includes('fashion app')) {
    return personalityResponses.personal?.[0] || 
           "I explore cutting-edge tech through personal projects! Built a Mobile Fashion Application with React Native and a React to React Native migration project using state-of-the-art Generative AI models. I build to learn and experiment to innovate!";
  }
  // Performance & Optimization
  else if (msg.includes('performance') || msg.includes('optimi') || msg.includes('speed') || 
           msg.includes('fast') || msg.includes('efficiency')) {
    return "Performance is non-negotiable in enterprise applications. Whether it's code splitting, lazy loading, bundle optimization, or architectural decisions - I obsess over making systems fast and efficient. The CloudHealth improvements and Enterprise Oversight solution both demonstrate measurable performance gains through systematic optimization.";
  }
  // Agile & Process
  else if (msg.includes('agile') || msg.includes('process') || msg.includes('methodology') || 
           msg.includes('workflow') || msg.includes('ci/cd') || msg.includes('deployment')) {
    return "I work in Agile environments with CI/CD pipelines for rapid, reliable deployment. My AI-accelerated framework at Morgan Stanley exemplifies modern development workflow - systematic automation, quality gates, and continuous delivery. Process serves speed and quality, not bureaucracy.";
  }
  // Default
  else {
    return personalityResponses.default[Math.floor(Math.random() * personalityResponses.default.length)];
  }
};

function MainPage() {
  const [activeTab, setActiveTab] = useState('architect');
  const [messages, setMessages] = useState({
    architect: [],
    artist: [],
    visionary: []
  });
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedPainting, setSelectedPainting] = useState(null);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = {
    architect: [
      "Tell me about your experience",
      "What's the Enterprise Oversight Solution?",
      "How do you approach system design?",
      "Tell me about the One UI Platform",
      "What technologies do you use?",
      "Your work at Deutsche Bank?"
    ],
    artist: [
      "What's your creative journey?",
      "How do you approach UX design?",
      "Tell me about your paintings",
      "What's UIaaS?",
      "Design systems philosophy?",
      "How did you improve CloudHealth UX?"
    ],
    visionary: [
      "Tell me about AI-accelerated development",
      "What's your innovation approach?",
      "AI in frontend development?",
      "Personal projects?",
      "Future of development?",
      "How did you achieve 10x faster delivery?"
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages[activeTab]]);

  useEffect(() => {
    const initialMessages = {};
    Object.keys(personalities).forEach(key => {
      initialMessages[key] = [{
        type: 'ai',
        text: getIntelligentResponse(key, 'hello'),
        personality: key
      }];
    });
    setMessages(initialMessages);
  }, []);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    const userMessage = { type: 'user', text: inputMessage };
    setMessages(prev => ({
      ...prev,
      [activeTab]: [...(prev[activeTab] || []), userMessage]
    }));
    const currentInput = inputMessage;
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        text: getIntelligentResponse(activeTab, currentInput),
        personality: activeTab
      };
      setMessages(prev => ({
        ...prev,
        [activeTab]: [...(prev[activeTab] || []), aiResponse]
      }));
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentPersonality = personalities[activeTab];
  const PersonalityIcon = currentPersonality.icon;
  const currentMessages = messages[activeTab] || [];
  const currentQuestions = suggestedQuestions[activeTab] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${currentPersonality.gradient} transition-all duration-1000 blur-3xl`} style={{ transform: 'scale(1.5)' }} />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white opacity-5" style={{
              width: Math.random() * 300 + 50 + 'px',
              height: Math.random() * 300 + 50 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Hero Header */}
        <div className="text-center mb-12 relative">
          <div className={`absolute inset-0 bg-gradient-to-r ${currentPersonality.gradient} opacity-10 blur-3xl transition-all duration-1000`} />
          <div className="relative">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${currentPersonality.gradient} shadow-2xl animate-pulse`}>
                <PersonalityIcon className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {portfolioData.name}
            </h1>
            <p className={`text-2xl font-light mb-2 bg-gradient-to-r ${currentPersonality.gradient} bg-clip-text text-transparent`}>
              {portfolioData.title}
            </p>
            <p className="text-gray-400 text-lg">{portfolioData.tagline}</p>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentPersonality.gradient} animate-pulse`} />
                {portfolioData.company}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {portfolioData.contact.location}
              </span>
              <span>•</span>
              <span>{portfolioData.yearsExperience} years</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="inline-flex bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2">
              {Object.entries(personalities).map(([key, personality]) => {
                const Icon = personality.icon;
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-br ${personality.gradient} rounded-xl transition-all duration-300`} />
                    )}
                    <Icon className="w-5 h-5 relative z-10" />
                    <span className="font-semibold relative z-10">{personality.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-8 animate-fadeIn">
          {currentPersonality.stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="relative group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <StatIcon className="w-6 h-6 mb-3 text-amber-400" />
                  <div className="text-3xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="space-y-8">
          {/* Chat Interface - Common for all tabs */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-20 blur-3xl transition-all duration-1000`} />
            <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
              <div className={`bg-gradient-to-r ${currentPersonality.gradient} p-5`}>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                    <PersonalityIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">{currentPersonality.name}</h3>
                    <p className="text-sm text-white/80">Ask me anything about Nikita's work</p>
                  </div>
                </div>
              </div>

              <div className="h-[400px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                {currentMessages.map((message, index) => (
                  <div key={index} className={`flex animate-slideIn ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-5 py-3 ${
                      message.type === 'user'
                        ? 'bg-white/10 backdrop-blur-xl text-white border border-white/20'
                        : `bg-gradient-to-br ${personalities[message.personality].gradient} text-white shadow-xl`
                    }`}>
                      {message.type === 'ai' && (
                        <div className="flex items-center gap-2 mb-2 opacity-80">
                          <PersonalityIcon className="w-4 h-4" />
                          <span className="text-xs font-semibold">{personalities[message.personality].name}</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start animate-slideIn">
                    <div className={`bg-gradient-to-br ${currentPersonality.gradient} text-white rounded-2xl px-5 py-3 shadow-xl`}>
                      <div className="flex gap-1.5">
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="px-6 py-3 border-t border-white/10 bg-black/20">
                <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {currentQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => { setInputMessage(question); document.getElementById('messageInput').focus(); }}
                      className={`text-xs px-4 py-2 rounded-full bg-gradient-to-r ${currentPersonality.gradient} text-white hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 border-t border-white/10 bg-black/20">
                <div className="flex gap-3">
                  <input
                    id="messageInput"
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={`Ask ${currentPersonality.name}...`}
                    className="flex-1 px-5 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl focus:outline-none focus:border-white/30 text-white placeholder-gray-400 transition-all duration-300"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className={`px-8 py-4 bg-gradient-to-r ${currentPersonality.gradient} text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95`}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Artist Tab - Art Gallery */}
          {activeTab === 'artist' && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent flex items-center gap-3">
                  <Palette className="w-8 h-8" />
                  Art & Creativity
                </h2>
                <p className="text-gray-400 text-sm">Painting as a hobby</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {portfolioData.paintings.map((painting, index) => (
                  <div key={index} className="relative group cursor-pointer" onClick={() => setSelectedPainting(painting)}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105">
                      <div className="aspect-square overflow-hidden">
                        <img src={painting.imageUrl} alt={painting.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-white text-sm mb-1">{painting.title}</h3>
                        <p className="text-xs text-gray-400">{painting.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Blog Section - Always visible */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              Latest Writing
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {portfolioData.blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-102">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-2xl text-white pr-4">{blog.title}</h3>
                    <ExternalLink className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                  </div>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">{blog.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4">
                    {blog.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={`text-sm px-4 py-2 rounded-full bg-gradient-to-r ${currentPersonality.gradient} text-white`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.date}</span>
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </a>
            ))}
            {/* Placeholder for next blog */}
            <div className="relative group">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 border-dashed rounded-2xl p-8 text-center">
                <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-gray-400 mb-2">More Coming Soon</h3>
                <p className="text-gray-500 text-sm">Currently working on the next article...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Download Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-20 blur-2xl transition-all duration-1000`} />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <div className="space-y-4">
                <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group/item">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${currentPersonality.gradient} group-hover/item:scale-110 transition-transform`}>
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">{portfolioData.contact.email}</span>
                </a>
                <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group/item">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${currentPersonality.gradient} group-hover/item:scale-110 transition-transform`}>
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${currentPersonality.gradient} opacity-20 blur-2xl transition-all duration-1000`} />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-center items-center text-center">
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${currentPersonality.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                <Download className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Download Resume</h3>
              <p className="text-gray-400 text-sm mb-6">Get a detailed overview of my experience, skills, and achievements</p>
              <a href={portfolioData.resumeUrl} download className={`px-8 py-4 bg-gradient-to-r ${currentPersonality.gradient} text-white rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2`}>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Built with React • Powered by AI Principles
          </p>
        </div>
      </div>

      {/* Painting Modal */}
      {selectedPainting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl" onClick={() => setSelectedPainting(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden">
              <img src={selectedPainting.imageUrl} alt={selectedPainting.title} className="w-full h-auto" />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedPainting.title}</h3>
                <p className="text-gray-300 mb-2">{selectedPainting.description}</p>
                <p className="text-gray-400 text-sm">{selectedPainting.year}</p>
              </div>
              <button onClick={() => setSelectedPainting(null)} className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-xl rounded-full hover:bg-white/20 transition-colors">
                <span className="text-white text-2xl">×</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn { animation: slideIn 0.4s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out forwards; }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thumb-white\/10::-webkit-scrollbar-thumb { background-color: rgba(255, 255, 255, 0.1); border-radius: 3px; }
        .scrollbar-track-transparent::-webkit-scrollbar-track { background-color: transparent; }
      `}</style>
    </div>
  );
}

export default MainPage;
