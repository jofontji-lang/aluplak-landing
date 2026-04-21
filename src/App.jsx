import React, { useState, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend
} from "recharts";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target, BarChart3, HardHat
} from 'lucide-react';

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // --- DATASETS TÉCNICOS ---
  
  const installationSavings = [
    { name: 'Tradicional (Obra)', coste: 320, horas: 8 },
    { name: 'Sistema Aluplak', coste: 60, horas: 1.5 },
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

  const roi = useMemo(() => ({
    total: (investment * 3.5).toLocaleString(),
    profit: (investment * 2.5).toLocaleString()
  }), [investment]);

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <motion.div className="fixed top-0 left-0 right-0 h-2 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAVEGACIÓN CORPORATIVA */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={28} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <a href="#instalacion" className="hover:text-yellow-400 transition-colors">Instalación</a>
          <a href="#tech" className="hover:text-yellow-400 transition-colors">I+D+i</a>
          <a href="#estrategia" className="hover:text-yellow-400 transition-colors">Estrategia</a>
          <a href="#metricas" className="hover:text-yellow-400 text-yellow-400 transition-colors">Inversión 2026</a>
        </div>
      </nav>

      {/* HERO: PRIMER ACTIVO VISUAL (ALUPLAK 1) */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-10">
        <div className="absolute inset-0 z-0">
          <img src="/Aluplak1.jpeg" className="w-full h-full object-cover opacity-30 scale-105" alt="Aluplak Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-yellow-400 font-black tracking-[0.5em] uppercase text-xs mb-6 block italic">Proptech & Industrial Design</span>
            <h1 className="text-[12vw] lg:text-[13rem] font-black italic leading-[0.8] uppercase tracking-tighter">
              SMART <br /> <span className="text-yellow-400">SURFACES.</span>
            </h1>
            <p className="text-2xl lg:text-3xl font-light italic text-slate-300 max-w-3xl mt-10 border-l-4 border-yellow-400 pl-10">
              Transformamos la superficie constructiva en infraestructura activa. El calor que no se ve, pero se siente.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN CRÍTICA: INSTALACIÓN, OPERARIO (ALUPLAK 5) Y GRÁFICO GIGANTE */}
      <section id="instalacion" className="py-40 bg-slate-950 px-10 border-y border-white/5">
        <div className="container mx-auto">
          <div className="mb-24">
            <span className="text-yellow-400 font-black tracking-widest uppercase text-xs">Diferenciación Competitiva</span>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter mt-4">Mano de Obra <br/> <span className="text-yellow-400">vs. Eficiencia</span></h2>
          </div>
          
          <div className="grid xl:grid-cols-2 gap-16 items-center">
            {/* IMAGEN DEL OPERARIO (ALUPLAK 5) */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative group overflow-hidden rounded-[4rem] border-8 border-white/5 shadow-2xl">
              <img src="/Aluplak5.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105
