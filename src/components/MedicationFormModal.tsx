import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Upload, Image as ImageIcon, Check, FolderPlus } from 'lucide-react';
import { usePharmacy } from '../context/PharmacyContext';
import {
  Medication,
  AdministrationRoute,
  PregnancyCategory,
  LactationSafety,
  InteractionSeverity,
  DrugPresentation,
  DrugInteraction
} from '../types/pharmacy';

const ALL_ROUTES: AdministrationRoute[] = [
  'Oral',
  'Intravenosa',
  'Intramuscular',
  'Subcutánea',
  'Infiltratoria',
  'Intradérmica',
  'Inhalatoria',
  'Tópica',
  'Vaginal',
  'Ótica',
  'Oftálmica',
  'Rectal',
  'Sublingual',
  'Nasal'
];

const PRESET_IMAGES = [
  { label: 'Blíster y Cápsulas', url: '/src/assets/images/pharma_oral_forms_1793460469811.jpg' },
  { label: 'Viales y Ampollas IV', url: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg' },
  { label: 'Laboratorio y Vademécum', url: '/src/assets/images/pharma_reference_hero_1793460453787.jpg' }
];

export const MedicationFormModal: React.FC = () => {
  const {
    isFormOpen,
    closeForm,
    editingMedication,
    addMedication,
    updateMedication,
    classifications,
    addClassification
  } = usePharmacy();

  const isEditing = !!(editingMedication && editingMedication.id);

  // Form State
  const [tab, setTab] = useState<'general' | 'presentations' | 'mechanism' | 'posology' | 'safety' | 'interactions'>('general');
  
  // General
  const [name, setName] = useState('');
  const [brandNamesText, setBrandNamesText] = useState('');
  const [atcCode, setAtcCode] = useState('');
  const [description, setDescription] = useState('');
  
  // Images
  const [images, setImages] = useState<string[]>([]);
  const [customImageUrl, setCustomImageUrl] = useState('');

  // Classifications
  const [selectedClassificationIds, setSelectedClassificationIds] = useState<string[]>([]);
  const [showNewClassInline, setShowNewClassInline] = useState(false);
  const [newClassName, setNewClassName] = useState('');
  const [newClassCode, setNewClassCode] = useState('');
  const [newClassArea, setNewClassArea] = useState('');

  // Presentations
  const [presentations, setPresentations] = useState<DrugPresentation[]>([]);

  // Mechanism
  const [mechSummary, setMechSummary] = useState('');
  const [mechDetailed, setMechDetailed] = useState('');
  const [targetReceptor, setTargetReceptor] = useState('');
  const [keyPointsText, setKeyPointsText] = useState('');

  // Indications
  const [approvedIndicationsText, setApprovedIndicationsText] = useState('');
  const [offLabelText, setOffLabelText] = useState('');

  // Dosage & Posology
  const [adultDose, setAdultDose] = useState('');
  const [pediatricDose, setPediatricDose] = useState('');
  const [renalAdjustment, setRenalAdjustment] = useState('');
  const [hepaticAdjustment, setHepaticAdjustment] = useState('');
  const [routes, setRoutes] = useState<AdministrationRoute[]>(['Oral']);
  const [administrationNotes, setAdministrationNotes] = useState('');

  // Safety
  const [contraindicationsText, setContraindicationsText] = useState('');
  const [warningsText, setWarningsText] = useState('');
  const [blackBoxWarning, setBlackBoxWarning] = useState('');
  const [pregnancyCategory, setPregnancyCategory] = useState<PregnancyCategory>('B');
  const [pregnancyNotes, setPregnancyNotes] = useState('');
  const [lactation, setLactation] = useState<LactationSafety>('Compatible');
  const [lactationNotes, setLactationNotes] = useState('');
  const [controlledSubstance, setControlledSubstance] = useState(false);

  // Adverse Effects (Frequency lists)
  const [veryCommonEffects, setVeryCommonEffects] = useState('');
  const [commonEffects, setCommonEffects] = useState('');
  const [uncommonEffects, setUncommonEffects] = useState('');
  const [rareEffects, setRareEffects] = useState('');

  // Interactions
  const [interactions, setInteractions] = useState<DrugInteraction[]>([]);

  // Populate form on open
  useEffect(() => {
    if (!isFormOpen) return;

    if (editingMedication) {
      setName(editingMedication.name || '');
      setBrandNamesText(editingMedication.brandNames?.join(', ') || '');
      setAtcCode(editingMedication.atcCode || '');
      setDescription(editingMedication.description || '');
      setImages(editingMedication.images || []);
      setSelectedClassificationIds(editingMedication.classificationIds || []);
      
      setPresentations(editingMedication.presentations && editingMedication.presentations.length > 0 ? editingMedication.presentations : [
        {
          id: `p-${Date.now()}`,
          form: 'Comprimidos',
          concentration: '500 mg',
          route: 'Oral',
          packaging: 'Caja x 30',
          excipients: ''
        }
      ]);

      setMechSummary(editingMedication.mechanismOfAction?.summary || '');
      setMechDetailed(editingMedication.mechanismOfAction?.detailed || '');
      setTargetReceptor(editingMedication.mechanismOfAction?.targetReceptor || '');
      setKeyPointsText(editingMedication.mechanismOfAction?.keyPoints?.join('\n') || '');

      setApprovedIndicationsText(editingMedication.indications?.approved?.join('\n') || '');
      setOffLabelText(editingMedication.indications?.offLabel?.join('\n') || '');

      setAdultDose(editingMedication.dosageAndPosology?.adults || '');
      setPediatricDose(editingMedication.dosageAndPosology?.pediatric || '');
      setRenalAdjustment(editingMedication.dosageAndPosology?.renalAdjustment || '');
      setHepaticAdjustment(editingMedication.dosageAndPosology?.hepaticAdjustment || '');
      setRoutes(editingMedication.dosageAndPosology?.routes || ['Oral']);
      setAdministrationNotes(editingMedication.dosageAndPosology?.administrationNotes || '');

      setContraindicationsText(editingMedication.safety?.contraindications?.join('\n') || '');
      setWarningsText(editingMedication.safety?.warnings?.join('\n') || '');
      setBlackBoxWarning(editingMedication.safety?.blackBoxWarning || '');
      setPregnancyCategory(editingMedication.safety?.pregnancyCategory || 'B');
      setPregnancyNotes(editingMedication.safety?.pregnancyNotes || '');
      setLactation(editingMedication.safety?.lactation || 'Compatible');
      setLactationNotes(editingMedication.safety?.lactationNotes || '');
      setControlledSubstance(!!editingMedication.safety?.controlledSubstance);

      // Adverse effects
      const aeVery = editingMedication.adverseEffects?.find(g => g.frequency.includes('Muy frecuentes'));
      const aeCommon = editingMedication.adverseEffects?.find(g => g.frequency.includes('Frecuentes (1-10%)'));
      const aeUncommon = editingMedication.adverseEffects?.find(g => g.frequency.includes('Poco frecuentes'));
      const aeRare = editingMedication.adverseEffects?.find(g => g.frequency.includes('Raros'));

      setVeryCommonEffects(aeVery?.effects?.join(', ') || '');
      setCommonEffects(aeCommon?.effects?.join(', ') || '');
      setUncommonEffects(aeUncommon?.effects?.join(', ') || '');
      setRareEffects(aeRare?.effects?.join(', ') || '');

      setInteractions(editingMedication.interactions || []);
    } else {
      // Default clean form
      setName('');
      setBrandNamesText('');
      setAtcCode('');
      setDescription('');
      setImages([PRESET_IMAGES[0].url]);
      setSelectedClassificationIds(classifications[0] ? [classifications[0].id] : []);
      setPresentations([
        {
          id: `p-${Date.now()}`,
          form: 'Comprimidos',
          concentration: '500 mg',
          route: 'Oral',
          packaging: 'Caja x 30 comprimidos',
          excipients: ''
        }
      ]);
      setMechSummary('');
      setMechDetailed('');
      setTargetReceptor('');
      setKeyPointsText('');
      setApprovedIndicationsText('');
      setOffLabelText('');
      setAdultDose('');
      setPediatricDose('');
      setRenalAdjustment('');
      setHepaticAdjustment('');
      setRoutes(['Oral']);
      setAdministrationNotes('');
      setContraindicationsText('');
      setWarningsText('');
      setBlackBoxWarning('');
      setPregnancyCategory('B');
      setPregnancyNotes('');
      setLactation('Compatible');
      setLactationNotes('');
      setControlledSubstance(false);
      setVeryCommonEffects('');
      setCommonEffects('');
      setUncommonEffects('');
      setRareEffects('');
      setInteractions([]);
    }
    setTab('general');
  }, [isFormOpen, editingMedication, classifications]);

  if (!isFormOpen) return null;

  // Handlers for dynamic lists
  const handleAddPresentation = () => {
    setPresentations(prev => [
      ...prev,
      {
        id: `p-${Date.now()}-${Math.random().toString(36).substring(2, 5)}`,
        form: 'Comprimidos recubiertos',
        concentration: '100 mg',
        route: 'Oral',
        packaging: 'Caja x 30',
        excipients: ''
      }
    ]);
  };

  const handleUpdatePresentation = (index: number, field: keyof DrugPresentation, value: string) => {
    setPresentations(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleRemovePresentation = (index: number) => {
    setPresentations(prev => prev.filter((_, i) => i !== index));
  };

  const handleAddInteraction = () => {
    setInteractions(prev => [
      ...prev,
      {
        id: `int-${Date.now()}`,
        interactingSubstance: '',
        severity: 'Moderada',
        clinicalEffect: '',
        recommendation: ''
      }
    ]);
  };

  const handleUpdateInteraction = (index: number, field: keyof DrugInteraction, value: string) => {
    setInteractions(prev => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const handleRemoveInteraction = (index: number) => {
    setInteractions(prev => prev.filter((_, i) => i !== index));
  };

  // Image handlers
  const handleAddPresetImage = (url: string) => {
    if (!images.includes(url)) {
      setImages(prev => [...prev, url]);
    }
  };

  const handleAddCustomUrl = () => {
    if (customImageUrl.trim() && !images.includes(customImageUrl.trim())) {
      setImages(prev => [...prev, customImageUrl.trim()]);
      setCustomImageUrl('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        setImages(prev => [result, ...prev]);
      }
    };
    reader.readAsDataURL(file);
  };

  // Quick create inline classification
  const handleSaveInlineClassification = () => {
    if (!newClassName.trim()) return;
    const created = addClassification({
      name: newClassName.trim(),
      code: newClassCode.trim() || 'ATC-VAR',
      therapeuticArea: newClassArea.trim() || 'Farmacología Clínica',
      description: `Grupo farmacológico de ${newClassName.trim()}`
    });
    setSelectedClassificationIds(prev => [...prev, created.id]);
    setNewClassName('');
    setNewClassCode('');
    setNewClassArea('');
    setShowNewClassInline(false);
  };

  // Toggle classification assignment
  const handleToggleClassification = (classId: string) => {
    setSelectedClassificationIds(prev =>
      prev.includes(classId) ? prev.filter(id => id !== classId) : [...prev, classId]
    );
  };

  // Toggle route
  const handleToggleRoute = (route: AdministrationRoute) => {
    setRoutes(prev =>
      prev.includes(route) ? prev.filter(r => r !== route) : [...prev, route]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Por favor ingrese el nombre genérico del medicamento.');
      setTab('general');
      return;
    }

    const brandNames = brandNamesText
      .split(',')
      .map(b => b.trim())
      .filter(Boolean);

    const keyPoints = keyPointsText
      .split('\n')
      .map(k => k.trim())
      .filter(Boolean);

    const approvedIndications = approvedIndicationsText
      .split('\n')
      .map(i => i.trim())
      .filter(Boolean);

    const offLabelIndications = offLabelText
      .split('\n')
      .map(i => i.trim())
      .filter(Boolean);

    const contraindications = contraindicationsText
      .split('\n')
      .map(c => c.trim())
      .filter(Boolean);

    const warnings = warningsText
      .split('\n')
      .map(w => w.trim())
      .filter(Boolean);

    // Build adverse effects array
    const adverseEffectsList = [];
    if (veryCommonEffects.trim()) {
      adverseEffectsList.push({
        frequency: 'Muy frecuentes (>10%)' as const,
        effects: veryCommonEffects.split(',').map(e => e.trim()).filter(Boolean)
      });
    }
    if (commonEffects.trim()) {
      adverseEffectsList.push({
        frequency: 'Frecuentes (1-10%)' as const,
        effects: commonEffects.split(',').map(e => e.trim()).filter(Boolean)
      });
    }
    if (uncommonEffects.trim()) {
      adverseEffectsList.push({
        frequency: 'Poco frecuentes (0.1-1%)' as const,
        effects: uncommonEffects.split(',').map(e => e.trim()).filter(Boolean)
      });
    }
    if (rareEffects.trim()) {
      adverseEffectsList.push({
        frequency: 'Raros o Graves (<0.1%)' as const,
        effects: rareEffects.split(',').map(e => e.trim()).filter(Boolean)
      });
    }

    const medData = {
      name: name.trim(),
      brandNames,
      atcCode: atcCode.trim().toUpperCase(),
      description: description.trim(),
      images: images.length > 0 ? images : [PRESET_IMAGES[0].url],
      primaryImage: images[0] || PRESET_IMAGES[0].url,
      classificationIds: selectedClassificationIds,
      presentations: presentations.length > 0 ? presentations : [
        {
          id: `p-${Date.now()}`,
          form: 'Comprimidos',
          concentration: '500 mg',
          route: 'Oral' as const
        }
      ],
      mechanismOfAction: {
        summary: mechSummary.trim() || description.trim(),
        detailed: mechDetailed.trim() || mechSummary.trim(),
        targetReceptor: targetReceptor.trim(),
        keyPoints
      },
      indications: {
        approved: approvedIndications.length > 0 ? approvedIndications : ['Indicación clínica general'],
        offLabel: offLabelIndications
      },
      dosageAndPosology: {
        adults: adultDose.trim(),
        pediatric: pediatricDose.trim(),
        renalAdjustment: renalAdjustment.trim(),
        hepaticAdjustment: hepaticAdjustment.trim(),
        routes: (routes.length > 0 ? routes : (['Oral'] as AdministrationRoute[])),
        administrationNotes: administrationNotes.trim()
      },
      safety: {
        contraindications,
        warnings,
        blackBoxWarning: blackBoxWarning.trim() || undefined,
        pregnancyCategory,
        pregnancyNotes: pregnancyNotes.trim() || undefined,
        lactation,
        lactationNotes: lactationNotes.trim() || undefined,
        controlledSubstance
      },
      adverseEffects: adverseEffectsList,
      interactions: interactions.filter(i => i.interactingSubstance.trim().length > 0)
    };

    if (isEditing && editingMedication?.id) {
      updateMedication({
        ...medData,
        id: editingMedication.id,
        updatedAt: new Date().toISOString()
      });
    } else {
      addMedication(medData);
    }

    closeForm();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/70 dark:bg-slate-900/70">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              {isEditing ? `Editar Medicamento: ${editingMedication.name}` : 'Registrar Nuevo Medicamento'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Complete la información farmacológica, posología y seguridad para la base de datos clínica.
            </p>
          </div>
          <button
            onClick={closeForm}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab navigation within Form */}
        <div className="px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-1 overflow-x-auto py-2">
          <button
            type="button"
            onClick={() => setTab('general')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'general'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            1. General & Fotos
          </button>
          <button
            type="button"
            onClick={() => setTab('presentations')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'presentations'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            2. Presentaciones ({presentations.length})
          </button>
          <button
            type="button"
            onClick={() => setTab('mechanism')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'mechanism'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            3. Mecanismo & Diana
          </button>
          <button
            type="button"
            onClick={() => setTab('posology')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'posology'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            4. Dosis & Vías
          </button>
          <button
            type="button"
            onClick={() => setTab('safety')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'safety'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            5. Seguridad & Efectos
          </button>
          <button
            type="button"
            onClick={() => setTab('interactions')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors ${
              tab === 'interactions'
                ? 'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            6. Interacciones ({interactions.length})
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          
          {/* TAB 1: General & Fotos */}
          {tab === 'general' && (
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nombre Genérico / DCI <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Amoxicilina + Ácido Clavulánico"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Código ATC (Clasificación Anatómica Terapéutica Química)
                  </label>
                  <input
                    type="text"
                    value={atcCode}
                    onChange={(e) => setAtcCode(e.target.value)}
                    placeholder="Ej. J01CR02"
                    className="w-full px-3 py-2 text-sm font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nombres Comerciales Comunes (separados por coma)
                </label>
                <input
                  type="text"
                  value={brandNamesText}
                  onChange={(e) => setBrandNamesText(e.target.value)}
                  placeholder="Ej. Augmentine, Clavulin, Amoval Duo"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Descripción Farmacológica General
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Descripción resumida del principio activo, familia farmacológica y relevancia terapéutica..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:outline-hidden"
                />
              </div>

              {/* Multiple Classifications Selector */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">
                      Clasificaciones Farmacológicas Asignadas (Permite Selección Múltiple)
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Un mismo fármaco puede pertenecer a varios grupos terapéuticos simultáneamente.
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowNewClassInline(!showNewClassInline)}
                    className="inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                  >
                    <FolderPlus className="w-3.5 h-3.5" />
                    <span>+ Nueva Clasificación</span>
                  </button>
                </div>

                {/* Inline form to create classification */}
                {showNewClassInline && (
                  <div className="p-3 bg-white dark:bg-slate-800 border border-teal-200 dark:border-teal-800 rounded-lg space-y-2.5">
                    <div className="text-xs font-bold text-teal-700 dark:text-teal-300">
                      Crear Nueva Clasificación al Vuelo:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Nombre (ej. Anticoagulantes)"
                        value={newClassName}
                        onChange={(e) => setNewClassName(e.target.value)}
                        className="px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      />
                      <input
                        type="text"
                        placeholder="Código ATC (ej. ATC-B01)"
                        value={newClassCode}
                        onChange={(e) => setNewClassCode(e.target.value)}
                        className="px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 font-mono"
                      />
                      <input
                        type="text"
                        placeholder="Área (ej. Hematología)"
                        value={newClassArea}
                        onChange={(e) => setNewClassArea(e.target.value)}
                        className="px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowNewClassInline(false)}
                        className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-800"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveInlineClassification}
                        className="px-3 py-1 text-xs font-semibold text-white bg-teal-600 rounded hover:bg-teal-700"
                      >
                        Guardar Clasificación
                      </button>
                    </div>
                  </div>
                )}

                {/* Classification Checkboxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                  {classifications.map((c) => {
                    const isSelected = selectedClassificationIds.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => handleToggleClassification(c.id)}
                        className={`p-2.5 rounded-lg border text-left flex items-start justify-between gap-2 transition-all ${
                          isSelected
                            ? 'border-teal-500 bg-teal-50/80 dark:bg-teal-950/40 text-teal-900 dark:text-teal-200'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold leading-tight">{c.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono mt-0.5">{c.code} · {c.therapeuticArea}</div>
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Photos & Images Section */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                    Galería Fotográfica y Presentaciones Visuales
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1 text-xs text-teal-600 dark:text-teal-400 font-semibold hover:underline">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Subir Foto Local</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Thumbnails of current images */}
                <div className="flex items-center flex-wrap gap-3">
                  {images.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative group w-20 h-20 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shrink-0 shadow-xs"
                    >
                      <img
                        src={imgUrl}
                        alt="Medication visual"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(idx)}
                        className="absolute top-1 right-1 p-1 bg-black/70 hover:bg-rose-600 text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Eliminar foto"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                      {idx === 0 && (
                        <span className="absolute bottom-1 left-1 bg-teal-600 text-[9px] text-white px-1 rounded font-bold uppercase">
                          Principal
                        </span>
                      )}
                    </div>
                  ))}

                  {/* Preset quick buttons */}
                  <div className="flex flex-col gap-1 text-xs">
                    <span className="text-[11px] text-slate-400 font-medium">Fotos de laboratorio predefinidas:</span>
                    <div className="flex gap-1.5 flex-wrap">
                      {PRESET_IMAGES.map((preset, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleAddPresetImage(preset.url)}
                          className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs border border-slate-200 dark:border-slate-700"
                        >
                          + {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Add Custom URL */}
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customImageUrl}
                    onChange={(e) => setCustomImageUrl(e.target.value)}
                    placeholder="O ingrese URL de fotografía de alta resolución (https://...)"
                    className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={handleAddCustomUrl}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    Añadir URL
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Presentaciones */}
          {tab === 'presentations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                    Formas Farmacéuticas & Concentraciones
                  </h3>
                  <p className="text-xs text-slate-500">
                    Registre todas las formulaciones galénicas disponibles (comprimidos, jarabes, viales, etc.).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddPresentation}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Presentación</span>
                </button>
              </div>

              <div className="space-y-3">
                {presentations.map((p, idx) => (
                  <div
                    key={p.id || idx}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3 relative group"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                          Forma Galénica
                        </label>
                        <input
                          type="text"
                          value={p.form}
                          onChange={(e) => handleUpdatePresentation(idx, 'form', e.target.value)}
                          placeholder="Ej. Comprimidos recubiertos"
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                          Concentración
                        </label>
                        <input
                          type="text"
                          value={p.concentration}
                          onChange={(e) => handleUpdatePresentation(idx, 'concentration', e.target.value)}
                          placeholder="Ej. 500 mg / 125 mg"
                          className="w-full px-2.5 py-1.5 text-xs font-mono rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                          Vía de Administración
                        </label>
                        <select
                          value={p.route}
                          onChange={(e) => handleUpdatePresentation(idx, 'route', e.target.value as AdministrationRoute)}
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        >
                          {ALL_ROUTES.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                          Envase / Presentación
                        </label>
                        <input
                          type="text"
                          value={p.packaging || ''}
                          onChange={(e) => handleUpdatePresentation(idx, 'packaging', e.target.value)}
                          placeholder="Ej. Caja con 30 comprimidos"
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={p.excipients || ''}
                          onChange={(e) => handleUpdatePresentation(idx, 'excipients', e.target.value)}
                          placeholder="Excipientes relevantes (ej. Contiene lactosa, aspartamo, sodio...)"
                          className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        />
                      </div>

                      {presentations.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemovePresentation(idx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded transition-colors"
                          title="Eliminar presentación"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Mecanismo de Acción & Diana */}
          {tab === 'mechanism' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Diana Farmacológica / Receptor Específico
                </label>
                <input
                  type="text"
                  value={targetReceptor}
                  onChange={(e) => setTargetReceptor(e.target.value)}
                  placeholder="Ej. Receptor de Angiotensina II tipo 1 (AT1) o H+/K+ ATPasa gástrica"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Resumen Ejecutivo del Mecanismo (1-2 oraciones)
                </label>
                <input
                  type="text"
                  value={mechSummary}
                  onChange={(e) => setMechSummary(e.target.value)}
                  placeholder="Ej. Bloqueo competitivo selectivo del receptor AT1 con vasodilatación arteriolar..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Descripción Farmacodinámica Detallada
                </label>
                <textarea
                  rows={4}
                  value={mechDetailed}
                  onChange={(e) => setMechDetailed(e.target.value)}
                  placeholder="Cascada intracelular, vías de señalización bioquímica, interacción molecular con el receptor..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Puntos Clave del Mecanismo / Cinética (un punto por línea)
                </label>
                <textarea
                  rows={3}
                  value={keyPointsText}
                  onChange={(e) => setKeyPointsText(e.target.value)}
                  placeholder="Bactericida dependiente de tiempo&#10;Efecto nefroprotector comprobado&#10;Metabolismo hepático vía CYP2C9"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* TAB 4: Dosis & Posología */}
          {tab === 'posology' && (
            <div className="space-y-4">
              
              {/* Routes checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Vías de Administración Autorizadas
                </label>
                <div className="flex flex-wrap gap-2">
                  {ALL_ROUTES.map(route => {
                    const isChecked = routes.includes(route);
                    return (
                      <button
                        key={route}
                        type="button"
                        onClick={() => handleToggleRoute(route)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                          isChecked
                            ? 'bg-teal-600 text-white border-teal-600'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        {route}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Posología en Adultos
                  </label>
                  <textarea
                    rows={3}
                    value={adultDose}
                    onChange={(e) => setAdultDose(e.target.value)}
                    placeholder="Ej. 500 mg cada 8 horas por vía oral. Dosis máxima: 4000 mg/día..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Posología Pediátrica (mg/kg/día)
                  </label>
                  <textarea
                    rows={3}
                    value={pediatricDose}
                    onChange={(e) => setPediatricDose(e.target.value)}
                    placeholder="Ej. 10 a 15 mg/kg cada 4 a 6 horas (máx 60 mg/kg/día)..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Ajuste en Insuficiencia Renal (Aclaramiento de Creatinina)
                  </label>
                  <textarea
                    rows={3}
                    value={renalAdjustment}
                    onChange={(e) => setRenalAdjustment(e.target.value)}
                    placeholder="Ej. ClCr 10-30 ml/min: 500 mg cada 12h. ClCr < 10 ml/min: cada 24h..."
                    className="w-full px-3 py-2 text-sm font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Ajuste en Insuficiencia Hepática
                  </label>
                  <textarea
                    rows={3}
                    value={hepaticAdjustment}
                    onChange={(e) => setHepaticAdjustment(e.target.value)}
                    placeholder="Ej. Reducir dosis al 50%. Contraindicado en Child-Pugh C..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Indicaciones Aprobadas (una por línea)
                </label>
                <textarea
                  rows={3}
                  value={approvedIndicationsText}
                  onChange={(e) => setApprovedIndicationsText(e.target.value)}
                  placeholder="Hipertensión arterial esencial&#10;Nefropatía diabética tipo 2&#10;Insuficiencia cardíaca crónica"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Notas de Administración Práctica
                </label>
                <input
                  type="text"
                  value={administrationNotes}
                  onChange={(e) => setAdministrationNotes(e.target.value)}
                  placeholder="Ej. Ingerir 30 minutos antes del desayuno. Infundir IV en al menos 15 minutos..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

            </div>
          )}

          {/* TAB 5: Seguridad & Efectos Adversos */}
          {tab === 'safety' && (
            <div className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Categoría de Embarazo FDA
                  </label>
                  <select
                    value={pregnancyCategory}
                    onChange={(e) => setPregnancyCategory(e.target.value as PregnancyCategory)}
                    className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="A">Categoría A (Seguro en estudios controlados)</option>
                    <option value="B">Categoría B (Sin evidencia de riesgo)</option>
                    <option value="C">Categoría C (No puede descartarse riesgo)</option>
                    <option value="D">Categoría D (Evidencia positiva de riesgo)</option>
                    <option value="X">Categoría X (Contraindicado categóricamente)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Seguridad en Lactancia
                  </label>
                  <select
                    value={lactation}
                    onChange={(e) => setLactation(e.target.value as LactationSafety)}
                    className="w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Compatible">Compatible / Seguro</option>
                    <option value="Precaución">Precaución / Evaluar riesgo</option>
                    <option value="Contraindicado">Contraindicado en lactancia</option>
                    <option value="Sin datos clínicos">Sin datos clínicos suficientes</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <input
                      type="checkbox"
                      checked={controlledSubstance}
                      onChange={(e) => setControlledSubstance(e.target.checked)}
                      className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                    />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Sustancia Psicotrópica Controlada
                    </span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-rose-700 dark:text-rose-400 mb-1">
                  Advertencia de Caja Negra (Black Box Warning) - Si aplica
                </label>
                <input
                  type="text"
                  value={blackBoxWarning}
                  onChange={(e) => setBlackBoxWarning(e.target.value)}
                  placeholder="Ej. Riesgo de depresión respiratoria severa al asociar con depresores centrales..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-rose-300 dark:border-rose-900 bg-rose-50/50 dark:bg-rose-950/20 text-rose-950 dark:text-rose-200"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Contraindicaciones Absolutas y Relativas (una por línea)
                </label>
                <textarea
                  rows={3}
                  value={contraindicationsText}
                  onChange={(e) => setContraindicationsText(e.target.value)}
                  placeholder="Hipersensibilidad conocida a betalactámicos&#10;Insuficiencia hepatocelular grave&#10;Miastenia gravis"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              {/* Adverse effects text areas by frequency */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                  Efectos Adversos por Frecuencia (separados por coma)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Muy frecuentes (&gt;10%)
                    </label>
                    <input
                      type="text"
                      value={veryCommonEffects}
                      onChange={(e) => setVeryCommonEffects(e.target.value)}
                      placeholder="Diarrea, somnolencia, náuseas..."
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Frecuentes (1-10%)
                    </label>
                    <input
                      type="text"
                      value={commonEffects}
                      onChange={(e) => setCommonEffects(e.target.value)}
                      placeholder="Cefalea, mareos, exantema..."
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1">
                      Poco frecuentes (0.1-1%)
                    </label>
                    <input
                      type="text"
                      value={uncommonEffects}
                      onChange={(e) => setUncommonEffects(e.target.value)}
                      placeholder="Insomnio, astenia, parestesias..."
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-rose-600 dark:text-rose-400 mb-1">
                      Raros o Graves (&lt;0.1%)
                    </label>
                    <input
                      type="text"
                      value={rareEffects}
                      onChange={(e) => setRareEffects(e.target.value)}
                      placeholder="Anafilaxia, rabdomiólisis, Stevens-Johnson..."
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 6: Interacciones Farmacológicas */}
          {tab === 'interactions' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider font-mono">
                    Interacciones Farmacológicas Registradas
                  </h3>
                  <p className="text-xs text-slate-500">
                    Defina las interacciones farmacocinéticas y farmacodinámicas relevantes clínicamente.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddInteraction}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Añadir Interacción</span>
                </button>
              </div>

              {interactions.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-xl">
                  No se han registrado interacciones aún para este fármaco. Presione "Añadir Interacción" para incorporar advertencias con otros medicamentos.
                </div>
              ) : (
                <div className="space-y-3">
                  {interactions.map((inter, idx) => (
                    <div
                      key={inter.id || idx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 space-y-2.5 relative group"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                          <div className="sm:col-span-2">
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-0.5">
                              Fármaco o Sustancia Interactuante
                            </label>
                            <input
                              type="text"
                              value={inter.interactingSubstance}
                              onChange={(e) => handleUpdateInteraction(idx, 'interactingSubstance', e.target.value)}
                              placeholder="Ej. Espironolactona, Warfarina, Alcohol..."
                              className="w-full px-2.5 py-1.5 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-0.5">
                              Nivel de Severidad
                            </label>
                            <select
                              value={inter.severity}
                              onChange={(e) => handleUpdateInteraction(idx, 'severity', e.target.value as InteractionSeverity)}
                              className="w-full px-2.5 py-1.5 text-xs font-bold rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                            >
                              <option value="Contraindicada">Contraindicada (Evitar)</option>
                              <option value="Mayor">Mayor (Riesgo alto)</option>
                              <option value="Moderada">Moderada (Monitorizar)</option>
                              <option value="Menor">Menor (Mínimo impacto)</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveInteraction(idx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded transition-colors self-center mt-3"
                          title="Eliminar interacción"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] text-slate-500 mb-0.5">Efecto Clínico / Consecuencia</label>
                          <input
                            type="text"
                            value={inter.clinicalEffect}
                            onChange={(e) => handleUpdateInteraction(idx, 'clinicalEffect', e.target.value)}
                            placeholder="Ej. Hiperpotasemia severa y arritmias ventriculares..."
                            className="w-full px-2.5 py-1 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-slate-500 mb-0.5">Recomendación Médica</label>
                          <input
                            type="text"
                            value={inter.recommendation}
                            onChange={(e) => handleUpdateInteraction(idx, 'recommendation', e.target.value)}
                            placeholder="Ej. Monitorizar potasio sérico o evitar asociación..."
                            className="w-full px-2.5 py-1 text-xs rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Modal Footer Controls */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              type="button"
              onClick={closeForm}
              className="px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancelar
            </button>

            <div className="flex items-center gap-2">
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 rounded-lg shadow-sm transition-colors"
              >
                {isEditing ? 'Guardar Cambios Farmacológicos' : 'Registrar en Base de Datos'}
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
