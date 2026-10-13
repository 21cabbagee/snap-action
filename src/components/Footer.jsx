import React from 'react';
import { Camera, Shield, Terminal, Sparkles } from 'lucide-react';

export default function Footer({ onOpenCab }) {
  const keywords = [
    "screenshot to action ai",
    "visual product finder agent",
    "ai screenshot shopping assistant",
    "image to checkout link generator"
  ];

  return (
    <footer className="mt-16 border-t border-white/10 bg-dark-950/80 pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-snap-600/40 border border-snap-500/30 flex items-center justify-center">
                <Camera className="w-4 h-4 text-snap-300" />
              </div>
              <span className="font-bold text-lg text-white">SnapAction</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Multimodal visual agent turning screenshots into executed web purchases, flight bookings, and invoice payments with zero manual search friction.
            </p>
            <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 pt-1">
              <Terminal className="w-3.5 h-3.5 text-snap-400" />
              <span>Slug: /tools/screenshot-to-action-agent</span>
            </div>
          </div>

          {/* Targeted SEO Keywords */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Vision Agent Capabilities
            </h4>
            <ul className="space-y-1.5">
              {keywords.map((kw, i) => (
                <li key={i} className="text-xs text-slate-400 hover:text-snap-300 transition-colors">
                  <span className="text-snap-500 mr-1.5">•</span>
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Safety & Protocol
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Human Confirmation Click</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Sub-1.8s Multimodal OCR & Search</span>
              </li>
              <li>
                <button
                  onClick={onOpenCab}
                  className="text-xs text-snap-400 hover:text-snap-300 underline font-semibold"
                >
                  Customer Advisory Board (70% Off)
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SnapAction Technologies Inc. All rights reserved.</p>
          <p className="text-[11px]">
            Strict Black Car safety protocol: Zero unauthorized autonomous financial charges.
          </p>
        </div>
      </div>
    </footer>
  );
}
