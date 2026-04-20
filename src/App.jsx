import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  CartesianGrid, LabelList
} from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench, Zap } from 'lucide-react';

export default function App() {
  const salesData = [
    { year: '2022', ventas: 48000, crecimiento: '' },
    { year: '2023', ventas: 72000, crecimiento: '+50%' },
    { year: '2024', ventas: 90000, crecimiento: '+25%' },
    { year: '2025', ventas: 135000, crecimiento: '+50%' },
    { year: '2026', ventas: 220000, crecimiento: '+63%' },
  ];

  const ebitdaData = [
    { name: "Tradicional", value: 8 },
    { name: "Construcción", value: 12 },
    { name: "Clima", value: 15 },
    { name: "ALUPLAK", value: 28 }
  ];

  const energyData = [
    { name: "Radiadores", consumo: 100 },
    { name: "A/C", consumo: 75 },
    { name: "ALUPLAK", consumo: 55 }
  ];

  const laborData = [
    { name: "Tradicional (Obra)", minutos: 45 },
    { name: "ALUPLAK (Adhesivo)", minutos: 8 }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 font-sans">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white italic leading-[0.8]">
            ALUPLAK <br /><span className="text-yellow-400 text-6xl md:text-8xl">SYSTEMS.</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Founded in Valencia • 30+ Countries</span>
          </div>

          <div className="max-w-3xl mx-auto px-6">
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic border-l-2 border-yellow-400 pl-6 text-left">
              "Compañía tecnológica especializada en el diseño y fabricación de soluciones innovadoras para <span className="text-white font-bold">zócalos y perfiles técnicos de aluminio</span>. Nuestra misión es transformar el concepto tradicional en un sistema inteligente, funcional y sostenible."
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN 1: APLICACIÓN REAL (Aluplak1 y Aluplak2) */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Casos de Éxito • Aplicación Real</span>
          </div>
          <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
            Soluciones Invisibles, <br />
            <span className="text-yellow-400">Impacto Visible.</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
            Nuestro sistema bi-componente patentado facilita la integración de iluminación LED y el registro de instalaciones sin necesidad de realizar obras.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 group">
              <img src="/Aluplak1.jpeg" alt="Instalación 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 group mt-10">
              <img src="/Aluplak2.jpeg" alt="Instalación 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: VALIDACIÓN TÉCNICA (Aluplak3 y Aluplak4) */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-24">
        <div className="grid grid-cols-2 gap-4 h-[500px] order-2 md:order-1">
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 group mt-10">
              <img src="/Aluplak4.jpg" alt="Instalación 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 group">
              <img src="/Aluplak3.jpeg" alt="Instalación 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 order-1 md:order-2">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <Wrench size={14} className="text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Validación de Montaje</span>
          </div>
          <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
            Montaje en Seco, <br />
            <span className="text-yellow-400">Eficiencia Pura.</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
            Fijación mediante adhesivo y clipado mecánico. Eliminamos las rozas, el polvo y reducimos drásticamente los costes de mano de obra.
          </p>
        </motion.div>
      </section>

      {/* MÉTRICA: AHORRO COSTES DE MONTAJE */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-slate-900/50 p-10 rounded-[2rem] border border-white/5 shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="text-yellow-400" />
            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Impacto en Costes de Montaje</h3>
          </div>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborData} layout="vertical" margin={{ right: 80 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={150} axisLine={false} tickLine={false} />
                <Bar dataKey="minutos" fill="#60a5fa" radius={[0, 10, 10, 0]}>
                  <LabelList dataKey="minutos" position="right" fill="#fff" formatter={(v) => `${v} min / m`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-yellow-400 font-bold mt-4 text-center">Ahorro superior al 80% en tiempo de ejecución frente a obra tradicional.</p>
        </div>
      </section>

      {/* KPIs */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { label: "EBITDA", value: "28%", icon: <DollarSign size={40}/> },
          { label: "ROI", value: "3.5x", icon: <TrendingUp size={40}/> },
          { label: "CRECIMIENTO", value: "+50%", icon: <BarChart3 size={40}/> },
          { label: "MARGEN", value: "65%", icon: <PieChart size={40}/> }
        ].map((k, i) => (
          <div key={i} className="bg-[#0f172a] border-2 border-white/10 p-12 rounded-[3rem] flex flex-col items-center group hover:border-yellow-400 transition-colors">
            <div className="text-yellow-400 mb-4 opacity-50 group-hover:opacity-100">{k.icon}</div>
            <div className="text-white text-2xl font-black italic uppercase">{k.label}</div>
            <div className="text-8xl font-black text-yellow-400 italic my-4">{k.value}</div>
          </div>
        ))}
      </section>

      {/* GRÁFICAS FINALES (Ventas, EBITDA y Energía) */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="bg-slate-900/50 border border-white/10 p-8 rounded-[2.5rem]">
          <h2 className="text-2xl font-black text-white italic mb-8 uppercase tracking-tighter">Ventas Proyectadas (€)</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" axisLine={false} />
                <YAxis stroke="#94a3b8" axisLine={false} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}>
                  <LabelList dataKey="crecimiento" position="insideTop" fill="#000" fontWeight="900" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 h-[250px]">
            <h3 className="font-bold mb-4 text-slate-400 uppercase text-xs">EBITDA vs Sector (%)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={ebitdaData}><XAxis dataKey="name" stroke="#64748b" fontSize={10} /><Bar dataKey="value" fill="#22c55e" radius={[4,4,0,0]} /></BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 h-[250px]">
            <h3 className="font-bold mb-4 text-slate-400 uppercase text-xs">Ahorro Energético (%)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={energyData}><XAxis dataKey="name" stroke="#64748b" fontSize={10} /><Bar dataKey="consumo" fill="#facc15" radius={[4,4,0,0]} /></BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
