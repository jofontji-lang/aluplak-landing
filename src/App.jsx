import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, LabelList
} from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart } from 'lucide-react';

export default function App() {
  const salesData = [
    { year: '2022', ventas: 48000, crecimiento: '' },
    { year: '2023', ventas: 72000, crecimiento: '+50%' },
    { year: '2024', ventas: 90000, crecimiento: '+25%' },
    { year: '2025', ventas: 135000, crecimiento: '+50%' },
    { year: '2026', ventas: 220000, crecimiento: '+63%' },
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
    <div className="min-h-screen bg-[#020617] text-white pb-20">

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

      {/* SECCIÓN DE APLICACIÓN REAL */}
<section className="max-w-7xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-12 items-center">
  
  {/* Columna de Texto */}
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="space-y-6"
  >
    <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Casos de Éxito • Aplicación Residencial y Comercial</span>
    </div>
    <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
      Soluciones Invisibles, <br />
      <span className="text-yellow-400">Impacto Visible.</span>
    </div>
    <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
      Nuestro sistema bi-componente patentado no es solo teoría. Estas imágenes muestran la integración real de nuestros rodapiés técnicos en proyectos de alto nivel, facilitando la iluminación LED y el registro de instalaciones sin obras.
    </p>
  </motion.div>

  {/* Columna de Imágenes (Estilo Mosaico Elegante) */}
  <div className="grid grid-cols-2 gap-4 h-[500px]">
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border-2 border-white/10 group"
    >
        <img 
            src="/Aluplak1.jpeg" 
            alt="Aplicación Aluplak en pasillo con iluminación LED" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
    </motion.div>
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl overflow-hidden border-2 border-white/10 group mt-10"
    >
        <img 
            src="/Aluplak2.jpeg" 
            alt="Detalle Aluplak en escalera con barandilla de cristal" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
    </motion.div>
  </div>
</section>
      
      {/* DIFERENCIACIÓN */}
      <section className="max-w-4xl mx-auto px-6 my-20 text-center">
        <p className="text-lg text-slate-400 leading-relaxed">
          Nos diferenciamos por haber roto el paradigma del sector con un sistema bi-componente patentado. Nuestra tecnología permite que el rodapié sea completamente desmontable, facilitando el registro de instalaciones sin necesidad de obras.
        </p>
      </section>

      {/* KPIs - 2x2 MASIVO */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: "EBITDA", value: "28%", desc: "EFICIENCIA OPERATIVA", icon: <DollarSign size={40}/> },
            { label: "ROI", value: "3.5x", desc: "RETORNO CAPITAL", icon: <TrendingUp size={40}/> },
            { label: "CRECIMIENTO", value: "+50%", desc: "ESCALABILIDAD YoY", icon: <BarChart3 size={40}/> },
            { label: "MARGEN", value: "65%", desc: "RENTABILIDAD PRODUCTO", icon: <PieChart size={40}/> }
          ].map((k, i) => (
            <div key={i} className="bg-[#0f172a] border-2 border-white/10 p-16 rounded-[3rem] flex flex-col items-center justify-center transition-all hover:border-yellow-400 group">
              <div className="text-yellow-400 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{k.icon}</div>
              <div className="text-white text-2xl md:text-3xl font-black italic uppercase mb-2">{k.label}</div>
              <div className="text-8xl md:text-9xl font-black text-yellow-400 italic leading-none my-4">{k.value}</div>
              <div className="text-slate-500 text-xs font-bold tracking-[0.4em]">{k.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GRÁFICA DE VENTAS CON PORCENTAJES */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="bg-slate-900/50 border border-white/10 p-8 rounded-[2.5rem]">
          <h2 className="text-2xl font-black text-white italic mb-8 uppercase">Ventas Proyectadas (€)</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={salesData} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="year" stroke="#94a3b8" tickLine={false} axisLine={false} dy={10} />
              <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
              <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }} />
              <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}>
                <LabelList dataKey="crecimiento" position="insideTop" fill="#000000" fontSize={22} fontWeight="900" offset={15} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* OTRAS MÉTRICAS */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* EBITDA COMPARATIVO */}
        <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
          <h3 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-sm">EBITDA vs Sector</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={ebitdaData}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
              <Bar dataKey="value" fill="#22c55e" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AHORRO ENERGÉTICO */}
        <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
          <h3 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-sm">Ahorro Energético (%)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={energyData}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
              <Bar dataKey="consumo" fill="#facc15" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

    </div>
  );
}
