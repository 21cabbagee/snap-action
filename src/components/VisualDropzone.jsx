import React, { useState, useEffect } from 'react';
import { Upload, Camera, Sparkles, Layers, Search, CheckCircle2, ArrowRight, Zap, Armchair, Plane, Cpu, Receipt } from 'lucide-react';

export default function VisualDropzone({
  activeSample,
  userIntent,
  setUserIntent,
  isAnalyzing,
  setIsAnalyzing,
  onAnalysisComplete
}) {
  const [dragOver, setDragOver] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  // Global clipboard paste listener
  useEffect(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          triggerAnalysis();
          break;
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [activeSample]);

  const triggerAnalysis = () => {
    setIsAnalyzing(true);
    setAnalysisStep(1);

    setTimeout(() => setAnalysisStep(2), 600);
    setTimeout(() => setAnalysisStep(3), 1200);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisStep(4);
      onAnalysisComplete();
    }, 1800);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    triggerAnalysis();
  };

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Armchair': return <Armchair className="w-16 h-16 text-amber-300/80 mb-2" />;
      case 'Plane': return <Plane className="w-16 h-16 text-cyan-300/80 mb-2" />;
      case 'Cpu': return <Cpu className="w-16 h-16 text-emerald-300/80 mb-2" />;
      case 'Receipt': return <Receipt className="w-16 h-16 text-purple-300/80 mb-2" />;
      default: return <Camera className="w-16 h-16 text-snap-400 mb-2" />;
    }
  };

  return (
    <section id="visual-dropzone" className="py-8 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border-snap-500/30">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-snap-400" />
                <h2 className="text-xl font-bold text-white">Visual Dropzone & Multimodal Pipeline</h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Drop any screenshot, paste from clipboard (⌘V), or write an action intent command
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-white/5 text-snap-300">
                Vision: GPT-4o Multimodal
              </span>
              <span className="px-2.5 py-1 rounded bg-dark-900 border border-white/5 text-cyan-300">
                Web: Tavily Shopping API
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Visual Canvas Dropzone (7 cols) */}
            <div className="lg:col-span-7">
              <div
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                className={`relative rounded-2xl border-2 border-dashed h-72 sm:h-80 flex flex-col items-center justify-center p-6 text-center transition-all overflow-hidden bg-gradient-to-br ${
                  activeSample?.imagePlaceholderBg || 'from-dark-900 to-dark-950'
                } ${
                  dragOver ? 'border-snap-400 scale-[1.01]' : 'border-white/20 hover:border-white/40'
                }`}
              >
                {/* Laser Sweep Scanner Line during analysis */}
                {isAnalyzing && (
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-snap-400 shadow-[0_0_15px_#a855f7] animate-laser z-20" />
                )}

                {/* Simulated Bounding Box highlight */}
                {activeSample && !isAnalyzing && (
                  <div className="absolute inset-4 rounded-xl border-2 border-cyan-400/80 bg-cyan-500/5 animate-box-glow pointer-events-none z-10 flex items-start justify-end p-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-950/90 text-cyan-300 border border-cyan-400/40">
                      {activeSample.boundingBox.label}
                    </span>
                  </div>
                )}

                {/* Center Visual Mockup Content */}
                <div className="relative z-10 flex flex-col items-center">
                  {renderIcon(activeSample?.visualIcon)}
                  <h4 className="text-base font-bold text-white mb-1">
                    {activeSample?.title || "Drop Screenshot Here"}
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mb-3">
                    {activeSample?.originalSource || "Drop image from Slack, Twitter, Instagram or Invoice PDF"}
                  </p>
                  <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">
                    Supports PNG, JPG, WebP or Ctrl+V
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Intent Prompt & Vision Stages (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>User Action Intent</span>
                  <span className="text-[10px] text-snap-400 font-normal">Natural Language</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={userIntent}
                    onChange={(e) => setUserIntent(e.target.value)}
                    placeholder="e.g. Order this exact chair to our office"
                    className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-snap-500 focus:ring-1 focus:ring-snap-500"
                  />
                </div>
              </div>

              {/* Multimodal Decomposition Timeline */}
              <div className="p-4 rounded-xl bg-dark-950/70 border border-white/5 space-y-3">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Decomposition Pipeline</span>
                  <span className="text-snap-400 font-mono text-[11px]">
                    {isAnalyzing ? 'Processing...' : 'Ready'}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${analysisStep >= 1 ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span className={analysisStep >= 1 ? 'text-slate-200' : 'text-slate-500'}>
                      1. Multimodal OCR & Image Feature Vectorization
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${analysisStep >= 2 ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span className={analysisStep >= 2 ? 'text-slate-200' : 'text-slate-500'}>
                      2. Exact Brand, Model & SKU Disambiguation
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className={`w-4 h-4 ${analysisStep >= 3 ? 'text-emerald-400' : 'text-slate-600'}`} />
                    <span className={analysisStep >= 3 ? 'text-slate-200' : 'text-slate-500'}>
                      3. Live Web Vendor Shopping & Cart Prep
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={triggerAnalysis}
                disabled={isAnalyzing}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-snap-600 via-indigo-600 to-fuchsia-600 hover:from-snap-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-snap-500/25 transition-all hover:scale-[1.01]"
              >
                {isAnalyzing ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Decomposing Screenshot...</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    <span>Run Multimodal Action Extraction</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
