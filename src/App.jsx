import React, { useState, useEffect } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, LabelList, AreaChart, Area, PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar
} from "recharts";
import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, BarChart3, Wrench, 
  Zap, Flame, ShieldCheck, Globe, Layout, Target, Award, 
  Users, Lightbulb, ChevronRight, Activity, CheckCircle2,
  ArrowRight, Thermometer, Box, ZapOff, HardHat
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Función de navegación corregida
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  const salesHistory = [
    { year: '2022', monto: 47416, grow: 'Fase 1' },
    { year: '2023', monto: 71677, grow: '+51%' },
    { year: '2024', monto: 88210, grow: '+23%' },
    { year: '2025', monto: 132531, grow: '+50%' },
    { year: '2026', monto: 220000, grow: 'PROY.' }
  ];

  const marketData = [
    { name: 'Exportación', value: 55 },
    { name: 'Nacional', value: 45 },
  ];

  const techData = [
    { subject: 'Conductividad', A: 150 },
    { subject: 'Montaje', A: 140 },
    { subject: 'Estética', A: 130 },
    { subject: 'Mantenimiento', A: 150 },
    { subject: 'Eficiencia', A: 120 },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* NAVEGACIÓN REALMENTE FUNCIONAL */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020617]/95 backdrop-blur-md border-b border-white/10 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Activity size={20} className="text-black" />
          </div>
          <span className="font-black italic text-2xl tracking-tighter uppercase">ALUPLAK<span className="text-yellow-400">.</span></span>
        </div>
        
        <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <button onClick={() => scrollTo('inicio')} className={`hover:text-white transition-colors ${activeSection === 'inicio' ? 'text-yellow-400' : ''}`}>Investor Portal</button>
          <button onClick={() => scrollTo('tecnologia')} className={`hover:text-white transition-colors ${activeSection === 'tecnologia' ? 'text-yellow-400' : ''}`}>Tecnología</button>
          <button onClick={() => scrollTo('mercado')} className={`hover:text-white transition-colors ${activeSection === 'mercado' ? 'text-yellow-400' : ''}`}>Mercado</button>
          <button onClick={() => scrollTo('finanzas')} className={`hover:text-white transition-colors ${activeSection === 'finanzas' ? 'text-yellow-400' : ''}`}>Finanzas</button>
        </div>
        
        <button onClick={() => scrollTo('finanzas')} className="bg-yellow-400 text-black px-8 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">
          Invertir
        </button>
      </nav>

      {/* SECCIÓN INICIO (ID: inicio) */}
      <section id="inicio" className="relative pt-60 pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.1)_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-[10vw] lg:text-[12rem] font-black mb-12 tracking-tighter italic leading-[0.75] uppercase">
              REDEFINING <br /><span className="text-yellow-400">SURFACES.</span>
            </h1>
            
            <div className="grid lg:grid-cols-2 gap-20 mt-32">
              <div className="space-y-12">
                <p className="text-3xl lg:text-5xl font-light italic text-slate-200 border-l-4 border-yellow-400 pl-8 leading-tight">
                  "No somos fabricantes de rodapiés; somos la <span className="text-white font-bold underline decoration-yellow-400">compañía tecnológica</span> que integra alta decoración con nanotecnología térmica."
                </p>
                <div className="flex gap-8">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex-1">
                    <p className="text-5xl font-black italic text-yellow-400">2021</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-2">Fundación Valencia</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] flex-1">
                    <p className="text-5xl font-black italic text-white">+30</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mt-2">Países de Exportación</p>
                  </div>
                </div>
              </div>
              <div className="text-slate-400 text-xl font-light leading-relaxed space-y-8">
                <p>Nuestra misión en <strong>ALUPLAK</strong> es transformar elementos arquitectónicos pasivos en sistemas activos de calefacción invisible.</p>
                <p>Hemos roto el paradigma del sector con un sistema bi-componente patentado. Esta tecnología permite que el rodapié sea <strong>completamente desmontable</strong>, facilitando el registro de instalaciones (cables, LED o tuberías) sin necesidad de realizar obras.</p>
                <button onClick={() => scrollTo('tecnologia')} className="flex items-center gap-4 text-yellow-400 font-black uppercase text-sm group">
                  Ver Proyectos Invisitherm <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN TECNOLOGÍA (ID: tecnologia) */}
      <section id="tecnologia" className="py-40 bg-slate-900/40 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-start mb-32">
            <div className="lg:w-1/2 space-y-8">
              <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">Flagship Product</span>
              <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter uppercase leading-none">INVISI<br />THERM.</h2>
              <p className="text-2xl font-bold text-slate-300 italic border-l-2 border-yellow-400 pl-6">El primer panel constructivo calefactable de una sola pieza.</p>
              <div className="space-y-6 text-slate-400 text-lg font-light">
                <p>Fabricado en Pladur o Fibrocemento de 13 mm con <strong>nanotecnología térmica integrada</strong>, este sistema está diseñado para climatizar hasta 14m² mediante radiación homogénea.</p>
                <p>Al aprovechar la propia estructura de la pared como emisor térmico, eliminamos la necesidad de radiadores tradicionales, liberando espacio arquitectónico y reduciendo el consumo energético en un 45%.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                  <Flame className="text-yellow-400 mb-4" />
                  <h4 className="text-white font-bold uppercase text-xs">Calor Saludable</h4>
                  <p className="text-[11px] mt-2 leading-relaxed">Sin corrientes de aire ni polvo en suspensión. Ideal para entornos sanitarios.</p>
                </div>
                <div className="p-6 bg-black/40 rounded-3xl border border-white/5">
                  <ShieldCheck className="text-yellow-400 mb-4" />
                  <h4 className="text-white font-bold uppercase text-xs">Seguridad Total</h4>
                  <p className="text-[11px] mt-2 leading-relaxed">Protección contra humedades por condensación en el perímetro.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6">
              <img src="/Aluplak5.jpeg" className="rounded-[3rem] border border-white/10 h-[400px] w-full object-cover shadow-2xl" />
              <img src="/Aluplak6.jpeg" className="rounded-[3rem] border border-white/10 h-[400px] w-full object-cover mt-20 shadow-2xl" />
              <img src="/Aluplak7.jpeg" className="rounded-[3rem] border border-white/10 h-[400px] w-full object-cover -mt-20 shadow-2xl" />
              <img src="/Aluplak8.jpeg" className="rounded-[3rem] border border-white/10 h-[400px] w-full object-cover shadow-2xl" />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 pt-32 border-t border-white/5">
             <div className="space-y-6">
               <h3 className="text-4xl font-black italic tracking-tighter uppercase">Rodapié <br/><span className="text-yellow-400">Calefactable</span></h3>
               <p className="text-slate-400 font-light">Aprovecha la conductividad del aluminio para crear una barrera térmica perimetral de alta eficiencia.</p>
               <img src="/Aluplak1.jpeg" className="rounded-[2.5rem] border border-white/10 h-64 w-full object-cover" />
             </div>
             <div className="space-y-6">
               <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white">Registro <br/>Sin Obras</h3>
               <p className="text-slate-400 font-light">Mantenimiento perpetuo facilitado por el clipado mecánico bi-componente patentado.</p>
               <img src="/Aluplak2.jpeg" className="rounded-[2.5rem] border border-white/10 h-64 w-full object-cover" />
             </div>
             <div className="space-y-6">
               <h3 className="text-4xl font-black italic tracking-tighter uppercase text-white">Alta <br/>Decoración</h3>
               <p className="text-slate-400 font-light">Integración perfecta con iluminación LED indirecta para proyectos de lujo y contract.</p>
               <img src="/Aluplak3.jpeg" className="rounded-[2.5rem] border border-white/10 h-64 w-full object-cover" />
             </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN MERCADO (ID: mercado) */}
      <section id="mercado" className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none">Global <br/><span className="text-yellow-400">Reach.</span></h2>
            <div className="prose prose-invert text-slate-400 text-xl font-light">
              <p>Actualmente lideramos el nicho de mercado con soluciones que eliminan la necesidad de radiadores tradicionales.</p>
              <div className="grid grid-cols-1 gap-6 mt-12">
                <div className="flex gap-6 p-8 bg-slate-900 border border-white/5 rounded-[2rem]">
                  <HardHat className="text-yellow-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-widest">Optimización de Obra</h4>
                    <p className="text-sm">Reducción del 82% en tiempos de instalación frente a sistemas tradicionales de yeso laminado.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-8 bg-slate-900 border border-white/5 rounded-[2rem]">
                  <Target className="text-yellow-400 shrink-0" size={32} />
                  <div>
                    <h4 className="text-white font-bold uppercase text-sm mb-1 tracking-widest">Modelo Escalable</h4>
                    <p className="text-sm">Estructura industrial centralizada con red logística para suministrar proyectos en más de 30 países.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/10">
               <h4 className="text-white font-black italic uppercase text-[10px] tracking-widest text-center mb-8">Propuesta de Valor</h4>
               <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={techData}>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                    <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.5} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-yellow-400 p-10 rounded-[3rem] text-black flex flex-col justify-between">
              <h4 className="font-black italic uppercase text-[10px] tracking-widest text-center opacity-60">Revenue Export</h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={marketData} innerRadius={50} outerRadius={70} dataKey="value" paddingAngle={5}>
                      <Cell fill="#000" />
                      <Cell fill="#ca8a04" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black italic tracking-tighter">55%</p>
                <p className="text-[10px] font-black uppercase opacity-60">Mercado Internacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINANZAS (ID: finanzas) */}
      <section id="finanzas" className="py-40 bg-[#03081a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter uppercase leading-none">Finanzas & <br/><span className="text-yellow-400">Escala.</span></h2>
              <p className="text-slate-500 font-light italic text-lg max-w-xl">El año 2025 marca un hito con una facturación de 132.531€, un crecimiento del 50% impulsado por la estandarización de productos.</p>
            </div>
            <div className="bg-slate-900 border border-white/10 p-10 rounded-[3rem] flex gap-16 items-center">
              <div className="text-center">
                <p className="text-5xl font-black italic text-yellow-400">28%</p>
                <p className="text-[10px] uppercase font-black text-slate-500 mt-2 tracking-widest">EBITDA</p>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="text-center">
                <p className="text-5xl font-black italic text-white">3.5x</p>
                <p className="text-[10px] uppercase font-black text-slate-500 mt-2 tracking-widest">ROI ROI 3Y</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-12 lg:p-20 rounded-[4rem] border border-white/10">
            <div className="h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesHistory} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMonto" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} dy={10} />
                  <YAxis hide />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px' }} />
                  <Area type="monotone" dataKey="monto" stroke="#facc15" strokeWidth={4} fillOpacity={1} fill="url(#colorMonto)" />
                  <Bar dataKey="monto" fill="transparent">
                    <LabelList dataKey="grow" position="top" fill="#facc15" fontSize={12} fontWeight="black" dy={-10} />
                  </Bar>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 mt-20 pt-16 border-t border-white/5">
              {salesHistory.map((d, i) => (
                <div key={i} className="space-y-1">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{d.year}</p>
                  <p className="text-2xl font-black italic">{d.monto.toLocaleString()}€</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 text-center px-6 max-w-7xl mx-auto">
        <div className="bg-yellow-400 p-24 rounded-[5rem] text-black space-y-10 shadow-[0_50px_100px_rgba(250,204,21,0.2)]">
          <h2 className="text-7xl lg:text-[10rem] font-black italic tracking-tighter leading-[0.75] uppercase">Oportunidad <br/> Inversión.</h2>
          <p className="text-xl font-bold uppercase tracking-widest opacity-60">ALUPLAK SKIRTING BOARD S.L • Valencia, España</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-all">Contactar RRII</button>
            <button className="bg-transparent border-2 border-black px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-black hover:text-white transition-all">Roadmap 2027</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
