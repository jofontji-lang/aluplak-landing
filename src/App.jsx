import React from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, LabelList, AreaChart, Area, PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, Radar
} from "recharts";
import { motion } from "framer-motion";
import { 
  DollarSign, TrendingUp, BarChart3, PieChart as PieIcon, Wrench, 
  Zap, Flame, ShieldCheck, Globe, Layout, Target, Award, 
  Users, Lightbulb, ChevronRight, Activity, Eye, MousePointer2
} from 'lucide-react';

export default function App() {
  // --- DATOS DEL DOSSIER ---
  const salesHistory = [
    { year: '2022', ventas: 47416, label: 'Fase 1' }, 
    { year: '2023', ventas: 71677, label: '+51%' },
    { year: '2024', ventas: 88210, label: '+23%' }, 
    { year: '2025', ventas: 132531, label: 'Récord' }, 
    { year: '2026', ventas: 220000, label: 'Proyectado' }
  ];

  const productPerformance = [
    { subject: 'Eficiencia', A: 120, fullMark: 150 },
    { subject: 'Instalación', A: 150, fullMark: 150 },
    { subject: 'Margen', A: 140, fullMark: 150 },
    { subject: 'Estética', A: 130, fullMark: 150 },
    { subject: 'Versatilidad', A: 110, fullMark: 150 },
  ];

  const pieData = [
    { name: 'Margen Aluplak', value: 78, color: '#facc15' },
    { name: 'Coste Op.', value: 22, color: '#1e293b' },
  ];

  const laborData = [
    { name: "Obra Tradicional", tiempo: 45, color: '#475569' },
    { name: "Sistema ALUPLAK", tiempo: 8, color: '#facc15' }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-32 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- CABECERA ESTRATÉGICA --- */}
      <nav className="fixed top-0 w-full z-[100] bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Activity size={18} className="text-black" />
          </div>
          <span className="font-black italic text-2xl tracking-tighter uppercase">ALUPLAK<span className="text-yellow-400">.</span>SYSTEMS</span>
        </div>
        <div className="hidden lg:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <span className="text-yellow-400">Investor Portal 2026</span>
          <span className="hover:text-white cursor-pointer transition-colors">Tecnología</span>
          <span className="hover:text-white cursor-pointer transition-colors">Mercado</span>
          <span className="hover:text-white cursor-pointer transition-colors">Finanzas</span>
        </div>
        <button className="bg-white text-black px-7 py-2.5 rounded-full font-black text-[11px] uppercase tracking-widest hover:bg-yellow-400 transition-all active:scale-95 shadow-lg shadow-white/5">
          Descargar Dossier Full PDF
        </button>
      </nav>

      {/* --- HERO: EL CAMBIO DE PARADIGMA --- */}
      <section className="relative pt-60 pb-40 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-full bg-[radial-gradient(circle_at_center,_rgba(250,204,21,0.15)_0%,transparent_70%)] opacity-40" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/30 px-5 py-2 rounded-full mb-10">
            <Globe size={16} className="text-yellow-400 animate-pulse" />
            <span className="text-[12px] font-black uppercase tracking-[0.3em] text-yellow-400">Valencia • España • +30 Países</span>
          </div>
          
          <h1 className="text-[10vw] lg:text-[13rem] font-black mb-12 tracking-tighter italic leading-[0.7] uppercase">
            ACTIVE <br /><span className="text-yellow-400">SURFACES.</span>
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-20 mt-24 items-start">
            <div className="relative">
              <div className="absolute -left-10 top-0 w-1 h-full bg-yellow-400" />
              <p className="text-3xl md:text-5xl font-light text-slate-200 italic leading-tight">
                "Hemos convertido elementos <span className="text-white font-bold">arquitectónicos pasivos</span> en sistemas activos de alta eficiencia."
              </p>
            </div>
            <div className="space-y-8 text-xl text-slate-400 font-light leading-relaxed">
              <p>
                Desde 2021, Aluplak ha transformado el sector de los perfiles técnicos. No somos solo fabricantes de zócalos; somos la 
                <strong> única compañía que integra alta decoración con nanotecnología térmica</strong>.
              </p>
              <div className="flex gap-12 pt-6">
                <div>
                  <p className="text-5xl font-black text-white italic">28%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mt-2">EBITDA Objetivo</p>
                </div>
                <div>
                  <p className="text-5xl font-black text-white italic">70%</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mt-2">Margen Producto</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN INVISOTHERM: LA OBRA MAESTRA --- */}
      <section className="py-40 bg-white/5 border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <div className="space-y-4">
                <span className="text-yellow-400 font-black tracking-[0.4em] uppercase text-xs">Flagship Product</span>
                <h2 className="text-7xl lg:text-9xl font-black italic tracking-tighter leading-none">
                  INVISO<span className="text-yellow-400">THERM</span>
                </h2>
                <h3 className="text-3xl font-bold text-slate-200 italic">Climatización Invisible de Vanguardia.</h3>
              </div>

              <div className="prose prose-invert prose-xl text-slate-400 font-light max-w-none">
                <p>
                  Se trata del <strong>primer panel constructivo calefactable de una sola pieza</strong> del mercado. Fabricado en Pladur o Fibrocemento de 13 mm con nanotecnología térmica integrada.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-black/40 p-8 rounded-3xl border border-white/10 group hover:border-yellow-400 transition-colors">
                    <Flame className="text-yellow-400 mb-4" size={32} />
                    <h4 className="text-white font-black uppercase text-sm mb-2">14m² de Alcance</h4>
                    <p className="text-xs leading-relaxed">Capacidad de climatizar grandes superficies mediante radiación homogénea desde la estructura.</p>
                  </div>
                  <div className="bg-black/40 p-8 rounded-3xl border border-white/10 group hover:border-yellow-400 transition-colors">
                    <Zap className="text-yellow-400 mb-4" size={32} />
                    <h4 className="text-white font-black uppercase text-sm mb-2">Eliminación Total</h4>
                    <p className="text-xs leading-relaxed">Suprime radiadores tradicionales, liberando espacio y mejorando la estética del proyecto inmobiliario.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.div whileHover={{ y: -10 }} className="space-y-6">
                  <div className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/20 shadow-2xl">
                    <img src="/Aluplak5.jpeg" className="w-full h-80 object-cover" alt="Detalle panel" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border-2 border-white/10">
                    <img src="/Aluplak7.jpeg" className="w-full h-80 object-cover" alt="Instalación" />
                  </div>
                </motion.div>
                <motion.div whileHover={{ y: 10 }} className="space-y-6 mt-16">
                  <div className="rounded-[2.5rem] overflow-hidden border-2 border-white/10">
                    <img src="/Aluplak6.jpeg" className="w-full h-80 object-cover" alt="Acabado" />
                  </div>
                  <div className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/20 shadow-2xl">
                    <img src="/Aluplak8.jpeg" className="w-full h-80 object-cover" alt="Tecnología" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MÉTRICAS DE MERCADO Y PERFORMANCE --- */}
      <section className="py-40 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Gráfico de Radar: Atributos */}
          <div className="bg-slate-900/50 p-12 rounded-[3rem] border border-white/5 space-y-8">
            <h4 className="text-white font-black italic uppercase text-lg tracking-tighter">Superioridad Técnica</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={productPerformance}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <Radar name="Aluplak" dataKey="A" stroke="#facc15" fill="#facc15" fillOpacity={0.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 italic leading-relaxed text-center">
              "Validación técnica basada en la conductividad del aluminio y facilidad de registro bi-componente."
            </p>
          </div>

          {/* Gráfico de Barras: Tiempos de Instalación */}
          <div className="bg-slate-900/50 p-12 rounded-[3rem] border border-white/5 space-y-8">
            <h4 className="text-white font-black italic uppercase text-lg tracking-tighter">Optimización de Obra</h4>
            <div className="h-64 flex flex-col justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={laborData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={10} width={100} axisLine={false} tickLine={false} />
                  <Bar dataKey="tiempo" radius={[0, 10, 10, 0]}>
                    {laborData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    <LabelList dataKey="tiempo" position="right" fill="#fff" formatter={(v) => `${v} min`} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3">
               <div className="flex justify-between text-xs font-bold uppercase tracking-widest"><span className="text-slate-500">Ahorro Tiempo:</span> <span className="text-yellow-400">82.2%</span></div>
               <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-yellow-400" />
               </div>
            </div>
          </div>

          {/* Margen de Beneficio */}
          <div className="bg-yellow-400 p-12 rounded-[3rem] text-black space-y-8 relative overflow-hidden">
            <PieIcon size={120} className="absolute -right-10 -bottom-10 opacity-10 rotate-12" />
            <h4 className="font-black italic uppercase text-lg tracking-tighter">Rentabilidad por Unidad</h4>
            <div className="h-64 flex flex-col items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color === '#facc15' ? '#000' : '#fef08a'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-4">
                <p className="text-6xl font-black italic tracking-tighter">78%</p>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Margen Comercial</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECCIÓN: ZÓCALO TÉCNICO (DETALLE BI-COMPONENTE) --- */}
      <section className="py-40 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32 items-center">
        <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 h-[600px]">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover rounded-[3rem] border border-white/10" alt="Aluplak 1" />
          <img src="/Aluplak2.jpeg" className="w-full h-full object-cover rounded-[3rem] border border-white/10 mt-20" alt="Aluplak 2" />
          <img src="/Aluplak3.jpeg" className="w-full h-full object-cover rounded-[3rem] border border-white/10 -mt-20 shadow-2xl" alt="Aluplak 3" />
          <img src="/Aluplak4.jpg" className="w-full h-full object-cover rounded-[3rem] border border-white/10" alt="Aluplak 4" />
        </div>

        <div className="order-1 lg:order-2 space-y-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-5 py-2 rounded-full">
            <ShieldCheck size={16} className="text-blue-400" />
            <span className="text-[12px] font-black uppercase tracking-widest text-blue-400">Patente Bi-Componente</span>
          </div>
          <h2 className="text-6xl font-black italic tracking-tighter leading-none">
            ZÓCALOS QUE <br /><span className="text-yellow-400">RESPIRAN.</span>
          </h2>
          <div className="space-y-8 text-xl text-slate-300 font-light leading-relaxed">
            <p className="border-l-4 border-yellow-400 pl-8">
              "Nuestra tecnología permite que el rodapié sea <strong>completamente desmontable</strong>, facilitando el registro de instalaciones sin necesidad de realizar obras ni dañar las paredes."
            </p>
            <div className="grid grid-cols-1 gap-4">
              {[
                { t: "Registro LED", d: "Instalación de luz indirecta de forma nativa." },
                { t: "Barrera Térmica", d: "Crea un perímetro protector contra la condensación." },
                { t: "Montaje Mecánico", d: "Fijación por clipado de alta resistencia." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                  <ChevronRight className="text-yellow-400 shrink-0" />
                  <p className="text-sm"><strong className="text-white uppercase tracking-tighter">{item.t}:</strong> {item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINANZAS Y ESCALABILIDAD 2026 --- */}
      <section className="py-40 bg-gradient-to-t from-black to-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <div className="space-y-4">
              <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
                Finanzas & <br /><span className="text-yellow-400">Crecimiento.</span>
              </h2>
              <p className="text-slate-500 italic max-w-xl">
                Proyección de facturación basada en la nueva tarifa de industriales y la expansión de la red logística en Europa y América.
              </p>
            </div>
            <div className="bg-slate-900 p-8 rounded-3xl border border-white/10 flex gap-12">
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">Growth 26</p>
                <p className="text-4xl font-black text-yellow-400">+66%</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">ROI</p>
                <p className="text-4xl font-black text-white">3.5x</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/40 p-12 rounded-[4rem] border border-white/10 backdrop-blur-3xl shadow-2xl">
            <div className="h-[450px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesHistory} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
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
                    itemStyle={{ color: '#facc15', fontWeight: 'bold' }}
                  />
                  <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                  <Bar dataKey="ventas" fill="transparent">
                    <LabelList dataKey="label" position="top" fill="#facc15" fontSize={10} fontWeight="black" dy={-10} />
                  </Bar>
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
              {[
                { l: "2022", v: "47.416€", d: "Penetración de mercado." },
                { l: "2023", v: "71.677€", d: "Consolidación nacional." },
                { l: "2024", v: "88.210€", d: "Expansión Industrial." },
                { l: "2026 Proj", v: "220.000€", d: "Efecto Invisotherm." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-black uppercase text-yellow-400 tracking-widest">{item.l}</p>
                  <p className="text-2xl font-black text-white italic">{item.v}</p>
                  <p className="text-xs text-slate-500">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER INVERSOR --- */}
      <footer className="max-w-7xl mx-auto px-6 pt-40 text-center">
        <div className="bg-yellow-400 p-20 rounded-[4rem] text-black space-y-10 shadow-[0_0_100px_rgba(250,204,21,0.2)]">
          <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none">
            ¿LISTO PARA <br />LA REVOLUCIÓN?
          </h2>
          <p className="text-xl font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto opacity-70">
            Únete a la compañía que está redefiniendo el confort térmico en la arquitectura moderna.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-black text-white px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:scale-105 transition-all shadow-xl">Contactar con RRII</button>
            <button className="bg-transparent border-2 border-black text-black px-12 py-5 rounded-full font-black uppercase italic tracking-widest hover:bg-black hover:text-white transition-all">Ver Roadmap 2027</button>
          </div>
        </div>
        <p className="mt-20 text-slate-600 text-[10px] font-bold uppercase tracking-[0.5em]">
          © 2026 ALUPLAK SKIRTING BOARD S.L • Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
