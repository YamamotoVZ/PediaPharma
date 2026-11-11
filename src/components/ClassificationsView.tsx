import React, { useState } from 'react';
import { Folder, Plus, Edit2, Trash2, ArrowRight, Pill, ExternalLink, Search } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import { Classification, Medication } from '../types/pharmacy';

export const ClassificationsView: React.FC = () => {
  const {
    classifications,
    medications,
    setSelectedMedication,
    setIsDetailOpen,
    openCreateForm,
    addClassification,
    updateClassification,
    deleteClassification
  } = usePharmacy();

  const [searchFilter, setSearchFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingClassification, setEditingClassification] = useState<Classification | null>(null);

  // Modal form states
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [therapeuticArea, setTherapeuticArea] = useState('');
  const [description, setDescription] = useState('');
  const [mechanismSummary, setMechanismSummary] = useState('');

  const openNewModal = () => {
    setEditingClassification(null);
    setName('');
    setCode('');
    setTherapeuticArea('');
    setDescription('');
    setMechanismSummary('');
    setModalOpen(true);
  };

  const openEditModal = (c: Classification) => {
    setEditingClassification(c);
    setName(c.name);
    setCode(c.code);
    setTherapeuticArea(c.therapeuticArea);
    setDescription(c.description);
    setMechanismSummary(c.mechanismSummary || '');
    setModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (editingClassification) {
      updateClassification({
        ...editingClassification,
        name: name.trim(),
        code: code.trim() || 'ATC-VAR',
        therapeuticArea: therapeuticArea.trim() || 'Clínica Médica',
        description: description.trim(),
        mechanismSummary: mechanismSummary.trim() || undefined
      });
    } else {
      addClassification({
        name: name.trim(),
        code: code.trim() || 'ATC-VAR',
        therapeuticArea: therapeuticArea.trim() || 'Clínica Médica',
        description: description.trim(),
        mechanismSummary: mechanismSummary.trim() || undefined
      });
    }

    setModalOpen(false);
  };

  const handleDelete = (c: Classification) => {
    const count = medications.filter(m => m.classificationIds.includes(c.id)).length;
    const msg = count > 0
      ? `¿Eliminar la clasificación "${c.name}"? Hay ${count} fármaco(s) asignados que dejarán de pertenecer a este grupo.`
      : `¿Eliminar la clasificación "${c.name}"?`;
    if (window.confirm(msg)) {
      deleteClassification(c.id);
    }
  };

  const handleSelectMed = (med: Medication) => {
    setSelectedMedication(med);
    setIsDetailOpen(true);
  };

  // Filtered classifications
  const filtered = classifications.filter(c =>
    c.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.code.toLowerCase().includes(searchFilter.toLowerCase()) ||
    c.therapeuticArea.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Top Banner and Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-teal-700 dark:text-teal-400 font-semibold uppercase tracking-wider">
            <span>Vademécum por Familias Farmacológicas</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-500">{classifications.length} grupos activos</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
            Apartado de Clasificaciones Farmacológicas
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Explore los fármacos reunidos por familia terapéutica, mecanismo común o diana biológica. Un mismo principio activo puede pertenecer a múltiples grupos simultáneamente.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={openNewModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            <span>Nueva Clasificación</span>
          </button>
        </div>
      </div>

      {/* Filter / Search within classifications */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Buscar por grupo, código ATC o especialidad..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Group Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filtered.map((c) => {
          const groupMedications = medications.filter(m => m.classificationIds.includes(c.id));

          return (
            <div
              key={c.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                {/* Header of Classification Card */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    {/* Unboxed metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                      <span>{c.code}</span>
                      <span aria-hidden="true">·</span>
                      <span>{c.therapeuticArea}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-semibold text-teal-700 dark:text-teal-400">{groupMedications.length} fármacos</span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {c.name}
                    </h3>
                  </div>

                  {/* Actions for classification */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openEditModal(c)}
                      className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Editar clasificación"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(c)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Eliminar clasificación"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Description & Clinical Definition */}
                {c.description.includes('DEFINICIÓN DE ANTISÉPTICO:') ? (
                  <div className="space-y-2 mb-3">
                    <div className="bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-900 rounded-xl p-3 text-xs text-teal-900 dark:text-teal-200">
                      <span className="font-bold uppercase tracking-wider block mb-1 font-mono text-[11px] text-teal-800 dark:text-teal-300">
                        Definición Farmacológica Oficial:
                      </span>
                      <p className="leading-relaxed">
                        <strong className="text-teal-950 dark:text-white">Antiséptico:</strong> Sustancia antimicrobiana de aplicación tópica sobre <em>tejidos vivos</em> (piel, mucosas o heridas) para destruir o inhibir microorganismos sin dañar las células del hospedero. Se diferencia de los <strong>Desinfectantes</strong>, los cuales son agentes químicos aplicados estrictamente sobre <em>superficies inertes, instrumental quirúrgico y materiales inanimados</em> debido a su mayor toxicidad celular.
                      </p>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      Incluye antisépticos tópicos, antisépticos urinarios y Fluoroquinolonas clasificadas por generaciones (1ª, 2ª, 3ª y 4ª G).
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {c.description}
                  </p>
                )}

                {c.mechanismSummary && (
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-2.5 mb-4 text-[11px] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Mecanismo común: </span>
                    {c.mechanismSummary}
                  </div>
                )}

                {/* Group Medications List */}
                <div className="space-y-2 mt-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                    <span>Fármacos en este grupo ({groupMedications.length}):</span>
                    <button
                      onClick={() => openCreateForm(c.id)}
                      className="text-teal-600 dark:text-teal-400 hover:underline text-[11px] font-semibold"
                    >
                      + Añadir fármaco a {c.name}
                    </button>
                  </div>

                  {groupMedications.length === 0 ? (
                    <div className="text-center py-5 text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                      Aún no hay medicamentos asociados a esta clasificación.
                    </div>
                  ) : (
                    <div className="divide-y divide-slate-100 dark:divide-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-slate-50/50 dark:bg-slate-800/30">
                      {groupMedications.map(med => (
                        <div
                          key={med.id}
                          onClick={() => handleSelectMed(med)}
                          className="p-2.5 flex items-center justify-between gap-3 hover:bg-white dark:hover:bg-slate-800 cursor-pointer transition-colors group/item"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700 shrink-0 flex items-center justify-center">
                              {med.primaryImage ? (
                                <img
                                  src={med.primaryImage}
                                  alt={med.name}
                                  referrerPolicy="no-referrer"
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <Pill className="w-4 h-4 text-teal-600" />
                              )}
                            </div>
                            <div className="truncate">
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover/item:text-teal-600 dark:group-hover/item:text-teal-400 truncate">
                                {med.name}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate font-mono">
                                {med.brandNames?.slice(0, 2).join(', ') || med.atcCode} · Emb. {med.safety?.pregnancyCategory}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 text-xs text-teal-700 dark:text-teal-400 shrink-0">
                            <span className="hidden sm:inline text-[11px] font-medium">Ver Ficha</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom bar inside classification card */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>ID: {c.id}</span>
                <span>{c.code}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Create / Edit Classification */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-md shadow-2xl p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {editingClassification ? 'Editar Clasificación Farmacológica' : 'Nueva Clasificación Terapéutica'}
            </h3>

            <form onSubmit={handleSave} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nombre de la Clasificación o Familia
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Anticoagulantes Orales Directos (ACOD)"
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Código ATC / Familia
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Ej. ATC-B01AF"
                    className="w-full px-3 py-2 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Área Terapéutica
                  </label>
                  <input
                    type="text"
                    value={therapeuticArea}
                    onChange={(e) => setTherapeuticArea(e.target.value)}
                    placeholder="Ej. Hematología / Cardiología"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Descripción Clínica del Grupo
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Definición farmacológica, principales usos clínicos y objetivos del tratamiento..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Mecanismo Farmacológico Común (opcional)
                </label>
                <input
                  type="text"
                  value={mechanismSummary}
                  onChange={(e) => setMechanismSummary(e.target.value)}
                  placeholder="Ej. Inhibición directa del factor Xa o trombina..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs"
                >
                  Guardar Clasificación
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
