import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ComposedChart, 
  Bar, Area, Legend, Line, Cell, PieChart, Pie, ScatterChart, Scatter
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, ArrowRight, TrendingUp, Zap, ShieldCheck, 
  Droplets, Leaf, Globe, Cpu, EyeOff, Thermometer, 
  Smartphone, Home, Sun, CheckCircle2, Layers, Box, 
  Wind, Gauge, Award, BarChart3, Rocket, Clock, Euro
} from 'lucide-react';

/**
 * ALUPLAK ENTERPRISE SYSTEM v6.0
 * Focus: Cost-Efficiency & Energy Savings Metrics
 */

export default function AluplakFullPortal() {
  const [activeTab, setActiveTab] = useState("instalacion");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS TÉCNICOS ---
  
  const installationSavings = [
    { name: 'Tradicional (Obra)', horas: 8, coste: 320, dificultad: 90 },
    { name: 'Aluplak System', horas: 1.5, coste: 60, dificultad: 20 },
  ];

  const energyEfficiency = [
    { month: 'Ene', tradicional: 120, aluplak: 84 },
    { month: 'Feb', tradicional: 110, aluplak: 77 },
    { month: 'Mar', tradicional: 90, aluplak: 63 },
    { month: 'Abr', tradicional: 60, aluplak: 42 },
    { month: 'May', tradicional: 40, aluplak: 28 },
    { month: 'Jun', tradicional: 30, aluplak: 21 },
  ];

  const financialStats = [
    { year: '2022', rev: 47416, ebitda: 13276 },
    { year: '2023', rev: 71677, ebitda: 20069 },
    { year: '2024', rev: 88210, ebitda: 24698 },
    { year: '2025', rev: 132531, ebitda: 37108 },
    { year: '2026', rev: 220000, ebitda: 61600 },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400">
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAV */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={28} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK<span className="text-yellow-400">.</span></span>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <a href="#eficiencia" className="hover:text-yellow-400 transition-colors">Ahorro</a>
          <a href="#tech" className="hover:text-yellow-400 transition-colors">I+D</a>
          <a href="#ventas" className="hover:text-yellow-400 transition-colors">Métricas</a>
        </div>
      </nav>

      {/* HERO - IMAGEN ALUPLAK 1 */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="Aluplak1.jpeg" className="w-full h-full object-cover opacity-30 scale-105" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
        </div>
        <div className="container mx-auto px-10 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-[12vw] lg:text-[14rem] font-black italic leading-[0.75] uppercase tracking-tighter">
              BEYOND <br /> <span className="text-yellow-400">EFFICIENCY.</span>
            </h1>
            <p className="text-3xl font-light italic text-slate-400 max-w-3xl mt-10 border-l-4 border-yellow-400 pl-10">
              Métricas disruptivas: -80% en tiempo de instalación y -30% en consumo energético.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN NUEVA: MÉTRICAS DE AHORRO (DIFERENCIACIÓN COMPETITIVA) */}
      <section id="eficiencia" className="py-40 bg-slate-950 px-10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <span className="text-yellow-400 font-black tracking-widest uppercase text-xs">Competitividad Operativa</span>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter mt-4">Instalación <br/> "Plug & Play"</h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-light">
                El sistema bi-componente de Aluplak elimina la necesidad de rozas, yeso y pintura. Al ser un sistema de clipado magnético o mecánico (según modelo), el coste de mano de obra se desploma, permitiendo que un solo operario cubra 10 veces más superficie que con métodos tradicionales.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <Clock className="text-yellow-400 mb-4" size={32} />
                  <p className="text-4xl font-black italic text-white">-81%</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">Tiempo de Ejecución</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <Euro className="text-yellow-400 mb-4" size={32} />
                  <p className="text-4xl font-black italic text-white">€260</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase mt-2">Ahorro por Estancia</p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 p-12 rounded-[4rem] border border-white/5">
              <h4 className="text-center text-xs font-black uppercase mb-10 tracking-widest text-slate-500">Comparativa: Tradicional vs Aluplak (Coste Mano Obra)</h4>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart3 data={installationSavings}>
                    <XAxis dataKey="name" stroke="#475569" fontWeight="bold" />
                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '15px'}} />
                    <Bar dataKey="coste" radius={[15, 15, 0, 0]}>
                      {installationSavings.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#1e293b' : '#facc15'} />
                      ))}
                    </Bar>
                  </BarChart3>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN: AHORRO ENERGÉTICO (INVISOTHERM) */}
      <section className="py-40 bg-black px-10">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-2 gap-24 items-center">
            <div className="order-2 xl:order-1 bg-slate-900/50 p-12 rounded-[4rem] border border-white/5">
              <h4 className="text-center text-xs font-black uppercase mb-10 tracking-widest text-slate-500">Curva de Consumo Eléctrico Estimado (EUR/Mes)</h4>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={energyEfficiency}>
                    <XAxis dataKey="month" stroke="#475569" />
                    <Tooltip contentStyle={{backgroundColor: '#020617', border: 'none'}} />
                    <Area type="monotone" dataKey="tradicional" stroke="#1e293b" fill="#1e293b" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="aluplak" stroke="#facc15" fill="#facc15" fillOpacity={0.4} />
                    <Legend />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="order-1 xl:order-2 space-y-12">
              <div>
                <span className="text-yellow-400 font-black tracking-widest uppercase text-xs">Sustainability Index</span>
                <h2 className="text-6xl font-black italic uppercase tracking-tighter mt-4">Eficiencia <br/> Por Radiación</h2>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed font-light italic">
                A diferencia de la convección tradicional que calienta el aire, la nanotecnología Invisotherm calienta las masas. La baja inercia térmica del aluminio permite alcanzar la temperatura de consigna en minutos, no en horas, reduciendo la factura energética hasta un **30% anual**.
              </p>
              <ul className="space-y-6">
                {[
                  'Transferencia térmica optimizada por nanotecnología',
                  'Eliminación de puentes térmicos perimetrales',
                  'Gestión inteligente mediante App (Programación predictiva)'
                ].map(item => (
                  <li key={item} className="flex gap-4 items-start text-slate-300 font-bold uppercase text-xs tracking-tighter">
                    <CheckCircle2 className="text-yellow-400 shrink-0" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM (IMÁGENES 2, 3, 4) */}
      <section className="py-40 bg-slate-950 px-10">
        <div className="container mx-auto grid lg:grid-cols-3 gap-10">
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[3/4] relative group">
            <img src="Aluplak2.jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Aluplak 2" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent" />
            <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black uppercase">Fig. 02 - Zócalo Técnico LED</div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[3/4] relative group">
            <img src="Aluplak3.jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Aluplak 3" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent" />
            <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black uppercase">Fig. 03 - Termoplak Terrazas</div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 aspect-[3/4] relative group">
            <img src="Aluplak4.jpeg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Aluplak 4" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent" />
            <div className="absolute bottom-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xl text-[9px] font-black uppercase">Fig. 04 - Invisotherm Finish</div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-40 bg-black px-10">
        <div className="container mx-auto grid xl:grid-cols-2 gap-20">
          <div className="rounded-[4rem] overflow-hidden border-4 border-yellow-400/20 aspect-video shadow-2xl">
            <video src="AluplakVideo1.mp4" controls className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[4rem] overflow-hidden border-4 border-blue-500/20 aspect-video shadow-2xl">
            <video src="AluplakVideo2.mp4" controls className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* MÉTRICAS DE VENTAS Y EBITDA (REVISITED) */}
      <section id="ventas" className="py-60 px-10 bg-[#020617]">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-20 items-end mb-40">
            <div className="xl:col-span-2">
              <h2 className="text-[10vw] font-black italic uppercase leading-[0.8] tracking-tighter">FINANCIAL <br/> <span className="text-yellow-400">ENGINE.</span></h2>
            </div>
            <div className="bg-yellow-400 p-12 rounded-[4rem] text-black text-center group relative overflow-hidden">
              <p className="text-xs font-black uppercase mb-2">EBITDA Target</p>
              <p className="text-8xl font-black italic">28%</p>
              <Rocket className="absolute -right-6 -bottom-6 opacity-10 group-hover:scale-150 transition-transform" size={150} />
            </div>
          </div>

          <div className="h-[600px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={financialStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#475569" fontWeight="bold" />
                <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '20px'}} />
                <Area type="monotone" dataKey="rev" fill="#facc15" fillOpacity={0.1} stroke="#facc15" strokeWidth={5} />
                <Bar dataKey="ebitda" barSize={50} fill="#1e293b" radius={[15, 15, 0, 0]} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-40 bg-black text-center relative overflow-hidden px-10">
        <h2 className="text-[12vw] font-black italic uppercase leading-none tracking-tighter mb-20">JOIN THE <br/> <span className="text-yellow-400">EXIT.</span></h2>
        <button className="px-20 py-10 bg-yellow-400 text-black font-black uppercase italic tracking-[0.3em] text-2xl rounded-full hover:scale-110 transition-transform">
          Download Investor Deck
        </button>
        <p className="mt-40 opacity-20 text-[10px] font-black uppercase tracking-[0.5em]">ALUPLAK SKIRTING BOARD S.L • 2026</p>
      </footer>
    </div>
  );
}
