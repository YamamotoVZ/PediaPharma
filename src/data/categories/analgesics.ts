import { Medication } from '../../types/pharmacy';

export const ANALGESIC_MEDICATIONS: Medication[] = [
  // --- 1. ANALGÉSICOS NARCÓTICOS (OPIOIDES) ---
  {
    id: 'med-morfina',
    name: 'Morfina',
    brandNames: ['MST Continus', 'Sevredol', 'Oramorph', 'Morphine Braun'],
    atcCode: 'N02AA01',
    description: 'Opioide agonista puro de referencia obtenido del opio. Potente depresor de la percepción dolorosa central.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-mor-1', form: 'Ampollas inyectables', concentration: '10 mg/ml y 20 mg/ml (1 ml y 2 ml)', route: 'Intravenosa', packaging: 'Caja x 10 ampollas', excipients: 'Cloruro de sodio, agua para inyectables' },
      { id: 'p-mor-2', form: 'Comprimidos de liberación prolongada', concentration: '10 mg, 30 mg, 60 mg, 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-mor-3', form: 'Solución oral en gotas', concentration: '20 mg/ml (2%)', route: 'Oral', packaging: 'Frasco cuentagotas de 20 ml', excipients: 'Sacarosa, etanol' }
    ],
    mechanismOfAction: {
      summary: 'Agonista potente y selectivo de los receptores opioides mu (µ) en el SNC y médula espinal.',
      detailed: 'Se une a receptores acoplados a proteína Gi/o en la sustancia gelatinosa de la médula y corteza. Inhibe la adenilato ciclasa, cierra canales de calcio presinápticos voltaje-dependientes (inhibiendo la liberación de sustancia P y glutamato) y abre canales de potasio rectificadores internos postsinápticos causando hiperpolarización neuronal.',
      targetReceptor: 'Receptor Opioide Mu-1 y Mu-2 (OP3)',
      keyPoints: ['Inhibe la transmisión nociceptiva ascendente', 'Activa vías descendentes inhibitorias del dolor', 'Depresión central del centro respiratorio y del reflejo tusígeno']
    },
    indications: {
      approved: ['Dolor agudo intenso (infarto agudo de miocardio, traumatismos, posoperatorio)', 'Dolor crónico oncológico moderado a severo', 'Edema agudo de pulmón cardiogénico (ansiolítico y vasodilatador venoso)'],
      offLabel: ['Disnea refractaria en fases terminales de insuficiencia respiratoria']
    },
    dosageAndPosology: {
      adults: 'IV/SC: 2.5 a 10 mg cada 3-4 horas en titulación lenta. Oral liberación rápida: 10-20 mg cada 4h; liberación prolongada: cada 12h. Titular según respuesta analgésica y tolerancia respiratoria.',
      pediatric: 'IV: 0.05 a 0.1 mg/kg cada 4-6 horas (monitorización estricta).',
      renalAdjustment: 'FG 10-50 ml/min: reducir dosis 25-50%. FG < 10 ml/min: reducir 50-75% por acumulación de metabolito neurotóxico morfina-6-glucurónido (M6G).',
      hepaticAdjustment: 'Reducir dosis o espaciar intervalos en cirrosis hepática.',
      routes: ['Intravenosa', 'Subcutánea', 'Oral', 'Intramuscular'],
      administrationNotes: 'Antídoto específico ante intoxicación o depresión respiratoria: Naloxona (0.4 mg IV).'
    },
    safety: {
      contraindications: ['Depresión respiratoria grave sin soporte ventilatorio', 'Asma bronquial aguda o EPOC grave descompensado', 'Íleo paralítico u obstrucción gastrointestinal aguda', 'Traumatismo craneoencefálico con hipertensión intracraneal'],
      warnings: ['Riesgo de tolerancia, dependencia física y adicción', 'Depresión respiratoria mortal si se asocia con benzodiacepinas o alcohol', 'Estreñimiento pertinaz (requiere coadministrar laxantes osmóticos)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Categoría D si se usa a dosis altas o a término: riesgo de síndrome de abstinencia neonatal.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche materna; vigilar somnolencia y apnea en el neonato.',
      controlledSubstance: true,
      blackBoxWarning: 'Riesgo de adicción, abuso, uso indebido, depresión respiratoria potencialmente mortal y sobredosis accidental.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Estreñimiento', 'Náuseas', 'Sedación', 'Mareo'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Vómitos', 'Miosis pupilar en punta de alfiler', 'Prurito por liberación de histamina', 'Retención urinaria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Depresión respiratoria fatal', 'Paro respiratorio', 'Broncoespasmo', 'Hipotensión severa'] }
    ],
    interactions: [
      { id: 'int-mor-1', interactingSubstance: 'Benzodiacepinas y Alcohol', severity: 'Contraindicada', clinicalEffect: 'Depresión respiratoria profunda, coma y paro cardiorrespiratorio.', recommendation: 'Evitar uso concomitante; restringir al mínimo si es indispensable.' },
      { id: 'int-mor-2', interactingSubstance: 'Inhibidores de la MAO', severity: 'Contraindicada', clinicalEffect: 'Riesgo de síndrome serotoninérgico o inestabilidad hemodinámica grave.', recommendation: 'Espaciar al menos 14 días tras suspender IMAO.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-meperidina',
    name: 'Meperidina (Petidina)',
    brandNames: ['Demerol', 'Dolantina', 'Meperidina Braun'],
    atcCode: 'N02AB02',
    description: 'Opioide sintético del grupo de las fenilpiperidinas con propiedades antiespasmódicas y anticolinérgicas débiles.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-mep-1', form: 'Solución inyectable en ampollas', concentration: '100 mg / 2 ml (50 mg/ml)', route: 'Intramuscular', packaging: 'Caja x 10 ampollas', excipients: 'Agua para inyectables' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores opioides mu con acción atropínica intrínseca.',
      detailed: 'Agonista mu que atenúa la actividad nociceptiva. Su estructura química afín a la atropina reduce el espasmo de la musculatura lisa biliar en comparación con la morfina, pero genera normeperidina, un metabolito activo proconvulsivante de larga semivida (15-30 horas).',
      targetReceptor: 'Receptor Opioide Mu (µ)',
      keyPoints: ['No produce miosis marcada (puede causar midriasis por efecto atropínico)', 'Riesgo de neurotoxicidad acumulativa por normeperidina', 'Tratamiento de elección para escalofríos posanestésicos (shivering)']
    },
    indications: {
      approved: ['Dolor agudo moderado a severo a corto plazo (cólico renal o biliar, trabajo de parto)', 'Prevención y control del temblor o escalofríos postoperatorios'],
      offLabel: ['Premedicación anestésica en procedimientos breves']
    },
    dosageAndPosology: {
      adults: 'IM/SC: 50 a 100 mg cada 3-4 horas según necesidad. IV lenta: 25 a 50 mg diluida. No utilizar por más de 48 horas seguidas.',
      pediatric: '1 a 1.5 mg/kg IM o SC cada 3-4 horas (máx 100 mg/dosis).',
      renalAdjustment: 'Contraindicado en insuficiencia renal moderada a grave por acumulación de normeperidina y convulsiones.',
      hepaticAdjustment: 'Reducir dosis por retraso en el aclaramiento.',
      routes: ['Intramuscular', 'Intravenosa', 'Subcutánea'],
      administrationNotes: 'Evitar inyección IV rápida por taquicardia e hipotensión severa.'
    },
    safety: {
      contraindications: ['Uso con IMAO concomitante o en los últimos 14 días (síndrome serotoninérgico mortal)', 'Insuficiencia renal grave (acúmulo de normeperidina)', 'Insuficiencia respiratoria grave'],
      warnings: ['No apto para dolor crónico oncológico por neurotoxicidad y convulsiones', 'Dependencia física rápida'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Pasa a placenta; monitorizar depresión respiratoria neonatal si se usa en parto.',
      lactation: 'Contraindicado',
      lactationNotes: 'Normeperidina pasa a leche y causa sedación en el lactante.',
      controlledSubstance: true,
      blackBoxWarning: 'Riesgo de convulsiones y síndrome serotoninérgico mortal en asociación farmacológica.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Mareos', 'Náuseas', 'Sudoración', 'Sedación'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Taquicardia (efecto anticolinérgico)', 'Boca seca', 'Hipotensión ortostática'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Convulsiones por normeperidina', 'Temblor e hiperreflexia', 'Depresión respiratoria grave'] }
    ],
    interactions: [
      { id: 'int-mep-1', interactingSubstance: 'Inhibidores de la MAO (Fenelzina, Selegilina)', severity: 'Contraindicada', clinicalEffect: 'Hiperpirexia maligna, coma, convulsiones y colapso cardiovascular fatal.', recommendation: 'Combinación absolutamente contraindicada.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-metadona',
    name: 'Metadona',
    brandNames: ['Metasedin', 'Dolophine', 'Methadose'],
    atcCode: 'N07BC02',
    description: 'Opioide sintético de acción prolongada, antagonista NMDA e inhibidor de recaptura de serotonina/noradrenalina.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-metad-1', form: 'Comprimidos orales ranurados', concentration: '5 mg, 10 mg, 40 mg', route: 'Oral', packaging: 'Frascos y blísteres de control', excipients: 'Lactosa monohidrato' },
      { id: 'p-metad-2', form: 'Solución oral concentrada', concentration: '10 mg/ml', route: 'Oral', packaging: 'Frasco dosificador para programas de desintoxicación', excipients: 'Sacarosa' }
    ],
    mechanismOfAction: {
      summary: 'Agonista opioide mu potente con antagonismo simultáneo de receptores NMDA.',
      detailed: 'Agonismo pleno en receptores mu con bloqueo no competitivo del receptor N-metil-D-aspartato (NMDA). Previene el desarrollo de tolerancia y la sensibilización central en dolor neuropático. Posee una semivida de eliminación bifásica prolongada (15 a 60 horas), acumulándose en tejido adiposo.',
      targetReceptor: 'Receptor Opioide Mu y Receptor NMDA',
      keyPoints: ['Eficaz en dolor neuropático oncológico refractario', 'Uso principal en programas de mantenimiento de adicción a opiáceos', 'Eliminación fecal y renal']
    },
    indications: {
      approved: ['Terapia de sustitución y desintoxicación en adicción a opiáceos (heroína)', 'Tratamiento del dolor crónico severo refractario a otros analgésicos'],
      offLabel: ['Dolor neuropático maligno']
    },
    dosageAndPosology: {
      adults: 'Mantenimiento en deshabituación: 20 a 30 mg/día oral inicial, titulando cada 3-5 días hasta 60-120 mg/día. Dolor crónico: 2.5 a 10 mg cada 8-12 horas.',
      pediatric: 'Uso reservado a centros especializados en oncología pediátrica.',
      renalAdjustment: 'FG < 10 ml/min: reducir dosis un 25-50%.',
      hepaticAdjustment: 'Usar con extrema cautela en hepatopatías por metabolismo hepático CYP3A4 y CYP2B6.',
      routes: ['Oral', 'Intravenosa', 'Subcutánea'],
      administrationNotes: 'Realizar electrocardiograma basal para evaluar intervalo QTc antes de dosis altas.'
    },
    safety: {
      contraindications: ['Prolongación conocida del intervalo QTc > 500 ms', 'Depresión respiratoria grave'],
      warnings: ['Prolongación del intervalo QT y riesgo de taquicardia ventricular en Torsades de Pointes', 'Acumulación tisular con riesgo de sobredosis tardía en los primeros días'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Mantenimiento de elección en gestantes adictas a heroína para evitar síndrome de abstinencia fetal.',
      lactation: 'Compatible',
      lactationNotes: 'Controlar al lactante por sedación leve.',
      controlledSubstance: true,
      blackBoxWarning: 'Prolongación del intervalo QT, arritmias ventriculares fatales y depresión respiratoria.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sudoración profusa', 'Estreñimiento', 'Somnolencia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Prolongación de QT', 'Edema periférico', 'Náuseas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Torsades de Pointes', 'Paro respiratorio'] }
    ],
    interactions: [
      { id: 'int-metad-1', interactingSubstance: 'Fármacos que prolongan el QT (Amiodarona, Haloperidol, Claritromicina)', severity: 'Contraindicada', clinicalEffect: 'Disparo de taquicardia ventricular polimórfica y muerte súbita.', recommendation: 'Evitar combinación o monitorizar ECG diario.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-pentazocina',
    name: 'Pentazocina',
    brandNames: ['Sosegon', 'Fortral', 'Talwin'],
    atcCode: 'N02AE01',
    description: 'Opioide sintético con acción agonista en receptores kappa (κ) y agonista parcial / antagonista débil en receptores mu (µ).',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-pen-1', form: 'Ampollas inyectables', concentration: '30 mg / ml', route: 'Intramuscular', packaging: 'Caja con 10 ampollas de 1 ml', excipients: 'Cloruro de sodio, ácido cítrico' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores kappa (κ) y sigma (σ), con antagonismo o agonismo parcial en receptores mu (µ).',
      detailed: 'Produce analgesia a nivel espinal mediante estimulación de receptores kappa. Al actuar como antagonista débil en receptores mu, precipita síndrome de abstinencia inmediato si se administra a pacientes dependientes de morfina o heroína. La activación sigma provoca disforia y alucinaciones.',
      targetReceptor: 'Receptores Kappa (κ) y receptores Sigma (σ)',
      keyPoints: ['Incrementa la presión arterial y la poscarga cardíaca', 'Efecto techo para la depresión respiratoria', 'Menor dependencia física que la morfina']
    },
    indications: {
      approved: ['Dolor moderado a intenso (cólicos, traumatismos, cirugía)', 'Dolor posoperatorio inmediato'],
      offLabel: ['Premedicación anestésica']
    },
    dosageAndPosology: {
      adults: 'IM/SC/IV: 30 a 60 mg cada 3-4 horas según necesidad. Dosis máxima diaria: 360 mg.',
      pediatric: 'No recomendado en niños menores de 12 años.',
      renalAdjustment: 'Reducir dosis a la mitad en insuficiencia renal moderada a grave.',
      hepaticAdjustment: 'Reducir dosis por menor aclaramiento hepático.',
      routes: ['Intramuscular', 'Subcutánea', 'Intravenosa'],
      administrationNotes: 'No administrar a pacientes que reciban opioides agonistas puros (morfina, fentanilo) por riesgo de revertir analgesia y causar dolor agudo.'
    },
    safety: {
      contraindications: ['Infarto agudo de miocardio reciente (aumenta carga cardíaca y consumo miocárdico de O2)', 'Pacientes dependientes de agonistas opioides mu'],
      warnings: ['Puede producir hipertensión arterial y taquicardia', 'Reacciones disfóricas, desorientación y alucinaciones visuales'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en el embarazo; puede provocar abstinencia en el feto.',
      lactation: 'Precaución',
      lactationNotes: 'Usar con cautela.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación', 'Mareo', 'Náuseas', 'Vómitos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Alucinaciones', 'Pesadillas', 'Sudoración', 'Hipertensión'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Convulsiones', 'Espasmo biliar'] }
    ],
    interactions: [
      { id: 'int-pen-1', interactingSubstance: 'Morfina, Fentanilo, Metadona', severity: 'Contraindicada', clinicalEffect: 'Antagonismo del efecto analgésico y precipitación brusca de crisis de abstinencia.', recommendation: 'No asociar agonistas-antagonistas con agonistas puros.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-buprenorfina',
    name: 'Buprenorfina',
    brandNames: ['Transtec', 'Subutex', 'Temgesic', 'Buprex'],
    atcCode: 'N02AE01',
    description: 'Agonista parcial de alta afinidad por receptores mu (µ) y antagonista de receptores kappa (κ). Excelente disponibilidad transdérmica.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-bup-1', form: 'Parches transdérmicos matriciales', concentration: '35 mcg/h, 52.5 mcg/h, 70 mcg/h', route: 'Tópica', packaging: 'Caja x 4 y 8 parches de liberación durante 72 a 96 horas', excipients: 'Matriz adhesiva de poliacrilato' },
      { id: 'p-bup-2', form: 'Comprimidos sublinguales', concentration: '0.2 mg, 2 mg, 8 mg', route: 'Sublingual', packaging: 'Caja x 20 comprimidos', excipients: 'Lactosa, almidón' },
      { id: 'p-bup-3', form: 'Ampollas inyectables', concentration: '0.3 mg / ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas de 1 ml', excipients: 'Glucosa anhidra' }
    ],
    mechanismOfAction: {
      summary: 'Agonista parcial mu con cinética de disociación muy lenta y antagonismo kappa.',
      detailed: 'Afinidad de unión extremadamente elevada por el receptor mu (desplaza a otros opioides) con una velocidad de disociación muy lenta, lo que produce una analgesia muy prolongada y efecto techo para la depresión respiratoria. No se elimina por vía renal de forma activa, por lo que es el opioide más seguro en fallo renal crónico y diálisis.',
      targetReceptor: 'Receptor Mu (Agonista parcial) y Kappa (Antagonista)',
      keyPoints: ['Efecto techo de depresión respiratoria (menor riesgo de asfixia mortal)', 'No requiere ajuste de dosis en insuficiencia renal (estándar de oro)', 'Reversión por naloxona requiere dosis más elevadas o infusión continua']
    },
    indications: {
      approved: ['Dolor crónico moderado a grave oncológico y no oncológico (artrosis severa, dolor lumbar)', 'Terapia de mantenimiento en adicción a opiáceos (sublingual)'],
      offLabel: ['Dolor neuropático periférico refractario']
    },
    dosageAndPosology: {
      adults: 'Parches: Iniciar con 35 mcg/h cada 72-96 horas (cambiar de sitio de aplicación). Sublingual: 0.2 a 0.4 mg cada 6-8 horas.',
      pediatric: 'No recomendado en menores de 18 años para parches transdérmicos.',
      renalAdjustment: 'No requiere ajuste posológico en insuficiencia renal ni en pacientes hemodializados.',
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática severa.',
      routes: ['Tópica', 'Sublingual', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Aplicar el parche en piel limpia, seca y sin vello de tórax superior o espalda. No cortar el parche.'
    },
    safety: {
      contraindications: ['Insuficiencia respiratoria grave', 'Miastenia gravis', 'Delirium tremens'],
      warnings: ['Evitar fuentes de calor externas sobre el parche (mantas térmicas, sauna, fiebre alta) porque triplican la absorción del fármaco'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uso en gestantes solo si los beneficios superan los riesgos.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia a leche materna en formulación transdérmica.',
      controlledSubstance: true,
      blackBoxWarning: 'Riesgo de adicción y depresión del SNC al combinar con benzodiacepinas.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Eritema y prurito en el sitio de aplicación del parche', 'Náuseas', 'Mareos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Somnolencia', 'Cefalea', 'Estreñimiento', 'Dispepsia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Depresión respiratoria', 'Angioedema'] }
    ],
    interactions: [
      { id: 'int-bup-1', interactingSubstance: 'Morfina y otros agonistas puros', severity: 'Mayor', clinicalEffect: 'La buprenorfina desplaza a los agonistas puros provocando disminución de analgesia o abstinencia.', recommendation: 'No usar simultáneamente; esperar a que se elimine el agonista previo.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-nalbufina',
    name: 'Nalbufina',
    brandNames: ['Nubain', 'Nalbufina Clorhidrato'],
    atcCode: 'N02AF02',
    description: 'Opioide semisintético agonista kappa y antagonista parcial competitivo de receptores mu. Analgésico parenteral con techo respiratorio.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-narcoticos'],
    presentations: [
      { id: 'p-nal-1', form: 'Solución inyectable en ampollas', concentration: '10 mg/ml y 20 mg/ml (1 ml y 2 ml)', route: 'Intravenosa', packaging: 'Caja x 5 y 10 ampollas', excipients: 'Cloruro de sodio, ácido cítrico' }
    ],
    mechanismOfAction: {
      summary: 'Agonista de receptores kappa (κ) y antagonista competitivo en receptores mu (µ).',
      detailed: 'Proporciona analgesia a través del receptor kappa en el asta dorsal de la médula espinal. Al antagonizar los receptores mu, tiene un efecto techo sobre la depresión respiratoria similar a 30 mg de morfina y se utiliza clínicamente para revertir la depresión respiratoria o el prurito inducido por fentanilo o morfina sin revertir totalmente la analgesia.',
      targetReceptor: 'Receptor Kappa (Agonista) y Receptor Mu (Antagonista)',
      keyPoints: ['Efecto techo para depresión respiratoria', 'Estabilidad hemodinámica sin aumento de poscarga', 'Útil para revertir prurito por opioides espinales']
    },
    indications: {
      approved: ['Dolor agudo moderado a intenso (cirugía ginecológica, ortopédica, cólicos)', 'Suplemento analgésico balanceado en anestesia general', 'Analgesia obstétrica durante el trabajo de parto'],
      offLabel: ['Manejo del prurito rebelde secundario a opioides neuroaxiales']
    },
    dosageAndPosology: {
      adults: 'IV/IM/SC: 10 a 20 mg cada 3 a 6 horas según necesidad. Dosis máxima individual: 20 mg; máxima diaria: 160 mg.',
      pediatric: '0.1 a 0.2 mg/kg IV o IM cada 4-6 horas (máx 0.3 mg/kg o 15 mg/dosis).',
      renalAdjustment: 'Administrar con precaución reduciendo dosis en fallo renal grave.',
      hepaticAdjustment: 'Reducir dosis por metabolismo hepático.',
      routes: ['Intravenosa', 'Intramuscular', 'Subcutánea'],
      administrationNotes: 'Inyección IV lenta en al menos 2 a 3 minutos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a nalbufina', 'Depresión respiratoria grave preexistente', 'Traumatismo craneoencefálico'],
      warnings: ['Desencadena abstinencia inmediata en pacientes dependientes de morfina o heroína'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Categoría D si se usa a dosis altas prolongadas o cercano al parto.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: true
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sedación y somnolencia', 'Sudoración fría', 'Náuseas'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Cefalea', 'Vértigo', 'Sequedad de boca', 'Vómitos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Alucinaciones y disforia', 'Depresión respiratoria leve', 'Hipotensión transitoria'] }
    ],
    interactions: [
      { id: 'int-nal-1', interactingSubstance: 'Morfina, Fentanilo, Oxicodona', severity: 'Mayor', clinicalEffect: 'Antagonismo del efecto mu con reversión analgésica y dolor brusco.', recommendation: 'Evitar administrar simultáneamente.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 2.2 AINES Y ANALGÉSICOS NO OPIOIDES ---
  {
    id: 'med-asa',
    name: 'Ácido Acetilsalicílico (ASA / Aspirina)',
    brandNames: ['Aspirina', 'AAS', 'Adiro', 'Coraspin'],
    atcCode: 'B01AC06 / N02BA01',
    description: 'Salicilato antiinflamatorio, antipirético y analgésico no esteroideo que ejerce antiagregación plaquetaria irreversible de por vida de la plaqueta.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-asa-1', form: 'Comprimidos gastrorresistentes (dosis antiagregante)', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Almidón de maíz' },
      { id: 'p-asa-2', form: 'Comprimidos efervescentes / masticables', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos', excipients: 'Bicarbonato de sodio' }
    ],
    mechanismOfAction: {
      summary: 'Acetilación irreversible de la enzima ciclooxigenasa-1 (COX-1) y COX-2.',
      detailed: 'Transfiere un grupo acetilo al residuo de serina 530 en el canal catalítico de la COX-1 plaquetaria y serina 516 en la COX-2. Esto bloquea de forma permanente la síntesis de tromboxano A2 (TXA2, potente vasoconstrictor y agregante) durante toda la vida útil de la plaqueta (7-10 días), ya que las plaquetas carecen de núcleo y no sintetizan nuevas proteínas.',
      targetReceptor: 'Ciclooxigenasa-1 (Serina 530)',
      keyPoints: ['Antiagregación irreversible con dosis bajas (75-100 mg/día)', 'Efecto analgésico/antiinflamatorio a dosis altas (500-1000 mg cada 6-8h)', 'Riesgo de Síndrome de Reye en pediatría con infecciones virales']
    },
    indications: {
      approved: ['Prevención secundaria de eventos aterotrombóticos (infarto agudo de miocardio, ictus isquémico, angina)', 'Dolor leve a moderado y fiebre (adultos)', 'Enfermedad de Kawasaki (dosis antiinflamatorias altas)'],
      offLabel: ['Prevención de preeclampsia en gestantes de alto riesgo']
    },
    dosageAndPosology: {
      adults: 'Antiagregación: 100 mg una vez al día con la comida principal. Analgesia/Fiebre: 500 a 1000 mg cada 6-8 horas (máximo 4000 mg/día).',
      pediatric: 'Contraindicado en niños y adolescentes < 16 años por Síndrome de Reye (salvo Enfermedad de Kawasaki bajo protocolo hospitalario).',
      renalAdjustment: 'Evitar en insuficiencia renal grave (TFG < 30 ml/min).',
      hepaticAdjustment: 'Contraindicado en cirrosis hepática descompensada.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con abundante agua después de las comidas para mitigar irritación gástrica.'
    },
    safety: {
      contraindications: ['Úlcera gastroduodenal activa o hemorragia digestiva', 'Historial de asma inducida por aspirina o tríada de Widal', 'Niños y adolescentes con varicela o gripe (Síndrome de Reye)', 'Tercer trimestre de gestación'],
      warnings: ['Riesgo de hemorragia gastrointestinal y perforación gástrica', 'Suspender 7 días antes de cirugías electivas mayores'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado en 3er trimestre: cierre prematuro del ductus arterioso y hemorragia neonatal.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche; riesgo de sangrado y síndrome de Reye.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Dispepsia', 'Gastritis', 'Microsangrado digestivo oculto'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Epistaxis', 'Hematomas', 'Hemorragia gingival'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hemorragia digestiva masiva', 'Broncoespasmo asmático grave', 'Síndrome de Reye'] }
    ],
    interactions: [
      { id: 'int-asa-1', interactingSubstance: 'Anticoagulantes orales (Warfarina, Acenocumarol, Dabigatrán)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de hemorragias gastrointestinales e intracraneales.', recommendation: 'Evitar asociación o vigilar estrechamente si hay indicación cardiológica estricta.' },
      { id: 'int-asa-2', interactingSubstance: 'Ibuprofeno', severity: 'Mayor', clinicalEffect: 'El ibuprofeno bloquea el acceso de la aspirina al canal de la COX-1, anulando su efecto cardioprotector irreversible.', recommendation: 'Tomar aspirina al menos 30 minutos antes o 8 horas después de ibuprofeno.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-metamizol',
    name: 'Metamizol (Dipirona)',
    brandNames: ['Nolotil', 'Novalgina', 'Lasain', 'Dipirona'],
    atcCode: 'N02BB02',
    description: 'Pirazolona analgésica, antipirética y espasmolítica potente con mínimo efecto antiinflamatorio periférico y nula toxicidad gástrica.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-metam-1', form: 'Cápsulas duras', concentration: '575 mg', route: 'Oral', packaging: 'Caja x 20 y 60 cápsulas', excipients: 'Estearato de magnesio' },
      { id: 'p-metam-2', form: 'Ampollas inyectables', concentration: '2 g / 5 ml (400 mg/ml)', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Agua para inyectables' },
      { id: 'p-metam-3', form: 'Gotas orales / jarabe pediátrico', concentration: '500 mg / ml', route: 'Oral', packaging: 'Frasco gotero de 20 ml', excipients: 'Sacarina sódica' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de prostaglandinas a nivel central y periférico con efecto relajante del músculo liso visceral.',
      detailed: 'Profármaco cuyos metabolitos activos (4-metilaminoantipirina y 4-aminoantipirina) inhiben la COX-1, COX-2 y la COX-3 cerebral, activan la vía óxido nítrico-GMPc-canales de potasio a nivel periférico y modulan las vías opioides y cannabinoides centrales. Ejerce una relajación espasmolítica directa de la musculatura lisa de vías biliares y urinarias.',
      targetReceptor: 'COX central/periférica y canales de potasio dependientes de ATP',
      keyPoints: ['Excelente analgesia para dolor cólico visceral agudo', 'No produce lesiones en mucosa gástrica ni lesiona la función renal a corto plazo', 'Riesgo inmunológico de agranulocitosis (idiosincrásica)']
    },
    indications: {
      approved: ['Dolor agudo posoperatorio o postraumático intenso', 'Dolor de tipo cólico (nefrítico, biliar, espasmos viscerales)', 'Fiebre alta refractaria a otros antipiréticos'],
      offLabel: ['Dolor oncológico severo como coadyuvante']
    },
    dosageAndPosology: {
      adults: 'Oral: 575 mg cada 6 a 8 horas (máximo 3450 mg/día). Vía IV: 1 a 2 g diluidos en 100 ml de solución salina infundidos en 20 minutos (máx 4 g/día).',
      pediatric: '10 a 15 mg/kg por toma cada 6-8 horas.',
      renalAdjustment: 'Evitar tratamientos prolongados a dosis altas si ClCr < 30 ml/min.',
      hepaticAdjustment: 'Reducir dosis a la mitad en insuficiencia hepática.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular', 'Rectal'],
      administrationNotes: 'NUNCA administrar en bolo IV directo rápido: produce colapso circulatorio e hipotensión severa súbita.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a pirazolonas', 'Antecedente de agranulocitosis o aplasia medular', 'Déficit congénito de glucosa-6-fosfato deshidrogenasa (riesgo de hemólisis)', 'Porfiria hepática aguda'],
      warnings: ['Agranulocitosis: advertir al paciente acudir a urgencias si presenta fiebre inexplicable, dolor de garganta o úlceras orales', 'Hipotensión grave por infusión rápida'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre (oligohidramnios y cierre del conducto arterioso).',
      lactation: 'Precaución',
      lactationNotes: 'Los metabolitos pasan a la leche; evitar amamantar hasta 48 horas post-dosis.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Hipotensión arterial transitoria durante la perfusión', 'Erupciones exantemáticas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Agranulocitosis potencialmente mortal', 'Shock anafiláctico', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-metam-1', interactingSubstance: 'Metotrexato', severity: 'Mayor', clinicalEffect: 'Aumento de niveles plasmáticos de metotrexato con pancitopenia.', recommendation: 'Evitar combinación o monitorizar hemograma.' },
      { id: 'int-metam-2', interactingSubstance: 'Ciclosporina', severity: 'Moderada', clinicalEffect: 'Disminución de concentraciones séricas de ciclosporina.', recommendation: 'Monitorizar niveles de ciclosporina.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ibuprofeno',
    name: 'Ibuprofeno',
    brandNames: ['Espidifen', 'Neobrufen', 'Advil', 'Motrin', 'Dalsy'],
    atcCode: 'M01AE01',
    description: 'AINE derivado del ácido propiónico, analgésico, antiinflamatorio y antipirético de primera línea con amplio margen terapéutico.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-ibu-1', form: 'Comprimidos y sobres granulados', concentration: '400 mg y 600 mg', route: 'Oral', packaging: 'Caja x 30 y 40 comprimidos', excipients: 'Sacarosa, aspartamo, arginina' },
      { id: 'p-ibu-2', form: 'Suspensión oral pediátrica', concentration: '100 mg / 5 ml y 200 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 150 ml con jeringa dosificadora', excipients: 'Maltitol, benzoato de sodio' },
      { id: 'p-ibu-3', form: 'Solución para perfusión IV', concentration: '400 mg / 100 ml', route: 'Intravenosa', packaging: 'Frascos de infusión', excipients: 'Cloruro de sodio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición reversible y no selectiva de las isoenzimas ciclooxigenasa 1 y 2 (COX-1 y COX-2).',
      detailed: 'Bloquea la conversión del ácido araquidónico en prostaglandinas E2 (PGE2), PGI2 y tromboxano A2. La inhibición de PGE2 en hipotálamo produce el efecto antipirético; en terminaciones nerviosas nociceptivas reduce la hiperalgesia periférica y en el foco lesional mitiga el edema y vasodilatación inflamatoria.',
      targetReceptor: 'COX-1 y COX-2',
      keyPoints: ['Eficacia analgésica óptima a 400 mg por toma', 'Dosis de 600 mg añaden mayor poder antiinflamatorio pero incrementan riesgo digestivo y cardiovascular', 'Inhibe la vasodilatación de la arteriola aferente renal mediada por prostaglandinas']
    },
    indications: {
      approved: ['Dolor leve a moderado (dismenorrea primaria, cefaleas, odontalgia)', 'Artritis reumatoide, artrosis, espondilitis anquilosante', 'Cuadros febriles en adultos y pediatría'],
      offLabel: ['Cierre del conducto arterioso persistente en neonatos prematuros (IV)']
    },
    dosageAndPosology: {
      adults: '400 mg cada 6 a 8 horas con alimentos. En procesos inflamatorios graves: hasta 600 mg cada 8 horas (dosis máxima: 2400 mg/día).',
      pediatric: '20 a 30 mg/kg/día divididos en 3 a 4 tomas (5 a 10 mg/kg por toma cada 6-8 horas).',
      renalAdjustment: 'Evitar en insuficiencia renal moderada a severa (TFG < 30 ml/min).',
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Tomar con comidas o leche. Emplear la menor dosis eficaz durante el menor tiempo posible.'
    },
    safety: {
      contraindications: ['Úlcera péptica activa o hemorragia digestiva recurrente', 'Insuficiencia cardíaca grave (NYHA clase IV)', 'Tercer trimestre de embarazo', 'Aclaramiento renal < 30 ml/min'],
      warnings: ['Riesgo cardiovascular aumentado (trombosis, ictus) a dosis elevadas continuas (> 2400 mg/día)', 'Riesgo de nefrotoxicidad en pacientes deshidratados o con IECA/ARA-II (Triple Whammy)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado absolutamente en tercer trimestre (categoría D): cierre prematuro del ductus y anuria fetal.',
      lactation: 'Compatible',
      lactationNotes: 'Apenas pasa a leche materna; AINE de primera elección en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Dispepsia', 'Pirosis', 'Dolor epigástrico', 'Diarrea', 'Mareos'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Úlcera gástrica', 'Erupción cutánea', 'Zumbidos de oídos (tinnitus)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia renal aguda', 'Perforación gastrointestinal', 'Infarto agudo de miocardio'] }
    ],
    interactions: [
      { id: 'int-ibu-1', interactingSubstance: 'IECAs / ARA-II + Diuréticos ("Triple Whammy")', severity: 'Contraindicada', clinicalEffect: 'Colapso de la tasa de filtración glomerular e insuficiencia renal aguda anúrica.', recommendation: 'Evitar la triple combinación; asegurar hidratación y vigilar creatinina.' },
      { id: 'int-ibu-2', interactingSubstance: 'Anticoagulantes orales (Acenocumarol, Warfarina)', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de hemorragia digestiva por inhibición plaquetaria y erosión gástrica.', recommendation: 'Evitar; asociar protector IBP si es imprescindible.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ketorolaco',
    name: 'Ketorolaco Trometamol',
    brandNames: ['Toradol', 'Droal', 'Acular', 'Ketorolaco'],
    atcCode: 'M01AB15',
    description: 'AINE heterocíclico con extraordinaria potencia analgésica equiparable a dosis bajas de opioides pero sin acción sedante.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-ket-1', form: 'Solución inyectable en ampollas', concentration: '30 mg / ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas de 1 ml', excipients: 'Etanol, cloruro de sodio' },
      { id: 'p-ket-2', form: 'Comprimidos recubiertos', concentration: '10 mg', route: 'Oral', packaging: 'Caja x 10 y 20 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-ket-3', form: 'Colirio oftálmico en solución', concentration: '0.5% (5 mg/ml)', route: 'Oftálmica', packaging: 'Frasco gotero de 5 ml', excipients: 'Cloruro de benzalconio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición muy potente no selectiva de la COX-1 y COX-2 con marcada afinidad por la COX-1.',
      detailed: 'Bloquea intensamente la producción periférica de prostaglandinas proinflamatorias y proalgésicas. Su alta afinidad por la COX-1 confiere una potencia analgésica profunda pero eleva notablemente el riesgo de úlcera gástrica, sangrado y daño renal si se prolonga su uso.',
      targetReceptor: 'Ciclooxigenasa-1 (preferente)',
      keyPoints: ['Potencia analgésica comparable a la morfina en dolor posquirúrgico agudo', 'USO LIMITADO A UN MÁXIMO ESTRICTO DE 5 DÍAS (por vía parenteral) o 7 días (oral)', 'Alto potencial de sangrado quirúrgico y nefrotoxicidad']
    },
    indications: {
      approved: ['Tratamiento a corto plazo del dolor agudo moderado a intenso en posoperatorio', 'Dolor cólico nefrítico agudo en urgencias', 'Inflamación ocular postcirugía de cataratas (vía oftálmica)'],
      offLabel: ['Crisis agudas de migraña grave en urgencias']
    },
    dosageAndPosology: {
      adults: 'IV/IM: 30 mg inicial; luego 10 a 30 mg cada 6 horas según necesidad (máx 90 mg/día; en ancianos o peso < 50 kg máximo 60 mg/día). Duración máxima: 5 días.',
      pediatric: 'No recomendado en menores de 16 años.',
      renalAdjustment: 'Contraindicado en insuficiencia renal moderada o severa.',
      hepaticAdjustment: 'Reducir dosis a 10 mg cada 6-8 horas.',
      routes: ['Intravenosa', 'Intramuscular', 'Oral', 'Oftálmica'],
      administrationNotes: 'Inyectar IV en bolo en no menos de 15 segundos.'
    },
    safety: {
      contraindications: ['Hemorragia activa o riesgo elevado de sangrado posquirúrgico', 'Antecedente de úlcera péptica o hemorragia digestiva previa', 'Insuficiencia renal moderada a grave', 'Uso como analgésico profiláctico antes o durante intervenciones quirúrgicas mayores'],
      warnings: ['NUNCA prolongar el tratamiento más allá de 5 días por riesgo crítico de perforación gastrointestinal y fallo renal agudo'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en el parto y 3er trimestre.',
      lactation: 'Contraindicado',
      lactationNotes: 'Evitar en lactancia.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo extremo de sangrado gastrointestinal, úlceras pépticas perforadas e insuficiencia renal aguda si se superan los 5 días de uso.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Náuseas', 'Dispepsia', 'Dolor abdominal'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Sangrado en sitio de incisión', 'Cefalea', 'Mareos', 'Edema'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hemorragia digestiva catastrófica', 'Insuficiencia renal anúrica', 'Necrosis papilar renal'] }
    ],
    interactions: [
      { id: 'int-ket-1', interactingSubstance: 'Otros AINEs o Aspirina', severity: 'Contraindicada', clinicalEffect: 'Aumento exponencial del riesgo de úlcera y hemorragia digestiva sin incremento del beneficio analgésico.', recommendation: 'Prohibida la coadministración con cualquier otro AINE.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-naproxeno',
    name: 'Naproxeno',
    brandNames: ['Antalgin', 'Naprosyn', 'Aleve', 'Momen'],
    atcCode: 'M01AE02',
    description: 'AINE derivado del ácido propiónico de vida media prolongada (12 a 15 horas) con el mejor perfil de seguridad cardiovascular relativo.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-nap-1', form: 'Comprimidos entéricos / recubiertos', concentration: '500 mg y 550 mg (sal sódica)', route: 'Oral', packaging: 'Caja x 20 y 40 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición no selectiva de la síntesis de prostaglandinas por bloqueo de COX-1 y COX-2.',
      detailed: 'Inhibe de forma equilibrada ambas ciclooxigenasas. Su semivida plasmática prolongada permite una supresión sostenida de tromboxano A2 similar a dosis bajas de aspirina, motivo por el cual es el AINE con menor incremento relativo de riesgo aterotrombótico miocárdico en guías cardiológicas internacionales.',
      targetReceptor: 'COX-1 y COX-2',
      keyPoints: ['Semivida de 12-15 horas que permite posología cada 12 horas', 'Menor riesgo de infarto de miocardio comparado con diclofenaco o coxibes', 'Riesgo gastrointestinal moderado a alto (asociar IBP)']
    },
    indications: {
      approved: ['Tratamiento sintomático de osteoartritis, artritis reumatoide y gota aguda', 'Dismenorrea primaria y dolor musculoesquelético'],
      offLabel: ['Profilaxis de crisis de migraña menstrual']
    },
    dosageAndPosology: {
      adults: 'Dosis habitual: 500 mg cada 12 horas con las comidas. Dosis inicial en gota aguda: 750 mg, luego 250 mg cada 8 horas hasta resolución.',
      pediatric: 'Artritis idiopática juvenil: 10 mg/kg/día en 2 tomas (cada 12h).',
      renalAdjustment: 'Contraindicado si ClCr < 30 ml/min.',
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      routes: ['Oral'],
      administrationNotes: 'Ingerir entero con un vaso de agua durante o tras los alimentos.'
    },
    safety: {
      contraindications: ['Úlcera gástrica activa', 'Insuficiencia renal o hepática grave', 'Tercer trimestre de embarazo'],
      warnings: ['AINE de elección en pacientes con riesgo cardiovascular elevado que requieran forzosamente un antiinflamatorio (siempre con protección gástrica)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Categoría D en 3er trimestre.',
      lactation: 'Compatible',
      lactationNotes: 'Pasa a leche en concentraciones insignificantes.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Pirosis', 'Náuseas', 'Cefalea', 'Edema maleolar'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Úlcera gastroduodenal', 'Somnolencia', 'Vértigo'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Perforación gástrica', 'Insuficiencia renal'] }
    ],
    interactions: [
      { id: 'int-nap-1', interactingSubstance: 'Litio', severity: 'Mayor', clinicalEffect: 'Disminuye la excreción renal de litio causando niveles tóxicos.', recommendation: 'Monitorizar litemia y ajustar dosis de litio.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-diclofenaco',
    name: 'Diclofenaco Sódico / Potásico',
    brandNames: ['Voltaren', 'Voltadol', 'Cataflam', 'Artrotec'],
    atcCode: 'M01AB05',
    description: 'AINE derivado del ácido fenilacético con potente actividad antiinflamatoria y analgésica rápida.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-dic-1', form: 'Comprimidos entéricos y retard', concentration: '50 mg y 100 mg (retard)', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-dic-2', form: 'Ampollas inyectables IM/IV', concentration: '75 mg / 3 ml', route: 'Intramuscular', packaging: 'Caja x 6 ampollas de 3 ml', excipients: 'Propilenglicol, alcohol bencílico, metabisulfito de sodio' },
      { id: 'p-dic-3', form: 'Gel tópico al 1% y 2%', concentration: '10 mg/g y 20 mg/g', route: 'Tópica', packaging: 'Tubo de 60 g y 100 g', excipients: 'Propilenglicol, perfume' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición preferente de la COX-2 sobre la COX-1 con acumulación en el líquido sinovial articular.',
      detailed: 'Inhibe la biosíntesis de prostaglandinas inflamatorias. Se concentra preferencialmente en el líquido sinovial de articulaciones inflamadas, donde persiste en concentraciones activas por más tiempo que en el plasma.',
      targetReceptor: 'COX-2 preferente sobre COX-1',
      keyPoints: ['Excelente penetración articular', 'Mayor riesgo cardiovascular similar a coxibes (evitar en cardiopatía isquémica)', 'Riesgo de hepatotoxicidad leve (elevación de transaminasas)']
    },
    indications: {
      approved: ['Ataques agudos de gota, reumatismo inflamatorio y poliartritis', 'Cólico renal agudo (vía intramuscular)', 'Dolor posoperatorio y postraumático', 'Tratamiento tópico de esguinces y contusiones'],
      offLabel: ['Dismenorrea severa']
    },
    dosageAndPosology: {
      adults: 'Oral: 50 mg cada 8 horas o 100 mg retard una vez al día con comidas (máx 150 mg/día). IM profunda en glúteo: 75 mg una vez al día (máx 2 días).',
      pediatric: 'No recomendado en niños menores de 14 años.',
      renalAdjustment: 'Contraindicado en fallo renal moderado a severo.',
      hepaticAdjustment: 'Monitorizar transaminasas si el tratamiento supera las 2 semanas.',
      routes: ['Oral', 'Intramuscular', 'Tópica', 'Intravenosa', 'Rectal'],
      administrationNotes: 'Vía IM exclusivamente profunda en el cuadrante superior externo del glúteo para evitar lesión del nervio ciático.'
    },
    safety: {
      contraindications: ['Cardiopatía isquémica establecida, enfermedad arterial periférica o ictus previo', 'Insuficiencia cardíaca congestiva (clases II-IV NYHA)', 'Úlcera péptica activa'],
      warnings: ['Contraindicado en pacientes con patología cardiovascular previa por riesgo aumentado de infarto e ictus'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado absolutamente en tercer trimestre (categoría D).',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Epigastralgia', 'Náuseas', 'Diarrea', 'Elevación de transaminasas (ALT/AST)'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Eventos trombóticos arteriales (IAM, ictus)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis tóxica', 'Perforación intestinal', 'Síndrome de Lyell'] }
    ],
    interactions: [
      { id: 'int-dic-1', interactingSubstance: 'Inhibidores de la ECA / Betabloqueantes', severity: 'Moderada', clinicalEffect: 'Atenuación del control tensional y daño renal agudo.', recommendation: 'Controlar tensión arterial y función renal.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ketoprofeno',
    name: 'Ketoprofeno',
    brandNames: ['Fastum Gel', 'Orudis', 'Ketoplus', 'Actron'],
    atcCode: 'M01AE03',
    description: 'AINE propiónico de rápida absorción que inhibe tanto la ciclooxigenasa como la lipooxigenasa en la cascada inflamatoria.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-kpro-1', form: 'Cápsulas y comprimidos de liberación prolongada', concentration: '50 mg, 100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 20 y 30 cápsulas', excipients: 'Lactosa' },
      { id: 'p-kpro-2', form: 'Gel tópico al 2.5%', concentration: '25 mg/g', route: 'Tópica', packaging: 'Tubo de 60 g', excipients: 'Etanol, carbómero' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición dual de ciclooxigenasa (COX) y 5-lipooxigenasa (LOX), reduciendo prostaglandinas y leucotrienos.',
      detailed: 'Al bloquear también la enzima lipooxigenasa, disminuye la síntesis de leucotrienos quimiotácticos que atraen polimorfonucleares al foco articular.',
      targetReceptor: 'COX-1, COX-2 y 5-Lipooxigenasa',
      keyPoints: ['Efecto antiinflamatorio articular rápido', 'Importante fotosensibilidad en formulaciones tópicas en gel', 'Eficaz en lumbalgias agudas']
    },
    indications: {
      approved: ['Artritis reumatoide, artrosis, espondilitis anquilosante', 'Episodios agudos de gota y periartritis escápulo-humeral', 'Tendinitis y esguinces'],
      offLabel: ['Dismenorrea aguda']
    },
    dosageAndPosology: {
      adults: 'Oral: 50 mg cada 8 horas o 200 mg una vez al día con formulación retard. Gel tópico: 2 a 4 aplicaciones al día.',
      pediatric: 'No recomendado en menores de 15 años.',
      renalAdjustment: 'Contraindicado en ClCr < 30 ml/min.',
      hepaticAdjustment: 'Reducir dosis a la mitad.',
      routes: ['Oral', 'Tópica', 'Intramuscular'],
      administrationNotes: 'Proteger rigurosamente del sol la piel donde se aplicó el gel durante y 2 semanas tras el tratamiento.'
    },
    safety: {
      contraindications: ['Fotosensibilidad cutánea conocida a ketoprofeno o fenofibrato', 'Úlcera péptica activa', '3er trimestre gestación'],
      warnings: ['Reacciones cutáneas graves de fotosensibilización con exposición a rayos solares o UV artificiales (cabinas de bronceado)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Evitar en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Dispepsia', 'Náuseas', 'Fotosensibilidad tópica'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Dermatitis de contacto eccematosa ampollosa severa', 'Hemorragia digestiva'] }
    ],
    interactions: [
      { id: 'int-kpro-1', interactingSubstance: 'Metotrexato a dosis altas', severity: 'Contraindicada', clinicalEffect: 'Toxicidad hematológica mortal por disminución de su depuración.', recommendation: 'No asociar.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-indometacina',
    name: 'Indometacina',
    brandNames: ['Inacid', 'Indocin', 'Flogoter'],
    atcCode: 'M01AB01',
    description: 'AINE indolacético de gran potencia antiinflamatoria. Fármaco de referencia en ataques agudos de gota, espondilitis y cefaleas hemicráneas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-indo-1', form: 'Cápsulas', concentration: '25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas', excipients: 'Lactosa monohidrato' },
      { id: 'p-indo-2', form: 'Supositorios rectales', concentration: '100 mg', route: 'Rectal', packaging: 'Caja x 12 supositorios', excipients: 'Glicéridos semisintéticos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibidor potente no selectivo de la COX y reductor de la motilidad de leucocitos polimorfonucleares.',
      detailed: 'Inhibe reversiblemente la COX-1 y COX-2, frena la fagocitosis de cristales de urato en los ataques gotosos e inhibe la síntesis de mucopolisacáridos.',
      targetReceptor: 'COX-1 y COX-2',
      keyPoints: ['Eficacia diagnóstica y terapéutica en Hemicránea Continua (prueba de respuesta a indometacina)', 'Fármaco clásico para inducir cierre de ductus arterioso en neonatos', 'Alta incidencia de cefaleas frontales matutinas (25-50% de pacientes)']
    },
    indications: {
      approved: ['Ataque agudo de gota (artritis microcristalina)', 'Espondilitis anquilosante y bursitis aguda', 'Hemicránea paroxística y cefalea punzante'],
      offLabel: ['Tocolisis en amenaza de parto pretérmino antes de semana 32']
    },
    dosageAndPosology: {
      adults: 'Ataque de gota: 50 mg cada 8 horas con comida hasta ceder el dolor (reducir a 25 mg cada 8h). Dolor crónico: 25 a 50 mg cada 8-12 horas.',
      pediatric: 'No recomendado en niños excepto para cierre de conducto arterioso en UCIN.',
      renalAdjustment: 'Contraindicado en insuficiencia renal moderada o grave.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral', 'Rectal'],
      administrationNotes: 'Tomar siempre con las comidas o leche para atenuar intolerancia gástrica.'
    },
    safety: {
      contraindications: ['Úlcera gástrica activa', 'Trastornos psiquiátricos graves (depresión, psicosis)', 'Enfermedad de Parkinson o epilepsia (puede agravarlos)'],
      warnings: ['Cefalea frontal intensa, mareos y confusión mental frecuentes en ancianos'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Cefalea frontal pulsátil', 'Mareos', 'Náuseas', 'Vómitos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Confusión mental', 'Depresión', 'Dolor abdominal'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Aplasia medular', 'Perforación gastrointestinal', 'Psicosis tóxica'] }
    ],
    interactions: [
      { id: 'int-indo-1', interactingSubstance: 'Probenecid', severity: 'Mayor', clinicalEffect: 'Aumenta significativamente las concentraciones plasmáticas de indometacina.', recommendation: 'Reducir dosis de indometacina.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-nimesulida',
    name: 'Nimesulida',
    brandNames: ['Aulin', 'Guaxan', 'Mesulid'],
    atcCode: 'M01AX17',
    description: 'AINE sulfonanilida con inhibición selectiva preferencial de COX-2. Su uso está estrictamente restringido a tratamientos agudos cortos.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-nim-1', form: 'Comprimidos y sobres granulados', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 15 y 30 sobres', excipients: 'Sacarosa, cetomacrogol' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición preferente de COX-2, neutralización de radicales libres e inhibición de fosfodiesterasa IV.',
      detailed: 'Inhibe selectivamente la COX-2 reduciendo prostaglandinas inflamatorias, disminuye la liberación de enzimas lisosómicas y anión superóxido por neutrófilos activados.',
      targetReceptor: 'Ciclooxigenasa-2 (COX-2) preferencial',
      keyPoints: ['Rápido inicio de acción analgésica', 'USO LIMITADO A UN MÁXIMO DE 15 DÍAS DE TRATAMIENTO', 'Riesgo estricto de hepatotoxicidad fulminante']
    },
    indications: {
      approved: ['Tratamiento de segunda línea del dolor agudo somático', 'Tratamiento de la dismenorrea primaria']
    },
    dosageAndPosology: {
      adults: '100 mg cada 12 horas por vía oral después de las comidas. DURACIÓN MÁXIMA: 15 DÍAS.',
      pediatric: 'Contraindicado en menores de 12 años.',
      renalAdjustment: 'Contraindicado si TFG < 30 ml/min.',
      hepaticAdjustment: 'CONTRAINDICADO ABSOLUTAMENTE en cualquier grado de insuficiencia hepática o elevación de enzimas.',
      routes: ['Oral'],
      administrationNotes: 'Suspender de inmediato si el paciente presenta síntomas prodrómicos de daño hepático (anorexia, náuseas, vómitos, coluria, ictericia).'
    },
    safety: {
      contraindications: ['Insuficiencia hepática o uso simultáneo con sustancias hepatotóxicas (alcohol, fármacos)', 'Antecedente previo de reacciones hepatotóxicas a nimesulida', 'Menores de 12 años'],
      warnings: ['Hepatotoxicidad grave (necrosis hepática e insuficiencia hepática fulminante que requiere trasplante)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre.',
      lactation: 'Contraindicado',
      lactationNotes: 'No usar en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea', 'Náuseas', 'Vómitos', 'Aumento de transaminasas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis fulminante letal', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-nim-1', interactingSubstance: 'Alcohol u otros fármacos hepatotóxicos', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de toxicidad hepatocelular irreversible.', recommendation: 'Prohibir consumo de alcohol y fármacos hepatotóxicos.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-piroxicam',
    name: 'Piroxicam (Piroxicanes / Oxicams)',
    brandNames: ['Feldene', 'Cycladol', 'Sasulen'],
    atcCode: 'M01AC01',
    description: 'AINE de la familia de los oxicams caracterizado por una semivida de eliminación extremadamente prolongada (alrededor de 50 horas).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-pir-1', form: 'Cápsulas y comprimidos dispersables', concentration: '20 mg', route: 'Oral', packaging: 'Caja x 20 cápsulas', excipients: 'Lactosa monohidrato' },
      { id: 'p-pir-2', form: 'Ampollas inyectables IM', concentration: '20 mg / ml', route: 'Intramuscular', packaging: 'Caja x 5 ampollas', excipients: 'Nicotinamida, propilenglicol' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición prolongada no selectiva de la COX-1 y COX-2.',
      detailed: 'Inhibe la síntesis de prostaglandinas tisulares e inhibe la activación de neutrófilos. Su eliminación lenta condiciona concentraciones estables en sangre con una sola toma diaria.',
      targetReceptor: 'COX-1 y COX-2',
      keyPoints: ['Semivida de 50 horas (monodosis cada 24 horas)', 'Mayor riesgo de sangrado gastrointestinal y reacciones cutáneas graves que otros AINEs', 'Uso como tratamiento de segunda línea']
    },
    indications: {
      approved: ['Alivio sintomático de osteoartritis, artritis reumatoide y espondilitis anquilosante (segunda línea tras fracaso de otros AINEs)']
    },
    dosageAndPosology: {
      adults: '20 mg una vez al día con la comida principal. En ancianos iniciar con 10 mg/día.',
      pediatric: 'Contraindicado en población pediátrica.',
      renalAdjustment: 'Contraindicado en insuficiencia renal grave.',
      hepaticAdjustment: 'Reducir dosis.',
      routes: ['Oral', 'Intramuscular'],
      administrationNotes: 'Evaluar necesidad del tratamiento a los 14 días.'
    },
    safety: {
      contraindications: ['Antecedente de toxicidad cutánea severa por fármacos (SJS/NET)', 'Úlcera péptica activa o hemorragia digestiva previa', 'Cardiopatía isquémica severa'],
      warnings: ['Mayor riesgo de toxicidad cutánea potencialmente mortal (Stevens-Johnson) y úlcera péptica entre todos los AINEs clásicos'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Dispepsia', 'Dolor epigástrico', 'Anorexia', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Necrólisis epidérmica tóxica (Síndrome de Lyell)', 'Hemorragia digestiva grave'] }
    ],
    interactions: [
      { id: 'int-pir-1', interactingSubstance: 'Anticoagulantes orales o Antiagregantes', severity: 'Contraindicada', clinicalEffect: 'Riesgo crítico de hemorragia gastrointestinal alta.', recommendation: 'Evitar asociación.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-celecoxib',
    name: 'Celecoxib (Coxibes / Inhibidores Selectivos COX-2)',
    brandNames: ['Celebrex', 'Artilog', 'Onsenal'],
    atcCode: 'M01AH01',
    description: 'Inhibidor selectivo de la ciclooxigenasa-2 (COX-2) de segunda generación diseñado para preservar la mucosa gástrica dependiente de COX-1.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-cel-1', form: 'Cápsulas duras', concentration: '100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas', excipients: 'Lactosa monohidrato, laurilsulfato sódico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición selectiva y reversible de la enzima ciclooxigenasa-2 (COX-2) sin inhibir la COX-1 plaquetaria ni gástrica.',
      detailed: 'Se une al bolsillo lateral voluminoso característico de la COX-2 inducible por citoquinas en focos inflamatorios, dejando libre la COX-1 fisiológica que produce PGE2 y prostaciclina protectora gástrica y tromboxano plaquetario. Al no inhibir el TXA2 plaquetario pero sí reducir la PGI2 endotelial vasodilatadora y antiagregante, puede favorecer un desequilibrio protrombótico cardiovascular.',
      targetReceptor: 'Ciclooxigenasa-2 (selectividad > 30 veces sobre COX-1)',
      keyPoints: ['Reduce el daño ulceroso gastrointestinal en un 50% comparado con AINEs clásicos', 'No altera la agregación plaquetaria (no tiene efecto cardioprotector)', 'Riesgo trombótico cardiovascular dosis y tiempo dependiente']
    },
    indications: {
      approved: ['Alivio de síntomas en osteoartritis, artritis reumatoide y espondilitis anquilosante en pacientes con alto riesgo digestivo', 'Dolor agudo moderado posoperatorio o dismenorrea'],
      offLabel: ['Poliposis adenomatosa colónica familiar (reducción del número de pólipos)']
    },
    dosageAndPosology: {
      adults: 'Osteoartritis: 200 mg una vez al día o 100 mg cada 12 horas. Artritis reumatoide: 100 a 200 mg cada 12 horas (máximo 400 mg/día).',
      pediatric: 'Artritis idiopática juvenil en niños ≥ 2 años (≥ 10 a 25 kg): 50 mg cada 12 horas; > 25 kg: 100 mg cada 12h.',
      renalAdjustment: 'No recomendado en ClCr < 30 ml/min.',
      hepaticAdjustment: 'Reducir dosis al 50% en insuficiencia hepática moderada (Child-Pugh B). Contraindicado en Child-Pugh C.',
      routes: ['Oral'],
      administrationNotes: 'Puede tomarse con o sin alimentos.'
    },
    safety: {
      contraindications: ['Cardiopatía isquémica establecida, enfermedad cerebrovascular o insuficiencia cardíaca congestiva (NYHA II-IV)', 'Hipersensibilidad conocida a las sulfonamidas (alergia cruzada al grupo sulfamida)', 'Úlcera péptica activa o hemorragia'],
      warnings: ['Riesgo incrementado de eventos aterotrombóticos, infarto de miocardio e ictus'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en 3er trimestre.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia a leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipertensión arterial', 'Edema periférico', 'Dispepsia', 'Infección del tracto respiratorio superior'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Infarto de miocardio', 'Ictus isquémico', 'Insuficiencia cardíaca'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Perforación gastrointestinal', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-cel-1', interactingSubstance: 'Warfarina y Acenocumarol', severity: 'Mayor', clinicalEffect: 'Aumento del INR y riesgo de sangrado grave por competición de metabolismo CYP2C9.', recommendation: 'Monitorizar estrechamente el tiempo de protrombina (INR).' },
      { id: 'int-cel-2', interactingSubstance: 'Fluconazol', severity: 'Moderada', clinicalEffect: 'Inhibe el metabolismo de celecoxib duplicando sus concentraciones plasmáticas.', recommendation: 'Reducir la dosis de celecoxib a la mitad.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
