import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target
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

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={28} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <a href="#ahorro" className="hover:text-yellow-400 transition-colors">Ahorro</a>
          <a href="#estrategia" className="hover:text-yellow-400 transition-colors">Estrategia</a>
          <a href="#galeria" className="hover:text-yellow-400 transition-colors">Gama</a>
          <a href="#metricas" className="hover:text-yellow-400 text-yellow-400 transition-colors">Inversión</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-10">
        <div className="absolute inset-0 z-0">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover opacity-30" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-[12vw] lg:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter">
              BEYOND <br /> <span className="text-yellow-400">EFFICIENCY.</span>
            </h1>
            <p className="text-2xl lg:text-3xl font-light italic text-slate-400 max-w-3xl mt-10 border-l-4 border-yellow-400 pl-10">
              Instalación un 80% más rápida y ahorro energético del 30%. La infraestructura inteligente del 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MÉTRICAS DE AHORRO */}
      <section id="ahorro" className="py-40 bg-slate-950 px-10 border-y border-white/5">
        <div className="container mx-auto grid xl:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">Instalación <br/> Revolucionaria</h2>
            <p className="text-xl text-slate-400 leading-relaxed font-light">
              El sistema bi-componente patentado elimina rozas y yeso. Al ser de registro directo, el coste de mano de obra se desploma de 320€ a solo 60€ por estancia promedio.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Clock className="text-yellow-400 mb-4" />
                <p className="text-4xl font-black italic">-81% Tiempo</p>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                <Euro className="text-yellow-400 mb-4" />
                <p className="text-4xl font-black italic">€260 Ahorro</p>
              </div>
            </div>
          </div>
          <div className="bg-black/50 p-10 rounded-[3rem] border border-white/5 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={installationSavings}>
                <XAxis dataKey="name" stroke="#475569" fontSize={12} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', border: 'none'}} />
                <Bar dataKey="coste" radius={[10, 10, 0, 0]}>
                  {installationSavings.map((_, i) => (
                    <Cell key={i} fill={i === 0 ? '#1e293b' : '#facc15'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: ESTRATEGIA DE OPERACIONES E INDUSTRIAL */}
      <section id="estrategia" className="py-40 bg-black px-10">
        <div className="container mx-auto">
          <div className="mb-24">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">Estrategia de <br/> <span className="text-yellow-400">Escalabilidad</span></h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 hover:border-yellow-400/50 transition-colors">
              <Globe className="text-yellow-400 mb-6" size={40} />
              <h4 className="text-2xl font-black italic uppercase mb-6">Escalabilidad de Exportación</h4>
              <p className="text-slate-400 font-light leading-relaxed italic">
                "Contamos con una tarifa específica para el mercado exterior que optimiza la competitividad logística sin sacrificar el margen neto."
              </p>
            </div>
            <div className="p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 hover:border-yellow-400/50 transition-colors">
              <Factory className="text-yellow-400 mb-6" size={40} />
              <h4 className="text-2xl font-black italic uppercase mb-6">Eficiencia Industrial</h4>
              <p className="text-slate-400 font-light leading-relaxed italic">
                "El desglose por Metro Lineal vs. Barra de 2.4m nos permite una precisión del 99% en presupuestos, eliminando fugas de beneficio por desperdicio de material."
              </p>
            </div>
            <div className="p-10 bg-slate-900/50 rounded-[3rem] border border-white/5 hover:border-yellow-400/50 transition-colors">
              <Users className="text-yellow-400 mb-6" size={40} />
              <h4 className="text-2xl font-black italic uppercase mb-6">Canal Distribuidor</h4>
              <p className="text-slate-400 font-light leading-relaxed italic">
                "Nuestra tarifa recomendada para distribuidores asegura una cadena de valor sana, incentivando la expansión rápida sin aumentar nuestros costes fijos."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AHORRO ENERGÉTICO */}
      <section className="py-40 bg-slate-950 px-10">
        <div className="container mx-auto grid xl:grid-cols-2 gap-20 items-center">
          <div className="order-2 xl:order-1 bg-slate-900/50 p-10 rounded-[3rem] border border-white/5 h-[400px]">
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
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">Radiación vs <br/> Convección</h2>
            <p className="text-xl text-slate-400 font-light italic">
              Invisotherm calienta las masas de la vivienda, no el aire. Esto reduce el consumo en un 30% al alcanzar la temperatura ideal en tiempo récord.
            </p>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              <li className="flex gap-4"><Zap className="text-yellow-400" size={18} /> Nanotecnología de 0.5mm</li>
              <li className="flex gap-4"><ShieldCheck className="text-yellow-400" size={18} /> Sin mantenimiento anual</li>
            </ul>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-40 bg-black px-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-[3rem] overflow-hidden border-4 border-white/5 aspect-video">
            <video src="/AluplakVideo1.mp4" controls className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[3rem] overflow-hidden border-4 border-white/5 aspect-video">
            <video src="/AluplakVideo2.mp4" controls className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-40 bg-slate-950 px-10 text-center">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8">
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5">
            <img src="/Aluplak2.jpeg" className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700" alt="Aluplak 2" />
            <p className="p-6 text-xs font-black uppercase tracking-widest">Zócalo Técnico LED</p>
          </div>
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5">
            <img src="/Aluplak3.jpeg" className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700" alt="Aluplak 3" />
            <p className="p-6 text-xs font-black uppercase tracking-widest">Outdoor Termoplak</p>
          </div>
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5">
            <img src="/Aluplak4.jpeg" className="w-full h-80 object-cover group-hover:scale-110 transition-all duration-700" alt="Aluplak 4" />
            <p className="p-6 text-xs font-black uppercase tracking-widest">Invisotherm Wall</p>
          </div>
        </div>
      </section>

      {/* MÉTRICAS FINANCIERAS E INVERSIÓN */}
      <section id="metricas" className="py-60 px-10 bg-[#020617]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-20 mb-32 items-center">
            <div className="xl:col-span-2">
              <h2 className="text-[8vw] font-black italic uppercase leading-[0.8] mb-20 tracking-tighter">TARGET <br/> <span className="text-yellow-400">EXIT 3.5X</span></h2>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialStats}>
                    <CartesianGrid stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="year" stroke="#475569" />
                    <Bar dataKey="ebitda" fill="#1e293b" radius={[10, 10, 0, 0]} barSize={40} />
                    <Area type="monotone" dataKey="rev" stroke="#facc15" fill="#facc15" fillOpacity={0.1} strokeWidth={4} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-yellow-400 p-12 rounded-[4rem] text-black text-center flex flex-col justify-center shadow-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest mb-6">Simulador de Retorno</p>
              <input 
                type="range" min="10000" max="500000" step="5000" 
                value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full accent-black mb-10" 
              />
              <p className="text-2xl font-bold italic mb-2">Invirtiendo: €{investment.toLocaleString()}</p>
              <p className="text-6xl font-black italic">€{roi.total}</p>
              <p className="text-[10px] font-black uppercase mt-4">Retorno Proyectado 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black text-center border-t border-white/5">
        <h2 className="text-4xl font-black italic uppercase mb-10">ALUPLAK <span className="text-yellow-400">ENGINEERING</span></h2>
        <p className="opacity-20 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 ALUPLAK SKIRTING BOARD S.L • SPAIN</p>
      </footer>
    </div>
  );
}
