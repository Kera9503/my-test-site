import React, { useState, useEffect } from 'react';
import { Code, Zap, Users, TrendingUp, ArrowRight, Check, Sparkles, Terminal, Database, ShoppingCart, CreditCard, MessageSquare, BarChart3, Lock, Clock, FileText, Globe, Search, Smartphone, Layout, Award, LogIn, PieChart, DollarSign, Settings, Bell, Shield, Menu, X, ChevronRight, TrendingDown, Activity, Calendar, Mail, Phone, MapPin, ExternalLink, Download, Upload, RefreshCw, Eye, Filter, Plus } from 'lucide-react';

export default function LivingwebApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Portal state for demo
  const [portalView, setPortalView] = useState('dashboard');
  const [selectedTimeRange, setSelectedTimeRange] = useState('30d');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate and scroll to top
  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  const services = [
    {
      icon: Zap,
      title: "Quick Launch",
      slug: "quick-launch",
      subtitle: "För företag som vill komma igång snabbt",
      description: "Professionell webbplats på dagar, inte veckor. Perfekt för småföretag, restauranger och butiker som behöver stark digital närvaro direkt.",
      features: [
        "Modern responsiv design", 
        "SEO-optimerad från start", 
        "Mobil-först approach", 
        "Snabb leverans (7-14 dagar)",
        "Grundläggande analys i kundportal"
      ],
      price: "Från 15,000 SEK",
      monthlyPrice: "499 SEK/månad",
      portalFeatures: ["Basic Analytics", "Site Performance", "Monthly Reports"],
      includes: [
        "Up to 5 sidor",
        "Kontaktformulär",
        "Google Maps integration",
        "Basic SEO setup",
        "SSL certifikat",
        "1 månads gratis support"
      ]
    },
    {
      icon: TrendingUp,
      title: "Growth Solutions",
      slug: "growth-solutions",
      subtitle: "För företag redo att skala",
      description: "Bokningssystem, CRM-integration, e-handel och betallösningar. Vi bygger infrastrukturen som driver din tillväxt.",
      features: [
        "Boknings- & schemaläggningssystem", 
        "E-handel & webshop med betalintegrationer", 
        "CRM-lösningar", 
        "Marketing automation",
        "Avancerad analys & rapportering i portal",
        "Månadsvis optimering"
      ],
      price: "Från 45,000 SEK",
      monthlyPrice: "1,499 SEK/månad",
      portalFeatures: ["Advanced Analytics", "Revenue Tracking", "Customer Insights", "A/B Testing", "Performance Reports"],
      includes: [
        "Allt i Quick Launch",
        "Custom funktionalitet",
        "API integrationer",
        "Betalgateway setup",
        "Advanced SEO",
        "3 månaders gratis support"
      ]
    },
    {
      icon: Terminal,
      title: "Advanced AI & Custom",
      slug: "ai-custom",
      subtitle: "För företag som pushar gränser",
      description: "RAG-baserade AI-system, custom automation, komplexa integrationer. När färdiga lösningar inte räcker, bygger vi det som inte finns än.",
      features: [
        "AI & RAG implementation", 
        "Skräddarsydd automation", 
        "Komplexa systemintegrationer", 
        "Prediktiv analytics",
        "Dedikerad teknisk partner", 
        "24/7 prioriterad support"
      ],
      price: "Anpassat efter behov",
      monthlyPrice: "Från 5,000 SEK/månad",
      portalFeatures: ["Real-time AI Dashboards", "Custom Metrics", "API Management", "White-label Options", "Priority Support"],
      includes: [
        "Allt i Growth Solutions",
        "AI/ML implementation",
        "Dedikerad projektledare",
        "Custom analytics",
        "White-label option",
        "Ongoing tech partnership"
      ]
    }
  ];

  const capabilities = [
    { icon: Code, label: "Web Development" },
    { icon: Sparkles, label: "AI & RAG Systems" },
    { icon: ShoppingCart, label: "E-commerce" },
    { icon: CreditCard, label: "Betallösningar" },
    { icon: Database, label: "CRM & Databaser" },
    { icon: MessageSquare, label: "Bokningssystem" },
    { icon: BarChart3, label: "Analytics & Insights" },
    { icon: Globe, label: "SEO & Marketing" }
  ];

  const portalFeatures = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Se besöksstatistik, konverteringar och användarbeteende i realtid"
    },
    {
      icon: DollarSign,
      title: "Billing & Invoices",
      description: "Hantera abonnemang, betalningar och få automatiska fakturor"
    },
    {
      icon: Settings,
      title: "Active Solutions",
      description: "Översikt över alla dina aktiva lösningar och tjänster"
    },
    {
      icon: FileText,
      title: "Reports & Insights",
      description: "Månatliga rapporter med rekommendationer för optimering"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Få aviseringar om viktiga händelser och uppdateringar"
    },
    {
      icon: Shield,
      title: "Security & Backup",
      description: "Säkerhetsöversikt och automatiska backups av din data"
    }
  ];

  // TODO: Replace with real blog posts from your CMS/database
  const blogPosts = [
    {
      title: "Hur AI kan förändra din kundservice",
      excerpt: "Upptäck hur RAG-baserade AI-system kan automatisera och förbättra din kundservice...",
      date: "2025-02-10",
      author: "Livingweb Team",
      category: "AI & Automation"
    },
    {
      title: "SEO-guide för svenska företag 2025",
      excerpt: "Allt du behöver veta om SEO i Sverige och hur du når din målgrupp...",
      date: "2025-02-05",
      author: "Livingweb Team",
      category: "SEO & Marketing"
    },
    {
      title: "Välja rätt bokningssystem för ditt företag",
      excerpt: "En guide till att välja och implementera det perfekta bokningssystemet...",
      date: "2025-01-28",
      author: "Livingweb Team",
      category: "Tech Solutions"
    }
  ];

  // TODO: Replace with real team data
  const teamMembers = [
    {
      name: "[Partner 1 Name]", // TODO: Add partner 1 name
      role: "Co-Founder & Technical Lead",
      bio: "Specialist inom AI och backend utveckling med 10+ års erfarenhet.",
      image: "/placeholder-team-1.jpg" // TODO: Add real team photo
    },
    {
      name: "[Partner 2 Name]", // TODO: Add partner 2 name
      role: "Co-Founder & Design Lead",
      bio: "UX/UI designer med passion för användarvänliga lösningar.",
      image: "/placeholder-team-2.jpg" // TODO: Add real team photo
    },
    {
      name: "[Partner 3 Name]", // TODO: Add partner 3 name
      role: "Co-Founder & Business Development",
      bio: "Företagsstrategi och kundutveckling, hjälper företag att växa.",
      image: "/placeholder-team-3.jpg" // TODO: Add real team photo
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          background: #050505;
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-border {
          position: relative;
          background: #0a0a0a;
          border-radius: 16px;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.2;
        }

        .gradient-border:hover::before {
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.1s; opacity: 0; }
        .delay-2 { animation-delay: 0.2s; opacity: 0; }
        .delay-3 { animation-delay: 0.3s; opacity: 0; }
        .delay-4 { animation-delay: 0.4s; opacity: 0; }
        .delay-5 { animation-delay: 0.5s; opacity: 0; }
        .delay-6 { animation-delay: 0.6s; opacity: 0; }

        .glass {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .text-shadow-glow {
          text-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
        }

        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.2);
        }

        .nav-blur {
          backdrop-filter: blur(12px) saturate(180%);
          background: rgba(5, 5, 5, 0.8);
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .scroll-top-btn:hover {
          transform: translateY(-4px);
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('home')}
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            <span className="gradient-text">Livingweb</span>
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate('home')} className="text-gray-300 hover:text-white transition-colors">Hem</button>
            <button onClick={() => navigate('about')} className="text-gray-300 hover:text-white transition-colors">Om Oss</button>
            <button onClick={() => navigate('services')} className="text-gray-300 hover:text-white transition-colors">Tjänster</button>
            <button onClick={() => navigate('pricing')} className="text-gray-300 hover:text-white transition-colors">Priser</button>
            <button onClick={() => navigate('blog')} className="text-gray-300 hover:text-white transition-colors">Blog</button>
            <button 
              onClick={() => navigate('portal-demo')}
              className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/5 transition-all"
            >
              <LogIn size={16} />
              <span>Portal Demo</span>
            </button>
            <button 
              onClick={() => navigate('contact')}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
            >
              Kontakta Oss
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-white/5">
            <div className="px-6 py-4 space-y-3">
              <button onClick={() => navigate('home')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Hem</button>
              <button onClick={() => navigate('about')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Om Oss</button>
              <button onClick={() => navigate('services')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Tjänster</button>
              <button onClick={() => navigate('pricing')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Priser</button>
              <button onClick={() => navigate('blog')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Blog</button>
              <button onClick={() => navigate('portal-demo')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">Portal Demo</button>
              <button onClick={() => navigate('contact')} className="block w-full text-left py-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">Kontakta Oss</button>
            </div>
          </div>
        )}
      </nav>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="scroll-top-btn glass p-4 rounded-full hover:bg-white/10 transition-all"
          style={{ opacity: showScrollTop ? 1 : 0 }}
        >
          <ArrowRight size={24} className="rotate-[-90deg]" />
        </button>
      )}

      {/* Page Content */}
      <div className="pt-20">
        {currentPage === 'home' && <HomePage navigate={navigate} services={services} capabilities={capabilities} portalFeatures={portalFeatures} />}
        {currentPage === 'about' && <AboutPage teamMembers={teamMembers} navigate={navigate} />}
        {currentPage === 'services' && <ServicesPage services={services} navigate={navigate} />}
        {currentPage === 'pricing' && <PricingPage services={services} navigate={navigate} />}
        {currentPage === 'blog' && <BlogPage blogPosts={blogPosts} navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'portal-demo' && <PortalDemo portalView={portalView} setPortalView={setPortalView} selectedTimeRange={selectedTimeRange} setSelectedTimeRange={setSelectedTimeRange} />}
      </div>

      {/* Footer */}
      <Footer navigate={navigate} />
    </div>
  );
}

// HOME PAGE COMPONENT
function HomePage({ navigate, services, capabilities, portalFeatures }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pulse-glow"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pulse-glow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pulse-glow" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-in delay-1">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-shadow-glow">
              Din tekniska partner
              <br />
              <span className="gradient-text">för långsiktig tillväxt</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto animate-in delay-2 leading-relaxed">
            Vi bygger inte bara projekt — vi bygger partnerskap. Från snabba webblanseringar till avancerade AI-system. 
            Vi är det tekniska teamet som växer med ditt företag.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-10 animate-in delay-3">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-sm hover:bg-white/5 transition-all">
                <cap.icon size={14} className="text-blue-400" />
                <span className="text-gray-300">{cap.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in delay-4">
            <button 
              onClick={() => navigate('services')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Utforska Tjänster <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => {
                navigate('home');
                setTimeout(() => {
                  document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-8 py-4 glass hover:bg-white/5 rounded-lg font-semibold transition-all"
            >
              Se Vårt Case
            </button>
          </div>

          <div className="mt-16 text-sm text-gray-500 animate-in delay-5">
            <p>Baserade i Stockholm • Betjänar företag i hela Norden</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Varför <span className="gradient-text">Livingweb</span>?
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto text-lg">
            Vi är inte bara utvecklare — vi är din strategiska tekniska partner
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 gradient-border hover-lift">
              <Zap className="text-blue-400 mb-6" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Snabb Exekvering</h3>
              <p className="text-gray-400 leading-relaxed">
                Behöver du en sajt på dagar eller ett komplext system över månader? Vi rör oss i din takt. Ingen byråkrati, bara resultat.
              </p>
            </div>

            <div className="p-8 gradient-border hover-lift">
              <Users className="text-purple-400 mb-6" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Långsiktigt Partnerskap</h3>
              <p className="text-gray-400 leading-relaxed">
                Vi försvinner inte efter lansering. Vi är din tekniska medpilot som utvecklar dina lösningar när du växer.
              </p>
            </div>

            <div className="p-8 gradient-border hover-lift">
              <Code className="text-pink-400 mb-6" size={40} />
              <h3 className="text-2xl font-semibold mb-4">Full-Stack Expertis</h3>
              <p className="text-gray-400 leading-relaxed">
                Från front-end design till AI-backends, betalsystem till CRM. Om det är digitalt, bygger vi det. Ingen outsourcing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Portal Preview */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-48 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-gray-300">Inkluderat för alla kunder</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Din egen <span className="gradient-text">kundportal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Full transparens och kontroll över dina lösningar. Se statistik i realtid, hantera fakturor och följ din digitala tillväxt.
            </p>
          </div>

          <div className="mb-16 glass rounded-2xl p-12 text-center hover-lift">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Lock size={32} className="text-blue-400" />
              <h3 className="text-2xl font-semibold">Säker inloggning med BankID</h3>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              {/* TODO: Integrate real BankID authentication */}
              Logga in säkert via BankID och få tillgång till din personliga dashboard med all relevant data.
            </p>
            <button 
              onClick={() => navigate('portal-demo')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
            >
              <Eye size={20} />
              Se Portal Demo
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portalFeatures.map((feature, idx) => (
              <div key={idx} className="p-6 glass rounded-xl hover:bg-white/5 transition-all hover-lift">
                <feature.icon className="text-blue-400 mb-4" size={28} />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            Lösningar för <span className="gradient-text">varje fas</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
            Välj rätt lösning för var ditt företag är just nu
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="p-8 gradient-border cursor-pointer group hover-lift"
              >
                <service.icon className="text-blue-400 mb-6 group-hover:scale-110 transition-transform" size={44} />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.subtitle}</p>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="text-3xl font-bold gradient-text mb-6">{service.price}</div>
                
                <button 
                  onClick={() => navigate('services')}
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-semibold"
                >
                  Läs Mer <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('pricing')}
              className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/5 rounded-lg font-semibold transition-all"
            >
              Se Alla Priser <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
              <Award size={16} className="text-yellow-400" />
              <span className="text-sm font-semibold text-gray-300">Featured Case Study</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Hur vi hjälpte <span className="gradient-text">1000 Företag</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Ett Stockholmsbaserat företag som revolutionerar hur småföretag hittar och anlitar hantverkare
            </p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Utmaningen</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  1000 Företag ville bygga en plattform där småföretag enkelt kunde hitta och boka pålitliga hantverkare 
                  i Stockholm-regionen. De behövde ett komplext bokningssystem med AI-matchning, betallösningar, 
                  och en smidig användarupplevelse för både företag och hantverkare.
                </p>
                {/* TODO: Add actual project challenges and requirements */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-400">Komplexa bokningsflöden med schemahantering</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-400">AI-driven matchning mellan behov och hantverkare</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                    <span className="text-gray-400">Säkra betallösningar med Swish & kortbetalning</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Vår Lösning</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Vi byggde en komplett plattform med RAG-baserat AI-system för smart matchning, 
                  realtidsbokning, integrerade betallösningar och en omfattande dashboard.
                </p>
                {/* TODO: Add actual solution details and tech stack used */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">AI-driven matchningsalgoritm med RAG-teknologi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Custom bokningssystem med realtidskalender</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Integrerade Swish, Klarna och kortbetalningar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TODO: Replace with real project metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">87%</div>
                <div className="text-sm text-gray-400">Nöjda användare</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3,200+</div>
                <div className="text-sm text-gray-400">Bokningar första året</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">45%</div>
                <div className="text-sm text-gray-400">Snabbare matchning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-gray-400">Automatiserad drift</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Redo att starta ditt projekt?
          </h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Låt oss diskutera hur vi kan hjälpa ditt företag växa
          </p>
          <button 
            onClick={() => navigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
          >
            Kontakta Oss Idag <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}

// ABOUT PAGE COMPONENT
function AboutPage({ teamMembers, navigate }) {
  return (
    <>
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Om <span className="gradient-text">Livingweb</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Vi är tre partners med passion för teknologi och företagsutveckling, baserade i Stockholm
          </p>

          {/* Company Story */}
          <div className="glass rounded-2xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold mb-6">Vår Story</h2>
            {/* TODO: Write company origin story */}
            <p className="text-gray-400 leading-relaxed mb-6">
              [TODO: Lägg till er företagshistoria här - Hur ni möttes, varför ni startade Livingweb, 
              vilken vision ni har för företaget och era kunder. Detta är en viktig del för att bygga 
              förtroende med potentiella kunder.]
            </p>
            <p className="text-gray-400 leading-relaxed">
              Livingweb grundades med visionen att vara mer än bara en webbyra. Vi ville skapa långsiktiga 
              partnerskap med våra kunder och hjälpa dem växa genom smart teknologi och kontinuerlig optimering.
            </p>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Vårt Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="glass rounded-xl p-6 text-center hover-lift">
                  {/* TODO: Replace with actual team photos */}
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold">
                    {member.name.charAt(1).toUpperCase()}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Våra Värderingar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Users className="text-blue-400" size={28} />
                  Partnerskap Först
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Vi ser våra kunder som partners, inte projekt. Din framgång är vår framgång.
                </p>
              </div>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Sparkles className="text-purple-400" size={28} />
                  Innovation & Kvalitet
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Vi använder alltid den senaste teknologin men aldrig på bekostnad av kvalitet och stabilitet.
                </p>
              </div>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <Shield className="text-green-400" size={28} />
                  Transparens
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Öppen kommunikation, tydliga priser och full insyn i ditt projekt via vår kundportal.
                </p>
              </div>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <TrendingUp className="text-pink-400" size={28} />
                  Resultatfokus
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Vi mäter framgång i din ROI, inte bara i levererade funktioner.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center glass rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Vill du jobba med oss?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Vi är alltid intresserade av nya projekt och partnerskap
            </p>
            <button 
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
            >
              Kontakta Oss <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// SERVICES PAGE COMPONENT
function ServicesPage({ services, navigate }) {
  return (
    <>
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Våra <span className="gradient-text">Tjänster</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Från snabba webblanseringar till avancerade AI-system - vi har lösningen för ditt företag
          </p>

          {/* Detailed Services */}
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div key={idx} className="glass rounded-2xl p-8 md:p-12 hover-lift">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <service.icon className="text-blue-400 mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-500 mb-4">{service.subtitle}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <div className="text-4xl font-bold gradient-text mb-2">{service.price}</div>
                      <div className="text-gray-500">{service.monthlyPrice} för hosting & support</div>
                    </div>

                    <button 
                      onClick={() => navigate('contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all"
                    >
                      Kom Igång <ArrowRight size={20} />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-6">Vad Ingår:</h3>
                    <div className="space-y-4 mb-8">
                      {service.includes.map((item, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-3">
                          <Check size={20} className="text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-6">Funktioner:</h3>
                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <ChevronRight size={20} className="text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="glass rounded-xl p-6">
                      <h4 className="font-semibold mb-4">Kundportal Access:</h4>
                      <div className="space-y-2">
                        {service.portalFeatures.map((pf, pfIdx) => (
                          <div key={pfIdx} className="text-sm text-gray-400 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                            {pf}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Vår Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { num: 1, title: "Discovery", desc: "Vi förstår din affär och tekniska behov" },
                { num: 2, title: "Strategi & Design", desc: "Vi tar fram en teknisk roadmap" },
                { num: 3, title: "Utveckling", desc: "Snabb utveckling med regelbundna uppdateringar" },
                { num: 4, title: "Lansering & Tillväxt", desc: "Kontinuerlig optimering baserat på data" }
              ].map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// PRICING PAGE COMPONENT
function PricingPage({ services, navigate }) {
  return (
    <>
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Transparenta <span className="gradient-text">Priser</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Inga dolda kostnader. Välj det paket som passar ditt företag bäst.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, idx) => (
              <div key={idx} className={`glass rounded-2xl p-8 hover-lift ${idx === 1 ? 'border-2 border-blue-500/50' : ''}`}>
                {idx === 1 && (
                  <div className="inline-block px-4 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-4">
                    Mest Populär
                  </div>
                )}
                <service.icon className="text-blue-400 mb-4" size={40} />
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{service.subtitle}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2">{service.price}</div>
                  <div className="text-gray-400 text-sm">{service.monthlyPrice}</div>
                </div>

                <button 
                  onClick={() => navigate('contact')}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all mb-6"
                >
                  Välj {service.title}
                </button>

                <div className="space-y-3">
                  {service.includes.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2">
                      <Check size={18} className="text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="glass rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Tilläggstjänster</h2>
            {/* TODO: Add real pricing for add-on services */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Extra Design Revisions</h3>
                <p className="text-gray-400 text-sm mb-4">Ytterligare designändringar utöver inkluderade</p>
                <div className="text-2xl font-bold gradient-text">2,500 SEK/iteration</div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Prioriterad Support</h3>
                <p className="text-gray-400 text-sm mb-4">24/7 support med garanterad svarstid</p>
                <div className="text-2xl font-bold gradient-text">3,000 SEK/månad</div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Content Management</h3>
                <p className="text-gray-400 text-sm mb-4">Vi uppdaterar innehåll åt dig</p>
                <div className="text-2xl font-bold gradient-text">1,500 SEK/timme</div>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">SEO Optimization Package</h3>
                <p className="text-gray-400 text-sm mb-4">Månatlig SEO-optimering och rapportering</p>
                <div className="text-2xl font-bold gradient-text">5,000 SEK/månad</div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Vanliga Frågor</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {/* TODO: Add more FAQs based on common customer questions */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Vad ingår i månadskostnaden?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Månadskostnaden inkluderar hosting, säkerhetsuppdateringar, backups, och tillgång till kundportalen.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Kan jag uppgradera mitt paket senare?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Absolut! Du kan när som helst uppgradera till ett högre paket. Vi hjälper dig med övergången.
                </p>
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Hur lång är bindningstiden?</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Vi har 12 månaders bindningstid för Quick Launch och Growth Solutions, därefter månadsvis uppsägning. 
                  Advanced AI & Custom har anpassade avtal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// BLOG PAGE COMPONENT
function BlogPage({ blogPosts, navigate }) {
  return (
    <>
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            <span className="gradient-text">Blog</span> & Insikter
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Läs om de senaste trenderna inom webbutveckling, AI och digital tillväxt
          </p>

          {/* TODO: Connect to actual blog/CMS */}
          <div className="glass rounded-xl p-6 mb-12 text-center">
            <FileText className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-400 mb-4">
              [TODO: Integrera med blogg-CMS eller lägg till bloggposter manuellt]
            </p>
            <p className="text-sm text-gray-500">
              Detta är platshållare för framtida blogginnehåll
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <div key={idx} className="glass rounded-xl p-6 hover-lift cursor-pointer">
                <div className="text-sm text-blue-400 mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 glass rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Prenumerera på vårt nyhetsbrev</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Få de senaste insikterna om webbutveckling, AI och digital tillväxt direkt i din inkorg
            </p>
            {/* TODO: Connect newsletter signup to email service (Mailchimp, SendGrid, etc) */}
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Din email" 
                className="flex-1 px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all">
                Prenumerera
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// CONTACT PAGE COMPONENT
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with backend/email service to send form data
    alert('Form submission is not yet connected. Please integrate with your email service.');
    console.log('Form data:', formData);
  };

  return (
    <>
      <section className="py-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Kontakta <span className="gradient-text">Oss</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Låt oss diskutera hur vi kan hjälpa ditt företag växa
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Kom i kontakt</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    {/* TODO: Replace with your real email */}
                    <a href="mailto:hello@livingweb.se" className="text-gray-400 hover:text-blue-400 transition-colors">
                      hello@livingweb.se
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    {/* TODO: Replace with your real phone number */}
                    <a href="tel:+46701234567" className="text-gray-400 hover:text-blue-400 transition-colors">
                      +46 70 123 45 67
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Adress</h3>
                    {/* TODO: Replace with your real address */}
                    <p className="text-gray-400">
                      Stockholm, Sverige<br />
                      [TODO: Lägg till fullständig adress]
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold mb-4">Öppettider</h3>
                {/* TODO: Add real office hours */}
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Måndag - Fredag</span>
                    <span>09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lördag - Söndag</span>
                    <span>Stängt</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Skicka oss ett meddelande</h2>
              {/* TODO: Connect form to backend/email service */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Namn *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Ditt namn"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="din@email.se"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Företag</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                    placeholder="Ditt företag"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Intresserad av *</label>
                  <select 
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
                  >
                    <option value="" className="bg-[#0a0a0a]">Välj tjänst</option>
                    <option value="quick" className="bg-[#0a0a0a]">Quick Launch</option>
                    <option value="growth" className="bg-[#0a0a0a]">Growth Solutions</option>
                    <option value="custom" className="bg-[#0a0a0a]">Advanced AI & Custom</option>
                    <option value="unsure" className="bg-[#0a0a0a]">Osäker - vill diskutera</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Meddelande *</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none text-white placeholder-gray-500"
                    placeholder="Berätta om ditt projekt eller behov"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                >
                  Skicka Meddelande <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// PORTAL DEMO COMPONENT
function PortalDemo({ portalView, setPortalView, selectedTimeRange, setSelectedTimeRange }) {
  // TODO: Connect to real analytics data when implementing actual portal
  const mockData = {
    visitors: {
      total: 15234,
      change: 12.5,
      chartData: [4200, 5100, 4800, 6200, 5900, 7100, 6800]
    },
    revenue: {
      total: 142500,
      change: 8.3,
      chartData: [32000, 38000, 35000, 42000, 39000, 48000, 45000]
    },
    conversions: {
      rate: 3.2,
      total: 487,
      change: 15.2
    }
  };

  return (
    <>
      <section className="py-12 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">Kundportal Demo</h1>
                <p className="text-gray-400">Detta är en demo av vad dina kunder kommer att se</p>
              </div>
              <div className="flex items-center gap-4">
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="px-4 py-2 glass rounded-lg focus:border-blue-500 focus:outline-none transition-colors text-white"
                >
                  <option value="7d" className="bg-[#0a0a0a]">Senaste 7 dagarna</option>
                  <option value="30d" className="bg-[#0a0a0a]">Senaste 30 dagarna</option>
                  <option value="90d" className="bg-[#0a0a0a]">Senaste 90 dagarna</option>
                  <option value="1y" className="bg-[#0a0a0a]">Senaste året</option>
                </select>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex gap-2 glass rounded-lg p-2">
              <button 
                onClick={() => setPortalView('dashboard')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${portalView === 'dashboard' ? 'bg-blue-600' : 'hover:bg-white/5'}`}
              >
                <BarChart3 className="inline mr-2" size={16} />
                Dashboard
              </button>
              <button 
                onClick={() => setPortalView('analytics')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${portalView === 'analytics' ? 'bg-blue-600' : 'hover:bg-white/5'}`}
              >
                <Activity className="inline mr-2" size={16} />
                Analytics
              </button>
              <button 
                onClick={() => setPortalView('billing')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${portalView === 'billing' ? 'bg-blue-600' : 'hover:bg-white/5'}`}
              >
                <DollarSign className="inline mr-2" size={16} />
                Fakturering
              </button>
              <button 
                onClick={() => setPortalView('solutions')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${portalView === 'solutions' ? 'bg-blue-600' : 'hover:bg-white/5'}`}
              >
                <Settings className="inline mr-2" size={16} />
                Aktiva Lösningar
              </button>
              <button 
                onClick={() => setPortalView('support')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${portalView === 'support' ? 'bg-blue-600' : 'hover:bg-white/5'}`}
              >
                <MessageSquare className="inline mr-2" size={16} />
                Support
              </button>
            </div>
          </div>

          {/* Dashboard View */}
          {portalView === 'dashboard' && (
            <div className="space-y-8">
              {/* Stats Overview */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400">Total Besökare</h3>
                    <Activity className="text-blue-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{mockData.visitors.total.toLocaleString()}</div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400">+{mockData.visitors.change}%</span>
                    <span className="text-gray-500">vs förra perioden</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400">Intäkter</h3>
                    <DollarSign className="text-green-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{mockData.revenue.total.toLocaleString()} SEK</div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400">+{mockData.revenue.change}%</span>
                    <span className="text-gray-500">vs förra perioden</span>
                  </div>
                </div>

                <div className="glass rounded-xl p-6 hover-lift">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-400">Konverteringsgrad</h3>
                    <TrendingUp className="text-purple-400" size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{mockData.conversions.rate}%</div>
                  <div className="flex items-center gap-2 text-sm">
                    <TrendingUp className="text-green-400" size={16} />
                    <span className="text-green-400">+{mockData.conversions.change}%</span>
                    <span className="text-gray-500">{mockData.conversions.total} konverteringar</span>
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Besökarstatistik</h3>
                {/* TODO: Integrate real charting library (Chart.js, Recharts, etc) */}
                <div className="h-64 flex items-end justify-around gap-4">
                  {mockData.visitors.chartData.map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all hover:opacity-80"
                        style={{ height: `${(value / Math.max(...mockData.visitors.chartData)) * 100}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">
                        {['Mån', 'Tis', 'Ons', 'Tor', 'Fre', 'Lör', 'Sön'][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Senaste Aktivitet</h3>
                <div className="space-y-4">
                  {/* TODO: Connect to real activity feed */}
                  <div className="flex items-start gap-4 p-4 glass rounded-lg">
                    <Bell className="text-blue-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Ny månatlig rapport tillgänglig</p>
                      <p className="text-sm text-gray-400">För dig i granskning • 2 timmar sedan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 glass rounded-lg">
                    <RefreshCw className="text-green-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">SEO-optimering slutförd</p>
                      <p className="text-sm text-gray-400">Nya keywords indexerade • 1 dag sedan</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 glass rounded-lg">
                    <Shield className="text-purple-400 mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Säkerhetsuppdatering installerad</p>
                      <p className="text-sm text-gray-400">System är säkert • 3 dagar sedan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analytics View */}
          {portalView === 'analytics' && (
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Detaljerad Analytics</h2>
              {/* TODO: Build out comprehensive analytics dashboard with real data */}
              <p className="text-gray-400 mb-8">
                [TODO: Integrera med Google Analytics, Plausible eller liknande för djupgående analys]
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Toppkällor</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Google Organic</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Direct</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Social Media</span>
                      <span className="font-semibold">18%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Referral</span>
                      <span className="font-semibold">9%</span>
                    </div>
                  </div>
                </div>
                <div className="glass rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Populära Sidor</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">/produkter</span>
                      <span className="font-semibold">2,345 visningar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">/om-oss</span>
                      <span className="font-semibold">1,892 visningar</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">/kontakt</span>
                      <span className="font-semibold">1,234 visningar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing View */}
          {portalView === 'billing' && (
            <div className="space-y-6">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Aktuell Plan</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-gray-400 mb-2">Ditt Paket</div>
                    <div className="text-3xl font-bold mb-4">Growth Solutions</div>
                    <div className="text-gray-400 mb-2">Månadskostnad</div>
                    <div className="text-2xl font-bold">1,499 SEK/månad</div>
                  </div>
                  <div className="flex flex-col justify-end">
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all mb-2">
                      Uppgradera Plan
                    </button>
                    <button className="px-6 py-3 glass hover:bg-white/5 rounded-lg font-semibold transition-all">
                      Hantera Betalmetod
                    </button>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Fakturor</h2>
                {/* TODO: Connect to real billing system (Stripe, etc) */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 glass rounded-lg">
                    <div>
                      <p className="font-semibold">Faktura #2025-002</p>
                      <p className="text-sm text-gray-400">Februari 2025 • Betald</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold">1,499 SEK</span>
                      <button className="p-2 glass hover:bg-white/5 rounded-lg transition-all">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 glass rounded-lg">
                    <div>
                      <p className="font-semibold">Faktura #2025-001</p>
                      <p className="text-sm text-gray-400">Januari 2025 • Betald</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-semibold">1,499 SEK</span>
                      <button className="p-2 glass hover:bg-white/5 rounded-lg transition-all">
                        <Download size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Solutions View */}
          {portalView === 'solutions' && (
            <div className="glass rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Dina Aktiva Lösningar</h2>
              {/* TODO: Connect to real solutions/services database */}
              <div className="space-y-6">
                <div className="glass rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Företagshwebbplats</h3>
                      <p className="text-gray-400 text-sm">Lanserad: 15 Jan 2025</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Aktiv</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 glass hover:bg-white/5 rounded-lg transition-all text-sm">
                      <ExternalLink className="inline mr-2" size={16} />
                      Besök Sajt
                    </button>
                    <button className="px-4 py-2 glass hover:bg-white/5 rounded-lg transition-all text-sm">
                      Se Detaljer
                    </button>
                  </div>
                </div>

                <div className="glass rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Bokningssystem</h3>
                      <p className="text-gray-400 text-sm">Lanserad: 1 Feb 2025</p>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">Aktiv</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="px-4 py-2 glass hover:bg-white/5 rounded-lg transition-all text-sm">
                      <Settings className="inline mr-2" size={16} />
                      Hantera
                    </button>
                    <button className="px-4 py-2 glass hover:bg-white/5 rounded-lg transition-all text-sm">
                      Se Detaljer
                    </button>
                  </div>
                </div>

                <button className="w-full p-6 glass hover:bg-white/5 rounded-lg transition-all border-2 border-dashed border-gray-700">
                  <Plus className="inline mr-2" size={20} />
                  Lägg till ny lösning
                </button>
              </div>
            </div>
          )}

          {/* Support View */}
          {portalView === 'support' && (
            <div className="space-y-6">
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Öppna Supportärenden</h2>
                {/* TODO: Integrate with ticketing system (Zendesk, Intercom, etc) */}
                <div className="space-y-4 mb-6">
                  <div className="glass rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold mb-1">Hjälp med SEO-inställningar</h3>
                        <p className="text-sm text-gray-400">Ärende #1234 • Öppnad 2 dagar sedan</p>
                      </div>
                      <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">Pågående</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      Behöver hjälp med att optimera meta-beskrivningar för nya produktsidor...
                    </p>
                    <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      Se Konversation →
                    </button>
                  </div>
                </div>

                <button className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                  <Plus size={20} />
                  Öppna Nytt Ärende
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Kontakta Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-blue-400" size={20} />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:support@livingweb.se" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                          support@livingweb.se
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-blue-400" size={20} />
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <a href="tel:+46701234567" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                          +46 70 123 45 67
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4">Kunskapsbas</h3>
                  <div className="space-y-2">
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      → Hur uppdaterar jag innehåll på min sajt?
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      → Guide till SEO-optimering
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      → Förståelse av analytics-data
                    </a>
                    <a href="#" className="block text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      → Hantera fakturering och betalningar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Demo Notice */}
          <div className="mt-12 glass rounded-xl p-6 border-2 border-yellow-500/30">
            <div className="flex items-start gap-4">
              <Bell className="text-yellow-400 mt-1" size={24} />
              <div>
                <h3 className="font-semibold mb-2 text-yellow-400">Detta är en Demo</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Den riktiga kundportalen kommer att vara integrerad med BankID för säker inloggning och innehålla 
                  din faktiska data. All funktionalitet du ser här kommer att vara fullt funktionell i produktionsversionen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// FOOTER COMPONENT
function Footer({ navigate }) {
  return (
    <footer className="py-12 px-6 border-t border-gray-900 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="gradient-text">Livingweb</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Din tekniska partner för långsiktig tillväxt
            </p>
            <div className="flex gap-4">
              {/* TODO: Add social media links */}
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                [LinkedIn]
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                [Twitter]
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => navigate('services')} className="hover:text-white transition-colors">Quick Launch</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-white transition-colors">Growth Solutions</button></li>
              <li><button onClick={() => navigate('services')} className="hover:text-white transition-colors">AI & Custom</button></li>
              <li><button onClick={() => navigate('pricing')} className="hover:text-white transition-colors">Priser</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Företag</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><button onClick={() => navigate('about')} className="hover:text-white transition-colors">Om Oss</button></li>
              <li><button onClick={() => navigate('blog')} className="hover:text-white transition-colors">Blog</button></li>
              <li><button onClick={() => navigate('portal-demo')} className="hover:text-white transition-colors">Portal Demo</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-white transition-colors">Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Stockholm, Sverige</li>
              {/* TODO: Add real contact info */}
              <li><a href="mailto:hello@livingweb.se" className="hover:text-white transition-colors">hello@livingweb.se</a></li>
              <li><a href="tel:+46701234567" className="hover:text-white transition-colors">+46 70 123 45 67</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>© 2025 Livingweb. Bygger framtiden, tillsammans.</p>
        </div>
      </div>
    </footer>
  );
}