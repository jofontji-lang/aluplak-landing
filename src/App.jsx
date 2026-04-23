import React, { useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  CartesianGrid, AreaChart, Area, Cell, LabelList 
} from "recharts";
import { motion } from "framer-motion";
import { 
  TrendingUp, Zap, ShieldCheck, Clock, ArrowUpRight, 
  Leaf, Hand, Activity, DollarSign, Award, Target
} from "lucide-react";

// --- DATOS REALES EXTRAÍDOS DE TU DOCUMENTACIÓN ---
const financialData = {
  ventas: [
    { year: "2022", monto: 47416, tag: "Consolidado" },
    { year: "2023", monto: 71677, tag: "+51%" },
    { year: "2024", monto: 88210, tag: "+23%" },
    { year: "2025", monto: 132531, tag: "+50%" },
    { year: "2026", monto: 220000, tag: "Proyectado" }
  ],
  margenes: [
    { name: "Aluplak Tech", valor: 78, color: "#facc15" }, 
    { name: "Media Sector", valor: 28, color: "#334155" }
  ],
  ahorroLaboral: [
    { name: "Tradicional", horas: 10, color: "#1e293b" },
    { name: "ALUPLAK", horas: 2, color: "#facc15" }
  ]
};

export default function App() {
  const [activeTab, setActiveTab] = useState("ventas");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 1. MENÚ DE NAVEGACIÓN SUPERIOR */}
      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="font-black italic text-2xl tracking-tighter text-white">
            ALUPLAK<span className="text-yellow-400">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="#finanzas" className="hover:text-yellow-400 transition">Inversión</a>
            <a href="#eficiencia" className="hover:text-yellow-400 transition">Ahorro</a>
            <a href="#patentes" className="hover:text-yellow-400 transition">Propiedad</a>
            <a href="#confort" className="hover:text-yellow-400 transition">Confort</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition">
            Investor Portal
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION: MÉTRICAS + PATENTES */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-30">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale">
            <source src="/AluplakVideo1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 text-yellow-400 mb-6">
              <ShieldCheck size={28} />
              <span className="font-black uppercase tracking-[0.4em] text-xs">Propiedad Intelectual Blindada</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter text-white italic leading-[0.85]">
              TECNOLOGÍA <br /><span className="text-yellow-400">PATENTADA.</span>
            </h1>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl mb-12">
              Única compañía integrando nanotecnología térmica con alta decoración. 
              <span className="text-white font-bold block mt-2 underline decoration-yellow-400">Margen EBITDA del 78% vs 28% media sectorial.</span>
            </p>
            <div className="flex gap-4">
              <img src="/Aluplak1.jpeg" className="w-24 h-24 object-cover rounded-2xl border border-white/10" alt="Detail" />
              <img src="/Aluplak4.jpg" className="w-24 h-24 object-cover rounded-2xl border border-white/10" alt="Detail" />
            </div>
          </motion.div>
        </div>
      </section>

{/* 3. SECCIÓN FINANCIERA: DOMINIO DEL MERCADO & SUPERIORIDAD DE MARGEN */}
<section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
  <div className="mb-16">
    <div className="flex items-center gap-2 mb-4">
      <span className="h-px w-12 bg-yellow-400"></span>
      <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-xs">Análisis Comparativo de Mercado</span>
    </div>
    <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none">
      RENTABILIDAD <br /> <span className="text-yellow-400">DISRUPTIVA.</span>
    </h2>
  </div>

  <div className="grid lg:grid-cols-12 gap-8">
    
    {/* COLUMNA IZQUIERDA: EL "GAP" CON LA COMPETENCIA */}
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="bg-white/5 border border-white/10 p-8 rounded-[3rem] relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
          <TrendingUp className="text-yellow-400" size={40} />
        </div>
        <h3 className="text-xl font-black italic text-white uppercase mb-8">Margen EBITDA vs Competencia</h3>
        
        <div className="space-y-10">
          {/* Aluplak */}
          <div className="relative">
            <div className="flex justify-between mb-2 items-end">
              <span className="text-yellow-400 font-black tracking-widest text-xs uppercase">Aluplak Tech</span>
              <span className="text-3xl font-black text-white italic">78%</span>
            </div>
            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "78%" }} 
                className="h-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.4)]"
              />
            </div>
            <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase">Ventaja: Integración vertical y Nanotecnología propia.</p>
          </div>

          {/* Media Sector */}
          <div className="relative opacity-50">
            <div className="flex justify-between mb-2 items-end">
              <span className="text-slate-400 font-black tracking-widest text-xs uppercase">Media Sector HVAC</span>
              <span className="text-2xl font-black text-slate-400 italic">28%</span>
            </div>
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: "28%" }} 
                className="h-full bg-slate-500"
              />
            </div>
            <p className="text-[10px] text-slate-600 mt-2 font-bold uppercase">Basado en sistemas tradicionales de alta estructura de costes.</p>
          </div>
        </div>
      </div>

      {/* KPI RÁPIDO: ESCALABILIDAD */}
      <div className="bg-yellow-400 p-8 rounded-[3rem] text-black">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-black text-white p-2 rounded-lg">
            <DollarSign size={20} />
          </div>
          <span className="font-black uppercase text-xs tracking-widest">Inversión Smart</span>
        </div>
        <div className="text-5xl font-black italic tracking-tighter leading-none">3.5x ROI</div>
        <p className="text-sm font-bold mt-2 leading-tight uppercase opacity-80">Proyección de retorno a 24 meses basada en contratos de distribución en +30 países.</p>
      </div>
    </div>

    {/* COLUMNA DERECHA: EL GRÁFICO DE CRECIMIENTO EXPONENCIAL */}
    <div className="lg:col-span-7 bg-[#0f172a] border border-white/10 p-10 rounded-[3rem] relative overflow-hidden">
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="text-2xl font-black italic text-white uppercase tracking-tighter">Trayectoria de Ingresos</h3>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">Crecimiento YoY Consolidado</p>
        </div>
        <div className="flex gap-2">
            <div className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-green-500/20">
              +51% Growth 2023
            </div>
            <div className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full text-[10px] font-black uppercase border border-yellow-400/20">
              Target 2026
            </div>
        </div>
      </div>

      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={financialData.ventas}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis 
              dataKey="year" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#475569', fontSize: 12, fontWeight: 'bold'}} 
              dy={15}
            />
            <YAxis hide domain={[0, 250000]} />
            <Tooltip 
              cursor={{ stroke: '#facc15', strokeWidth: 2, strokeDasharray: '5 5' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-black border border-white/10 p-4 rounded-2xl shadow-2xl">
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{payload[0].payload.year}</p>
                      <p className="text-xl font-black italic text-white">{payload[0].value.toLocaleString()}€</p>
                      <p className="text-[9px] font-black text-yellow-400 uppercase mt-1">{payload[0].payload.tag}</p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="monto" 
              stroke="#facc15" 
              strokeWidth={4} 
              fillOpacity={1} 
              fill="url(#colorSales)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
        {[
          { label: "Punto Equilibrio", val: "Q2 2026" },
          { label: "EBITDA Anual", val: "78.4%" },
          { label: "Asset Value", val: "IP Patent" }
        ].map((item, i) => (
          <div key={i}>
            <p className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{item.label}</p>
            <p className="text-lg font-black italic text-white">{item.val}</p>
          </div>
        ))}
      </div>
    </div>

  </div>
</section>
      {/* 4. AHORRO COSTES ENERGÉTICOS */}
      <section className="py-32 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <Leaf className="text-green-400 mb-6" size={40} />
            <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none mb-8">
              EFICIENCIA <br /><span className="text-green-400">TÉRMICA TOTAL.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Invisotherm™ elimina la pérdida por convección. Al calentar la estructura de la pared (Pladur/Fibrocemento), el calor se mantiene por radiación homogénea, reduciendo el consumo eléctrico en un <span className="text-white font-bold">40% frente a emisores térmicos convencionales.</span>
            </p>
            <div className="flex items-center gap-4 bg-green-400/10 border border-green-400/20 p-6 rounded-3xl">
              <Zap className="text-green-400" />
              <div>
                <p className="text-white font-black italic uppercase">Cero Polvo / Cero Mantenimiento</p>
                <p className="text-xs text-green-400 font-bold">Sin calderas, sin tuberías, vida útil indefinida.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img src="/Aluplak6.jpeg" alt="Eficiencia" className="w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 5. AHORRO MANO DE OBRA (INSTALACIÓN) */}
      <section id="eficiencia" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black italic tracking-tighter text-white uppercase italic">Instalación en Tiempo Récord</h2>
            <p className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mt-4">Reducción de costes operativos del 80%</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-[#0f172a] border border-white/5 p-4 rounded-[2.5rem] flex flex-col gap-4">
              <img src="/Aluplak7.jpeg" className="rounded-[2rem] h-64 object-cover" alt="Mecanismo" />
              <div className="p-4">
                <h4 className="text-white font-black uppercase italic mb-2">Paso 1: Perfilería</h4>
                <p className="text-xs text-slate-500">Sistema bi-componente que se integra en el drywall sin necesidad de rozas.</p>
              </div>
            </div>
            <div className="bg-[#0f172a] border border-white/5 p-4 rounded-[2.5rem] flex flex-col gap-4">
              <img src="/Aluplak8.jpeg" className="rounded-[2rem] h-64 object-cover" alt="Mecanismo" />
              <div className="p-4">
                <h4 className="text-white font-black uppercase italic mb-2">Paso 2: Nanotecnología</h4>
                <p className="text-xs text-slate-500">Inserción del panel calefactor de 0.5mm. Plug & Play térmico.</p>
              </div>
            </div>
            <div className="bg-yellow-400 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center">
              <Clock size={48} className="text-black mb-6" />
              <div className="text-6xl font-black text-black italic leading-none">-80%</div>
              <p className="text-black font-black uppercase text-[10px] tracking-widest mt-2">Horas de Montaje</p>
              <div className="h-40 w-full mt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={financialData.ahorroLaboral}>
                    <Bar dataKey="horas" radius={10}>
                      {financialData.ahorroLaboral.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PATENTES PROPIEDAD DE LA EMPRESA */}
      <section id="patentes" className="py-32 px-6 bg-white rounded-[4rem] text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="bg-black text-white w-fit px-4 py-1 rounded-full text-[10px] font-black uppercase mb-6">Asset Intelligence</div>
            <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
              PROPIEDAD <br /> <span className="text-yellow-500 underline">INTELECTUAL</span> <br /> 100% ALUPLAK.
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <Award className="mb-4" size={32} />
                <h4 className="font-black uppercase italic">Patente Europea</h4>
                <p className="text-sm opacity-60">Control total sobre la fabricación y distribución del sistema bi-componente.</p>
              </div>
              <div>
                <ShieldCheck className="mb-4" size={32} />
                <h4 className="font-black uppercase italic">Certificación IMQ</h4>
                <p className="text-sm opacity-60">Homologación bajo estándares IEC 60335 para seguridad eléctrica global.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <img src="/Aluplak5.jpeg" className="rounded-[3rem] shadow-2xl rotate-3" alt="Patente" />
          </div>
        </div>
      </section>

      {/* 6. CONFORT COMO VALOR FUNDAMENTAL */}
      <section id="confort" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Activity className="text-yellow-400 mx-auto mb-8" size={64} />
          <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none mb-10">
            EL CONFORT <br /><span className="text-yellow-400">NO SE VE, SE SIENTE.</span>
          </h2>
          <p className="text-slate-400 text-2xl font-light leading-relaxed mb-12 italic">
            "Eliminamos el ruido visual y el polvo en suspensión. Creamos espacios de bienestar puro mediante radiación infrarroja, la forma más natural de calor conocida por el hombre."
          </p>
          <div className="aspect-video rounded-[3rem] overflow-hidden border border-white/10">
            <video controls className="w-full h-full object-cover">
              <source src="/AluplakVideo2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-black italic text-3xl text-white">ALUPLAK<span className="text-yellow-400">.</span></div>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black uppercase text-[10px] hover:scale-105 transition-transform flex items-center gap-3">
            Contactar Fundadores <ArrowUpRight size={16}/>
          </button>
        </div>
      </footer>
    </div>
  );
}
