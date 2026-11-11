import React, { useState } from 'react';
import { Calculator, AlertCircle, CheckCircle2 } from 'lucide-react';

export const ClinicalCalculators: React.FC = () => {
  // Pediatric calculator state
  const [weight, setWeight] = useState<number>(18);
  const [dosePerKg, setDosePerKg] = useState<number>(50); // mg/kg/day
  const [dosesPerDay, setDosesPerDay] = useState<number>(3); // cada 8 horas
  const [syrupMg, setSyrupMg] = useState<number>(400); // ej. 400 mg
  const [syrupMl, setSyrupMl] = useState<number>(5); // en 5 ml

  // Renal calculator state (Cockcroft-Gault)
  const [patientAge, setPatientAge] = useState<number>(65);
  const [patientWeight, setPatientWeight] = useState<number>(72);
  const [creatinine, setCreatinine] = useState<number>(1.4); // mg/dl
  const [gender, setGender] = useState<'male' | 'female'>('male');

  // Pediatric posology calculations
  const totalDailyMg = weight * dosePerKg;
  const singleDoseMg = dosesPerDay > 0 ? totalDailyMg / dosesPerDay : 0;
  const concentrationMgPerMl = syrupMl > 0 ? syrupMg / syrupMl : 1;
  const singleDoseMl = concentrationMgPerMl > 0 ? singleDoseMg / concentrationMgPerMl : 0;

  // Cockcroft-Gault formula: ((140 - Age) * Weight) / (72 * Cr) (* 0.85 if female)
  const cockcroftCrCl = creatinine > 0
    ? (((140 - patientAge) * patientWeight) / (72 * creatinine)) * (gender === 'female' ? 0.85 : 1)
    : 0;

  const getRenalCategory = (crcl: number) => {
    if (crcl >= 90) return { label: 'Normal / Hiperfiltración (Estadio 1)', color: 'text-emerald-600', note: 'Dosis estándar completa.' };
    if (crcl >= 60) return { label: 'Disfunción leve (Estadio 2)', color: 'text-teal-600', note: 'Generalmente no requiere ajuste salvo margen terapéutico estrecho.' };
    if (crcl >= 30) return { label: 'Disfunción moderada (Estadio 3)', color: 'text-amber-600', note: 'Ajustar dosis o espaciar intervalos en antibióticos y antivirales.' };
    if (crcl >= 15) return { label: 'Disfunción severa (Estadio 4)', color: 'text-orange-600', note: 'Ajuste estricto requerido. Contraindicación para Metformina y AINEs.' };
    return { label: 'Fallo renal terminal (Estadio 5)', color: 'text-rose-600', note: 'Requiere terapia de reemplazo renal/diálisis.' };
  };

  const renalStage = getRenalCategory(cockcroftCrCl);

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
          <span>Herramientas Clínicas de Precisión</span>
          <span aria-hidden="true">·</span>
          <span>Dosificación & Farmacocinética</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
          Calculadoras Posológicas para Profesionales
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Ajuste dosis pediátricas en función del peso y calcule el aclaramiento de creatinina según Cockcroft-Gault para ajustar fármacos de eliminación renal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Calculator 1: Pediatric Posology */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Dosificación Pediátrica por Peso
                </h3>
                <span className="text-xs text-slate-400">Cálculo de mg/kg/día a ml de suspensión</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Peso del Niño (kg)
                </label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  step="0.5"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Dosis Recomendada (mg/kg/día)
                </label>
                <input
                  type="number"
                  min="1"
                  step="1"
                  value={dosePerKg}
                  onChange={(e) => setDosePerKg(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Frecuencia de Tomas al Día
                </label>
                <select
                  value={dosesPerDay}
                  onChange={(e) => setDosesPerDay(parseInt(e.target.value))}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value={1}>1 toma al día (cada 24 horas)</option>
                  <option value={2}>2 tomas al día (cada 12 horas)</option>
                  <option value={3}>3 tomas al día (cada 8 horas)</option>
                  <option value={4}>4 tomas al día (cada 6 horas)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Concentración de la Suspensión
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    value={syrupMg}
                    onChange={(e) => setSyrupMg(parseFloat(e.target.value) || 0)}
                    placeholder="mg"
                    className="w-16 px-2 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center"
                  />
                  <span className="text-xs text-slate-400">mg /</span>
                  <input
                    type="number"
                    value={syrupMl}
                    onChange={(e) => setSyrupMl(parseFloat(e.target.value) || 0)}
                    placeholder="ml"
                    className="w-16 px-2 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-center"
                  />
                  <span className="text-xs text-slate-400">ml</span>
                </div>
              </div>
            </div>

            {/* Pediatric Results Box */}
            <div className="bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-teal-200/60 dark:border-teal-900 pb-2">
                <span className="text-xs text-teal-900 dark:text-teal-200 font-medium">Volumen a Administrar por Toma:</span>
                <span className="text-2xl font-bold font-mono text-teal-800 dark:text-teal-300">
                  {singleDoseMl.toFixed(1)} ml
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block">Dosis por toma:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{singleDoseMg.toFixed(0)} mg</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Dosis diaria total:</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">{totalDailyMg.toFixed(0)} mg/día</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-400">
            * Verificar siempre con la jeringa dosificadora graduada provista por el fabricante.
          </div>
        </div>

        {/* Calculator 2: Cockcroft-Gault Renal Clearance */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Aclaramiento de Creatinina (Cockcroft-Gault)
                </h3>
                <span className="text-xs text-slate-400">Ajuste de dosis en función renal</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Edad del Paciente (años)
                </label>
                <input
                  type="number"
                  min="18"
                  max="120"
                  value={patientAge}
                  onChange={(e) => setPatientAge(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Peso Corporal (kg)
                </label>
                <input
                  type="number"
                  min="30"
                  max="250"
                  value={patientWeight}
                  onChange={(e) => setPatientWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Creatinina Sérica (mg/dl)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0.2"
                  max="15"
                  value={creatinine}
                  onChange={(e) => setCreatinine(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Sexo Biológico
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                >
                  <option value="male">Masculino (Factor 1.0)</option>
                  <option value="female">Femenino (Factor 0.85)</option>
                </select>
              </div>
            </div>

            {/* Renal Results Box */}
            <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">ClCr Estimado:</span>
                <span className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
                  {cockcroftCrCl.toFixed(1)} ml/min
                </span>
              </div>

              <div>
                <div className={`text-xs font-bold ${renalStage.color}`}>
                  {renalStage.label}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {renalStage.note}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-slate-400">
            * Fórmula estándar empleada en fichas técnicas de la FDA y AEMPS para ajuste posológico.
          </div>
        </div>

      </div>

    </div>
  );
};
