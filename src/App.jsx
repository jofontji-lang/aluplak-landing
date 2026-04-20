import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench, Zap, Flame, ShieldCheck } from 'lucide-react';

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
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter italic leading-[0.8]">
            ALUPLAK <br /><span className="text-yellow-400 text-6xl md:text-8xl">SYSTEMS.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-slate-300 italic border-l-2 border-yellow-400 pl-6 text-left">
            "Transformamos elementos arquitectónicos pasivos en sistemas activos de alta tecnología térmica y diseño minimalista."
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN 1: ZÓCALOS TÉCNICOS (Aluplak1 y 2) */}
      <section className="max-w-7xl mx-auto px-6 my-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-widest">Sistemas Patentados</div>
          <h2 className="text-5xl font-black italic tracking-tighter leading-none">Diseño que <br /><span className="text-yellow-400">Registra y Protege.</span></h2>
          <p className="text-xl text-slate-300 border-l-2 border-yellow-400 pl-6 font-light">Nuestro rodapié bi-componente permite ocultar instalaciones y LED sin obras, siendo completamente desmontable.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 h-[400px]">
          <div className="rounded-3xl overflow-hidden border-2 border-white/10"><img src="/Aluplak1.jpeg" className="w-full h-full object-cover" alt="Detalle 1" /></div>
          <div className="rounded-3xl overflow-hidden border-2 border-white/10 mt-10"><img src="/Aluplak2.jpeg" className="w-full h-full object-cover" alt="Detalle 2" /></div>
        </div>
      </section>

      {/* SECCIÓN 2: INVISOTHERM - LA JOYA DE LA CORONA (Aluplak5, 6, 7, 8) */}
      <section className="bg-gradient-to-b from-transparent to-yellow-400/5 py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 px-6 py-2 rounded-full text-yellow-400 text-sm font-black uppercase tracking-widest">The Masterpiece</div>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter">INVISO<span className="text-yellow-400">THERM</span></h2>
            <p className="text-2xl text-slate-400 font-light max-w-3xl mx-auto italic">"El primer panel constructivo calefactable de una sola pieza con nanotecnología térmica integrada."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                <div className="rounded-[2rem] overflow-hidden border-2 border-yellow-400/20 shadow-2xl shadow-yellow-400/10"><img src="/Aluplak5.jpeg" className="w-full h-full object-cover" alt="Invisotherm 1" /></div>
                <div className="rounded-[2rem] overflow-hidden border-2 border-yellow-400/20 mt-8 shadow-2xl shadow-yellow-400/10"><img src="/Aluplak6.jpeg" className="w-full h-full object-cover" alt="Invisotherm 2" /></div>
              </div>
              <div className="bg-slate-900/80 p-8 rounded-3xl border border-white/10">
                <div className="flex gap-4 items-start">
                  <Flame className="text-yellow-400 shrink-0" size={32} />
                  <div>
                    <h4 className="font-black text-xl italic uppercase text-white mb-2">Climatización Invisible</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Panel de 13mm (Pladur o Fibrocemento) diseñado para climatizar hasta 14m² mediante radiación homogénea desde la estructura de la pared.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:pt-20">
              <div className="bg-slate-900/80 p-8 rounded-3xl border border-white/10">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="text-yellow-400 shrink-0" size={32} />
                  <div>
                    <h4 className="font-black text-xl italic uppercase text-white mb-2">Ventaja Tecnológica</h4>
                    <p className="text-slate-400 font-light leading-relaxed">Elimina la necesidad de radiadores tradicionales. Estética minimalista que convierte paredes en emisores de calor eficientes.</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 h-[400px]">
                <div className="rounded-[2rem] overflow-hidden border-2 border-yellow-400/20 shadow-2xl shadow-yellow-400/10"><img src="/Aluplak7.jpeg" className="w-full h-full object-cover" alt="Invisotherm 3" /></div>
                <div className="rounded-[2rem] overflow-hidden border-2 border-yellow-400/20 mt-8 shadow-2xl shadow-yellow-400/10"><img src="/Aluplak8.jpeg" className="w-full h-full object-cover" alt="Invisotherm 4" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: VALIDACIÓN Y AHORRO (Aluplak3 y 4 + MÉTRICA) */}
      <section className="max-w-7xl mx-auto px-6 my-24 pt-24 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="rounded-3xl overflow-hidden border-2 border-white/10 mt-10"><img src="/Aluplak4.jpg" className="w-full h-full object-cover" alt="Montaje 1" /></div>
            <div className="rounded-3xl overflow-hidden border-2 border-white/10"><img src="/Aluplak3.jpeg" className="w-full h-full object-cover" alt="Montaje 2" /></div>
          </div>
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full text-yellow-400 text-xs font-black uppercase tracking-widest">Efficiency Validation</div>
            <h2 className="text-5xl font-black italic tracking-tighter leading-none">Montaje en Seco, <br /><span className="text-yellow-400">Sin Complicaciones.</span></h2>
            <p className="text-xl text-slate-300 border-l-2 border-yellow-400 pl-6 font-light">Validado en obra: reducción del 80% en tiempos de ejecución mediante fijación por adhesivo y clipado mecánico.</p>
          </div>
        </div>

        {/* MÉTRICA DE AHORRO (DONDE LA PEDISTE) */}
        <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/5 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="text-yellow-400" />
            <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter">Impacto en Tiempos de Ejecución</h3>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={laborData} layout="vertical" margin={{ right: 80 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} width={120} axisLine={false} tickLine={false} />
                <Bar dataKey="minutos" fill="#facc15" radius={[0, 10, 10, 0]}>
                  <LabelList dataKey="minutos" position="right" fill="#fff" fontWeight="bold" formatter={(v) => `${v} min / metro`} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-slate-500 text-sm mt-6 text-center font-bold tracking-widest uppercase italic">Optimización disruptiva frente a la construcción tradicional</p>
        </div>
      </section>

      {/* KPIs DE NEGOCIO */}
      <section className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[{ l: "EBITDA", v: "28%", i: <DollarSign size={24}/> }, { l: "ROI", v: "3.5x", i: <TrendingUp size={24}/> }, { l: "CRECIMIENTO", v: "+50%", i: <BarChart3 size={24}/> }, { l: "MARGEN", v: "65%", i: <PieChart size={24}/> }].map((k, i) => (
          <div key={i} className="bg-[#0f172a] border border-white/10 p-8 rounded-[2rem] text-center hover:border-yellow-400 transition-colors group">
            <div className="text-yellow-400 mb-2 flex justify-center opacity-50 group-hover:opacity-100 transition-opacity">{k.i}</div>
            <div className="text-white text-[10px] font-black italic mb-1 uppercase tracking-tighter">{k.l}</div>
            <div className="text-4xl font-black text-yellow-400 italic">{k.v}</div>
          </div>
        ))}
      </section>

      {/* GRÁFICAS FINALES */}
      <section className="max-w-7xl mx-auto px-6 space-y-10">
        <div className="bg-slate-900/50 border border-white/10 p-10 rounded-[3rem]">
          <h2 className="text-2xl font-black italic mb-8 uppercase tracking-tighter">Proyección de Facturación (€)</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData} margin={{ top: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}>
                  <LabelList dataKey="crecimiento" position="insideTop" fill="#000" fontWeight="900" offset={10} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 h-[280px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">EBITDA Comparado (%)</h3>
            <ResponsiveContainer><BarChart data={ebitdaData}><XAxis dataKey="name" fontSize={10}/><Bar dataKey="value" fill="#22c55e" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5 h-[280px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase mb-6 tracking-widest">Eficiencia Energética (%)</h3>
            <ResponsiveContainer><BarChart data={energyData}><XAxis dataKey="name" fontSize={10}/><Bar dataKey="consumo" fill="#facc15" radius={[4,4,0,0]}/></BarChart></ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
