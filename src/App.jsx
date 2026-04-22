import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  AreaChart, Area, Cell, LabelList, LineChart, Line
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingDown, Zap, Target, BarChart3, Clock, 
  ArrowUpRight, ShieldCheck, Cpu, Leaf, Globe 
} from "lucide-react";

// --- DATOS ESTRATÉGICOS (Basados en Dossier) ---
const financialData = {
  historico: [
    { year: "2022", ventas: 47416, hito: "Lanzamiento" },
    { year: "2023", ventas: 71677, hito: "+51% Crecimiento" },
    { year: "2024", ventas: 88210, hito: "Consolidación" },
    { year: "2025", ventas: 132531, hito: "Récord Técnico" },
    { year: "2026", ventas: 220000, hito: "Liderazgo Invisotherm" }
  ],
  margenes: [
    { name: "Zócalo Técnico", valor: 78, color: "#334155" }, // Margen 75-80%
    { name: "Invisotherm", valor: 65, color: "#facc15" },    // Margen >65%
    { name: "Sectorial Medio", valor: 28, color: "#1e293b" } // Referencia EBITDA
  ]
};

// --- COMPONENTES ATÓMICOS ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">{title}</h2>
    <p className="text-yellow-400 font-bold tracking-widest text-xs uppercase mt-2">{subtitle}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("financiero");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 1. NAVEGACIÓN SUPERIOR */}
      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="font-black italic text-2xl tracking-tighter text-white">ALUPLAK<span className="text-yellow-400">.</span></div>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-widest">Patented Tech</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-yellow-400 transition">Tecnología</a>
            <a href="#finanzas" className="hover:text-yellow-400 transition">Inversión</a>
            <a href="#eficiencia" className="hover:text-yellow-400 transition">Eficiencia</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition">
            Dossier 2026
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION: MÉTRICAS Y PATENTES */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           {/* Aquí iría AluplakVideo1.mp4 de fondo sutil */}
           <video autoPlay loop muted className="w-full h-full object-cover grayscale" src="/AluplakVideo1.mp4" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 text-yellow-400 mb-6">
              <ShieldCheck size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-xs">Tecnología Patentada & Homologada</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white italic leading-[0.85]">
              CLIMATIZACIÓN <br /><span className="text-yellow-400 text-outline">INVISIBLE.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                Única compañía integrando <span className="text-white font-bold text-2xl italic">nanotecnología térmica</span> en elementos constructivos[cite: 67]. 
                Sistemas bi-componente patentados que eliminan radiadores y optimizan el margen EBITDA al 28%[cite: 11, 69].
              </p>
              <div className="flex gap-4">
                <img src="/Aluplak1.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech detail" />
                <img src="/Aluplak2.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech detail" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECCIÓN FINANCIERA DETALLADA */}
      <section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <SectionTitle title="Métricas de Inversión" subtitle="Evolución y Rentabilidad Proyectada" />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gráfico Evolución Ingresos */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
            <h3 className="text-white font-black italic mb-8 uppercase tracking-tighter">Histórico y Proyección de Ventas (€)</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financialData.historico}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                  <XAxis dataKey="year" axisLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '16px'}} />
                  <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-[10px] text-slate-500 uppercase font-black tracking-widest">Crecimiento disruptivo proyectado para 2026: +66%.</p>
          </div>

          {/* Comparativa de Márgenes */}
          <div className="bg-yellow-400 text-black p-10 rounded-[3rem] flex flex-col">
            <h3 className="font-black italic mb-8 uppercase tracking-tighter text-2xl">Margen por Producto</h3>
            <div className="space-y-8 flex-grow">
              {financialData.margenes.map((m, i) => (
                <div key={i}>
                  <div className="flex justify-between font-black uppercase text-[10px] mb-2 tracking-widest">
                    <span>{m.name}</span>
                    <span>{m.valor}%</span>
                  </div>
                  <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${m.valor}%` }} 
                      className="h-full bg-black" 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-black/5 p-6 rounded-2xl border border-black/10">
              <p className="text-xs font-bold leading-tight">Invisotherm permite un markup superior gracias a su valor percibido como solución "Todo en Uno"[cite: 33].</p>
            </div>
          </div>
        </div>
      </section>
{/* SECCIÓN: DEMOSTRACIÓN TÉCNICA Y PRODUCTO EN ACCIÓN (Manual Play) */}
<section className="bg-[#020617] py-32 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <SectionTitle 
      title="Tecnología en Movimiento" 
      subtitle="Haz clic para visualizar la disrupción de Aluplak" 
    />

    <div className="grid md:grid-cols-2 gap-8">
      import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  AreaChart, Area, Cell, LabelList, LineChart, Line
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingDown, Zap, Target, BarChart3, Clock, 
  ArrowUpRight, ShieldCheck, Cpu, Leaf, Globe 
} from "lucide-react";

// --- DATOS ESTRATÉGICOS (Basados en Dossier) ---
const financialData = {
  historico: [
    { year: "2022", ventas: 47416, hito: "Lanzamiento" },
    { year: "2023", ventas: 71677, hito: "+51% Crecimiento" },
    { year: "2024", ventas: 88210, hito: "Consolidación" },
    { year: "2025", ventas: 132531, hito: "Récord Técnico" },
    { year: "2026", ventas: 220000, hito: "Liderazgo Invisotherm" }
  ],
  margenes: [
    { name: "Zócalo Técnico", valor: 78, color: "#334155" }, // Margen 75-80%
    { name: "Invisotherm", valor: 65, color: "#facc15" },    // Margen >65%
    { name: "Sectorial Medio", valor: 28, color: "#1e293b" } // Referencia EBITDA
  ]
};

// --- COMPONENTES ATÓMICOS ---

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-black italic tracking-tighter text-white uppercase">{title}</h2>
    <p className="text-yellow-400 font-bold tracking-widest text-xs uppercase mt-2">{subtitle}</p>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("financiero");

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* 1. NAVEGACIÓN SUPERIOR */}
      <nav className="border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="font-black italic text-2xl tracking-tighter text-white">ALUPLAK<span className="text-yellow-400">.</span></div>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-400 font-bold uppercase tracking-widest">Patented Tech</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
            <a href="#hero" className="hover:text-yellow-400 transition">Tecnología</a>
            <a href="#finanzas" className="hover:text-yellow-400 transition">Inversión</a>
            <a href="#eficiencia" className="hover:text-yellow-400 transition">Eficiencia</a>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition">
            Dossier 2026
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION: MÉTRICAS Y PATENTES */}
      <section id="hero" className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
           {/* Aquí iría AluplakVideo1.mp4 de fondo sutil */}
           <video autoPlay loop muted className="w-full h-full object-cover grayscale" src="/AluplakVideo1.mp4" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 text-yellow-400 mb-6">
              <ShieldCheck size={24} />
              <span className="font-black uppercase tracking-[0.3em] text-xs">Tecnología Patentada & Homologada</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-8 tracking-tighter text-white italic leading-[0.85]">
              CLIMATIZACIÓN <br /><span className="text-yellow-400 text-outline">INVISIBLE.</span>
            </h1>
            <div className="grid md:grid-cols-2 gap-12 items-end">
              <p className="text-slate-400 text-xl font-light leading-relaxed max-w-xl">
                Única compañía integrando <span className="text-white font-bold text-2xl italic">nanotecnología térmica</span> en elementos constructivos[cite: 67]. 
                Sistemas bi-componente patentados que eliminan radiadores y optimizan el margen EBITDA al 28%[cite: 11, 69].
              </p>
              <div className="flex gap-4">
                <img src="/Aluplak1.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech detail" />
                <img src="/Aluplak2.jpeg" className="w-32 h-32 object-cover rounded-2xl border border-white/10" alt="Tech detail" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SECCIÓN FINANCIERA DETALLADA */}
      <section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <SectionTitle title="Métricas de Inversión" subtitle="Evolución y Rentabilidad Proyectada" />
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Gráfico Evolución Ingresos */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-sm">
            <h3 className="text-white font-black italic mb-8 uppercase tracking-tighter">Histórico y Proyección de Ventas (€)</h3>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financialData.historico}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                  <XAxis dataKey="year" axisLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '16px'}} />
                  <Area type="monotone" dataKey="ventas" stroke="#facc15" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-[10px] text-slate-500 uppercase font-black tracking-widest">Crecimiento disruptivo proyectado para 2026: +66%.</p>
          </div>

          {/* Comparativa de Márgenes */}
          <div className="bg-yellow-400 text-black p-10 rounded-[3rem] flex flex-col">
            <h3 className="font-black italic mb-8 uppercase tracking-tighter text-2xl">Margen por Producto</h3>
            <div className="space-y-8 flex-grow">
              {financialData.margenes.map((m, i) => (
                <div key={i}>
                  <div className="flex justify-between font-black uppercase text-[10px] mb-2 tracking-widest">
                    <span>{m.name}</span>
                    <span>{m.valor}%</span>
                  </div>
                  <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: `${m.valor}%` }} 
                      className="h-full bg-black" 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-black/5 p-6 rounded-2xl border border-black/10">
              <p className="text-xs font-bold leading-tight">Invisotherm permite un markup superior gracias a su valor percibido como solución "Todo en Uno"[cite: 33].</p>
            </div>
          </div>
        </div>
      </section>
{/* SECCIÓN: DEMOSTRACIÓN TÉCNICA Y PRODUCTO EN ACCIÓN (Manual Play) */}
<section className="bg-[#020617] py-32 px-6 border-t border-white/5">
  <div className="max-w-7xl mx-auto">
    <SectionTitle 
      title="Tecnología en Movimiento" 
      subtitle="Haz clic para visualizar la disrupción de Aluplak" 
    />

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* CARD VIDEO 2: FOCO EN INSTALACIÓN / ACABADO */}
      <div className="group relative bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
        <div className="aspect-video w-full overflow-hidden bg-black">
          <video 
            controls 
            preload="metadata"
            poster="/Aluplak5.jpeg" // Usa una de tus imágenes como portada
            className="w-full h-full object-cover"
          >
            <source src="/AluplakVideo2.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
        <div className="p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400 font-mono">Video ID: 02 / Instalación</span>
          </div>
          <h3 className="text-2xl font-black italic text-white uppercase mb-4 tracking-tighter">
            Montaje en tiempo récord
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Visualiza cómo el sistema bi-componente reduce drásticamente los tiempos de ejecución en obra blanca.
          </p>
        </div>
      </div>

      {/* CARD VIDEO 1: FOCO EN DISEÑO Y CALOR INVISIBLE */}
      <div className="group relative bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
        <div className="aspect-video w-full overflow-hidden bg-black">
          <video 
            controls 
            preload="metadata"
            poster="/Aluplak1.jpeg" // Usa otra imagen como portada
            className="w-full h-full object-cover"
          >
            <source src="/AluplakVideo1.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
        <div className="p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 font-mono">Video ID: 01 / Concepto</span>
          </div>
          <h3 className="text-2xl font-black italic text-white uppercase mb-4 tracking-tighter">
            Invisotherm: El futuro térmico
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Demostración estética de la integración de nanotecnología en paneles de fibrocemento.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      
   {/* 4. AHORRO Y EFICIENCIA (ENERGÍA + MANO DE OBRA) */}
<section id="eficiencia" className="bg-white px-6 py-32 text-black">
  <div className="max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div>
        <SectionTitle title="Eficiencia Radical" subtitle="Ahorro Operativo y Energético" />
        
        {/* NUEVO: DESTACADO DE ROI ESTRATÉGICO */}
        <div className="mb-10 bg-yellow-400/10 border-l-4 border-yellow-400 p-6 rounded-r-2xl">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-black italic tracking-tighter text-black">3.5x</div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-yellow-600">ROI Proyectado</p>
              <p className="text-sm font-bold leading-tight">Retorno de inversión basado en la reducción de tiempos y eficiencia de Invisotherm.</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex gap-6">
            <div className="bg-black text-white w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
              <Clock size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black italic uppercase tracking-tighter">-80% Tiempo de Obra</h4>
              <p className="text-slate-600 mt-2 leading-relaxed">
                El sistema bi-componente permite un montaje inmediato sin rozas ni albañilería, optimizando el coste de mano de obra.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-yellow-400 text-black w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
              <Zap size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black italic uppercase tracking-tighter">Confort Inteligente</h4>
              <p className="text-slate-600 mt-2 leading-relaxed">
                Nanotecnología térmica de baja inercia: calor por radiación que no consume oxígeno y maximiza el ahorro energético.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <img src="/Aluplak5.jpeg" className="rounded-[4rem] shadow-2xl border-8 border-slate-100" alt="Eficiencia Aluplak" />
        {/* Pequeño detalle técnico extraído de la ficha técnica */}
        <div className="absolute -top-6 -right-6 bg-black text-white px-6 py-4 rounded-2xl shadow-xl">
           <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Espesor del Panel</p>
           <p className="text-2xl font-black italic">~1mm</p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* 5. SECCIÓN PROPIEDAD INTELECTUAL */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-[#0f172a] border border-white/10 rounded-[4rem] p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5">
            <ShieldCheck size={400} />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-6">Activos de <br />Propiedad Intelectual.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                A diferencia de los distribuidores, Aluplak es **dueña de sus patentes**[cite: 11]. Esto garantiza márgenes protegidos en proyectos de lujo y una ventaja competitiva infranqueable en el nicho de "Calefacción Invisible"[cite: 37, 68].
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Aluplak7.jpeg" className="rounded-3xl border border-white/5" />
              <img src="/Aluplak8.jpeg" className="rounded-3xl border border-white/5" />
              <div className="col-span-2 bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mb-2">Homologaciones Vigentes</p>
                <p className="text-xs text-slate-300">Certificado por IMQ Ibérica y SGS bajo normas IEC 60335.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-20">
          <div className="text-center md:text-left">
            <div className="font-black italic text-3xl tracking-tighter text-white mb-2">ALUPLAK<span className="text-yellow-400">.</span></div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Future of Thermal Infrastructure</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:invert transition">
              Investor Relations
            </button>
            <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition">
              Contact Founders
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
      
      {/* CARD VIDEO 1: FOCO EN DISEÑO Y CALOR INVISIBLE */}
      <div className="group relative bg-white/5 rounded-[3rem] overflow-hidden border border-white/10">
        <div className="aspect-video w-full overflow-hidden bg-black">
          <video 
            controls 
            preload="metadata"
            poster="/Aluplak1.jpeg" // Usa otra imagen como portada
            className="w-full h-full object-cover"
          >
            <source src="/AluplakVideo1.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>
        <div className="p-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-400 font-mono">Video ID: 01 / Concepto</span>
          </div>
          <h3 className="text-2xl font-black italic text-white uppercase mb-4 tracking-tighter">
            Invisotherm: El futuro térmico
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Demostración estética de la integración de nanotecnología en paneles de fibrocemento.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      
      {/* 4. AHORRO Y EFICIENCIA (ENERGÍA + MANO DE OBRA) */}
      <section id="eficiencia" className="bg-white px-6 py-32 text-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionTitle title="Eficiencia Radical" subtitle="Ahorro Operativo y Energético" />
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="bg-black text-white w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic uppercase tracking-tighter">-80% Tiempo de Obra</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">El sistema bi-componente permite un montaje inmediato sin rozas ni albañilería[cite: 12].</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="bg-yellow-400 text-black w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
                    <Zap size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black italic uppercase tracking-tighter Eficiencia Térmica">Consumo Inteligente</h4>
                    <p className="text-slate-600 mt-2 leading-relaxed">Nanotecnología térmica que no consume oxígeno ni necesita mantenimiento indefinido[cite: 78, 79].</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="/Aluplak5.jpeg" className="rounded-[4rem] shadow-2xl" alt="Eficiencia Aluplak" />
              <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 rounded-[3rem] max-w-xs">
                <div className="text-5xl font-black italic text-yellow-400 mb-2">ROI 3.5x</div>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60 text-white">Proyección de retorno sobre inversión inmobiliaria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN PROPIEDAD INTELECTUAL */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-[#0f172a] border border-white/10 rounded-[4rem] p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5">
            <ShieldCheck size={400} />
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-16">
            <div>
              <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Cpu size={24} />
              </div>
              <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter leading-none mb-6">Activos de <br />Propiedad Intelectual.</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                A diferencia de los distribuidores, Aluplak es **dueña de sus patentes**[cite: 11]. Esto garantiza márgenes protegidos en proyectos de lujo y una ventaja competitiva infranqueable en el nicho de "Calefacción Invisible"[cite: 37, 68].
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/Aluplak7.jpeg" className="rounded-3xl border border-white/5" />
              <img src="/Aluplak8.jpeg" className="rounded-3xl border border-white/5" />
              <div className="col-span-2 bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-400 mb-2">Homologaciones Vigentes</p>
                <p className="text-xs text-slate-300">Certificado por IMQ Ibérica y SGS bajo normas IEC 60335.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-20">
          <div className="text-center md:text-left">
            <div className="font-black italic text-3xl tracking-tighter text-white mb-2">ALUPLAK<span className="text-yellow-400">.</span></div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">Future of Thermal Infrastructure</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:invert transition">
              Investor Relations
            </button>
            <button className="bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition">
              Contact Founders
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
