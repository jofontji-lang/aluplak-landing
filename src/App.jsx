import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target, BarChart3
} from 'lucide-react';

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS ---
  
  const installationSavings = [
    { name: 'Tradicional (Obra)', coste: 320 },
    { name: 'Sistema Aluplak', coste: 60 },
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
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAVEGACIÓN CORPORATIVA */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={28} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <a href="#ahorro" className="hover:text-yellow-400 transition-colors">Ahorro</a>
          <a href="#estrategia" className="hover:text-yellow-400 transition-colors">Estrategia</a>
          <a href="#galeria" className="hover:text-yellow-400 transition-colors">Gama</a>
          <a href="#metricas" className="hover:text-yellow-400 text-yellow-400 transition-colors">Inversión 2026</a>
        </div>
      </nav>

      {/* HERO: PRIMER ACTIVO VISUAL */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-10">
        <div className="absolute inset-0 z-0">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover opacity-30" alt="Aluplak Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[12vw] lg:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter">
              BEYOND <br /> <span className="text-yellow-400">EFFICIENCY.</span>
            </h1>
            <p className="text-2xl lg:text-3xl font-light italic text-slate-400 max-w-3xl mt-10 border-l-4 border-yellow-400 pl-10">
              Instalación un 80% más rápida y ahorro energético del 30%. La infraestructura inteligente que redefine el sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN ESTRATÉGICA: NUEVOS PÁRRAFOS INTEGRADOS */}
      <section id="estrategia" className="py-40 bg-black px-10 border-b border-white/5">
        <div className="container mx-auto">
          <div className="mb-24">
            <span className="text-yellow-400 font-black tracking-widest uppercase text-xs">Operational Intelligence</span>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mt-4">Tesis de <br/> <span className="text-yellow-400">Escalabilidad</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 transition-all">
              <Globe className="text-yellow-400 mb-8" size={48} />
              <h4 className="text-2xl font-black italic uppercase mb-6 leading-none">Escalabilidad de Exportación</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-lg">
                "Contamos con una tarifa específica para el mercado exterior que optimiza la competitividad logística sin sacrificar el margen neto."
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 transition-all">
              <Factory className="text-yellow-400 mb-8" size={48} />
              <h4 className="text-2xl font-black italic uppercase mb-6 leading-none">Eficiencia Industrial</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-lg">
                "El desglose por Metro Lineal vs. Barra de 2.4m nos permite una precisión del 99% en presupuestos, eliminando fugas de beneficio por desperdicio de material."
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="p-12 bg-slate-900/40 rounded-[3rem] border border-white/5 transition-all">
              <Users className="text-yellow-400 mb-8" size={48} />
              <h4 className="text-2xl font-black italic uppercase mb-6 leading-none">Canal Distribuidor</h4>
              <p className="text-slate-400 font-light leading-relaxed italic text-lg">
                "Nuestra tarifa recomendada para distribuidores asegura una cadena de valor sana, incentivando la expansión rápida sin aumentar nuestros costes fijos."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MÉTRICAS DE AHORRO DE COSTES */}
      <section id="ahorro" className="py-40 bg-slate-950 px-10 border-y border-white/5">
        <div className="container mx-auto grid xl:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">Instalación <br/> "Plug & Play"</h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              El sistema bi-componente patentado elimina rozas y yeso. Al ser de registro directo, el coste de mano de obra se desploma de 320€ a solo 60€ por estancia.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                <Clock className="text-yellow-400 mb-4" />
                <p className="text-5xl font-black italic">-81%</p>
                <p className="text-[10px] font-black uppercase text-slate-500 mt-2">Tiempo de Obra</p>
              </div>
              <div className="p-10 bg-white/5 rounded-[2.5rem] border border-white/10">
                <Euro className="text-yellow-400 mb-4" />
                <p className="text-5xl font-black italic">€260</p>
                <p className="text-[10px] font-black uppercase text-slate-500 mt-2">Ahorro Directo</p>
              </div>
            </div>
          </div>
          <div className="bg-black/50 p-12 rounded-[4rem] border border-white/5 h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={installationSavings}>
                <XAxis dataKey="name" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '20px'}} />
                <Bar dataKey="coste" radius={[15, 15, 0, 0]}>
                  {installationSavings.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? '#1e293b' : '#facc15'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* MÉTRICAS DE AHORRO ENERGÉTICO */}
      <section className="py-40 bg-black px-10">
        <div className="container mx-auto grid xl:grid-cols-2 gap-20 items-center">
          <div className="order-2 xl:order-1 bg-slate-900/50 p-12 rounded-[4rem] border border-white/5 h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={energyEfficiency}>
                <XAxis dataKey="month" stroke="#475569" />
                <Tooltip contentStyle={{backgroundColor: '#000', border: 'none'}} />
                <Area type="monotone" dataKey="tradicional" stroke="#1e293b" fill="#1e293b" fillOpacity={0.3} />
                <Area type="monotone" dataKey="aluplak" stroke="#facc15" fill="#facc15" fillOpacity={0.4} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="order-1 xl:order-2 space-y-10">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">Eficiencia <br/> por Radiación</h2>
            <p className="text-xl text-slate-400 font-light italic">
              Invisotherm calienta las masas de la vivienda, no el aire. Esto reduce el consumo en un 30% al alcanzar la temperatura ideal de confort térmico en tiempo récord.
            </p>
            <div className="flex gap-10">
               <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                 <Zap className="text-yellow-400" /> Baja Inercia
               </div>
               <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
                 <ShieldCheck className="text-yellow-400" /> Sin Vaho
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM MULTIMEDIA: VÍDEOS */}
      <section className="py-40 bg-slate-950 px-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-12">
          <div className="rounded-[4rem] overflow-hidden border-8 border-white/5 aspect-video shadow-2xl group">
            <video src="/AluplakVideo1.mp4" controls className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
          <div className="rounded-[4rem] overflow-hidden border-8 border-white/5 aspect-video shadow-2xl group">
            <video src="/AluplakVideo2.mp4" controls className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* GALERÍA DE PRODUCTO */}
      <section id="galeria" className="py-40 bg-black px-10">
        <div className="container mx-auto grid lg:grid-cols-3 gap-10">
          {[
            { img: "/Aluplak2.jpeg", tag: "Zócalo LED" },
            { img: "/Aluplak3.jpeg", tag: "Outdoor" },
            { img: "/Aluplak4.jpeg", tag: "Invisotherm" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="group overflow-hidden rounded-[3.5rem] bg-slate-900/50 border border-white/5 relative">
              <img src={item.img} className="w-full h-[500px] object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000" alt={item.tag} />
              <div className="absolute bottom-10 left-10">
                <p className="bg-yellow-400 text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">{item.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MÉTRICAS FINANCIERAS E INVERSIÓN FINAL */}
      <section id="metricas" className="py-60 px-10 bg-[#020617]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-24 items-center">
            <div className="xl:col-span-2">
              <span className="text-yellow-400 font-black tracking-widest uppercase text-xs">Investor Metrics 2026</span>
              <h2 className="text-[10vw] font-black italic uppercase leading-[0.8] mb-20 tracking-tighter mt-4">HYPER <br/> <span className="text-yellow-400">GROWTH.</span></h2>
              <div className="h-[500px] bg-white/5 p-10 rounded-[4rem]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialStats}>
                    <CartesianGrid stroke="#1e293b" vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="year" stroke="#475569" fontWeight="bold" />
                    <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '20px'}} />
                    <Bar dataKey="ebitda" fill="#1e293b" radius={[15, 15, 0, 0]} barSize={60} />
                    <Area type="monotone" dataKey="rev" stroke="#facc15" fill="#facc15" fillOpacity={0.1} strokeWidth={6} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-yellow-400 p-16 rounded-[5rem] text-black text-center flex flex-col justify-center shadow-[0_50px_100px_-20px_rgba(250,204,21,0.4)] relative overflow-hidden group">
              <Rocket className="absolute -top-10 -right-10 text-black/10 group-hover:rotate-12 transition-transform duration-1000" size={300} />
              <div className="relative z-10">
                <p className="text-xs font-black uppercase tracking-widest mb-10">Exit Strategy Simulator</p>
                <input 
                  type="range" min="10000" max="500000" step="5000" 
                  value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full accent-black mb-12 cursor-pointer" 
                />
                <p className="text-3xl font-bold italic mb-2 tracking-tighter">€{investment.toLocaleString()} </p>
                <p className="text-8xl font-black italic leading-none mb-4">€{roi.total}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">Retorno Proyectado 3.5X</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CORPORATIVO */}
      <footer className="py-40 bg-black text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-10">
          <h2 className="text-6xl font-black italic uppercase mb-12 tracking-tighter">ALUPLAK <span className="text-yellow-400">ENGINEERING</span></h2>
          <p className="text-slate-500 font-light italic text-xl mb-20 leading-relaxed">
            "Transformando la superficie constructiva en infraestructura inteligente y rentable."
          </p>
          <div className="flex justify-center gap-10">
            <button className="bg-white text-black px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-yellow-400 transition-all">Investor Deck</button>
            <button className="border border-white/20 px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">Contact HQ</button>
          </div>
          <p className="mt-32 opacity-20 text-[10px] font-bold tracking-[0.6em] uppercase">© 2026 ALUPLAK SKIRTING BOARD S.L • SPAIN</p>
        </div>
      </footer>
    </div>
  );
}
