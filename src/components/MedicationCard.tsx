import React from 'react';
import { Eye, Edit3, Copy, Trash2, ShieldAlert, Pill } from 'lucide-react';
import { Medication } from '../types/pharmacy';
import { usePharmacy } from '../context/PharmacyContext';

interface MedicationCardProps {
  medication: Medication;
}

export const MedicationCard: React.FC<MedicationCardProps> = ({ medication }) => {
  const {
    classifications,
    setSelectedMedication,
    setIsDetailOpen,
    openEditForm,
    duplicateMedication,
    deleteMedication
  } = usePharmacy();

  const primaryImg = medication.primaryImage || medication.images?.[0];
  const assignedClassifications = classifications.filter(c =>
    medication.classificationIds.includes(c.id)
  );

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm(`¿Eliminar ${medication.name} de la base de datos farmacológica?`)) {
      deleteMedication(medication.id);
    }
  };

  const handleDuplicate = (e: React.MouseEvent) => {
    e.stopPropagation();
    duplicateMedication(medication.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    openEditForm(medication);
  };

  const handleView = () => {
    setSelectedMedication(medication);
    setIsDetailOpen(true);
  };

  return (
    <article
      onClick={handleView}
      className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col cursor-pointer"
    >
      {/* Visual Asset or Fallback */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-800 border-b border-slate-100 dark:border-slate-800">
        {primaryImg ? (
          <img
            src={primaryImg}
            alt={medication.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            onError={(e) => {
              // Graceful fallback to styled icon container
              (e.target as HTMLElement).style.display = 'none';
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) {
                const fallback = parent.querySelector('.img-fallback') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }
            }}
          />
        ) : null}

        <div
          className={`img-fallback w-full h-full items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 ${
            primaryImg ? 'hidden' : 'flex'
          }`}
        >
          <div className="text-center p-4">
            <Pill className="w-10 h-10 mx-auto mb-2 text-teal-600/60 dark:text-teal-400/60" />
            <span className="text-xs font-mono">{medication.atcCode || 'DCI'}</span>
          </div>
        </div>

        {/* Safety badge if controlled or black box */}
        {medication.safety?.controlledSubstance && (
          <div className="absolute top-2.5 right-2.5 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs uppercase tracking-wide">
            Controlado
          </div>
        )}
        {medication.safety?.blackBoxWarning && !medication.safety?.controlledSubstance && (
          <div className="absolute top-2.5 right-2.5 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" />
            <span>Alerta</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Zero-pill) */}
          <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-1.5 font-mono">
            <span>{medication.atcCode || 'ATC N/D'}</span>
            <span aria-hidden="true">·</span>
            <span>Emb. Cat {medication.safety?.pregnancyCategory || 'N/D'}</span>
            <span aria-hidden="true">·</span>
            <span>{medication.presentations?.length || 0} pres.</span>
          </div>

          {/* Primary Name */}
          <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-1">
            {medication.name}
          </h3>

          {/* Brand Names */}
          {medication.brandNames && medication.brandNames.length > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 italic">
              Comercial: {medication.brandNames.join(', ')}
            </p>
          )}

          {/* Assigned Classifications */}
          <div className="mt-2.5 flex items-center flex-wrap gap-1.5 text-xs">
            {assignedClassifications.length > 0 ? (
              assignedClassifications.map(c => (
                <span
                  key={c.id}
                  className="text-teal-700 dark:text-teal-300 font-medium"
                >
                  #{c.name}
                </span>
              ))
            ) : (
              <span className="text-slate-400 italic">Sin clasificación asignada</span>
            )}
          </div>

          {/* Clinical summary */}
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 line-clamp-2 leading-relaxed">
            {medication.mechanismOfAction?.summary || medication.description}
          </p>
        </div>

        {/* Footer info & Actions */}
        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
            Vías: {medication.dosageAndPosology?.routes?.join(', ') || 'N/D'}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleView}
              title="Ver ficha completa"
              className="p-1.5 text-slate-600 hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={handleEdit}
              title="Editar datos"
              className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={handleDuplicate}
              title="Duplicar como plantilla"
              className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={handleDelete}
              title="Eliminar medicamento"
              className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
