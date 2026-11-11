import React, { useState } from 'react';
import { X, Printer, Edit3, AlertTriangle, ShieldCheck, Pill, ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';

export const MedicationDetailModal: React.FC = () => {
  const {
    selectedMedication,
    isDetailOpen,
    setIsDetailOpen,
    openEditForm,
    classifications,
    setActiveTab,
    setFilterClassification
  } = usePharmacy();

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'mechanism' | 'posology' | 'safety' | 'interactions'>('overview');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isDetailOpen || !selectedMedication) return null;

  const med = selectedMedication;
  const assignedClassifications = classifications.filter(c =>
    med.classificationIds?.includes(c.id)
  );

  const images = med.images && med.images.length > 0 ? med.images : [];
  const activeImage = images[selectedImageIndex] || med.primaryImage;

  const handlePrint = () => {
    window.print();
  };

  const handleJumpToClassification = (classId: string) => {
    setFilterClassification(classId);
    setActiveTab('classifications');
    setIsDetailOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:rounded-none">
        
        {/* Top bar of modal */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-900/70 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold tracking-wider uppercase">
              Ficha Farmacológica Oficial
            </span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="text-xs text-slate-500 font-mono">
              ATC: {med.atcCode || 'Sin código'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Imprimir ficha clínica"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>
            <button
              onClick={() => {
                setIsDetailOpen(false);
                openEditForm(med);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-xs transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar</span>
            </button>
            <button
              onClick={() => setIsDetailOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 flex-1">
          
          {/* Header Title & Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Visual preview column */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {activeImage ? (
                  <img
                    src={activeImage}
                    alt={med.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-6 text-slate-400">
                    <Pill className="w-12 h-12 mx-auto mb-2 text-teal-600/50" />
                    <p className="text-xs">Sin fotografía registrada</p>
                  </div>
                )}
                
                {med.safety?.controlledSubstance && (
                  <div className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                    Medicamento Controlado
                  </div>
                )}
              </div>

              {/* Thumbnails if multiple images */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-teal-600 ring-2 ring-teal-500/20'
                          : 'border-slate-200 dark:border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Presentación ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick clinical specs card */}
              <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3.5 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">Embarazo FDA</span>
                  <span className={`font-bold font-mono px-2 py-0.5 rounded ${
                    med.safety?.pregnancyCategory === 'X' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                    med.safety?.pregnancyCategory === 'D' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                    'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                  }`}>
                    Categoría {med.safety?.pregnancyCategory || 'N/D'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">Lactancia</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200">
                    {med.safety?.lactation || 'Sin datos'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">Vías de administración</span>
                  <span className="font-medium text-slate-800 dark:text-slate-200 text-right">
                    {med.dosageAndPosology?.routes?.join(', ') || 'N/D'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 dark:text-slate-400">Última actualización</span>
                  <span className="font-mono text-slate-600 dark:text-slate-300">
                    {new Date(med.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Information header */}
            <div className="md:col-span-7 space-y-3">
              {/* Unboxed classification tags */}
              <div className="flex items-center flex-wrap gap-2 text-xs">
                {assignedClassifications.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleJumpToClassification(c.id)}
                    className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-300 hover:underline font-semibold"
                    title={`Ver grupo ${c.name}`}
                  >
                    <span>#{c.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </button>
                ))}
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {med.name}
                </h1>
                {med.brandNames && med.brandNames.length > 0 && (
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    <span className="font-medium">Nombres comerciales:</span>{' '}
                    <span className="italic">{med.brandNames.join(', ')}</span>
                  </p>
                )}
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-teal-500 pl-3.5 my-3">
                {med.description}
              </p>

              {/* Black Box Warning if exists */}
              {med.safety?.blackBoxWarning && (
                <div className="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-xl p-3.5 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold uppercase tracking-wide block mb-0.5">Advertencia de Seguridad Crítica (Black Box)</span>
                    <p className="leading-relaxed">{med.safety.blackBoxWarning}</p>
                  </div>
                </div>
              )}

              {/* Presentations Quick List */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2 font-mono">
                  Presentaciones Clínicas Disponibles ({med.presentations?.length || 0})
                </h4>
                <div className="space-y-1.5">
                  {med.presentations?.map((p) => (
                    <div
                      key={p.id}
                      className="text-xs p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{p.form}</span>
                        <span className="mx-1.5 text-slate-400">·</span>
                        <span className="font-mono text-teal-700 dark:text-teal-300 font-semibold">{p.concentration}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {p.packaging || p.route}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Clinical Tabs */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl mb-6 overflow-x-auto print:hidden">
              <button
                onClick={() => setActiveSubTab('overview')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSubTab === 'overview'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Indicaciones & Excipientes
              </button>
              <button
                onClick={() => setActiveSubTab('mechanism')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSubTab === 'mechanism'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Mecanismo de Acción
              </button>
              <button
                onClick={() => setActiveSubTab('posology')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSubTab === 'posology'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Posología & Ajustes
              </button>
              <button
                onClick={() => setActiveSubTab('safety')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSubTab === 'safety'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Seguridad & Efectos Adversos
              </button>
              <button
                onClick={() => setActiveSubTab('interactions')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeSubTab === 'interactions'
                    ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Interacciones ({med.interactions?.length || 0})
              </button>
            </div>

            {/* TAB CONTENT: Overview */}
            {(activeSubTab === 'overview' || window.matchMedia('print').matches) && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
                    Indicaciones Terapéuticas Aprobadas
                  </h3>
                  <ul className="space-y-2">
                    {med.indications?.approved?.map((ind, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {med.indications?.offLabel && med.indications.offLabel.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider font-mono mb-2">
                      Usos Clínicos Off-Label o en Estudio
                    </h3>
                    <ul className="space-y-1.5">
                      {med.indications.offLabel.map((ind, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-amber-500">·</span>
                          <span>{ind}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Excipients and Presentations detail */}
                <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                    Información Galénica y Excipientes Relevantes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {med.presentations?.map((p) => (
                      <div key={p.id} className="p-2.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                        <div className="font-semibold text-slate-900 dark:text-white">{p.form} ({p.concentration})</div>
                        <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-1">
                          {p.excipients || 'Sin excipientes de declaración obligatoria.'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Mechanism */}
            {activeSubTab === 'mechanism' && (
              <div className="space-y-6">
                <div className="bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-900 rounded-xl p-5">
                  <h4 className="text-xs font-mono font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider mb-1">
                    Diana Farmacológica / Receptor
                  </h4>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {med.mechanismOfAction?.targetReceptor || 'Receptores diana farmacológicos específicos'}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2">
                    Descripción Farmacodinámica Detallada
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {med.mechanismOfAction?.detailed || med.mechanismOfAction?.summary}
                  </p>
                </div>

                {med.mechanismOfAction?.keyPoints && med.mechanismOfAction.keyPoints.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
                      Puntos Clave del Mecanismo y Cinética
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {med.mechanismOfAction.keyPoints.map((point, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                        >
                          <span className="font-mono text-teal-600 dark:text-teal-400 font-bold">0{i + 1}.</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: Posology */}
            {activeSubTab === 'posology' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <span>Dosis en Adultos</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {med.dosageAndPosology?.adults || 'Consultar ficha técnica oficial.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <span>Dosis Pediátrica</span>
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {med.dosageAndPosology?.pediatric || 'No indicado o dosificación no establecida en pediatría.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                      Ajuste en Insuficiencia Renal
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                      {med.dosageAndPosology?.renalAdjustment || 'No requiere ajuste en fallo renal aislado.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                      Ajuste en Insuficiencia Hepática
                    </h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {med.dosageAndPosology?.hepaticAdjustment || 'No requiere ajuste específico o usar con precaución.'}
                    </p>
                  </div>

                </div>

                {med.dosageAndPosology?.administrationNotes && (
                  <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-xl p-4 text-xs text-amber-900 dark:text-amber-200">
                    <span className="font-bold block mb-1">Recomendaciones de Administración:</span>
                    <p>{med.dosageAndPosology.administrationNotes}</p>
                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: Safety */}
            {activeSubTab === 'safety' && (
              <div className="space-y-6">
                {/* Contraindications */}
                <div>
                  <h3 className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Contraindicaciones Absolutas y Relativas</span>
                  </h3>
                  <div className="space-y-2">
                    {med.safety?.contraindications?.map((c, i) => (
                      <div
                        key={i}
                        className="p-3 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-lg text-xs text-rose-900 dark:text-rose-200"
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Warnings */}
                {med.safety?.warnings && med.safety.warnings.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2">
                      Precauciones y Advertencias Especiales
                    </h3>
                    <ul className="space-y-1.5">
                      {med.safety.warnings.map((w, i) => (
                        <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <span className="text-teal-600 font-bold">·</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Adverse effects organized by frequency */}
                <div>
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
                    Reacciones Adversas por Frecuencia
                  </h3>
                  <div className="space-y-3">
                    {med.adverseEffects?.map((group, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50"
                      >
                        <div className="text-xs font-bold font-mono text-slate-800 dark:text-slate-200 mb-1.5">
                          {group.frequency}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {group.effects.join(', ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: Interactions */}
            {activeSubTab === 'interactions' && (
              <div className="space-y-4">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Interacciones farmacocinéticas y farmacodinámicas registradas para este principio activo:
                </div>

                {med.interactions && med.interactions.length > 0 ? (
                  <div className="space-y-3">
                    {med.interactions.map((interaction) => {
                      const isHigh = interaction.severity === 'Contraindicada' || interaction.severity === 'Mayor';
                      return (
                        <div
                          key={interaction.id}
                          className={`p-4 rounded-xl border transition-all ${
                            interaction.severity === 'Contraindicada'
                              ? 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900'
                              : interaction.severity === 'Mayor'
                              ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900'
                              : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                              {interaction.interactingSubstance}
                            </span>
                            <span
                              className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2 py-0.5 rounded ${
                                interaction.severity === 'Contraindicada'
                                  ? 'bg-rose-600 text-white'
                                  : interaction.severity === 'Mayor'
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                              }`}
                            >
                              {interaction.severity}
                            </span>
                          </div>

                          <div className="space-y-1.5 text-xs">
                            <p className="text-slate-700 dark:text-slate-300">
                              <span className="font-semibold">Efecto clínico:</span> {interaction.clinicalEffect}
                            </p>
                            <p className="text-teal-700 dark:text-teal-400 font-medium">
                              <span className="font-semibold">Recomendación:</span> {interaction.recommendation}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                    No se han registrado interacciones farmacológicas severas para este fármaco.
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center justify-between print:hidden">
          <div className="text-xs text-slate-500 font-mono">
            ID: {med.id}
          </div>
          <button
            onClick={() => setIsDetailOpen(false)}
            className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Cerrar Ficha
          </button>
        </div>

      </div>
    </div>
  );
};
