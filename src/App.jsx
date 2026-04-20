import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, LabelList
} from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, wrench, Zap } from 'lucide-react';

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

  // DATOS DE INSTALACIÓN CORREGIDOS
  const laborData = [
    { name: "Tradicional (Mortero/Clips)", minutos: 45 },
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
        <div className="bg-slate-900/50 border border-white/10 p-8 rounded-[2.5rem]">
          <h2 className="text-2xl font-black text-white italic mb-8 uppercase tracking-tighter">Ventas Proyectadas (€)</h2>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}>
                  <LabelList dataKey="crecimiento" position="insideTop" fill="#000000" fontSize={18} fontWeight="900" offset={10} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* MÉTRICAS SECUNDARIAS (EBITDA Y AHORRO) */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        
        {/* EBITDA COMPARATIVO CORREGIDO */}
        <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
          <h3 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">EBITDA vs Sector (%)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ebitdaData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="value" fill="#22c55e" radius={[4,4,0,0]}>
                  <LabelList 
                    dataKey="value" 
                    content={(props) => {
                      const { x, y, width, index } = props;
                      if (index === 3) { // ALUPLAK
                        return (
                          <text x={x + width / 2} y={y - 10} fill="#22c55e" textAnchor="middle" fontSize={12} fontWeight="bold">
                            +250% vs Trad.
                          </text>
                        );
                      }
                      return null;
                    }} 
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* AHORRO ENERGÉTICO CORREGIDO */}
        <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
          <h3 className="font-bold mb-6 text-slate-400 uppercase tracking-widest text-xs">Ahorro Energético vs Sector (%)</h3>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={energyData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="consumo" fill="#facc15" radius={[4,4,0,0]}>
                  <LabelList 
                    dataKey="consumo" 
                    content={(props) => {
                      const { x, y, width, index } = props;
                      if (index === 2) { // ALUPLAK
                        return (
                          <text x={x + width / 2} y={y - 10} fill="#facc15" textAnchor="middle" fontSize={12} fontWeight="bold">
                            -45% Consumo
                          </text>
                        );
                      }
                      return null;
                    }} 
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* NUEVA SECCIÓN: MURO DE VALIDACIÓN (DISEÑO INMERSIVO CON TUS FOTOS) */}
      <section className="w-full bg-[#0f172a] py-24 border-y border-white/5 mb-24">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <wrench className="w-4 h-4 text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Validación de Campo • Instalación en Seco</span>
          </div>
          <h2 className="text-6xl font-black text-white italic tracking-tighter leading-none">
            El Fin de <span className="text-yellow-400">las Rozas y el Polvo.</span>
          </h2>
          <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Olvídate de las obras complejas. Nuestro sistema patentado se fija mediante adhesivos de alta resistencia y encajes de precisión, permitiendo una instalación limpia, rápida y sin necesidad de personal especializado.
          </p>
        </div>
        
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 items-center">
          
          {/* Imagen 1 - Adhesivo */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/5"
          >
              <img src="/Aluplak1.jpeg" alt="Aplicación de Adhesivo" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex items-end gap-6">
                <div className="text-yellow-400 font-black text-7xl italic leading-none">01</div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Fijación en Seco</h3>
                  <p className="text-slate-300 text-sm">El instalador aplica el adhesivo directamente en el perfil técnico. Rápido, limpio y sin escombros.</p>
                </div>
              </div>
          </motion.div>

          {/* Imagen 2 - Click */}
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/5"
          >
              <img src="/Aluplak2.jpeg" alt="Encaje del Rodapié" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex items-end gap-6">
                <div className="text-yellow-400 font-black text-7xl italic leading-none">02</div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Acabado "Click"</h3>
                  <p className="text-slate-300 text-sm">El rodapié embellecedor se encaja a presión. Un acabado perfecto, registrable y listo para ocultar cables.</p>
                </div>
              </div>
          </motion.div>

        </div>
      </section>

      {/* NUEVA MÉTRICA: AHORRO EN MANO DE OBRA DERIVADO DE LA INSTALACIÓN */}
      <section className="max-w-7xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Eficiencia Operativa • Ahorro en Costes Operativos</span>
          </div>
          <h2 className="text-5xl font-black text-white italic tracking-tighter leading-none">
            Más Rentabilidad por <span className="text-yellow-400">Metro Instalado.</span>
          </h2>
          <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
            La facilidad de montaje que acabas de ver no es solo comodidad; es un beneficio directo en tu cuenta de resultados. Reducimos el coste de mano de obra en más de un 80% frente a los métodos que requieren obra civil, maximizando el margen de beneficio por proyecto.
          </p>
        </motion.div>

        {/* Columna de Gráfica Horizontal */}
        <div className="bg-slate-900/50 p-10 rounded-[2rem] border border-white/5 shadow-inner">
          <h3 className="font-bold mb-8 text-slate-400 uppercase tracking-widest text-xs">Tiempo de Instalación (Minutos / Metro)</h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborData} layout="vertical" margin={{ top: 5, right: 100, left: 10, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px' }} />
                <Bar dataKey="minutos" fill="#60a5fa" radius={[0, 10, 10, 0]}>
                  <LabelList 
                    dataKey="minutos" 
                    position="right" 
                    content={(props) => {
                      const { x, y, value, index } = props;
                      if (index === 1) { // ALUPLAK
                        return (
                          <text x={x + 10} y={y + 18} fill="#facc15" fontSize={14} fontWeight="bold">
                            +82% Eficiencia vs Obra
                          </text>
                        );
                      }
                      return <text x={x + 10} y={y + 18} fill="#94a3b8" fontSize={12}>{value} min</text>;
                    }} 
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

    </div>
  );
}
