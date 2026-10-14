import React from 'react';
import { Camera, Sparkles, ArrowRight, ShieldCheck, Zap, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { MOCK_SCREENSHOTS } from '../data/mockScreenshots';
import ParticlesCanvas from './ParticlesCanvas';

export default function Hero({ onSelectSample, onTriggerPaste }) {
  return (
    <section className="relative pt-12 pb-8 overflow-hidden">
      {/* Casberry-inspired Particles WebGL Canvas */}
      <ParticlesCanvas particleColor="99, 102, 241" particleCount={50} />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-snap-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-snap-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-snap-400" />
          <span>Multimodal Vision-to-Web Execution Agent</span>
        </div>

        {/* Target Exact SEO H1 */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Turn Any Screenshot Into An Action: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-snap-400 via-indigo-300 to-fuchsia-400">
            Instant Web Product & Task Execution
          </span>
        </h1>

        {/* Value Proposition Body */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Paste or snap any screenshot with an intent prompt—like <span className="text-snap-300 font-semibold italic">"Order this chair"</span> or <span className="text-snap-300 font-semibold italic">"Rebook this Polaris flight"</span>. The multimodal agent scans the image, locates the exact live vendor SKU, and prepares a pre-filled one-click checkout.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <button
            onClick={() => onSelectSample(MOCK_SCREENSHOTS[0])}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-snap-600 to-indigo-600 hover:from-snap-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-snap-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Test Visual Dropzone Simulator</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <a
            href="#visual-dropzone"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-800/80 hover:bg-dark-750 text-slate-200 font-medium border border-white/10 hover:border-white/20 transition-all"
          >
            <span>Or Press Ctrl+V with any image</span>
          </a>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-snap-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Vision Parse</span>
            </div>
            <div className="text-xl font-bold text-white">&lt; 1.8s</div>
            <p className="text-[11px] text-slate-400">GPT-4o multimodal vision</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-cyan-400 mb-1">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Friction Cut</span>
            </div>
            <div className="text-xl font-bold text-cyan-300">10 Steps -&gt; 1</div>
            <p className="text-[11px] text-slate-400">No manual Google searches</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Safety Guard</span>
            </div>
            <div className="text-xl font-bold text-emerald-300">Human Click</div>
            <p className="text-[11px] text-slate-400">0 unauthorized auto-charges</p>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-left border-white/5">
            <div className="flex items-center gap-2 text-fuchsia-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Market TAM</span>
            </div>
            <div className="text-xl font-bold text-white">$450M TAM</div>
            <p className="text-[11px] text-slate-400">1.5M assistants & buyers</p>
          </div>
        </div>

        {/* 1-Click Sample Screenshot Selector */}
        <div className="glass-panel p-4 rounded-2xl max-w-3xl mx-auto border-snap-500/20 text-left">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-snap-400" />
              1-Click Sample Visual Screen Grabs:
            </span>
            <span className="text-[11px] text-slate-400">Click to load into vision engine</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {MOCK_SCREENSHOTS.map((sample) => (
              <button
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-snap-950/60 text-xs font-medium text-slate-300 hover:text-white border border-white/10 hover:border-snap-500/50 transition-all text-left"
              >
                <span className="w-2 h-2 rounded-full bg-snap-400 group-hover:scale-125 transition-transform" />
                <span className="font-semibold">{sample.extractedData.itemTitle.split(' ')[0]}</span>
                <span className="text-slate-400">({sample.category})</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-snap-300 font-mono">
                  {sample.extractedData.targetPrice.split(' ')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
