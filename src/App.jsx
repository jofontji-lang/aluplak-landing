import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import { motion } from "framer-motion";

const scenarios = {
  conservador: 180000,
  base: 220000,
  agresivo: 300000
};

export default function App() {
  const [scenario] = useState("base");

  const salesData = [
    { year: "2022", ventas: 47416, growth: 0 },
    { year: "2023", ventas: 71677, growth: 51 },
    { year: "2024", ventas: 88210, growth: 23 },
    { year: "2025", ventas: 132531, growth: 50 },
    { year: "2026", ventas: scenarios[scenario], growth: 66 }
  ];

  const roiData = [
    { year: "2023", value: 1.2 },
    { year: "2024", value: 1.8 },
    { year: "2025", value: 2.5 },
    { year: "2026", value: 3.5 }
  ];

  const ebitdaData = [
    { name: "Tradicional", value: 8 },
    { name: "Construcción", value: 12 },
    { name: "Clima", value: 15 },
    { name: "ALUPLAK", value: 28 }
  ];

  const laborData = [
    { name: "Tradicional", horas: 10 },
    { name: "Estándar", horas: 7 },
    { name: "ALUPLAK", horas: 2 }
  ];

  const energyData = [
    { name: "Radiadores", consumo: 100 },
    { name: "A/C", consumo: 75 },
    { name: "ALUPLAK", consumo: 55 }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      

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

           {/* Badge de ubicación */}
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Founded in Valencia • 30+ Countries</span>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic border-l-2 border-yellow-400 pl-6 text-left">
              "Compañía tecnológica especializada en el diseño y fabricación de soluciones innovadoras para <span className="text-white font-bold">zócalos y perfiles técnicos de aluminio</span>. Nuestra misión es transformar el concepto tradicional en un sistema inteligente, funcional y sostenible."
            </p>
          </div>
        </motion.div>
      </section>
      
      {/* HERO */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black mb-3">ALUPLAK SYSTEMS</h1>
        <p className="text-slate-400">
          Infraestructura térmica inteligente con escalabilidad industrial
        </p>
         <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed italic border-l-2 border-yellow-400 pl-6 text-left">
              "Nos diferenciamos por haber roto el paradigma del sector con un sistema bi-componente patentado. Nuestra tecnología permite que el rodapié sea completamente desmontable, facilitando el registro de instalaciones (cables, LED o tuberías) sin necesidad de realizar obras ni dañar las paredes de placa de yeso laminado."
            </p>
      </div>

      
{/* KPIs - MÁXIMO TAMAÑO Y CONTRASTE */}
<section className="max-w-7xl mx-auto px-6 mb-24">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      { label: "EBITDA", value: "28%", desc: "EFICIENCIA OPERATIVA" },
      { label: "ROI", value: "3.5x", desc: "RETORNO CAPITAL" },
      { label: "CRECIMIENTO", value: "+50%", desc: "ESCALABILIDAD YoY" },
      { label: "MARGEN", value: "65%", desc: "RENTABILIDAD PRODUCTO" }
    ].map((k, i) => (
      <div 
        key={i} 
        className="bg-[#0f172a] border-2 border-white/10 p-16 rounded-[3rem] flex flex-col items-center justify-center transition-all hover:border-yellow-400"
      >
        {/* Título del KPI - Más grande y blanco puro */}
        <div className="text-white text-2xl md:text-3xl font-black italic uppercase tracking-tighter mb-2">
          {k.label}
        </div>
        
        {/* Valor del KPI - Tamaño masivo */}
        <div className="text-8xl md:text-9xl font-black text-yellow-400 italic tracking-tighter leading-none my-4">
          {k.value}
        </div>
        
        {/* Subtítulo - Contraste sutil */}
        <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em] mt-2">
          {k.desc}
        </div>
      </div>
    ))}
  </div>
</section>


      {/* VENTAS */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Ventas (€)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid stroke="#1e293b" />
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="ventas" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Crecimiento acelerado con escalado industrial progresivo.
        </p>
      </div>

      {/* EBITDA */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">EBITDA vs Sector</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ebitdaData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Margen muy superior al sector industrial tradicional.
        </p>
      </div>

      {/* HORAS */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Horas de Montaje</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={laborData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="horas" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Reducción drástica del tiempo de instalación.
        </p>
      </div>

      {/* ENERGÍA */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Ahorro Energético</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={energyData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="consumo" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Reducción significativa del consumo energético.
        </p>
      </div>

      {/* ROI */}
      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">ROI</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={roiData}>
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line dataKey="value" stroke="#a855f7" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Multiplicación progresiva del capital invertido.
        </p>
      </div>

    </div>
  );
}
