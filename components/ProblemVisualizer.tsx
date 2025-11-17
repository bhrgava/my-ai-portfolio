import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';
import { DatabaseIcon, ServerIcon, UsersIcon } from './Icons';
import { HotspotMode, ViewMode } from '../types';

const NODE_COUNT = 3;

const ProblemVisualizer: React.FC = () => {
  const [hotspotMode, setHotspotMode] = useState<HotspotMode>(HotspotMode.NORMAL);
  
  // Refs to track state inside intervals without resetting them
  const hotspotModeRef = useRef(hotspotMode);
  const metricsRef = useRef({ latency: 10, ops: 500 }); // Start at 50% capacity (500 ops)

  const [packets, setPackets] = useState<{ id: number; targetNode: number; progress: number }[]>([]);
  const [chartData, setChartData] = useState<{ time: number; latency: number; ops: number }[]>([]);
  
  // Update ref when state changes
  useEffect(() => {
    hotspotModeRef.current = hotspotMode;
  }, [hotspotMode]);
  
  // Packet animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setPackets((prev) => {
        const newPackets = [...prev];
        const mode = hotspotModeRef.current;
        // Lower spawn rate for normal, high for hotspot to match throughput graph
        const spawnRate = mode === HotspotMode.HOTSPOT ? 0.8 : 0.2; 

        if (Math.random() < spawnRate) {
          const target = mode === HotspotMode.HOTSPOT ? 0 : Math.floor(Math.random() * NODE_COUNT);
          newPackets.push({
            id: Date.now() + Math.random(),
            targetNode: target,
            progress: 0
          });
        }

        return newPackets
          .map(p => ({ ...p, progress: p.progress + 2 })) 
          .filter(p => p.progress <= 100); 
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Chart Data Loop
  useEffect(() => {
    // Initialize data with values matching 'Normal' state (10ms, 500 ops)
    const initialData = Array.from({ length: 40 }, (_, i) => ({
      time: i,
      latency: 10,
      ops: 500
    }));
    setChartData(initialData);

    const interval = setInterval(() => {
      const mode = hotspotModeRef.current;
      
      // Define Targets
      let targetLatency = 10;
      let targetOps = 500; // Normal load ~50%

      if (mode === HotspotMode.HOTSPOT) {
        targetLatency = 450; // Dramatic increase
        targetOps = 1000;    // 100% load
      }

      // Smoothly interpolate (LERP) towards targets
      // 0.05 factor provides a smooth ease-in/ease-out feel
      metricsRef.current.latency += (targetLatency - metricsRef.current.latency) * 0.05;
      metricsRef.current.ops += (targetOps - metricsRef.current.ops) * 0.05;

      // Add organic noise
      const latencyNoise = (Math.random() - 0.5) * (mode === HotspotMode.HOTSPOT ? 20 : 2);
      const opsNoise = (Math.random() - 0.5) * (mode === HotspotMode.HOTSPOT ? 100 : 50);

      const finalLatency = Math.max(0, metricsRef.current.latency + latencyNoise);
      const finalOps = Math.max(0, metricsRef.current.ops + opsNoise);

      setChartData(prev => {
        const lastTime = prev[prev.length - 1]?.time || 0;
        const newPoint = {
          time: lastTime + 1,
          latency: finalLatency,
          ops: finalOps
        };
        return [...prev.slice(1), newPoint];
      });
    }, 50); // 50ms update rate for smooth animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-8 bg-white border border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] relative">
      {/* Decorative Corner Markers */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-900" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-900" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-900" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-900" />

      {/* Header / Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-slate-100 pb-6 gap-4">
        <div>
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight flex items-center gap-2">
                <DatabaseIcon className="w-6 h-6 text-blue-600" />
                Traffic Simulation
            </h3>
            <p className="text-slate-500 text-sm font-mono mt-1">
                Mode: <span className={hotspotMode === HotspotMode.HOTSPOT ? "text-red-500 font-bold" : "text-green-600 font-bold"}>{hotspotMode}</span>
            </p>
        </div>

        <div className="flex gap-2">
            <button 
                onClick={() => setHotspotMode(HotspotMode.NORMAL)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                    hotspotMode === HotspotMode.NORMAL 
                    ? 'bg-green-50 text-green-700 border-green-200' 
                    : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                }`}
            >
                Normal Load
            </button>
            <button 
                onClick={() => setHotspotMode(HotspotMode.HOTSPOT)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                    hotspotMode === HotspotMode.HOTSPOT 
                    ? 'bg-red-50 text-red-600 border-red-200' 
                    : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300'
                }`}
            >
                Trigger Hotspot
            </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left: System Visualizer */}
        <div className="bg-slate-50 border border-slate-200 p-6 relative h-64 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
            
            {/* Users / Source */}
            <div className="flex justify-center relative z-10">
                <div className="bg-white border border-slate-300 p-2 rounded-full shadow-sm">
                    <UsersIcon className="w-6 h-6 text-slate-600" />
                </div>
            </div>

            {/* Nodes / Destination */}
            <div className="flex justify-around relative z-10 mt-auto">
                {Array.from({ length: NODE_COUNT }).map((_, idx) => (
                    <div key={idx} className={`relative flex flex-col items-center transition-all duration-300 ${
                        hotspotMode === HotspotMode.HOTSPOT && idx === 0 ? 'scale-110' : 'scale-100'
                    }`}>
                         {/* Status Light */}
                        <div className={`w-2 h-2 rounded-full mb-2 ${
                            hotspotMode === HotspotMode.HOTSPOT && idx === 0 
                            ? 'bg-red-500 animate-ping' 
                            : 'bg-green-400'
                        }`} />
                        
                        <div className={`p-3 border bg-white shadow-sm ${
                             hotspotMode === HotspotMode.HOTSPOT && idx === 0 ? 'border-red-400' : 'border-slate-300'
                        }`}>
                            <ServerIcon className={`w-6 h-6 ${
                                hotspotMode === HotspotMode.HOTSPOT && idx === 0 ? 'text-red-500' : 'text-slate-600'
                            }`} />
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 mt-2">NODE_0{idx + 1}</span>
                    </div>
                ))}
            </div>

            {/* Particles */}
            {packets.map(p => (
                <div 
                    key={p.id}
                    className={`absolute w-2 h-2 rounded-full shadow-sm transition-colors ${
                        hotspotMode === HotspotMode.HOTSPOT ? 'bg-red-400' : 'bg-blue-400'
                    }`}
                    style={{
                        top: `${20 + (p.progress * 0.6)}%`, // Move from top (20%) to bottom (~80%)
                        left: `${50 + ((p.targetNode - 1) * 30 * (p.progress / 100))}%`, // Fanning out logic approximation
                        opacity: p.progress < 10 ? p.progress / 10 : p.progress > 90 ? (100 - p.progress) / 10 : 1
                    }}
                />
            ))}
        </div>

        {/* Right: Metrics */}
        <div className="flex flex-col gap-4">
            {/* Latency Chart */}
            <div className="flex-1 bg-slate-900 p-4 border border-slate-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Latency (ms)</span>
                    <span className={`text-xs font-bold font-mono ${hotspotMode === HotspotMode.HOTSPOT ? 'text-red-400' : 'text-green-400'}`}>
                        {Math.round(chartData[chartData.length - 1]?.latency || 0)}ms
                    </span>
                </div>
                <div className="h-20">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <YAxis domain={[0, 500]} hide />
                            <Area 
                                type="monotone" 
                                dataKey="latency" 
                                stroke={hotspotMode === HotspotMode.HOTSPOT ? '#f87171' : '#4ade80'} 
                                fill={hotspotMode === HotspotMode.HOTSPOT ? '#f87171' : '#4ade80'} 
                                fillOpacity={0.2}
                                strokeWidth={2}
                                isAnimationActive={false}
                            />
                        </AreaChart>
                     </ResponsiveContainer>
                </div>
            </div>

            {/* Ops Chart */}
             <div className="flex-1 bg-white p-4 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Throughput (ops/sec)</span>
                    <span className="text-xs font-bold font-mono text-slate-900">
                        {Math.round(chartData[chartData.length - 1]?.ops || 0)}
                    </span>
                </div>
                <div className="h-20">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <YAxis domain={[0, 1200]} hide />
                            <Area 
                                type="monotone" 
                                dataKey="ops" 
                                stroke="#94a3b8" 
                                fill="#cbd5e1" 
                                fillOpacity={0.3}
                                strokeWidth={2}
                                isAnimationActive={false}
                            />
                        </AreaChart>
                     </ResponsiveContainer>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProblemVisualizer;