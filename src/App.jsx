import React, { useState, useEffect, useMemo, useRef } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  AreaChart, Area, PieChart, Pie, Cell, RadarChart, PolarGrid, 
  PolarAngleAxis, Radar, ComposedChart, Bar, Line, LabelList, Legend
} from "recharts";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Activity, Thermometer, ZapOff, ShieldCheck, Layers, Globe, 
  Target, HardHat, Flame, ArrowRight, ChevronDown, BarChart3, 
  TrendingUp, DollarSign, Award, Users, Lightbulb, Box, 
  Settings, CheckCircle2, Menu, X, Monitor, Cpu, Factory, 
  Sparkles, Zap, Shield, MousePointer2
} from 'lucide-react';

// --- CONFIGURACIÓN ESTÉTICA ---
const COLORS = {
  primary: "#facc15", // Amarillo Aluplak
  secondary: "#1e293b",
  accent: "#3b82f6",
  bg: "#020617",
  card: "rgba(15, 23, 42, 0.7)",
  border: "rgba(255, 255, 255, 0.1)",
  textMuted: "#64748b"
};

export default function AluplakMegaPortal() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- LÓGICA DE INTERACCIÓN ---
  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => {
      const sections = ['inicio', 'tecnologia', 'mercado', 'finanzas', 'proyectos'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // --- DATA ENGINE (Extraído del PDF) ---
  const financialData = useMemo(() => [
    { year: '2022', ventas: 47416.82, ebitda: 13276, grow: 'Base', desc: 'Fundación Valencia' },
    { year: '2023', ventas: 71677.26, ebitda: 20069, grow: '+51%', desc: 'Consolidación Mercado' },
    { year: '2024', ventas: 88210.56, ebitda: 24698, grow: '+23%', desc: 'Expansión Industrial' },
    { year: '2025', ventas: 132531.34, ebitda: 37108, grow: '+50%', desc: 'Récord y Validación' },
    { year: '2026', ventas: 220000.00, ebitda: 61600, grow: '+66%', desc: 'Proyección Invisotherm' }
  ], []);

  const techComparison = [
    { metric: 'Conductividad', Aluplak: 95, Tradicional: 20 },
    { metric: 'Instalación', Aluplak: 90, Tradicional: 30 },
    { metric: 'Estética', Aluplak: 98, Tradicional: 55 },
    { metric: 'Mantenimiento', Aluplak: 100, Tradicional: 15 },
    { metric: 'Versatilidad', Aluplak: 85, Tradicional: 40 },
  ];

  const marketSegments = [
    { name: 'Exportación (30+ países)', value: 55, color: COLORS.primary },
    { name: 'Nacional (España)', value: 45, color: '#334155' }
  ];

  // --- ANIMACIONES ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* BARRA DE PROGRESO */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-[110]" style={{ scaleX }} />

      {/* NAVIGATION MASTER */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020617]/90 backdrop-blur-2xl border-b border-white/5 px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-11 h-11 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-yellow-400/20">
            <Activity size={24} className="text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-black italic text-2xl tracking-tighter uppercase leading-none">ALUPLAK<span className="text-yellow-400">.</span></span>
            <span className="text-[7px] font-bold tracking-[0.4em] text-slate-500 uppercase">Tecnología de Superficies Activas</span>
          </div>
        </div>

        <div className="hidden lg:flex gap-10 items-center">
          {['inicio', 'tecnologia', 'mercado', 'finanzas'].map((item) => (
            <button 
              key={item} onClick={() => scrollTo(item)}
              className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:text-yellow-400 ${activeSection === item ? 'text-yellow-400' : 'text-slate-400'}`}
            >
              {item === 'inicio' ? 'Portal Inversor' : item}
            </button>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <button className="bg-white text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-yellow-400 transition-all flex items-center gap-2 group">
            PITCH DECK 2026 <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[95] bg-black/95 backdrop-blur-3xl p-12 flex flex-col justify-center gap-8 lg:hidden"
          >
            {['inicio', 'tecnologia', 'mercado', 'finanzas'].map((item) => (
              <button key={item} onClick={() => scrollTo(item)} className="text-5xl font-black italic text-left uppercase tracking-tighter hover:text-yellow-400">
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-20 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-400/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-8"
              initial="hidden" animate="visible" variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-yellow-400 font-bold uppercase tracking-widest text-[9px]">Lanzamiento Invisotherm 2026</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-[11vw] lg:text-[13rem] font-black mb-10 tracking-tighter italic leading-[0.75] uppercase">
                REDEFINING <br /><span className="text-yellow-400">LIVING.</span>
              </motion.h1>

              <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-start lg:items-center mt-12">
                <p className="text-2xl lg:text-4xl font-light italic text-slate-300 max-w-xl border-l-4 border-yellow-400 pl-8 leading-tight">
                  "No vendemos rodapiés. Creamos <span className="text-white font-bold underline decoration-yellow-400">sistemas inteligentes</span> que climatizan y registran tu hogar."
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                    <p className="text-4xl font-black italic">2021</p>
                    <p className="text-[9px] uppercase tracking-widest font-bold text-slate-500">Origen Valencia</p>
                  </div>
                  <div className="bg-yellow-400 p-6 rounded-3xl text-black">
                    <p className="text-4xl font-black italic">+30</p>
                    <p className="text-[9px] uppercase tracking-widest font-bold opacity-60">Países Activos</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="lg:col-span-4 space-y-6"
              initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            >
              <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-white/5 hover:border-yellow-400/30 transition-all group">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-yellow-400/10 rounded-2xl text-yellow-400 group-hover:scale-110 transition-transform">
                    <TrendingUp size={24} />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Growth 25-26</span>
                </div>
                <p className="text-5xl font-black italic mb-2 tracking-tighter">+66%</p>
                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider leading-relaxed">Crecimiento Proyectado división Climatización</p>
              </div>

              <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-white/5 hover:border-yellow-400/30 transition-all group">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform">
                    <Shield size={24} />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Patents</span>
                </div>
                <p className="text-5xl font-black italic mb-2 tracking-tighter">100%</p>
                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider leading-relaxed">Sistema Bi-Componente Patentado</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollTo('tecnologia')}
          >
            <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-500">Scroll Down</span>
            <ChevronDown size={20} className="text-yellow-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* --- TECNOLOGÍA SECTION --- */}
      <section id="tecnologia" className="py-40 bg-slate-900/20 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-10">
            <div className="space-y-4">
              <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">I+D ESTRATÉGICO</span>
              <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">INVISO<br /><span className="text-yellow-400">THERM.</span></h2>
            </div>
            <p className="text-slate-400 text-xl font-light max-w-md lg:text-right italic">
              "El primer panel constructivo calefactable de una sola pieza en el mercado global."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="space-y-12">
              <div className="bg-black/40 p-10 rounded-[4rem] border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Thermometer size={100} className="text-yellow-400" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-6">Nanotecnología <br/>en 13 milímetros.</h3>
                  <div className="space-y-6 text-slate-400 font-light leading-relaxed">
                    <p>Fabricado en <strong>Pladur o Fibrocemento de 13mm</strong>, Invisotherm integra una malla técnica capaz de climatizar hasta 14m² mediante radiación homogénea.</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <li className="flex items-start gap-4">
                        <ZapOff size={18} className="text-yellow-400 shrink-0 mt-1" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white">Sin Radiadores <br/><span className="text-[10px] text-slate-500 font-normal">Estética Minimalista</span></span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Flame size={18} className="text-yellow-400 shrink-0 mt-1" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white">Baja Inercia <br/><span className="text-[10px] text-slate-500 font-normal">Calor Instantáneo</span></span>
                      </li>
                      <li className="flex items-start gap-4">
                        <ShieldCheck size={18} className="text-yellow-400 shrink-0 mt-1" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white">Saludable <br/><span className="text-[10px] text-slate-500 font-normal">Sin ácaros ni aire</span></span>
                      </li>
                      <li className="flex items-start gap-4">
                        <Settings size={18} className="text-yellow-400 shrink-0 mt-1" />
                        <span className="text-xs uppercase font-bold tracking-widest text-white">Eficiente <br/><span className="text-[10px] text-slate-500 font-normal">-45% Consumo</span></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="Aluplak5.jpeg" className="rounded-[3rem] border border-white/10 shadow-2xl h-80 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detalle placa" />
                <img src="Aluplak6.jpeg" className="rounded-[3rem] border border-yellow-400/20 shadow-2xl h-80 w-full object-cover" alt="Instalación" />
              </div>
              <div className="space-y-6 mt-20">
                <img src="Aluplak7.jpeg" className="rounded-[3rem] border border-white/10 shadow-2xl h-80 w-full object-cover" alt="Acabado" />
                <img src="Aluplak8.jpeg" className="rounded-[3rem] border border-yellow-400/20 shadow-2xl h-80 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detalle térmico" />
              </div>
            </div>
          </div>

          {/* MATRIZ TECNOLÓGICA */}
          <div className="bg-slate-900 border border-white/5 p-12 lg:p-24 rounded-[5rem] overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-24 items-center relative z-10">
              <div className="space-y-10">
                <h3 className="text-5xl font-black italic tracking-tighter uppercase leading-none">Superioridad <br/><span className="text-yellow-400">Demostrada.</span></h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <HardHat size={32} />
                    </div>
                    <div>
                      <p className="text-3xl font-black italic">82%</p>
                      <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Ahorro en tiempos de montaje</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                      <Box size={32} />
                    </div>
                    <div>
                      <p className="text-3xl font-black italic">100%</p>
                      <p className="text-[10px] uppercase font-black text-slate-500 tracking-widest">Registrable sin obras</p>
                    </div>
                  </div>
                </div>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic border-l-2 border-white/10 pl-6">
                  Nuestro sistema bi-componente patentado es el único que permite desmontar el rodapié para acceder a instalaciones eléctricas o de red sin dañar la pared.
                </p>
              </div>
              
              <div className="h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={techComparison}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                    <Radar name="Aluplak System" dataKey="Aluplak" stroke="#facc15" fill="#facc15" fillOpacity={0.6} />
                    <Radar name="Sistemas Tradicionales" dataKey="Tradicional" stroke="#475569" fill="#475569" fillOpacity={0.2} />
                    <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '16px'}} />
                    <Legend verticalAlign="top" height={36}/>
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MERCADO SECTION --- */}
      <section id="mercado" className="py-40 max-w-[1400px] mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-32 items-center mb-40">
          <div className="space-y-12">
            <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8]">DOMINIO <br/><span className="text-yellow-400">GLOBAL.</span></h2>
            <div className="prose prose-invert">
              <p className="text-2xl font-light text-slate-300">
                Aluplak ha transformado el sector desde España, exportando soluciones premium a más de 30 países con un enfoque en <strong>alta decoración técnica</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-10 bg-slate-900 border border-white/5 rounded-[3.5rem] flex flex-col justify-between h-64 hover:border-yellow-400/40 transition-all">
                <Globe className="text-yellow-400 mb-4" size={40} />
                <div>
                  <p className="text-5xl font-black italic tracking-tighter">30+</p>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Países de Exportación</p>
                </div>
              </div>
              <div className="p-10 bg-yellow-400 rounded-[3.5rem] flex flex-col justify-between h-64 text-black">
                <Target className="opacity-40 mb-4" size={40} />
                <div>
                  <p className="text-5xl font-black italic tracking-tighter">70%</p>
                  <p className="text-[10px] font-black uppercase opacity-60 tracking-widest">Nicho de mercado técnico</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900/40 p-12 lg:p-20 rounded-[5rem] border border-white/5 backdrop-blur-xl">
              <h4 className="text-center font-black uppercase tracking-[0.3em] text-[10px] text-slate-500 mb-10">Sales Distribution 2025</h4>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={marketSegments} innerRadius={80} outerRadius={110} paddingAngle={8} dataKey="value" stroke="none">
                      {marketSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '16px'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-10 mt-10">
                {marketSegments.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: item.color}} />
                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINANZAS SECTION --- */}
      <section id="finanzas" className="py-40 bg-gradient-to-b from-[#020617] to-black border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-4">
              <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">INVESTOR METRICS</span>
              <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-[0.8]">BUSINESS <br/><span className="text-yellow-400">SCALING.</span></h2>
            </div>
            <div className="bg-slate-900 border border-white/5 p-10 rounded-[3.5rem] flex gap-12 items-center">
              <div className="text-center">
                <p className="text-5xl font-black italic text-white">3.5x</p>
                <p className="text-[10px] uppercase font-black text-yellow-400 mt-2 tracking-widest">ROI ROI 3Y</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-5xl font-black italic text-yellow-400">28%</p>
                <p className="text-[10px] uppercase font-black text-slate-500 mt-2 tracking-widest">EBITDA</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 border border-white/10 p-10 lg:p-24 rounded-[6rem] backdrop-blur-2xl">
            <div className="flex flex-col lg:flex-row justify-between mb-20 gap-8">
              <div>
                <h4 className="text-white font-black italic text-4xl tracking-tighter uppercase mb-2">Historico de Ventas</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Crecimiento Compuesto Anual</p>
              </div>
              <div className="bg-yellow-400/10 border border-yellow-400/20 px-8 py-4 rounded-3xl flex items-center gap-6">
                 <div>
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Current Valuation</p>
                   <p className="text-2xl font-black italic text-yellow-400">€ 1.2M +</p>
                 </div>
                 <div className="w-px h-8 bg-yellow-400/20" />
                 <div>
                   <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Burn Rate</p>
                   <p className="text-2xl font-black italic text-white">0.2x</p>
                 </div>
              </div>
            </div>

            <div className="h-[550px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={financialData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.4}/>
                      <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} dy={15} fontSize={12} fontWeight="bold" />
                  <YAxis hide stroke="#475569" axisLine={false} tickLine={false} fontSize={10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '20px', padding: '20px' }} 
                    itemStyle={{ fontWeight: 'bold' }}
                    cursor={{ stroke: '#facc15', strokeWidth: 1 }}
                  />
                  <Area type="monotone" dataKey="ventas" stroke={COLORS.primary} strokeWidth={6} fillOpacity={1} fill="url(#colorSales)" />
                  <Bar dataKey="ebitda" barSize={50} fill="#1e293b" radius={[15, 15, 0, 0]}>
                    <LabelList dataKey="ebitda" position="top" fill="#64748b" fontSize={10} fontWeight="bold" formatter={(val) => `€${val}`} />
                  </Bar>
                  <Line type="monotone" dataKey="ventas" stroke={COLORS.primary} strokeWidth={0} dot={{ r: 10, fill: COLORS.primary, stroke: COLORS.bg, strokeWidth: 4 }}>
                    <LabelList dataKey="grow" position="top" fill="#facc15" fontSize={14} fontWeight="black" dy={-25} />
                  </Line>
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mt-24 pt-16 border-t border-white/5">
              {financialData.map((d, i) => (
                <div key={i} className="space-y-2 group cursor-default">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 group-hover:scale-150 transition-transform" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{d.year}</p>
                  </div>
                  <p className="text-3xl font-black italic group-hover:text-yellow-400 transition-colors">€{d.ventas.toLocaleString()}</p>
                  <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="py-60 px-6 lg:px-20 text-center relative overflow-hidden">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className="bg-yellow-400 p-24 lg:p-48 rounded-[6rem] text-black space-y-16 shadow-[0_80px_150px_-30px_rgba(250,204,21,0.4)] relative group"
        >
          {/* Animación de fondo en el CTA */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10"><Activity size={200} /></div>
            <div className="absolute bottom-10 right-10"><Zap size={200} /></div>
          </div>

          <h2 className="text-8xl lg:text-[14rem] font-black italic tracking-[calc(-0.06em)] leading-[0.7] uppercase relative z-10">
            JOIN THE <br/><span className="opacity-40">EXIT.</span>
          </h2>
          
          <div className="space-y-6 relative z-10">
            <p className="text-2xl lg:text-3xl font-black uppercase tracking-widest opacity-60 max-w-3xl mx-auto leading-tight">
              Oportunidad única de inversión en el sector PropTech & Energía Sostenible.
            </p>
            <div className="h-1 w-20 bg-black mx-auto mt-8" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 pt-12 relative z-10">
            <button className="bg-black text-white px-20 py-8 rounded-full font-black uppercase italic tracking-widest hover:scale-110 hover:shadow-2xl transition-all text-sm group flex items-center gap-4">
              SOLICITAR AUDITORÍA <MousePointer2 size={18} />
            </button>
            <button className="bg-transparent border-4 border-black px-20 py-8 rounded-full font-black uppercase italic tracking-widest hover:bg-black hover:text-white transition-all text-sm">
              CONTACTO RRII
            </button>
          </div>
        </motion.div>
        
        <div className="mt-40 pt-20 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-12 text-slate-600">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-yellow-400 transition-colors">
              <Activity size={18} />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] block">ALUPLAK SYSTEM S.L</span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-700">Valencia • España • Global</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-10 text-[9px] font-black uppercase tracking-[0.2em]">
            <span className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</span>
            <span className="hover:text-white transition-colors cursor-pointer">Memoria 2025</span>
            <span className="hover:text-white transition-colors cursor-pointer">Acceso Inversores</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
