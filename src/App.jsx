import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid
} from "recharts";
import { motion } from "framer-motion";

const scenarios = {
  conservador: 180000,
  base: 220000,
  agresivo: 300000
};

export default function App() {
  const [scenario] = useState("base");

  const salesData = [
    { year: "2022", ventas: 47416, growth: 0 },
    { year: "2023", ventas: 71677, growth: 51 },
    { year: "2024", ventas: 88210, growth: 23 },
    { year: "2025", ventas: 132531, growth: 50 },
    { year: "2026", ventas: scenarios[scenario], growth: 66 }
  ];

  const roiData = [
    { year: "2023", value: 1.2 },
    { year: "2024", value: 1.8 },
    { year: "2025", value: 2.5 },
    { year: "2026", value: 3.5 }
  ];

  const ebitdaData = [
    { name: "Tradicional", value: 8 },
    { name: "Construcción", value: 12 },
    { name: "Clima", value: 15 },
    { name: "ALUPLAK", value: 28 }
  ];

  const laborData = [
    { name: "Tradicional", horas: 10 },
    { name: "Estándar", horas: 7 },
    { name: "ALUPLAK", horas: 2 }
  ];

  const energyData = [
    { name: "Radiadores", consumo: 100 },
    { name: "A/C", consumo: 75 },
    { name: "ALUPLAK", consumo: 55 }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">

      {/* HERO */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black mb-3">ALUPLAK SYSTEMS</h1>
        <p className="text-slate-400">
          Infraestructura térmica inteligente con escalabilidad industrial
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { label: "EBITDA", value: "28%" },
          { label: "ROI", value: "3.5x" },
          { label: "Crecimiento", value: "+50%" },
          { label: "Margen", value: "65%" }
        ].map((k, i) => (
          <div key={i} className="bg-slate-900 p-4 rounded-xl text-center">
            <div className="text-slate-400 text-sm">{k.label}</div>
            <div className="text-yellow-400 text-2xl font-bold">{k.value}</div>
          </div>
        ))}
      </div>

      {/* VENTAS */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Ventas (€)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid stroke="#1e293b" />
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="ventas" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Crecimiento acelerado con escalado industrial progresivo.
        </p>
      </div>

      {/* EBITDA */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">EBITDA vs Sector</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ebitdaData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Margen muy superior al sector industrial tradicional.
        </p>
      </div>

      {/* HORAS */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Horas de Montaje</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={laborData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="horas" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Reducción drástica del tiempo de instalación.
        </p>
      </div>

      {/* ENERGÍA */}
      <div className="bg-slate-900 p-6 rounded-2xl mb-10">
        <h2 className="text-xl font-bold mb-4">Ahorro Energético</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={energyData}>
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="consumo" fill="#facc15" />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Reducción significativa del consumo energético.
        </p>
      </div>

      {/* ROI */}
      <div className="bg-slate-900 p-6 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">ROI</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={roiData}>
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line dataKey="value" stroke="#a855f7" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-sm text-slate-400 mt-4">
          Multiplicación progresiva del capital invertido.
        </p>
      </div>

    </div>
  );
}