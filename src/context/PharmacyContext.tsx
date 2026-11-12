import React, { createContext, useContext, useState, useEffect } from 'react';
import { Classification, Medication } from '../types/pharmacy';
import { INITIAL_CLASSIFICATIONS, INITIAL_MEDICATIONS } from '../data/initialMedications';

const STORAGE_KEY_MEDICATIONS = 'pharmapedia_medications_v4';
const STORAGE_KEY_CLASSIFICATIONS = 'pharmapedia_classifications_v4';
const STORAGE_KEY_THEME = 'pharmapedia_theme';

interface PharmacyContextType {
  medications: Medication[];
  classifications: Classification[];
  activeTab: 'home' | 'vademecum' | 'classifications' | 'videos' | 'repaso' | 'interactions' | 'calculators';
  setActiveTab: (tab: 'home' | 'vademecum' | 'classifications' | 'videos' | 'repaso' | 'interactions' | 'calculators') => void;
  navigateToAlphabeticalMedications: () => void;
  navigateToClassification: (classificationId: string) => void;
  
  selectedMedication: Medication | null;
  setSelectedMedication: (med: Medication | null) => void;
  isDetailOpen: boolean;
  setIsDetailOpen: (open: boolean) => void;
  
  editingMedication: Medication | null;
  isFormOpen: boolean;
  openCreateForm: (defaultClassificationId?: string) => void;
  openEditForm: (med: Medication) => void;
  closeForm: () => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterClassification: string;
  setFilterClassification: (id: string) => void;
  filterRoute: string;
  setFilterRoute: (route: string) => void;
  filterPregnancy: string;
  setFilterPregnancy: (pregnancy: string) => void;
  
  addMedication: (med: Omit<Medication, 'id' | 'updatedAt'>) => Medication;
  updateMedication: (med: Medication) => void;
  deleteMedication: (id: string) => void;
  duplicateMedication: (id: string) => void;
  
  addClassification: (classification: Omit<Classification, 'id'>) => Classification;
  updateClassification: (classification: Classification) => void;
  deleteClassification: (id: string) => void;
  
  resetDatabase: () => void;
  exportDatabaseJSON: () => string;
  importDatabaseJSON: (jsonStr: string) => { success: boolean; error?: string };
  
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const PharmacyContext = createContext<PharmacyContextType | undefined>(undefined);

export const PharmacyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Clean up legacy storage keys once
  useEffect(() => {
    try {
      ['pharmadex_medications', 'pharmadex_medications_v2', 'pharmadex_medications_v3',
       'pharmadex_classifications', 'pharmadex_classifications_v2', 'pharmadex_classifications_v3'].forEach(k => {
        localStorage.removeItem(k);
      });
    } catch {
      // ignore
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Medications state
  const [medications, setMedications] = useState<Medication[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MEDICATIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_MEDICATIONS;
  });

  // Classifications state
  const [classifications, setClassifications] = useState<Classification[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CLASSIFICATIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // ignore
    }
    return INITIAL_CLASSIFICATIONS;
  });

  // Persist to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_MEDICATIONS, JSON.stringify(medications));
    } catch {
      // ignore storage full
    }
  }, [medications]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_CLASSIFICATIONS, JSON.stringify(classifications));
    } catch {
      // ignore
    }
  }, [classifications]);

  // Tab & UI navigation
  const [activeTab, setActiveTab] = useState<'home' | 'vademecum' | 'classifications' | 'videos' | 'repaso' | 'interactions' | 'calculators'>('home');
  const [selectedMedication, setSelectedMedication] = useState<Medication | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Form modal
  const [editingMedication, setEditingMedication] = useState<Medication | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterClassification, setFilterClassification] = useState('all');
  const [filterRoute, setFilterRoute] = useState('all');
  const [filterPregnancy, setFilterPregnancy] = useState('all');

  const navigateToAlphabeticalMedications = () => {
    setFilterClassification('all');
    setFilterRoute('all');
    setFilterPregnancy('all');
    setSearchQuery('');
    setActiveTab('vademecum');
  };

  const navigateToClassification = (classificationId: string) => {
    setFilterClassification(classificationId);
    setFilterRoute('all');
    setFilterPregnancy('all');
    setSearchQuery('');
    setActiveTab('vademecum');
  };

  const openCreateForm = (defaultClassificationId?: string) => {
    setEditingMedication(defaultClassificationId ? ({
      id: '',
      name: '',
      brandNames: [],
      atcCode: '',
      description: '',
      images: [],
      classificationIds: [defaultClassificationId],
      presentations: [],
      mechanismOfAction: { summary: '', detailed: '', keyPoints: [] },
      indications: { approved: [] },
      dosageAndPosology: { adults: '', routes: ['Oral'] },
      safety: { contraindications: [], warnings: [], pregnancyCategory: 'B', lactation: 'Compatible' },
      adverseEffects: [],
      interactions: [],
      updatedAt: new Date().toISOString()
    } as Medication) : null);
    setIsFormOpen(true);
  };

  const openEditForm = (med: Medication) => {
    setEditingMedication(med);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setEditingMedication(null);
    setIsFormOpen(false);
  };

  const addMedication = (data: Omit<Medication, 'id' | 'updatedAt'>): Medication => {
    const newMed: Medication = {
      ...data,
      id: `med-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      updatedAt: new Date().toISOString()
    };
    setMedications(prev => [newMed, ...prev]);
    return newMed;
  };

  const updateMedication = (updated: Medication) => {
    const withTimestamp = {
      ...updated,
      updatedAt: new Date().toISOString()
    };
    setMedications(prev => prev.map(m => (m.id === updated.id ? withTimestamp : m)));
    if (selectedMedication?.id === updated.id) {
      setSelectedMedication(withTimestamp);
    }
  };

  const deleteMedication = (id: string) => {
    setMedications(prev => prev.filter(m => m.id !== id));
    if (selectedMedication?.id === id) {
      setIsDetailOpen(false);
      setSelectedMedication(null);
    }
  };

  const duplicateMedication = (id: string) => {
    const original = medications.find(m => m.id === id);
    if (!original) return;
    const duplicated: Medication = {
      ...original,
      id: `med-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      name: `${original.name} (Copia)`,
      brandNames: [...original.brandNames],
      updatedAt: new Date().toISOString()
    };
    setMedications(prev => [duplicated, ...prev]);
  };

  const addClassification = (data: Omit<Classification, 'id'>): Classification => {
    const newClass: Classification = {
      ...data,
      id: `c-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`
    };
    setClassifications(prev => [...prev, newClass]);
    return newClass;
  };

  const updateClassification = (updated: Classification) => {
    setClassifications(prev => prev.map(c => (c.id === updated.id ? updated : c)));
  };

  const deleteClassification = (id: string) => {
    setClassifications(prev => prev.filter(c => c.id !== id));
    // Also remove this classification ID from any medications that had it
    setMedications(prev =>
      prev.map(m => ({
        ...m,
        classificationIds: m.classificationIds.filter(cId => cId !== id)
      }))
    );
  };

  const resetDatabase = () => {
    setMedications(INITIAL_MEDICATIONS);
    setClassifications(INITIAL_CLASSIFICATIONS);
    localStorage.removeItem(STORAGE_KEY_MEDICATIONS);
    localStorage.removeItem(STORAGE_KEY_CLASSIFICATIONS);
    setIsDetailOpen(false);
    setSelectedMedication(null);
  };

  const exportDatabaseJSON = (): string => {
    const data = {
      exportedAt: new Date().toISOString(),
      version: '1.0',
      totalMedications: medications.length,
      totalClassifications: classifications.length,
      classifications,
      medications
    };
    return JSON.stringify(data, null, 2);
  };

  const importDatabaseJSON = (jsonStr: string): { success: boolean; error?: string } => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed || (!parsed.medications && !parsed.classifications)) {
        return { success: false, error: 'El archivo JSON no contiene una estructura válida de PharmaPedia.' };
      }
      if (Array.isArray(parsed.classifications) && parsed.classifications.length > 0) {
        setClassifications(parsed.classifications);
      }
      if (Array.isArray(parsed.medications) && parsed.medications.length > 0) {
        setMedications(parsed.medications);
      }
      return { success: true };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Error desconocido al procesar el archivo JSON.';
      return { success: false, error: msg };
    }
  };

  return (
    <PharmacyContext.Provider
      value={{
        medications,
        classifications,
        activeTab,
        setActiveTab,
        navigateToAlphabeticalMedications,
        navigateToClassification,
        selectedMedication,
        setSelectedMedication,
        isDetailOpen,
        setIsDetailOpen,
        editingMedication,
        isFormOpen,
        openCreateForm,
        openEditForm,
        closeForm,
        searchQuery,
        setSearchQuery,
        filterClassification,
        setFilterClassification,
        filterRoute,
        setFilterRoute,
        filterPregnancy,
        setFilterPregnancy,
        addMedication,
        updateMedication,
        deleteMedication,
        duplicateMedication,
        addClassification,
        updateClassification,
        deleteClassification,
        resetDatabase,
        exportDatabaseJSON,
        importDatabaseJSON,
        theme,
        toggleTheme
      }}
    >
      {children}
    </PharmacyContext.Provider>
  );
};

export const usePharmacy = () => {
  const context = useContext(PharmacyContext);
  if (!context) {
    throw new Error('usePharmacy must be used within a PharmacyProvider');
  }
  return context;
};
