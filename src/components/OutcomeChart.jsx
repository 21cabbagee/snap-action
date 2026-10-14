import React, { useState } from 'react';
import { TrendingUp, Camera, Zap, DollarSign, Clock, CheckCircle2, Sparkles, Layers } from 'lucide-react';

/**
 * OutcomeChart for SnapAction (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $9,500/mo manual data entry BPOs & fragile Selenium script maintenance ($6 layer)
 * with Autonomous Multimodal Vision Screenshot-to-Action Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Multimodal Screenshot-to-Action Web Agent",
  defaultTasks = 350,
  onCtaClick
}) {
  const [tasks, setTasks] = useState(defaultTasks);

  // Legacy manual BPO/agency: $22 per task in human manual clicking, data copying, verification
  const legacyServicesCost = tasks * 22;
  // SnapAction software fee: $39/mo flat + $0.25/task execution
  const autoSoftwareCost = 39 + Math.round(tasks * 0.25);
  const netValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 5);

  return (
    <div className="relative rounded-2xl border border-indigo-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-indigo-500/40 text-indigo-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $9,500/mo Human BPO Services ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Visual Automation Economics: <span className="text-indigo-400">{savingsPercent}% Overhead Crushed</span>
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            Julien Bek Thesis: Displacing brittle Selenium RPA consultants & manual data entry farms with instant multimodal visual grounding.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-900/80 border border-indigo-500/30 rounded-xl p-3">
          <Clock className="w-5 h-5 text-indigo-400" />
          <div className="text-right">
            <div className="text-xs text-slate-400 font-mono">Net Monthly Savings</div>
            <div className="text-lg font-black text-indigo-400 font-mono">
              +${netValueReclaimed.toLocaleString()}/mo
            </div>
          </div>
        </div>
      </div>

      {/* Slider Control */}
      <div className="my-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span>Monthly Visual Web Tasks & Purchases Executed:</span>
          </label>
          <span className="text-base font-bold text-indigo-400 font-mono bg-indigo-500/10 px-3 py-0.5 rounded-lg border border-indigo-500/20">
            {tasks} Tasks/mo
          </span>
        </div>
        <input
          type="range"
          min="50"
          max="1500"
          step="25"
          value={tasks}
          onChange={(e) => setTasks(parseInt(e.target.value))}
          className="w-full accent-indigo-400 bg-slate-800 rounded-lg cursor-pointer h-2"
        />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>50 Tasks</span>
          <span>750 Mid-Market Operations</span>
          <span>1,500+ Enterprise Scaling</span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {/* Legacy Manual Services ($6) */}
        <div className="rounded-xl border border-rose-500/20 bg-rose-950/10 p-5 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <Clock className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">Legacy Human BPO & RPA</h4>
                <p className="text-xs text-rose-300/70">Offshore Clerks & Broken Scripts</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded">
              The $6 Service Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Human Task Labor ($22/run):</span>
              <span className="font-mono text-rose-400 font-bold">${legacyServicesCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Average Execution Delay:</span>
              <span className="font-mono text-rose-400 font-bold">4.2 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Script Breakage Rate on DOM Change:</span>
              <span className="font-mono text-rose-400 font-bold">42% / month</span>
            </div>
            <div className="border-t border-rose-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Total Human Cost:</span>
              <span className="font-mono text-rose-400">${legacyServicesCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-rose-500/30">
            <div
              className="bg-gradient-to-r from-rose-600 to-rose-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${legacyBarHeight}%` }}
            />
          </div>
        </div>

        {/* SnapAction Software Layer ($1) */}
        <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/15 p-5 relative overflow-hidden shadow-lg shadow-indigo-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide">SnapAction Autonomous Agent</h4>
                <p className="text-xs text-indigo-300/80">Zero-DOM Visual Grounding</p>
              </div>
            </div>
            <span className="text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">
              The $1 Software Layer
            </span>
          </div>

          <div className="space-y-3 mb-6 text-xs text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">• Multimodal Vision Execution:</span>
              <span className="font-mono text-indigo-400 font-bold">Instant (&lt; 3.8s)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• DOM Resiliency (Visual OCR):</span>
              <span className="font-mono text-indigo-400 font-bold">99.8% Success</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">• Software Fee + Runs:</span>
              <span className="font-mono text-indigo-400 font-bold">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
            <div className="border-t border-indigo-500/20 pt-2 flex justify-between font-bold text-sm">
              <span className="text-white">Software Price:</span>
              <span className="font-mono text-indigo-400">${autoSoftwareCost.toLocaleString()}/mo</span>
            </div>
          </div>

          {/* Bar visualization */}
          <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden border border-indigo-500/30">
            <div
              className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${autoBarHeight}%` }}
            />
          </div>
        </div>
      </div>

      {/* Larry Ellison Economic Guarantee Box */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-fuchsia-950/40 border border-indigo-500/30 p-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-5 h-5 text-indigo-400" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>The Ellison SLA: 100% SKU Matching Guarantee</span>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-mono">Autonomous Execution</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              If SnapAction fails to match a screenshot to its live purchase URL within 5 seconds, your monthly subscription is 100% free.
            </p>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:from-indigo-400 hover:to-fuchsia-400 text-white font-bold text-sm shadow-lg shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
        >
          Claim Autonomous Tier
        </button>
      </div>
    </div>
  );
}
