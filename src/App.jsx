import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList, AreaChart, Area } from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench, Zap, Flame, ShieldCheck, Globe, Layout, Target, Award, Users, Lightbulb, ChevronRight } from 'lucide-react';

export default function App() {
  const salesData = [
    { year: '2022', ventas: 47416, crecimiento: '' }, 
    { year: '2023', ventas: 71677, crecimiento: '+51%' },
    { year: '2024', ventas: 88210, crecimiento: '+23%' }, 
    { year: '2025', ventas: 132531, crecimiento: '+50%' },
    { year: '2026', ventas: 220000, crecimiento: '+66%' }
  ];

  const marketData = [
    { name: 'Tradicional', eficiencia: 30, coste: 100 },
    { name: 'Aluplak', eficiencia: 95, coste: 40 },
  ];

  const laborData = [{ name: "Tradicional", minutos: 45 }, { name: "ALUPLAK", minutos: 8 }];

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- NAV / HEADER STATS --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <span className="font-black italic text-xl tracking-tighter">ALUPLAK<span className="text-yellow-400">.</span></span>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span className="text-yellow-400">Founders: Valencia, España</span>
          <span>Presencia: +30 Países</span>
          <span>Patente: Bi-componente</span>
        </div>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-xs uppercase italic hover:scale-105 transition-transform">Invertir Ahora</button>
      </nav>

      {/* --- HERO: POSICIONAMIENTO ESTRATÉGICO --- */}
      <section className="relative pt-48 pb-32 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/20 via-transparent to-transparent opacity-40" />
        
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-8xl md:text-[12rem] font-black mb-8 tracking-tighter italic leading-[0.75] uppercase">
            THE CLIMATE <br /><span className="text-yellow-400">REVOLUTION.</span>
          </h1>
          
          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-12 items-center text-left">
            <p className="text-2xl md:text-3xl font-light text-slate-300 italic leading-tight border-l-4 border-yellow-400 pl-8">
              "No somos solo fabricantes; somos la compañía que ha logrado integrar <span className="text-white font-bold">alta decoración con nanotecnología térmica</span>."
            </p>
            <div className="space-y-4 text-slate-400 font-light">
              <p>Fundada en 2021, Aluplak ha transformado el sector de los perfiles técnicos. Hemos convertido elementos arquitectónicos pasivos en <strong>sistemas activos de calefacción invisible</strong>.</p>
              <div className="flex gap-4">
                <div className="flex flex-col"><span className="text-white font-black text-2xl">+50%</span><span className="text-[10px] uppercase">Crecimiento 2025</span></div>
                <div className="w-px h-10 bg-white/10" />
                <div className="flex flex-col"><span className="text-white font-black text-2xl">28%</span><span className="text-[10px] uppercase">EBITDA Consolidado</span></div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN 1: INVISOTHERM (CONTENIDO AMPLIADO) --- */}
      <section className="py-32 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start mb-24">
            <div className="md:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full text-yellow-400 text-xs font-black uppercase tracking-widest">
                Disrupción en Climatización
              </div>
              <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none">
                INVISO<span className="text-yellow-400">THERM</span>
              </h2>
              <h3 className="text-2xl font-bold text-white/80 italic italic leading-none">Primer panel constructivo calefactable de una sola pieza.</h3>
              
              <div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed">
                <p>Fabricado en <strong>Pladur o Fibrocemento de 13 mm</strong>, Invisotherm integra nanotecnología térmica diseñada para climatizar hasta 14m² mediante radiación homogénea desde la propia estructura de la pared.</p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <Zap className="text-yellow-400 shrink-0" />
                    <p className="text-sm"><strong>Eficiencia Radical:</strong> Elimina la necesidad de radiadores, liberando espacio arquitectónico y reduciendo el consumo energético en un 45%.</p>
                  </div>
                  <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <ShieldCheck className="text-yellow-400 shrink-0" />
                    <p className="text-sm"><strong>Salud Ambiental:</strong> Al ser calefacción por radiación, no mueve aire ni polvo, ideal para personas con alergias y entornos sanitarios.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <img src="/Aluplak5.jpeg" className="rounded-[3rem] border border-white/10 h-80 w-full object-cover shadow-2xl" />
              <img src="/Aluplak6.jpeg" className="rounded-[3rem] border border-white/10 h-80 w-full object-cover shadow-2xl mt-12" />
              <img src="/Aluplak7.jpeg" className="rounded-[3rem] border border-white/10 h-80 w-full object-cover shadow-2xl -mt-12" />
              <img src="/Aluplak8.jpeg" className="rounded-[3rem] border border-white/10 h-80 w-full object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: ZÓCALO TÉCNICO Y MONTAJE (VALIDACIÓN) --- */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black italic tracking-tighter">EL SISTEMA QUE CAMBIÓ LAS REGLAS</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Nuestro sistema bi-componente patentado es la base de nuestra expansión global. El rodapié es completamente desmontable, facilitando el mantenimiento perpetuo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4 h-[500px]">
             <img src="/Aluplak1.jpeg" className="rounded-3xl border border-white/10 h-full w-full object-cover" />
             <img src="/Aluplak2.jpeg" className="rounded-3xl border border-white/10 h-full w-full object-cover mt-12" />
             <img src="/Aluplak4.jpg" className="rounded-3xl border border-white/10 h-full w-full object-cover -mt-12" />
             <img src="/Aluplak3.jpeg" className="rounded-3xl border border-white/10 h-full w-full object-cover" />
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-4xl font-black italic tracking-tighter text-yellow-400 uppercase">Ahorro en Tiempos de Obra</h3>
              <p className="text-lg text-slate-300 font-light border-l-2 border-yellow-400 pl-6">
                La fijación mediante adhesivo de alta resistencia y clipado mecánico elimina las rozas y el polvo. Reducimos el coste de mano de obra en un <span className="text-white font-bold">82%</span>.
              </p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={laborData} layout="vertical" margin={{ right: 80 }}>
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={100} axisLine={false} tickLine={false} />
                    <Bar dataKey="minutos" fill="#facc15" radius={[0, 10, 10, 0]}>
                      <LabelList dataKey="minutos" position="right" fill="#fff" fontWeight="bold" formatter={(v) => `${v} min/m`} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest mt-4 font-black">Minutos de instalación por metro lineal</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: ANÁLISIS DE MERCADO Y RENTABILIDAD (NUEVA) --- */}
      <section className="py-32 border-t border-white/5 bg-[#03081a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap
