import React, { useState, useMemo } from 'react';
import { 
  ArrowDownAZ, 
  Folder, 
  Search, 
  ArrowRight, 
  ShieldAlert, 
  Calculator, 
  Pill, 
  Sparkles, 
  BookOpen,
  CheckCircle2,
  Activity,
  Video,
  GraduationCap
} from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import { Classification } from '../types/pharmacy';

export const HomeView: React.FC = () => {
  const { 
    classifications, 
    medications, 
    navigateToAlphabeticalMedications, 
    navigateToClassification,
    setActiveTab,
    setSearchQuery
  } = usePharmacy();

  const [categorySearch, setCategorySearch] = useState('');
  const [quickDrugSearch, setQuickDrugSearch] = useState('');

  // Map drug counts per classification
  const drugCountsByClass = useMemo(() => {
    const map: Record<string, number> = {};
    classifications.forEach(c => {
      map[c.id] = medications.filter(m => m.classificationIds?.includes(c.id)).length;
    });
    return map;
  }, [classifications, medications]);

  // Filtered classifications for the search input
  const filteredClassifications = useMemo(() => {
    if (!categorySearch.trim()) return classifications;
    const q = categorySearch.toLowerCase().trim();
    return classifications.filter(c => 
      c.name.toLowerCase().includes(q) ||
      c.code.toLowerCase().includes(q) ||
      c.therapeuticArea.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    );
  }, [classifications, categorySearch]);

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickDrugSearch.trim()) return;
    setSearchQuery(quickDrugSearch.trim());
    setActiveTab('vademecum');
  };

  return (
    <div className="space-y-10 animate-fade-in">
      
      {/* ========================================================= */}
      {/* HERO SECTION WITH PRIMARY ACTIONS                         */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-teal-950 to-slate-900 text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-teal-800/30">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          
          {/* Clinical Wordmark Subtitle */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-mono font-medium tracking-wide">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>BASE DE MEDICAMENTOS</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            PLM - Diccionario Médico-Farmacéutico
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
            Guía de consulta médica y farmacéutica que reúne información técnica de medicamentos disponibles en el mercado. En cada ficha de cada fármaco viene la descripción, mecanismo de acción, indicaciones terapéuticas, nombre comercial con sus respectivas presentaciones, dosis, contraindicaciones, reacciones adversas e interacciones farmacológicas, etc.
          </p>

          {/* Search bar inside Hero */}
          <form onSubmit={handleQuickSearchSubmit} className="pt-2 max-w-xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={quickDrugSearch}
                onChange={(e) => setQuickDrugSearch(e.target.value)}
                placeholder="Buscar por fármaco, marca comercial o indicación clínica..."
                className="w-full pl-12 pr-28 py-3.5 bg-white/10 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-white/20 dark:border-slate-700/60 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:bg-white/15 transition-all shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded-xl transition-colors shadow-xs"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* Quick tool shortcuts */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setActiveTab('videos')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            >
              <Video className="w-4 h-4 text-teal-400" />
              <span>Videoteca</span>
            </button>
            <button
              onClick={() => setActiveTab('repaso')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-teal-400/30 transition-colors cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-teal-300" />
              <span>Repaso Clínico</span>
            </button>
            <button
              onClick={() => setActiveTab('interactions')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>Interacciones</span>
            </button>
            <button
              onClick={() => setActiveTab('calculators')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold backdrop-blur-md border border-white/10 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-teal-400" />
              <span>Calculadora</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-slate-400 block">Total Medicamentos</span>
              <span className="text-xl sm:text-2xl font-bold text-teal-300 font-sans">{medications.length}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Clasificaciones</span>
              <span className="text-xl sm:text-2xl font-bold text-teal-300 font-sans">{classifications.length}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Presentaciones</span>
              <span className="text-xl sm:text-2xl font-bold text-teal-300 font-sans">
                {medications.reduce((sum, m) => sum + (m.presentations?.length || 0), 0)}
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* SECTION: CLASSIFICATION BUTTONS GRID (USER REQUEST)       */}
      {/* ========================================================= */}
      <section className="space-y-6">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Clasificaciones Farmacológicas
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Haga clic en cualquiera de los {classifications.length} grupos para acceder a sus medicamentos correspondientes.
            </p>
          </div>

          {/* In-view search for classifications */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              placeholder="Filtrar clasificaciones..."
              className="w-full pl-9 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
            />
          </div>
        </div>

        {/* The Grid of Classification Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {!categorySearch && (
            <button
              onClick={navigateToAlphabeticalMedications}
              className="group relative flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-br from-teal-50 to-white dark:from-teal-950/40 dark:to-slate-900 border-2 border-teal-500/50 hover:border-teal-500 hover:shadow-md text-left transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-[11px] font-bold text-teal-800 dark:text-teal-300 bg-teal-100 dark:bg-teal-900/60 px-2 py-0.5 rounded-md">
                    CATÁLOGO A-Z
                  </span>
                  <span className="text-[11px] font-semibold text-teal-700 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/40 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                    <ArrowDownAZ className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{medications.length} fármacos</span>
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                  Todos los Medicamentos
                </h3>
                <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mt-1">
                  Orden Alfabético Completo
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                  Consulte el listado de todos los medicamentos registrados ordenados alfabéticamente de la A a la Z
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-teal-100 dark:border-teal-900/40 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
                <span className="group-hover:underline">Ver catálogo A-Z</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          )}

          {filteredClassifications.map((c: Classification) => {
            const count = drugCountsByClass[c.id] || 0;

            return (
              <button
                key={c.id}
                onClick={() => navigateToClassification(c.id)}
                className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-teal-500/80 dark:hover:border-teal-500/80 hover:shadow-md dark:hover:shadow-teal-950/20 text-left transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <div>
                  
                  {/* Top Header: Code & Drug Count Pill */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-[11px] font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-md border border-teal-200/50 dark:border-teal-900/60">
                      {c.code}
                    </span>

                    <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      <Pill className="w-3 h-3 text-teal-600 dark:text-teal-400" />
                      <span>{count} {count === 1 ? 'fármaco' : 'fármacos'}</span>
                    </span>
                  </div>

                  {/* Classification Title */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                    {c.name}
                  </h3>

                  {/* Therapeutic Area */}
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                    {c.therapeuticArea}
                  </p>

                  {/* Brief Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
                    {c.description}
                  </p>

                </div>

                {/* Bottom Action Footer with arrow */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-teal-700 dark:text-teal-400">
                  <span className="group-hover:underline">Ver medicamentos del grupo</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>

              </button>
            );
          })}
        </div>

        {/* Empty state for filtered classifications */}
        {filteredClassifications.length === 0 && (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <Folder className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No se encontraron clasificaciones con "{categorySearch}"
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pruebe buscando por otra palabra clave como "AINES", "Antibacterianos", "Opioides" o "Insulinas".
            </p>
            <button
              onClick={() => setCategorySearch('')}
              className="px-4 py-1.5 rounded-lg bg-teal-600 text-white text-xs font-semibold hover:bg-teal-700 transition-colors"
            >
              Restablecer filtro
            </button>
          </div>
        )}

      </section>

      {/* ========================================================= */}
      {/* CLINICAL REPOSITORY HIGHLIGHTS / QUICK NAVIGATION         */}
      {/* ========================================================= */}
      <section className="bg-slate-100/70 dark:bg-slate-900/40 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Guía de Navegación Rápida</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
            Accesos Directos a Grandes Familias Terapéuticas
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Navegue a los bloques clínicos estructurados con un solo clic:
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => navigateToClassification('c-antibacterianos')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Antibacterianos (Penicilinas, Cefalosporinas, Macrólidos)
            </button>
            <button
              onClick={() => navigateToClassification('c-antimicoticos')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Antimicóticos (Nistatina, Anfotericina B, Equinocandinas)
            </button>
            <button
              onClick={() => navigateToClassification('c-antivirales')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Antivirales (Zidovudina, Aciclovir, Ribavirina)
            </button>
            <button
              onClick={() => navigateToClassification('c-antiprotozoarios')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Antiprotozoarios (Metronidazol, Diloxanida, Antipalúdicos)
            </button>
            <button
              onClick={() => navigateToClassification('c-antifimicos')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Antifímicos (Isoniacida, Rifampicina, Pirazinamida)
            </button>
            <button
              onClick={() => navigateToClassification('c-narcoticos')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              Opioides (Morfina, Fentanilo, Buprenorfina)
            </button>
            <button
              onClick={() => navigateToClassification('c-aines')}
              className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-medium transition-colors"
            >
              AINES (Paracetamol, Ibuprofeno, Ketorolaco)
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
