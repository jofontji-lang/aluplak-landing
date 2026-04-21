import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target, BarChart3, Construction, 
  ChevronRight, Timer, Layers, LayoutGrid
} from 'lucide-react';

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS ---
  
  const installationSavings = [
    { name: 'Mano de Obra Tradicional', coste: 320, horas: 8, color: '#334155' },
    { name: 'Mano de Obra Aluplak', coste: 60, horas: 1.5, color: '#facc15' },
  ];

  const energyEfficiency = [
    { month: 'Ene', tradicional: 120, aluplak: 84 },
    { month: 'Feb', tradicional: 110, aluplak: 77 },
    { month: 'Mar', tradicional: 90, aluplak: 63 },
    { month: 'Abr', tradicional: 60, aluplak: 42 },
    { month: 'May', tradicional: 40, aluplak: 28 },
    { month: 'Jun', tradicional: 30, aluplak: 21 },
  ];

  const financialStats = [
    { year: '2022', rev: 47416, ebitda: 13276 },
    { year: '2023', rev: 71677, ebitda: 20069 },
    { year: '2024', rev: 88210, ebitda: 24698 },
    { year: '2025', rev: 132531, ebitda: 37108 },
    { year: '2026', rev: 220000, ebitda: 61600 },
  ];

  const roi = useMemo(() => ({
    total: (investment * 3.5).toLocaleString(),
    profit: (investment * 2.5).toLocaleString()
  }), [investment]);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={24} />
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">ALUPLAK</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <a href="#ahorro" className="hover:text-yellow-400 transition-colors">Eficiencia</a>
          <a href="#gama" className="hover:text-yellow-400 transition-colors">Galería</a>
          <a href="#estrategia" className="hover:text-yellow-400 transition-colors">Estrategia</a>
          <a href="#metricas" className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:bg-white transition-all">Investor Portal</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover opacity-40 scale-110 blur-[2px]" alt="Aluplak Background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[12vw] lg:text-[9rem] font-black italic leading-[0.85] uppercase tracking-tighter">
              BEYOND <br /> <span className="text-yellow-400">EFFICIENCY.</span>
            </h1>
            <p className="text-xl lg:text-2xl font-light italic text-slate-300 max-w-2xl mt-8 border-l-2 border-yellow-400 pl-6">
              Reinventando la infraestructura del hogar mediante zócalos inteligentes. Un 81% más rápido de instalar, un 30% más eficiente energéticamente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN IMPACTO: OPERARIO + GRÁFICO DE AHORRO */}
      <section id="ahorro" className="py-32 bg-slate-950 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-stretch">
            
            {/* Tarjeta de Imagen del Operario */}
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute -inset-2 bg-yellow-400/10 rounded-[3rem] blur-xl"></div>
              <div className="relative h-full min-h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                <img 
                  src="/Aluplak2.jpeg" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="Operario instalando zócalo Aluplak" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-yellow-400 p-2 rounded-lg">
                      <Construction className="text-black" size={20} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Optimización de Campo</span>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase leading-none mb-3 text-white">Sencillez <br/> Estructural</h3>
                  <p className="text-slate-300 text-sm font-light italic leading-relaxed">
                    El sistema de clipado directo elimina la necesidad de herramientas complejas, reduciendo el error humano y acelerando la entrega de obra.
                  </p>
                </div>
              </div>
            </div>

            {/* Panel de Gráfico de Ahorro */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              <div className="mb-12">
                <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-tight mb-4 text-white">
                  Ahorro en <br/> <span className="text-yellow-400">Mano de Obra</span>
                </h2>
                <p className="text-lg text-slate-400 font-light italic max-w-xl">
                  Nuestra tecnología reduce el tiempo de instalación de una jornada completa a menos de dos horas por estancia. Menos tiempo en obra significa más margen para la promotora.
                </p>
              </div>

              {/* El Gran Gráfico de Barras */}
              <div className="bg-slate-900/40 p-8 rounded-[2rem] border border-white/5 h-[350px] shadow-inner relative group">
                <div className="absolute top-6 right-8 flex items-center gap-2">
                   <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Sistema Aluplak</span>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={installationSavings} layout="vertical" margin={{ left: 20, right: 40, top: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      stroke="#475569" 
                      fontSize={10} 
                      width={140} 
                      tickLine={false} 
                      axisLine={false}
                      tick={{ fill: '#94a3b8', fontWeight: 'bold' }}
                    />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.03)'}} 
                      contentStyle={{backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px'}} 
                    />
                    <Bar dataKey="coste" radius={[0, 12, 12, 0]} barSize={45}>
                      {installationSavings.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Métricas Comparativas */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-slate-500 mb-1">
                    <Timer size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tiempo Estimado</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black italic text-white">8.0h</span>
                    <span className="text-xs text-slate-500 italic">tradicional</span>
                  </div>
                </div>
                <div className="bg-yellow-400/5 p-6 rounded-2xl border border-yellow-400/20">
                  <div className="flex items-center gap-2 text-yellow-400/60 mb-1">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Tiempo Aluplak</span>
                  </div>
                  <div className="flex items-baseline gap-2 text-yellow-400">
                    <span className="text-4xl font-black italic">1.5h</span>
                    <span className="text-xs italic">optimizada</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: GAMA Y DETALLE (Usando Aluplak 3, 4, 5, 6) */}
      <section id="gama" className="py-32 bg-black px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Gama de <br/> <span className="text-yellow-400">Producto</span></h2>
              <p className="text-slate-400 italic mt-4 max-w-md">Versatilidad estética sin comprometer la eficiencia técnica.</p>
            </div>
            <LayoutGrid className="text-slate-700" size={60} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: "/Aluplak3.jpeg", title: "Minimal", desc: "Perfiles de baja intrusión" },
              { img: "/Aluplak4.jpeg", title: "Industrial", desc: "Resistencia extrema" },
              { img: "/Aluplak5.jpeg", title: "Architect", desc: "Detalles premium" },
              { img: "/Aluplak6.jpeg", title: "Elite", desc: "Máxima disipación" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
              >
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-black italic uppercase text-white">{item.title}</h4>
                  <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATEGIA Y CRECIMIENTO */}
      <section id="estrategia" className="py-32 bg-slate-950 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter text-white">Plan de <br/> <span className="text-yellow-400">Escalabilidad</span></h2>
            <div className="text-right text-slate-500 text-xs font-bold uppercase tracking-[0.3em] max-w-xs">
              Estrategia comercial focalizada en la exportación y eficiencia logística.
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-10 bg-slate-900/30 rounded-[2.5rem] border border-white/5 group hover:bg-slate-900/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-black italic uppercase mb-4 text-white">Exportación</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-sm">
                Tarifas específicas para mercados internacionales optimizando márgenes netos y logística transfronteriza.
              </p>
            </div>
            <div className="p-10 bg-slate-900/30 rounded-[2.5rem] border border-white/5 group hover:bg-slate-900/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <Factory size={24} />
              </div>
              <h4 className="text-xl font-black italic uppercase mb-4 text-white">Métrica por Metro</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-sm">
                Cálculo de beneficio exacto por Metro Lineal vs Barra de 2.4m, eliminando mermas y fugas de capital en obra.
              </p>
            </div>
            <div className="p-10 bg-slate-900/30 rounded-[2.5rem] border border-white/5 group hover:bg-slate-900/50 transition-all">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                <Users size={24} />
              </div>
              <h4 className="text-xl font-black italic uppercase mb-4 text-white">Red de Distribución</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-sm">
                Esquema de precios recomendado para distribuidores que asegura una penetración de mercado rápida y sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EFICIENCIA ENERGÉTICA Contextual con Aluplak 7 */}
      <section className="relative py-32 bg-black px-6 md:px-12 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="/Aluplak7.jpeg" className="w-full h-full object-cover" alt="Detalle técnico" />
        </div>
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div className="order-2 lg:order-1 bg-slate-900/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 h-[400px]">
             <div className="flex justify-between items-center mb-8">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Curva de Consumo Térmico (kWh)</span>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-slate-800 rounded-full"></div><span className="text-[8px] uppercase font-bold text-slate-500">Trad.</span></div>
                  <div className="flex items-center gap-2"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div><span className="text-[8px] uppercase font-bold text-slate-500">Aluplak</span></div>
               </div>
             </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyEfficiency}>
                <XAxis dataKey="month" stroke="#475569" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '15px'}} />
                <Area type="monotone" dataKey="tradicional" stroke="#1e293b" fill="#1e293b" fillOpacity={0.2} strokeWidth={2} />
                <Area type="monotone" dataKey="aluplak" stroke="#facc15" fill="#facc15" fillOpacity={0.4} strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-white">Radiación <br/> <span className="text-yellow-400">Inteligente</span></h2>
            <p className="text-lg text-slate-400 font-light italic leading-relaxed">
              Invisotherm no calienta el aire, calienta la masa. El resultado es una sensación térmica instantánea con un ahorro real del 30% en la factura eléctrica del cliente final.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                <CheckCircle2 className="text-yellow-400" size={18} /> Cero inercia térmica
              </li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                <CheckCircle2 className="text-yellow-400" size={18} /> Eliminación de puentes térmicos
              </li>
              <li className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-slate-300">
                <CheckCircle2 className="text-yellow-400" size={18} /> Integración invisible
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-32 bg-black px-6 md:px-12">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-[3rem] overflow-hidden border border-white/5 aspect-video shadow-2xl relative group">
            <video src="/AluplakVideo1.mp4" controls className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 pointer-events-none">
              <span className="bg-black/60 backdrop-blur px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-white/10 text-white">Demo Técnica v.01</span>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/5 aspect-video shadow-2xl relative group">
            <video src="/AluplakVideo2.mp4" controls className="w-full h-full object-cover" />
            <div className="absolute top-6 left-6 pointer-events-none">
              <span className="bg-black/60 backdrop-blur px-4 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border border-white/10 text-white">Instalación Real</span>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS FINANCIERAS E INVERSIÓN */}
      <section id="metricas" className="py-40 px-6 md:px-12 bg-[#020617]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-16 items-center">
            <div className="xl:col-span-2">
              <h2 className="text-[8vw] font-black italic uppercase leading-[0.8] mb-12 tracking-tighter text-white">PROYECCIÓN <br/> <span className="text-yellow-400">DE RETORNO</span></h2>
              <div className="h-[400px] bg-slate-900/20 p-8 rounded-[3rem] border border-white/5">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialStats}>
                    <CartesianGrid stroke="#1e293b" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="year" stroke="#475569" fontWeight="bold" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '15px'}} />
                    <Bar dataKey="ebitda" fill="#1e293b" radius={[8, 8, 0, 0]} barSize={40} />
                    <Area type="monotone" dataKey="rev" stroke="#facc15" fill="#facc15" fillOpacity={0.05} strokeWidth={4} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Simulador de Inversión */}
            <div className="bg-yellow-400 p-12 rounded-[4rem] text-black text-center flex flex-col justify-center shadow-2xl relative overflow-hidden group">
              <Rocket className="absolute -top-12 -right-12 opacity-5 group-hover:scale-125 transition-transform duration-1000" size={300} />
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-10">Investment Multiplier</p>
                <div className="mb-10">
                  <input 
                    type="range" min="10000" max="500000" step="5000" 
                    value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                    className="w-full accent-black mb-4 cursor-pointer" 
                  />
                  <div className="flex justify-between text-[10px] font-bold uppercase opacity-50">
                    <span>10k</span>
                    <span>500k</span>
                  </div>
                </div>
                <p className="text-xl font-bold italic mb-2">Compromiso: €{investment.toLocaleString()}</p>
                <p className="text-6xl font-black italic tracking-tighter">€{roi.total}</p>
                <p className="text-[10px] font-black uppercase mt-6 tracking-widest bg-black text-white py-2 rounded-full inline-block px-6">Exit Estimado 2026 (3.5x)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black text-center border-t border-white/5">
        <h2 className="text-4xl font-black italic uppercase mb-8 tracking-tighter text-white">ALUPLAK <span className="text-yellow-400">INDUSTRIES</span></h2>
        <div className="flex justify-center gap-8 mb-12">
           <Activity className="opacity-20 text-white" />
           <Target className="opacity-20 text-white" />
           <TrendingUp className="opacity-20 text-white" />
        </div>
        <p className="opacity-20 text-[9px] font-bold tracking-[0.6em] uppercase text-white">© 2026 ALUPLAK SKIRTING BOARD S.L • SPAIN</p>
      </footer>
    </div>
  );
}
