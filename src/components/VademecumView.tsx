import React, { useState, useMemo } from 'react';
import { Search, Filter, LayoutGrid, List, Plus, X, Pill, AlertCircle, ArrowUpDown } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import { MedicationCard } from './MedicationCard';
import { AdministrationRoute } from '../types/pharmacy';

export const VademecumView: React.FC = () => {
  const {
    medications,
    classifications,
    searchQuery,
    setSearchQuery,
    filterClassification,
    setFilterClassification,
    filterRoute,
    setFilterRoute,
    filterPregnancy,
    setFilterPregnancy,
    openCreateForm,
    setSelectedMedication,
    setIsDetailOpen
  } = usePharmacy();

  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortOrder, setSortOrder] = useState<'name-asc' | 'name-desc' | 'updated'>('name-asc');

  // Filtered & Sorted Medications
  const filteredMedications = useMemo(() => {
    return medications
      .filter(med => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchName = med.name.toLowerCase().includes(q);
          const matchBrand = med.brandNames.some(b => b.toLowerCase().includes(q));
          const matchAtc = med.atcCode?.toLowerCase().includes(q);
          const matchIndication = med.indications?.approved?.some(i => i.toLowerCase().includes(q));
          const matchMech = med.mechanismOfAction?.summary?.toLowerCase().includes(q);
          if (!matchName && !matchBrand && !matchAtc && !matchIndication && !matchMech) {
            return false;
          }
        }

        // Classification filter
        if (filterClassification !== 'all') {
          if (!med.classificationIds.includes(filterClassification)) {
            return false;
          }
        }

        // Route filter
        if (filterRoute !== 'all') {
          const hasRoute = med.dosageAndPosology?.routes?.includes(filterRoute as AdministrationRoute);
          if (!hasRoute) return false;
        }

        // Pregnancy category
        if (filterPregnancy !== 'all') {
          if (med.safety?.pregnancyCategory !== filterPregnancy) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
        if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
        if (sortOrder === 'updated') return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        return 0;
      });
  }, [medications, searchQuery, filterClassification, filterRoute, filterPregnancy, sortOrder]);

  const totalPresentations = useMemo(() => {
    return medications.reduce((sum, m) => sum + (m.presentations?.length || 0), 0);
  }, [medications]);

  const totalInteractions = useMemo(() => {
    return medications.reduce((sum, m) => sum + (m.interactions?.length || 0), 0);
  }, [medications]);

  const resetFilters = () => {
    setSearchQuery('');
    setFilterClassification('all');
    setFilterRoute('all');
    setFilterPregnancy('all');
  };

  const isFiltering = searchQuery !== '' || filterClassification !== 'all' || filterRoute !== 'all' || filterPregnancy !== 'all';

  return (
    <div className="space-y-6">
      
      {/* Hero Reference Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider mb-1">
                <span>Vademécum Clínico Hospitalario</span>
                <span aria-hidden="true">·</span>
                <span>Referencia Farmacológica Continua</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Catálogo Farmacológico Interactivo
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-xl leading-relaxed">
                Consulte y gestione principios activos, fotos de presentaciones, mecanismos de acción, dosificación ajustada a función renal y hepática, efectos adversos y contraindicaciones para profesionales de la salud.
              </p>
            </div>

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Fármacos Activos</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {medications.length}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Clasificaciones</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white tabular-nums">
                  {classifications.length}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Presentaciones</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 tabular-nums">
                  {totalPresentations}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 block uppercase">Interacciones</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-amber-600 dark:text-amber-400 tabular-nums">
                  {totalInteractions}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="hidden lg:block lg:col-span-4 relative border-l border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
            <img
              src="/src/assets/images/pharma_reference_hero_1793460453787.jpg"
              alt="Clinical laboratory pharmacology setup"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4">
              <span className="text-[11px] text-white/90 font-mono">
                Base de datos actualizada para farmacovigilancia clínica
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Search & Filter Controls Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Main search input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Búsqueda rápida por nombre genérico, comercial, indicación (ej. dolor, hipertensión) o código ATC..."
              className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort selector */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="bg-transparent focus:outline-hidden text-xs font-medium cursor-pointer"
              >
                <option value="name-asc">Nombre (A - Z)</option>
                <option value="name-desc">Nombre (Z - A)</option>
                <option value="updated">Más recientes</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                title="Vista en tarjetas con foto"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-white dark:bg-slate-900 text-teal-600 dark:text-teal-400 shadow-xs'
                    : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                }`}
                title="Vista de tabla clínica rápida"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Selectors Row */}
        <div className="flex items-center flex-wrap gap-2 text-xs pt-1">
          <span className="text-slate-400 font-medium flex items-center gap-1">
            <Filter className="w-3 h-3" />
            <span>Filtros:</span>
          </span>

          {/* Classification selector */}
          <select
            value={filterClassification}
            onChange={(e) => setFilterClassification(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden"
          >
            <option value="all">Todas las clasificaciones</option>
            {classifications.map(c => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>

          {/* Route selector */}
          <select
            value={filterRoute}
            onChange={(e) => setFilterRoute(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden"
          >
            <option value="all">Todas las vías</option>
            <option value="Oral">Oral</option>
            <option value="Intravenosa">Intravenosa</option>
            <option value="Intramuscular">Intramuscular</option>
            <option value="Inhalatoria">Inhalatoria</option>
            <option value="Tópica">Tópica</option>
            <option value="Rectal">Rectal</option>
          </select>

          {/* Pregnancy category selector */}
          <select
            value={filterPregnancy}
            onChange={(e) => setFilterPregnancy(e.target.value)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-hidden"
          >
            <option value="all">Cualquier riesgo embarazo</option>
            <option value="A">Categoría A (Seguro)</option>
            <option value="B">Categoría B</option>
            <option value="C">Categoría C</option>
            <option value="D">Categoría D</option>
            <option value="X">Categoría X (Contraindicado)</option>
          </select>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="text-xs text-rose-600 hover:underline px-2 py-1 ml-auto"
            >
              Restablecer filtros
            </button>
          )}
        </div>

      </div>

      {/* Active Classification Context Banner */}
      {filterClassification !== 'all' && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 px-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-900 text-xs text-teal-900 dark:text-teal-200">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-teal-800 dark:text-teal-300">Filtrando por clasificación:</span>
            <span className="font-bold font-mono text-teal-950 dark:text-teal-100">
              {classifications.find(c => c.id === filterClassification)?.name}
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-teal-200/60 dark:bg-teal-800/60 font-semibold">
              {filteredMedications.length} {filteredMedications.length === 1 ? 'fármaco' : 'fármacos'}
            </span>
          </div>
          <button
            onClick={() => setFilterClassification('all')}
            className="font-bold text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-teal-100 hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Ver todos los medicamentos (A-Z)</span>
            <span>→</span>
          </button>
        </div>
      )}

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
        <span>Mostrando {filteredMedications.length} de {medications.length} medicamentos</span>
        <span className="text-slate-400">Orden actual: {sortOrder === 'name-asc' ? 'Alfabético A-Z' : sortOrder === 'name-desc' ? 'Alfabético Z-A' : 'Actualización'}</span>
      </div>

      {/* Main Medication Display */}
      {filteredMedications.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center space-y-4">
          <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No se encontraron medicamentos
          </h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            No hay fármacos que coincidan con la búsqueda "{searchQuery}" o los filtros actuales.
          </p>
          <div className="pt-2">
            <button
              onClick={resetFilters}
              className="px-4 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 rounded-lg hover:bg-teal-100"
            >
              Limpiar filtros de búsqueda
            </button>
          </div>
        </div>
      ) : viewMode === 'grid' ? (
        /* Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedications.map(med => (
            <MedicationCard key={med.id} medication={med} />
          ))}
        </div>
      ) : (
        /* Dense Clinical Table View */
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="py-3 px-4">Medicamento / DCI</th>
                  <th className="py-3 px-4">Código ATC</th>
                  <th className="py-3 px-4">Clasificación(es)</th>
                  <th className="py-3 px-4">Presentaciones</th>
                  <th className="py-3 px-4">Vías</th>
                  <th className="py-3 px-4">Embarazo</th>
                  <th className="py-3 px-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-sans">
                {filteredMedications.map(med => {
                  const assigned = classifications.filter(c => med.classificationIds.includes(c.id));
                  return (
                    <tr
                      key={med.id}
                      onClick={() => {
                        setSelectedMedication(med);
                        setIsDetailOpen(true);
                      }}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/60 cursor-pointer transition-colors"
                    >
                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900 dark:text-white">{med.name}</div>
                        {med.brandNames?.length > 0 && (
                          <div className="text-[11px] text-slate-400 italic">{med.brandNames.join(', ')}</div>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-300">
                        {med.atcCode || 'N/D'}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {assigned.map(c => (
                            <span key={c.id} className="text-teal-700 dark:text-teal-300 font-medium text-[11px]">
                              {c.name}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-600 dark:text-slate-300">
                        {med.presentations?.length || 0} pres.
                      </td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-300">
                        {med.dosageAndPosology?.routes?.join(', ') || 'N/D'}
                      </td>
                      <td className="py-3 px-4 font-mono">
                        <span className={`px-1.5 py-0.5 rounded font-bold ${
                          med.safety?.pregnancyCategory === 'X' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' :
                          med.safety?.pregnancyCategory === 'D' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' :
                          'text-slate-700 dark:text-slate-300'
                        }`}>
                          Cat {med.safety?.pregnancyCategory || 'N/D'}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className="text-teal-600 dark:text-teal-400 hover:underline font-semibold">
                          Ver Ficha
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};
