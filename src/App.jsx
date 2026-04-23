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
              <img src="/Aluplak4.jpeg" className="w-24 h-24 object-cover rounded-2xl border border-white/10" alt="Detail" />
            </div>
          </motion.div>
        </div>
      </section>

{/* 3. SECCIÓN FINANCIERA: RADAR DE INVERSIÓN & DISRUPCIÓN DE MÁRGENES */}
<section id="finanzas" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
  
  {/* Encabezado con el concepto de Integración Vertical */}
  <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
    <div className="max-w-2xl">
      <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-none mb-6">
        EFICIENCIA DE <br /> <span className="text-yellow-400">CAPITAL.</span>
      </h2>
      <p className="text-slate-400 text-lg border-l-2 border-yellow-400 pl-6 italic">
        "No competimos en precio, competimos en rentabilidad. Aluplak transforma el coste de construcción en un activo tecnológico de alto margen."
      </p>
    </div>
    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 flex-1">
      <p className="text-yellow-400 font-black uppercase text-[10px] tracking-widest mb-2">Pilar Estratégico 01</p>
      <h4 className="text-white font-black italic uppercase text-lg">Integración Vertical</h4>
      <p className="text-slate-500 text-sm mt-2">
        Fabricamos tecnología propia basada en micas y carbonos. Al eliminar intermediarios, convertimos materiales ligeros en soluciones de alto valor.
      </p>
    </div>
  </div>

  <div className="grid lg:grid-cols-12 gap-8">
    
    {/* COLUMNA IZQUIERDA: COMPARATIVA EBITDA */}
    <div className="lg:col-span-5 space-y-8">
      <div className="bg-[#0f172a] border border-white/10 p-10 rounded-[3rem] relative overflow-hidden group">
        <div className="flex justify-between items-end mb-10">
          <h3 className="text-2xl font-black italic text-white uppercase leading-tight">Margen <br /> EBITDA</h3>
          <div className="text-right">
            <span className="text-5xl font-black text-yellow-400 italic">78%</span>
            <p className="text-[10px] text-slate-500 font-bold uppercase">Vs 28% Sector</p>
          </div>
        </div>
        
        {/* Gráfico de Barras Comparativo */}
        <div className="space-y-6">
          <div className="h-12 bg-white/5 rounded-2xl relative overflow-hidden border border-white/5">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "78%" }} 
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 flex items-center px-4"
            >
              <span className="text-black font-black text-[10px] uppercase">Aluplak Tech</span>
            </motion.div>
          </div>
          <div className="h-12 bg-white/5 rounded-2xl relative overflow-hidden border border-white/5 opacity-40">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "28%" }} 
              className="h-full bg-slate-600 flex items-center px-4"
            >
              <span className="text-white font-black text-[10px] uppercase tracking-tighter">Competencia HVAC</span>
            </motion.div>
          </div>
        </div>

        <p className="mt-8 text-xs text-slate-400 leading-relaxed uppercase font-bold tracking-tight">
          Nuestra ventaja: El <span className="text-white">Modelo "Asset-Light"</span>. No vendemos hierro, vendemos IP. Esto permite que casi todo el margen bruto fluya directamente al beneficio operativo.
        </p>
      </div>

      {/* KPI: Mantenimiento Cero */}
      <div className="bg-yellow-400 p-10 rounded-[3rem] text-black group hover:scale-[1.02] transition-transform cursor-default">
        <Activity size={40} className="mb-4" />
        <h4 className="text-xl font-black uppercase italic leading-none mb-2">Mantenimiento Cero = <br /> Valor Infinito</h4>
        <p className="text-sm font-bold opacity-80 uppercase leading-tight">
          Sin fluidos ni partes móviles. Eliminamos el coste de postventa que erosiona los márgenes de los fabricantes tradicionales.
        </p>
      </div>
    </div>

    {/* COLUMNA DERECHA: CRECIMIENTO Y PROYECCIÓN */}
    <div className="lg:col-span-7 bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">Trayectoria Proyectada</h3>
          <p className="text-[10px] font-black text-yellow-400 uppercase tracking-[0.4em] mt-2">Escalabilidad Global 2026</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-black text-white italic tracking-tighter">132K€</p>
          <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Récord 2025</p>
        </div>
      </div>

      <div className="h-[350px] w-full flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={financialData.ventas}>
            <defs>
              <linearGradient id="glowYellow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
            <XAxis dataKey="year" hide />
            <Tooltip 
              content={({ payload }) => payload?.[0] ? (
                <div className="bg-black border border-yellow-400/50 p-4 rounded-xl shadow-2xl">
                  <p className="text-[10px] font-black text-slate-500 uppercase">{payload[0].payload.year}</p>
                  <p className="text-xl font-black text-white italic">{payload[0].value.toLocaleString()}€</p>
                </div>
              ) : null }
            />
            <Area 
              type="stepAfter" 
              dataKey="monto" 
              stroke="#facc15" 
              strokeWidth={3} 
              fill="url(#glowYellow)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck size={16} className="text-yellow-400" />
            <span className="text-[10px] font-black uppercase text-slate-500">Garantía Inversor</span>
          </div>
          <p className="text-sm text-slate-300 italic">"Estructura blindada por patentes propias y baja exposición a costes fijos."</p>
        </div>
        <div className="bg-white/5 rounded-2xl p-4 flex flex-col justify-center text-center border border-white/5">
           <span className="text-2xl font-black text-white italic">3.5x ROI</span>
           <span className="text-[9px] font-black uppercase text-yellow-400 tracking-tighter">Retorno Estimado 24 Meses</span>
        </div>
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

{/* 5. AHORRO MANO DE OBRA: INSTALACIÓN ULTRA-FAST */}
<section id="eficiencia" className="py-32 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-12 bg-yellow-400"></span>
          <span className="text-yellow-400 font-black uppercase tracking-[0.3em] text-xs">Operatividad Revolucionaria</span>
        </div>
        <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase leading-[0.85]">
          INSTALACIÓN <br /> EN UN <span className="text-yellow-400 underline decoration-8">CLIC.</span>
        </h2>
      </div>
      <div className="text-right hidden md:block">
        <p className="text-5xl font-black text-white italic">-80%</p>
        <p className="text-xs text-slate-500 font-black uppercase tracking-widest">Coste de Mano de Obra</p>
      </div>
    </div>

    <div className="grid lg:grid-cols-12 gap-12 items-start">
      
      {/* IMAGEN PRINCIPAL: EL OPERARIO (Aluplak3) */}
      <div className="lg:col-span-7 relative group">
        <div className="absolute -inset-4 bg-yellow-400/20 blur-2xl rounded-[4rem] opacity-0 group-hover:opacity-100 transition duration-700"></div>
        <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="/Aluplak3.jpeg" 
            alt="Operario instalando Aluplak" 
            className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition duration-700 scale-105 group-hover:scale-100" 
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-10">
            <div className="flex items-center gap-4">
              <div className="bg-yellow-400 text-black p-3 rounded-2xl rotate-12">
                <Hand size={24} />
              </div>
              <p className="text-white font-black italic uppercase text-xl">Sistema Bi-Componente Patentado</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMPARATIVA DE TIEMPOS POTENTE */}
      <div className="lg:col-span-5 space-y-8">
        <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem]">
          <h3 className="text-white font-black uppercase italic mb-8 tracking-tighter text-xl">Tiempo de Ejecución (Horas/Estancia)</h3>
          
          <div className="space-y-12">
            {/* Otros Sistemas */}
            <div className="relative">
              <div className="flex justify-between mb-3 items-center">
                <span className="text-slate-500 font-black text-[10px] uppercase tracking-widest">Sistemas Tradicionales (Agua/Gas)</span>
                <span className="text-slate-400 font-black italic">12h - 16h</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  className="h-full bg-slate-700"
                />
              </div>
              <p className="text-[9px] text-slate-600 mt-2 uppercase font-bold tracking-tighter">Incluye: Rozas, tuberías, soldaduras y albañilería.</p>
            </div>

            {/* ALUPLAK */}
            <div className="relative">
              <div className="flex justify-between mb-3 items-center">
                <span className="text-yellow-400 font-black text-[10px] uppercase tracking-widest">ALUPLAK INVISOTHERM</span>
                <span className="text-2xl font-black text-white italic">2.5h</span>
              </div>
              <div className="h-6 w-full bg-white/5 rounded-full overflow-hidden border border-yellow-400/20">
                <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "20%" }} 
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.5)] flex items-center justify-end px-2"
                />
              </div>
              <p className="text-[9px] text-yellow-400/60 mt-2 uppercase font-bold tracking-tighter">Montaje en seco. Integración directa en Drywall.</p>
            </div>
          </div>
        </div>

        {/* BENEFICIO ECONÓMICO DIRECTO */}
        <div className="bg-white p-10 rounded-[3rem] text-black">
          <div className="flex items-center gap-4 mb-6">
            <Clock className="text-yellow-500" size={32} />
            <h4 className="font-black uppercase italic leading-none">Ahorro en <br /> Mano de Obra</h4>
          </div>
          <p className="text-sm font-bold opacity-70 leading-relaxed uppercase">
            La facilidad de montaje permite que operarios de carpintería o pladur realicen la instalación térmica, eliminando la dependencia de técnicos especializados costosos.
          </p>
          <div className="mt-6 flex gap-2">
            <img src="/Aluplak7.jpeg" className="w-16 h-16 rounded-xl object-cover border-2 border-black/5" alt="paso 1" />
            <img src="/Aluplak8.jpeg" className="w-16 h-16 rounded-xl object-cover border-2 border-black/5" alt="paso 2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 6. PATENTES Y PROPIEDAD INTELECTUAL: DISEÑO DE IMPACTO CENTRAL */}
<section id="patentes" className="py-32 bg-[#020617] relative overflow-hidden">
  
  {/* 1. CABECERA CENTRADA */}
  <div className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-center items-center gap-3 mb-6">
        <span className="h-px w-8 bg-yellow-400"></span>
        <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs">Asset Intelligence</span>
        <span className="h-px w-8 bg-yellow-400"></span>
      </div>
      <h2 className="text-6xl md:text-8xl font-black italic text-white uppercase leading-[0.85] mb-8">
        ACTIVO <br /> <span className="text-yellow-400">BLINDADO.</span>
      </h2>
      <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto leading-relaxed">
        Nuestra tecnología no solo es innovadora, es **nuestra**. Poseemos el 100% de la propiedad intelectual del sistema bi-componente que está revolucionando la construcción en seco.
      </p>
    </motion.div>
  </div>

  {/* 2. EL VIDEO: LA PRUEBA TÉCNICA (Ancho contenido) */}
  <div className="max-w-5xl mx-auto px-6 mb-32">
    <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video md:aspect-[21/9]">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="w-full h-full object-cover opacity-70"
      >
        <source src="/AluplakVideo1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      <div className="absolute bottom-10 left-10 flex items-center gap-4">
        <div className="bg-yellow-400 text-black p-3 rounded-2xl">
          <Zap size={24} fill="currentColor" />
        </div>
        <div>
          <p className="text-white font-black uppercase italic text-lg tracking-tighter">Invisotherm™ Nanotech</p>
          <p className="text-[10px] text-yellow-400 font-black uppercase tracking-widest">Validación de Patente en directo</p>
        </div>
      </div>
    </div>
  </div>

  {/* 3. GRID DE VALORES DE PATENTE (Dos columnas simples) */}
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 mb-32">
    <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col justify-between">
      <div className="mb-8 text-yellow-400">
        <ShieldCheck size={48} />
      </div>
      <div>
        <h4 className="text-2xl font-black text-white uppercase italic mb-4">Patente de Invención</h4>
        <p className="text-slate-400 leading-relaxed">
          Protección internacional del sistema bi-componente desmontable. Un monopolio tecnológico que impide la entrada de sustitutos en más de 30 países.
        </p>
      </div>
    </div>
    
    <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] flex flex-col justify-between">
      <div className="mb-8 text-yellow-400">
        <Award size={48} />
      </div>
      <div>
        <h4 className="text-2xl font-black text-white uppercase italic mb-4">Certificación IMQ</h4>
        <p className="text-slate-400 leading-relaxed">
          Homologación total bajo estándares IEC 60335. Seguridad eléctrica garantizada para su integración en edificios residenciales y comerciales.
        </p>
      </div>
    </div>
  </div>

  {/* 4. LA IMAGEN IMPACTO: Aluplak5 (Full Width sin cortes) */}
  <div className="max-w-7xl mx-auto px-6">
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
      <div className="relative h-[600px] rounded-[4rem] overflow-hidden border border-white/20">
        <img 
          src="/Aluplak5.jpeg" 
          alt="Aluplak Premium Intellectual Property" 
          className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition duration-[2s]"
        />
        {/* Overlay con mensaje final de inversión */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-center p-20">
          <div className="max-w-md">
            <h5 className="text-yellow-400 font-black uppercase tracking-widest text-xs mb-4">Conclusión Estratégica</h5>
            <p className="text-3xl font-black text-white italic uppercase leading-none mb-6">
              DISEÑO QUE <br /> NO PUEDEN <br /> COPIAR.
            </p>
            <p className="text-slate-300 text-sm font-bold uppercase tracking-tight">
              Aluplak combina la estética de alta gama con la exclusividad legal de sus patentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
{/* 6. CONFORT COMO VALOR FUNDAMENTAL: BIENESTAR INVISIBLE */}
<section id="confort" className="py-32 bg-white text-black relative overflow-hidden">
  
  {/* 1. CABECERA CENTRADA Y EMOCIONAL */}
  <div className="max-w-4xl mx-auto px-6 text-center mb-20 relative z-10">
    <div className="flex justify-center mb-8">
      <div className="bg-yellow-400 p-4 rounded-full">
        <Activity size={32} className="text-black" />
      </div>
    </div>
    <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.85] mb-8">
      EL CONFORT <br /><span className="text-yellow-500">NO SE VE.</span>
    </h2>
    <p className="text-slate-500 text-2xl font-light leading-relaxed italic">
      "Eliminamos el ruido visual y el polvo en suspensión. Creamos espacios de bienestar puro mediante radiación infrarroja, la forma más natural de calor conocida."
    </p>
  </div>

  {/* 2. IMAGEN IMPACTO: Aluplak8 (Detalle de tecnología y acabado) */}
  <div className="max-w-6xl mx-auto px-6 mb-20">
    <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)]">
      <img 
        src="/Aluplak8.jpeg" 
        alt="Detalle de confort Aluplak" 
        className="w-full h-[500px] object-cover object-center"
      />
      {/* Etiqueta flotante */}
      <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-black/5 max-w-xs hidden md:block">
        <p className="font-black uppercase text-[10px] tracking-widest mb-2 text-yellow-600">Pure Wellness</p>
        <p className="text-sm font-bold leading-tight">Integración milimétrica que respeta la arquitectura y mejora la salud del aire.</p>
      </div>
    </div>
  </div>

  {/* 3. BLOQUE DE CIERRE: VIDEO 2 (La experiencia de usuario) */}
  <div className="max-w-4xl mx-auto px-6">
    <div className="bg-slate-50 rounded-[3rem] p-12 border border-slate-100 text-center">
      <h3 className="text-2xl font-black uppercase italic mb-8">Siente la radiación homogénea</h3>
      <div className="aspect-video rounded-[2rem] overflow-hidden border border-black/10 shadow-lg bg-black">
        <video controls className="w-full h-full object-cover">
          <source src="/AluplakVideo2.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="flex flex-col items-center">
          <Zap size={20} className="text-yellow-500 mb-2"/>
          <span className="text-[9px] font-black uppercase">Sin Corrientes</span>
        </div>
        <div className="flex flex-col items-center">
          <Leaf size={20} className="text-green-500 mb-2"/>
          <span className="text-[9px] font-black uppercase">Aire Puro</span>
        </div>
        <div className="flex flex-col items-center">
          <ShieldCheck size={20} className="text-blue-500 mb-2"/>
          <span className="text-[9px] font-black uppercase">Silencio Total</span>
        </div>
        <div className="flex flex-col items-center">
          <Target size={20} className="text-red-500 mb-2"/>
          <span className="text-[9px] font-black uppercase">Calor Preciso</span>
        </div>
      </div>
    </div>
  </div>

</section>

{/* 7. DASHBOARD PARA INVERSORES: LAS 10 MÉTRICAS DE ORO */}
<section id="investment-metrics" className="py-32 bg-slate-950 text-white relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    
    {/* CABECERA AGRESIVA */}
    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 border-b border-white/10 pb-12">
      <div>
        <h2 className="text-6xl md:text-8xl font-black italic uppercase leading-none tracking-tighter">
          TESIS DE <br /><span className="text-yellow-400">CRECIMIENTO.</span>
        </h2>
        <p className="text-slate-500 font-bold uppercase tracking-[0.4em] mt-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          Datos auditados Proyección 2026-2031
        </p>
      </div>
      <div className="bg-yellow-400 text-black p-10 rounded-[2.5rem] shadow-[0_0_60px_rgba(250,204,21,0.2)]">
        <p className="text-[10px] font-black uppercase tracking-widest mb-1">Payback Estimado</p>
        <p className="text-6xl font-black italic leading-none tracking-tighter">&lt; 1 AÑO</p>
        <p className="text-sm font-bold uppercase mt-2">Retorno de Capital en 12 meses</p>
      </div>
    </div>

    {/* BLOQUE 1: RENTABILIDAD Y VAN */}
    <div className="grid lg:grid-cols-4 gap-4 mb-4">
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all">
        <p className="text-yellow-400 font-black text-xs uppercase mb-4">ROI (6 años)</p>
        <p className="text-5xl font-black italic">7.185%</p>
        <p className="text-slate-500 text-[10px] mt-2 font-bold uppercase">Multiplicas x71 la inversión</p>
      </div>
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
        <p className="text-slate-400 font-black text-xs uppercase mb-4">TIR</p>
        <p className="text-5xl font-black italic">229%</p>
        <p className="text-slate-500 text-[10px] mt-2 font-bold uppercase">Rentabilidad Anualizada</p>
      </div>
      <div className="bg-white/5 p-8 rounded-3xl border border-white/10 lg:col-span-2 flex justify-between items-center">
        <div>
          <p className="text-slate-400 font-black text-xs uppercase mb-4">VAN (Valor Actual Neto)</p>
          <p className="text-6xl font-black italic tracking-tighter">159,4 M€</p>
        </div>
        <TrendingUp size={60} className="text-yellow-400 opacity-20" />
      </div>
    </div>

    {/* BLOQUE 2: GRÁFICOS DE VOLUMEN Y EBITDA */}
    <div className="grid lg:grid-cols-12 gap-4 mb-4">
      {/* Gráfico de Facturación */}
      <div className="lg:col-span-8 bg-white/5 p-12 rounded-[3rem] border border-white/10">
        <div className="flex justify-between items-start mb-12">
          <h3 className="font-black italic uppercase text-xl">Escalabilidad: Ventas vs EBITDA (M€)</h3>
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase"><div className="w-3 h-3 bg-yellow-400 rounded-sm"></div> Facturación</span>
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase"><div className="w-3 h-3 bg-slate-600 rounded-sm"></div> EBITDA</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between h-64 gap-3">
          {[
            { y: '26', v: 59, e: 9.7, h: '15%' },
            { y: '27', v: 166, e: 27.2, h: '30%' },
            { y: '28', v: 348, e: 57.1, h: '45%' },
            { y: '29', v: 572, e: 93.7, h: '60%' },
            { y: '30', v: 841, e: 138, h: '80%' },
            { y: '31', v: 1264, e: 207, h: '100%' }
          ].map((bar, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
              <div className="relative w-full h-full flex flex-col justify-end items-center gap-1">
                <div className="w-full bg-slate-600 rounded-t-sm" style={{ height: `${parseInt(bar.h) * 0.2}%` }}></div>
                <div className="w-full bg-yellow-400 rounded-t-sm group-hover:brightness-125 transition-all" style={{ height: bar.h }}></div>
                <div className="absolute -top-10 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-black text-[10px]">{bar.v}M€</p>
                   <p className="text-yellow-400 font-black text-[8px]">{bar.e}M€ EB.</p>
                </div>
              </div>
              <span className="text-slate-600 font-black text-xs uppercase italic">{bar.y}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-slate-500 font-bold uppercase text-[10px] tracking-widest">
          Crecimiento x21 en 5 años impulsado por digitalización y canal B2B
        </p>
      </div>

      {/* Unidad Económica */}
      <div className="lg:col-span-4 bg-yellow-400 p-12 rounded-[3rem] text-black flex flex-col justify-between">
        <h3 className="font-black italic uppercase text-2xl leading-none mb-8">Margen por <br /> metro cuadrado</h3>
        <div className="space-y-6">
          <div className="flex justify-between border-b-2 border-black/10 pb-4">
            <span className="text-xs font-black uppercase">Precio Venta</span>
            <span className="font-black text-2xl">507€</span>
          </div>
          <div className="flex justify-between border-b-2 border-black/10 pb-4">
            <span className="text-xs font-black uppercase">Coste Directo</span>
            <span className="font-black text-2xl">323€</span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div>
               <p className="text-xs font-black uppercase">Beneficio Neto</p>
               <p className="text-5xl font-black italic">184€</p>
            </div>
            <div className="text-right">
               <p className="text-xs font-black uppercase">Margen</p>
               <p className="text-4xl font-black italic">36%</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* BLOQUE 3: MERCADO (TAM) Y PENETRACIÓN */}
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] flex items-center gap-12">
        <div className="relative w-40 h-40 flex items-center justify-center">
           <svg className="w-full h-full rotate-[-90deg]">
              <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="15" fill="transparent" className="text-white/5" />
              <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="15" fill="transparent" strokeDasharray="440" strokeDashoffset="429" className="text-yellow-400" />
           </svg>
           <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black italic leading-none">2,5%</span>
              <span className="text-[8px] font-black uppercase">Quota 2031</span>
           </div>
        </div>
        <div className="flex-1">
          <h4 className="text-white font-black uppercase italic text-xl mb-4">TAM: 100M m²</h4>
          <p className="text-slate-500 text-sm leading-relaxed font-bold uppercase">
            Solo necesitamos capturar el <span className="text-white">2,5% del mercado potencial</span> para alcanzar los 1.200M€ de facturación. No hay riesgo de saturación.
          </p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] flex flex-col justify-center">
        <h4 className="text-yellow-400 font-black uppercase text-xs tracking-widest mb-6 text-center">Ventaja Competitiva Operativa</h4>
        <div className="grid grid-cols-3 gap-8 text-center italic font-black text-sm uppercase">
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-3xl mb-2 text-white">NO</p>
            <p className="text-[10px]">Calderas</p>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-3xl mb-2 text-white">NO</p>
            <p className="text-[10px]">Tuberías</p>
          </div>
          <div className="opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-3xl mb-2 text-white">0%</p>
            <p className="text-[10px]">Mantenimiento</p>
          </div>
        </div>
      </div>
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
