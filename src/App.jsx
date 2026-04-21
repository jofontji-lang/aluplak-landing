import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ComposedChart, 
  Bar, Area, Legend 
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, ArrowRight, TrendingUp, Zap, ShieldCheck, 
  Droplets, Leaf, Menu, X, Globe, Target, Cpu, EyeOff
} from 'lucide-react';

export default function AluplakUltimatePortal() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Datos extraídos del dossier
  const financialData = useMemo(() => [
    { year: '2022', ventas: 47416, ebitda: 13276 },
    { year: '2023', ventas: 71677, ebitda: 20069 },
    { year: '2024', ventas: 88210, ebitda: 24698 },
    { year: '2025', ventas: 132531, ebitda: 37108 },
    { year: '2026', ventas: 220000, ebitda: 61600 }
  ], []);

  const techRadar = [
    { subject: 'Eficiencia', A: 120 },
    { subject: 'Instalación', A: 150 },
    { subject: 'Estética', A: 140 },
    { subject: 'Mantenimiento', A: 150 },
    { subject: 'Versatilidad', A: 110 },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      {/* BARRA DE PROGRESO */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-xl border-b border-white/5 py-6 px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Activity className="text-yellow-400" size={32} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK<span className="text-yellow-400">.</span></span>
        </div>
        <div className="hidden lg:flex gap-10 items-center font-black text-[11px] uppercase tracking-widest">
          <a href="#inicio" className="hover:text-yellow-400 transition-colors">Nosotros</a>
          <a href="#tecnologia" className="hover:text-yellow-400 transition-colors">I+D+i</a>
          <a href="#mercado" className="hover:text-yellow-400 transition-colors">Mercado</a>
          <a href="#finanzas" className="hover:text-yellow-400 transition-colors text-yellow-400 border-b border-yellow-400">Inversión</a>
          <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-yellow-400 transition-all">Dossier PDF</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-60 pb-32 px-8 flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-yellow-400 font-bold tracking-[0.5em] uppercase text-sm mb-6">Industrial Revolution 4.0</motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 70 }} animate={{ opacity: 1, y: 0 }}
            className="text-[12vw] lg:text-[14rem] font-black italic leading-[0.75] uppercase tracking-tighter mb-20"
          >
            SMART <br /> <span className="text-yellow-400">SURFACES.</span>
          </motion.h1>
          
          <div className="grid lg:grid-cols-2 gap-24">
            <div className="space-y-8">
              <p className="text-4xl lg:text-5xl font-light italic text-slate-300 leading-tight">
                Transformamos la arquitectura pasiva en <span className="text-white font-bold underline decoration-yellow-400">infraestructura activa</span>.
              </p>
              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Presencia Global</p>
                  <p className="text-4xl font-black italic">30+ Países</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase mb-2">Sede Central</p>
                  <p className="text-4xl font-black italic">Valencia</p>
                </div>
              </div>
            </div>
            <div className="space-y-8 bg-white/5 p-12 rounded-[3rem] border border-white/10 backdrop-blur-md">
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                Aluplak es una compañía tecnológica que ha roto el paradigma de la construcción en seco. Mediante un sistema bi-componente patentado, hemos logrado que el rodapié —históricamente un elemento estético— se convierta en una solución técnica para el registro de instalaciones y climatización inteligente.
              </p>
              <button className="flex items-center gap-4 text-yellow-400 font-black uppercase tracking-widest text-sm group">
                Explorar Nuestra Patente <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE TEXTO: LA EMPRESA */}
      <section className="py-32 px-8 bg-slate-950">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-5xl font-black italic uppercase mb-12 tracking-tighter italic">Nuestra Misión: <span className="text-yellow-400">Invisible Tech</span></h2>
          <div className="columns-1 md:columns-2 gap-16 text-slate-400 space-y-8 leading-relaxed font-light text-lg">
            <p>
              Desde nuestra fundación en 2021, Aluplak ha liderado la transformación de perfiles técnicos. No somos fabricantes tradicionales; somos diseñadores de sistemas que facilitan la vida al instalador y al usuario final. Nuestra propuesta de valor elimina las costosas "obras" para acceder a servicios de red o electricidad.
            </p>
            <p>
              El futuro de la vivienda exige flexibilidad. Nuestro sistema permite que un hogar evolucione: añadir puntos de carga, cambiar cableado de fibra o instalar sistemas de domótica se realiza en minutos mediante nuestro clipado magnético y bi-componente, sin picar una sola pared.
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA: INVISOTHERM */}
      <section id="tecnologia" className="py-40 px-8 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <p className="text-yellow-400 font-black tracking-widest text-xs uppercase">División Climatización</p>
              <h2 className="text-8xl lg:text-[10rem] font-black italic uppercase leading-none tracking-tighter">Inviso<span className="text-yellow-400">therm</span></h2>
            </div>
            
            <p className="text-2xl text-slate-300 font-light leading-relaxed italic">
              El primer panel constructivo calefactable de una sola pieza. Un cambio de juego para la eficiencia energética.
            </p>
            
            <div className="prose prose-invert max-w-none text-slate-400 space-y-6 text-lg">
              <p>
                Invisotherm integra nanotecnología térmica en paneles de 13mm. Al aplicar la conductividad del aluminio y el calor radiante, logramos climatizar áreas de hasta 14m² sin necesidad de radiadores visibles. Esto no solo mejora la estética minimalista, sino que optimiza el espacio útil en un 7%.
              </p>
              <p>
                A diferencia de los sistemas de aire (convección), la radiación calienta los cuerpos y objetos de forma homogénea, evitando la circulación de polvo y alérgenos, lo que lo convierte en la solución más saludable del mercado actual.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-8">
              <div className="p-10 bg-slate-900/50 rounded-[2.5rem] border border-white/5 group hover:border-yellow-400/30 transition-all">
                <Cpu className="text-yellow-400 mb-6" size={40} />
                <h4 className="text-xl font-black uppercase italic mb-4">Nanotech Core</h4>
                <p className="text-sm text-slate-500">Malla térmica de alta resistencia integrada en el núcleo del panel.</p>
              </div>
              <div className="p-10 bg-slate-900/50 rounded-[2.5rem] border border-white/5 group hover:border-yellow-400/30 transition-all">
                <EyeOff className="text-yellow-400 mb-6" size={40} />
                <h4 className="text-xl font-black uppercase italic mb-4">Registro Total</h4>
                <p className="text-sm text-slate-500">Acceso inmediato a instalaciones sin generar residuos ni demoliciones.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900 p-12 rounded-[4rem] border border-white/10 shadow-2xl">
             <h4 className="text-2xl font-black italic uppercase mb-10 text-center">Rendimiento Técnico</h4>
             <div className="h-[450px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={techRadar}>
                    <PolarGrid stroke="#1e293b" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontWeight: 'bold' }} />
                    <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.5} />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>
      </section>

      {/* FINANZAS - MÉTRICAS GIGANTES */}
      <section id="finanzas" className="py-60 bg-black relative">
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <p className="text-yellow-400 font-black tracking-[0.5em] uppercase text-xs mb-16">Investor Relations & Projections</p>
          
          {/* MÉTRICA XXL */}
          <div className="grid lg:grid-cols-3 gap-8 mb-32">
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[5rem] p-20 flex flex-col justify-between hover:scale-[1.01] transition-transform duration-700">
              <div>
                <p className="text-slate-500 font-black uppercase tracking-widest text-sm mb-12 italic underline decoration-yellow-400 underline-offset-8">Exit Multiplier Target 2026</p>
                <h3 className="text-[12rem] lg:text-[22rem] font-black italic leading-[0.7] tracking-tighter">
                  3.5<span className="text-yellow-400">X</span>
                </h3>
                <p className="text-4xl font-light text-slate-400 max-w-2xl mt-12 italic leading-tight">
                  Proyección de valoración basada en la consolidación de la división <span className="text-white font-bold">Invisotherm</span> y la expansión europea.
                </p>
              </div>
              <div className="pt-20 border-t border-white/10 mt-20 flex items-center justify-between">
                <div className="flex gap-16">
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">CAGR (22-26)</p>
                    <p className="text-4xl font-black text-yellow-400">+52%</p>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-slate-500">Efficiency</p>
                    <p className="text-4xl font-black italic">A+++</p>
                  </div>
                </div>
                <TrendingUp size={80} className="text-yellow-400 opacity-20" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-yellow-400 p-16 rounded-[5rem] text-black h-1/2 flex flex-col justify-between relative overflow-hidden group">
                <p className="text-xs font-black uppercase tracking-widest opacity-60 relative z-10">EBITDA Margin</p>
                <h4 className="text-[10rem] font-black italic leading-none tracking-tighter relative z-10">28%</h4>
                <p className="text-xl font-bold uppercase tracking-tight relative z-10">Rentabilidad <br /> Neta Asegurada</p>
                <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:scale-125 transition-transform duration-1000">
                  <Activity size={300} />
                </div>
              </div>
              <div className="bg-slate-900 border border-white/10 p-16 rounded-[5rem] h-1/2 flex flex-col justify-between">
                <p className="text-xs font-black uppercase tracking-widest text-slate-500">Target Revenue</p>
                <h4 className="text-[7rem] font-black italic leading-none tracking-tighter text-white">€220K</h4>
                <p className="text-xl font-bold uppercase tracking-tight text-slate-400 italic">Previsión de cierre <br /> Ejercicio 2026</p>
              </div>
            </div>
          </div>

          {/* ANÁLISIS DE MERCADO Y GRÁFICO */}
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-8 bg-slate-900/50 border border-white/5 p-16 rounded-[4rem] backdrop-blur-sm">
              <div className="flex justify-between items-end mb-16">
                <h4 className="text-4xl font-black italic uppercase tracking-tighter underline decoration-yellow-400">Crecimiento Histórico</h4>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">Data Source: Aluplak Financials</p>
              </div>
              <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} dy={15} fontWeight="bold" />
                    <YAxis hide />
                    <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none', borderRadius: '20px'}} />
                    <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={5} fill="#facc15" fillOpacity={0.05} />
                    <Bar dataKey="ebitda" barSize={50} fill="#1e293b" radius={[15, 15, 0, 0]} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-12">
              <h4 className="text-5xl font-black italic uppercase tracking-tighter leading-tight italic">Evolución <br /> del Capital.</h4>
              <p className="text-slate-400 font-light leading-relaxed text-lg">
                Nuestra trayectoria refleja una validación de mercado sin precedentes. Iniciamos 2022 con facturaciones de 47k€ para saltar a un récord histórico de 132k€ en 2025 (incremento del 50%).
              </p>
              <div className="space-y-6">
                {financialData.slice(-3).map((d, i) => (
                  <div key={i} className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-yellow-400 transition-colors">
                    <span className="text-slate-500 font-black uppercase text-[11px] tracking-widest">{d.year} Realizado</span>
                    <span className="text-3xl font-black italic group-hover:text-yellow-400 transition-colors">€{d.ventas.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <button className="w-full py-10 bg-white text-black font-black uppercase italic tracking-widest rounded-3xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-2xl">
                Ver Informe Auditoría
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="py-60 px-8 text-center bg-gradient-to-t from-yellow-400/20 to-transparent">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <h2 className="text-[10vw] lg:text-[14rem] font-black italic uppercase leading-[0.8] tracking-tighter">
            THE EXIT <br /> <span className="text-yellow-400">STARTS HERE.</span>
          </h2>
          <p className="text-4xl font-light text-slate-400 italic max-w-4xl mx-auto leading-tight">
            Estamos abriendo una ronda exclusiva para socios estratégicos que deseen escalar la tecnología Invisotherm a nivel mundial.
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-20">
            <button className="px-16 py-8 bg-yellow-400 text-black font-black uppercase italic tracking-[0.2em] text-xl rounded-full shadow-3xl hover:scale-110 transition-transform">
              Contactar Dirección
            </button>
          </div>
          <div className="mt-40 pt-20 border-t border-white/5 opacity-30 flex flex-col lg:flex-row justify-between items-center gap-10">
            <p className="text-xs font-black uppercase tracking-[0.5em]">ALUPLAK SYSTEM S.L • SPAIN • 2026</p>
            <div className="flex gap-12 text-[10px] font-bold uppercase tracking-widest">
              <span>Legal Notice</span>
              <span>Privacy Policy</span>
              <span>Financial Audit</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
