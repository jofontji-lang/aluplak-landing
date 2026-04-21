import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target, BarChart3, Construction
} from 'lucide-react';

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS ACTUALIZADOS ---
  
  const installationSavings = [
    { name: 'Mano de Obra Tradicional', coste: 320, horas: 8, fill: '#1e293b' },
    { name: 'Mano de Obra Aluplak', coste: 60, horas: 1.5, fill: '#facc15' },
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
          <a href="#ahorro" className="hover:text-yellow-400 transition-colors">Instalación</a>
          <a href="#estrategia" className="hover:text-yellow-400 transition-colors">Estrategia</a>
          <a href="#galeria" className="hover:text-yellow-400 transition-colors">Gama</a>
          <a href="#metricas" className="hover:text-yellow-400 text-yellow-400 transition-colors">Inversión</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-10">
        <div className="absolute inset-0 z-0">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover opacity-30" alt="Hero Background" />
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

      {/* SECCIÓN IMPACTO: OPERARIO + GRÁFICO DE AHORRO */}
      <section id="ahorro" className="py-40 bg-slate-950 px-10 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Imagen del Operario con Overlay Técnico */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-yellow-400/20 rounded-[4rem] blur-2xl group-hover:bg-yellow-400/30 transition-all duration-700"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden border-2 border-white/10 aspect-[4/5] shadow-2xl">
                <img 
                  src="/Aluplak2.jpeg" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="Operario instalando zócalo Aluplak" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-12 left-10 right-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Construction className="text-yellow-400" size={32} />
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-yellow-400">Factor de Instalación</span>
                  </div>
                  <h3 className="text-4xl font-black italic uppercase leading-none mb-4">Simplicidad <br/> Estructural</h3>
                  <p className="text-slate-300 text-sm font-light italic leading-relaxed">
                    Un sistema diseñado para ser montado en seco, sin rozas, sin escombros y con un clipado de precisión quirúrgica.
                  </p>
                </div>
              </div>
            </div>

            {/* Gráfico de Barras de Ahorro */}
            <div className="w-full lg:w-1/2 space-y-12">
              <div>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-6">Ahorro en <br/> <span className="text-yellow-400">Mano de Obra</span></h2>
                <p className="text-xl text-slate-400 leading-relaxed font-light italic">
                  La facilidad de instalación no es solo comodidad; es rentabilidad directa. Al reducir el tiempo de ejecución en un 81%, el coste operativo por estancia se desploma.
                </p>
              </div>

              <div className="bg-black/40 p-10 rounded-[3rem] border border-white/5 h-[450px] shadow-inner">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-10 text-center">Comparativa de Coste Directo (€) e Intradía (Horas)</h4>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={installationSavings} layout="vertical" margin={{ left: 40, right: 40 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#475569" fontSize={10} width={120} tickLine={false} axisLine={false} />
                    <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '15px'}} />
                    <Bar dataKey="coste" radius={[0, 15, 15, 0]} barSize={50}>
                      {installationSavings.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <span className="text-5xl font-black italic text-white leading-none">8.0h</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase mt-2 tracking-widest">Sistema Tradicional</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-5xl font-black italic text-yellow-400 leading-none">1.5h</span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase mt-2 tracking-widest">Aluplak System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN ESTRATEGIA (TEXTOS INTEGRADOS) */}
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

      {/* EFICIENCIA ENERGÉTICA */}
      <section className="py-40 bg-slate-950 px-10 border-y border-white/5">
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
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">Eficiencia <br/> por Radiación</h2>
            <p className="text-xl text-slate-400 font-light italic leading-relaxed">
              Invisotherm calienta las masas de la vivienda, no el aire. Esto reduce el consumo en un 30% al alcanzar la temperatura de confort térmico eliminando la inercia del aire.
            </p>
            <div className="flex gap-10">
               <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                 <Zap className="text-yellow-400" /> Baja Inercia
               </div>
               <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-slate-400">
                 <ShieldCheck className="text-yellow-400" /> Cero Mantenimiento
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-40 bg-black px-10">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div className="rounded-[4rem] overflow-hidden border-4 border-white/5 aspect-video shadow-2xl group">
            <video src="/AluplakVideo1.mp4" controls className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="rounded-[4rem] overflow-hidden border-4 border-white/5 aspect-video shadow-2xl group">
            <video src="/AluplakVideo2.mp4" controls className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-40 bg-slate-950 px-10">
        <div className="container mx-auto grid lg:grid-cols-3 gap-8">
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5 relative">
            <img src="/Aluplak2.jpeg" className="w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-1000 opacity-50 group-hover:opacity-100" alt="Gama 2" />
            <p className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-widest bg-yellow-400 text-black px-4 py-1 rounded-full">Zócalo Técnico</p>
          </div>
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5 relative">
            <img src="/Aluplak3.jpeg" className="w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-1000 opacity-50 group-hover:opacity-100" alt="Gama 3" />
            <p className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-widest bg-yellow-400 text-black px-4 py-1 rounded-full">Outdoor Solution</p>
          </div>
          <div className="group overflow-hidden rounded-[3rem] bg-white/5 border border-white/5 relative">
            <img src="/Aluplak4.jpeg" className="w-full h-[500px] object-cover group-hover:scale-110 transition-all duration-1000 opacity-50 group-hover:opacity-100" alt="Gama 4" />
            <p className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-widest bg-yellow-400 text-black px-4 py-1 rounded-full">Invisotherm Finish</p>
          </div>
        </div>
      </section>

      {/* MÉTRICAS FINANCIERAS E INVERSIÓN */}
      <section id="metricas" className="py-60 px-10 bg-[#020617]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-20 items-center">
            <div className="xl:col-span-2">
              <h2 className="text-[10vw] font-black italic uppercase leading-[0.8] mb-20 tracking-tighter">TARGET <br/> <span className="text-yellow-400">EXIT 3.5X</span></h2>
              <div className="h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialStats}>
                    <CartesianGrid stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="year" stroke="#475569" fontWeight="bold" />
                    <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '20px'}} />
                    <Bar dataKey="ebitda" fill="#1e293b" radius={[10, 10, 0, 0]} barSize={50} />
                    <Area type="monotone" dataKey="rev" stroke="#facc15" fill="#facc15" fillOpacity={0.1} strokeWidth={5} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-yellow-400 p-16 rounded-[5rem] text-black text-center flex flex-col justify-center shadow-2xl relative overflow-hidden group">
              <Rocket className="absolute -top-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-1000" size={300} />
              <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-10 relative z-10">Investment Simulator</p>
              <input 
                type="range" min="10000" max="500000" step="5000" 
                value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full accent-black mb-10 cursor-pointer relative z-10" 
              />
              <p className="text-2xl font-bold italic mb-2 relative z-10">Invirtiendo: €{investment.toLocaleString()}</p>
              <p className="text-7xl font-black italic relative z-10">€{roi.total}</p>
              <p className="text-[10px] font-black uppercase mt-6 tracking-widest opacity-60 relative z-10">Retorno Proyectado 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 bg-black text-center border-t border-white/5">
        <h2 className="text-6xl font-black italic uppercase mb-12 tracking-tighter">ALUPLAK <span className="text-yellow-400">ENGINEERING</span></h2>
        <p className="max-w-2xl mx-auto px-10 opacity-30 text-xs font-bold uppercase tracking-[0.5em] mb-20 leading-relaxed">
          Transformando la superficie constructiva en infraestructura inteligente y rentable.
        </p>
        <p className="opacity-20 text-[10px] font-bold tracking-[0.6em] uppercase">© 2026 ALUPLAK SKIRTING BOARD S.L • SPAIN</p>
      </footer>
    </div>
  );
}
