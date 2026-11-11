import { Medication } from '../../types/pharmacy';

export const ENDOCRINE_MEDICATIONS: Medication[] = [
  // --- HIPOGLUCEMIANTES ORALES ---
  {
    id: 'med-glibenclamida',
    name: 'Glibenclamida (Gliburida)',
    brandNames: ['Daonil', 'Euglucon', 'Glucolon'],
    atcCode: 'A10BB01',
    description: 'Sulfonilurea de segunda generación con potente acción secretagoga de insulina, caracterizada por alto riesgo de hipoglucemias graves y prolongadas en ancianos.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidiabeticos'],
    presentations: [
      { id: 'p-glb-1', form: 'Comprimidos ranurados', concentration: '5 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Cierre de los canales de potasio dependientes de ATP (K-ATP) en las células beta pancreáticas con exocitosis de insulina.',
      detailed: 'Se une al receptor de sulfonilureas SUR1 en el complejo del canal de potasio K-ATP de la membrana de las células beta del páncreas endocrino. El cierre de estos canales induce la despolarización de la membrana plasmática, la apertura de canales de calcio dependientes de voltaje, el influjo masivo de calcio intracelular y la consiguiente exocitosis de los gránulos de insulina almacenados. Su estímulo es independiente de la concentración de glucosa presente en sangre.',
      targetReceptor: 'Receptor de Sulfonilureas SUR1 / Canal Kir6.2',
      keyPoints: ['Estimula la secreción de insulina independientemente de la glucemia (alto riesgo de hipoglucemia)', 'Metabolitos activos de eliminación renal prolongada', 'Desaconsejado en ancianos frágiles según criterios de Beers']
    },
    indications: {
      approved: ['Tratamiento de la diabetes mellitus tipo 2 cuando las medidas higiénico-dietéticas y metformina son insuficientes o no toleradas']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 2.5 a 5 mg una vez al día con el primer desayuno. Puede incrementarse cada 1-2 semanas hasta un máximo de 15 a 20 mg/día (habitualmente 10 mg/día en 2 tomas antes de comidas principales).',
      pediatric: 'No indicado en niños.',
      renalAdjustment: 'CONTRAINDICADO si TFG < 60 ml/min por acumulación de metabolitos e hipoglucemia refractaria prolongada.',
      hepaticAdjustment: 'Contraindicado en insuficiencia hepática grave.',
      routes: ['Oral'],
      administrationNotes: 'Ingerir inmediatamente antes o durante el desayuno o la comida principal; nunca omitir una comida tras la toma.'
    },
    safety: {
      contraindications: ['Diabetes mellitus tipo 1', 'Cetoacidosis diabética o coma hiperosmolar', 'Insuficiencia renal moderada o severa (TFG < 60 ml/min)', 'Insuficiencia hepática severa'],
      warnings: ['Hipoglucemia grave y prolongada (puede durar 24 a 72 horas requiriendo infusión continua de glucosa hospitalaria)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo (cruza la placenta y causa hipoglucemia neonatal e hiperinsulinismo; usar insulina).',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipoglucemia sintomática', 'Aumento de peso (por efecto anabólico de la insulina)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas', 'Sensación de plenitud gástrica'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Coma hipoglucémico irreversible', 'Agranulocitosis', 'Ictericia colestásica alérgica'] }
    ],
    interactions: [
      { id: 'int-glb-1', interactingSubstance: 'Alcohol (Etanol)', severity: 'Mayor', clinicalEffect: 'Inhibe la gluconeogénesis hepática potenciando hipoglucemias graves y efecto antabús.', recommendation: 'Evitar consumo de alcohol.' },
      { id: 'int-glb-2', interactingSubstance: 'Sulfamidas (Cotrimoxazol) y Fluconazol', severity: 'Mayor', clinicalEffect: 'Desplazan a la glibenclamida de su unión a proteínas y bloquean su metabolismo CYP2C9 desencadenando coma hipoglucémico.', recommendation: 'Evitar la combinación; cambiar de antibiótico/antifúngico.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-rosiglitazona',
    name: 'Rosiglitazona',
    brandNames: ['Avandia', 'Avandamet'],
    atcCode: 'A10BG02',
    description: 'Tiazolidinediona (glitazona) sensibilizadora a la insulina mediante activación de receptores nucleares PPAR-gamma. Su uso histórico fue altamente restringido por riesgo de insuficiencia cardíaca y fracturas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidiabeticos'],
    presentations: [
      { id: 'p-ros-1', form: 'Comprimidos recubiertos con película', concentration: '4 mg y 8 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Agonismo selectivo del receptor nuclear activado por proliferadores de peroxisomas gamma (PPAR-gamma).',
      detailed: 'Se une como ligando agonista al factor de transcripción nuclear PPAR-gamma ubicado predominantemente en el tejido adiposo, vascular y muscular. Regula la transcripción de genes diana sensibles a insulina: promueve la diferenciación adipocítica subcutánea, aumenta la expresión de transportadores GLUT-4 y translocación de glucosa, y reduce los ácidos grasos libres circulantes y la resistencia periférica a la insulina.',
      targetReceptor: 'Receptor nuclear PPAR-gamma',
      keyPoints: ['No estimula la secreción de insulina (sin riesgo de hipoglucemia en monoterapia)', 'Provoca retención de líquidos mediada por activación de canales ENaC en el túbulo colector', 'Incrementa el riesgo de descompensación de insuficiencia cardíaca']
    },
    indications: {
      approved: ['Tratamiento de segunda o tercera línea en diabetes mellitus tipo 2 en pacientes seleccionados sin antecedentes de cardiopatía']
    },
    dosageAndPosology: {
      adults: 'Dosis inicial: 4 mg una vez al día con o sin alimentos. Puede incrementarse a las 8-12 semanas a 8 mg/día en 1 o 2 tomas.',
      pediatric: 'Contraindicado en menores de 18 años.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve-moderada.',
      hepaticAdjustment: 'CONTRAINDICADO en insuficiencia hepática activa (monitorizar ALT basal).',
      routes: ['Oral'],
      administrationNotes: 'Monitorear la aparición de edemas, aumento súbito de peso o disnea.'
    },
    safety: {
      contraindications: ['Insuficiencia cardíaca congestiva en cualquier grado (clases I a IV NYHA)', 'Síndrome coronario agudo o cardiopatía isquémica', 'Insuficiencia hepática activa'],
      warnings: ['Retención hidrosalina severa que desencadena insuficiencia cardíaca descompensada', 'Aumento de fracturas óseas periféricas en mujeres posmenopáusicas', 'Edema macular diabético'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo.',
      lactation: 'Contraindicado',
      lactationNotes: 'No usar.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo demostrado de precipitar o empeorar la insuficiencia cardíaca congestiva en pacientes vulnerables.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Edema periférico bilateral', 'Aumento ponderal significativo (grasa subcutánea y agua)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Anemia dilucional leve', 'Fracturas óseas en extremidades distales en mujeres'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia cardíaca congestiva aguda', 'Edema macular con pérdida visual'] }
    ],
    interactions: [
      { id: 'int-ros-1', interactingSubstance: 'Insulina', severity: 'Contraindicada', clinicalEffect: 'Aumento masivo sinérgico del riesgo de edema masivo e insuficiencia cardíaca congestiva.', recommendation: 'Evitar la coadministración de tiazolidinedionas con insulina.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-pioglitazona',
    name: 'Pioglitazona',
    brandNames: ['Actos', 'Glustin', 'Zactos'],
    atcCode: 'A10BG03',
    description: 'Tiazolidinediona sensibilizadora de insulina con acción dual parcial sobre PPAR-alfa que confiere beneficios favorables adicionales sobre el perfil lipídico (reduce triglicéridos y aumenta HDL).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidiabeticos'],
    presentations: [
      { id: 'p-pio-1', form: 'Comprimidos orales', concentration: '15 mg, 30 mg y 45 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos', excipients: 'Lactosa monohidrato, carboximetilcelulosa' }
    ],
    mechanismOfAction: {
      summary: 'Agonismo potente sobre PPAR-gamma y actividad parcial sobre PPAR-alfa con reducción de esteatosis hepática.',
      detailed: 'Mejora la sensibilidad a la insulina a nivel hepático y periférico (músculo y tejido graso). Su modulación concomitante de PPAR-alfa reduce los triglicéridos plasmáticos y mejora el colesterol HDL. Frena la progresión de la esteatohepatitis no alcohólica (EHNA / MASH) y reduce eventos ateroscleróticos en pacientes con resistencia insulínica.',
      targetReceptor: 'Receptor nuclear PPAR-gamma y PPAR-alfa',
      keyPoints: ['Disminuye la esteatosis hepática en hígado graso no alcohólico', 'Efecto hipoglucemiante máximo progresivo tras 8 a 12 semanas', 'Contraindicado en pacientes con cáncer vesical activo o hematuria macroscópica no filiada']
    },
    indications: {
      approved: ['Tratamiento de la diabetes mellitus tipo 2 en combinación con metformina o sulfonilureas'],
      offLabel: ['Esteatohepatitis no alcohólica (MASH) comprobada por biopsia']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 15 mg o 30 mg una vez al día con o sin alimentos. Puede titularse tras 8 semanas hasta un máximo de 45 mg una vez al día.',
      pediatric: 'Contraindicado en menores de 18 años.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal (útil en nefropatía diabética avanzada donde metformina está prohibida).',
      hepaticAdjustment: 'Contraindicado si transaminasas > 2.5 veces el límite superior normal.',
      routes: ['Oral'],
      administrationNotes: 'Tomar a cualquier hora del día con o sin comida.'
    },
    safety: {
      contraindications: ['Insuficiencia cardíaca congestiva en cualquier grado (NYHA I-IV)', 'Cáncer de vejiga urinaria activo o antecedente previo de neoplasia vesical', 'Hematuria macroscópica no filiada', 'Insuficiencia hepática activa'],
      warnings: ['Monitorear retención hídrica y aumento brusco de peso', 'Mayor riesgo de fracturas óseas osteoporóticas en mujeres'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo.',
      lactation: 'Contraindicado',
      lactationNotes: 'No usar.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de desencadenar o agravar insuficiencia cardíaca congestiva.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Edema periférico', 'Aumento de peso'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Anemia leve por hemodilución', 'Fracturas óseas en extremidades distales en mujeres'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Neoplasia vesical (cáncer de vejiga tras uso prolongado)', 'Edema macular'] }
    ],
    interactions: [
      { id: 'int-pio-1', interactingSubstance: 'Gemfibrozilo', severity: 'Mayor', clinicalEffect: 'Inhibe el CYP2C8 triplicando la exposición a pioglitazona con mayor riesgo de edema e insuficiencia cardíaca.', recommendation: 'Limitar la dosis de pioglitazona a 15 mg/día.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 4.2. INSULINAS ---
  {
    id: 'med-insulina-rapida',
    name: 'Insulina de Acción Rápida (Lispro / Aspart / Regular)',
    brandNames: ['Humalog', 'NovoRapid', 'Actrapid', 'Apidra', 'Fiasp'],
    atcCode: 'A10AB04 / A10AB01',
    description: 'Análogos de insulina prandial de acción ultrarrápida (Lispro, Aspart) e Insulina Humana Regular cristalina. Diseñadas para el control glucémico posprandial inmediato y emergencias cetoacidóticas.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-insulinas'],
    presentations: [
      { id: 'p-irap-1', form: 'Plumas precargadas desechables (KwikPen / FlexPen)', concentration: '100 UI / ml (pluma de 3 ml = 300 UI)', route: 'Subcutánea', packaging: 'Caja x 5 plumas', excipients: 'Metacresol, glicerol' },
      { id: 'p-irap-2', form: 'Viales inyectables para bomba de infusión o vía IV', concentration: '100 UI / ml (vial de 10 ml = 1000 UI)', route: 'Intravenosa', packaging: 'Vial de vidrio', excipients: 'Agua para inyectables, óxido de zinc' }
    ],
    mechanismOfAction: {
      summary: 'Activación del receptor de insulina tirosina quinasa con translocación de transportadores GLUT-4 e internalización de glucosa.',
      detailed: 'Se une a la subunidad alfa del receptor de insulina de membrana induciendo autofosforilación de residuos de tirosina en la subunidad beta intracelular. Activa la cascada IRS-1 / PI3K / Akt, promoviendo la translocación de vesículas con transportadores de glucosa GLUT-4 hacia la membrana plasmática del músculo estriado y tejido adiposo. Estimula la glucogenogénesis e inhibe la lipólisis y gluconeogénesis hepática. Las formulaciones monoméricas (Lispro/Aspart) evitan la formación de hexámeros estables, iniciando su absorción a los 10-15 minutos.',
      targetReceptor: 'Receptor de Insulina de membrana (Tirosina quinasa)',
      keyPoints: ['Análogos rápidos (Lispro, Aspart): inicio en 10-15 min, pico a los 45-75 min, duración 3-5 horas', 'Insulina Regular cristalina: ÚNICA insulina apta para infusión intravenosa en cetoacidosis diabética', 'Administración 0 a 15 minutos antes o inmediatamente después de la comida']
    },
    indications: {
      approved: ['Tratamiento prandial de la diabetes mellitus tipo 1 y tipo 2', 'Cetoacidosis diabética y estado hiperosmolar hiperglucémico (vía IV)', 'Manejo urgente de la hiperpotasemia grave (junto con glucosa IV hiperosmolar)'],
      offLabel: ['Intoxicación grave por bloqueadores de canales de calcio (terapia de hiperinsulinemia-euglucemia)']
    },
    dosageAndPosology: {
      adults: 'Individualizada según recuento de hidratos de carbono y glucemia capilar previa (típicamente 0.5 a 1 UI por cada 10-15 g de carbohidratos consumidos). Cetoacidosis diabética: Bolo IV de 0.1 UI/kg seguido de infusión de 0.1 UI/kg/hora de insulina regular.',
      pediatric: 'Dosificación individualizada según pauta basal-bolo pediátrica.',
      renalAdjustment: 'Reducir dosis si TFG < 50 ml/min por menor catabolismo renal de la insulina.',
      hepaticAdjustment: 'Reducir requerimientos por menor gluconeogénesis.',
      routes: ['Subcutánea', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Rotar rigurosamente los puntos de inyección subcutánea (abdomen, muslos, brazos) para evitar lipohipertrofia.'
    },
    safety: {
      contraindications: ['Episodio agudo de hipoglucemia'],
      warnings: ['Hipoglucemia: complicación más frecuente y potencialmente mortal (tener glucagón o glucosa oral/IV disponible)', 'Lipodistrofia en sitios de inyección repetitiva'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Fármaco de elección absoluto para diabetes preexistente y diabetes gestacional en el embarazo.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipoglucemia (sudoración fría, temblor, taquicardia, confusión)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Lipohipertrofia dérmica local', 'Aumento ponderal'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Shock hipoglucémico con coma o convulsiones', 'Hipopotasemia grave'] }
    ],
    interactions: [
      { id: 'int-irap-1', interactingSubstance: 'Betabloqueantes no cardioselectivos (Propranolol)', severity: 'Mayor', clinicalEffect: 'Enmascaran los síntomas de alarma adrenérgicos de la hipoglucemia y retrasan la recuperación glucémica.', recommendation: 'Advertir al paciente que la sudoración es el único síntoma persistente.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-insulina-intermedia',
    name: 'Insulina de Acción Intermedia (NPH / Isófana)',
    brandNames: ['Humulin NPH', 'Insulatard', 'Novolin N'],
    atcCode: 'A10AC01',
    description: 'Insulina humana cristalizada con protamina neutra (Hagedorn) que retarda su absorción subcutánea, proporcionando cobertura basal intermedia de 12 a 18 horas.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-insulinas'],
    presentations: [
      { id: 'p-inph-1', form: 'Suspensión inyectable turbia en plumas precargadas', concentration: '100 UI / ml (pluma de 3 ml = 300 UI)', route: 'Subcutánea', packaging: 'Caja x 5 plumas', excipients: 'Protamina, sulfato de zinc, metacresol' },
      { id: 'p-inph-2', form: 'Vial de suspensión inyectable', concentration: '100 UI / ml (vial de 10 ml)', route: 'Subcutánea', packaging: 'Vial de 10 ml', excipients: 'Glicerol, fenol' }
    ],
    mechanismOfAction: {
      summary: 'Complejo estequiométrico de insulina y protamina en suspensión neutra que se disuelve lentamente en el tejido celular subcutáneo.',
      detailed: 'Al unirse a la protamina básica forma microcristales que requieren degradación enzimática tisular antes de liberar monómeros de insulina libres al torrente sanguíneo. Inicia su acción a las 1-2 horas, produce un pico marcado entre las 4 y 10 horas y dura entre 12 y 18 horas.',
      targetReceptor: 'Receptor de Insulina tirosina quinasa',
      keyPoints: ['Aspecto turbio o lechoso característico: REQUIERE HOMOGENEIZACIÓN SUAVE (girar 10-20 veces sin agitar con violencia)', 'Pico plasmático marcado a las 6-8 horas: riesgo de hipoglucemia nocturna si se inyecta antes de cenar', 'NUNCA ADMINISTRAR POR VÍA INTRAVENOSA']
    },
    indications: {
      approved: ['Control glucémico basal en diabetes mellitus tipo 1 y tipo 2', 'Diabetes gestacional que requiere soporte insulínico basal']
    },
    dosageAndPosology: {
      adults: 'Individualizada según peso y requerimientos (habitualmente 0.2 a 0.5 UI/kg/día administrada en 1 o 2 inyecciones subcutáneas: por la mañana o al acostarse).',
      pediatric: 'Pauta basal según endocrinólogo pediatra.',
      renalAdjustment: 'Reducir dosis si TFG < 50 ml/min.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Subcutánea'],
      administrationNotes: 'Homogeneizar la pluma haciéndola rodar horizontalmente entre las palmas 10 veces antes de cada inyección. VÍA SUBCUTÁNEA EXCLUSIVA.'
    },
    safety: {
      contraindications: ['Episodio de hipoglucemia en curso', 'Administración intravenosa (PROHIBIDA)'],
      warnings: ['Riesgo de hipoglucemia nocturna por el pico intermedio (se recomienda colación nocturna al acostarse)'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguridad clínica establecida en gestantes.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipoglucemia (frecuentemente nocturna)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Aumento de peso', 'Reacción local alérgica a la protamina'] }
    ],
    interactions: [
      { id: 'int-inph-1', interactingSubstance: 'Corticoides sistémicos', severity: 'Mayor', clinicalEffect: 'Aumento drástico de la resistencia periférica a la insulina con hiperglucemias severas.', recommendation: 'Incrementar la dosis de insulina NPH en un 30-50% mientras dure el ciclo corticoideo.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-insulina-lenta',
    name: 'Insulina de Acción Lenta / Prolongada (Glargina / Degludec / Detemir)',
    brandNames: ['Lantus', 'Toujeo', 'Tresiba', 'Levemir'],
    atcCode: 'A10AE04 / A10AE06',
    description: 'Análogos basales de insulina de segunda generación con perfil farmacocinético prácticamente plano "sin picos" y duración de acción ultraprolongada (24 a más de 42 horas).',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-insulinas'],
    presentations: [
      { id: 'p-glar-1', form: 'Plumas precargadas desechables (SoloStar / FlexTouch)', concentration: '100 UI / ml (U100) y 300 UI / ml (U300 Toujeo)', route: 'Subcutánea', packaging: 'Caja x 5 plumas de 3 ml', excipients: 'Óxido de zinc, m-cresol' },
      { id: 'p-deg-1', form: 'Plumas precargadas Degludec (Tresiba)', concentration: '100 UI / ml y 200 UI / ml (U200)', route: 'Subcutánea', packaging: 'Caja x 5 plumas', excipients: 'Fenol, glicerol' }
    ],
    mechanismOfAction: {
      summary: 'Precipitación en microcristales tisulares a pH fisiológico o formación de multihexámeros solubles de disociación ultra-lenta.',
      detailed: 'La insulina Glargina está disuelta a pH ácido (pH 4.0); al inyectarse en el tejido celular subcutáneo (pH neutro 7.4), precipita en forma de micro-depósitos de hexámeros insolubles desde donde se disocian lentamente monómeros constantes a la circulación durante 24 horas continuas sin pico alguno. La insulina Degludec forma cadenas estables de multihexámeros solubles con una semivida de eliminación de 25 horas y duración > 42 horas.',
      targetReceptor: 'Receptor de Insulina tirosina quinasa',
      keyPoints: ['Perfil farmacocinético basal plano sin picos de concentración', 'Menor riesgo de hipoglucemias nocturnas comparado con NPH (reducción del 30-50%)', 'Administración en monodosis una vez al día a cualquier hora constante']
    },
    indications: {
      approved: ['Terapia insulínica basal en diabetes mellitus tipo 1 y tipo 2 en adultos, adolescentes y niños ≥ 1 año'],
      offLabel: ['Régimen basal en nutrición parenteral total']
    },
    dosageAndPosology: {
      adults: 'Diabetes tipo 2 sin tratamiento previo: Iniciar con 10 UI o 0.1 a 0.2 UI/kg una vez al día, titulando cada 3-4 días según la glucemia en ayunas. Diabetes tipo 1: Representa habitualmente el 40-50% de la dosis diaria total de insulina.',
      pediatric: 'Pauta basal según peso por especialista.',
      renalAdjustment: 'Reducir dosis si TFG < 50 ml/min.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Subcutánea'],
      administrationNotes: 'VÍA SUBCUTÁNEA EXCLUSIVA. Solución transparente: NO mezclar en la misma jeringa con ninguna otra insulina rápida debido a su pH ácido.'
    },
    safety: {
      contraindications: ['Episodio agudo de hipoglucemia', 'Administración intravenosa (PROHIBIDA)'],
      warnings: ['NUNCA administrar por vía IV: su formulación ácida puede causar precipitación intravascular y toxicidad aguda'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Glargina y Detemir aprobadas en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipoglucemia leve a moderada'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Escozor o dolor leve transitorio en el sitio de inyección por el pH ácido (glargina)', 'Lipohipertrofia'] }
    ],
    interactions: [
      { id: 'int-glar-1', interactingSubstance: 'Inhibidores de SGLT2 (Empagliflozina, Dapagliflozina)', severity: 'Moderada', clinicalEffect: 'Efecto sinérgico favorable que reduce requerimientos de insulina; vigilar cetoacidosis euglucémica.', recommendation: 'Ajustar la dosis basal de insulina.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
