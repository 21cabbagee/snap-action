import React from 'react';
import { History, CheckCircle2, Clock, DollarSign, Download, ArrowUpRight } from 'lucide-react';

export default function ExecutionHistory({ executedActions }) {
  const handleExportHistory = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(executedActions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `snapaction_executed_log_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section className="py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-snap-400" />
              <span>Executed Visual Action History</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Audit trail of all screenshot-triggered procurements, ticket reservations, and vendor prep actions
            </p>
          </div>

          <button
            onClick={handleExportHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-800 hover:bg-dark-750 text-slate-300 border border-white/5 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Action Audit JSON</span>
          </button>
        </div>

        {/* History Table / Card List */}
        <div className="space-y-3">
          {executedActions.map((action, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 rounded-xl border-white/5 flex flex-wrap items-center justify-between gap-4 text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{action.item}</h4>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                    <span className="text-slate-300">{action.vendor}</span>
                    <span>•</span>
                    <span className="font-mono text-cyan-300 font-bold">{action.price}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {action.timestamp}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Human Confirmed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
