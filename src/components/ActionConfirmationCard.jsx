import React, { useState } from 'react';
import { ShoppingCart, ExternalLink, CheckCircle2, ShieldCheck, Tag, DollarSign, Store, ArrowRight, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ActionConfirmationCard({ activeSample, onActionApproved }) {
  const [selectedVendorIndex, setSelectedVendorIndex] = useState(0);
  const [isAuthorized, setIsAuthorized] = useState(false);

  if (!activeSample) return null;

  const { extractedData, matchedVendors } = activeSample;
  const currentVendor = matchedVendors[selectedVendorIndex] || matchedVendors[0];

  const handleAuthorize = () => {
    setIsAuthorized(true);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // safe fallback
    }
    if (onActionApproved) {
      onActionApproved({
        item: extractedData.itemTitle,
        vendor: currentVendor.name,
        price: currentVendor.price,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }
  };

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-white/10 text-left">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Pre-Filled Action Confirmation Card</span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {extractedData.confidence}% Vision Match
                  </span>
                </h3>
                <p className="text-xs text-slate-400">
                  Target item isolated with live merchant stock and pre-filled transaction parameters
                </p>
              </div>
            </div>

            {/* Black Car Safety Protocol Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Strict Human Authorization Protocol</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Extracted Item Dossier (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-4 rounded-2xl bg-dark-950/70 border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 uppercase font-semibold text-[10px]">Identified Product</span>
                  <span className="font-mono text-cyan-300 text-[11px]">SKU: {extractedData.sku}</span>
                </div>

                <h4 className="text-base font-bold text-white leading-snug">
                  {extractedData.itemTitle}
                </h4>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <div><strong className="text-slate-400">Brand / Maker:</strong> {extractedData.brand}</div>
                  <div><strong className="text-slate-400">Specifications:</strong> {extractedData.materials}</div>
                  <div><strong className="text-slate-400">Dimensions:</strong> {extractedData.dimensions}</div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Extracted Benchmark:</span>
                  <span className="text-base font-bold text-white font-mono">{extractedData.targetPrice}</span>
                </div>
              </div>

              {/* Safety notice */}
              <div className="p-3 rounded-xl bg-dark-900 border border-white/5 text-[11px] text-slate-400 flex items-start gap-2">
                <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>
                  No autonomous credit card billing is ever performed without your explicit final click. This eliminates all accidental orders or unauthorized charges.
                </span>
              </div>
            </div>

            {/* Right: Matched Live Vendors & One-Click Pre-filled Checkout (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Live Vendor Matches (Tavily Query)</span>
                <span className="text-cyan-400 text-[11px]">Select Preferred Merchant</span>
              </div>

              {/* Vendor Selector Cards */}
              <div className="space-y-2.5">
                {matchedVendors.map((vendor, index) => {
                  const isSelected = selectedVendorIndex === index;

                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedVendorIndex(index)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-snap-950/60 border-snap-400 ring-1 ring-snap-500/40 shadow-lg'
                          : 'bg-dark-900/80 border-white/5 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <Store className={`w-3.5 h-3.5 ${isSelected ? 'text-snap-400' : 'text-slate-500'}`} />
                          <span className="text-xs font-bold text-white">{vendor.name}</span>
                        </div>
                        <span className="text-sm font-bold font-mono text-cyan-300">{vendor.price}</span>
                      </div>

                      <div className="flex items-center justify-between text-[11px] text-slate-400">
                        <span className="text-emerald-400">{vendor.badge}</span>
                        <span>{vendor.stockStatus}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* One-Click Pre-filled Checkout Button */}
              {!isAuthorized ? (
                <button
                  onClick={handleAuthorize}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.01]"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Authorize 1-Click Pre-Filled Checkout ({currentVendor.price})</span>
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-fade-in">
                  <div className="text-xs font-bold text-emerald-300 flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Action Prepared & Authenticated!</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Pre-filled cart generated with SKU: {extractedData.sku} at {currentVendor.name}.
                  </p>
                  <a
                    href={currentVendor.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-200 underline mt-1"
                  >
                    <span>Launch Live Vendor Checkout Page</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
