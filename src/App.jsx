import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  AreaChart, Area, Cell
} from "recharts";
import { motion } from "framer-motion";
import { 
  Zap, Clock, ArrowUpRight, ShieldCheck, Cpu 
} from "lucide-react";

// 1. DATOS (Fuera del componente para evitar re-renderizados innecesarios)
const financialData = {
  historico: [
    { year: "2022", ventas: 47416 },
    { year: "2023", ventas: 71677 },
    { year: "2024", ventas: 88210 },
    { year: "2025", ventas: 132531 },
    { year: "2026", ventas: 220000 }
  ],
  margenes: [
    { name: "Aluplak Tech", valor: 78, color: "#facc15" }, 
    { name: "Invisotherm", valor: 65, color: "#eab308" },
    { name: "Media Sector", valor: 28, color: "#334155" }
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

      {/* HERO */}
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
                Nanotecnología térmica integrada en elementos constructivos. 
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

      {/* SECCIÓN FINANCIERA (CON ROI INTEGRADO) */}
      <section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <SectionTitle title="Métricas de Inversión" subtitle="Rentabilidad Proyectada" />
        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[3rem]">
            <h3 className="text-white font-black italic mb-8 uppercase tracking-tighter">Proyección de Ventas (€)</h3>
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
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '16px'}} />
                  <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={4} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-10 rounded-[3rem] flex flex-col justify-between">
            <div>
              <div className="bg-black/10 w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6">Profitability</div>
              <h3 className="text-7xl font-black italic tracking-tighter mb-2">3.5x</h3>
              <p className="text-xl font-black uppercase italic mb-6">ROI Estimado</p>
              <p className="text-sm font-bold leading-tight italic">Basado en la reducción del 80% en costes de instalación y escalabilidad industrial.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-black/10">
              <div className="flex justify-between items-center mb-2 text-[10px] font-black uppercase">
                <span>Estado: Consolidación</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-black/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-black h-full w-[65%]"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#0f172a] border border-white/10 p-10 rounded-[3rem]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialData.margenes} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11, fontWeight: 'bold'}} width={100} />
                    <Bar dataKey="valor" radius={[0, 10, 10, 0]} barSize={35}>
                      {financialData.margenes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-2xl font-black italic text-white uppercase mb-4 tracking-tighter">Ventaja en Margen Bruto</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  La integración vertical nos permite márgenes del <span className="text-yellow-400 font-bold">78%</span>, superando ampliamente el 28% de los fabricantes tradicionales de perfiles.
                </p>
                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-yellow-400 border border-yellow-400/20">PATENTED TECH</div>
                  <div className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-black text-yellow-400 border border-yellow-400/20">DIRECT-TO-PROMOTER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS Y CERTIFICACIONES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Prueba de Concepto" subtitle="Tecnología en Acción" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
              <div className="aspect-video bg-black">
                <video controls className="w-full h-full object-cover" poster="/Aluplak5.jpeg">
                  <source src="/AluplakVideo2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black italic text-white uppercase mb-4">Instalación Dry-Wall</h3>
                <div className="flex items-
