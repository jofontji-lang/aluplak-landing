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

      {/* SECCIÓN DE APLICACIÓN REAL */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Casos de Éxito • Aplicación Real</span>
          </div>
          <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
            Soluciones Invisibles, <br />
            <span className="text-yellow-400">Impacto Visible.</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
            Nuestro sistema bi-componente patentado facilita la integración de iluminación LED y el registro de instalaciones sin necesidad de realizar obras. Eficiencia y diseño en un solo perfil.
          </p>
        </motion.div>

        {/* Columna de Imágenes */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border-2 border-white/10 group"
          >
              <img 
                  src="/public/Aluplak1.jpeg" 
                  alt="Aplicación Aluplak en pasillo" 
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
                  src="/public/Aluplak2.jpeg" 
                  alt="Detalle Aluplak en escalera" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIACIÓN */}
      <section className="max-w-4xl mx-auto px-6 my-20 text-center">
        <p className="text-lg text-slate-400 leading-relaxed italic">
          Nos diferenciamos por haber roto el paradigma del sector con un sistema bi-componente patentado. El rodapié es completamente desmontable, permitiendo mantenimiento y cambios sin tocar la pared.
        </p>
      </section>

      {/* KPIs */}
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

      {/* GRÁFICA DE VENTAS */}
      <section className="max-w-7xl mx-auto px-6 mb-10">
        <div className="bg-slate-900
