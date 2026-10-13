import React from 'react';
import { Camera, Sparkles, Clipboard, ShieldCheck } from 'lucide-react';

export default function Header({ onOpenCab }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-snap-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-snap-500/25 border border-snap-400/30">
            <Camera className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                Snap<span className="text-snap-400">Action</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-snap-500/20 text-snap-300 border border-snap-500/30">
                Multimodal Agent
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Screenshot-to-Action Web Execution Engine
            </p>
          </div>
        </div>

        {/* Right Status & CTA */}
        <div className="flex items-center gap-3">
          {/* Clipboard Paste Active Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900 border border-snap-500/30 text-xs font-mono text-snap-300">
            <Clipboard className="w-3.5 h-3.5 text-snap-400" />
            <span>Paste Anywhere (Ctrl+V / ⌘+V)</span>
          </div>

          {/* CAB CTA */}
          <button
            onClick={onOpenCab}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-snap-600 via-indigo-600 to-fuchsia-600 text-white shadow-md shadow-snap-500/25 hover:shadow-snap-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all border border-snap-400/30"
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            <span>Join CAB (70% Off)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
