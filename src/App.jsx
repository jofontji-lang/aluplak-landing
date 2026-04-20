import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from "recharts";
import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart3, PieChart, Wrench, Zap, Flame, ShieldCheck, Globe, Layout, Target } from 'lucide-react';

export default function App() {
  const salesData = [
    { year: '2022', ventas: 47416, crecimiento: '' }, 
    { year: '2023', ventas: 71677, crecimiento: '+51%' },
    { year: '2024', ventas: 88210, crecimiento: '+23%' }, 
    { year: '2025', ventas: 132531, crecimiento: '+50%' },
    { year: '2026', ventas: 220000, crecimiento: '+66%' }
  ];

  const marginsData = [
    { name: "Zócalo Técnico", margen: 78 },
    { name: "Invisotherm", margen: 65 },
    { name: "Calefactable", margen: 70 }
  ];

  const laborData = [{ name: "Tradicional", minutos: 45 }, { name: "ALUPLAK", minutos: 8 }];

  return (
    <div className="min-h-screen bg-[#020617] text-white pb-20 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* --- HERO: POSICIONAMIENTO ESTRATÉGICO --- */}
      <section className="relative pt-32 pb-20 px-6 text-center border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent opacity-50" />
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-1 rounded-full mb-6">
            <Globe size={14} className="text-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Presencia en más de 30 países • Sede en Valencia</span>
          </div>
          
          <h1 className="text-7xl md:text-[10rem] font-black mb-8 tracking-tighter italic leading-[0.75] uppercase">
            ALUPLAK <br /><span className="text-yellow-400">SYSTEMS.</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mt-12">
            <p className="text-2xl md:text-3xl font-light text-slate-300 italic leading-relaxed border-l-4 border-yellow-400 pl-8 text-left">
              "No somos solo fabricantes; somos la única compañía que ha logrado integrar <span className="text-white font-bold">alta decoración con nanotecnología térmica</span>, convirtiendo elementos pasivos en sistemas activos de calefacción." [cite: 141, 142]
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN 1: LA JOYA DE LA CORONA - INVISOTHERM --- */}
      <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1 rounded-full text-orange-400 text-xs font-black uppercase tracking-widest">
                Liderazgo Tecnológico
              </div>
              <h2 className="text-6xl font-black italic tracking-tighter leading-none">
                INVISO<span className="text-yellow-400">THERM:</span> <br />
                El Futuro del Clima.
              </h2>
              
              <div className="space-y-6 text-xl text-slate-300 font-light leading-relaxed">
                <p className="border-l-2 border-yellow-400 pl-6">
                  Se trata del <span className="text-white font-semibold">primer panel constructivo calefactable de una sola pieza</span> en el mercado. Fabricado en Pladur o Fibrocemento de 13 mm, integra nanotecnología térmica de vanguardia. 
                </p>
                <p>
                  Este sistema está diseñado para climatizar espacios de hasta <span className="text-white font-semibold">14m² por panel</span> mediante radiación homogénea, utilizando la propia estructura de la pared como emisor térmico. 
                </p>
                <p className="bg-yellow-400/5 p-6 rounded-2xl border border-yellow-400/10 italic">
                  "Nuestra ventaja competitiva reside en ofrecer una estética minimalista sin renunciar a la máxima eficiencia energética, eliminando por completo los radiadores tradicionales." [cite: 143]
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/40 p-6 rounded-3xl border border-white/5">
                  <Flame className="text-yellow-400 mb-4" size={32} />
                  <h4 className="font-bold text-white uppercase text-sm mb-2">Radiación Homogénea</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Calor constante desde la pared, evitando corrientes de aire y polvo en suspensión.</p>
                </div>
                <div className="bg-slate-800/40 p-6 rounded-3xl border border-white/5">
                  <ShieldCheck className="text-yellow-400 mb-4" size={32} />
                  <h4 className="font-bold text-white uppercase text-sm mb-2">Integración Total</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">Compatible con placas de 13mm estándar de construcción en seco.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/5">
                <img src="/Aluplak5.jpeg" className="w-full h-[300px] object-cover" alt="Invisotherm detalle" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/30 mt-12 shadow-2xl shadow-yellow-400/5">
                <img src="/Aluplak6.jpeg" className="w-full h-[300px] object-cover" alt="Invisotherm instalación" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/30 shadow-2xl shadow-yellow-400/5">
                <img src="/Aluplak7.jpeg" className="w-full h-[300px] object-cover" alt="Invisotherm acabado" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="rounded-[2.5rem] overflow-hidden border-2 border-yellow-400/30 mt-12 shadow-2xl shadow-yellow-400/5">
                <img src="/Aluplak8.jpeg" className="w-full h-[300px] object-cover" alt="Invisotherm panel" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 2: RUPTURA DE PARADIGMA - EL SISTEMA BI-COMPONENTE --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4 h-[500px]">
             <div className="rounded-3xl overflow-hidden border-2 border-white/10 group">
                <img src="/Aluplak1.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
             <div className="rounded-3xl overflow-hidden border-2 border-white/10 mt-12 group">
                <img src="/Aluplak2.jpeg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             </div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="text-5xl font-black italic tracking-tighter leading-none text-white">
              ZÓCALOS TÉCNICOS: <br />
              <span className="text-yellow-400">REGISTRO SIN OBRAS.</span>
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed border-l-2 border-yellow-400 pl-6">
              Nos diferenciamos por haber roto el paradigma del sector con un <span className="text-white font-bold">sistema bi-componente patentado</span>. [cite: 85]
            </p>
            <div className="space-y-4 text-slate-400">
              <div className="flex gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <Layout className="text-yellow-400" />
                <span><strong className="text-white">Desmontable:</strong> Facilita el registro de cables, LED o tuberías. [cite: 86]</span>
              </div>
              <div className="flex gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <Wrench className="text-yellow-400" />
                <span><strong className="text-white">Protección:</strong> No daña las paredes de placa de yeso laminado. [cite: 86]</span>
              </div>
              <div className="flex gap-4 items-center bg-slate-900/50 p-4 rounded-2xl border border-white/5">
                <Target className="text-yellow-400" />
                <span><strong className="text-white">Zócalo Calefactable:</strong> Crea una barrera térmica perimetral, eliminando puntos fríos y humedades por condensación. [cite: 91]</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: EFICIENCIA OPERATIVA Y RENTABILIDAD --- */}
      <section className="py-24 border-y border-white/5 bg-[#03081a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">Motor de <span className="text-yellow-400">Rentabilidad</span></h2>
            <p className="text-slate-400 mt-4 italic font-light">"Estructura de costes optimizada que garantiza rentabilidad sólida en exportación." [cite: 101]</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="text-yellow-400 text-6xl font-black absolute -right-4 -bottom-4 opacity-5 italic group-hover:opacity-10 transition-opacity">78%</div>
              <h4 className="text-white font-black italic uppercase text-lg mb-4">Zócalo Técnico</h4>
              <p className="text-4xl font-black text-yellow-400 mb-2">75% - 80%</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Margen de Beneficio</p>
              <p className="mt-6 text-sm text-slate-400 italic">"Punto clave: Alta rotación y estandarización en barras de 2.4 ML para minimizar capital inmovilizado." [cite: 103, 104]</p>
            </div>

            <div className="bg-yellow-400 p-8 rounded-[2.5rem] border border-yellow-500 shadow-2xl shadow-yellow-400/10 group">
              <h4 className="text-black font-black italic uppercase text-lg mb-4">Invisotherm (Premium)</h4>
              <p className="text-4xl font-black text-black mb-2">&gt; 65%</p>
              <p className="text-black/60 text-xs font-bold uppercase tracking-widest">Margen de Beneficio</p>
              <p className="mt-6 text-sm text-black italic font-medium">"Solución 'Todo en Uno' con mayor valor percibido por el cliente, permitiendo un markup superior." [cite: 107, 108]</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
              <div className="text-yellow-400 text-6xl font-black absolute -right-4 -bottom-4 opacity-5 italic group-hover:opacity-10 transition-opacity">Niche</div>
              <h4 className="text-white font-black italic uppercase text-lg mb-4">Calefactable</h4>
              <p className="text-4xl font-black text-yellow-400 mb-2">Estratégico</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Margen Protegido</p>
              <p className="mt-6 text-sm text-slate-400 italic">"Producto de nicho con baja competencia para posicionamiento en proyectos de lujo." [cite: 111]</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: HISTÓRICO DE VENTAS Y PROYECCIÓN 2026 --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter mb-8">
              TRAYECTORIA DE <br /><span className="text-yellow-400">CRECIMIENTO.</span>
            </h2>
            <div className="space-y-8">
              <div className="border-l-4 border-slate-700 pl-6">
                <h5 className="text-yellow-400 font-black italic">2021-2022: PENETRACIÓN</h5>
                <p className="text-slate-400 text-sm mt-2">Fase de lanzamiento centrada en alta precisión. Cierre de 2022 con 47.416€ y acuerdos con Leroy Merlin. [cite: 119, 121]</p>
              </div>
              <div className="border-l-4 border-slate-700 pl-6">
                <h5 className="text-yellow-400 font-black italic">2023-2024: ESCALABILIDAD</h5>
                <p className="text-slate-400 text-sm mt-2">Crecimiento del 51% en 2023. En 2024 la consolidación de clientes industriales impulsa la facturación un 23% extra. [cite: 125, 126]</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-6 bg-yellow-400/5 py-4 rounded-r-2xl">
                <h5 className="text-yellow-400 font-black italic text-xl">2025-2026: DISRUPCIÓN TÉRMICA</h5>
                <p className="text-slate-300 text-sm mt-2 font-light italic">"Hito de crecimiento exponencial (+50%) impulsado por la nueva división de climatización invisible (Invisotherm)." [cite: 129, 130, 133]</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData} margin={{ top: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" axisLine={false} tickLine={false} />
                  <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px' }} />
                  <Bar dataKey="ventas" fill="#facc15" radius={[10, 10, 0, 0]}>
                    <LabelList dataKey="crecimiento" position="top" fill="#facc15" fontWeight="900" dy={-10} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mt-8">Facturación Consolidada (€)</p>
          </div>
        </div>
      </section>

      {/* --- KPIs FINALES DE CIERRE --- */}
      <section className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">EBITDA ALUPLAK</p>
          <p className="text-5xl font-black text-green-400 italic">28%</p>
          <p className="text-slate-600 text-[9px] mt-2 italic">[cite: 101]</p>
        </div>
        <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">Eficiencia Industrial</p>
          <p className="text-5xl font-black text-yellow-400 italic">99%</p>
          <p className="text-slate-600 text-[9px] mt-2 italic">[cite: 114]</p>
        </div>
        <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">Ahorro Energético</p>
          <p className="text-5xl font-black text-blue-400 italic">45%</p>
          <p className="text-slate-600 text-[9px] mt-2 italic">[cite: 143]</p>
        </div>
        <div className="bg-slate-900/30 p-8 rounded-3xl border border-white/5 text-center">
          <p className="text-slate-500 text-[10px] font-black uppercase mb-2 tracking-widest">ROI Proyectado</p>
          <p className="text-5xl font-black text-white italic">3.5x</p>
          <p className="text-slate-600 text-[9px] mt-2 italic">Basado en escala 2026</p>
        </div>
      </section>

    </div>
  );
}
