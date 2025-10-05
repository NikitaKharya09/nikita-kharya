// import React from 'react';

// import { About } from "./sections/about";
// import { Contact } from "./sections/contact";
// import { Personal } from "./sections/personal";
// import { Skills } from "./sections/skills";
// import { Parallax } from "react-scroll-parallax";
// import { Experience } from "./sections/experience";

// import './App.scss';
// import { Nav } from './sections/navigation';

// const App = () => {
//   return (
//     <div className="home-container">
//       <Nav />
//       <section id="about" className="">
//         <div className="content">
//           <About />
//         </div>
//       </section>
//       <section id="skills">
//         <div className="content">
//           <Skills />
//         </div>
//       </section>
//       <section id="experience" className="">
//         <div className="content">
//           <Experience />
//         </div>
//       </section>
//       <section id="personal">
//         <div className="content">
//           <Personal />
//         </div>
//       </section>
//       <section id="contacts">
//         <div className="content">
//           <Contact />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default App;

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Code2, Lightbulb, Zap, TrendingUp, Cpu, Mail, Linkedin, Github, Download, ExternalLink, Palette, BookOpen, MapPin } from 'lucide-react';

import painting1 from "../../assets/images/painting1.jpg";
import painting2 from "../../assets/images/painting2.jpg";
import painting3 from "../../assets/images/painting3.jpg";
import painting4 from "../../assets/images/painting4.jpg";
import painting5 from "../../assets/images/painting5.jpg";
import painting6 from "../../assets/images/painting6.jpg";
import painting7 from "../../assets/images/painting7.jpg";
import painting8 from "../../assets/images/painting8.jpg";

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
      title: "An Engineer’s Guide to AI-Augmented Development: Wins, Pitfalls, and What Actually Works",
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
      imageUrl: painting1,
    },
    {
      title: "Digital Landscapes",
      imageUrl: painting2,
    },
    {
      title: "Code & Canvas",
      imageUrl: painting3,
    },
    {
      title: "Neural Networks",
      imageUrl: painting4,
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
        "The Enterprise Oversight Platform is architecturally significant. We consolidated three separate applications into a unified codebase, utilizing React with TypeScript, GraphQL for data fetching, and a modular architecture for enhanced maintainability. The consolidation eliminated massive code duplication and delivered 40%+ time savings.",
        "The CloudHealth transformation at VMware was a complete rewrite - legacy UI to modern React. We implemented code splitting, lazy loading, and optimized bundle sizes. Result: 35% faster user workflows, measurably better performance metrics."
      ],
      experience: [
        "At Morgan Stanley as VP, I architect firm-wide frontend solutions serving critical financial systems. Recently consolidated 3 disparate applications into a unified platform - eliminated massive code duplication, 40%+ time savings. Proactively identified and mitigated technology risks like Chrome cookie deprecation and React CRA discontinuation before they impacted production.",
        "My VMware experience (2022-2023) focused on transforming legacy CloudHealth UI into a next-gen React application. Built UI Components as a Service (UIaaS) - versioned, tested, consumed across multiple multi-cloud apps. Achieved 35% reduction in user time through data visualization improvements. GraphQL + React architecture scaled beautifully.",
        "At Deutsche Bank (2019-2022) as Assistant VP, I was a founding member and technical lead for transaction monitoring UI - automated compliance checks across all transactions. Architected the entire system, led code reviews, and mentored team members. Configuration-based approach produced modular components reusable across bank projects. 20% reduction in UI defects through systematic quality initiatives.",
        "Career progression shows consistent technical leadership growth: Started at Cognizant (2013-2017), building healthcare applications with HTML5, CSS3, AngularJS. Moved to Accenture (2017-2019), where I upgraded AngularJS to Angular 5 with zero defects - managed complex migrations. Each role built technical depth and architectural thinking."
      ],
      default: [
        "I can provide a detailed technical analysis on that topic. With experience across financial services, cloud platforms, and healthcare, I've architected solutions for various domains. All decisions are data-driven and optimized for scale. What specific technical area interests you?",
        "That's an interesting technical question. My approach combines engineering best practices with pragmatic business thinking. What aspect should we explore further?"
      ]
    },
    artist: {
      greeting: [
        "Hey there! 👋 I'm The Artist - I create beautiful, delightful experiences. From UI systems to actual paintings, I love bringing aesthetics and creativity to everything. What would you like to explore?",
        "Hello! ✨ As The Artist, I focus on the visual and experiential. From design systems to canvas art, I'm passionate about creating things that are both functional and beautiful!"
      ],
      projects: [
        "The Enterprise Oversight Platform is a fantastic example of design at scale! We unified 3 disparate applications into one cohesive experience. The challenge was creating a unified design language that could serve multiple business domains while maintaining consistency. The result? A 40% reduction in time spent and a dramatically improved user experience!",
        "The UIaaS project at VMware was incredibly rewarding from a design perspective! We created a component library that serves multiple multi-cloud applications. Every component was designed with flexibility and reusability in mind - proper design tokens, consistent spacing systems, and a visual language that scales!"
      ],
      experience: [
        "At Morgan Stanley, I lead design strategy for enterprise-wide solutions! The Contact Maintenance Solution accelerated onboarding by 60% - not through flashy features, but through thoughtful UX that removes friction. We mapped every user journey, eliminated unnecessary steps, and created interfaces that feel intuitive. That's the power of good design - invisible yet impactful! ✨",
        "The VMware CloudHealth redesign was such a rewarding challenge! We took a legacy interface and transformed it into a modern, beautiful experience. The data visualization improvements weren't just prettier - they were purposefully designed to surface insights 35% faster. Color coding that actually makes sense, hierarchy that guides the eye, interactions that feel natural.",
        "At Deutsche Bank, I was founding design lead for the transaction monitoring UI. The interesting challenge? Creating standardized UI interfaces using a configuration-based approach. We built a design system from scratch that could flex across different compliance needs while maintaining visual consistency. Modular components, reusable patterns, a cohesive visual language serving multiple projects!",
        "My design journey evolved beautifully: Started at Cognizant, creating healthcare UIs where accessibility wasn't optional - it was essential. At Accenture, I led the AngularJS to Angular 5 migration while improving UX - 28% increase in user engagement through better design. Each role deepened my understanding of design systems at enterprise scale."
      ],
      default: [
        "That's a great question! My design philosophy centers on creating systems that scale - both technically and organizationally. Whether it's component libraries, design tokens, or UX patterns, everything is built to serve enterprise needs while delighting users. What specific aspect interests you?",
        "I appreciate your curiosity! Design at the enterprise level is fascinating because it's equal parts creativity and systems thinking. Want to dive deeper into a specific project or approach?"
      ]
    },
    visionary: {
      greeting: [
        "Hey! 🚀 I'm The Visionary - I see what's coming next. AI-augmented workflows, self-optimizing systems, breakthrough thinking - that's my domain. I'm building the future of frontend development. What excites you?",
        "Hello! As The Visionary, I focus on what's possible tomorrow. From AI integration to paradigm shifts in how we build software, I explore the frontier. What future possibilities interest you?"
      ],
      projects: [
        "The AI-assisted workflows in our Contact Maintenance Solution are just the beginning! We're leveraging AI to accelerate deployment cycles and automate repetitive tasks. The real opportunity is in intelligent component generation - imagine AI that understands your design system and suggests optimal compositions. That's what I'm building! 🤖",
        "I'm particularly excited about self-optimizing frontend architectures. Systems that monitor their own performance, identify bottlenecks, and automatically optimize themselves. We're experimenting with AI models that analyze user behavior patterns and adapt the UI in real-time!"
      ],
      experience: [
        "At Morgan Stanley, I'm pioneering AI integration in frontend development! The Contact Maintenance Solution uses AI-assisted workflows to accelerate onboarding by 60%. But more importantly, I'm building developer productivity tools that leverage AI - imagine systems that understand your codebase context and make intelligent suggestions. I've also positioned our UI team as strategic technology intelligence - identifying future risks and opportunities before they impact us!",
        "The most forward-thinking work was at VMware with the AI Component Explorer concept. We used TensorFlow.js to analyze component usage patterns and suggest optimal combinations. This wasn't autocomplete - it was intelligent assistance that learned from the codebase! The CloudHealth transformation also pioneered next-gen data visualization that adapts to user needs. Innovation isn't just about new tech - it's about solving real problems in novel ways.",
        "At Deutsche Bank, innovation meant rethinking how we build UIs. The configuration-based approach for transaction monitoring was radical at the time - standardized interfaces that could be composed programmatically. We created modular components that could be recombined for different compliance scenarios. This was early low-code thinking before it was mainstream! The 20% defect reduction came from systematic automation and quality tooling.",
        "My innovation journey spans 12 years: Started at Cognizant, building healthcare apps where I pushed for modern frameworks. At Accenture, led AngularJS to Angular 5 migration - zero defects through automated testing innovation. Each role, I've asked: what's the next paradigm shift? Now it's AI-native development, and I'm not just using AI tools - I'm building the future where code writes and optimizes itself! 🚀"
      ],
      default: [
        "That's exactly the kind of forward-thinking question I love! The intersection of AI and frontend development is exploding with possibilities. We're at an inflection point where the tools and paradigms are fundamentally changing. What specific aspect interests you most?",
        "Great question! Innovation in frontend isn't just about new libraries - it's about reimagining how we build software. What possibilities excite you?"
      ]
    }
  };

  const personalityResponses = responses[personality];
  if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
    return personalityResponses.greeting[Math.floor(Math.random() * personalityResponses.greeting.length)];
  } else if (msg.includes('experience') || msg.includes('work') || msg.includes('career') || msg.includes('job') || msg.includes('role') || msg.includes('company') || msg.includes('morgan') || msg.includes('vmware') || msg.includes('deutsche') || msg.includes('accenture') || msg.includes('cognizant')) {
    return personalityResponses.experience[Math.floor(Math.random() * personalityResponses.experience.length)];
  } else if (msg.includes('project') || msg.includes('built') || msg.includes('created')) {
    return personalityResponses.projects[Math.floor(Math.random() * personalityResponses.projects.length)];
  } else {
    return personalityResponses.default[Math.floor(Math.random() * personalityResponses.default.length)];
  }
};

function App() {
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
    architect: ["Tell me about your experience", "System design approach?", "Performance optimization?"],
    artist: ["What's your creative journey?", "UX impact metrics?", "Tell me about your art"],
    visionary: ["Your innovation experience?", "AI in frontend?", "Future vision?"]
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
                <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group/item">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${currentPersonality.gradient} group-hover/item:scale-110 transition-transform`}>
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm">GitHub</span>
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
            Built with React • Powered by AI Principles • No Backend Required
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

export default App;
