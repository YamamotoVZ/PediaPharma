import React, { useState } from 'react';
import {
  X,
  Printer,
  Edit3,
  AlertTriangle,
  Pill,
  ExternalLink,
  Layers,
  Zap,
  ClipboardList,
  Clock,
  ShieldAlert,
  GitCompare,
  CheckCircle2,
  AlertOctagon,
  FileText,
  ChevronRight,
  Maximize2,
  Info
} from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';

type DetailApartado = 'general' | 'mechanism' | 'indications' | 'posology' | 'safety' | 'interactions';

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

  const [activeApartado, setActiveApartado] = useState<DetailApartado>('general');
  const [viewMode, setViewMode] = useState<'tabs' | 'full'>('tabs');
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

  const handleApartadoClick = (tabId: DetailApartado) => {
    setActiveApartado(tabId);
    if (viewMode === 'full') {
      const el = document.getElementById(`apartado-${tabId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const apartadosConfig = [
    {
      id: 'general' as const,
      label: 'General y Formas',
      shortLabel: 'General',
      badge: `${med.presentations?.length || 0} formas`,
      icon: Pill
    },
    {
      id: 'mechanism' as const,
      label: 'Mecanismo y Farmacocinética',
      shortLabel: 'Mecanismo',
      badge: med.mechanismOfAction?.targetReceptor ? 'Diana' : 'Cinética',
      icon: Zap
    },
    {
      id: 'indications' as const,
      label: 'Indicaciones Clínicas',
      shortLabel: 'Indicaciones',
      badge: `${med.indications?.approved?.length || 0} usos`,
      icon: ClipboardList
    },
    {
      id: 'posology' as const,
      label: 'Posología y Ajustes',
      shortLabel: 'Posología',
      badge: 'Adulto/Ped',
      icon: Clock
    },
    {
      id: 'safety' as const,
      label: 'Seguridad y Efectos',
      shortLabel: 'Seguridad',
      badge: `Cat. ${med.safety?.pregnancyCategory || 'N/D'}`,
      icon: ShieldAlert
    },
    {
      id: 'interactions' as const,
      label: 'Interacciones',
      shortLabel: 'Interacciones',
      badge: `${med.interactions?.length || 0}`,
      icon: GitCompare
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 print:p-0 print:bg-white">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden print:border-none print:shadow-none print:max-h-none print:rounded-none">
        
        {/* ============================================================
            1. MODAL TOP HEADER: Identification & Controls
           ============================================================ */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 print:border-b-2 print:border-slate-900">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
            
            {/* Drug Title and Meta */}
            <div className="space-y-1">
              <div className="flex items-center flex-wrap gap-2">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  ATC: {med.atcCode || 'Sin código'}
                </span>
                
                {med.safety?.controlledSubstance && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-600 text-white shadow-xs">
                    Medicamento Controlado
                  </span>
                )}

                {med.safety?.blackBoxWarning && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-white shadow-xs flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Black Box Warning
                  </span>
                )}

                {assignedClassifications.map(c => (
                  <button
                    key={c.id}
                    onClick={() => handleJumpToClassification(c.id)}
                    className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-300 inline-flex items-center gap-1 transition-colors print:text-black"
                    title={`Ver clasificación: ${c.name}`}
                  >
                    <span>#{c.name}</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60 print:hidden" />
                  </button>
                ))}
              </div>

              <div className="flex items-baseline gap-3 flex-wrap">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {med.name}
                </h1>
                {med.brandNames && med.brandNames.length > 0 && (
                  <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Marcas:</span>{' '}
                    <span className="italic">{med.brandNames.join(', ')}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto print:hidden">
              {/* Toggle view mode */}
              <div className="hidden sm:flex items-center p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <button
                  onClick={() => setViewMode('tabs')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    viewMode === 'tabs'
                      ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs font-semibold'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Navegar apartado por apartado"
                >
                  Por Apartados
                </button>
                <button
                  onClick={() => setViewMode('full')}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    viewMode === 'full'
                      ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-300 shadow-xs font-semibold'
                      : 'hover:text-slate-900 dark:hover:text-white'
                  }`}
                  title="Ver todos los apartados en vista continua"
                >
                  Ficha Completa
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
                title="Imprimir ficha clínica oficial"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Imprimir</span>
              </button>

              <button
                onClick={() => {
                  setIsDetailOpen(false);
                  openEditForm(med);
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-xs transition-colors"
                title="Editar datos de este medicamento"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Editar</span>
              </button>

              <button
                onClick={() => setIsDetailOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-1"
                aria-label="Cerrar ficha"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

        {/* ============================================================
            2. PROMINENT APARTADOS NAVIGATION BAR (Sticky)
           ============================================================ */}
        <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-950/70 backdrop-blur-xs px-3 sm:px-6 py-2 shrink-0 print:hidden overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-1 hidden lg:inline">
              Apartados:
            </span>
            {apartadosConfig.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeApartado === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleApartadoClick(tab.id)}
                  className={`group relative flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm shadow-teal-600/30 dark:bg-teal-500 dark:text-slate-950 font-bold'
                      : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[11px] font-mono shrink-0 ${
                    isActive
                      ? 'bg-white/20 text-white dark:bg-slate-950/20 dark:text-slate-950 font-bold'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  
                  <span>{tab.label}</span>

                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-medium ${
                    isActive
                      ? 'bg-white/25 text-white dark:bg-slate-950/20 dark:text-slate-950'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}>
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            3. SCROLLABLE BODY: APARTADOS CONTENT
           ============================================================ */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-8 flex-1 space-y-8 bg-slate-50/30 dark:bg-slate-900/40">

          {/* ------------------------------------------------------------
              APARTADO 1: GENERAL Y FORMAS FARMACÉUTICAS
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'general') && (
            <section id="apartado-general" className="space-y-6 pt-1">
              
              {/* Section Header (Always in full mode, or for clarity) */}
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    01
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 1: General y Formas Farmacéuticas
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Identificación clínica, fotografía del producto, descripción terapéutica y presentaciones galénicas disponibles.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                
                {/* Visual Image & Quick Specs Card */}
                <div className="md:col-span-5 space-y-4">
                  <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-xs flex items-center justify-center group">
                    {activeImage ? (
                      <img
                        src={activeImage}
                        alt={med.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="text-center p-6 text-slate-400">
                        <Pill className="w-12 h-12 mx-auto mb-2 text-teal-600/50" />
                        <p className="text-xs">Sin fotografía registrada</p>
                      </div>
                    )}
                    
                    {med.safety?.controlledSubstance && (
                      <div className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                        Controlado
                      </div>
                    )}
                  </div>

                  {/* Multiple image gallery thumbnails */}
                  {images.length > 1 && (
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                        Galería de presentaciones ({images.length}):
                      </span>
                      <div className="flex items-center gap-2 overflow-x-auto pb-1">
                        {images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIndex(idx)}
                            className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                              selectedImageIndex === idx
                                ? 'border-teal-600 ring-2 ring-teal-500/20 scale-105'
                                : 'border-slate-200 dark:border-slate-700 opacity-70 hover:opacity-100'
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
                    </div>
                  )}

                  {/* Quick Clinical Highlights Box */}
                  <div className="bg-white dark:bg-slate-800/80 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 text-xs">
                    <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] font-mono border-b border-slate-100 dark:border-slate-700 pb-1.5 flex items-center justify-between">
                      <span>Ficha Rápida</span>
                      <Info className="w-3.5 h-3.5 text-teal-600" />
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400">Embarazo FDA</span>
                      <span className={`font-bold font-mono px-2 py-0.5 rounded text-xs ${
                        med.safety?.pregnancyCategory === 'X' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                        med.safety?.pregnancyCategory === 'D' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                        'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300'
                      }`}>
                        Categoría {med.safety?.pregnancyCategory || 'N/D'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400">Lactancia</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {med.safety?.lactation || 'Sin datos clínicos'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400">Vías autorizadas</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">
                        {med.dosageAndPosology?.routes?.join(', ') || 'N/D'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 dark:text-slate-400">Actualización</span>
                      <span className="font-mono text-slate-600 dark:text-slate-300">
                        {new Date(med.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                </div>

                {/* Description and Presentations List */}
                <div className="md:col-span-7 space-y-5">
                  
                  {/* Clinical Description Box */}
                  <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                    <span className="text-xs font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Descripción Farmacológica General</span>
                    </span>
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {med.description}
                    </p>
                  </div>

                  {/* Black Box Warning if present */}
                  {med.safety?.blackBoxWarning && (
                    <div className="bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-300 dark:border-rose-800 rounded-2xl p-4 text-xs text-rose-900 dark:text-rose-200 flex items-start gap-3 shadow-xs">
                      <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold uppercase tracking-wider block mb-1 text-rose-700 dark:text-rose-400 text-xs">
                          Advertencia de Seguridad en Recuadro Negro (Black Box Warning)
                        </span>
                        <p className="leading-relaxed font-medium">
                          {med.safety.blackBoxWarning}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Complete Presentations Grid */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <Pill className="w-4 h-4 text-teal-600" />
                        <span>Formas Farmacéuticas & Presentaciones ({med.presentations?.length || 0})</span>
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        Concentración y empaque
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {med.presentations?.map((p, idx) => (
                        <div
                          key={p.id || idx}
                          className="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-teal-500/50 transition-colors shadow-xs space-y-1.5"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-[11px] font-mono font-bold flex items-center justify-center shrink-0">
                                {idx + 1}
                              </span>
                              <span className="font-bold text-sm text-slate-900 dark:text-white">
                                {p.form}
                              </span>
                            </div>
                            <span className="font-mono font-bold text-xs px-2.5 py-0.5 rounded-md bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 self-start sm:self-auto">
                              {p.concentration}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-700/60">
                            <div>
                              <span className="font-medium text-slate-500">Vía:</span>{' '}
                              <span className="text-slate-800 dark:text-slate-200 font-semibold">{p.route}</span>
                            </div>
                            {p.packaging && (
                              <div>
                                <span className="font-medium text-slate-500">Envase:</span>{' '}
                                <span className="text-slate-800 dark:text-slate-200">{p.packaging}</span>
                              </div>
                            )}
                          </div>

                          {p.excipients && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-2 rounded-lg mt-1">
                              <span className="font-semibold text-slate-600 dark:text-slate-300">Excipientes de interés:</span>{' '}
                              {p.excipients}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </section>
          )}

          {/* ------------------------------------------------------------
              APARTADO 2: MECANISMO DE ACCIÓN Y FARMACOCINÉTICA
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'mechanism') && (
            <section id="apartado-mechanism" className="space-y-6 pt-1">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    02
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 2: Mecanismo de Acción y Farmacocinética
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Diana molecular diana, farmacodinamia celular, vías de transducción y parámetros cinéticos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Target Receptor Molecular Banner */}
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/40 dark:to-emerald-950/30 border border-teal-200 dark:border-teal-900/70 rounded-2xl p-5 shadow-xs">
                <span className="text-xs font-mono font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                  <Zap className="w-4 h-4 text-teal-600" />
                  <span>Diana Molecular / Receptor Farmacológico</span>
                </span>
                <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {med.mechanismOfAction?.targetReceptor || 'Receptores farmacológicos específicos y enzimas blanco'}
                </p>
                {med.mechanismOfAction?.summary && (
                  <p className="text-xs sm:text-sm text-teal-950 dark:text-teal-200 mt-2 font-medium leading-relaxed">
                    {med.mechanismOfAction.summary}
                  </p>
                )}
              </div>

              {/* Detailed Pharmacodynamics */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-teal-600" />
                  <span>Farmacodinamia y Vía de Acción Detallada</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line">
                  {med.mechanismOfAction?.detailed || med.mechanismOfAction?.summary}
                </p>
              </div>

              {/* Key Kinetic and Dynamic Points */}
              {med.mechanismOfAction?.keyPoints && med.mechanismOfAction.keyPoints.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    Puntos Clave del Mecanismo y Farmacocinética
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {med.mechanismOfAction.keyPoints.map((point, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3"
                      >
                        <span className="font-mono text-teal-600 dark:text-teal-400 font-bold text-sm shrink-0">
                          0{i + 1}.
                        </span>
                        <span className="leading-relaxed font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </section>
          )}

          {/* ------------------------------------------------------------
              APARTADO 3: INDICACIONES CLÍNICAS Y TERAPÉUTICAS
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'indications') && (
            <section id="apartado-indications" className="space-y-6 pt-1">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    03
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 3: Indicaciones Clínicas y Terapéuticas
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Indicaciones autorizadas en ficha técnica y usos basados en literatura científica off-label.
                    </p>
                  </div>
                </div>
              </div>

              {/* Approved Indications */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
                <h3 className="text-xs font-bold text-teal-800 dark:text-teal-300 uppercase tracking-wider font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  <span>Indicaciones Terapéuticas Aprobadas Oficialmente</span>
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {med.indications?.approved?.map((ind, i) => (
                    <li
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200 flex items-start gap-2.5 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                      <span>{ind}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Off-label or Experimental Indications */}
              {med.indications?.offLabel && med.indications.offLabel.length > 0 && (
                <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-5 shadow-xs space-y-3">
                  <h3 className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Usos Clínicos Off-Label o en Estudio</span>
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {med.indications.offLabel.map((ind, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-white/80 dark:bg-slate-900/60 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-2 font-medium"
                      >
                        <span className="text-amber-500 font-bold shrink-0">·</span>
                        <span>{ind}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </section>
          )}

          {/* ------------------------------------------------------------
              APARTADO 4: POSOLOGÍA, VÍAS Y AJUSTES
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'posology') && (
            <section id="apartado-posology" className="space-y-6 pt-1">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    04
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 4: Posología, Vías y Ajustes de Dosificación
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Pautas posológicas en adultos, pediatría, ajustes en falla orgánica y pautas de administración.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Dosage Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Adults */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5 text-teal-700 dark:text-teal-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Dosis Estándar en Adultos</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {med.dosageAndPosology?.adults || 'Consultar ficha técnica oficial.'}
                  </p>
                </div>

                {/* Pediatrics */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Dosificación en Pediatría</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {med.dosageAndPosology?.pediatric || 'No indicado o dosificación no establecida en población pediátrica.'}
                  </p>
                </div>

                {/* Renal Adjustment */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400">
                    Ajuste en Insuficiencia Renal (TFG)
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono font-medium">
                    {med.dosageAndPosology?.renalAdjustment || 'No requiere ajuste en fallo renal aislado o datos insuficientes.'}
                  </p>
                </div>

                {/* Hepatic Adjustment */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono text-amber-700 dark:text-amber-400">
                    Ajuste en Insuficiencia Hepática
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                    {med.dosageAndPosology?.hepaticAdjustment || 'No precisa ajuste o administrar con monitorización clínica estrecha.'}
                  </p>
                </div>

              </div>

              {/* Authorized Routes Chips */}
              <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono uppercase tracking-wider mr-2">
                  Vías Autorizadas:
                </span>
                {med.dosageAndPosology?.routes?.map((route, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-teal-50 dark:bg-teal-950/70 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800"
                  >
                    {route}
                  </span>
                ))}
              </div>

              {/* Administration Clinical Notes */}
              {med.dosageAndPosology?.administrationNotes && (
                <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-2xl p-5 text-xs text-amber-900 dark:text-amber-200 shadow-xs space-y-1.5">
                  <span className="font-bold text-xs uppercase tracking-wider block flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-amber-600" />
                    <span>Recomendaciones Clínicas de Administración:</span>
                  </span>
                  <p className="leading-relaxed font-medium">
                    {med.dosageAndPosology.administrationNotes}
                  </p>
                </div>
              )}

            </section>
          )}

          {/* ------------------------------------------------------------
              APARTADO 5: SEGURIDAD, CONTRAINDICACIONES Y REACCIONES
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'safety') && (
            <section id="apartado-safety" className="space-y-6 pt-1">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    05
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 5: Seguridad, Contraindicaciones y Reacciones Adversas
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Contraindicaciones, embarazo, lactancia, precauciones y perfil de seguridad por frecuencias.
                    </p>
                  </div>
                </div>
              </div>

              {/* Black Box Warning if present */}
              {med.safety?.blackBoxWarning && (
                <div className="bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-400 dark:border-rose-900 rounded-2xl p-5 text-xs text-rose-950 dark:text-rose-200 shadow-xs space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-extrabold uppercase tracking-wider text-xs">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Advertencia de Caja Negra (Black Box Warning)</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {med.safety.blackBoxWarning}
                  </p>
                </div>
              )}

              {/* Special Populations: Pregnancy & Lactation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Pregnancy */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Embarazo (FDA)
                    </span>
                    <span className={`font-mono font-bold text-xs px-2.5 py-0.5 rounded ${
                      med.safety?.pregnancyCategory === 'X' ? 'bg-rose-600 text-white' :
                      med.safety?.pregnancyCategory === 'D' ? 'bg-amber-600 text-white' :
                      'bg-teal-600 text-white'
                    }`}>
                      Categoría {med.safety?.pregnancyCategory || 'N/D'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {med.safety?.pregnancyNotes || 'Evaluar relación riesgo-beneficio durante los trimestres de gestación.'}
                  </p>
                </div>

                {/* Lactation */}
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                      Lactancia Materna
                    </span>
                    <span className="font-semibold text-xs text-slate-900 dark:text-white">
                      {med.safety?.lactation || 'Sin datos'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    {med.safety?.lactationNotes || 'Consultar bases de datos de excreción en leche materna.'}
                  </p>
                </div>

              </div>

              {/* Contraindications */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-rose-700 dark:text-rose-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <AlertOctagon className="w-4 h-4" />
                  <span>Contraindicaciones Absolutas y Relativas</span>
                </h3>
                <div className="space-y-2">
                  {med.safety?.contraindications?.map((c, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/60 rounded-xl text-xs text-rose-900 dark:text-rose-200 font-medium flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warnings and Precautions */}
              {med.safety?.warnings && med.safety.warnings.length > 0 && (
                <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                    Precauciones y Advertencias Especiales
                  </h3>
                  <ul className="space-y-2">
                    {med.safety.warnings.map((w, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5 font-medium">
                        <span className="text-teal-600 font-bold shrink-0">·</span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Adverse Effects by frequency */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono">
                  Reacciones Adversas Notificadas por Frecuencia
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {med.adverseEffects?.map((group, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-xs space-y-1.5"
                    >
                      <div className="text-xs font-bold font-mono text-teal-700 dark:text-teal-400 flex items-center justify-between">
                        <span>{group.frequency}</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                        {group.effects.join(', ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </section>
          )}

          {/* ------------------------------------------------------------
              APARTADO 6: INTERACCIONES FARMACOLÓGICAS
             ------------------------------------------------------------ */}
          {(viewMode === 'full' || activeApartado === 'interactions') && (
            <section id="apartado-interactions" className="space-y-6 pt-1">
              
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-bold font-mono text-xs flex items-center justify-center">
                    06
                  </span>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      Apartado 6: Interacciones Farmacológicas
                    </h2>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Sustancias que interactúan, clasificación de severidad clínica y conducta recomendada.
                    </p>
                  </div>
                </div>
              </div>

              {med.interactions && med.interactions.length > 0 ? (
                <div className="space-y-3">
                  {med.interactions.map((interaction, i) => {
                    const isContraindicated = interaction.severity === 'Contraindicada';
                    const isMajor = interaction.severity === 'Mayor';
                    return (
                      <div
                        key={interaction.id || i}
                        className={`p-5 rounded-2xl border shadow-xs transition-all space-y-2 ${
                          isContraindicated
                            ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/60'
                            : isMajor
                            ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/60'
                            : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3 flex-wrap">
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                            {interaction.interactingSubstance}
                          </span>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2.5 py-1 rounded-md shadow-2xs ${
                              isContraindicated
                                ? 'bg-rose-600 text-white'
                                : isMajor
                                ? 'bg-amber-600 text-white'
                                : 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
                            }`}
                          >
                            {interaction.severity}
                          </span>
                        </div>

                        <div className="space-y-1.5 text-xs pt-1">
                          <p className="text-slate-700 dark:text-slate-200">
                            <span className="font-bold text-slate-900 dark:text-white">Efecto clínico:</span>{' '}
                            {interaction.clinicalEffect}
                          </p>
                          <p className="text-teal-800 dark:text-teal-300 font-semibold">
                            <span className="font-bold">Conducta recomendada:</span>{' '}
                            {interaction.recommendation}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-10 px-4 text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-800/40">
                  <GitCompare className="w-8 h-8 mx-auto mb-2 text-slate-300 dark:text-slate-600" />
                  <p className="font-semibold text-slate-600 dark:text-slate-400">
                    No se han registrado interacciones farmacológicas severas específicas para este fármaco.
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Verifique siempre con el Módulo Verificador de Interacciones para asociaciones combinadas.
                  </p>
                </div>
              )}

            </section>
          )}

        </div>

        {/* ============================================================
            4. MODAL FOOTER
           ============================================================ */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between shrink-0 print:hidden text-xs">
          <div className="text-slate-400 font-mono text-[11px]">
            Código interno: {med.id}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setIsDetailOpen(false);
                openEditForm(med);
              }}
              className="px-3 py-1.5 text-xs font-semibold text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950/60 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editar Medicamento</span>
            </button>
            <button
              onClick={() => setIsDetailOpen(false)}
              className="px-4 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cerrar Ficha
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
