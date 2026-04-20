import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench, Zap } from 'lucide-react';

export default function App() {
  const salesData = [
    { year: '2022', ventas: 48000, crecimiento: '' }, { year: '2023', ventas: 72000, crecimiento: '+50%' },
    { year: '2024', ventas: 90000, crecimiento: '+25%' }, { year: '2025', ventas: 135000, crecimiento: '+50%' },
    { year: '2026', ventas: 220000, crecimiento: '+63%' }
  ];
  const ebitdaData = [{ name: "Tradicional", value: 8 }, { name: "Construcción", value: 12 }, { name: "Clima", value: 15 }, { name: "ALUPLAK", value: 28 }];
  const energyData = [{ name: "Radiadores", consumo: 100 }, { name: "A/C", consumo: 75 }, { name: "ALUPLAK", consumo: 55 }];
  const laborData = [{ name: "Tradicional", minutos: 45 }, { name: "ALUPLAK", minutos: 8 }];

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 font-sans">
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter italic leading-[0.8]">
            ALUPLAK <br /><span className="text-yellow-400 text-6xl md:text-8xl">SYSTEMS.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-slate-300 italic border-l-2 border-yellow-400 pl-6 text-left">
            "Compañía tecnológica especializada en el diseño y fabricación de soluciones innovadoras para zócalos y perfiles técnicos de aluminio."
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN IMÁGENES 1 y 2 */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-5xl font-black italic tracking-tighter leading-none">Soluciones Invisibles, <br /><span className="text-yellow-400">Impacto Visible.</span></h2>
          <p className="text-xl text-slate-300 border-l-2 border-yellow-400 pl-6">Sistema bi-componente patentado para integración de LED y registro de instalaciones.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[400px]">
          <div className="rounded-3xl overflow-hidden border-2 border-white/10"><img src="/Aluplak1.jpeg" className="w-full h-full object-cover" /></div>
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 mt-10"><img src="/Aluplak2.jpeg" className="w-full h-full object-cover" /></div>
        </div>
      </section>

      {/* SECCIÓN IMÁGENES 3 y 4 + MÉTRICA AHORRO TIEMPO */}
      <section className="max-w-7xl mx-auto px-6 my-24 border-t border-white/5 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="rounded-3xl overflow-hidden border-2 border-white/10 mt-10"><img src="/Aluplak4.jpg" className="w-full h-full object-cover" /></div>
            <div className="rounded-3xl overflow-hidden border-2 border-white/10"><img src="/Aluplak3.jpeg" className="w-full h-full object-cover" /></div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full text-yellow-400 text-xs font-black uppercase">Validación de Montaje</div>
            <h2 className="text-5xl font-black italic tracking-tighter leading-none">Montaje en Seco, <br /><span className="text-yellow-400">Eficiencia Pura.</span></h2>
            <p className="text-xl text-slate-300 border-l-2 border-yellow-400 pl-6">Fijación mediante adhesivo y clipado mecánico. Eliminamos las rozas y el polvo.</p>
          </div>
        </div>

        {/* MÉTRICA AHORRO TIEMPO */}
        <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
          <div className="flex items-center gap-4 mb-6"><Zap className="text-yellow-400" /><h3 className="text-xl font-black text-white italic uppercase">Ahorro en Tiempo de Montaje</h3></div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborData} layout="vertical" margin={{ right: 60 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={100} axisLine={false} tickLine={false} />
                <Bar dataKey="minutos" fill="#facc15" radius={[0, 10, 10, 0]}><LabelList dataKey="minutos" position="right" fill="#fff" formatter={(v) => `${v} min/m`} /></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{ l: "EBITDA", v: "28%" }, { l: "ROI", v: "3.5x" }, { l: "GROWTH", v: "+50%" }, { l: "MARGIN", v: "65%" }].map((k, i) => (
          <div key={i} className="bg-[#0f172a] border border-white/10 p-8 rounded-3xl text-center">
            <div className="text-white text-xs font-black italic mb-2">{k.l}</div>
            <div className="text-4xl font-black text-yellow-400 italic">{k.v}</div>
          </div>
        ))}
      </section>

      {/* GRÁFICAS FINALES */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="bg-slate-900/50 border border-white/10 p-8 rounded-[2.5rem]">
          <h2 className="text-2xl font-black italic mb-8 uppercase">Ventas Proyectadas (€)</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}><LabelList dataKey="crecimiento" position="insideTop" fill="#000" fontWeight="900" /></Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-white/5 h-[250px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">EBITDA vs Sector (%)</h3>
            <ResponsiveContainer><BarChart data={ebitdaData}><XAxis dataKey="name" fontSize={10}/><Bar dataKey="value" fill="#22c55e" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-[2rem] border border-white/5 h-[250px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-4">Ahorro Energético (%)</h3>
            <ResponsiveContainer><BarChart data={energyData}><XAxis dataKey="name" fontSize={10}/><Bar dataKey="consumo" fill="#facc15" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
