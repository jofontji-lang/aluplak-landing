import React, { useState, useEffect, useRef } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, ComposedChart, Cell, LabelList
} from "recharts";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Activity, TrendingUp, CheckCircle2, Construction, Timer, 
  Layers, AlertTriangle, ArrowUpRight, Sparkles, Send, Bot, Loader2,
  Rocket, Zap, Building2, ShieldCheck, Cpu, ChevronRight, Info
} from 'lucide-react';

// --- CONFIGURACIÓN ---
const apiKey = ""; 
const GEMINI_MODEL = "gemini-2.5-flash-preview-09-2025";
const APP_ID = "aluplak-investor-pro";

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Estados para la IA y Chat
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Bienvenido al Centro de Control de Aluplak. ¿Deseas analizar nuestra proyección de ingresos para 2026 o entender por qué nuestro EBITDA supera el 28%?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [roiAnalysis, setRoiAnalysis] = useState('');
  const [isGeneratingRoi, setIsGeneratingRoi] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const fetchGemini = async (prompt, systemPrompt = "") => {
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            systemInstruction: systemPrompt ? { parts: [{ text: systemPrompt }] } : undefined
          })
        });
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
      } catch (error) {
        if (i === 4) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
  };

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const newMessages = [...chatMessages, { role: 'user', content: userInput }];
    setChatMessages(newMessages);
    setUserInput('');
    setIsTyping(true);

    try {
      const systemPrompt = "Eres un analista financiero experto de Aluplak. Responde de forma técnica pero persuasiva sobre la inversión. Usa datos del dashboard: Margen EBITDA 28.4%, Proyección 2026 de 220k€.";
      const answer = await fetchGemini(userInput, systemPrompt);
      setChatMessages([...newMessages, { role: 'assistant', content: answer }]);
    } catch (e) {
      setChatMessages([...newMessages, { role: 'assistant', content: "Lo siento, mi conexión con el servidor financiero se ha interrumpido momentáneamente." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleImgError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    parent.classList.add('bg-slate-800', 'flex', 'items-center', 'justify-center');
    const span = document.createElement('span');
    span.className = 'text-[9px] font-black text-slate-500 uppercase';
    span.innerText = `Vista: ${e.target.alt}`;
    parent.appendChild(span);
  };

  // --- DATOS ---
  const ebitdaComparison = [
    { name: 'Sector Medio', value: 12, label: '12%' },
    { name: 'Carpintería', value: 18, label: '18%' },
    { name: 'ALUPLAK', value: 28, label: '28.4%' },
  ];

  const projectionData = [
    { year: '2022', rev: 47416, ebitda: 13276 },
    { year: '2023', rev: 71677, ebitda: 20069 },
    { year: '2024', rev: 88210, ebitda: 24698 },
    { year: '2025', rev: 132531, ebitda: 37108 },
    { year: '2026', rev: 220000, ebitda: 61600 },
  ];

  const renderCustomLabel = (props) => {
    const { x, y, width, value, index } = props;
    const isAluplak = ebitdaComparison[index].name === 'ALUPLAK';
    return (
      <text 
        x={x + width + 10} 
        y={y + 25} 
        fill={isAluplak ? "#3b82f6" : "#64748b"} 
        fontSize={isAluplak ? 24 : 14} 
        fontWeight="900" 
        fontStyle="italic"
        textAnchor="start"
      >
        {value}
      </text>
    );
  };

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAV SUPERIOR */}
      <nav className="fixed top-0 w-full z-[500] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-6 px-10 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="bg-yellow-400 p-2 rounded-xl transition-transform group-hover:rotate-12">
            <Activity className="text-black" size={20} />
          </div>
          <span className="text-2xl font-black italic uppercase tracking-tighter text-white">ALUPLAK</span>
        </div>
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
          <a href="#ebitda" className="hover:text-white transition-colors">EBITDA</a>
          <a href="#growth" className="hover:text-white transition-colors">Proyección</a>
          <a href="#tech" className="hover:text-white transition-colors">Tecnología</a>
          <a href="#invest" className="bg-yellow-400 text-black px-8 py-2.5 rounded-full hover:bg-white transition-colors">Invertir</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center px-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#020617]/70 z-10" />
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" alt="Ingeniería Aluplak" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-20" />
        </div>
        
        <div className="container mx-auto relative z-30">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-px bg-yellow-400"></span>
              <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-[11px] italic">Series A Investment Opportunity</span>
            </div>
            <h1 className="text-[14vw] md:text-[10rem] font-black italic leading-[0.8] uppercase tracking-tighter mb-10">
              DISRUPTING <br /> <span className="text-yellow-400">SYSTEMS.</span>
            </h1>
            <p className="max-w-2xl text-slate-400 text-lg md:text-xl font-medium leading-relaxed italic border-l-2 border-yellow-400/30 pl-8">
              Tecnología de carpintería de aluminio industrializada que reduce costes operativos en un 40% y escala el margen de beneficio a niveles nunca vistos en el sector.
            </p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 uppercase text-[9px] font-black tracking-[0.3em] flex flex-col items-center gap-4"
        >
          Scroll para Datos
          <div className="w-px h-12 bg-gradient-to-b from-yellow-400 to-transparent"></div>
        </motion.div>
      </section>

      {/* SECCIÓN FINANCIERA INTEGRADA */}
      <section className="py-32 px-10 bg-[#020617]">
        <div className="container mx-auto max-w-7xl space-y-32">
          
          {/* BLOQUE 1: ANALISIS EBITDA */}
          <div id="ebitda" className="relative group">
            <div className="absolute -inset-8 bg-blue-600/5 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-slate-900/30 border border-white/5 rounded-[4rem] p-16 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="bg-blue-600 p-2.5 rounded-xl">
                      <ShieldCheck className="text-white" size={20} />
                    </div>
                    <span className="text-blue-400 font-black uppercase text-[10px] tracking-[0.3em] italic">Eficiencia de Margen</span>
                  </div>
                  <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-10">
                    Márgenes de <br/><span className="text-blue-600">Nueva Generación</span>
                  </h2>
                  <div className="space-y-6 text-slate-400 italic text-lg mb-10">
                    <p>Mientras que la carpintería tradicional lucha con costes de mano de obra variables, nuestro sistema <span className="text-white font-bold">ALUPLAK</span> automatiza la precisión.</p>
                    <p>El resultado es un margen EBITDA del <span className="text-blue-400 font-black">28.4%</span>, posicionándonos como la opción más rentable para inversores institucionales.</p>
                  </div>
                  <div className="flex gap-12">
                     <div>
                        <p className="text-4xl font-black italic text-white">2.4x</p>
                        <p className="text-[9px] font-black text-slate-500 uppercase mt-1">vs Media Sector</p>
                     </div>
                     <div>
                        <p className="text-4xl font-black italic text-white">+10%</p>
                        <p className="text-[9px] font-black text-slate-500 uppercase mt-1">vs Carpintería Top</p>
                     </div>
                  </div>
                </div>

                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ebitdaComparison} layout="vertical" margin={{ left: 20, right: 80 }}>
                      <CartesianGrid stroke="#ffffff05" horizontal={false} />
                      <XAxis type="number" domain={[0, 35]} hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 'black', fill: '#475569', fontStyle: 'italic'}} width={120} />
                      <Bar dataKey="value" radius={[0, 25, 25, 0]} barSize={55}>
                        <LabelList dataKey="label" content={renderCustomLabel} />
                        {ebitdaComparison.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'ALUPLAK' ? '#2563eb' : '#1e293b'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* BLOQUE 2: PROYECCIÓN CON FLECHA DECORATIVA */}
          <div id="growth" className="relative group">
            <div className="absolute -inset-8 bg-yellow-400/5 rounded-[5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-slate-900/30 border border-white/5 rounded-[4rem] p-16 overflow-hidden">
              
              {/* FLECHA DECORATIVA INTEGRADA */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute top-20 right-20 z-0 pointer-events-none opacity-20 hidden xl:block"
              >
                <div className="relative">
                  <ArrowUpRight size={280} className="text-yellow-400 stroke-[1px]" />
                  <motion.div 
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-yellow-400/10 blur-[100px] rounded-full"
                  />
                </div>
              </motion.div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 relative z-10 gap-10">
                <div>
                   <div className="flex items-center gap-3 mb-6">
                    <div className="bg-yellow-400 p-2.5 rounded-xl">
                      <TrendingUp className="text-black" size={20} />
                    </div>
                    <span className="text-yellow-400 font-black uppercase text-[10px] tracking-[0.3em] italic">Hoja de Ruta 2026</span>
                  </div>
                  <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">
                    Proyección de <br/><span className="text-yellow-400">Ingresos Brutos</span>
                  </h2>
                </div>
                
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-8 min-w-[300px]">
                   <div className="flex-1">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">CAGR Esperado</p>
                      <p className="text-4xl font-black italic text-white">+48%</p>
                   </div>
                   <div className="h-16 w-px bg-white/10"></div>
                   <div className="flex-1">
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">Objetivo 2026</p>
                      <p className="text-2xl font-black italic text-yellow-400">€220.000</p>
                   </div>
                </div>
              </div>

              <div className="h-[500px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#facc15" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 14, fontWeight: 'black', fill: '#475569'}} dy={20} />
                    <YAxis axisLine={false} tickLine={false} tick={{fontSize: 11, fontWeight: 'bold', fill: '#475569'}} />
                    <Tooltip 
                      cursor={{stroke: '#facc15', strokeWidth: 2, strokeDasharray: '5 5'}}
                      contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '20px'}}
                    />
                    <Area type="monotone" dataKey="rev" stroke="#facc15" strokeWidth={5} fill="url(#areaGrad)" name="Ingresos (€)" />
                    <Bar dataKey="ebitda" name="EBITDA (€)" radius={[12, 12, 0, 0]} barSize={50}>
                       {projectionData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={index === projectionData.length - 1 ? '#3b82f6' : '#1e293b'} />
                       ))}
                    </Bar>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-12 flex items-center justify-center gap-10">
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Volumen de Ventas</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Excedente Bruto (EBITDA)</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA PROPIETARIA */}
      <section id="tech" className="py-32 px-10 bg-black">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
               <div className="relative rounded-[4rem] overflow-hidden border border-white/10 group aspect-square">
                  <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80" alt="Producción Aluplak" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12 right-12">
                     <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                        <p className="text-yellow-400 font-black uppercase text-[9px] tracking-widest mb-2">Instalación Certificada</p>
                        <p className="text-xl font-bold italic">Sistema Click-Lock™ de Aluplak reduciendo tiempos un 80%.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-12">
               <div>
                  <span className="text-yellow-400 font-black uppercase text-[11px] tracking-[0.5em] italic block mb-6">Ventaja Técnica</span>
                  <h2 className="text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-8">
                    HARDWARE <br/><span className="text-yellow-400">OPTIMIZADO.</span>
                  </h2>
                  <p className="text-slate-500 text-xl italic leading-relaxed">
                    Hemos eliminado los puntos de fricción históricos de la carpintería: mermas de material, errores humanos en el corte y logística ineficiente.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Mermas Zero", val: "0.5%", desc: "Optimización por IA de perfiles.", icon: <Cpu/> },
                    { title: "Velocidad", val: "2h", desc: "Instalación completa por estancia.", icon: <Timer/> },
                    { title: "Patentes", val: "3", desc: "Diseños industriales protegidos.", icon: <ShieldCheck/> },
                    { title: "Escala", val: "∞", desc: "Producción modular descentralizable.", icon: <Layers/> }
                  ].map((feat, i) => (
                    <div key={i} className="p-8 bg-slate-900/50 rounded-3xl border border-white/5 hover:border-yellow-400/30 transition-colors group">
                       <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform">{feat.icon}</div>
                       <p className="text-3xl font-black italic text-white mb-1">{feat.val}</p>
                       <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{feat.title}</p>
                       <p className="text-xs text-slate-500 font-medium italic">{feat.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAT IA Y SIMULADOR */}
      <section id="invest" className="py-32 px-10 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="grid xl:grid-cols-5 gap-12">
            
            {/* TERMINAL DE IA */}
            <div className="xl:col-span-3 flex flex-col h-[700px] bg-slate-900/40 rounded-[4rem] border border-white/5 overflow-hidden backdrop-blur-xl">
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-black/20">
                <div className="flex items-center gap-4">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 italic">Aluplak AI Analyst Core v2.5</span>
                </div>
                <Bot className="text-slate-600" size={18} />
              </div>
              
              <div className="flex-1 overflow-y-auto p-10 space-y-8 scrollbar-hide">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-6 rounded-3xl text-sm font-medium italic leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white/5 text-slate-300 border border-white/10 rounded-tl-none'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-6 rounded-3xl rounded-tl-none border border-white/10">
                      <div className="flex gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-8 bg-black/40 border-t border-white/5">
                <div className="relative">
                  <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Pregunta sobre ROI, CAPEX o Escalabilidad..."
                    className="w-full bg-slate-800/50 border border-white/10 rounded-full py-5 px-8 text-sm italic focus:outline-none focus:border-yellow-400/50 transition-colors pr-20"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="absolute right-3 top-3 p-3 bg-yellow-400 text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* TICKET DE INVERSIÓN */}
            <div className="xl:col-span-2 space-y-8">
              <div className="bg-yellow-400 p-12 rounded-[4rem] text-black h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <Rocket size={48} />
                    <div className="text-right">
                       <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Status</p>
                       <p className="text-xs font-black uppercase">Open Rounds</p>
                    </div>
                  </div>
                  <h3 className="text-5xl font-black italic uppercase leading-[0.8] mb-12 tracking-tighter">
                    SOLICITAR <br/>DOSSIER.
                  </h3>
                  
                  <div className="space-y-8 mb-12">
                    <div>
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-4">
                          <span>Intención de Inversión</span>
                          <span>€{investment.toLocaleString()}</span>
                       </div>
                       <input 
                         type="range" min="10000" max="500000" step="5000" value={investment} 
                         onChange={(e) => setInvestment(Number(e.target.value))}
                         className="w-full h-3 bg-black/10 rounded-full appearance-none accent-black cursor-pointer"
                       />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                       <div className="bg-black/5 p-6 rounded-3xl border border-black/5">
                          <p className="text-[8px] font-black uppercase opacity-60 mb-1">Equity Est.</p>
                          <p className="text-xl font-black italic">{(investment / 10000).toFixed(2)}%</p>
                       </div>
                       <div className="bg-black/5 p-6 rounded-3xl border border-black/5">
                          <p className="text-[8px] font-black uppercase opacity-60 mb-1">ROI Proyect.</p>
                          <p className="text-xl font-black italic">4.2x</p>
                       </div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-8 bg-black text-white rounded-full font-black uppercase italic tracking-[0.2em] text-xs hover:bg-slate-800 transition-colors shadow-2xl shadow-black/20 group flex items-center justify-center gap-4">
                   Firmar Carta de Intención
                   <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black px-10 border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="bg-slate-800 p-2 rounded-lg">
              <Activity className="text-yellow-400" size={18} />
            </div>
            <span className="text-xl font-black italic tracking-tighter uppercase">ALUPLAK</span>
          </div>
          <div className="flex gap-12 text-[9px] font-black text-slate-500 uppercase tracking-widest italic">
             <a href="#" className="hover:text-white transition-colors">Legal</a>
             <a href="#" className="hover:text-white transition-colors">Data Security</a>
             <a href="#" className="hover:text-white transition-colors">Investor Relations</a>
          </div>
          <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.3em]">©2024 ALUPLAK METAL SYSTEMS S.L.</p>
        </div>
      </footer>
    </div>
  );
}
