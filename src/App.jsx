import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  AreaChart, Area, Cell, PieChart, Pie
} from "recharts";
import { motion } from "framer-motion";
import { 
  Zap, Clock, ArrowUpRight, ShieldCheck, Cpu, TrendingUp, Target, Globe 
} from "lucide-react";

// 1. DATOS FINANCIEROS (Extraídos del histórico real)
const financialData = {
  historico: [
    { year: "2022", ventas: 47416 },
    { year: "2023", ventas: 71677 },
    { year: "2024", ventas: 88210 },
    { year: "2025", ventas: 132531 },
    { year: "2026", ventas: 220000 } // Proyección basada en lanzamiento Invisotherm
  ],
  margenes: [
    { name: "Aluplak Tech", valor: 78, color: "#facc15" }, 
    { name: "Invisotherm", valor: 65, color: "#eab308" },
    { name: "Media Sector", valor: 28, color: "#334155" }
  ],
  roiGauge: [
    { name: "Progreso", value: 85, fill: "#facc15" },
    { name: "Restante", value: 15, fill: "#1e293b" }
  ]
};

// 2. COMPONENTES AUXILIARES
const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">{title}</h2>
    <p className="text-yellow-400 font-bold tracking-widest text-xs uppercase mt-2">{subtitle}</p>
  </div>
);

// 3. COMPONENTE PRINCIPAL
export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* NAVEGACIÓN */}
      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="font-black italic text-2xl tracking-tighter text-white">ALUPLAK<span className="text-yellow-400">.</span></div>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-yellow-400 transition">Tecnología</a>
            <a href="#finanzas" className="hover:text-yellow-400 transition">Inversión</a>
            <a href="#eficiencia" className="hover:text-yellow-400 transition">Eficiencia</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
            Dossier 2026
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale" src="/AluplakVideo1.mp4" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 text-yellow-400 mb-6">
              <ShieldCheck size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-xs">Tecnología Patentada</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white italic leading-[0.85]">
              CLIMATIZACIÓN <br /><span className="text-yellow-400">INVISIBLE.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                Nanotecnología térmica integrada en elementos constructivos de solo <span className="text-white font-bold">1mm de espesor</span>. 
                <span className="text-white font-bold block mt-2">Patente Europea e Internacional.</span>
              </p>
              <div className="flex gap-4">
                <img src="/Aluplak1.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech" />
                <img src="/Aluplak2.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN FINANCIERA CON GRÁFICOS */}
      <section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <SectionTitle title="Métricas de Inversión" subtitle="Rentabilidad y Crecimiento" />
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Gráfico de Ventas Histórico */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[3rem]">
            <h3 className="text-white font-black italic mb-8 uppercase tracking-tighter flex items-center gap-2">
              <TrendingUp size={20} className="text-yellow-400" /> Evolución de Facturación (€)
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financialData.historico}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis hide domain={[0, 250000]} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '16px'}}
                    itemStyle={{color: '#facc15', fontWeight: 'bold'}}
                  />
                  <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={4} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* GRÁFICO DE ROI (Gauge Chart) */}
          <div className="bg-yellow-400 text-black p-10 rounded-[3rem] flex flex-col items-center justify-between relative overflow-hidden">
            <div className="text-center z-10 w-full">
              <div className="bg-black/10 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6 mx-auto">Investment Yield</div>
              <h3 className="text-7xl font-black italic tracking-tighter mb-1">3.5x</h3>
              <p className="text-xs font-black uppercase tracking-[0.2em] italic opacity-80">ROI Estimado 24m</p>
            </div>

            {/* Gauge Visual */}
            <div className="w-full h-40 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialData.roiGauge}
                    cx="50%" cy="100%" 
                    startAngle={180} endAngle={0} 
                    innerRadius={60} outerRadius={80} 
                    paddingAngle={0} dataKey="value"
                    stroke="none"
                  >
                    {financialData.roiGauge.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-2 text-[10px] font-black uppercase opacity-60">Break-even: Q2 2026</div>
            </div>

            <div className="z-10 text-center w-full pt-6 border-t border-black/10">
              <p className="text-[11px] font-bold leading-tight uppercase italic">
                Escalabilidad Industrial <br/> + Alta Demanda en Sector Lujo
              </p>
            </div>
          </div>

          {/* Comparativa de Márgenes */}
          <div className="lg:col-span-3 bg-[#0f172a] border border-white/10 p-10 rounded-[3rem]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialData.margenes} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} width={100} />
                    <Bar dataKey="valor" radius={[0, 10, 10, 0]} barSize={30}>
                      {financialData.margenes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="text-yellow-400" size={24} />
                  <h4 className="text-2xl font-black italic text-white uppercase tracking-tighter">Superioridad Operativa</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Nuestra integración vertical permite márgenes del <span className="text-yellow-400 font-bold">78%</span>. 
                  Al eliminar radiadores y tuberías, capturamos el valor total del sistema de climatización.
                </p>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black text-yellow-400 border border-yellow-400/20 uppercase tracking-widest">EBITDA +</div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black text-slate-400 border border-white/10 uppercase tracking-widest">Global IP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRODUCTO Y VIDEO */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Prueba de Concepto" subtitle="Tecnología Certificada" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
              <div className="aspect-video rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 relative">
                <video controls className="w-full h-full object-cover" poster="/Aluplak5.jpeg">
                  <source src="/AluplakVideo2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h4 className="text-white font-black italic uppercase text-xl">Instalación Dry-Wall</h4>
                  <p className="text-slate-500 text-sm">Integración perfecta en sistemas de placa de yeso.</p>
                </div>
                <div className="bg-blue-500/10 text-blue-400 p-2 rounded-lg border border-blue-400/20">
                  <ShieldCheck size={20} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Aluplak7.jpeg" className="rounded-3xl h-full w-full object-cover border border-white/5" alt="Detail" />
              <img src="/Aluplak8.jpeg" className="rounded-3xl h-full w-full object-cover border border-white/5" alt="Detail" />
            </div>
          </div>
        </div>
      </section>

      {/* EFICIENCIA EXTREMA */}
      <section id="eficiencia" className="bg-white px-6 py-32 text-black">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <SectionTitle title="Eficiencia Radical" subtitle="Sostenibilidad Activa" />
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="bg-black text-yellow-400 p-4 rounded-2xl shrink-0"><Zap size={32} /></div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase">Bajo Consumo Energético</h4>
                  <p className="text-slate-600">Emisividad térmica optimizada que reduce el consumo un 30% frente a convectores eléctricos tradicionales.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="bg-black text-white p-4 rounded-2xl shrink-0"><Clock size={32} /></div>
                <div>
                  <h4 className="text-2xl font-black italic uppercase">Zero Mantenimiento</h4>
                  <p className="text-slate-600">Sin fluidos, sin calderas, sin ruidos. Sistema sólido con vida útil superior a 25 años.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="/Aluplak6.jpeg" className="rounded-[4rem] shadow-2xl" alt="Product efficiency" />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-8 rounded-3xl shadow-xl max-w-[200px]">
               <p className="text-4xl font-black italic leading-none">1mm</p>
               <p className="text-[10px] font-black uppercase tracking-tighter mt-2">Grosor de la placa de calefacción</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-2">
          <div className="font-black italic text-3xl text-white">ALUPLAK<span className="text-yellow-400">.</span></div>
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest tracking-tighter flex items-center gap-2">
            <Globe size={12} /> Presencia en +30 países
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-black uppercase text-[10px] hover:bg-white hover:text-black transition-all">
            Descargar Ficha Técnica
          </button>
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] hover:scale-105 transition-transform shadow-lg shadow-yellow-400/20">
            Contactar Fundadores
          </button>
        </div>
      </footer>
    </div>
  );
}
