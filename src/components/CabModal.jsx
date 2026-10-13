import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Camera, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CabModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Executive Assistant',
    frequency: 'Daily (10+ screenshots a week)',
    bottleneck: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-panel-glow w-full max-w-lg rounded-2xl p-6 sm:p-8 relative border-snap-500/40 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-dark-800 border border-white/5"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-snap-500/20 text-snap-300 text-xs font-bold uppercase tracking-wider mb-3 border border-snap-500/30">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>Customer Advisory Board (Cohort 1)</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
              Join the SnapAction Founding CAB
            </h2>

            {/* Verbatim Outreach Pitch Script */}
            <div className="p-3.5 rounded-xl bg-snap-950/40 border border-snap-500/30 mb-6 text-xs text-slate-200 italic leading-relaxed">
              "We are assembling a 10-member Customer Advisory Board (CAB) for SnapAction to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount ($7.50/mo instead of $25/mo)</strong> and dedicated onboarding for our first cohort."
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rachel Adams"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-snap-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rachel@execoffice.com"
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-snap-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-snap-500 focus:outline-none"
                  >
                    <option value="Executive Assistant">Executive Assistant</option>
                    <option value="Procurement Coordinator">Procurement Coordinator</option>
                    <option value="Founder / CEO">Founder / CEO</option>
                    <option value="Creative Director">Creative Director</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Screenshot Volume</label>
                  <select
                    value={formData.frequency}
                    onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                    className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-snap-500 focus:outline-none"
                  >
                    <option value="Daily (10+ screenshots a week)">Daily (10+ screenshots/wk)</option>
                    <option value="Moderate (3-5 a week)">Moderate (3-5 screenshots/wk)</option>
                    <option value="High-volume agency (50+ a week)">High-volume (50+ screenshots/wk)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">What screenshot tasks waste the most hours?</label>
                <textarea
                  rows={2}
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  placeholder="e.g. Executives texting photos of furniture or flights saying 'book this'..."
                  className="w-full px-3 py-2 bg-dark-900 border border-white/10 rounded-lg text-xs text-white focus:border-snap-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-snap-600 via-indigo-600 to-fuchsia-600 hover:from-snap-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-snap-500/30 transition-all hover:scale-[1.01]"
                >
                  <span>Lock In 70% Lifetime Founding Seat ($7.50/mo)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict 10-Member Limit for Cohort 1</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Welcome to the SnapAction CAB!</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
              We've locked in your 70% lifetime platform discount code for <strong>{formData.email}</strong>. Our multimodal agent team will contact you within 24 hours with your VIP Chrome Extension invite.
            </p>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-750 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              Return to Visual Dropzone
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
