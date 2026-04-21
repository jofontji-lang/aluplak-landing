import React, { useState, useEffect, useMemo } from "react";
import { 
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  BarChart, Bar, AreaChart, Area, Cell, ComposedChart, Legend, LineChart, Line, PieChart, Pie
} from "recharts";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  Activity, TrendingUp, Zap, ShieldCheck, 
  Droplets, Smartphone, CheckCircle2, Clock, Euro, Rocket, 
  Globe, Factory, Users, Target, BarChart3, Construction, 
  ChevronRight, Timer, Layers, LayoutGrid, Eye, AlertTriangle, Scale, Lightbulb
} from 'lucide-react';

export default function App() {
  const [investment, setInvestment] = useState(50000);
  const [activeTab, setActiveTab] = useState('vision');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Función para manejar errores de carga de imagen y mostrar placeholder
  const handleImgError = (e) => {
    e.target.style.display = 'none';
    e.target.parentElement.classList.add('bg-slate-800', 'flex', 'items-center', 'justify-center', 'border', 'border-dashed', 'border-slate-700');
    const label = e.target.alt || "Imagen";
    if (!e.target.parentElement.querySelector('.error-label')) {
      const span = document.createElement('span');
      span.className = 'error-label text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center px-4';
      span.innerText = `Cargando: ${label}`;
      e.target.parentElement.appendChild(span);
    }
  };

  // --- DATASETS COMPLETOS ---
  const installationSavings = [
    { name: 'Tradicional', coste: 320, color: '#334155', time: 100 },
    { name: 'Aluplak', coste: 60, color: '#facc15', time: 19 },
  ];

  const marketGrowth = [
    { year: '2024', market: 120, share: 2 },
    { year: '2025', market: 145, share: 8 },
    { year: '2026', market: 180, share: 15 },
    { year: '2027', market: 230, share: 28 },
    { year: '2028', market: 310, share: 45 },
  ];

  const financialStats = [
    { year: '2022', rev: 47416, ebitda: 13276, margin: 28 },
    { year: '2023', rev: 71677, ebitda: 20069, margin: 28 },
    { year: '2024', rev: 88210, ebitda: 24698, margin: 28 },
    { year: '2025', rev: 132531, ebitda: 37108, margin: 28 },
    { year: '2026', rev: 220000, ebitda: 61600, margin: 28 },
  ];

  const revenueMix = [
    { name: 'Zócalo Técnico', value: 45, fill: '#facc15' },
    { name: 'Sistemas Térmicos', value: 30, fill: '#e2e8f0' },
    { name: 'Instalación Premium', value: 25, fill: '#475569' },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-yellow-400 selection:text-black">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 z-[1000] origin-left" style={{ scaleX }} />

      {/* NAVEGACIÓN PRINCIPAL */}
      <nav className="fixed top-0 w-full z-[500] bg-black/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Activity className="text-yellow-400" size={24} />
          <span className="text-xl font-black italic uppercase tracking-tighter text-white">ALUPLAK</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <button onClick={() => setActiveTab('vision')} className={`${activeTab === 'vision' ? 'text-yellow-400' : ''}`}>Visión</button>
          <button onClick={() => setActiveTab('tech')} className={`${activeTab === 'tech' ? 'text-yellow-400' : ''}`}>Tecnología</button>
          <button onClick={() => setActiveTab('finance')} className={`${activeTab === 'finance' ? 'text-yellow-400' : ''}`}>Finanzas</button>
          <a href="#inversion" className="bg-yellow-400 text-black px-4 py-1 rounded-full hover:scale-105 transition-transform">Invertir Ahora</a>
        </div>
      </nav>

      {/* SECCIÓN HERO - Imagen 1 */}
      <section className="relative h-screen flex items-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src="Aluplak1.jpeg" 
            onError={handleImgError}
            className="w-full h-full object-cover opacity-40 scale-105" 
            alt="Aluplak Hero Principal" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/80" />
        </div>
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-yellow-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Disrupting Construction Industry</span>
            <h1 className="text-[12vw] lg:text-[9rem] font-black italic leading-[0.8] uppercase tracking-tighter mb-8">
              THE FUTURE <br /> <span className="text-yellow-400">OF PLINTHS.</span>
            </h1>
            <div className="flex flex-wrap gap-12 items-center">
              <p className="text-xl font-light italic text-slate-300 max-w-xl border-l-2 border-yellow-400 pl-6">
                Industrialización de zócalos técnicos para una construcción 4.0: más rápida, eficiente y sostenible.
              </p>
              <div className="flex gap-4">
                 <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">EBITDA Margin</p>
                    <p className="text-2xl font-black italic text-yellow-400">28%</p>
                 </div>
                 <div className="bg-white/5 backdrop-blur-lg p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Time Saving</p>
                    <p className="text-2xl font-black italic text-yellow-400">81%</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EL PROBLEMA Y LA SOLUCIÓN - Imagen 2 */}
      <section className="py-24 bg-slate-950 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-yellow-400/20 blur-3xl rounded-full opacity-50"></div>
              <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900 aspect-square">
                <img 
                  src="Aluplak2.jpeg" 
                  onError={handleImgError}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-1000" 
                  alt="Instalación en obra Real" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <div className="flex items-center gap-4 mb-2">
                    <Construction className="text-yellow-400" size={20} />
                    <span className="text-yellow-400 font-black uppercase text-xs tracking-widest italic">Site Operations</span>
                  </div>
                  <h3 className="text-2xl font-black italic uppercase">Montaje en Seco</h3>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-8 leading-none">
                  RESOLVIENDO EL <br/><span className="text-yellow-400">CUELLO DE BOTELLA</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start">
                    <div className="bg-red-500/10 p-3 rounded-lg"><AlertTriangle className="text-red-500" size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-white italic uppercase tracking-tight">El Problema</h4>
                      <p className="text-slate-400 text-sm italic">Mano de obra especializada escasa, tiempos muertos de secado y desperdicio de material en obra tradicional.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-yellow-400/10 p-3 rounded-lg"><CheckCircle2 className="text-yellow-400" size={24} /></div>
                    <div>
                      <h4 className="font-bold text-lg text-yellow-400 italic uppercase tracking-tight">La Solución Aluplak</h4>
                      <p className="text-slate-400 text-sm italic">Sistema "plug & play" de aluminio. Instalación 5 veces más rápida sin necesidad de albañilería pesada.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 text-center">
                  <Timer className="mx-auto mb-2 text-slate-500" />
                  <p className="text-3xl font-black italic">19 min</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">vs 100 min Estándar</p>
                </div>
                <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 text-center">
                  <Layers className="mx-auto mb-2 text-slate-500" />
                  <p className="text-3xl font-black italic">0%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500">Escombros generados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA DE PRODUCTO - Imágenes 3, 4, 5, 6 */}
      <section className="py-24 bg-black px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">LA ESTÉTICA DE LA <br/><span className="text-yellow-400">INGENIERÍA</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm italic text-right text-sm">
              Diseño minimalista que oculta sistemas complejos de climatización y cableado.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 3, title: "Zócalo Inox", desc: "Acabado espejo industrial" },
              { id: 4, title: "Sistema Clip", desc: "Fijación invisible patentada" },
              { id: 5, title: "Canalización", desc: "Espacio para domótica" },
              { id: 6, title: "Esquineras", desc: "Remates de alta precisión" }
            ].map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/5 bg-slate-900"
              >
                <img 
                  src={`Aluplak${item.id}.jpeg`} 
                  onError={handleImgError}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-black uppercase text-yellow-400 tracking-widest mb-1 block">Componente 0{item.id}</span>
                  <h4 className="text-xl font-black italic uppercase text-white leading-tight">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 uppercase mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VÍDEOS DE PRODUCTO - Multimedia */}
      <section className="py-24 bg-slate-950 px-6 border-y border-white/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black relative shadow-2xl">
                <video src="AluplakVideo1.mp4" controls className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full italic uppercase">Product Demo</div>
              </div>
              <div>
                <h4 className="text-xl font-black italic uppercase tracking-tight text-white">Concepto de Montaje</h4>
                <p className="text-slate-500 text-sm italic">Visualización del sistema de clipado rápido y modularidad.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black relative shadow-2xl">
                <video src="AluplakVideo2.mp4" controls className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full italic uppercase">In Situ Test</div>
              </div>
              <div>
                <h4 className="text-xl font-black italic uppercase tracking-tight text-white">Rendimiento Real</h4>
                <p className="text-slate-500 text-sm italic">Prueba de resistencia y acabados finales en obra entregada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFICIENCIA TÉRMICA - Imagen 7 */}
      <section className="py-24 bg-[#020617] px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 px-4 py-2 rounded-full">
                <Zap className="text-yellow-400" size={16} />
                <span className="text-[10px] font-black uppercase text-yellow-400 tracking-widest italic">Eficiencia Energética</span>
              </div>
              <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none">EMISIÓN TÉRMICA <br/> <span className="text-yellow-400">PERIFÉRICA</span></h2>
              <p className="text-slate-400 italic text-lg leading-relaxed">
                A diferencia de los radiadores convencionales o el suelo radiante lento, Aluplak permite una distribución de calor/frío inmediata gracias a la conductividad superior de nuestra aleación de aluminio.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 border border-white/5 rounded-2xl bg-slate-900/50">
                  <p className="text-4xl font-black italic text-white mb-2">-35%</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Consumo Eléctrico Mensual</p>
                </div>
                <div className="p-6 border border-white/5 rounded-2xl bg-slate-900/50">
                  <p className="text-4xl font-black italic text-white mb-2">12x</p>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Mayor Inercia Térmica</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-[4rem] overflow-hidden border border-yellow-400/30 group">
              <img 
                src="Aluplak7.jpeg" 
                onError={handleImgError}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                alt="Detalle Estructural Aluplak" 
              />
              <div className="absolute inset-0 bg-yellow-400/5 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP E HITOS */}
      <section className="py-24 bg-black px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black italic uppercase tracking-tighter">ROADMAP <span className="text-yellow-400">2024-2026</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/50 border-l-4 border-slate-700 rounded-r-3xl">
              <span className="text-slate-500 font-black italic">PHASE 01</span>
              <h5 className="text-xl font-black italic uppercase my-4">Consolidación</h5>
              <ul className="space-y-3 text-xs text-slate-400 italic font-medium">
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> Patente Europea activa</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> Stock logístico en Madrid</li>
                <li className="flex gap-2"><CheckCircle2 size={14} className="text-yellow-400" /> 150+ Instalaciones éxito</li>
              </ul>
            </div>
            <div className="p-8 bg-yellow-400/5 border-l-4 border-yellow-400 rounded-r-3xl">
              <span className="text-yellow-400 font-black italic">PHASE 02</span>
              <h5 className="text-xl font-black italic uppercase my-4">Escalado Industrial</h5>
              <ul className="space-y-3 text-xs text-slate-300 italic font-medium">
                <li className="flex gap-2"><Clock size={14} className="text-yellow-400" /> Nueva línea extrusión propia</li>
                <li className="flex gap-2"><Clock size={14} className="text-yellow-400" /> Alianzas con Constructoras</li>
                <li className="flex gap-2"><Clock size={14} className="text-yellow-400" /> Lanzamiento "Aluplak Smart"</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-900/50 border-l-4 border-slate-700 rounded-r-3xl opacity-50">
              <span className="text-slate-500 font-black italic">PHASE 03</span>
              <h5 className="text-xl font-black italic uppercase my-4">Expansión Global</h5>
              <ul className="space-y-3 text-xs text-slate-400 italic font-medium">
                <li className="flex gap-2"><Target size={14} /> Apertura mercado DACH</li>
                <li className="flex gap-2"><Target size={14} /> IPO / Salida a Bolsa</li>
                <li className="flex gap-2"><Target size={14} /> Liderazgo en Modular Home</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD FINANCIERO */}
      <section className="py-24 bg-slate-950 px-6 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-3 gap-8 items-start">
            <div className="xl:col-span-2 space-y-8">
              <div className="bg-slate-900/50 p-8 rounded-[3rem] border border-white/5">
                 <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-black italic uppercase">Crecimiento de Ingresos</h3>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest italic">Proyección en EUR (€)</p>
                    </div>
                    <TrendingUp className="text-yellow-400" />
                 </div>
                 <div className="h-[350px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={financialStats}>
                        <CartesianGrid stroke="#1e293b" vertical={false} />
                        <XAxis dataKey="year" stroke="#475569" axisLine={false} tickLine={false} />
                        <YAxis stroke="#475569" axisLine={false} tickLine={false} />
                        <Tooltip contentStyle={{backgroundColor: '#000', border: 'none', borderRadius: '15px'}} />
                        <Area type="monotone" dataKey="rev" fill="#facc15" fillOpacity={0.1} stroke="#facc15" strokeWidth={4} />
                        <Bar dataKey="ebitda" fill="#1e293b" radius={[5, 5, 0, 0]} barSize={25} />
                      </ComposedChart>
                   </ResponsiveContainer>
                 </div>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                 <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase mb-6 italic">Market Penetration</h4>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={marketGrowth}>
                          <XAxis dataKey="year" hide />
                          <Tooltip contentStyle={{display: 'none'}} />
                          <Line type="step" dataKey="share" stroke="#facc15" strokeWidth={4} dot={{fill: '#facc15', r: 6}} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <p className="text-3xl font-black italic mt-4">+450% <span className="text-xs text-slate-500 font-bold uppercase">Target 2028</span></p>
                 </div>
                 <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-white/5">
                    <h4 className="text-xs font-black text-slate-500 uppercase mb-6 italic">Revenue Mix</h4>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={revenueMix} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" />
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-around text-[10px] font-black uppercase italic text-slate-400 mt-4">
                      <span>Zócalos 45%</span>
                      <span>Sistemas 30%</span>
                      <span>Inst. 25%</span>
                    </div>
                 </div>
              </div>
            </div>

            <div id="inversion" className="sticky top-24 space-y-6">
              <div className="bg-yellow-400 p-10 rounded-[3.5rem] text-black">
                <Rocket className="mb-6" size={40} />
                <h3 className="text-4xl font-black italic uppercase leading-none mb-4">OPORTUNIDAD DE SERIE A</h3>
                <p className="text-sm font-bold italic opacity-70 mb-10 uppercase leading-relaxed">
                  Buscamos partners estratégicos para liderar la transformación del zócalo técnico a nivel global.
                </p>
                
                <div className="space-y-6 mb-10">
                  <div className="relative">
                    <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                      <span>Tu Inversión</span>
                      <span>€{investment.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" min="10000" max="500000" step="10000" 
                      value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
                      className="w-full h-1 bg-black/20 rounded-full appearance-none accent-black cursor-pointer"
                    />
                  </div>
                  <div className="p-6 bg-black text-white rounded-3xl">
                     <p className="text-[10px] font-black uppercase opacity-50 mb-1">Equity Estimado</p>
                     <p className="text-3xl font-black italic tracking-tighter">~ {(investment / 1500000 * 100).toFixed(2)}%</p>
                  </div>
                </div>

                <button className="w-full py-6 bg-black text-white rounded-full font-black uppercase italic tracking-widest hover:bg-slate-900 transition-colors flex items-center justify-center gap-3">
                  Solicitar Dossier <ChevronRight size={20} />
                </button>
              </div>

              <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-black italic">AP</div>
                  <div>
                    <p className="text-xs font-black uppercase italic">Juan Manuel Ortiz</p>
                    <p className="text-[10px] font-bold uppercase text-slate-500 italic">Founder & CEO, Aluplak</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-black border-t border-white/5 text-center px-6">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Activity className="text-yellow-400" size={24} />
          <span className="text-2xl font-black italic uppercase tracking-tighter">ALUPLAK</span>
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-widest text-slate-500 italic mb-12">
          <a href="#" className="hover:text-white">Investor Relations</a>
          <a href="#" className="hover:text-white">Patents</a>
          <a href="#" className="hover:text-white">ESG Report</a>
          <a href="#" className="hover:text-white">Legal</a>
        </div>
        <p className="text-[10px] font-bold tracking-[0.4em] text-slate-700 uppercase">© 2024 ALUPLAK METAL SYSTEMS S.L. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
