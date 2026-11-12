/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PharmacyProvider, usePharmacy } from './context/PharmacyContext';
import { Header } from './components/Header';
import { HomeView } from './components/HomeView';
import { VademecumView } from './components/VademecumView';
import { ClassificationsView } from './components/ClassificationsView';
import { VideosView } from './components/VideosView';
import { RepasoView } from './components/RepasoView';
import { InteractionChecker } from './components/InteractionChecker';
import { ClinicalCalculators } from './components/ClinicalCalculators';
import { MedicationDetailModal } from './components/MedicationDetailModal';
import { MedicationFormModal } from './components/MedicationFormModal';
import { DatabaseToolsModal } from './components/DatabaseToolsModal';

const AppContent: React.FC = () => {
  const { activeTab } = usePharmacy();
  const [databaseToolsOpen, setDatabaseToolsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Header conforming to Top Bar Contract */}
      <Header onOpenDatabaseTools={() => setDatabaseToolsOpen(true)} />

      {/* Main Workspace Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'home' && <HomeView />}
        {activeTab === 'vademecum' && <VademecumView />}
        {activeTab === 'classifications' && <ClassificationsView />}
        {activeTab === 'videos' && <VideosView />}
        {activeTab === 'repaso' && <RepasoView />}
        {activeTab === 'interactions' && <InteractionChecker />}
        {activeTab === 'calculators' && <ClinicalCalculators />}
      </main>

      {/* Modals */}
      <MedicationDetailModal />
      <MedicationFormModal />
      <DatabaseToolsModal
        isOpen={databaseToolsOpen}
        onClose={() => setDatabaseToolsOpen(false)}
      />

      {/* Professional Clinical Reference Footer */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800 dark:text-slate-200">PharmaPedia</span>
            <span aria-hidden="true">·</span>
            <span>Sistema de Información Farmacológica para Profesionales de la Salud</span>
          </div>

          <div className="text-center sm:text-right text-[11px] text-slate-400">
            Los datos farmacológicos deben corroborarse con las guías de práctica clínica de cada institución hospitalaria.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default function App() {
  return (
    <PharmacyProvider>
      <AppContent />
    </PharmacyProvider>
  );
}
