import React, { useState, useMemo } from 'react';
import { AlertTriangle, ShieldCheck, Check, Plus, Trash2, Pill, Info } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import { Medication, DrugInteraction } from '../types/pharmacy';

interface DetectedInteraction {
  drugA: Medication;
  drugB: Medication;
  interaction: DrugInteraction;
}

export const InteractionChecker: React.FC = () => {
  const { medications, setSelectedMedication, setIsDetailOpen } = usePharmacy();
  const [selectedDrugIds, setSelectedDrugIds] = useState<string[]>([
    'med-losartan',
    'med-amox-clav'
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDrug = (id: string) => {
    setSelectedDrugIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const removeDrug = (id: string) => {
    setSelectedDrugIds(prev => prev.filter(item => item !== id));
  };

  const clearAll = () => {
    setSelectedDrugIds([]);
  };

  const selectedDrugs = useMemo(() => {
    return medications.filter(m => selectedDrugIds.includes(m.id));
  }, [medications, selectedDrugIds]);

  // Evaluate mutual interactions
  const detectedInteractions = useMemo(() => {
    const list: DetectedInteraction[] = [];

    const doesMatch = (interaction: DrugInteraction, otherDrug: Medication): boolean => {
      const target = interaction.interactingSubstance.toLowerCase();
      const drugName = otherDrug.name.toLowerCase();

      if (drugName.includes(target) || target.includes(drugName)) return true;
      if (otherDrug.brandNames.some(b => target.includes(b.toLowerCase()) || b.toLowerCase().includes(target))) return true;

      // Extract significant tokens (>= 4 letters) from drug name
      const tokens = drugName
        .replace(/[^a-záéíóúüñ0-9\s]/gi, ' ')
        .split(/\s+/)
        .filter(t => t.length >= 4 && !['para', 'cido', 'acido', 'sodio', 'sodico', 'sódico', 'oral', 'base'].includes(t));

      for (const t of tokens) {
        if (target.includes(t)) return true;
      }

      // Semantic category matching
      if (target.includes('aine') && otherDrug.classificationIds.includes('c-aines')) return true;
      if (target.includes('opioide') && otherDrug.classificationIds.includes('c-narcoticos')) return true;
      if (target.includes('benzodiacepina') && otherDrug.name.toLowerCase().match(/pam|xepam|xil/)) return true;
      if (target.includes('aminoglucósido') && (otherDrug.name.toLowerCase().includes('micina') || otherDrug.name.toLowerCase().includes('amikacina'))) return true;
      if (target.includes('carbapenem') && otherDrug.name.toLowerCase().includes('penem')) return true;
      if (target.includes('tetraciclina') && otherDrug.name.toLowerCase().includes('ciclina')) return true;

      return false;
    };

    for (let i = 0; i < selectedDrugs.length; i++) {
      for (let j = i + 1; j < selectedDrugs.length; j++) {
        const drugA = selectedDrugs[i];
        const drugB = selectedDrugs[j];

        // Check drugA's interactions targeting drugB
        drugA.interactions?.forEach(interaction => {
          if (doesMatch(interaction, drugB)) {
            list.push({ drugA, drugB, interaction });
          }
        });

        // Check drugB's interactions targeting drugA
        drugB.interactions?.forEach(interaction => {
          if (doesMatch(interaction, drugA)) {
            // Avoid duplicate inverse entry
            const exists = list.some(
              item =>
                (item.drugA.id === drugB.id && item.drugB.id === drugA.id) ||
                (item.drugA.id === drugA.id && item.drugB.id === drugB.id && item.interaction.id === interaction.id)
            );

            if (!exists) {
              list.push({ drugA: drugB, drugB: drugA, interaction });
            }
          }
        });
      }
    }

    return list;
  }, [selectedDrugs]);

  // Count by severity
  const countContraindicated = detectedInteractions.filter(d => d.interaction.severity === 'Contraindicada').length;
  const countMajor = detectedInteractions.filter(d => d.interaction.severity === 'Mayor').length;
  const countModerate = detectedInteractions.filter(d => d.interaction.severity === 'Moderada').length;

  // Preset clinical test scenarios
  const applyScenario = (drugIds: string[]) => {
    setSelectedDrugIds(drugIds);
  };

  const filteredMeds = medications.filter(m =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.brandNames.some(b => b.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
          <span>Herramienta de Seguridad Farmacológica</span>
          <span aria-hidden="true">·</span>
          <span>Matriz de Cruce Interactivo</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
          Comprobador Clínico de Interacciones
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Seleccione 2 o más medicamentos para evaluar riesgos de interacción farmacocinética, sinergismo tóxico o antagonismo terapéutico según los registros de la base de datos.
        </p>

        {/* Quick test scenarios */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-medium">Casos clínicos de alerta:</span>
          <button
            onClick={() => applyScenario(['med-morfina', 'med-diazepam'])}
            className="px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-900 transition-colors font-medium"
          >
            Morfina + Diazepam (Depresión respiratoria)
          </button>
          <button
            onClick={() => applyScenario(['med-litio', 'med-ibuprofeno'])}
            className="px-2.5 py-1 rounded bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-900 transition-colors font-medium"
          >
            Litio + Ibuprofeno (Toxicidad litio)
          </button>
          <button
            onClick={() => applyScenario(['med-furosemida', 'med-gentamicina'])}
            className="px-2.5 py-1 rounded bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-900 transition-colors font-medium"
          >
            Furosemida + Gentamicina (Ototoxicidad)
          </button>
          <button
            onClick={() => applyScenario(['med-captopril', 'med-espironolactona'])}
            className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
          >
            Captopril + Espironolactona (Hiperpotasemia)
          </button>
        </div>
      </div>

      {/* Main Grid: Drug Selector (Left) & Results (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Drug Selector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900 dark:text-white uppercase font-mono tracking-wider">
                Medicamentos Seleccionados ({selectedDrugIds.length})
              </span>
              {selectedDrugIds.length > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-rose-600 hover:underline"
                >
                  Limpiar lista
                </button>
              )}
            </div>

            {/* Chips of selected drugs */}
            <div className="flex flex-wrap gap-1.5 min-h-12 p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 items-center">
              {selectedDrugs.length === 0 ? (
                <span className="text-xs text-slate-400 italic px-2">
                  Seleccione fármacos abajo para evaluar interacciones...
                </span>
              ) : (
                selectedDrugs.map(d => (
                  <span
                    key={d.id}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-200 text-xs font-semibold border border-teal-200 dark:border-teal-800"
                  >
                    <span>{d.name}</span>
                    <button
                      onClick={() => removeDrug(d.id)}
                      className="hover:text-rose-600 ml-0.5"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </span>
                ))
              )}
            </div>

            {/* Catalog search input */}
            <div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filtrar catálogo de medicamentos..."
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Medication list */}
            <div className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl">
              {filteredMeds.map(med => {
                const isSelected = selectedDrugIds.includes(med.id);
                return (
                  <button
                    key={med.id}
                    onClick={() => toggleDrug(med.id)}
                    className={`w-full p-2.5 flex items-center justify-between text-left transition-colors ${
                      isSelected
                        ? 'bg-teal-50/70 dark:bg-teal-950/40 text-teal-900 dark:text-teal-100 font-semibold'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <div className="truncate pr-2">
                      <div className="text-xs truncate">{med.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{med.atcCode || 'ATC'}</div>
                    </div>
                    <div className="shrink-0">
                      {isSelected ? (
                        <Check className="w-4 h-4 text-teal-600" />
                      ) : (
                        <Plus className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Interaction Analysis Output */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Summary counters */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Contraindicadas</span>
              <span className="text-2xl font-bold font-mono text-rose-600">{countContraindicated}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Riesgo Mayor</span>
              <span className="text-2xl font-bold font-mono text-amber-600">{countMajor}</span>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Moderadas</span>
              <span className="text-2xl font-bold font-mono text-teal-600">{countModerate}</span>
            </div>
          </div>

          {/* Interaction Details Feed */}
          {selectedDrugIds.length < 2 ? (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <Info className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
              <h4 className="text-sm font-bold text-slate-700 dark:text-slate-300">
                Seleccione al menos 2 medicamentos
              </h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                El sistema comparará las dianas farmacológicas, vías enzimáticas de degradación (CYP450) y efectos fisiológicos registrados.
              </p>
            </div>
          ) : detectedInteractions.length === 0 ? (
            <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto" />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                No se detectaron interacciones severas registradas
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                No se han registrado incompatibilidades o interacciones críticas directas entre los {selectedDrugs.length} fármacos seleccionados en la base de datos actual.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {detectedInteractions.map((item, idx) => {
                const isContra = item.interaction.severity === 'Contraindicada';
                const isMajor = item.interaction.severity === 'Mayor';

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all ${
                      isContra
                        ? 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900'
                        : isMajor
                        ? 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.drugA.name}
                        </span>
                        <span className="text-xs text-slate-400">↔</span>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.drugB.name}
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-bold uppercase font-mono px-2 py-0.5 rounded ${
                          isContra
                            ? 'bg-rose-600 text-white'
                            : isMajor
                            ? 'bg-amber-600 text-white'
                            : 'bg-teal-600 text-white'
                        }`}
                      >
                        {item.interaction.severity}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Efecto clínico: </span>
                        <span className="text-slate-700 dark:text-slate-300">{item.interaction.clinicalEffect}</span>
                      </div>

                      <div className="bg-white/80 dark:bg-slate-900/80 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-800 text-teal-800 dark:text-teal-300">
                        <span className="font-bold">Recomendación médica: </span>
                        <span>{item.interaction.recommendation}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
