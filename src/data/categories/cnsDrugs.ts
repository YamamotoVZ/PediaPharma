import { Medication } from '../../types/pharmacy';

export const CNS_MEDICATIONS: Medication[] = [
  // --- 2.4. ANSIOLÍTICOS Y SEDANTES-HIPNÓTICOS (BENZODIACEPINAS) ---
  {
    id: 'med-diazepam',
    name: 'Diazepam',
    brandNames: ['Valium', 'Stesolid', 'Aneurol'],
    atcCode: 'N05BA01',
    description: 'Benzodiacepina clásica de semivida prolongada con efectos ansiolítico, sedante, miorrelajante y anticonvulsivante rápido.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-dzp-1', form: 'Comprimidos ranurados', concentration: '5 mg y 10 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-dzp-2', form: 'Ampollas inyectables', concentration: '10 mg / 2 ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Alcohol bencílico, etanol' },
      { id: 'p-dzp-3', form: 'Microenemas rectales', concentration: '5 mg y 10 mg', route: 'Rectal', packaging: 'Tubo aplicador rectal', excipients: 'Ácido benzoico' }
    ],
    mechanismOfAction: {
      summary: 'Modulación alostérica positiva del receptor GABA-A aumentando la frecuencia de apertura de canales de cloruro.',
      detailed: 'Se une al sitio específico entre subunidades alfa-1/gamma-2 del receptor GABA-A potenciando la afinidad del GABA endógeno. El influjo aumentado de Cl- hiperpolariza la membrana neuronal postsináptica reduciendo la excitabilidad. Metabolito activo nordiazepam de larga semivida (hasta 100 horas).',
      targetReceptor: 'Receptor GABA-A (sitio benzodiacepínico BZD1 y BZD2)',
      keyPoints: ['Antagonista específico de reversión de sobredosis: Flumazenil', 'Efecto miorrelajante a nivel espinal', 'Riesgo de tolerancia y dependencia tras 4-12 semanas de uso']
    },
    indications: {
      approved: ['Ansiedad generalizada e insomnio agudo', 'Estatus epiléptico y convulsiones agudas', 'Espasmos musculares severos y tétanos', 'Síndrome de abstinencia alcohólica aguda (prevención de delirium tremens)'],
      offLabel: ['Sedación consciente previa a endoscopias']
    },
    dosageAndPosology: {
      adults: 'Ansiedad: 2 a 10 mg cada 6 a 12 horas oral. Estatus epiléptico: 10 mg IV lenta (no > 5 mg/min) repetible a los 10 minutos.',
      pediatric: 'Convulsiones: 0.2 a 0.5 mg/kg rectal o 0.1 a 0.3 mg/kg IV lenta.',
      renalAdjustment: 'Administrar con precaución.',
      hepaticAdjustment: 'Reducir dosis al 50%; contraindicado en cirrosis severa por riesgo de encefalopatía hepática.',
      routes: ['Oral', 'Intravenosa', 'Rectal', 'Intramuscular'],
      administrationNotes: 'Inyección IV lenta en vena de gran calibre para evitar tromboflebitis.'
    },
    safety: {
      contraindications: ['Miastenia gravis', 'Insuficiencia respiratoria grave o síndrome de apnea del sueño', 'Insuficiencia hepática grave', 'Glaucoma de ángulo cerrado agudo'],
      warnings: ['Riesgo crítico de paro respiratorio y coma en combinación con opioides o alcohol'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Riesgo de síndrome del niño hipotónico fláccido y abstinencia neonatal en tercer trimestre.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche causando sedación en el lactante.',
      controlledSubstance: true,
      blackBoxWarning: 'Riesgo de depresión respiratoria mortal y coma al combinar con opioides.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Somnolencia diurna', 'Sedación residual', 'Ataxia y debilidad muscular'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Amnesia anterógrada', 'Confusión', 'Mareos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Paro respiratorio (IV rápida)', 'Reacciones paradójicas (agitación, violencia)'] }
    ],
    interactions: [
      { id: 'int-dzp-1', interactingSubstance: 'Opioides (Morfina, Fentanilo)', severity: 'Contraindicada', clinicalEffect: 'Depresión respiratoria profunda letal y coma.', recommendation: 'Evitar combinación.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clordiazepoxido',
    name: 'Clordiazepóxido',
    brandNames: ['Librium', 'Huberplex', 'Klotriptyl'],
    atcCode: 'N05BA02',
    description: 'La primera benzodiacepina desarrollada históricamente. Fármaco de semivida larga de elección en el manejo de desintoxicación alcohólica.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-cdz-1', form: 'Cápsulas y comprimidos', concentration: '5 mg, 10 mg y 25 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Agonismo alostérico en receptores GABA-A con producción del metabolito activo demoxepam y desmetildiazepam.',
      detailed: 'Facilita la acción inhibidora del GABA en el sistema límbico y formación reticular, elevando el umbral convulsivo y controlando la hiperactividad autonómica del síndrome de abstinencia etílica.',
      targetReceptor: 'Receptor GABA-A',
      keyPoints: ['Excelente control del temblor y delirium tremens en desintoxicación', 'Semivida de 24 a 48 horas', 'Efecto ansiolítico suave sin sedación brusca']
    },
    indications: {
      approved: ['Síndrome de abstinencia alcohólica aguda (reducción de temblor, agitación y convulsiones)', 'Estados de ansiedad moderada a grave a corto plazo'],
      offLabel: ['Espasmo muscular psicógeno']
    },
    dosageAndPosology: {
      adults: 'Abstinencia alcohólica: 50 a 100 mg inicial oral, repetible según escala CIWA hasta 300 mg/día el primer día, reduciendo progresivamente en 5-7 días. Ansiedad: 10 a 25 mg cada 6-8 horas.',
      pediatric: 'No recomendado en menores de 6 años.',
      renalAdjustment: 'Reducir dosis un 50% en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis por retraso en el aclaramiento.',
      routes: ['Oral'],
      administrationNotes: 'Retirada escalonada obligatoria tras la desintoxicación aguda.'
    },
    safety: {
      contraindications: ['Insuficiencia hepática grave', 'Miastenia gravis', 'Insuficiencia respiratoria descompensada'],
      warnings: ['Potencial de abuso y dependencia física'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Evitar en el embarazo.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Somnolencia', 'Torpeza motora'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Mareos', 'Confusión en ancianos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Ictericia colestásica', 'Síncope'] }
    ],
    interactions: [
      { id: 'int-cdz-1', interactingSubstance: 'Alcohol', severity: 'Contraindicada', clinicalEffect: 'Sedación extrema, colapso circulatorio y depresión respiratoria.', recommendation: 'Prohibir consumo alcohólico.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-lorazepam',
    name: 'Lorazepam',
    brandNames: ['Orfidal', 'Ativan', 'Idalprem', 'Placinoral'],
    atcCode: 'N05BA06',
    description: 'Benzodiacepina de acción intermedia (semivida de 10 a 20 horas) sin metabolitos activos, metabolizada exclusivamente por glucuronidación directa. Fármaco de elección en pacientes ancianos y con disfunción hepática.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-lor-1', form: 'Comprimidos orales ranurados', concentration: '1 mg y 2 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-lor-2', form: 'Comprimidos sublinguales', concentration: '1 mg', route: 'Sublingual', packaging: 'Caja x 30 comprimidos de rápida absorción', excipients: 'Manitol' },
      { id: 'p-lor-3', form: 'Ampollas inyectables IV/IM', concentration: '4 mg / ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Polietilenglicol, alcohol bencílico' }
    ],
    mechanismOfAction: {
      summary: 'Potenciación alostérica de la neurotransmisión inhibitoria GABAérgica con glucuronidación metabólica limpia.',
      detailed: 'Alta afinidad por los receptores GABA-A. A diferencia del diazepam, no depende del sistema microsomal hepático citocromo P450, sino que sufre conjugación directa por glucuroniltransferasa a glucurónido inactivo soluble que se excreta por orina.',
      targetReceptor: 'Receptor GABA-A central',
      keyPoints: ['No genera metabolitos activos acumulativos', 'Fármaco de elección en ancianos y pacientes con hepatopatía crónica', 'Tratamiento de primera línea en estatus epiléptico en urgencias (mayor duración anticonvulsivante que diazepam)']
    },
    indications: {
      approved: ['Trastornos de ansiedad aguda y crisis de pánico', 'Estatus epiléptico agudo en adultos y niños (vía intravenosa)', 'Insomnio severo incapacitante asociado a ansiedad', 'Premedicación anestésica y antiemético coadyuvante en quimioterapia'],
      offLabel: ['Catatonía en trastornos psiquiátricos mayores (prueba de lorazepam)']
    },
    dosageAndPosology: {
      adults: 'Ansiedad: 1 a 3 mg/día divididos en 2 o 3 tomas. Insomnio: 1 a 2 mg antes de dormir. Estatus epiléptico: 4 mg IV en bolo lento (a 2 mg/min), repetible una vez a los 10-15 min.',
      pediatric: 'Estatus epiléptico: 0.1 mg/kg IV lenta (máximo 4 mg/dosis).',
      renalAdjustment: 'No requiere ajuste severo.',
      hepaticAdjustment: 'Seguro en hepatopatía leve-moderada a dosis bajas.',
      routes: ['Oral', 'Sublingual', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Diluir la ampolla 1:1 con suero salino o glucosado antes de infundir IV para reducir viscosidad.'
    },
    safety: {
      contraindications: ['Miastenia gravis', 'Insuficiencia respiratoria severa', 'Apnea del sueño obstructiva'],
      warnings: ['Amnesia anterógrada dosis dependiente', 'Riesgo de caídas en ancianos por sedación residual matutina'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Evitar en gestación.',
      lactation: 'Precaución',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación', 'Fatiga muscular', 'Sensación de aturdimiento'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Amnesia anterógrada transitoria', 'Inestabilidad en la marcha', 'Boca seca'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Depresión respiratoria grave', 'Reacción paradójica con hostilidad'] }
    ],
    interactions: [
      { id: 'int-lor-1', interactingSubstance: 'Valproato sódico', severity: 'Mayor', clinicalEffect: 'El valproato inhibe la glucuronidación del lorazepam aumentando su concentración plasmática un 30-50%.', recommendation: 'Reducir la dosis de lorazepam a la mitad al coadministrar con valproato.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-oxazepam',
    name: 'Oxazepam',
    brandNames: ['Serepax', 'Serax', 'Alepam'],
    atcCode: 'N05BA04',
    description: 'Benzodiacepina de acción corta a intermedia (semivida de 6 a 12 horas) metabolizada exclusivamente por glucuronidación directa. Excelente tolerancia en geriatría.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-oxa-1', form: 'Comprimidos orales', concentration: '10 mg, 15 mg y 30 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Facilitación de la apertura de canales de cloruro GABA-A con absorción y semivida cortas.',
      detailed: 'Es el metabolito final 3-hidroxi del diazepam y clordiazepóxido. No requiere oxidación hepática por CYP450; se conjuga de inmediato con ácido glucurónico dando un metabolito renalmente excretable. Menor riesgo de acumulación en tratamientos crónicos.',
      targetReceptor: 'Receptor GABA-A',
      keyPoints: ['No se acumula en pacientes ancianos', 'Absorción oral algo más lenta (pico plasmático a las 2-3 horas)', 'Bajo riesgo de sedación diurna residual']
    },
    indications: {
      approved: ['Ansiedad en ancianos o pacientes polimedicados con riesgo de acumulación', 'Trastornos del sueño asociados a ansiedad', 'Abstinencia alcohólica en pacientes con cirrosis']
    },
    dosageAndPosology: {
      adults: 'Ansiedad: 10 a 30 mg 3 o 4 veces al día. Insomnio: 15 a 30 mg antes de dormir. Ancianos: 10 mg 3 veces al día.',
      pediatric: 'No recomendado en menores de 12 años.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Benzodiacepina de elección en cirrosis hepática (junto con lorazepam).',
      routes: ['Oral'],
      administrationNotes: 'Administrar con alimentos o agua.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a benzodiacepinas', 'Insuficiencia respiratoria severa'],
      warnings: ['Menor riesgo de caídas pero vigilar en ancianos frágiles'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado en embarazo.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Somnolencia ligera', 'Mareos', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hipotensión', 'Síncope'] }
    ],
    interactions: [
      { id: 'int-oxa-1', interactingSubstance: 'Depresores centrales y alcohol', severity: 'Contraindicada', clinicalEffect: 'Potenciación aditiva de la depresión respiratoria y del SNC.', recommendation: 'Evitar consumo de alcohol.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clonazepam',
    name: 'Clonazepam',
    brandNames: ['Rivotril', 'Klonopin', 'Clonagin'],
    atcCode: 'N03AE01',
    description: 'Nitrobenzodiacepina de alta potencia y acción prolongada (semivida de 30 a 40 horas) con gran actividad anticonvulsivante, antipánico y estabilizadora del sueño REM.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos', 'c-anticonvulsivos'],
    presentations: [
      { id: 'p-cln-1', form: 'Comprimidos ranurados en cruz', concentration: '0.5 mg y 2 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-cln-2', form: 'Gotas orales en solución', concentration: '2.5 mg / ml (1 gota = 0.1 mg)', route: 'Oral', packaging: 'Frasco gotero de 20 ml', excipients: 'Propilenglicol' },
      { id: 'p-cln-3', form: 'Ampollas inyectables IV', concentration: '1 mg / ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas con disolvente', excipients: 'Etanol, ácido acético' }
    ],
    mechanismOfAction: {
      summary: 'Agonismo alostérico potente en receptores GABA-A con inhibición de descargas epileptógenas paroxísticas.',
      detailed: 'Suprime las descargas en espiga-onda características del electroencefalograma suprimiendo la propagación del foco epileptógeno desde la corteza cerebral y tálamo. Modula potentemente la transmisión en crisis de pánico agudas.',
      targetReceptor: 'Receptor GABA-A (alta afinidad)',
      keyPoints: ['Excelente control de crisis mioclónicas y ausencias atípicas en síndrome de Lennox-Gastaut', 'Eficacia destacada en Trastorno de Conducta del Sueño REM y acatisia', 'Desarrollo de tolerancia anticonvulsivante en algunos pacientes tras meses']
    },
    indications: {
      approved: ['Tratamiento de la epilepsia (crisis de ausencia, mioclonías, síndrome de Lennox-Gastaut, crisis tónico-clónicas)', 'Trastorno de pánico con o sin agorafobia', 'Trastorno del comportamiento durante el sueño REM', 'Acatisia inducida por neurolépticos'],
      offLabel: ['Neuralgia del trigémino refractaria', 'Síndrome de piernas inquietas']
    },
    dosageAndPosology: {
      adults: 'Epilepsia: Iniciar con 0.5 mg cada 12 horas, aumentando gradualmente cada 3 días hasta 4 a 8 mg/día (máximo 20 mg/día). Trastorno de pánico: 0.25 a 0.5 mg cada 12 horas (máximo 4 mg/día).',
      pediatric: 'Iniciar con 0.01 a 0.03 mg/kg/día en 2 o 3 tomas.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve-moderada.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Retirar de forma sumamente lenta (reducción de 0.25 a 0.5 mg cada semana) para prevenir crisis convulsivas por rebote.'
    },
    safety: {
      contraindications: ['Miastenia gravis', 'Insuficiencia respiratoria grave', 'Insuficiencia hepática severa'],
      warnings: ['Hipersecreción salival y bronquial en lactantes y niños (riesgo de aspiración)', 'Sedación profunda inicial'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado en embarazo (riesgo de malformaciones y depresión neonatal).',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche causando letargia en el lactante.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Somnolencia intensa', 'Ataxia', 'Fatiga motora', 'Mareo'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipersalivación (sialorrea)', 'Disartria', 'Inestabilidad'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Depresión respiratoria', 'Trombocitopenia'] }
    ],
    interactions: [
      { id: 'int-cln-1', interactingSubstance: 'Ácido Valproico', severity: 'Mayor', clinicalEffect: 'Puede desencadenar ocasionalmente estatus de ausencia epiléptico no convulsivo paradójico.', recommendation: 'Monitorizar al asociar ambos anticonvulsivos.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- BARBITÚRICOS (SEDANTES-HIPNÓTICOS) ---
  {
    id: 'med-fenobarbital',
    name: 'Fenobarbital',
    brandNames: ['Luminal', 'Luminaletas', 'Gardenal'],
    atcCode: 'N03AA02',
    description: 'Barbitúrico clásico de acción prolongada (semivida de 80 a 120 horas) y potente inductor enzimático microsomial hepático. Fármaco de primera línea para convulsiones neonatales.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-ansioliticos', 'c-anticonvulsivos'],
    presentations: [
      { id: 'p-fen-1', form: 'Comprimidos orales', concentration: '15 mg, 50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos', excipients: 'Almidón, sacarosa' },
      { id: 'p-fen-2', form: 'Ampollas inyectables IM/IV', concentration: '100 mg / ml y 200 mg / ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Propilenglicol, alcohol' }
    ],
    mechanismOfAction: {
      summary: 'Prolongación del tiempo de apertura de canales de cloruro GABA-A y bloqueo de receptores AMPA de glutamato.',
      detailed: 'A diferencia de las benzodiacepinas (que aumentan la frecuencia de apertura), los barbitúricos prolongan la DURACIÓN del tiempo en que el canal de cloruro acoplado a GABA-A permanece abierto. A dosis altas pueden abrir directamente los canales de Cl- sin presencia de GABA (efecto GABA-mimético) y bloquean los receptores excitatorios de glutamato AMPA/kainato.',
      targetReceptor: 'Receptor GABA-A (sitio barbitúrico) y receptores AMPA',
      keyPoints: ['No tiene efecto techo: puede inducir coma barbitúrico y paro respiratorio', 'Potentísimo inductor del sistema enzimático citocromo P450 (CYP3A4, CYP2C9, CYP1A2)', 'Tratamiento de elección en convulsiones neonatales']
    },
    indications: {
      approved: ['Convulsiones neonatales (fármaco de primera elección)', 'Estatus epiléptico refractario a benzodiacepinas y fenitoína', 'Crisis convulsivas generalizadas tónico-clónicas y focales'],
      offLabel: ['Síndrome de Crigler-Najjar tipo II (inducción de glucuroniltransferasa para reducir bilirrubina)']
    },
    dosageAndPosology: {
      adults: 'Epilepsia de mantenimiento: 100 a 200 mg/día en 1 o 2 tomas (nivel sérico terapéutico: 15 a 40 mcg/ml). Estatus epiléptico: 15 a 20 mg/kg IV en infusión lenta (a no más de 50 mg/min).',
      pediatric: 'Convulsiones neonatales: Dosis de carga 20 mg/kg IV lenta.',
      renalAdjustment: 'Reducir dosis si ClCr < 30 ml/min.',
      hepaticAdjustment: 'Reducir dosis a la mitad.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Solución IV alcalina e irritante: evitar extravasación por riesgo de necrosis tisular.'
    },
    safety: {
      contraindications: ['Porfiria aguda intermitente (induce ácido aminolevulínico sintetasa desencadenando crisis mortal)', 'Insuficiencia respiratoria grave preexistente'],
      warnings: ['Riesgo extremo de adicción física, síndrome de abstinencia grave con delirio y convulsiones', 'Inductor hepático masivo que inactiva múltiples medicamentos'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno conocido: causa síndrome de hidantoína/barbitúrico fetal y hemorragia neonatal por déficit de vitamina K.',
      lactation: 'Contraindicado',
      lactationNotes: 'Causa letargia severa en el lactante.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación y somnolencia diurna', 'Letargia cognitiva', 'Ataxia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperactividad paradójica en niños', 'Deficiencia de ácido fólico con anemia megaloblástica', 'Osteomalacia por aclaramiento acelerado de vitamina D'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Coma barbitúrico', 'Depresión respiratoria fatal', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-fen-1', interactingSubstance: 'Anticonceptivos orales, Warfarina, Antirretrovirales, Estatinas', severity: 'Mayor', clinicalEffect: 'Aceleración drástica del metabolismo hepático de estos fármacos anulando su eficacia clínica (embarazos no deseados, trombosis).', recommendation: 'Ajustar dosis o cambiar a métodos anticonceptivos no hormonales / otros fármacos.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-pentobarbital',
    name: 'Pentobarbital',
    brandNames: ['Nembutal', 'Pentothal sódico'],
    atcCode: 'N05CA01',
    description: 'Barbitúrico de acción intermedia a corta con marcado poder depresor cerebral, empleado en sedación profunda e inducción de coma terapéutico en cuidados intensivos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-pnb-1', form: 'Solución inyectable en viales', concentration: '50 mg / ml', route: 'Intravenosa', packaging: 'Vial de 20 ml y 50 ml', excipients: 'Propilenglicol, alcohol' }
    ],
    mechanismOfAction: {
      summary: 'Depresión generalizada de la actividad cerebral por apertura directa de canales de cloruro GABA-A.',
      detailed: 'Suprime la tasa metabólica cerebral de oxígeno (CMRO2) y el flujo sanguíneo cerebral, reduciendo la presión intracraneal en traumatismos craneales severos.',
      targetReceptor: 'Receptor GABA-A',
      keyPoints: ['Inductor de coma barbitúrico en UCI', 'Monitoreo estricto con electroencefalograma continuo (búsqueda de patrón brote-supresión)', 'Produce hipotensión por vasodilatación y depresión miocárdica']
    },
    indications: {
      approved: ['Hipertensión intracraneal refractaria secundaria a traumatismo craneoencefálico grave', 'Estatus epiléptico superrefractario en UCI', 'Sedación preanestésica urgente']
    },
    dosageAndPosology: {
      adults: 'Coma barbitúrico en UCI: Carga de 5 a 15 mg/kg IV en 1 a 2 horas, seguido de infusión de 0.5 a 3 mg/kg/h con ventilación mecánica asistida obligatoria.',
      pediatric: 'UCIP: Carga de 2 a 5 mg/kg IV lenta.',
      renalAdjustment: 'Reducir dosis de infusión.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Intravenosa', 'Intramuscular'],
      administrationNotes: 'Exclusivamente en Unidades de Cuidados Intensivos bajo intubación orotraqueal y soporte hemodinámico.'
    },
    safety: {
      contraindications: ['Porfiria intermitente aguda', 'Hipotensión no corregida'],
      warnings: ['Depresión miocárdica grave y colapso cardiovascular que requiere vasopresores'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno.',
      lactation: 'Contraindicado',
      lactationNotes: 'No usar.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipotensión arterial severa', 'Apnea inmediata', 'Depresión miocárdica'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Paro cardíaco', 'Íleo paralítico'] }
    ],
    interactions: [
      { id: 'int-pnb-1', interactingSubstance: 'Anestésicos generales y sedantes', severity: 'Contraindicada', clinicalEffect: 'Colapso cardiovascular profundo aditivo.', recommendation: 'Monitoreo invasivo de presión arterial arterial continua.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-tiopental',
    name: 'Tiopental Sódico',
    brandNames: ['Tiopental Braun', 'Pentothal', 'Trapanal'],
    atcCode: 'N01AF03',
    description: 'Tiobarbitúrico de acción ultracorta (inicio en 30 segundos, duración 5 a 10 minutos por redistribución muscular y adiposa). Anestésico intravenoso de inducción rápida clásica.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-ansioliticos'],
    presentations: [
      { id: 'p-tio-1', form: 'Polvo liofilizado para solución inyectable IV', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial de vidrio con carbonato de sodio para reconstituir', excipients: 'Carbonato anhidro de sodio (pH muy alcalino > 10)' }
    ],
    mechanismOfAction: {
      summary: 'Depresión anestésica ultrarrápida del sistema reticular activador ascendente mediada por GABA-A.',
      detailed: 'Alta liposolubilidad que le permite cruzar instantáneamente la barrera hematoencefálica. La recuperación de la conciencia en 5-10 minutos no se debe a su metabolismo (que es lento, semivida de 11 horas), sino a la rápida REDISTRIBUCIÓN física del cerebro hacia músculo esquelético y tejido adiposo. Disminuye radicalmente el consumo metabólico cerebral de oxígeno y la presión intracraneal.',
      targetReceptor: 'Receptor GABA-A y canales de potasio neuronales',
      keyPoints: ['Inducción anestésica en 15 a 30 segundos', 'Poderoso neuroprotector cerebral en isquemia aguda', 'Extremadamente alcalino (pH 10.5): extravasación causa necrosis tisular gangrenosa']
    },
    indications: {
      approved: ['Inducción rápida de la anestesia general', 'Estatus epiléptico refractario convulsivo en UCI', 'Reducción inmediata de la presión intracraneal en neurocirugía'],
      offLabel: ['Hipnosis médica controlada']
    },
    dosageAndPosology: {
      adults: 'Inducción anestésica: 3 a 5 mg/kg IV en inyección lenta durante 20-30 segundos en adultos sanos. Estatus epiléptico: Carga de 2 a 4 mg/kg IV, luego infusión continua.',
      pediatric: 'Inducción: 5 a 6 mg/kg IV.',
      renalAdjustment: 'Reducir dosis inicial por menor unión a proteínas plasmáticas.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Intravenosa'],
      administrationNotes: 'Vía IV exclusiva. Verificar permeabilidad absoluta de la vía venosa antes de inyectar. Prohibida la administración intraarterial (produce espasmo vascular severo y gangrena de extremidad).'
    },
    safety: {
      contraindications: ['Porfiria aguda intermitente', 'Status asmaticus activo (libera histamina y desencadena broncoespasmo grave)', 'Hipotensión severa o shock descompensado'],
      warnings: ['Inyección intraarterial accidental o extravasación produce necrosis tisular grave'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Pasa a circulación fetal; deprime el SNC neonatal.',
      lactation: 'Precaución',
      lactationNotes: 'Reanudar lactancia 24 horas después.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Apnea transitoria posinducción', 'Hipotensión arterial', 'Tos y laringoespasmo'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Broncoespasmo anafilactoide severo', 'Necrosis gangrenosa por inyección intraarterial o extravasación'] }
    ],
    interactions: [
      { id: 'int-tio-1', interactingSubstance: 'Bloqueadores neuromusculares no despolarizantes y opioides', severity: 'Mayor', clinicalEffect: 'Potenciación del colapso hemodinámico.', recommendation: 'Ajustar dosis anestésicas.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 2.5. ANTIDEPRESIVOS Y ESTABILIZADORES ---
  {
    id: 'med-fenelzina',
    name: 'Fenelzina',
    brandNames: ['Nardil'],
    atcCode: 'N06AF03',
    description: 'Inhibidor irreversible no selectivo de la monoaminooxidasa (IMAO) derivado de la hidrazina. Antidepresivo reservado para cuadros atípicos o refractarios.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-fnz-1', form: 'Comprimidos recubiertos', concentration: '15 mg', route: 'Oral', packaging: 'Frasco x 60 comprimidos', excipients: 'Manitol, almidón' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición irreversible de las isoenzimas monoaminooxidasa A y B (MAO-A y MAO-B).',
      detailed: 'Forma una unión covalente irreversible con el grupo prostético FAD de la MAO-A y MAO-B mitocondrial en terminaciones nerviosas presinápticas y pared intestinal. Esto impide la degradación oxidativa de serotonina, noradrenalina y dopamina, aumentando masivamente sus reservas citoplasmáticas. Para recuperar la actividad enzimática el organismo requiere sintetizar de novo nuevas enzimas (14 días).',
      targetReceptor: 'Monoaminooxidasa A y B (Inhibición suicida irreversible)',
      keyPoints: ['Eficaz en depresión atípica con hipersomnia e hiperfagia', 'Riesgo crítico de crisis hipertensiva mortal por alimentos ricos en tiramina ("efecto queso")', 'Periodo de lavado obligatorio de 14 días al cambiar de fármaco']
    },
    indications: {
      approved: ['Trastorno depresivo mayor refractario con rasgos atípicos', 'Fobia social y trastorno de pánico resistente a tratamientos de primera línea']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 15 mg tres veces al día (45 mg/día), pudiendo aumentar hasta 60 a 90 mg/día en depresión severa. Reducir gradualmente.',
      pediatric: 'Contraindicado en menores de 18 años.',
      renalAdjustment: 'Usar con cautela.',
      hepaticAdjustment: 'Contraindicado en insuficiencia hepática.',
      routes: ['Oral'],
      administrationNotes: 'DIETA ESTRICTA LIBRE DE TIRAMINA (prohibidos quesos curados, carnes fermentadas, embutidos, vinos tintos, cerveza, extractos de levadura, soja y habas).'
    },
    safety: {
      contraindications: ['Feocromocitoma', 'Insuficiencia hepática o antecedentes de enfermedad hepatocelular', 'Cardiopatía isquémica o hipertensión no controlada', 'Uso concomitante con otros antidepresivos, dextrometorfano, meperidina o simpaticomiméticos'],
      warnings: ['Crisis hipertensiva hiperadrenérgica mortal con ingesta de tiramina', 'Síndrome serotoninérgico mortal'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo.',
      lactation: 'Contraindicado',
      lactationNotes: 'No usar.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de crisis hipertensiva fatal con tiramina y riesgo de ideación suicida en jóvenes.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipotensión ortostática severa', 'Mareos', 'Sequedad de boca'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Insomnio', 'Aumento de peso', 'Edema periférico'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Crisis hipertensiva intracraneal con hemorragia cerebral', 'Hepatotoxicidad fulminante'] }
    ],
    interactions: [
      { id: 'int-fnz-1', interactingSubstance: 'Alimentos con Tiramina o Simpaticomiméticos (Pseudoefedrina)', severity: 'Contraindicada', clinicalEffect: 'Crisis hipertensiva maligna aguda con ictus hemorrágico o infarto.', recommendation: 'Dieta rigurosa y evitar descongestionantes nasales.' },
      { id: 'int-fnz-2', interactingSubstance: 'ISRS, ISRN o Meperidina', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico fulminante potencialmente mortal.', recommendation: 'Respetar 14 días de lavado previo o 5 semanas tras fluoxetina.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-imipramina',
    name: 'Imipramina',
    brandNames: ['Tofranil', 'Elepsin'],
    atcCode: 'N06AA02',
    description: 'Antidepresivo tricíclico (ATC) dibenzoazepina de referencia. Potente inhibidor de la recaptura de serotonina y noradrenalina con marcado efecto anticolinérgico y sedante.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-imi-1', form: 'Grageas / comprimidos recubiertos', concentration: '10 mg, 25 mg y 75 mg', route: 'Oral', packaging: 'Caja x 30 y 60 grageas', excipients: 'Sacarosa, lactosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de transportadores de recaptura SERT y NET, con bloqueo muscarínico, alfa-1 adrenérgico e histaminérgico H1.',
      detailed: 'Bloquea los transportadores presinápticos de recaptación de serotonina (SERT) y noradrenalina (NET) incrementando sus concentraciones en la hendidura sináptica. Su potente antagonismo competitivo sobre receptores muscarínicos M1 (boca seca, visión borrosa, retención urinaria), alfa-1 adrenérgicos (hipotensión ortostática) y canales de sodio miocárdicos explica su toxicidad cardíaca en sobredosis.',
      targetReceptor: 'SERT, NET, receptores Muscarínicos M1, Alfa-1 y canales Nav1.5',
      keyPoints: ['Toxicidad cardíaca mortal en sobredosis por bloqueo de canales de sodio (prolongación de QRS > 100 ms)', 'Tratamiento clásico para enuresis nocturna en niños (efecto anticolinérgico sobre detrusor)', 'Antídoto en sobredosis: Bicarbonato de sodio intravenoso']
    },
    indications: {
      approved: ['Trastorno depresivo mayor resistente a ISRS', 'Enuresis nocturna primaria en niños mayores de 6 años', 'Trastorno de pánico con o sin agorafobia'],
      offLabel: ['Dolor neuropático periférico y fibromialgia']
    },
    dosageAndPosology: {
      adults: 'Depresión: Iniciar con 25 a 50 mg/día en toma nocturna, aumentando progresivamente hasta 100 a 150 mg/día (máximo 200 a 300 mg/día en hospitalización).',
      pediatric: 'Enuresis nocturna (≥ 6 años): 25 mg antes de acostarse; si > 35 kg hasta 50 mg.',
      renalAdjustment: 'Usar con precaución.',
      hepaticAdjustment: 'Reducir dosis a la mitad.',
      routes: ['Oral'],
      administrationNotes: 'Realizar ECG basal antes de iniciar tratamiento en pacientes con riesgo cardiovascular.'
    },
    safety: {
      contraindications: ['Fase de recuperación aguda tras infarto de miocardio reciente', 'Bloqueo auriculoventricular de cualquier grado o arritmias cardíacas', 'Glaucoma de ángulo estrecho no tratado e hipertrofia prostática con retención urinaria', 'Uso concomitante con IMAO'],
      warnings: ['Cardiotoxicidad mortal en sobredosis (arritmias ventriculares refractarias)', 'Hipotensión postural y riesgo de caídas'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado en gestación.',
      lactation: 'Precaución',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Aumento de riesgo de suicidio en niños y adultos jóvenes y cardiotoxicidad letal en sobredosis.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sequedad de boca intensa', 'Estreñimiento', 'Visión borrosa por cicloplejía', 'Hipotensión ortostática', 'Sudoración'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Taquicardia sinusal', 'Retención urinaria', 'Aumento de peso'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Arritmias ventriculares malignas (torsades, fibrilación ventricular)', 'Convulsiones epileptógenas'] }
    ],
    interactions: [
      { id: 'int-imi-1', interactingSubstance: 'Inhibidores de la MAO', severity: 'Contraindicada', clinicalEffect: 'Hiperpirexia maligna, convulsiones severas, coma y muerte.', recommendation: 'Esperar 14 días entre tratamientos.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-amitriptilina',
    name: 'Amitriptilina',
    brandNames: ['Triptizol', 'Deprelio', 'Elavil', 'Mutabase'],
    atcCode: 'N06AA09',
    description: 'Antidepresivo tricíclico con marcada acción sedante, hipnótica y analgésica central de primera línea en dolor neuropático crónico y profilaxis de migraña.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-ami-1', form: 'Comprimidos recubiertos', concentration: '10 mg, 25 mg, 50 mg y 75 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición potente de la recaptura de serotonina y noradrenalina y modulación de las vías analgésicas descendentes del asta dorsal medular.',
      detailed: 'Aumenta la disponibilidad de monoaminas en el SNC. Su potente efecto analgésico en dolor neuropático ocurre a dosis mucho menores que las antidepresivas (10-50 mg/día frente a 150 mg/día) debido a la potenciación de los sistemas inhibidores del dolor en el asta posterior de la médula espinal y al bloqueo de canales de sodio y NMDA.',
      targetReceptor: 'SERT, NET, receptores H1 (sedación), Muscarínicos M1 y canales Nav',
      keyPoints: ['Estándar de oro farmacológico para dolor neuropático periférico y neuropatía diabética', 'Tratamiento profiláctico de primera línea en cefalea tensional crónica y migraña', 'Efecto sedante profundo beneficioso en insomnio con dolor crónico']
    },
    indications: {
      approved: ['Tratamiento del dolor neuropático periférico (neuropatía diabética dolorosa, neuralgia posherpética)', 'Profilaxis de la migraña y cefalea de tipo tensional crónica', 'Tratamiento del trastorno depresivo mayor en adultos'],
      offLabel: ['Fibromialgia y síndrome de intestino irritable']
    },
    dosageAndPosology: {
      adults: 'Dolor neuropático y profilaxis de migraña: Iniciar con 10 a 25 mg una vez al día por la noche antes de acostarse. Titular cada 1-2 semanas hasta 50 a 75 mg/día. Depresión mayor: 75 a 150 mg/día.',
      pediatric: 'No recomendado en menores de 18 años para depresión; para profilaxis de migraña en niños ≥ 12 años bajo especialista.',
      renalAdjustment: 'No precisa ajuste en fallo renal.',
      hepaticAdjustment: 'Reducir dosis a la mitad.',
      routes: ['Oral'],
      administrationNotes: 'Tomar exclusivamente por la noche 1 o 2 horas antes de dormir por su fuerte somnolencia inicial.'
    },
    safety: {
      contraindications: ['Infarto de miocardio reciente', 'Arritmias cardíacas o bloqueo cardíaco', 'Uso concomitante con IMAO', 'Glaucoma de ángulo cerrado'],
      warnings: ['Prolongación del intervalo QTc y riesgo de arritmias ventriculares en sobredosis', 'Efectos anticolinérgicos marcados en ancianos (confusión, caídas, retención urinaria)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en el embarazo.',
      lactation: 'Compatible',
      lactationNotes: 'Baja concentración en leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación intensa matutina ("resaca")', 'Boca seca', 'Estreñimiento', 'Aumento de peso y apetito'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Visión borrosa', 'Mareos', 'Taquicardia', 'Hipotensión postural'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Arritmias ventriculares (Torsades de Pointes)', 'Íleo paralítico', 'Golpe de calor por anhidrosis'] }
    ],
    interactions: [
      { id: 'int-ami-1', interactingSubstance: 'Tramadol', severity: 'Mayor', clinicalEffect: 'Aumento severo del riesgo de convulsiones y síndrome serotoninérgico.', recommendation: 'Evitar la asociación o extremar la monitorización.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-venlafaxina',
    name: 'Venlafaxina',
    brandNames: ['Vandral Retard', 'Dobupal', 'Effexor XR', 'Zarelis'],
    atcCode: 'N06AX16',
    description: 'Antidepresivo heterocíclico inhibidor dual de la recaptura de serotonina y noradrenalina (IRSN) de acción secuencial dosis-dependiente.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-ven-1', form: 'Cápsulas de liberación prolongada (Retard)', concentration: '37.5 mg, 75 mg y 150 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas', excipients: 'Microgránulos de liberación prolongada, gelatina' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición potente de la recaptura de serotonina a dosis bajas e inhibición dual noradrenérgica a dosis moderadas-altas.',
      detailed: 'A dosis ≤ 75 mg/día actúa predominantemente como un inhibidor de la recaptura de serotonina (SERT). A dosis ≥ 150-225 mg/día recluta la inhibición del transportador de noradrenalina (NET) y a dosis más altas ejerce ligera inhibición de dopamina. Carece de afinidad significativa por receptores colinérgicos muscarínicos o histaminérgicos H1.',
      targetReceptor: 'SERT (dosis bajas) y NET (dosis altas)',
      keyPoints: ['Efecto dual serotoninérgico y noradrenérgico', 'Puede provocar elevación de la presión arterial sistólica y diastólica dosis-dependiente', 'Síndrome de discontinuación intenso si se suspende bruscamente']
    },
    indications: {
      approved: ['Trastorno depresivo mayor y prevención de recaídas', 'Trastorno de ansiedad generalizada (TAG)', 'Trastorno de ansiedad social (fobia social) y trastorno de pánico'],
      offLabel: ['Dolor neuropático periférico y prevención de sofocos vasomotores en cáncer de mama']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 75 mg/día en formulación retard una vez al día con la comida. En depresión grave se puede titular hasta 150 a 225 mg/día (máximo 375 mg/día en pacientes hospitalizados).',
      pediatric: 'Contraindicado en menores de 18 años.',
      renalAdjustment: 'FG 30-50 ml/min: reducir dosis 25-50%. FG < 30 ml/min: reducir 50%.',
      hepaticAdjustment: 'Reducir dosis 50% en insuficiencia hepática moderada.',
      routes: ['Oral'],
      administrationNotes: 'Tomar entera con comida aproximadamente a la misma hora cada día. Retirar de forma muy paulatina.'
    },
    safety: {
      contraindications: ['Uso concomitante con IMAO', 'Hipertensión arterial no controlada grave'],
      warnings: ['Control tensional obligatorio: puede inducir hipertensión arterial persistente', 'Síndrome de retirada con mareos intensos ("descargas eléctricas cerebrales" / brain zaps) ante omisión de dosis'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Riesgo de hipertensión pulmonar persistente neonatal si se usa en 3er trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Náuseas (al inicio del tratamiento)', 'Sequedad de boca', 'Sudoración nocturna intensa', 'Insomnio'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipertensión arterial', 'Disfunción sexual (anorgasmia, retraso eyaculatorio)', 'Anorexia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome serotoninérgico', 'Hiponatremia por SIADH'] }
    ],
    interactions: [
      { id: 'int-ven-1', interactingSubstance: 'Inhibidores de la MAO', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico potencialmente mortal.', recommendation: 'Esperar 14 días tras suspender IMAO y 7 días tras venlafaxina.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-amoxapina',
    name: 'Amoxapina',
    brandNames: ['Asendin', 'Defanyl'],
    atcCode: 'N06AA17',
    description: 'Antidepresivo heterocíclico dibenzoxazepina, metabolito activo de la loxapina, con propiedades antidepresivas y antipsicóticas simultáneas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-amx-1', form: 'Comprimidos orales', concentration: '25 mg, 50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la recaptura de noradrenalina combinada con antagonismo del receptor dopaminérgico D2 postsináptico.',
      detailed: 'Bloquea la recaptación de noradrenalina y en menor medida de serotonina. Su metabolito 7-hidroxiamoxapina ejerce un potente bloqueo de los receptores dopaminérgicos D2 en la vía mesolímbica y nigroestriada, otorgándole eficacia en depresiones psicóticas pero confiriéndole riesgo de síntomas extrapiramidales.',
      targetReceptor: 'NET, SERT y receptor Dopaminérgico D2',
      keyPoints: ['Único antidepresivo que puede causar parkinsonismo y discinesia tardía por bloqueo D2', 'Rápido inicio de acción terapéutica (4 a 7 días)', 'Fármaco de elección en depresión psicótica mayor con delirios']
    },
    indications: {
      approved: ['Trastorno depresivo mayor con síntomas psicóticos (delirios, alucinaciones congruentes)', 'Depresión endógena refractaria']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 50 mg 2 a 3 veces al día (100-150 mg/día). Puede aumentarse gradualmente hasta 300 mg/día (máximo 400 mg/día en pacientes ingresados).',
      pediatric: 'No recomendado en menores de 16 años.',
      renalAdjustment: 'Usar con cautela.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con alimentos. Vigilar temblor o rigidez muscular.'
    },
    safety: {
      contraindications: ['Infarto de miocardio reciente', 'Uso concomitante con IMAO', 'Glaucoma de ángulo cerrado'],
      warnings: ['Riesgo de discinesia tardía irreversible y síndrome neuroléptico maligno por bloqueo dopaminérgico D2'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en gestación.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación', 'Boca seca', 'Estreñimiento'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Síntomas extrapiramidales (acatisia, temblor, rigidez)', 'Galactorrea e hiperprolactinemia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Discinesia tardía irreversible', 'Síndrome neuroléptico maligno'] }
    ],
    interactions: [
      { id: 'int-amx-1', interactingSubstance: 'Antipsicóticos clásicos (Haloperidol)', severity: 'Mayor', clinicalEffect: 'Aumento sinérgico masivo del bloqueo dopaminérgico con distonías agudas y parkinsonismo grave.', recommendation: 'Evitar combinar sin monitorización psiquiátrica estricta.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-trazodona',
    name: 'Trazodona',
    brandNames: ['Deprax', 'Trittico', 'Desyrel'],
    atcCode: 'N06AX05',
    description: 'Antidepresivo heterocíclico perteneciente a la familia de los moduladores serotoninérgicos (SARI) con profundo efecto hipnótico inductor del sueño que preserva la arquitectura del sueño profundo.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos', 'c-ansioliticos'],
    presentations: [
      { id: 'p-trz-1', form: 'Comprimidos ranurados divisibles', concentration: '100 mg (ranura doble para fraccionar en 25, 50, 75 o 100 mg)', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Sacarosa, celulosa' }
    ],
    mechanismOfAction: {
      summary: 'Antagonismo potente de receptores 5-HT2A y 5-HT2C con inhibición moderada de la recaptura de serotonina y bloqueo alfa-1/H1.',
      detailed: 'A dosis bajas (25 a 100 mg) actúa principalmente como un potente antagonista de receptores serotoninérgicos 5-HT2A, histamínicos H1 y adrenérgicos alfa-1, produciendo una inducción fisiológica del sueño sin tolerancia ni dependencia. A dosis más elevadas (150 a 300 mg) inhibe el transportador SERT logrando efecto antidepresivo.',
      targetReceptor: 'Receptor 5-HT2A (antagonismo) y transportador SERT',
      keyPoints: ['No produce adicción ni tolerancia en insomnio crónico', 'Aumenta las fases 3 y 4 del sueño profundo no REM sin deprimir el sueño REM', 'Riesgo raro pero grave de priapismo urológico por bloqueo alfa-adrenérgico']
    },
    indications: {
      approved: ['Trastornos depresivos con o sin ansiedad e insomnio asociado', 'Insomnio crónico en pacientes con antecedentes de adicción o ancianos'],
      offLabel: ['Agitación nocturna y agresividad en demencia / Alzheimer']
    },
    dosageAndPosology: {
      adults: 'Insomnio crónico / coadyuvante: 25 a 100 mg una vez al día por la noche antes de dormir. Depresión mayor: 150 a 300 mg/día divididos (máximo 400 mg/día).',
      pediatric: 'No recomendado en menores de 18 años.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral'],
      administrationNotes: 'Tomar inmediatamente antes de acostarse con una pequeña colación para mejorar la absorción y evitar mareos.'
    },
    safety: {
      contraindications: ['Infarto de miocardio agudo reciente', 'Intoxicación etílica o por hipnóticos'],
      warnings: ['Priapismo: erección dolorosa y persistente que requiere atención urológica de emergencia inmediata para evitar necrosis y disfunción eréctil permanente', 'Hipotensión ortostática'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar solo si es estrictamente necesario.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Somnolencia intensa al despertar', 'Mareo postural', 'Boca seca'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Cefalea', 'Congestión nasal', 'Náuseas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Priapismo urológico agudo', 'Arritmias cardíacas', 'Hipotensión severa'] }
    ],
    interactions: [
      { id: 'int-trz-1', interactingSubstance: 'Fármacos antihipertensivos', severity: 'Moderada', clinicalEffect: 'Hipotensión sinérgica pronunciada por bloqueo alfa-1 adrenérgico.', recommendation: 'Monitorizar presión arterial y fraccionar dosis nocturna.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-fluoxetina',
    name: 'Fluoxetina',
    brandNames: ['Prozac', 'Adofen', 'Reneuron', 'Sarafem'],
    atcCode: 'N06AB03',
    description: 'Inhibidor selectivo de la recaptura de serotonina (ISRS) prototípico con semivida plasmática sumamente prolongada (metabolito norfluoxetina de hasta 7-15 días). Efecto ligeramente activador.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-flx-1', form: 'Cápsulas y comprimidos dispersables', concentration: '20 mg', route: 'Oral', packaging: 'Caja x 14, 28 y 56 cápsulas', excipients: 'Almidón de maíz, dimeticona' },
      { id: 'p-flx-2', form: 'Solución oral', concentration: '20 mg / 5 ml (4 mg/ml)', route: 'Oral', packaging: 'Frasco de 70 ml con dosificador', excipients: 'Sacarosa, ácido benzoico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición selectiva del transportador presináptico de recaptura de serotonina (SERT) con leve antagonismo 5-HT2C.',
      detailed: 'Bloquea selectivamente el transportador SERT evitando la recaptura de 5-HT en la hendidura sináptica. Su débil antagonismo sobre receptores 5-HT2C promueve la liberación de noradrenalina y dopamina en corteza prefrontal, confiriéndole un perfil energizante y desinhibidor.',
      targetReceptor: 'Transportador SERT y receptor 5-HT2C',
      keyPoints: ['Semivida de 4 a 6 días y metabolito activo norfluoxetina de hasta 16 días', 'No produce síndrome de discontinuación por retirada brusca gracias a su auto-lavado lento', 'Potente inhibidor del citocromo CYP2D6']
    },
    indications: {
      approved: ['Episodios depresivos mayores en adultos y niños ≥ 8 años (combinado con psicoterapia)', 'Trastorno obsesivo compulsivo (TOC)', 'Bulimia nerviosa (reducción de atracones y purgas)', 'Trastorno disfórico premenstrual'],
      offLabel: ['Tricotilomanía']
    },
    dosageAndPosology: {
      adults: 'Depresión y TOC: Iniciar con 20 mg/día por la mañana. Se puede titular tras 3-4 semanas hasta 40-60 mg/día. Bulimia nerviosa: 60 mg/día.',
      pediatric: 'Niños ≥ 8 años: Iniciar con 10 mg/día (titular a 20 mg/día).',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis o administrar en días alternos por larga semivida.',
      routes: ['Oral'],
      administrationNotes: 'Tomar por la mañana con el desayuno para evitar interferir con el sueño nocturno.'
    },
    safety: {
      contraindications: ['Uso con IMAO (esperar 5 semanas tras suspender fluoxetina antes de iniciar un IMAO)', 'Uso concomitante con pimozida'],
      warnings: ['Incremento inicial transitorio de ansiedad o inquietud psicomotriz en las primeras 2 semanas', 'Disfunción sexual (pérdida de libido, anorgasmia) en hasta un 40% de pacientes'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uso aceptable cuando los beneficios superan los riesgos.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche; preferir sertralina durante la lactancia.',
      controlledSubstance: false,
      blackBoxWarning: 'Aumento del riesgo de ideación suicida en niños, adolescentes y adultos jóvenes (< 24 años) en etapas iniciales.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Insomnio', 'Náuseas', 'Diarrea', 'Cefalea', 'Fatiga'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Ansiedad transitoria', 'Anorexia y pérdida ponderal leve', 'Disfunción eréctil y anorgasmia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome serotoninérgico', 'Hiponatremia por SIADH', 'Hemorragias cutáneas anormales'] }
    ],
    interactions: [
      { id: 'int-flx-1', interactingSubstance: 'Inhibidores de la MAO', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico fulminante letal.', recommendation: 'Esperar un mínimo de 5 SEMANAS tras suspender fluoxetina antes de administrar un IMAO.' },
      { id: 'int-flx-2', interactingSubstance: 'Tamoxifeno', severity: 'Contraindicada', clinicalEffect: 'La fluoxetina inhibe intensamente el CYP2D6 impidiendo la activación de tamoxifeno a endoxifeno, reduciendo la supervivencia en cáncer de mama.', recommendation: 'Evitar combinación; preferir venlafaxina o escitalopram.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-sertralina',
    name: 'Sertralina',
    brandNames: ['Besitran', 'Aremis', 'Zoloft', 'Aseren'],
    atcCode: 'N06AB06',
    description: 'Inhibidor selectivo de la recaptura de serotonina de referencia clínica con leve inhibición del transportador de dopamina (DAT). Es el antidepresivo con mejor perfil de seguridad cardiovascular y de elección en lactancia.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-ser-1', form: 'Comprimidos ranurados', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato, hipromelosa' },
      { id: 'p-ser-2', form: 'Concentrado para solución oral', concentration: '20 mg / ml', route: 'Oral', packaging: 'Frasco gotero de 60 ml con pipeta graduada', excipients: 'Glicerol, etanol' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición potente y altamente selectiva de la recaptura de serotonina con leve inhibición del transportador de dopamina.',
      detailed: 'Bloquea el transportador SERT con una afinidad superior a casi todos los demás ISRS. Posee una ligera inhibición del transportador de dopamina (DAT), lo que contribuye a mejorar la apatía, anhedonia y concentración sin inducir ansiedad severa.',
      targetReceptor: 'Transportador SERT y transportador DAT',
      keyPoints: ['Antidepresivo de primera elección en pacientes cardiópatas (estudio SADHART: seguro tras infarto agudo)', 'Fármaco de elección estándar de oro durante la lactancia materna por excreción insignificante', 'Bajo potencial de interacciones enzimáticas citocromo P450 comparado con fluoxetina']
    },
    indications: {
      approved: ['Trastorno depresivo mayor y prevención de recaídas', 'Trastorno de angustia (pánico) con o sin agorafobia', 'Trastorno obsesivo compulsivo (TOC) en adultos y niños ≥ 6 años', 'Trastorno de ansiedad social y trastorno por estrés postraumático (TEPT)'],
      offLabel: ['Trastorno disfórico premenstrual']
    },
    dosageAndPosology: {
      adults: 'Depresión y TOC: Iniciar con 50 mg/día por la mañana o noche con comida. Puede incrementarse tras 2-4 semanas a razón de 50 mg hasta 150-200 mg/día. Trastorno de pánico y TEPT: Iniciar con 25 mg/día por 1 semana, luego 50 mg/día.',
      pediatric: 'TOC en niños (6-12 años): Iniciar con 25 mg/día; adolescentes (13-17 años): 50 mg/día.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis o duplicar intervalo entre tomas en insuficiencia hepática.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con alimentos para aumentar su biodisponibilidad y reducir náuseas.'
    },
    safety: {
      contraindications: ['Uso concomitante con IMAO', 'Uso concomitante con pimozida'],
      warnings: ['Riesgo de sangrado digestivo aumentado si se asocia con AINEs o aspirina'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uno de los antidepresivos con mayor evidencia de seguridad en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Antidepresivo de primera elección absoluto durante la lactancia materna (niveles plasmáticos en el lactante indetectables).',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Náuseas', 'Diarrea / deposiciones blandas', 'Insomnio', 'Cefalea', 'Eyaculación retardada'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Boca seca', 'Temblor', 'Anorexia', 'Palpitaciones'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome serotoninérgico', 'Hepatitis aguda', 'Prolongación del QT'] }
    ],
    interactions: [
      { id: 'int-ser-1', interactingSubstance: 'Inhibidores de la MAO', severity: 'Contraindicada', clinicalEffect: 'Síndrome serotoninérgico mortal.', recommendation: 'Esperar 14 días tras suspender sertralina antes de iniciar IMAO.' },
      { id: 'int-ser-2', interactingSubstance: 'AINEs o Antiagregantes', severity: 'Moderada', clinicalEffect: 'Aumento del riesgo de hemorragia gastrointestinal por depleción de serotonina intraplaquetaria.', recommendation: 'Añadir IBP de protección.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-litio',
    name: 'Carbonato de Litio',
    brandNames: ['Plenur', 'Lithobid', 'Eskalith'],
    atcCode: 'N05AN01',
    description: 'Catión monovalente inorgánico estabilizador del estado de ánimo de primera línea en trastorno bipolar y único fármaco con efecto protector antisuicida comprobado.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidepresivos'],
    presentations: [
      { id: 'p-lit-1', form: 'Comprimidos de liberación prolongada', concentration: '400 mg (equivalente a 10.8 mEq de litio)', route: 'Oral', packaging: 'Caja x 50 y 100 comprimidos', excipients: 'Carmelosa sódica, hipromelosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la inositol monofosfatasa (IMPasa) y de la glucógeno sintasa quinasa-3 (GSK-3beta).',
      detailed: 'Sustituye al catión sodio en los canales iónicos neuronales. Agota el inositol intracelular inhibiendo la enzima inositol monofosfatasa, atenuando la cascada de señalización del fosfatidilinositol y la hiperactividad neuronal en manía. Inhibe la enzima glucógeno sintasa quinasa 3 (GSK-3beta), promoviendo la neuroplasticidad y supervivencia celular en el hipocampo y corteza prefrontal.',
      targetReceptor: 'Inositol Monofosfatasa (IMPasa) y GSK-3beta',
      keyPoints: ['ESTRECHO MARGEN TERAPÉUTICO (Litemia óptima: 0.6 a 1.0 mEq/L en mantenimiento; 0.8 a 1.2 mEq/L en manía aguda)', 'Toxicidad grave con litemias > 1.5 mEq/L; riesgo vital > 2.5 mEq/L', 'Efecto neuroprotector y antisuicida específico comprobado epidemiológicamente']
    },
    indications: {
      approved: ['Tratamiento y prevención de episodios maníacos y depresivos en el Trastorno Afectivo Bipolar (TAB tipo I y II)', 'Potenciación de antidepresivos en depresión unipolar resistente'],
      offLabel: ['Cefalea en racimos crónica refractaria']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 400 mg a 800 mg/día en dosis nocturna o dividida cada 12 horas. Medir litemia sérica exacta a los 5-7 días (extraer sangre a las 12 horas exactas de la última toma). Ajustar hasta litemia de 0.6 - 1.0 mEq/L.',
      pediatric: 'Uso en niños ≥ 12 años con trastorno bipolar bajo monitorización estricta.',
      renalAdjustment: 'FG 10-50 ml/min: reducir dosis 25-50%. FG < 10 ml/min: evitar o hemodiálisis.',
      hepaticAdjustment: 'No sufre metabolismo hepático (eliminación 100% renal intacto).',
      routes: ['Oral'],
      administrationNotes: 'El paciente debe mantener una ingesta hídrica abundante y constante de agua (2 a 3 litros/día) y NUNCA restringir la sal en su dieta.'
    },
    safety: {
      contraindications: ['Insuficiencia renal moderada a grave', 'Enfermedad cardiovascular grave o síndrome del seno enfermo', 'Hiponatremia o deshidratación severa', 'Embarazo en primer trimestre (anomalía de Ebstein)'],
      warnings: ['Toxicidad por deshidratación: vómitos, diarrea, fiebre o sudoración disparan la litemia a niveles tóxicos', 'Hipotiroidismo inducido por litio (controlar TSH semestral)', 'Diabetes insípida nefrogénica'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno: anomalía de Ebstein en la válvula tricúspide cardíaca fetal.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche causando hipotermia, hipotonía y cianosis en el lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Toxicidad estrechamente relacionada con los niveles séricos; requiere monitorización obligatoria de litemia.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Temblor fino distal de manos', 'Poliuria y polidipsia (diabetes insípida nefrogénica)', 'Aumento de peso', 'Náuseas'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipotiroidismo y bocio eutiroideo', 'Acneiformes cutáneos', 'Diarrea leve'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Intoxicación grave (ataxia, temblor grosero, mioclonías, coma, convulsiones)', 'Fibrosis intersticial renal crónica'] }
    ],
    interactions: [
      { id: 'int-lit-1', interactingSubstance: 'AINEs (Ibuprofeno, Indometacina, Naproxeno)', severity: 'Contraindicada', clinicalEffect: 'Disminución de la síntesis renal de prostaglandinas que reduce la depuración de litio elevando la litemia un 40-60% con intoxicación aguda.', recommendation: 'Evitar AINEs; preferir paracetamol como analgésico de elección.' },
      { id: 'int-lit-2', interactingSubstance: 'Diuréticos tiazídicos e IECAs / ARA-II', severity: 'Mayor', clinicalEffect: 'La natriuresis compensatoria aumenta la reabsorción proximal de litio precipitando intoxicación grave.', recommendation: 'Reducir dosis de litio al 50% y monitorizar litemia.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 6. ANTIPSICÓTICOS ---
  {
    id: 'med-clorpromazina',
    name: 'Clorpromazina',
    brandNames: ['Largactil', 'Thorazine'],
    atcCode: 'N05AA01',
    description: 'El primer antipsicótico típico de la historia (fenotiazina alifática) con marcado efecto sedante, alfa-bloqueante y anticolinérgico.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antipsicoticos'],
    presentations: [
      { id: 'p-cpz-1', form: 'Comprimidos recubiertos', concentration: '25 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos', excipients: 'Lactosa, almidón' },
      { id: 'p-cpz-2', form: 'Ampollas inyectables IM/IV', concentration: '25 mg / 5 ml', route: 'Intramuscular', packaging: 'Caja x 10 ampollas', excipients: 'Metabisulfito de sodio' },
      { id: 'p-cpz-3', form: 'Gotas orales en solución', concentration: '40 mg / ml', route: 'Oral', packaging: 'Frasco gotero de 30 ml', excipients: 'Sacarosa, etanol' }
    ],
    mechanismOfAction: {
      summary: 'Antagonismo de receptores dopaminérgicos D2 mesolímbicos, con bloqueo muscarínico, adrenérgico alfa-1 e histamínico H1.',
      detailed: 'Bloquea los receptores postsinápticos D2 en la vía mesolímbica suprimiendo los síntomas positivos de la psicosis (delirios, alucinaciones). Su bloqueo simultáneo en el hipotálamo regula la termorregulación y en el área postrema confiere potente acción antiemética y contra el hipo intratable.',
      targetReceptor: 'Receptor Dopaminérgico D2, H1, M1 y Alfa-1',
      keyPoints: ['Antipsicótico fuertemente sedante e hipotensor', 'Tratamiento de referencia para hipo incoercible refractario', 'Fotosensibilidad cutánea y depósitos pigmentarios oculares en córnea']
    },
    indications: {
      approved: ['Esquizofrenia y psicosis agudas y crónicas con agitación psicomotriz severa', 'Hipo intratable rebelde y resistente a otras terapias', 'Náuseas y vómitos inducidos por enfermedades terminales'],
      offLabel: ['Porfiria intermitente aguda (control del dolor y agitación)']
    },
    dosageAndPosology: {
      adults: 'Psicosis / Agitación: 25 a 50 mg cada 8 horas oral, titulando hasta 300 a 800 mg/día. Hipo rebelde: 25 a 50 mg 3 o 4 veces al día (o 25-50 mg IM profunda).',
      pediatric: '0.5 mg/kg cada 6-8 horas en niños mayores de 1 año.',
      renalAdjustment: 'Usar con precaución.',
      hepaticAdjustment: 'Reducir dosis a la mitad.',
      routes: ['Oral', 'Intramuscular', 'Intravenosa'],
      administrationNotes: 'Proteger la piel del sol y evitar inyección IV rápida por colapso hipotensor.'
    },
    safety: {
      contraindications: ['Coma o depresión severa del SNC por alcohol u opiáceos', 'Glaucoma de ángulo cerrado', 'Feocromocitoma'],
      warnings: ['Síndrome Neuroléptico Maligno (hipertermia extrema, rigidez en tubo de plomo, elevación de CPK)', 'Hipotensión ortostática severa con síncope'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Riesgo de síntomas extrapiramidales neonatales transitorios si se usa en 3er trimestre.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación marcada', 'Hipotensión ortostática', 'Boca seca', 'Estreñimiento'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Síntomas extrapiramidales (temblor, acatisia)', 'Hiperprolactinemia (galactorrea)', 'Fotosensibilidad'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome neuroléptico maligno', 'Agranulocitosis', 'Depósitos pigmentarios en cristalino y córnea'] }
    ],
    interactions: [
      { id: 'int-cpz-1', interactingSubstance: 'Depresores centrales y alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión profunda del SNC e hipotensión.', recommendation: 'Evitar alcohol.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-haloperidol',
    name: 'Haloperidol',
    brandNames: ['Haldol', 'Haloperidol Esteve', 'Haldol Decanoas'],
    atcCode: 'N05AD01',
    description: 'Antipsicótico típico de alta potencia perteneciente a la familia de las butirofenonas. Fármaco de primera línea para el manejo urgente del delirium agudo y agitación psicomotriz.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antipsicoticos'],
    presentations: [
      { id: 'p-hal-1', form: 'Comprimidos orales', concentration: '0.5 mg, 2 mg y 10 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-hal-2', form: 'Gotas orales en solución', concentration: '2 mg / ml (1 gota = 0.1 mg)', route: 'Oral', packaging: 'Frasco gotero de 15 ml y 30 ml', excipients: 'Ácido láctico' },
      { id: 'p-hal-3', form: 'Ampollas inyectables IM/IV', concentration: '5 mg / ml', route: 'Intramuscular', packaging: 'Caja x 5 ampollas de 1 ml', excipients: 'Ácido láctico, agua' },
      { id: 'p-hal-4', form: 'Ampollas de liberación prolongada (Decanoato)', concentration: '50 mg / ml y 100 mg / ml', route: 'Intramuscular', packaging: 'Caja x 1 ampolla mensual', excipients: 'Aceite de sésamo' }
    ],
    mechanismOfAction: {
      summary: 'Antagonismo competitivo puro de muy alta afinidad sobre receptores dopaminérgicos D2 centrales.',
      detailed: 'Bloquea potentemente los receptores dopaminérgicos D2 en la vía mesolímbica suprimiendo el delirio y la agitación. Carece casi por completo de actividad anticolinérgica o antihistamínica (poca sedación directa y poca ganancia de peso), pero su bloqueo D2 intenso en la vía nigroestriada desencadena una alta tasa de efectos extrapiramidales y distonías agudas.',
      targetReceptor: 'Receptor Dopaminérgico D2 (alta afinidad)',
      keyPoints: ['Fármaco estándar en agitación psicomotriz aguda y síndrome confusional agudo / delirium', 'Alta incidencia de distonía aguda de torsión (reversibles con biperideno)', 'Riesgo de prolongación del intervalo QT y arritmias ventriculares por vía IV']
    },
    indications: {
      approved: ['Agitación psicomotriz aguda y estados maníacos', 'Control del síndrome confusional agudo (delirium) en pacientes hospitalizados', 'Esquizofrenia aguda y crónica resistente', 'Síndrome de Gilles de la Tourette (tics motores y vocales severos)', 'Náuseas y vómitos refractarios en cuidados paliativos'],
      offLabel: ['Corea de Huntington']
    },
    dosageAndPosology: {
      adults: 'Delirium / Agitación aguda en hospital: 1 a 5 mg IM o IV lenta cada 4-8 horas según severidad (en ancianos iniciar con 0.5 a 1 mg). Esquizofrenia oral: 2 a 10 mg/día divididos (máximo 20 mg/día). Decanoato mensual: 50 a 300 mg IM cada 4 semanas.',
      pediatric: 'Tics / Tourette en niños > 3 años: 0.05 mg/kg/día.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis al 50%.',
      routes: ['Oral', 'Intramuscular', 'Intravenosa'],
      administrationNotes: 'Si se administra IV en urgencias realizar ECG basal previo por riesgo de prolongación del QTc.'
    },
    safety: {
      contraindications: ['Enfermedad de Parkinson (bloqueo dopaminérgico devastador)', 'Coma o depresión severa del SNC', 'Prolongación conocida del intervalo QTc > 500 ms'],
      warnings: ['Distonías agudas (tortícolis espasmódica, crisis oculógiras): tener biperideno ampolla disponible', 'Síndrome neuroléptico maligno (rigidez, hipertermia, inestabilidad autonómica)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en embarazo salvo estricta necesidad psiquiátrica.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Aumento de mortalidad en ancianos con psicosis relacionada con demencia y arritmias ventriculares por vía IV.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Distonía muscular aguda', 'Acatisia (inquietud motora incesante)', 'Parkinsonismo (temblor de reposo, rigidez)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperprolactinemia (amenorrea, galactorrea, ginecomastia)', 'Depresión', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Torsades de Pointes / paro cardíaco', 'Síndrome neuroléptico maligno', 'Discinesia tardía'] }
    ],
    interactions: [
      { id: 'int-hal-1', interactingSubstance: 'Fármacos que prolongan el intervalo QT (Amiodarona, Metadona, Macrólidos)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de taquicardia ventricular polimórfica y muerte súbita.', recommendation: 'Evitar coadministración.' },
      { id: 'int-hal-2', interactingSubstance: 'Levodopa o Agonistas Dopaminérgicos', severity: 'Contraindicada', clinicalEffect: 'Antagonismo mutuo absoluto con bloqueo del tratamiento antiparkinsoniano.', recommendation: 'Contraindicado en parkinsonismo.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 2.7. ANTICONVULSIVOS ---
  {
    id: 'med-carbamazepina',
    name: 'Carbamazepina',
    brandNames: ['Tegretol', 'Carbamazepina'],
    atcCode: 'N03AF01',
    description: 'Anticonvulsivo derivado del iminostilbeno de primera línea en crisis focales y fármaco de elección indiscutible en la neuralgia del trigémino. Autoinductor enzimático.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-anticonvulsivos'],
    presentations: [
      { id: 'p-cbz-1', form: 'Comprimidos ranurados y retard', concentration: '200 mg y 400 mg (retard)', route: 'Oral', packaging: 'Caja x 30 y 50 comprimidos', excipients: 'Celulosa microcristalina, estearato' },
      { id: 'p-cbz-2', form: 'Suspensión oral', concentration: '100 mg / 5 ml (2%)', route: 'Oral', packaging: 'Frasco de 250 ml con cuchara dosificadora', excipients: 'Sorbitol, sacarina' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo voltaje- y uso-dependiente de los canales de sodio neuronales Nav1.2 en su estado inactivo.',
      detailed: 'Se une al poro interno de los canales de sodio activados por voltaje cuando se encuentran en estado inactivo, prolongando el período refractario e impidiendo la descarga repetitiva de alta frecuencia de las neuronas epileptógenas. Disminuye la liberación de glutamato presináptico.',
      targetReceptor: 'Canales de Sodio voltaje-dependientes neuronales (Nav)',
      keyPoints: ['Fármaco de primera elección en Neuralgia del Trigémino', 'Autoinductor enzimático de su propio metabolismo hepático (acelera su aclaramiento tras 2-4 semanas de uso)', 'Rango terapéutico sérico: 4 a 12 mcg/ml']
    },
    indications: {
      approved: ['Epilepsia: crisis focales (parciales) con o sin generalización secundaria y crisis tónico-clónicas generalizadas', 'Neuralgia esencial del trigémino y neuralgia glosofaríngea', 'Profilaxis de crisis maniacodepresivas en trastorno bipolar resistente'],
      offLabel: ['Dolor neuropático en neuropatía diabética']
    },
    dosageAndPosology: {
      adults: 'Epilepsia: Iniciar con 100 a 200 mg 1 o 2 veces al día, incrementando 200 mg cada semana hasta 800 a 1200 mg/día (máx 1600 mg/día). Neuralgia del trigémino: Iniciar con 100 mg cada 12 horas, aumentando gradualmente hasta controlar el dolor (dosis habitual: 200 a 400 mg 2-3 veces al día).',
      pediatric: '10 a 20 mg/kg/día divididos en 2 o 3 tomas.',
      renalAdjustment: 'Administrar con precaución.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral'],
      administrationNotes: 'Tomar siempre con las comidas para mejorar la absorción.'
    },
    safety: {
      contraindications: ['Bloqueo auriculoventricular', 'Antecedente de depresión de médula ósea o porfiria hepática', 'Uso concomitante con IMAO'],
      warnings: ['Síndrome de Stevens-Johnson / NET (asociado a alelo HLA-B*1502 en poblaciones asiáticas)', 'Aplasia medular, agranulocitosis y leucopenia', 'Hiponatremia por efecto similar a SIADH'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno: espina bífida y anomalías craneofaciales.',
      lactation: 'Compatible',
      lactationNotes: 'Monitorear al lactante por ictericia o sedación.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de reacciones cutáneas graves letales (SJS/NET) y anemia aplásica o agranulocitosis.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Diplopía (visión doble)', 'Ataxia y mareos', 'Somnolencia', 'Náuseas'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiponatremia euvolémica', 'Leucopenia benigna transitoria', 'Elevación de fosfatasa alcalina'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Agranulocitosis y aplasia medular', 'Necrólisis epidérmica tóxica', 'Hepatitis tóxica'] }
    ],
    interactions: [
      { id: 'int-cbz-1', interactingSubstance: 'Anticonceptivos orales y Anticoagulantes', severity: 'Mayor', clinicalEffect: 'Acelera su metabolismo provocando ineficacia anticonceptiva (embarazos) y trombosis.', recommendation: 'Usar métodos anticonceptivos de barrera no hormonales.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-fenitoina',
    name: 'Fenitoína (Difenilhidantoína)',
    brandNames: ['Epamin', 'Epanutin', 'Fenitoína'],
    atcCode: 'N03AB02',
    description: 'Anticonvulsivo hidantoína con farmacocinética no lineal de orden cero (cinética de Michaelis-Menten) que requiere monitorización de niveles plasmáticos estrecha.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-anticonvulsivos'],
    presentations: [
      { id: 'p-pht-1', form: 'Cápsulas y comprimidos', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 30 y 100 cápsulas', excipients: 'Lactosa monohidrato' },
      { id: 'p-pht-2', form: 'Ampollas inyectables IV', concentration: '250 mg / 5 ml (50 mg/ml)', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Propilenglicol al 40%, etanol al 10%, NaOH (pH 12 muy alcalino)' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo uso-dependiente de los canales de sodio voltaje-dependientes en estado inactivo.',
      detailed: 'Limita la activación repetitiva sostenida de potenciales de acción neuronales mediada por canales de sodio. Su cinética de eliminación es saturable (Michaelis-Menten): a niveles terapéuticos (10 a 20 mcg/ml) los sistemas enzimáticos hepáticos se saturan, de modo que un pequeño incremento de dosis produce un salto exponencial masivo en la concentración sanguínea con toxicidad súbita.',
      targetReceptor: 'Canales de Sodio neuronales Nav',
      keyPoints: ['Cinética no lineal saturable (rango terapéutico estrecho: 10 a 20 mcg/ml)', 'Hiperplasia gingival e hipertricosis en tratamientos crónicos', 'Velocidad máxima de infusión IV: 50 mg/min en adultos por riesgo de arritmias y paro cardíaco']
    },
    indications: {
      approved: ['Control de crisis tónico-clónicas generalizadas y crisis focales', 'Tratamiento del estatus epiléptico tras benzodiacepinas', 'Prevención de convulsiones postraumáticas o postneurocirugía'],
      offLabel: ['Arritmias ventriculares por intoxicación digitálica (antiarrítmico clase Ib)']
    },
    dosageAndPosology: {
      adults: 'Estatus epiléptico: Carga de 15 a 20 mg/kg IV en infusión lenta (velocidad máxima estricta: 50 mg/minuto con monitor ECG y TA continua). Mantenimiento oral: 300 a 400 mg/día divididos en 1 a 3 tomas.',
      pediatric: 'Carga: 15 a 20 mg/kg IV lenta (velocidad máxima: 1 mg/kg/min sin superar 50 mg/min).',
      renalAdjustment: 'La hipoalbuminemia en fallo renal eleva la fracción libre activa; monitorizar fenitoína libre.',
      hepaticAdjustment: 'Reducir dosis de mantenimiento.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'NUNCA administrar por vía IM (precipita y causa necrosis estéril). Diluir solo en solución salina al 0.9% (precipita de inmediato en glucosa).'
    },
    safety: {
      contraindications: ['Bradicardia sinusal, bloqueo auriculoventricular de 2º y 3º grado o bloqueo sinoauricular', 'Síndrome de Adams-Stokes'],
      warnings: ['Síndrome del guantelete púrpura por extravasación IV con necrosis vascular de extremidad', 'Nistagmo horizontal, ataxia y disartria como signos cardinales de intoxicación'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno probado: Síndrome fetal por hidantoína (microcefalia, fisura palatina, hipoplasia ungueal y retraso mental).',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de colapso cardiovascular y arritmias graves si la velocidad de infusión supera 50 mg/min.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Nistagmo', 'Ataxia', 'Hiperplasia gingival fibrosa (hasta en 50% de uso crónico)', 'Hipertricosis/hirsutismo'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Sedación', 'Engrosamiento de rasgos faciales', 'Osteomalacia y déficit de vitamina D/ácido fólico'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Arritmias ventriculares y shock en infusión rápida', 'Síndrome de Stevens-Johnson / DRESS', 'Aplasia pura de glóbulos rojos'] }
    ],
    interactions: [
      { id: 'int-pht-1', interactingSubstance: 'Amiodarona, Fluconazol, Cloranfenicol', severity: 'Mayor', clinicalEffect: 'Inhiben el metabolismo de la fenitoína disparando sus niveles a concentraciones neurotóxicas graves.', recommendation: 'Monitorizar niveles de fenitoína y reducir dosis.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-etosuximida',
    name: 'Etosuximida',
    brandNames: ['Zarontin', 'Petinimid'],
    atcCode: 'N03AF01',
    description: 'Succinimida anticonvulsiva de primera línea y fármaco de elección indiscutible para las crisis de ausencia típicas ("pequeño mal") en pediatría.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-anticonvulsivos'],
    presentations: [
      { id: 'p-eto-1', form: 'Cápsulas blandas', concentration: '250 mg', route: 'Oral', packaging: 'Frasco x 50 cápsulas', excipients: 'Glicerol, gelatina' },
      { id: 'p-eto-2', form: 'Jarabe oral', concentration: '250 mg / 5 ml (50 mg/ml)', route: 'Oral', packaging: 'Frasco de 200 ml con cuchara graduada', excipients: 'Sacarosa, benzoato sódico' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo selectivo de los canales de calcio tipo T (de bajo umbral) en las neuronas del tálamo.',
      detailed: 'Inhibe las corrientes de calcio tipo T marcapasos en las neuronas de los núcleos talámicos. Estas corrientes de calcio son las responsables directas de disparar los ritmos sincrónicos paroxísticos en espiga-onda a 3 Hz típicos de las crisis de ausencia en el electroencefalograma.',
      targetReceptor: 'Canales de Calcio voltaje-dependientes tipo T (Cav3.1, Cav3.2)',
      keyPoints: ['Fármaco de elección estándar de oro para Ausencias Infantiles', 'Eficacia nula frente a crisis focales o tónico-clónicas generalizadas', 'Margen terapéutico sérico: 40 a 100 mcg/ml']
    },
    indications: {
      approved: ['Tratamiento exclusivo de primera elección en crisis de ausencia típicas (pequeño mal) en niños y adolescentes'],
      offLabel: ['Mioclonías asociadas a ausencias']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 500 mg/día en 2 tomas; aumentar 250 mg cada 4-7 días hasta 1000 a 1500 mg/día (máximo 2000 mg/día).',
      pediatric: 'Niños 3 a 6 años: Iniciar con 250 mg/día (o 10-15 mg/kg/día); niños > 6 años: 500 mg/día. Titular hasta 20 a 30 mg/kg/día.',
      renalAdjustment: 'Reducir dosis si ClCr < 50 ml/min.',
      hepaticAdjustment: 'Usar con cautela.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con alimentos para reducir intolerancia gastrointestinal.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a las succinimidas'],
      warnings: ['Discrasias sanguíneas (realizar hemograma periódico)', 'Puede provocar síntomas psicóticos o agitación en pacientes con antecedentes psiquiátricos'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Riesgo de malformaciones; preferir etosuximida sobre valproato si se requieren ausencias en gestantes.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Dolor epigástrico', 'Náuseas y vómitos', 'Anorexia y pérdida de peso'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Somnolencia', 'Cefalea', 'Hipo pertinaz', 'Ataxia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Agranulocitosis y pancitopenia', 'Lupus eritematoso inducido por fármacos', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-eto-1', interactingSubstance: 'Ácido Valproico', severity: 'Moderada', clinicalEffect: 'El valproato inhibe el aclaramiento hepático de la etosuximida elevando su concentración sérica.', recommendation: 'Monitorear niveles plasmáticos de etosuximida al combinar.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-acido-valproico',
    name: 'Ácido Valproico (Valproato de Sodio)',
    brandNames: ['Depakine', 'Depakote', 'Valcote'],
    atcCode: 'N03AG01',
    description: 'Anticonvulsivo de amplísimo espectro eficaz en todos los tipos de crisis epilépticas y estabilizador del ánimo con mecanismo de acción multimodal.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-anticonvulsivos', 'c-antidepresivos'],
    presentations: [
      { id: 'p-val-1', form: 'Comprimidos de liberación prolongada (Crono)', concentration: '300 mg y 500 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos', excipients: 'Hipromelosa, sacarina' },
      { id: 'p-val-2', form: 'Solución oral en gotas', concentration: '200 mg / ml', route: 'Oral', packaging: 'Frasco cuentagotas de 60 ml con jeringa graduada', excipients: 'Hidróxido sódico' },
      { id: 'p-val-3', form: 'Polvo y disolvente para solución inyectable IV', concentration: '400 mg y 500 mg', route: 'Intravenosa', packaging: 'Vial liofilizado con ampolla de agua para inyección', excipients: 'Agua para inyectables' }
    ],
    mechanismOfAction: {
      summary: 'Acción multimodal: bloqueo de canales de sodio, corrientes de calcio tipo T y aumento del neurotransmisor inhibidor GABA.',
      detailed: 'Bloquea canales de sodio dependientes de voltaje en estado inactivo. Inhibe la degradación de GABA frenando las enzimas GABA-transaminasa y semialdehído succínico deshidrogenasa, al tiempo que estimula la síntesis de GABA por la ácido glutámico descarboxilasa (GAD). Bloquea además las corrientes de calcio de bajo umbral tipo T en tálamo.',
      targetReceptor: 'Canales de Sodio Nav, canales de Calcio tipo T y enzimas del metabolismo GABA',
      keyPoints: ['Espectro más amplio de todos los anticonvulsivos (efectivo en crisis focales, tónico-clónicas, ausencias y mioclonías)', 'Rango terapéutico sérico: 50 a 100 mcg/ml', 'CONTRAINDICADO ABSOLUTAMENTE EN MUJERES CON CAPACIDAD DE GESTAR salvo fracaso de todas las alternativas']
    },
    indications: {
      approved: ['Epilepsia generalizada primaria (ausencias, mioclonías, tónico-clónicas) y crisis focales', 'Tratamiento y prevención de episodios maníacos en trastorno bipolar', 'Estatus epiléptico convulsivo (vía intravenosa)'],
      offLabel: ['Profilaxis de la migraña en adultos (contraindicado en gestantes)']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 500 a 750 mg/día en 2 tomas con comida, aumentando semanalmente hasta 1000 a 2000 mg/día (máx 30 mg/kg/día). Estatus epiléptico: Carga IV de 25 a 40 mg/kg infundidos en 10-15 minutos.',
      pediatric: 'Iniciar con 10 a 15 mg/kg/día, aumentando hasta 25-30 mg/kg/día.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal.',
      hepaticAdjustment: 'CONTRAINDICADO en insuficiencia hepática activa o antecedentes de hepatotoxicidad familiar.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Monitorear periódicamente enzimas hepáticas (primeros 6 meses), hemograma y amonio si aparece letargia.'
    },
    safety: {
      contraindications: ['Hepatopatía activa o antecedentes familiares de hepatopatía fatal', 'Embarazo y mujeres en edad fértil (salvo cumplimiento del programa de prevención de embarazo estricto)', 'Trastornos del ciclo de la urea (riesgo de encefalopatía hiperamonémica fatal)', 'Trastornos mitocondriales por mutación POLG'],
      warnings: ['Hepatotoxicidad mortal en niños < 2 años con politerapia o trastornos metabólicos', 'Pancreatitis hemorrágica fulminante', 'Caída de cabello (alopecia reversible) y aumento notable de peso'],
      pregnancyCategory: 'X',
      pregnancyNotes: 'Teratógeno mayor grave: espina bífida (riesgo 10-20 veces superior), malformaciones cardiovasculares y disminución permanente de hasta 10 puntos de CI en niños expuestos.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo extremo de defectos del tubo neural y malformaciones fetales congénitas, hepatotoxicidad mortal y pancreatitis aguda.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Temblor fino de manos', 'Aumento de peso y apetito', 'Náuseas', 'Alopecia transitoria'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Trombocitopenia leve', 'Hiperamonemia asintomática', 'Somnolencia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis tóxica fulminante letal', 'Pancreatitis aguda necrótica', 'Encefalopatía hiperamonémica'] }
    ],
    interactions: [
      { id: 'int-val-1', interactingSubstance: 'Antibióticos Carbapenémicos (Meropenem, Imipenem)', severity: 'Contraindicada', clinicalEffect: 'Los carbapenémicos colapsan los niveles de valproato en sangre hasta un 80% en 24 horas provocando convulsiones refractarias.', recommendation: 'No usar carbapenémicos con valproato; cambiar de antibiótico de inmediato.' },
      { id: 'int-val-2', interactingSubstance: 'Lamotrigina', severity: 'Mayor', clinicalEffect: 'El valproato inhibe la glucuronidación de la lamotrigina duplicando sus niveles con alto riesgo de Síndrome de Stevens-Johnson.', recommendation: 'Reducir la dosis de lamotrigina a más de la mitad.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 2.8. ANESTÉSICOS LOCALES ---
  {
    id: 'med-lidocaina',
    name: 'Lidocaína (Lignocaína)',
    brandNames: ['Xylocaina', 'Versatis', 'Titanorein', 'Luan'],
    atcCode: 'N01BB02 / C01BB01',
    description: 'Anestésico local tipo aminoamida de referencia clínica y antiarrítmico de clase Ib con inicio de acción ultrarrápido (en 1 a 2 minutos) y duración intermedia.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-anestesicos'],
    presentations: [
      { id: 'p-lid-1', form: 'Solución inyectable en viales al 1% y 2%', concentration: '10 mg/ml (1%) y 20 mg/ml (2%)', route: 'Subcutánea', packaging: 'Vial de 10 ml y 20 ml (con o sin epinefrina 1:100.000)', excipients: 'Cloruro de sodio, agua' },
      { id: 'p-lid-2', form: 'Parches cutáneos medicados al 5%', concentration: '700 mg por parche', route: 'Tópica', packaging: 'Caja x 5 y 30 parches', excipients: 'Glicerol, poliacrilato' },
      { id: 'p-lid-3', form: 'Aerosol y gel tópico al 5% y 10%', concentration: '50 mg/g y 100 mg/g', route: 'Tópica', packaging: 'Spray de 50 ml y tubo de gel de 30 g', excipients: 'Propilenglicol' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo reversible de los canales de sodio voltaje-dependientes en la membrana de las fibras nerviosas.',
      detailed: 'Difunde a través de la membrana axonal en su forma no ionizada lipofílica. En el citoplasma se protona y se une al sitio receptor del dominio IV del canal de sodio Nav1.5 desde el lado intracelular, impidiendo el influjo masivo de Na+ y la despolarización propagada. Bloquea de forma secuencial las fibras B amielínicas, C del dolor, A-delta de temperatura y finalmente las fibras motoras.',
      targetReceptor: 'Canales de Sodio neuronales Nav (sitio anestésico interno)',
      keyPoints: ['Dosis máxima sin vasoconstrictor: 4.5 mg/kg (máximo 300 mg)', 'Dosis máxima con epinefrina (1:200.000): 7 mg/kg (máximo 500 mg)', 'Antídoto ante intoxicación sistémica por anestésicos locales (LAST): Emulsión lipídica al 20% (Intralipid)']
    },
    indications: {
      approved: ['Anestesia local por infiltración, bloqueos de troncos nerviosos y anestesia epidural', 'Dolor neuropático en neuralgia posherpética (parches al 5%)', 'Arritmias ventriculares graves asociadas a infarto agudo de miocardio o toxicidad por digoxina (IV)'],
      offLabel: ['Atenuación de la respuesta hemodinámica a la intubación endotraqueal']
    },
    dosageAndPosology: {
      adults: 'Infiltración local: lidocaína simple 1-2%: hasta 300 mg (4.5 mg/kg); con epinefrina: hasta 500 mg (7 mg/kg). Parches al 5%: aplicar hasta 3 parches simultáneos en la zona dolorosa durante 12 horas al día. Arritmias ventriculares: bolo IV de 1 a 1.5 mg/kg en 2-3 minutos.',
      pediatric: 'Infiltración pediátrica: 3 a 4 mg/kg (máx 5 mg/kg con epinefrina).',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis un 50% por metabolismo hepático CYP3A4 y CYP1A2.',
      routes: ['Subcutánea', 'Tópica', 'Intravenosa', 'Infiltratoria'],
      administrationNotes: 'ASPIRAR SIEMPRE antes de inyectar para evitar la inyección intravascular accidental directa. NUNCA usar preparaciones con adrenalina en extremidades distales con circulación terminal (dedos, punta de la nariz, pabellón auricular, pene) por riesgo de necrosis isquémica.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a anestésicos locales tipo amida', 'Bloqueo cardíaco de alto grado o bradicardia severa sin marcapasos', 'Infección en el sitio de punción'],
      warnings: ['Toxicidad Sistémica por Anestésicos Locales (LAST): sabor metálico en la boca, entumecimiento perioral, acúfenos, convulsiones, arritmias ventriculares y colapso cardiovascular'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Anestésico local más seguro en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Sensación de quemazón o escozor transitorio en la infiltración', 'Parestesias transitorias', 'Eritema en zona de parche'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Toxicidad del SNC (convulsiones tónico-clónicas)', 'Paro cardíaco por fibrilación ventricular (LAST)', 'Metahemoglobinemia'] }
    ],
    interactions: [
      { id: 'int-lid-1', interactingSubstance: 'Betabloqueantes (Propranolol)', severity: 'Moderada', clinicalEffect: 'Disminuyen el aclaramiento hepático de la lidocaína aumentando sus concentraciones en sangre.', recommendation: 'Reducir dosis si se administran infusiones continuas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-proparacaina',
    name: 'Proparacaína (Proximetacaína)',
    brandNames: ['Ophthaine', 'Alcaine', 'Poenclaina'],
    atcCode: 'S01HA04',
    description: 'Anestésico tópico ocular tipo aminoéster de inicio de acción ultrarrápido (en 15 a 30 segundos) y mínima irritación corneal inicial.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-anestesicos'],
    presentations: [
      { id: 'p-pro-1', form: 'Colirio oftálmico estéril', concentration: '0.5% (5 mg/ml)', route: 'Oftálmica', packaging: 'Frasco cuentagotas de 15 ml', excipients: 'Cloruro de benzalconio, glicerol' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo de la permeabilidad iónica al sodio en las terminaciones nerviosas sensoriales de la córnea y conjuntiva.',
      detailed: 'Interrumpe la conducción de los impulsos dolorosos en la superficie corneal durante aproximadamente 15 a 20 minutos con mínima molestia o ardor en comparación con la tetracaína.',
      targetReceptor: 'Canales de Sodio corneales',
      keyPoints: ['Anestesia corneal en menos de 30 segundos', 'Duración de 15 a 20 minutos', 'USO ESTRICTAMENTE EN CONSULTA MÉDICA: NUNCA prescribir para uso domiciliario por riesgo de queratopatía tóxica y ceguera']
    },
    indications: {
      approved: ['Tonometría ocular (medición de presión intraocular)', 'Extracción de cuerpos extraños corneales o suturas', 'Raspado corneal diagnóstico y exámenes oftalmológicos dolorosos']
    },
    dosageAndPosology: {
      adults: '1 a 2 gotas en el fondo de saco conjuntival del ojo afectado inmediatamente antes del procedimiento. Si es necesario se puede repetir a los 5 minutos.',
      pediatric: '1 gota según criterio del oftalmólogo.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oftálmica'],
      administrationNotes: 'Instruir al paciente que evite frotarse el ojo mientras dure el efecto anestésico para no causarse abrasiones mecánicas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a anestésicos locales éster'],
      warnings: ['El uso crónico o repetido domiciliario causa queratitis neurotrófica ulcerosa, perforación corneal y pérdida permanente de la visión'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Absorción sistémica insignificante.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Ligero ardor transitorio al instilar', 'Hiperemia conjuntival leve'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Queratitis ulcerosa grave por uso indebido', 'Erosión epitelial corneal difusa'] }
    ],
    interactions: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-mepivacaina',
    name: 'Mepivacaína',
    brandNames: ['Scandonest', 'Mepivacaína Braun', 'Carbocaine'],
    atcCode: 'N01BB03',
    description: 'Anestésico local tipo aminoamida de acción intermedia con nulo efecto vasodilatador intrínseco. Muy utilizado en odontología sin vasoconstrictor añadido.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-anestesicos'],
    presentations: [
      { id: 'p-mepiv-1', form: 'Cartuchos dentales para carpule al 2% y 3%', concentration: '20 mg/ml (2% con adrenalina) y 30 mg/ml (3% simple)', route: 'Infiltratoria', packaging: 'Caja x 50 cartuchos de 1.8 ml', excipients: 'Cloruro sódico, agua' },
      { id: 'p-mepiv-2', form: 'Ampollas inyectables al 1% y 2%', concentration: '10 mg/ml y 20 mg/ml', route: 'Subcutánea', packaging: 'Caja x 10 ampollas de 10 ml', excipients: 'Agua para inyección' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo de canales de sodio voltaje-dependientes en membranas neuronales sin producir vasodilatación local marcada.',
      detailed: 'Bloquea la generación y conducción del impulso nervioso. A diferencia de la lidocaína o bupivacaína, ejerce una ligera vasoconstricción intrínseca a concentraciones clínicas, lo que prolonga su duración de acción en los tejidos sin requerir la adición obligatoria de adrenalina.',
      targetReceptor: 'Canales de Sodio neuronales Nav',
      keyPoints: ['Anestésico de elección en odontología para pacientes hipertensos, cardiópatas o diabéticos al no necesitar adrenalina', 'Dosis máxima simple: 4.4 mg/kg (máximo 300 mg)', 'Metabolismo hepático más lento en neonatos']
    },
    indications: {
      approved: ['Anestesia por infiltración local y bloqueos tronculares en odontología y cirugía menor', 'Bloqueos nerviosos periféricos diagnósticos y terapéuticos']
    },
    dosageAndPosology: {
      adults: 'Dosis odontológica estándar: 1 a 2 cartuchos de 1.8 ml (36 a 72 mg al 2% o 54 a 108 mg al 3%). Dosis máxima en adultos: 400 mg (4.4 mg/kg).',
      pediatric: 'Máximo 3 mg/kg en niños.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis por aclaramiento hepático.',
      routes: ['Infiltratoria', 'Subcutánea'],
      administrationNotes: 'Inyección lenta con aspiración previa.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a amidas', 'Bloqueos cardíacos severos'],
      warnings: ['Menor metabolismo en neonatos por inmadurez hepática (evitar en bloqueo paracervical obstétrico por riesgo de bradicardia fetal)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en obstetricia si es posible (acumulación fetal).',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Parestesias transitorias en zona infiltrada'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Toxicidad sistémica neurológica (convulsiones)', 'Bradicardia y colapso cardiovascular'] }
    ],
    interactions: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-bupivacaina',
    name: 'Bupivacaína (Levobupivacaína)',
    brandNames: ['Bupivacaína Braun', 'Marcaina', 'Svedocain'],
    atcCode: 'N01BB01',
    description: 'Anestésico local tipo aminoamida de larga duración (4 a 8 horas) y gran potencia analgésica. Fármaco de elección en analgesia epidural obstétrica y anestesia subaracnoidea.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-anestesicos'],
    presentations: [
      { id: 'p-bupiv-1', form: 'Ampollas inyectables isobaras al 0.25% y 0.5%', concentration: '2.5 mg/ml y 5 mg/ml', route: 'Subcutánea', packaging: 'Caja x 10 ampollas de 10 ml', excipients: 'Cloruro sódico' },
      { id: 'p-bupiv-2', form: 'Ampollas hiperbaras para raquianestesia al 0.5%', concentration: '5 mg/ml con glucosa al 8%', route: 'Intravenosa', packaging: 'Caja x 10 ampollas de 4 ml', excipients: 'Glucosa anhidra' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo prolongado de canales de sodio con disociación muy lenta en tejido miocárdico.',
      detailed: 'Gran liposolubilidad y fijación a proteínas (95%). Proporciona una analgesia sensorial prolongada de 4 a 12 horas con menor bloqueo motor relativo a concentraciones bajas (0.125-0.25%). Se disocia con extrema lentitud de los canales de sodio cardíacos, lo que confiere un alto riesgo de cardiotoxicidad refractaria si se inyecta accidentalmente en un vaso sanguíneo.',
      targetReceptor: 'Canales de Sodio neuronales y miocárdicos Nav1.5',
      keyPoints: ['Anestésico de elección en analgesia de parto por bloqueo sensorial con preservación motora', 'Mayor cardiotoxicidad entre todos los anestésicos locales (arritmias ventriculares graves refractarias)', 'Dosis máxima total: 2 mg/kg (máximo 150 mg)']
    },
    indications: {
      approved: ['Analgesia epidural para el trabajo de parto y posoperatorio', 'Anestesia raquídea (subaracnoidea) para cirugía de miembros inferiores o cesárea', 'Bloqueos nerviosos periféricos de larga duración (plexo braquial, nervio ciático)']
    },
    dosageAndPosology: {
      adults: 'Analgesia epidural de parto: Infusión de bupivacaína al 0.0625% - 0.125% a 6-12 ml/h. Raquianestesia: 10 a 15 mg (2 a 3 ml de solución al 0.5% hiperbara). Dosis máxima total: 2 mg/kg sin superar 150 mg.',
      pediatric: 'Exclusivamente por anestesiólogos pediátricos.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis por metabolismo hepático.',
      routes: ['Subcutánea', 'Infiltratoria'],
      administrationNotes: 'ASPIRACIÓN RIGUROSA repetida antes y durante la inyección. Inyectar de forma fraccionada. En caso de paro por LAST, iniciar reanimación cardiopulmonar prolongada e infundir de inmediato Emulsión Lipídica al 20% (Intralipid).'
    },
    safety: {
      contraindications: ['Anestesia regional intravenosa (bloqueo de Bier) - ESTRICTAMENTE PROHIBIDO por cardiotoxicidad mortal', 'Hipersensibilidad a amidas', 'Infección en el sitio epidural'],
      warnings: ['Cardiotoxicidad grave e irreversible si hay paso intravascular directo'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Fármaco estándar en analgesia obstétrica.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia a leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Concentración al 0.75% contraindicada en anestesia epidural obstétrica por paro cardíaco irreversible materno.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipotensión por bloqueo simpático epidural', 'Bradicardia', 'Náuseas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Colapso cardiovascular y fibrilación ventricular refractaria (LAST)', 'Convulsiones', 'Meningitis química'] }
    ],
    interactions: [
      { id: 'int-bupiv-1', interactingSubstance: 'Antiarrítmicos y bloqueadores de canales de calcio', severity: 'Mayor', clinicalEffect: 'Efectos inotrópicos negativos y arritmias aditivas.', recommendation: 'Monitorización hemodinámica continua.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
