import React, { useState, useEffect, useMemo } from "react";
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
  Sparkles, Zap, Shield, MousePointer2, Rocket, PieChart as PieIcon
} from 'lucide-react';

// --- CONFIGURACIÓN DE IDENTIDAD VISUAL ---
const COLORS = {
  primary: "#facc15", 
  secondary: "#1e293b",
  accent: "#3b82f6",
  bg: "#020617",
  card: "rgba(15, 23, 42, 0.6)",
  border: "rgba(255, 255, 255, 0.08)",
  textMuted: "#94a3b8"
};

export default function AluplakUltimatePortal() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- ENGINE DE DATOS ---
  const financialData = useMemo(() => [
    { year: '2022', ventas: 47416.82, ebitda: 13276, margin: '28%', status: 'Seed' },
    { year: '2023', ventas: 71677.26, ebitda: 20069, margin: '28%', status: 'Growth' },
    { year: '2024', ventas: 88210.56, ebitda: 24698, margin: '28%', status: 'Scaling' },
    { year: '2025', ventas: 132531.34, ebitda: 37108, margin: '28%', status: 'Expansion' },
    { year: '2026', ventas: 220000.00, ebitda: 61600, margin: '28%', status: 'Invisotherm' }
  ], []);

  const techRadar = [
    { subject: 'Eficiencia', A: 120, B: 40 },
    { subject: 'Instalación', A: 150, B: 30 },
    { subject: 'Estética', A: 140, B: 60 },
    { subject: 'Mantenimiento', A: 150, B: 20 },
    { subject: 'Versatilidad', A: 110, B: 50 },
  ];

  // --- COMPONENTES UI ---
  const MeshGradient = () => (
    <div className="absolute inset-0 overflow-hidden -z-10 opacity-30">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-400/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[150px]" />
    </div>
  );

  const SectionTitle = ({ pre, title, highlight }) => (
    <div className="mb-24 space-y-4">
      <motion.p 
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
        className="text-yellow-400 font-black tracking-[0.5em] uppercase text-xs"
      >
        {pre}
      </motion.p>
      <h2 className="text-7xl lg:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.8] mb-8">
        {title} <br /> <span className="text-yellow-400">{highlight}</span>
      </h2>
    </div>
  );

  return (
    <div className="bg-[#020617] text-white selection:bg-yellow-400 selection:text-black min-h-screen font-sans">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-xl border-b border-white/5 py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Activity className="text-yellow-400" size={32} />
          <span className="text-2xl font-black italic tracking-tighter uppercase">ALUPLAK<span className="text-yellow-400">.</span></span>
        </div>
        <div className="hidden lg:flex gap-12 items-center">
          {['inicio', 'tecnologia', 'mercado', 'finanzas'].map(item => (
            <button key={item} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-yellow-400 transition-colors" onClick={() => document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' })}>
              {item}
            </button>
          ))}
          <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest shadow-lg shadow-yellow-400/20">
            Dossier 2026
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-48 pb-32 px-8 overflow-hidden min-h-screen flex flex-col justify-center">
        <MeshGradient />
        <div className="max-w-[1400px] mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-[12vw] lg:text-[14rem] font-black italic leading-[0.75] uppercase tracking-tighter mb-16">
              SMART <br /> <span className="text-yellow-400">SURFACES.</span>
            </h1>
            <div className="grid lg:grid-cols-2 gap-20 items-end">
              <div className="space-y-8">
                <p className="text-3xl lg:text-5xl font-light italic text-slate-300 leading-tight">
                  La evolución definitiva de la arquitectura interior: <span className="text-white font-bold border-b-4 border-yellow-400">estructuras activas</span> que respiran, calientan y se adaptan.
                </p>
                <div className="flex gap-4 pt-8">
                  <div className="bg-slate-900 border border-white/10 p-6 rounded-3xl">
                    <p className="text-sm font-black uppercase text-slate-500 mb-2">Presencia</p>
                    <p className="text-4xl font-black italic">30+ Países</p>
                  </div>
                  <div className="bg-yellow-400 text-black p-6 rounded-3xl">
                    <p className="text-sm font-black uppercase opacity-60 mb-2">Patentes</p>
                    <p className="text-4xl font-black italic">100% Core</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-2xl p-12 rounded-[4rem] border border-white/10 space-y-6">
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  Fundada en Valencia en 2021, Aluplak ha roto el paradigma de la construcción en seco (Pladur) mediante un sistema bi-componente patentado. No fabricamos perfiles; diseñamos la infraestructura oculta del futuro hogar digital.
                </p>
                <div className="flex items-center gap-4 text-yellow-400 font-black uppercase text-xs tracking-widest cursor-pointer group">
                  Explorar tecnología <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECNOLOGÍA - TEXTO EXPANDIDO */}
      <section id="tecnologia" className="py-40 bg-slate-900/10 border-y border-white/5 relative">
        <div className="max-w-[1400px] mx-auto px-8">
          <SectionTitle pre="Innovación Disruptiva" title="Inviso" highlight="therm" />
          
          <div className="grid lg:grid-cols-12 gap-24">
            <div className="lg:col-span-7 space-y-16">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-5xl font-black italic uppercase tracking-tighter mb-8">El fin de los radiadores visibles.</h3>
                <p className="text-xl text-slate-400 leading-relaxed font-light mb-8">
                  Invisotherm representa el cénit de nuestra ingeniería. Se trata del primer panel constructivo calefactable de una sola pieza, fabricado en <strong>Pladur o Fibrocemento de 13 mm</strong>. Su núcleo integra nanotecnología térmica que permite climatizar hasta 14m² por panel mediante radiación pura.
                </p>
                <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                  A diferencia de los sistemas de convección tradicionales que mueven polvo y alérgenos, Invisotherm calienta los objetos y las personas directamente. Esto no solo mejora la calidad del aire, sino que reduce el consumo energético en un <strong>45%</strong> al eliminar las pérdidas térmicas perimetrales.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Zap, t: "Barrera Térmica", d: "El rodapié calefactable crea una cortina de aire caliente que bloquea el frío de los muros exteriores." },
                  { icon: ShieldCheck, t: "Mantenimiento Cero", d: "Sistema registrable: accede a instalaciones eléctricas sin picar paredes gracias al clipaje bi-componente." },
                  { icon: Droplets, t: "Anti-Condensación", d: "Mantiene la temperatura superficial por encima del punto de rocío, eliminando mohos perimetrales." },
                  { icon: Leaf, t: "Eco-Arquitectura", d: "Compatible con aerotermia y energía solar, optimizando el ROI energético del edificio." }
                ].map((item, i) => (
                  <div key={i} className="p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 hover:border-yellow-400/20 transition-all">
                    <item.icon className="text-yellow-400 mb-6" size={32} />
                    <h4 className="text-xl font-black uppercase italic mb-4">{item.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-8">
              <div className="sticky top-32">
                <div className="bg-slate-900 border border-white/10 p-12 rounded-[4rem] mb-8">
                  <h4 className="text-2xl font-black uppercase italic mb-10 text-center">Benchmark Tecnológico</h4>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={techRadar}>
                        <PolarGrid stroke="#1e293b" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10, fontWeight: 'bold' }} />
                        <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.5} />
                        <Radar name="Tradicional" dataKey="B" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                        <Legend />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="p-8 bg-yellow-400 rounded-[3rem] text-black">
                  <p className="text-xs font-black uppercase tracking-widest mb-4">Dato Clave</p>
                  <p className="text-4xl font-black italic leading-none">82% Menos tiempo de obra.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANZAS - MÉTRICAS GIGANTES */}
      <section id="finanzas" className="py-60 bg-black relative overflow-hidden">
        <MeshGradient />
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <SectionTitle pre="Business Model" title="Scale" highlight="Metrics" />
          
          {/* MÉTRICAS XXL */}
          <div className="grid lg:grid-cols-3 gap-8 mb-32">
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[5rem] p-16 lg:p-24 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500">
              <div>
                <p className="text-yellow-400 font-black uppercase tracking-[0.4em] text-sm mb-12">Target Valuation 2026</p>
                <h3 className="text-[12rem] lg:text-[18rem] font-black italic leading-[0.7] tracking-tighter mb-8">
                  3.5<span className="text-yellow-400">X</span>
                </h3>
                <p className="text-4xl font-light text-slate-400 max-w-xl italic">
                  Múltiplo de salida proyectado basado en la recurrencia de la división Invisotherm.
                </p>
              </div>
              <div className="pt-20 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-8">
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">Burn Rate</p>
                    <p className="text-2xl font-black">0.15x</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">CAGR</p>
                    <p className="text-2xl font-black text-yellow-400">+52%</p>
                  </div>
                </div>
                <TrendingUp size={60} className="text-yellow-400 opacity-20" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-yellow-400 p-16 rounded-[5rem] text-black h-1/2 flex flex-col justify-between group overflow-hidden relative">
                <Rocket size={150} className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-110 transition-transform duration-700" />
                <p className="text-xs font-black uppercase tracking-widest opacity-60">EBITDA Margin</p>
                <h4 className="text-[9rem] font-black italic leading-none tracking-tighter">28%</h4>
                <p className="text-xl font-bold uppercase tracking-tight">Rentabilidad <br /> Neta Operativa</p>
              </div>
              <div className="bg-slate-900 border border-white/10 p-16 rounded-[5rem] h-1/2 flex flex-col justify-between">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">TAM Market</p>
                <h4 className="text-[8rem] font-black italic leading-none tracking-tighter text-white">€1.2B</h4>
                <p className="text-xl font-bold uppercase tracking-tight text-slate-400">Nicho de <br /> Lujo Técnico</p>
              </div>
            </div>
          </div>

          {/* GRÁFICO EXPANDIDO CON TEXTO */}
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8 bg-slate-900/40 border border-white/5 p-12 lg:p-20 rounded-[4rem]">
              <div className="flex justify-between items-end mb-16">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter">Revenue Projection</h4>
                <p className="text-yellow-400 font-bold text-xs uppercase tracking-widest">Audited by Aluplak Finance</p>
              </div>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialData}>
                    <defs>
                      <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} dy={10} fontWeight="bold" />
                    <YAxis hide />
                    <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '16px'}} />
                    <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={5} fill="url(#colorVentas)" />
                    <Bar dataKey="ebitda" barSize={50} fill="#1e293b" radius={[10, 10, 0, 0]} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-12">
              <h4 className="text-4xl font-black italic uppercase tracking-tighter leading-tight">Análisis del <br /> Histórico.</h4>
              <p className="text-slate-400 font-light leading-relaxed">
                Nuestra trayectoria financiera refleja una estabilidad inusual en el sector PropTech. Desde los 47k€ iniciales en 2022 hasta la proyección de 220k€ en 2026, Aluplak ha mantenido un <strong>margen de EBITDA constante del 28%</strong>.
              </p>
              <div className="space-y-6">
                {financialData.slice(-3).map((d, i) => (
                  <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                    <span className="text-slate-500 font-black uppercase text-[10px] tracking-widest">{d.year} - {d.status}</span>
                    <span className="text-2xl font-black italic">€{d.ventas.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-8 bg-white text-black font-black uppercase italic tracking-[0.2em] rounded-3xl hover:bg-yellow-400 transition-colors">
                Request Full P&L
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="py-60 px-8 text-center bg-gradient-to-t from-yellow-400/20 to-transparent">
        <div className="max-w-[1200px] mx-auto">
          <motion.div whileInView={{ y: [100, 0], opacity: [0, 1] }} className="space-y-16">
            <h2 className="text-[10vw] lg:text-[14rem] font-black italic uppercase leading-[0.8] tracking-tighter">
              READY FOR <br /> <span className="text-yellow-400">THE EXIT?</span>
            </h2>
            <p className="text-3xl lg:text-4xl font-light text-slate-400 italic max-w-4xl mx-auto">
              Estamos seleccionando un grupo exclusivo de socios estratégicos para escalar la división Invisotherm a nivel global. El futuro de la construcción es invisible.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-20">
              <button className="px-16 py-8 bg-yellow-400 text-black font-black uppercase italic tracking-widest text-lg rounded-full shadow-2xl shadow-yellow-400/20 hover:scale-110 transition-transform">
                Contact Board
              </button>
              <button className="px-16 py-8 border-4 border-white text-white font-black uppercase italic tracking-widest text-lg rounded-full hover:bg-white hover:text-black transition-all">
                Download Deck
              </button>
            </div>
          </motion.div>
          
          <div className="mt-60 pt-20 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-10 opacity-30">
            <div className="flex items-center gap-4">
              <Activity size={24} />
              <span className="text-xs font-black uppercase tracking-[0.4em]">ALUPLAK SYSTEM S.L 2026</span>
            </div>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-widest">
              <span>Legal</span>
              <span>Privacy</span>
              <span>Audit</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
