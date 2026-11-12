export type PregnancyCategory = 'A' | 'B' | 'C' | 'D' | 'X';
export type LactationSafety = 'Compatible' | 'Precaución' | 'Contraindicado' | 'Sin datos clínicos';
export type InteractionSeverity = 'Contraindicada' | 'Mayor' | 'Moderada' | 'Menor';
export type AdministrationRoute = 
  | 'Oral'
  | 'Intravenosa'
  | 'Intramuscular'
  | 'Subcutánea'
  | 'Inhalatoria'
  | 'Tópica'
  | 'Oftálmica'
  | 'Rectal'
  | 'Sublingual'
  | 'Nasal'
  | 'Infiltratoria'
  | 'Intradérmica'
  | 'Vaginal'
  | 'Ótica';

export interface DrugPresentation {
  id: string;
  form: string; // ej. Comprimidos recubiertos, Ampolla inyectable, Suspensión oral
  concentration: string; // ej. 500 mg, 1 g / 5 ml, 100 mcg/dosis
  route: AdministrationRoute;
  packaging?: string; // ej. Caja x 30 comprimidos, Vial x 10 ml
  excipients?: string; // ej. Contiene lactosa, alcohol bencílico
}

export interface DrugInteraction {
  id: string;
  interactingSubstance: string; // Fármaco o clase con la que interactúa
  severity: InteractionSeverity;
  clinicalEffect: string; // Qué sucede (ej. Aumento de riesgo de hemorragia)
  recommendation: string; // Conducta clínica (ej. Evitar uso conjunto o monitorizar INR)
}

export interface AdverseEffectGroup {
  frequency: 'Muy frecuentes (>10%)' | 'Frecuentes (1-10%)' | 'Poco frecuentes (0.1-1%)' | 'Raros o Graves (<0.1%)';
  effects: string[];
}

export interface Medication {
  id: string;
  name: string; // Nombre genérico / DCI (ej. Amoxicilina + Ácido Clavulánico)
  brandNames: string[]; // Nombres comerciales comunes (ej. Augmentine, Clavulin)
  atcCode: string; // Código ATC (ej. J01CR02)
  description: string;
  images: string[];
  primaryImage?: string;
  classificationIds: string[]; // Permite reunir un fármaco en varias clasificaciones
  
  presentations: DrugPresentation[];
  
  mechanismOfAction: {
    summary: string;
    detailed: string;
    targetReceptor?: string;
    keyPoints: string[];
  };
  
  indications: {
    approved: string[];
    offLabel?: string[];
  };
  
  dosageAndPosology: {
    adults: string;
    pediatric?: string;
    geriatric?: string;
    renalAdjustment?: string;
    hepaticAdjustment?: string;
    routes: AdministrationRoute[];
    administrationNotes?: string;
  };
  
  safety: {
    contraindications: string[];
    warnings: string[];
    blackBoxWarning?: string;
    pregnancyCategory: PregnancyCategory;
    pregnancyNotes?: string;
    lactation: LactationSafety;
    lactationNotes?: string;
    controlledSubstance?: boolean; // Estupefaciente / Psicotrópico controlado
  };
  
  adverseEffects: AdverseEffectGroup[];
  interactions: DrugInteraction[];
  
  updatedAt: string; // ISO Date
}

export interface Classification {
  id: string;
  name: string; // ej. "Antibióticos y Antimicrobianos"
  code: string; // ej. "ATC-J"
  therapeuticArea: string; // ej. "Infectología"
  description: string;
  mechanismSummary?: string;
  color?: string; // Clave de color suave
}

export interface EducationalVideo {
  id: string;
  title: string;
  classificationId: string;
  classificationName: string;
  youtubeId: string;
  channelName: string;
  duration: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  description: string;
  topics: string[];
  recommendedKeyDrugs: string[];
}
