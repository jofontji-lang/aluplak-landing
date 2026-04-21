import React, { useState, useEffect, useRef } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, ComposedChart, LineChart, Line, PieChart, Pie
} from "recharts";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, CheckCircle2, Clock, Rocket, 
  Target, Construction, ChevronRight, Timer, Layers, 
  AlertTriangle, ArrowUpRight, Play, Info, Sparkles, Send, Bot, User, Loader2
} from 'lucide-react';

// --- CONFIGURACIÓN GEMINI API ---
const apiKey = ""; 
const GEMINI_MODEL = "gemini-2.5-flash-preview-09-2025";

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const [activeTab, setActiveTab] = useState('vision');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Estados para la IA
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy el asistente ✨ IA de Aluplak. ¿Tienes dudas sobre nuestro modelo de negocio o la tecnología de zócalo técnico?' }
  ]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [roiAnalysis, setRoiAnalysis] = useState('');
  const [isGeneratingRoi, setIsGeneratingRoi] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  // Función para llamar a Gemini con Backoff Exponencial
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
      const systemPrompt = "Eres un experto en inversiones y tecnología de construcción (PropTech) de Aluplak. Aluplak vende zócalos técnicos de aluminio con gestión de cables y eficiencia térmica. Sé profesional, persuasivo y técnico.";
      const answer = await fetchGemini(userInput, systemPrompt);
      setChatMessages([...newMessages, { role: 'assistant', content: answer }]);
    } catch (e) {
      setChatMessages([...newMessages, { role: 'assistant', content: "Lo siento, tuve un problema conectando con el servidor. Por favor intenta de nuevo." }]);
    } finally {
      setIsTyping(false);
    }
  };

  const generateRoiAnalysis = async () => {
    setIsGeneratingRoi(true);
    try {
      const prompt = `Analiza una inversión de ${investment}€ en Aluplak. Considera un crecimiento del mercado del 20% anual, margen EBITDA del 28% y una valoración actual de 1.5M€. Proyecta el retorno en 5 años y justifica por qué es una buena inversión en el sector PropTech en España. Responde en formato ejecutivo, breve y potente.`;
      const result = await fetchGemini(prompt);
      setRoiAnalysis(result);
    } catch (e) {
      setRoiAnalysis("Error al generar el reporte. Inténtalo de nuevo.");
    } finally {
      setIsGeneratingRoi(false);
    }
  };

  const handleImgError = (e) => {
    e.target.style.display = 'none';
    const parent = e.target.parentElement;
    parent.classList.add('bg-slate-800', 'flex', 'items-center', 'justify-center', 'border', 'border-white/5');
    const span = document.createElement('span');
    span.className = 'text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] text-center px-6 leading-relaxed';
    span.innerText = `Visualizando: ${e.target.alt || "Activo"}`;
    parent.appendChild(span);
  };

  const financialStats = [
    { year: '2022', rev: 47416, ebitda: 13276 },
    { year: '2023', rev: 71677, ebitda: 20069 },
    { year: '2024', rev: 88210, ebitda: 24698 },
    { year: '2025', rev: 132531, ebitda: 37108 },
    { year: '2026', rev: 220000, ebitda: 61600 },
  ];

  const marketGrowth = [
    { year: '2024', share: 2 },
    { year: '2025', share: 8 },
    { year: '2026', share: 15 },
    { year: '2027', share: 28 },
    { year: '2028', share: 45 },
  ];

  const revenueMix = [
    { name: 'Zócalo Técnico', value: 45, fill: '#facc15' },
    { name: 'Sistemas Térmicos', value: 30, fill: '#334155' },
    { name: 'Instalación Premium', value: 25, fill: '#1e293b' },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black antialiased">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* Navegación */}
      <nav className="fixed top-0 w-full z-[500] bg-black/40 backdrop-blur-xl border-b border-white/5 py-5 px-8 flex justify-between items-center transition-all hover:bg-black/80">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="bg-yellow-400 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
            <Activity className="text-black" size={18} />
          </div>
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">ALUPLAK</span>
        </div>
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          <a href="#vision" className="hover:text-yellow-400 transition-colors">Visión</a>
          <a href="#tech" className="hover:text-yellow-400 transition-colors">Tecnología</a>
          <a href="#finance" className="hover:text-yellow-400 transition-colors">Finanzas</a>
          <a href="#ai-assistant" className="text-yellow-400 flex items-center gap-2"><Sparkles size={14}/> Asistente IA</a>
          <a href="#inversion" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-yellow-400/20">Invertir</a>
        </div>
      </nav>

      {/* 1. SECCIÓN HERO */}
      <section id="vision" className="relative h-screen flex items-center overflow-hidden px-8">
        <div className="absolute inset-0 z-0">
          <img src="Aluplak1.jpeg" onError={handleImgError} className="w-full h-full object-cover opacity-30 scale-110" alt="Fondo Hero Aluplak" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/50 to-transparent" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <span className="text-yellow-400 font-black uppercase tracking-[0.5em] text-[10px] mb-6 block italic">Industrializando el futuro</span>
            <h1 className="text-[14vw] lg:text-[10rem] font-black italic leading-[0.75] uppercase tracking-tighter mb-10">
              REDEFINIENDO EL <br /> <span className="text-yellow-400">ZÓCALO.</span>
            </h1>
            <div className="flex flex-wrap gap-12 items-center">
              <p className="text-lg md:text-xl font-light italic text-slate-400 max-w-xl border-l-2 border-yellow-400/50 pl-8 leading-relaxed">
                Transformando elementos pasivos en sistemas activos de alta eficiencia energética y montaje ultra-rápido.
              </p>
              <div className="flex gap-6">
                 <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase font-black text-slate-500 mb-2 tracking-widest">Margen Operativo</p>
                    <p className="text-3xl font-black italic text-yellow-400">28.4%</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                    <p className="text-[9px] uppercase font-black text-slate-500 mb-2 tracking-widest">Ahorro de Tiempo</p>
                    <p className="text-3xl font-black italic text-yellow-400">-81%</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. EL PROBLEMA Y LA SOLUCIÓN */}
      <section className="py-32 bg-slate-950 px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-yellow-400/10 blur-[100px] rounded-full opacity-30"></div>
              <div className="relative rounded-[3.5rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-square">
                <img src="Aluplak2.jpeg" onError={handleImgError} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Instalación en Obra Real" />
                <div className="absolute bottom-12 left-12 right-12">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-yellow-400 p-2 rounded-lg"><Construction size={20} className="text-black" /></div>
                    <span className="text-yellow-400 font-black uppercase text-[10px] tracking-widest italic">Operaciones en Vivo</span>
                  </div>
                  <h3 className="text-3xl font-black italic uppercase text-white">Montaje en Seco Real</h3>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-6xl font-black italic uppercase tracking-tighter mb-4 leading-none">
                  ELIMINANDO LA <br/><span className="text-yellow-400">INEFICIENCIA</span>
                </h2>
                <p className="text-slate-500 italic text-lg">La construcción tradicional es lenta y genera residuos. Aluplak digitaliza el proceso.</p>
              </div>
              <div className="space-y-8">
                <div className="group p-8 bg-slate-900/40 rounded-3xl border border-white/5 hover:bg-red-500/5 transition-all">
                  <div className="flex gap-6 items-start">
                    <div className="bg-red-500/20 p-3 rounded-xl"><AlertTriangle className="text-red-500" size={24} /></div>
                    <div>
                      <h4 className="font-black text-lg text-white italic uppercase mb-2 tracking-tight">Limitaciones del Sector</h4>
                      <p className="text-slate-400 text-sm italic leading-relaxed">Falta de mano de obra cualificada y largos tiempos de secado.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-8 bg-slate-900 rounded-[2rem] border border-white/5 text-center">
                  <Timer className="mx-auto mb-4 text-slate-500" size={28} />
                  <p className="text-4xl font-black italic mb-1">19 min</p>
                  <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest">Ahorro en Instalación</p>
                </div>
                <div className="p-8 bg-slate-900 rounded-[2rem] border border-white/5 text-center">
                  <Layers className="mx-auto mb-4 text-slate-500" size={28} />
                  <p className="text-4xl font-black italic mb-1">Zero</p>
                  <p className="text-[9px] uppercase font-black text-slate-500 tracking-widest">Residuos en obra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA DE PRODUCTO */}
      <section id="tech" className="py-32 bg-black px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-7xl font-black italic uppercase tracking-tighter leading-[0.9] mb-4">INGENIERÍA <br/><span className="text-yellow-400">DE PRECISIÓN</span></h2>
              <p className="text-slate-500 text-lg italic border-l border-white/10 pl-6">Cada componente diseñado para durabilidad y estética minimalista.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 3, title: "Aluminio Naval", desc: "Máxima resistencia" },
              { id: 4, title: "Clip de Anclaje", desc: "Presión patentada" },
              { id: 5, title: "Canal Interno", desc: "Gestión de cables" },
              { id: 6, title: "Nivelación", desc: "Ajuste milimétrico" }
            ].map((item) => (
              <motion.div key={item.id} whileHover={{ y: -15 }} className="group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900 shadow-xl">
                <img src={`Aluplak${item.id}.jpeg`} onError={handleImgError} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h4 className="text-2xl font-black italic uppercase text-white leading-tight mb-2">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOJA DE RUTA */}
      <section className="py-32 bg-black px-8">
        <div className="container mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-black italic uppercase tracking-tighter">HOJA DE <span className="text-yellow-400">RUTA</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { phase: "FASE 01", title: "Consolidación", active: false },
              { phase: "FASE 02", title: "Escalado Industrial", active: true },
              { phase: "FASE 03", title: "Expansión Global", active: false },
            ].map((step, idx) => (
              <div key={idx} className={`p-10 rounded-[3rem] border-l-8 transition-all ${step.active ? 'bg-yellow-400/5 border-yellow-400 scale-105' : 'bg-slate-900/40 border-slate-700 opacity-60'}`}>
                <span className={`font-black italic text-xs tracking-widest ${step.active ? 'text-yellow-400' : 'text-slate-500'}`}>{step.phase}</span>
                <h5 className="text-2xl font-black italic uppercase my-6">{step.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DASHBOARD FINANCIERO E IA */}
      <section id="finance" className="py-32 bg-slate-950 px-8 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-12 items-start">
            <div className="xl:col-span-2 space-y-12">
              <div className="bg-slate-900/30 p-10 rounded-[3.5rem] border border-white/5 shadow-inner">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h3 className="text-3xl font-black italic uppercase leading-none">PROYECCIÓN DE INGRESOS</h3>
                    <div className="bg-white/5 px-4 py-2 rounded-full">
                       <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">Penetración de Mercado</span>
                    </div>
                 </div>
                 <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={financialStats}>
                        <CartesianGrid stroke="#ffffff05" vertical={false} />
                        <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                        <YAxis stroke="#475569" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: 'bold'}} />
                        <Tooltip contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '20px'}} />
                        <Area type="monotone" dataKey="rev" fill="#facc15" fillOpacity={0.05} stroke="#facc15" strokeWidth={5} />
                        <Bar dataKey="ebitda" fill="#334155" radius={[10, 10, 0, 0]} barSize={40} />
                      </ComposedChart>
                   </ResponsiveContainer>
                 </div>
                 <div className="mt-8 flex justify-center gap-12">
                    {revenueMix.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: item.fill}}></div>
                        <span className="text-[10px] font-bold uppercase text-slate-400">{item.name}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-black p-10 rounded-[3.5rem] border border-yellow-400/20 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Sparkles size={120} className="text-yellow-400" />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="bg-yellow-400 p-3 rounded-2xl"><TrendingUp size={24} className="text-black" /></div>
                    <h3 className="text-2xl font-black italic uppercase tracking-tighter">Análisis de ROI ✨ IA</h3>
                  </div>
                  
                  <div className="mb-8">
                    <p className="text-slate-400 italic mb-6">Genera un análisis de inversión personalizado basado en tu ticket actual (<b>€{investment.toLocaleString()}</b>).</p>
                    <button 
                      onClick={generateRoiAnalysis}
                      disabled={isGeneratingRoi}
                      className="px-8 py-4 bg-white/5 border border-yellow-400/50 text-yellow-400 rounded-full font-black uppercase text-xs tracking-widest hover:bg-yellow-400 hover:text-black transition-all flex items-center gap-3"
                    >
                      {isGeneratingRoi ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
                      Generar Reporte Personalizado ✨
                    </button>
                  </div>

                  {roiAnalysis && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                      className="p-8 bg-black/50 border border-white/5 rounded-[2rem] text-slate-300 italic text-sm leading-relaxed whitespace-pre-wrap font-light"
                    >
                      {roiAnalysis}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Panel de Inversión */}
            <div id="inversion" className="sticky top-28 space-y-8">
              <div className="bg-yellow-400 p-12 rounded-[4rem] text-black shadow-2xl relative overflow-hidden group">
                <Rocket className="mb-8" size={48} />
                <h3 className="text-4xl font-black italic uppercase leading-[0.9] mb-6">OPORTUNIDAD SERIE A</h3>
                <div className="space-y-8 mb-12">
                  <div>
                    <div className="flex justify-between text-[11px] font-black uppercase mb-4">
                      <span>Tu Inversión</span>
                      <span>€{investment.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" min="10000" max="1000000" step="10000" 
                      value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-1.5 bg-black/10 rounded-full appearance-none accent-black"
                    />
                  </div>
                  <div className="p-8 bg-black/95 text-white rounded-[2.5rem]">
                     <p className="text-[10px] font-black uppercase opacity-50 mb-2">Equity Estimado</p>
                     <p className="text-4xl font-black italic tracking-tighter">~ {(investment / 1500000 * 100).toFixed(2)}%</p>
                  </div>
                </div>
                <button className="w-full py-7 bg-black text-white rounded-full font-black uppercase italic tracking-widest">Dossier de Inversión</button>
              </div>

              {/* CHATBOT IA */}
              <div id="ai-assistant" className="bg-slate-900 border border-white/5 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col h-[500px]">
                <div className="p-6 bg-slate-800 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-400 p-2 rounded-xl text-black"><Bot size={18}/></div>
                    <span className="text-xs font-black uppercase tracking-widest italic">Aluplak ✨ Mentor</span>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-4 rounded-2xl text-xs font-medium ${msg.role === 'user' ? 'bg-yellow-400 text-black' : 'bg-slate-800 text-slate-300 border border-white/5'}`}>
                        {msg.content}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-slate-800 p-4 rounded-2xl border border-white/5 flex gap-1">
                        <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <div className="p-4 bg-black/40 border-t border-white/5 flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Pregunta sobre patentes..." 
                    className="flex-1 bg-slate-800 border-none rounded-full px-4 text-xs focus:ring-1 focus:ring-yellow-400"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button onClick={handleSendMessage} className="bg-yellow-400 p-3 rounded-full text-black hover:scale-105 transition-transform">
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-black border-t border-white/5 text-center px-8">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="bg-yellow-400 p-1.5 rounded-lg"><Activity className="text-black" size={20} /></div>
          <span className="text-3xl font-black italic uppercase tracking-tighter">ALUPLAK</span>
        </div>
        <p className="text-[10px] font-bold tracking-[0.5em] text-slate-700 uppercase">© 2024 ALUPLAK METAL SYSTEMS S.L. MADRID, SPAIN.</p>
      </footer>
    </div>
  );
}
