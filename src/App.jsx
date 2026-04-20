import React, { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, LabelList, AreaChart, Area, PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar, LineChart, Line
} from "recharts";
import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, BarChart3, PieChart as PieIcon, Wrench, 
  Zap, Flame, ShieldCheck, Globe, Layout, Target, Award, 
  Users, Lightbulb, ChevronRight, Activity, Eye, CheckCircle2,
  ArrowRight, Thermometer, Box, ZapOff
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Función de navegación con Scroll Suave
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensar el menú fijo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  // --- DATOS MAESTROS DEL DOSSIER ---
  const salesData = [
    { year: '2022', monto: 47416, grow: '0%', desc: 'Lanzamiento' },
    { year: '2023', monto: 71677, grow: '+51%', desc: 'Consolidación' },
    { year: '2024', monto: 88210, grow: '+23%', desc: 'Expansión Ind.' },
    { year: '2025', monto: 132531, grow: '+50%', desc: 'Récord Histórico' },
    { year: '2026', monto: 220000, grow: '+66%', desc: 'Proyección Invisotherm' }
  ];

  const marketSplit = [
    { name: 'Nacional', value: 45 },
    { name: 'Exportación (+30 países)', value: 55 },
  ];

  const techRadar = [
    { subject: 'Conductividad', A: 150 },
    { subject: 'Montaje', A: 140 },
    { subject: 'Diseño', A: 130 },
    { subject: 'Coste', A: 120 },
    { subject: 'Durabilidad', A: 150 },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- NAVEGACIÓN TOTALMENTE FUNCIONAL --- */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Activity size={22} className="text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-black italic text-xl tracking-tighter leading-none uppercase">ALUPLAK</span>
            <span className="text-[8px] font-bold tracking-[0.3em] text-yellow-400">SYSTEMS S.L.</span>
          </div>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em]">
          <button 
            onClick={() => scrollTo('hero')} 
            className={`${activeSection === 'hero' ? 'text-yellow-400' : 'text-slate-500'} hover:text-white transition-colors`}
          >Investor Portal</button>
          <button 
            onClick={() => scrollTo('tecnologia')} 
            className={`${activeSection === 'tecnologia' ? 'text-yellow-400' : 'text-slate-500'} hover:text-white transition-colors`}
          >Tecnología</button>
          <button 
            onClick={() => scrollTo('mercado')} 
            className={`${activeSection === 'mercado' ? 'text-yellow-400' : 'text-slate-500'} hover:text-white transition-colors`}
          >Mercado</button>
          <button 
            onClick={() => scrollTo('finanzas')} 
            className={`${activeSection === 'finanzas' ? 'text-yellow-400' : 'text-slate-500'} hover:text-white transition-colors`}
          >Finanzas</button>
        </div>
        
        <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-yellow-400/10">
          Invertir 2026
        </button>
      </nav>

      {/* --- SECCIÓN HERO (ID: hero) --- */}
      <section id="hero" className="relative pt-64 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-yellow-400 font-black tracking-[0.5em] uppercase text-xs mb-6 block">The Tech Skirting Company</span>
            <h1 className="text-[10vw] lg:text-[12rem] font-black mb-12 tracking-tighter italic leading-[0.75] uppercase">
              ACTIVE <br /><span className="text-yellow-400">HOMES.</span>
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-20 mt-24">
              <div className="space-y-8">
                <p className="text-3xl lg:text-5xl font-light italic text-slate-200 border-l-4 border-yellow-400 pl-8 leading-tight">
                  "No fabricamos perfiles, creamos <span className="text-white font-bold underline decoration-yellow-400">superficies inteligentes</span> que climatizan tu vida."
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                    <p className="text-4xl font-black italic">2021</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">Fundación Valencia</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
                    <p className="text-4xl font-black italic text-yellow-400">+30</p>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500">Países Exportados</p>
                  </div>
                </div>
              </div>
              <div className="text-slate-400 text-xl font-light leading-relaxed space-y-6">
                <p>Nuestra misión es transformar el concepto tradicional del rodapié fijo en un sistema <strong>inteligente, funcional y sostenible</strong>.</p>
                <p>A través de un sistema bi-componente patentado, hemos logrado el registro total de instalaciones sin obras, sentando las bases para la <strong>climatización invisible</strong>.</p>
                <button onClick={() => scrollTo('tecnologia')} className="flex items-center gap-4 text-yellow-400 font-black uppercase text-sm group">
                  Explorar Tecnología <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECCIÓN TECNOLOGÍA (ID: tecnologia) --- */}
      <section id="tecnologia" className="py-40 bg-slate-900/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="text-7xl font-black italic tracking-tighter uppercase leading-none">INVISO<br /><span className="text-yellow-400">THERM.</span></h2>
                <p className="text-2xl font-bold italic text-slate-300">La joya de la corona tecnológica.</p>
              </div>
              
              <div className="prose prose-invert text-slate-400 text-lg font-light leading-relaxed space-y-6">
                <p>Este es el <strong>primer panel constructivo calefactable de una sola pieza</strong>. No es un accesorio, es parte estructural de la casa.</p>
                <ul className="space-y-4">
                  <li className="flex gap-4 items-start bg-black/40 p-6 rounded-3xl border border-white/5">
                    <Thermometer className="text-yellow-400 shrink-0" />
                    <span><strong>Nanotecnología Térmica:</strong> Climatiza hasta 14m² mediante radiación homogénea desde la propia placa de 13mm.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-black/40 p-6 rounded-3xl border border-white/5">
                    <ZapOff className="text-yellow-400 shrink-0" />
                    <span><strong>Adiós Radiadores:</strong> Estética minimalista pura. El sistema es invisible, silencioso y no levanta polvo.</span>
                  </li>
                  <li className="flex gap-4 items-start bg-black/40 p-6 rounded-3xl border border-white/5">
                    <Box className="text-yellow-400 shrink-0" />
                    <span><strong>Bi-componente:</strong> El único sistema que permite desmontar el rodapié para registrar cables o LEDs sin picar la pared.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
              <div className="absolute inset-0 bg-yellow-400/20 blur-[120px] rounded-full" />
              <img src="/Aluplak5.jpeg" className="rounded-[3rem] border-2 border-yellow-400/30 shadow-2xl relative z-10 hover:scale-105 transition-transform" />
              <img src="/Aluplak6.jpeg" className="rounded-[3rem] border-2 border-white/10 shadow-2xl relative z-10 mt-20 hover:scale-105 transition-transform" />
              <img src="/Aluplak7.jpeg" className="rounded-[3rem] border-2 border-white/10 shadow-2xl relative z-10 -mt-20 hover:scale-105 transition-transform" />
              <img src="/Aluplak8.jpeg" className="rounded-[3rem] border-2 border-yellow-400/30 shadow-2xl relative z-10 hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN MERCADO (ID: mercado) --- */}
      <section id="mercado" className="py-40 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3 space-y-8">
            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">MERCADO & <br/><span className="text-yellow-400">ALCANCE.</span></h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">
              Validado en España y exportado a mercados premium. ALUPLAK lidera el nicho de <strong>alta decoración tecnológica</strong> con márgenes industriales protegidos.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold text-slate-500">Mano de obra</span>
                <span className="text-yellow-400 font-black">-82% tiempo</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold text-slate-500">Margen bruto</span>
                <span className="text-white font-black">78%</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <span className="text-xs uppercase font-bold text-slate-500">Eficiencia Energética</span>
                <span className="text-blue-400 font-black">+45%</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/5">
              <h4 className="text-white font-black italic uppercase text-xs mb-8 tracking-widest">Distribución de Ventas</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={marketSplit} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      <Cell fill="#facc15" />
                      <Cell fill="#1e293b" />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-10 mt-6">
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-400 rounded-full"/> <span className="text-[10px] uppercase font-bold">Exportación</span></div>
                <div className="flex items-center gap-2"><div className="w-3 h-3 bg-slate-700 rounded-full"/> <span className="text-[10px] uppercase font-bold">Nacional</span></div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/5">
              <h4 className="text-white font-black italic uppercase text-xs mb-8 tracking-widest">Superioridad de Producto</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={techRadar}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                    <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN FINANZAS (ID: finanzas) --- */}
      <section id="finanzas" className="py-40 bg-[#03081a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none">BUSINESS <br/><span className="text-yellow-400">SCALING.</span></h2>
              <p className="text-slate-400 max-w-xl text-lg font-light">
                Proyectamos un crecimiento disruptivo para 2026 impulsado por la nueva <strong>Tarifa Industriales</strong> y la división de climatización.
              </p>
            </div>
            <div className="bg-yellow-400 text-black p-10 rounded-[2.5rem] flex items-center gap-10">
              <div><p className="text-[10px] font-black uppercase">EBITDA</p><p className="text-5xl font-black italic">28%</p></div>
              <div className="w-px h-12 bg-black/20" />
              <div><p className="text-[10px] font-black uppercase">ROI 3Y</p><p className="text-5xl font-black italic">3.5x</p></div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-12 lg:p-20 rounded-[4rem] border border-white/10">
            <div className="h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" fontSize={12} axisLine={false} tickLine={false} dy={10} />
                  <YAxis stroke="#475569" fontSize={12} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }} 
                    itemStyle={{ color: '#facc15' }}
                  />
                  <Area type="monotone" dataKey="monto" stroke="#facc15" strokeWidth={5} fillOpacity={1} fill="url(#colorSales)" />
                  <Bar dataKey="monto" fill="transparent">
                    <LabelList dataKey="grow" position="top" fill="#facc15" fontSize={12} fontWeight="black" dy={-10} />
                  </Bar>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-20 pt-10 border-t border-white/5">
              {salesData.map((d, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{d.year}</p>
                  <p className="text-2xl font-black italic">{d.monto.toLocaleString()}€</p>
                  <p className="text-[9px] text-yellow-400 font-bold uppercase">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-40 text-center max-w-7xl mx-auto px-6">
        <div className="bg-yellow-400 p-24 rounded-[5rem] text-black space-y-10 shadow-[0_50px_100px_-20px_rgba(250,204,21,0.3)]">
          <h2 className="text-7xl lg:text-[10rem] font-black italic tracking-tighter uppercase leading-[0.75]">JOIN THE <br/>FUTURE.</h2>
          <p className="text-xl font-bold uppercase tracking-widest opacity-60">Aluplak Skirting Board S.L. • Investor Relations</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-all">Solicitar Auditoría</button>
            <button className="bg-transparent border-2 border-black px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-black hover:text-white transition-all">Roadmap 2027</button>
          </div>
        </div>
        <p className="mt-24 text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">© 2026 ALUPLAK • TODOS LOS DERECHOS RESERVADOS</p>
      </footer>
    </div>
  );
}
