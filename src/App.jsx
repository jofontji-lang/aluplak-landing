import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, LabelList
} from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench } from 'lucide-react';

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

      {/* SECCIÓN DE APLICACIÓN REAL (ORIGINAL) */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center">
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

        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border-2 border-white/10 group"
          >
              <img 
                  src="/Aluplak1.jpeg" 
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
                  src="/Aluplak2.jpeg" 
                  alt="Detalle Aluplak en escalera" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
          </motion.div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: VALIDACIÓN DE INSTALACIÓN (AÑADIDA) */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center border-t border-white/5 pt-24">
        <div className="grid grid-cols-2 gap-4 h-[500px] order-2 md:order-1">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border-2 border-white/10 group mt-10"
          >
              <img 
                  src="/Aluplak4.jpg" 
                  alt="Proceso de pegado Aluplak" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
          </motion.div>
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden border-2 border-white/10 group"
          >
              <img 
                  src="/Aluplak3.jpeg" 
                  alt="Instalación click Aluplak" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 order-1 md:order-2"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <Wrench size={14} className="text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Instalación Simplificada • Eficiencia</span>
          </div>
          <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
            Montaje en Seco, <br />
            <span className="text-yellow-400">Sin Complicaciones.</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
            La validación en campo demuestra la rapidez del sistema: fijación mediante adhesivo de alta resistencia y terminación mediante clipado mecánico. Reducción total de tiempos muertos en obra.
          </p>
        </motion.div>
      </section>

      {/* DIFERENCIACIÓN (ORIGINAL) */}
      <section className="max-w-4xl mx-
