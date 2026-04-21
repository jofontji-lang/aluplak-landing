import React, { useState, useEffect, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ComposedChart, 
  Bar, Area, Legend, Line, ScatterChart, Scatter, ZAxis, Cell, PieChart, Pie
} from "recharts";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Activity, ArrowRight, TrendingUp, Zap, ShieldCheck, 
  Droplets, Leaf, Menu, X, Globe, Target, Cpu, EyeOff,
  BarChart3, Layers, Box, PenTool, Wind, Gauge, Award
} from 'lucide-react';

/**
 * ALUPLAK ULTIMATE INVESTMENT PORTAL - V3.0
 * Enfoque: Alta Densidad de Datos y Narrativa Industrial
 */

export default function AluplakCorporatePortal() {
  const [activeTab, setActiveTab] = useState("ventas");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS EXTENSO ---
  
  const salesHistory = [
    { year: '2022', ventas: 47416, ebitda: 13276, margen: 28, growth: 0 },
    { year: '2023', ventas: 71677, ebitda: 20069, margen: 28, growth: 51 },
    { year: '2024', ventas: 88210, ebitda: 24698, margen: 28, growth: 23 },
    { year: '2025', ventas: 132531, ebitda: 37108, margen: 28, growth: 50 },
    { year: '2026', ventas: 220000, ebitda: 61600, margen: 28, growth: 66 }
  ]; [cite: 47, 51, 52, 55]

  const productMargins = [
    { name: 'Zócalo Técnico', margin: 78, color: '#facc15' },
    { name: 'Invisotherm', margin: 68, color: '#eab308' },
    { name: 'Zócalo Calefactable', margin: 85, color: '#ca8a04' }
  ]; [cite: 29, 32, 36]

  const technicalSpecs = [
    { subject: 'Conductividad', A: 140, B: 90, fullMark: 150 },
    { subject: 'Instalación Seca', A: 150, B: 60, fullMark: 150 },
    { subject: 'Nanotecnología', A: 130, B: 40, fullMark: 150 },
    { subject: 'Mantenimiento', A: 150, B: 70, fullMark: 150 },
    { subject: 'Estética', A: 145, B: 80, fullMark: 150 }
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      {/* PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* HEADER ESTRATÉGICO */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-5 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-lg">
            <Activity className="text-black" size={24} />
          </div>
          <span className="text-xl font-black uppercase italic tracking-tighter">ALUPLAK <span className="text-yellow-400">SKIRTING</span></span>
        </div>
        <div className="hidden xl:flex gap-12 items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#vision" className="hover:text-yellow-400 transition-colors">Visión General</a>
          <a href="#proyectos" className="hover:text-yellow-400 transition-colors">I+D+i Proyectos</a>
          <a href="#analisis" className="hover:text-yellow-400 transition-colors">Análisis Financiero</a>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:scale-105 transition-all">Investor Login</button>
        </div>
      </nav>

      {/* SECTION 1: HERO & CORE MISSION */}
      <section id="vision" className="pt-40 pb-20 px-10 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-10">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">Innovation in Aluminum Systems</span>
              <h1 className="text-[8vw] lg:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter mt-6">
                ACTIVE <br /> <span className="text-yellow-400">SURFACES.</span>
              </h1>
            </motion.div>
            <p className="text-3xl text-slate-300 font-light leading-snug max-w-xl italic">
              Aluplak es una compañía tecnológica especializada en el diseño y fabricación de soluciones innovadoras para zócalos y perfiles técnicos de aluminio[cite: 8].
            </p>
          </div>
          <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 space-y-8 backdrop-blur-md">
            <h3 className="text-2xl font-black italic uppercase text-yellow-400">Nuestra Propuesta de Valor</h3>
            <p className="text-lg text-slate-400 leading-relaxed font-light">
              Nos diferenciamos por haber roto el paradigma del sector con un sistema bi-componente patentado. Nuestra tecnología permite que el rodapié sea completamente desmontable, facilitando el registro de instalaciones (cables, LED o tuberías) sin necesidad de realizar obras ni dañar las paredes de placa de yeso laminado[cite: 11, 12].
            </p>
            <div className="flex gap-10">
              <div>
                <p className="text-4xl font-black italic">+30</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Países Presentes [cite: 9]</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-4xl font-black italic">Valencia</p>
                <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Headquarters [cite: 9]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: TECNOLOGÍA DISRUPTIVA & MÁRGENES */}
      <section id="proyectos" className="py-40 bg-slate-950 px-10">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-32">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-8">División de <span className="text-yellow-400">Ingeniería</span></h2>
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-yellow-400">
                  <Wind size={32} />
                  <h4 className="text-2xl font-black uppercase italic">Invisotherm</h4>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Se trata del primer panel constructivo calefactable de una sola pieza, fabricado en Pladur o Fibrocemento de 13 mm con nanotecnología térmica integrada, diseñado para climatizar hasta 14m2 mediante radiación homogénea desde la propia estructura de la pared.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-yellow-400">
                  <Layers size={32} />
                  <h4 className="text-2xl font-black uppercase italic">Rodapié Calefactable</h4>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Aprovecha la conductividad del aluminio para crear una barrera térmica perimetral, eliminando puntos fríos y humedades por condensación sin necesidad de radiadores visibles[cite: 16, 17].
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-yellow-400">
                  <Box size={32} />
                  <h4 className="text-2xl font-black uppercase italic">Zócalo Técnico</h4>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  Base + Tapa con clipado magnético. Estandarización en barras de 2.4 ML que permite un control de stock que minimiza el capital inmovilizado[cite: 28, 30].
                </p>
              </div>
            </div>
          </div>

          {/* GRÁFICO DE COMPARATIVA TÉCNICA */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="h-[600px] bg-black/40 p-10 rounded-[4rem] border border-white/5">
              <h3 className="text-center text-xl font-black uppercase italic mb-10 tracking-widest">Benchmarking: Aluplak vs Mercado Tradicional</h3>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={technicalSpecs}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                  <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.6} />
                  <Radar name="Competencia" dataKey="B" stroke="#475569" fill="#475569" fillOpacity={0.3} />
                  <Legend verticalAlign="bottom" />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-12">
              <h3 className="text-5xl font-black italic uppercase tracking-tighter">Eficiencia de <span className="text-yellow-400">Margen.</span></h3>
              <p className="text-xl text-slate-400 leading-relaxed italic">
                Nuestra estructura de costes garantiza una rentabilidad sólida tanto en el mercado nacional como en exportación[cite: 27].
              </p>
              
              <div className="space-y-8">
                {productMargins.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm font-black uppercase tracking-widest">
                      <span>{item.name}</span>
                      <span className="text-yellow-400">{item.margin}% Profit</span>
                    </div>
                    <div className="h-4 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.margin}%` }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="h-full bg-yellow-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-8 bg-yellow-400/10 border border-yellow-400/20 rounded-3xl">
                <p className="text-sm text-yellow-400 font-bold leading-relaxed">
                  "El desglose por Metro Lineal vs. Barra de 2.4m nos permite una precisión del 99% en presupuestos, eliminando fugas de beneficio por desperdicio de material"[cite: 40].
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CRECIMIENTO EXPONENCIAL (THE DATA) */}
      <section id="analisis" className="py-60 px-10 bg-black">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-32">
            <div className="max-w-3xl">
              <span className="text-yellow-400 font-black tracking-[0.5em] uppercase text-xs">Financial Performance</span>
              <h2 className="text-[10vw] font-black italic leading-[0.8] uppercase tracking-tighter mt-10">
                SCALING <br /> <span className="text-yellow-400">UP.</span>
              </h2>
            </div>
            <p className="text-2xl text-slate-500 font-light italic max-w-md border-l-2 border-yellow-400 pl-8">
              En 2025, la facturación creció un 50% debido a la estandarización de productos de alto margen[cite: 55, 56].
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* PANEL PRINCIPAL DE VENTAS */}
            <div className="lg:col-span-8 bg-[#0a0f1e] rounded-[5rem] p-16 border border-white/5 shadow-2xl">
              <div className="flex justify-between items-center mb-20">
                <h4 className="text-3xl font-black italic uppercase tracking-tighter italic underline decoration-yellow-400 underline-offset-8">Histórico de Ventas Consolidado </h4>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <span className="text-[10px] font-bold uppercase text-slate-500">Revenue</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <span className="text-[10px] font-bold uppercase text-slate-500">EBITDA (28%)</span>
                  </div>
                </div>
              </div>
              
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={salesHistory}>
                    <defs>
                      <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} dy={15} fontWeight="black" />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px' }}
                      itemStyle={{ color: '#facc15', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="ventas" fill="url(#colorVentas)" stroke="#facc15" strokeWidth={6} />
                    <Bar dataKey="ebitda" barSize={60} fill="#1e293b" radius={[15, 15, 0, 0]} />
                    <Line type="monotone" dataKey="growth" stroke="#ca8a04" strokeWidth={2} dot={{ fill: '#ca8a04' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-20 border-t border-white/5">
                {salesHistory.slice(1).map((item, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xs font-black text-slate-500 uppercase mb-2">Crecimiento {item.year}</p>
                    <p className="text-4xl font-black italic text-yellow-400">+{item.growth}%</p>
                    <p className="text-[10px] font-bold text-slate-600 mt-1 uppercase italic tracking-tighter">Validación de Mercado </p>
                  </div>
                ))}
              </div>
            </div>

            {/* MÉTRICAS XXL */}
            <div className="lg:col-span-4 space-y-10">
              <div className="bg-yellow-400 p-12 rounded-[5rem] text-black h-1/2 flex flex-col justify-between relative overflow-hidden group">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-60">Exit Target Multiplier</p>
                <h3 className="text-9xl font-black italic leading-none tracking-tighter">3.5<span className="text-2xl">X</span></h3>
                <p className="text-lg font-bold italic leading-tight">Proyección de valoración 2026 basada en activos de propiedad intelectual.</p>
                <div className="absolute -right-10 -bottom-10 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                  <TrendingUp size={200} />
                </div>
              </div>
              <div className="bg-slate-900 border border-white/10 p-12 rounded-[5rem] h-1/2 flex flex-col justify-between">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">2026 Revenue Target [cite: 58]</p>
                <h3 className="text-8xl font-black italic leading-none tracking-tighter text-white">€220K</h3>
                <p className="text-lg font-bold text-slate-400 italic">Liderazgo Tecnológico en Climatización Invisible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ANÁLISIS DE MERCADO & CIERRE */}
      <section className="py-40 px-10 bg-[#020617]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">Mercado <span className="text-yellow-400">Español.</span></h2>
            <div className="prose prose-invert text-slate-400 text-lg leading-relaxed space-y-6">
              <p>
                Desde nuestra fundación en 2021, Aluplak ha transformado el sector de los perfiles técnicos en España. No somos solo fabricantes de zócalos; somos la única compañía que ha logrado integrar alta decoración con nanotecnología térmica[cite: 66, 67].
              </p>
              <p>
                Nuestra ventaja competitiva reside en haber convertido elementos arquitectónicos pasivos en sistemas activos de calefacción invisible. Actualmente, lideramos el nicho con soluciones que eliminan radiadores tradicionales, ofreciendo estética minimalista y máxima eficiencia[cite: 68, 69].
              </p>
            </div>
            <div className="flex gap-6">
              <button className="flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-yellow-400 transition-all">
                Download Audit 2025 <ArrowRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="bg-white/5 p-16 rounded-[5rem] border border-white/10">
            <h4 className="text-2xl font-black italic uppercase mb-10 text-center">Distribución de Mercado 2026</h4>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Industrial', value: 45 },
                      { name: 'Retail (Leroy Merlin)', value: 25 },
                      { name: 'Exportación', value: 20 },
                      { name: 'Lujo/Custom', value: 10 },
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={10}
                    dataKey="value"
                  >
                    <Cell fill="#facc15" />
                    <Cell fill="#ca8a04" />
                    <Cell fill="#854d0e" />
                    <Cell fill="#422006" />
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="py-60 px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-yellow-400/5 blur-[150px] rounded-full" />
        <div className="max-w-5xl mx-auto space-y-16 relative z-10">
          <h2 className="text-[12vw] font-black italic uppercase leading-[0.8] tracking-tighter">
            JOIN THE <br /> <span className="text-yellow-400">FUTURE.</span>
          </h2>
          <p className="text-4xl font-light text-slate-400 italic leading-tight">
            "Nuestra tarifa para distribuidores asegura una cadena de valor sana, incentivando la expansión rápida sin aumentar costes fijos"[cite: 41].
          </p>
          <div className="pt-20">
            <button className="px-20 py-10 bg-yellow-400 text-black font-black uppercase italic tracking-[0.3em] text-2xl rounded-full hover:scale-110 shadow-[0_0_50px_rgba(250,204,21,0.3)] transition-all">
              Request Full Dossier
            </button>
          </div>
        </div>
        <div className="mt-60 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-600 tracking-[0.5em] uppercase">
          <p>ALUPLAK SKIRTING BOARD S.L © 2026</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span>Valencia</span>
            <span>Madrid</span>
            <span>International</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
