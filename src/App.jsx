import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisualDropzone from './components/VisualDropzone';
import ActionConfirmationCard from './components/ActionConfirmationCard';
import ExecutionHistory from './components/ExecutionHistory';
import CabModal from './components/CabModal';
import Footer from './components/Footer';
import { MOCK_SCREENSHOTS } from './data/mockScreenshots';

export default function App() {
  const [activeSample, setActiveSample] = useState(MOCK_SCREENSHOTS[0]);
  const [userIntent, setUserIntent] = useState(MOCK_SCREENSHOTS[0].userPrompt);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [executedActions, setExecutedActions] = useState([
    {
      item: "Herman Miller Eames Lounge Chair & Ottoman (Walnut/Black)",
      vendor: "Herman Miller Official",
      price: "$6,495.00",
      timestamp: "10:14 AM"
    },
    {
      item: "United Airlines Flight UA 875 (SFO -> HND Polaris)",
      vendor: "United.com Direct",
      price: "$4,280.00",
      timestamp: "Yesterday"
    }
  ]);
  const [isCabOpen, setIsCabOpen] = useState(false);

  const handleSelectSample = (sample) => {
    setActiveSample(sample);
    setUserIntent(sample.userPrompt);
    const dropzoneEl = document.getElementById('visual-dropzone');
    if (dropzoneEl) {
      dropzoneEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalysisComplete = () => {
    const cardEl = document.getElementById('action-card');
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleActionApproved = (action) => {
    setExecutedActions([action, ...executedActions]);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-snap-500 selection:text-white">
      {/* Top Navbar */}
      <Header onOpenCab={() => setIsCabOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* High-Converting SEO Hero */}
        <Hero
          onSelectSample={handleSelectSample}
          onTriggerPaste={() => setIsAnalyzing(true)}
        />

        {/* Visual Dropzone & Intent Decomposition */}
        <VisualDropzone
          activeSample={activeSample}
          userIntent={userIntent}
          setUserIntent={setUserIntent}
          isAnalyzing={isAnalyzing}
          setIsAnalyzing={setIsAnalyzing}
          onAnalysisComplete={handleAnalysisComplete}
        />

        {/* Action Confirmation & Vendor Comparison Card */}
        <div id="action-card">
          <ActionConfirmationCard
            activeSample={activeSample}
            onActionApproved={handleActionApproved}
          />
        </div>

        {/* Executed Action History & Audit Log */}
        <ExecutionHistory executedActions={executedActions} />
      </main>

      {/* CAB Application Modal */}
      <CabModal
        isOpen={isCabOpen}
        onClose={() => setIsCabOpen(false)}
      />

      {/* Technical SEO Footer */}
      <Footer onOpenCab={() => setIsCabOpen(true)} />
    </div>
  );
}
