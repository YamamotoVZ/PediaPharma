import { Medication } from '../../types/pharmacy';

export const ANTIBACTERIALS_EXTENDED_MEDICATIONS: Medication[] = [
  // ==========================================
  // --- PENICILINAS ---
  // ==========================================
  {
    id: 'med-penicilina-g',
    name: 'Bencilpenicilina (Penicilina G Sódica y Benzatínica)',
    brandNames: ['Benzetacil', 'Penilevel', 'Bencilpenicilina Sódica Richmond', 'Megacilina'],
    atcCode: 'J01CE01 / J01CE08',
    description: 'Betalactámico natural de referencia bactericida tiempo-dependiente, activo frente a estreptococos, Treponema pallidum y anaerobios orofaríngeos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-png-1', form: 'Polvo y disolvente para solución inyectable IV', concentration: '1,000,000 UI y 5,000,000 UI (G Sódica)', route: 'Intravenosa', packaging: 'Vial de vidrio con ampolla de agua para inyección de 10 ml', excipients: 'Contiene 1.68 mEq de sodio por millón de UI' },
      { id: 'p-png-2', form: 'Suspensión inyectable de depósito IM profunda', concentration: '1,200,000 UI y 2,400,000 UI (G Benzatínica)', route: 'Intramuscular', packaging: 'Vial o jeringa precargada de liberación prolongada', excipients: 'Lecitina, povidona, citrato sódico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de peptidoglicano de la pared bacteriana uniéndose a las PBPs (penicillin-binding proteins) provocando lisis osmótica.',
      detailed: 'Actúa bloqueando la transpeptidación final en la biosíntesis de peptidoglicano de la pared celular bacteriana. La penicilina G acila el residuo serina activo de las enzimas transpeptidasas (PBPs 1, 2 y 3). La falta de entrecruzamiento de la pared conduce a la activación de autolisinas bacterianas endógenas y lisis celular bacteriana irreversible.',
      targetReceptor: 'PBPs (Proteínas fijadoras de penicilina) 1, 2 y 3',
      keyPoints: ['Bactericida tiempo-dependiente (% T > CIM)', 'Fármaco de elección universal para todas las etapas de Sífilis (Treponema pallidum)', 'La sal benzatínica es de depósito EXCLUSIVAMENTE INTRAMUSCULAR (la inyección IV es mortal)']
    },
    indications: {
      approved: [
        'Sífilis en todas sus etapas (primaria, secundaria, latente temprana/tardía y neurosífilis)',
        'Faringoamigdalitis estreptocócica por Streptococcus pyogenes (profilaxis de fiebre reumática)',
        'Erisipela y celulitis no purulenta',
        'Endocarditis infecciosa por Streptococcus viridans y Streptococcus bovis',
        'Meningitis bacteriana por Neisseria meningitidis o Streptococcus pneumoniae sensible',
        'Fascitis necrotizante estreptocócica y gangrena gaseosa (asociada a Clindamicina)'
      ],
      offLabel: ['Profilaxis secundaria de glomerulonefritis postestreptocócica y ántrax por Bacillus anthracis']
    },
    dosageAndPosology: {
      adults: 'Penicilina G Sódica IV: 12 a 24 millones UI/día divididos en infusión cada 4 horas (o infusión continua). Neurosífilis: 18-24 millones UI/día IV cada 4 h por 10-14 días. Penicilina G Benzatínica IM: Sífilis primaria/secundaria: 2.4 millones UI IM profunda en dosis única. Faringitis estreptocócica: 1.2 millones UI IM dosis única.',
      pediatric: 'G Sódica: 100,000 a 250,000 UI/kg/día IV en 4-6 dosis. G Benzatínica: < 27 kg: 600,000 UI IM; > 27 kg: 1,200,000 UI IM dosis única.',
      renalAdjustment: 'Filtrado glomerular (TFG) 10-50 ml/min: 75% de la dosis cada 4-6 h; TFG < 10 ml/min: 20-50% de la dosis cada 8-12 h (riesgo de neurotoxicidad).',
      hepaticAdjustment: 'No suele requerir ajuste a menos que coexista con disfunción renal grave.',
      routes: ['Intravenosa', 'Intramuscular'],
      administrationNotes: 'BENZATÍNICA SOLO POR VÍA IM PROFUNDA EN GLÚTEO. La administración IV accidental causa embolia pulmonar, infartos isquémicos masivos y muerte instantánea (Síndrome de Nicolau / Hoigné).'
    },
    safety: {
      contraindications: ['Hipersensibilidad confirmada a penicilinas o betalactámicos (antecedente de anafilaxia o angioedema)'],
      warnings: ['Reacción de Jarisch-Herxheimer durante el tratamiento de la sífilis (fiebre, mialgias, hipotensión por lisis masiva de espiroquetas)', 'Riesgo de convulsiones y coma por neurotoxicidad con dosis IV masivas en insuficiencia renal'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el embarazo; fármaco de elección para tratar la sífilis materna y prevenir la sífilis congénita.',
      lactation: 'Compatible',
      lactationNotes: 'Pasa a leche materna en cantidades mínimas; seguro en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Exantema maculopapular', 'Dolor local intenso e induración en el sitio de inyección IM', 'Náuseas y diarrea leve'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Reacción de Jarisch-Herxheimer en pacientes luéticos', 'Urticaria aguda'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anafilaxia fatal', 'Neurotoxicidad y crisis epilépticas (a altas concentraciones)', 'Nefritis intersticial inmunoalérgica', 'Anemia hemolítica autoinmune Coombs positiva'] }
    ],
    interactions: [
      { id: 'int-png-1', interactingSubstance: 'Metotrexato', severity: 'Mayor', clinicalEffect: 'La penicilina bloquea la secreción tubular renal de metotrexato, provocando toxicidad hematológica severa.', recommendation: 'Monitorear niveles de metotrexato o suspender temporalmente.' },
      { id: 'int-png-2', interactingSubstance: 'Antibióticos bacteriostáticos (Tetraciclinas, Macrólidos)', severity: 'Moderada', clinicalEffect: 'Antagonismo in vitro: los betalactámicos requieren bacterias en fase activa de crecimiento para ejercer su efecto bactericida.', recommendation: 'Evitar administrar simultáneamente.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ampicilina',
    name: 'Ampicilina',
    brandNames: ['Britapen', 'Gobemicina', 'Ampimax', 'Omnipen'],
    atcCode: 'J01CA01',
    description: 'Aminopenicilina de amplio espectro bactericida con excelente cobertura sobre Listeria monocytogenes, Enterococcus faecalis y bacilos Gram negativos sensibles.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-amp-1', form: 'Polvo para solución inyectable IV/IM', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial x 1 g con ampolla de disolvente de 5 ml', excipients: 'Sodio' },
      { id: 'p-amp-2', form: 'Cápsulas y comprimidos orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 y 30 cápsulas', excipients: 'Celulosa microcristalina' },
      { id: 'p-amp-3', form: 'Polvo para suspensión oral', concentration: '250 mg / 5 ml', route: 'Oral', packaging: 'Frasco para reconstituir 60 ml y 100 ml', excipients: 'Sacarosa, aroma a frutas' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared bacteriana fijándose a PBPs 1A, 1B, 2 y 3; su grupo amino libre facilita el paso a través de las porinas OmpF de bacterias Gram negativas.',
      detailed: 'Aminopenicilina hidrofílica que atraviesa las porinas de la membrana externa de bacilos Gram negativos, inhibiendo las enzimas de transpeptidación bacterianas. Es inactivada por betalactamasas plasmídicas.',
      targetReceptor: 'PBPs bacterianas de Gram positivos y negativos',
      keyPoints: ['Fármaco de elección para meningitis y sepsis por Listeria monocytogenes (neonatos y ancianos)', 'Componente angular del régimen sinérgico para endocarditis por Enterococcus faecalis (asociado a Ceftriaxona o Gentamicina)', 'La absorción oral disminuye notablemente con los alimentos']
    },
    indications: {
      approved: [
        'Meningitis neonatal y en adultos >50 años / inmunodeprimidos por Listeria monocytogenes',
        'Endocarditis infecciosa por Enterococcus faecalis y Streptococcus del grupo viridans',
        'Infecciones urinarias por enterococos o E. coli sensible en gestantes',
        'Colecistitis aguda y colangitis bacteriana comunitaria',
        'Infecciones respiratorias agudas comunitarias por H. influenzae y S. pneumoniae sensibles'
      ],
      offLabel: ['Profilaxis periparto de sepsis neonatal por Streptococcus agalactiae (EGB)']
    },
    dosageAndPosology: {
      adults: 'Vía IV: 1 a 2 g cada 4 a 6 horas. En meningitis por Listeria o endocarditis enterocócica: 2 g IV cada 4 horas (12 g/día) durante 14 a 42 días. Vía Oral: 500 mg cada 6 horas con el estómago vacío (1 h antes o 2 h después de comer).',
      pediatric: 'Neonatos: 100 a 150 mg/kg/día IV dividido cada 8-12 h (hasta 200-300 mg/kg/día en meningitis). Niños: 100-200 mg/kg/día IV cada 6 horas.',
      renalAdjustment: 'TFG 10-50 ml/min: administrar cada 6-12 horas; TFG < 10 ml/min: administrar cada 12-24 horas.',
      hepaticAdjustment: 'No precisa ajuste posológico.',
      routes: ['Intravenosa', 'Intramuscular', 'Oral'],
      administrationNotes: 'Infusión IV directa lenta en 3-5 minutos o perfusión corta en 30 minutos. Por vía oral tomar 1 hora antes de alimentos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave a aminopenicilinas o betalactámicos', 'Mononucleosis infecciosa por virus de Epstein-Barr (desarrolla exantema maculopapular no alérgico en el 90-100% de los casos)'],
      warnings: ['Riesgo de colitis pseudomembranosa por Clostridioides difficile', 'Ajustar dosis en fallo renal para prevenir mioclonías'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Fármaco seguro en todos los trimestres de la gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Exantema cutáneo en pacientes con mononucleosis infecciosa o leucemia linfática'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea y náuseas', 'Glositis y estomatitis', 'Candidiasis mucocutánea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anafilaxia', 'Colitis por C. difficile', 'Nefritis intersticial'] }
    ],
    interactions: [
      { id: 'int-amp-1', interactingSubstance: 'Alopurinol', severity: 'Mayor', clinicalEffect: 'Aumento marcado de la incidencia de exantema cutáneo medicamentoso (rash por alopurinol-ampicilina).', recommendation: 'Evitar la asociación siempre que sea factible.' },
      { id: 'int-amp-2', interactingSubstance: 'Anticonceptivos orales combinados', severity: 'Menor', clinicalEffect: 'Disminución de la recirculación enterohepática de estrógenos por alteración de flora intestinal.', recommendation: 'Aconsejar método de barrera adicional.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-dicloxacilina',
    name: 'Dicloxacilina Sódica',
    brandNames: ['Posipen', 'Dycill', 'Diclocil', 'Brumixol'],
    atcCode: 'J01CF01',
    description: 'Isoxazolilpenicilina semisintética antiestafilocócica resistente a betalactamasas (penicilinasas), de elección para infecciones por Staphylococcus aureus sensible a meticilina (SASM).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-dic-1', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 12, 20 y 30 cápsulas', excipients: 'Estearato magnésico' },
      { id: 'p-dic-2', form: 'Polvo para suspensión oral', concentration: '125 mg / 5 ml y 250 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 60 ml y 100 ml con vasito dosificador', excipients: 'Sacarosa, colorante rojo' },
      { id: 'p-dic-3', form: 'Polvo para inyección IV/IM', concentration: '500 mg y 1000 mg', route: 'Intravenosa', packaging: 'Vial x 1 g', excipients: 'Sodio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de la pared bacteriana; su voluminosa cadena lateral isoxazólica impide estéricamente la unión e hidrólisis por betalactamasas estafilocócicas.',
      detailed: 'Antiestafilocócico bactericida selectivo. La conformación molecular bloquea el acceso de las betalactamasas bacterianas al anillo betalactámico, manteniendo su actividad intacta frente a Staphylococcus aureus y S. epidermidis no meticilino-resistentes.',
      targetReceptor: 'PBPs de Staphylococcus aureus',
      keyPoints: ['Fármaco de primera línea para infecciones cutáneas y de tejidos blandos por SASM', 'Inactiva frente a SAMR (Staphylococcus aureus resistente a meticilina por gen mecA/PBP2a)', 'Tomar estrictamente con el estómago vacío']
    },
    indications: {
      approved: [
        'Infecciones cutáneas y de tejidos blandos: celulitis, impétigo, forunculosis, abscesos cutáneos y foliculitis por SASM',
        'Mastitis puerperal bacteriana aguda estafilocócica',
        'Heridas quirúrgicas infectadas por Staphylococcus aureus sensible a meticilina',
        'Infecciones osteoarticulares leves a moderadas y consolidación oral de osteomielitis por SASM'
      ],
      offLabel: ['Profilaxis de celulitis recurrente']
    },
    dosageAndPosology: {
      adults: 'Vía oral: 500 mg cada 6 horas (2 g/día) durante 7 a 14 días. En infecciones severas: hasta 1 g cada 6 horas. Tomar 1 hora antes o 2 horas después de las comidas con abundante agua.',
      pediatric: '25 a 50 mg/kg/día por vía oral divididos en 4 tomas (cada 6 horas); infecciones graves hasta 100 mg/kg/día.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal moderada debido a eliminación biliar y hepática compensatoria.',
      hepaticAdjustment: 'Usar con precaución en hepatopatía grave preexistente.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Ingerir con un vaso entero de agua para evitar irritación esofágica.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a penicilinas e isoxazolilpenicilinas'],
      warnings: ['Hepatotoxicidad colestásica (ictericia colestásica y elevación de fosfatasa alcalina)', 'Esofagitis y úlcera esofágica si se ingiere sin suficiente líquido antes de acostarse'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Compatible durante el embarazo bajo indicación médica.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia; se excreta en cantidades mínimas.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas, epigastralgia y pirosis', 'Diarrea', 'Erupción cutánea'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Elevación transitoria de transaminasas (AST/ALT)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Ictericia colestásica', 'Neutropenia y agranulocitosis reversible', 'Nefritis intersticial aguda'] }
    ],
    interactions: [
      { id: 'int-dic-1', interactingSubstance: 'Warfarina y acenocumarol', severity: 'Moderada', clinicalEffect: 'Aumento del efecto anticoagulante por reducción de síntesis bacteriana de vitamina K.', recommendation: 'Monitorizar INR estrechamente.' },
      { id: 'int-dic-2', interactingSubstance: 'Alimentos grasos o carbohidratos', severity: 'Moderada', clinicalEffect: 'Reducción de hasta un 60% en la biodisponibilidad y absorción de dicloxacilina.', recommendation: 'Administrar estrictamente en ayuno (1 h antes o 2 h después).' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- CEFALOSPORINAS 1ª, 2ª, 4ª GENERACIÓN ---
  // ==========================================
  {
    id: 'med-cefazolina',
    name: 'Cefazolina Sódica (Cefalosporina de 1ª Generación)',
    brandNames: ['Kefol', 'Kurgan', 'Cefazolina Normon', 'Ancef'],
    atcCode: 'J01DB04',
    description: 'Cefalosporina parenteral de 1ª generación de referencia universal para la profilaxis quirúrgica preoperatoria e infecciones graves por Staphylococcus aureus sensible a meticilina.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cfz-1', form: 'Polvo y disolvente para inyección IV/IM', concentration: '1 g y 2 g', route: 'Intravenosa', packaging: 'Vial de vidrio con ampolla de agua para inyección', excipients: 'Contiene 48.3 mg de sodio por gramo' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de peptidoglicano de la pared celular bacteriana por unión preferente a PBP1 y PBP2 estafilocócicas y estreptocócicas.',
      detailed: 'Bactericida dependiente de tiempo. Penetra rápidamente en tejidos conectivos, hueso, sinovia y líquido pericárdico. Resistente a betalactamasas de SASM pero no atraviesa la barrera hematoencefálica.',
      targetReceptor: 'PBPs de Gram positivos y bacilos Gram negativos comunitarios',
      keyPoints: ['Estándar de oro mundial para profilaxis quirúrgica limpia y limpia-contaminada', 'Mejor perfil de tolerancia renal y menor toxicidad que las isoxazolilpenicilinas IV', 'NO penetra en sistema nervioso central (inútil en meningitis)']
    },
    indications: {
      approved: [
        'Profilaxis de infección de sitio quirúrgico en cirugía ortopédica, cardiovascular, gastrointestinal, ginecológica y plástica',
        'Bacteriemia y endocarditis por Staphylococcus aureus sensible a meticilina (SASM)',
        'Infecciones osteoarticulares agudas (osteomielitis y artritis séptica)',
        'Infecciones complicadas de piel y tejidos blandos (celulitis, erisipela, abscesos)',
        'Infecciones del tracto urinario por E. coli y Klebsiella pneumoniae sensibles'
      ]
    },
    dosageAndPosology: {
      adults: 'Tratamiento clínico: 1 a 2 g IV cada 8 horas (en bacteriemia grave hasta 2 g cada 6-8 h). Profilaxis quirúrgica: 2 g IV en bolo lento 30-60 minutos antes de la incisión cutánea (3 g si el paciente pesa > 120 kg); redosificar 1-2 g intraoperatorio cada 4 horas en cirugías prolongadas.',
      pediatric: 'Tratamiento: 50 a 100 mg/kg/día IV divididos cada 8 horas. Profilaxis quirúrgica: 30 mg/kg IV preincisión.',
      renalAdjustment: 'TFG 35-54 ml/min: dosis completa cada 12 h; TFG 11-34 ml/min: 50% de la dosis cada 12 h; TFG < 10 ml/min: 50% de la dosis cada 24 h.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa', 'Intramuscular'],
      administrationNotes: 'Administrar en infusión IV corta durante 20-30 minutos en suero salino o glucosado.'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave conocida a cefalosporinas o antecedentes de anafilaxia a penicilina'],
      warnings: ['Reacciones de hipersensibilidad cruzada con penicilinas (~1-3% de riesgo)', 'Colitis pseudomembranosa por Clostridioides difficile'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Fármaco seguro en el embarazo y profilaxis periparto.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Flebitis en el sitio de inyección IV', 'Diarrea leve', 'Náuseas y vómitos'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Eosinofilia', 'Elevación transitoria de AST/ALT'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anafilaxia', 'Colitis por C. difficile', 'Neutropenia transitoria'] }
    ],
    interactions: [
      { id: 'int-cfz-1', interactingSubstance: 'Aminoglucósidos (Gentamicina, Amikacina)', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de nefrotoxicidad tubular aditiva.', recommendation: 'Monitorizar función renal estrechamente.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-cefalexina',
    name: 'Cefalexina Monohidrato (Cefalosporina de 1ª Generación Oral)',
    brandNames: ['Keflex', 'Cefalexina Normon', 'Septilisin', 'Cefalin'],
    atcCode: 'J01DB01',
    description: 'Cefalosporina de primera generación oral con absorción intestinal rápida y completa, de amplio uso ambulatorio en infecciones cutáneas y urinarias.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cfl-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '500 mg y 1000 mg (1 g)', route: 'Oral', packaging: 'Caja x 14, 20 y 28 comprimidos', excipients: 'Celulosa microcristalina' },
      { id: 'p-cfl-2', form: 'Polvo para suspensión oral pediátrica', concentration: '250 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 60 ml y 100 ml con cuchara dosificadora', excipients: 'Sacarosa, aroma tutti-frutti' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared bacteriana bloqueando transpeptidasas bacterianas en cocos Gram positivos y bacilos Gram negativos comunitarios.',
      detailed: 'Bactericida con casi un 95% de biodisponibilidad oral. Alcanza elevadas concentraciones en orina, saliva, pus y líquido sinovial. Eficaz contra Streptococcus pyogenes, S. pneumoniae sensible y SASM.',
      targetReceptor: 'PBPs bacterianas',
      keyPoints: ['Excelente absorción oral no afectada de forma clínicamente relevante por la comida', 'Tratamiento de elección oral para celulitis no purulenta y desescalada de osteomielitis', 'Concentraciones urinarias muy superiores a la CIM']
    },
    indications: {
      approved: [
        'Infecciones cutáneas y de tejidos blandos: impétigo, celulitis, forúnculos y mastitis',
        'Infecciones agudas del tracto urinario bajo (cistitis no complicada) en gestantes y pacientes no complicados',
        'Faringoamigdalitis estreptocócica aguda (alternativa a penicilina)',
        'Infecciones del tracto respiratorio superior e inferior leves',
        'Terapia oral de mantenimiento en infecciones óseas y articulares tras bacteriemia por SASM'
      ]
    },
    dosageAndPosology: {
      adults: '500 mg cada 6 horas o 1 g cada 12 horas por vía oral (máximo 4 g/día en infecciones graves). Cistitis no complicada: 500 mg cada 12 h durante 5-7 días.',
      pediatric: '25 a 50 mg/kg/día divididos en 2 a 4 tomas; en infecciones severas hasta 75-100 mg/kg/día.',
      renalAdjustment: 'TFG 10-50 ml/min: 500 mg cada 8-12 h; TFG < 10 ml/min: 250-500 mg cada 12-24 h.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oral'],
      administrationNotes: 'Puede tomarse con las comidas si provoca molestias gástricas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a cefalosporinas o betalactámicos'],
      warnings: ['Riesgo de colitis pseudomembranosa por Clostridioides difficile', 'Ajustar dosis en deterioro de la función renal'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Uso muy seguro en el embarazo (antibiótico de elección para bacteriuria asintomática gestacional).',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea y dispepsia', 'Náuseas', 'Erupción cutánea eritematosa'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Prurito vulvovaginal y candidiasis', 'Eosinofilia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anafilaxia', 'Colitis pseudomembranosa', 'Eritema multiforme'] }
    ],
    interactions: [
      { id: 'int-cfl-1', interactingSubstance: 'Probenecid', severity: 'Menor', clinicalEffect: 'Disminución del aclaramiento renal de cefalexina elevando sus niveles plasmáticos.', recommendation: 'Puede utilizarse terapéuticamente para prolongar vida media.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-cefuroxima',
    name: 'Cefuroxima Axetilo / Cefuroxima Sódica (Cefalosporina de 2ª Generación)',
    brandNames: ['Zinnat', 'Curoxima', 'Cefurox', 'Ceftin'],
    atcCode: 'J01DC02',
    description: 'Cefalosporina de segunda generación con excelente estabilidad frente a betalactamasas de Haemophilus influenzae y Moraxella catarrhalis, disponible para vías oral y parenteral.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cfu-1', form: 'Comprimidos recubiertos (Axetilo)', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 10, 14 y 20 comprimidos', excipients: 'Aceite vegetal hidrogenado, benzoato sódico' },
      { id: 'p-cfu-2', form: 'Granulado para suspensión oral', concentration: '125 mg / 5 ml y 250 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 60 ml y 100 ml', excipients: 'Sacarosa, aspartamo, aroma de tutti-frutti' },
      { id: 'p-cfu-3', form: 'Polvo para solución inyectable IV/IM (Sódica)', concentration: '750 mg y 1500 mg (1.5 g)', route: 'Intravenosa', packaging: 'Vial de vidrio x 1.5 g', excipients: 'Sodio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared celular bacteriana; su configuración de 2ª generación le otorga mayor resistencia a betalactamasas de enterobacterias y patógenos respiratorios.',
      detailed: 'Bactericida con espectro expandido que cubre patógenos respiratorios Gram negativos productores de betalactamasa (Haemophilus influenzae, Moraxella catarrhalis), además de Streptococcus pneumoniae y Staphylococcus aureus.',
      targetReceptor: 'PBPs bacterianas de Gram positivos y negativos',
      keyPoints: ['Fármaco clave en exacerbación de EPOC, neumonía adquirida en la comunidad y otitis media recurrente', 'El profármaco oral (Axetilo) se absorbe significativamente mejor TOMADO CON ALIMENTOS', 'Cruza la barrera hematoencefálica inflamada']
    },
    indications: {
      approved: [
        'Neumonía adquirida en la comunidad (NAC) y bronquitis aguda bacteriana complicada',
        'Otitis media aguda y sinusitis bacteriana aguda',
        'Faringoamigdalitis bacteriana aguda y amigdalitis recurrente',
        'Infecciones del tracto urinario bajo y pielonefritis aguda no complicada',
        'Enfermedad de Lyme temprana (eritema migratorio en niños y adultos)',
        'Infecciones cutáneas y de tejidos blandos'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía oral: 250 a 500 mg cada 12 horas administrados inmediatamente tras las comidas. Vía IV: 750 mg a 1.5 g cada 8 horas (en infecciones severas 1.5 g cada 6 horas). Enfermedad de Lyme: 500 mg oral cada 12 horas por 14 a 21 días.',
      pediatric: 'Vía oral: 10 a 15 mg/kg cada 12 horas (máx 250 mg/dosis en otitis media). Vía IV: 50 a 100 mg/kg/día divididos en 3 o 4 dosis.',
      renalAdjustment: 'TFG 10-20 ml/min: 750 mg cada 12 h IV; TFG < 10 ml/min: 750 mg cada 24 h IV.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'LOS COMPRIMIDOS ORALES DEBEN TOMARSE DESPUÉS DE LAS COMIDAS para una absorción gastrointestinal óptima.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a cefalosporinas o antecedentes de hipersensibilidad inmediata a betalactámicos'],
      warnings: ['Colitis por Clostridioides difficile', 'Aparición de diarrea o sobreinfección fúngica'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el embarazo; cruza la barrera placentaria.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Candidiasis mucocutánea', 'Eosinofilia', 'Cefalea y mareo', 'Diarrea y náuseas', 'Aumento transitorio de enzimas hepáticas'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Vómitos', 'Exantemas cutáneos y prurito'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Colitis pseudomembranosa', 'Anemia hemolítica', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-cfu-1', interactingSubstance: 'Antiácidos e Inhibidores de la Bomba de Protones (Omeprazol)', severity: 'Mayor', clinicalEffect: 'La reducción de acidez gástrica disminuye drásticamente la disolución y absorción oral de cefuroxima axetilo.', recommendation: 'Separar la toma al menos 2 horas de antiácidos.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-cefepima',
    name: 'Cefepima Diclorhidrato (Cefalosporina de 4ª Generación)',
    brandNames: ['Maxipime', 'Cefepime Normon', 'Axepim'],
    atcCode: 'J01DE01',
    description: 'Cefalosporina de cuarta generación con estructura zwitteriónica que le permite penetrar rápidamente la membrana externa bacteriana y resistir betalactamasas cromosómicas AmpC, con potente cobertura sobre Pseudomonas aeruginosa.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cfp-1', form: 'Polvo para solución inyectable IV/IM', concentration: '1 g y 2 g', route: 'Intravenosa', packaging: 'Vial de vidrio con ampolla de agua para inyección', excipients: 'L-arginina' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de peptidoglicano de la pared celular uniéndose con alta afinidad a PBP2 y PBP3; resiste la degradación por betalactamasas cromosómicas inducibles AmpC.',
      detailed: 'Molécula dipolar (zwitterión) con baja afinidad por betalactamasas clase C (AmpC) y betalactamasas clásicas TEM-1/SHV-1. Penetra los canales de porinas OmpF y OmpC bacterianas mucho más rápido que las cefalosporinas de 3ª generación.',
      targetReceptor: 'PBPs 2 y 3 de Pseudomonas y Enterobacterales',
      keyPoints: ['Espectro ampliado: cocos Gram positivos (SASM) + bacilos Gram negativos resistentes incluyendo Pseudomonas aeruginosa', 'Terapia empírica de primera línea en neutropenia febril de alto riesgo', 'Monitorear rigurosamente función renal: riesgo de encefalopatía y neurotoxicidad']
    },
    indications: {
      approved: [
        'Fiebre neutropénica en pacientes oncohematológicos (monoterapia empírica de 1ª elección)',
        'Neumonía nosocomial y neumonía asociada a ventilación mecánica (NAV)',
        'Sepsis y shock séptico de origen urinario, intraabdominal o respiratorio',
        'Infecciones complicadas del tracto urinario y pielonefritis aguda grave',
        'Infecciones complicadas intraabdominales (en combinación con metronidazol)',
        'Infecciones cutáneas y de tejidos blandos graves'
      ],
      offLabel: ['Meningitis nosocomial postquirúrgica por bacilos Gram negativos sensibles']
    },
    dosageAndPosology: {
      adults: '1 a 2 g IV cada 8 a 12 horas. Fiebre neutropénica o neumonía nosocomial grave por Pseudomonas: 2 g IV cada 8 horas en infusión extendida de 3 a 4 horas. Infecciones urinarias moderadas: 1 g IV/IM cada 12 horas.',
      pediatric: '> 2 meses: 50 mg/kg cada 8 o 12 horas (hasta 2 g/dosis en neutropenia febril).',
      renalAdjustment: 'OBLIGATORIO AJUSTAR: TFG 30-50 ml/min: 2 g cada 12 h; TFG 11-29 ml/min: 2 g cada 24 h; TFG < 11 ml/min o hemodiálisis: 1 g cada 24 h. (El no ajustar provoca coma y mioclonías neurotóxicas).',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa', 'Intramuscular'],
      administrationNotes: 'Infusión IV en 30 minutos, o infusión extendida en 3-4 horas para optimizar el índice farmacodinámico T > CIM.'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave a cefepima, cefalosporinas o betalactámicos'],
      warnings: ['NEUROTOXICIDAD GRAVE: encefalopatía, mioclonías, confusión y estado epiléptico no convulsivo en pacientes con insuficiencia renal sin ajuste posológico adecuado', 'Colitis por C. difficile'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Uso seguro en gestación si el beneficio supera los riesgos.',
      lactation: 'Compatible',
      lactationNotes: 'Se excreta en leche materna en cantidades ínfimas.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de encefalopatía y estado epiléptico no convulsivo en insuficiencia renal no corregida.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea y náuseas', 'Fiebre medicamentosa', 'Exantema y prurito', 'Test de Coombs directo positivo sin hemólisis'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Candidiasis oral', 'Fiebre', 'Eosinofilia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Encefalopatía y crisis convulsivas neurotóxicas', 'Colitis pseudomembranosa', 'Agranulocitosis'] }
    ],
    interactions: [
      { id: 'int-cfp-1', interactingSubstance: 'Aminoglucósidos (Amikacina)', severity: 'Moderada', clinicalEffect: 'Sinergismo antimicrobiano positivo frente a P. aeruginosa pero riesgo de mayor nefrotoxicidad.', recommendation: 'Administrar en líneas separadas y vigilar creatinina.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- MACRÓLIDOS: ERITROMICINA, CLARITROMICINA ---
  // ==========================================
  {
    id: 'med-eritromicina',
    name: 'Eritromicina (Base, Etilsuccinato y Lactobionato)',
    brandNames: ['Pantomicina', 'Erythrocin', 'Eritrogobens', 'Ilosone'],
    atcCode: 'J01FA01',
    description: 'Macrólido prototípico bacteriostático de 14 carbonos que inhibe la síntesis proteica bacteriana; además posee acción agonista de los receptores de motilina gastrointestinal (procinético).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-eri-1', form: 'Comprimidos y sobres (Etilsuccinato)', concentration: '500 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos', excipients: 'Almidón de maíz, dióxido de titanio' },
      { id: 'p-eri-2', form: 'Polvo para suspensión oral', concentration: '250 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 60 ml y 100 ml', excipients: 'Sacarosa, aroma de fresa' },
      { id: 'p-eri-3', form: 'Polvo para infusión IV (Lactobionato)', concentration: '1 g', route: 'Intravenosa', packaging: 'Vial de vidrio x 1 g', excipients: 'Lactobionato sódico' },
      { id: 'p-eri-4', form: 'Solución tópica para acné al 2% - 4%', concentration: '20 mg / ml', route: 'Tópica', packaging: 'Frasco con aplicador roll-on de 50 ml', excipients: 'Alcohol etílico' }
    ],
    mechanismOfAction: {
      summary: 'Unión reversible a la subunidad ribosomal 50S inhibiendo la translocación del aminoacil-ARNt y la síntesis de la cadena polipeptídica.',
      detailed: 'Bacteriostático de espectro concentrado en bacterias atípicas intracelulares, Legionella, Mycoplasma, Chlamydia, Bordetella pertussis y Campylobacter jejuni. A nivel digestivo estimula los receptores de motilina promoviendo contracciones antropilóricas vigorosas.',
      targetReceptor: 'ARN ribosomal 23S de la subunidad 50S bacteriana / Receptor de motilina',
      keyPoints: ['Tratamiento de elección para tos ferina (Bordetella pertussis) y gastroenteritis por Campylobacter', 'Uso no antibiótico como procinético gástrico en gastroparesia diabética y hemorragia digestiva alta', 'Potente inhibidor del citocromo P450 CYP3A4 y prolongador del intervalo QTc']
    },
    indications: {
      approved: [
        'Tos ferina / pertussis (tratamiento curativo y erradicación nasofaríngea)',
        'Gastroenteritis bacteriana por Campylobacter jejuni',
        'Neumonía por patógenos atípicos (Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella)',
        'Difteria por Corynebacterium diphtheriae (antimicrobiano coadyuvante a la antitoxina)',
        'Acné vulgar inflamatorio (vía tópica)',
        'Profilaxis y tratamiento de infecciones por estreptococo en alérgicos a penicilinas'
      ],
      offLabel: ['Gastroparesia diabética refractaria (procinético)', 'Vaciado de restos hemáticos en estómago previo a endoscopia en hemorragia digestiva alta']
    },
    dosageAndPosology: {
      adults: 'Antibiótica oral: 500 mg cada 6 horas (o 1 g cada 12 h) tomada 30 minutos antes de alimentos. Vía IV (Lactobionato): 15 a 20 mg/kg/día en infusión continua o dividida cada 6 horas (1-4 g/día). Uso procinético IV: 250 mg IV 30-60 min antes de endoscopia.',
      pediatric: '30 a 50 mg/kg/día oral divididos en 3 a 4 tomas (cada 6-8 horas).',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve/moderada; TFG < 10 ml/min: máx 2 g/día (riesgo de ototoxicidad transitoria).',
      hepaticAdjustment: 'Contraindicado en insuficiencia hepática grave (metabolismo hepático intensivo).',
      routes: ['Oral', 'Intravenosa', 'Tópica'],
      administrationNotes: 'Infusión IV lenta en al menos 60 minutos y muy diluida para evitar tromboflebitis química grave.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a macrólidos', 'Coadministración con derivados ergóticos, pimozida, terfenadina, astemizol o simvastatina/atorvastatina', 'Antecedente de ictericia colestásica por eritromicina', 'Prolongación congénita o adquirida del intervalo QTc'],
      warnings: ['Inhibidor muy potente de CYP3A4: múltiples interacciones farmacológicas mortales', 'Prolongación del intervalo QT y riesgo de Torsades de Pointes', 'Estenosis hipertrófica de píloro en neonatos expuestos en las primeras semanas de vida'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'El etilsuccinato es seguro; el estolato está CONTRAINDICADO por causar hepatitis colestásica materna.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible, pero vigilar vómitos en lactantes en primeras dos semanas.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Dolor cólico abdominal y náuseas por motilidad digestiva acelerada', 'Vómitos y diarrea'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Tromboflebitis local severa en infusión IV'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Prolongación del intervalo QT y arritmias ventriculares (Torsades de Pointes)', 'Hepatitis colestásica aguda', 'Ototoxicidad y sordera reversible a dosis altas'] }
    ],
    interactions: [
      { id: 'int-eri-1', interactingSubstance: 'Estatinas (Simvastatina, Atorvastatina)', severity: 'Contraindicada', clinicalEffect: 'Inhibición de CYP3A4 multiplicando por 10 los niveles de estatina con rabdomiólisis masiva e insuficiencia renal.', recommendation: 'Suspender temporalmente la estatina durante el tratamiento.' },
      { id: 'int-eri-2', interactingSubstance: 'Fármacos que prolongan el QT (Amiodarona, Haloperidol, Metadona)', severity: 'Contraindicada', clinicalEffect: 'Efecto sinérgico arritmogénico con taquicardia ventricular polimórfica y paro cardíaco.', recommendation: 'Evitar la combinación.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-claritromicina',
    name: 'Claritromicina',
    brandNames: ['Klacid', 'Bremon', 'Kofron', 'Biaxin'],
    atcCode: 'J01FA09',
    description: 'Macrólido semisintético de 14 miembros con mayor estabilidad ácida que la eritromicina, componente esencial en la terapia de erradicación de Helicobacter pylori e infecciones por Mycobacterium avium complex.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cla-1', form: 'Comprimidos recubiertos', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 14 y 21 comprimidos', excipients: 'Celulosa microcristalina, croscarmelosa sódica' },
      { id: 'p-cla-2', form: 'Comprimidos de liberación prolongada (Unidia / OD)', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 7 y 14 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-cla-3', form: 'Polvo para suspensión oral', concentration: '125 mg / 5 ml y 250 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 60 ml y 100 ml', excipients: 'Sacarosa, sabor vainilla y frutas' },
      { id: 'p-cla-4', form: 'Polvo para solución inyectable IV', concentration: '500 mg', route: 'Intravenosa', packaging: 'Vial de vidrio x 500 mg', excipients: 'Ácido lactobiónico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana fijándose a la subunidad 50S; su metabolito activo 14-hidroxiclaritromicina actúa de forma sinérgica contra Haemophilus influenzae.',
      detailed: 'Bacteriostático con excelente penetración intracelular en macrófagos alveolares y tejido pulmonar. Su metabolito 14-OH es el doble de potente frente a bacterias respiratorias.',
      targetReceptor: 'Subunidad 50S ribosomal bacteriana',
      keyPoints: ['Pilar clásico de la pauta erradicadora cuádruple o triple contra Helicobacter pylori (úlcera péptica y gastritis)', 'Tratamiento y profilaxis de Mycobacterium avium complex (MAC) en pacientes VIH/SIDA', 'Inhibidor potente de CYP3A4 y glicoproteína P']
    },
    indications: {
      approved: [
        'Erradicación de Helicobacter pylori en úlcera péptica gástrica/duodenal y gastritis crónica activa',
        'Neumonía adquirida en la comunidad (NAC) por gérmenes atípicos (Legionella, Mycoplasma, Chlamydophila)',
        'Faringoamigdalitis estreptocócica y sinusitis maxilar aguda en alérgicos a betalactámicos',
        'Infecciones cutáneas y de partes blandas leves a moderadas',
        'Tratamiento y prevención primaria/secundaria de infección diseminada por Mycobacterium avium complex (MAC)'
      ]
    },
    dosageAndPosology: {
      adults: 'Infecciones respiratorias/piel: 250 mg a 500 mg cada 12 horas por vía oral (o 500 mg una vez al día con la formulación OD de liberación prolongada con alimentos). Erradicación de H. pylori: 500 mg cada 12 horas durante 14 días (asociado a IBP y amoxicilina / metronidazol). Vía IV: 500 mg cada 12 horas en infusión de 60 minutos.',
      pediatric: '7.5 mg/kg cada 12 horas por vía oral (máximo 500 mg cada 12 horas).',
      renalAdjustment: 'TFG < 30 ml/min: reducir la dosis al 50% (250 mg cada 12 horas o 500 mg cada 24 horas). No usar formulación de liberación modificada si TFG < 30 ml/min.',
      hepaticAdjustment: 'No requiere ajuste si la función renal está preservada; precaución en hepatopatía grave.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Los comprimidos convencionales pueden tomarse con o sin comida; los comprimidos de liberación prolongada DEBEN tomarse con comida y sin masticar.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a macrólidos', 'Uso concomitante con colchicina en insuficiencia renal/hepática', 'Uso con estatinas (atorvastatina, simvastatina), ticagrelor, domperidona o alcaloides ergóticos', 'Prolongación del intervalo QTc documentada o hipopotasemia'],
      warnings: ['Inhibidor enzimático de CYP3A4: altera concentraciones de anticoagulantes, benzodiacepinas e inmunosupresores', 'Riesgo de arritmias ventriculares y torsades de pointes', 'Disgeusia metálica muy frecuente'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en el primer trimestre; preferir azitromicina si se requiere un macrólido.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Disgeusia (sabor amargo o metálico característico en la boca)', 'Diarrea y náuseas', 'Dolor abdominal', 'Cefalea', 'Insomnio'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Candidiasis', 'Hipersensibilidad y prurito', 'Elevación de fosfatasa alcalina y transaminasas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Prolongación del intervalo QTc', 'Hepatitis colestásica aguda', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-cla-1', interactingSubstance: 'Colchicina', severity: 'Contraindicada', clinicalEffect: 'Inhibición de CYP3A4 y glicoproteína P: acumulación letal de colchicina con fallo multiorgánico.', recommendation: 'Combinación absolutamente contraindicada.' },
      { id: 'int-cla-2', interactingSubstance: 'Carbamazepina', severity: 'Mayor', clinicalEffect: 'Aumento severo de niveles de carbamazepina con ataxia, somnolencia, diplopía y toxicidad neurológica.', recommendation: 'Monitorizar niveles o reducir dosis de carbamazepina al 50%.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- TETRACICLINAS: TETRACICLINA, OXITETRACICLINA, DOXICICLINA, MINOCICLINA ---
  // ==========================================
  {
    id: 'med-tetraciclina',
    name: 'Tetraciclina Clorhidrato',
    brandNames: ['Tetraciclina Normon', 'Achromycin', 'Ambramicina'],
    atcCode: 'J01AA07',
    description: 'Antibiótico bacteriostático de amplio espectro prototípico del grupo de las tetraciclinas, con acción quelante de cationes divalentes e inhibición de la síntesis proteica.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-tet-1', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 16 y 24 cápsulas', excipients: 'Lactosa, dióxido de titanio' },
      { id: 'p-tet-2', form: 'Pomada dérmica y oftálmica al 1%', concentration: '10 mg / g', route: 'Tópica', packaging: 'Tubo de 5 g y 15 g', excipients: 'Vaselina blanca, parafina líquida' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis proteica bacteriana uniéndose reversiblemente a la subunidad ribosomal 30S e impidiendo la entrada del aminoacil-ARNt al sitio aceptor (A).',
      detailed: 'Bacteriostático que bloquea la unión del complejo aminoacil-ARNt al ribosoma. Posee afinidad por iones metálicos multivalentes (calcio, magnesio, hierro, aluminio) formando quelatos insolubles.',
      targetReceptor: 'Subunidad ribosomal 30S',
      keyPoints: ['Forma quelatos insolubles con calcio: se deposita en huesos y dientes en crecimiento provocando tinción permanente y retraso óseo', 'CONTRAINDICADA en niños menores de 8 años y gestantes', 'La tetraciclina caducada causa Síndrome de Fanconi renal']
    },
    indications: {
      approved: [
        'Componente de la terapia cuádruple con bismuto para erradicación de Helicobacter pylori',
        'Acné vulgar inflamatorio moderado a grave',
        'Infecciones por Rickettsias (tifus exantemático, fiebre manchada de las Montañas Rocosas)',
        'Cólera por Vibrio cholerae',
        'Brucelosis (en combinación con estreptomicina o rifampicina)',
        'Tracoma e infecciones oculares por Chlamydia trachomatis'
      ]
    },
    dosageAndPosology: {
      adults: '250 a 500 mg cada 6 horas por vía oral (1 a 2 g/día) administrado con el estómago vacío (1 hora antes o 2 horas después de comidas) y con un vaso entero de agua.',
      pediatric: 'CONTRAINDICADA EN MENORES DE 8 AÑOS.',
      renalAdjustment: 'TFG < 50 ml/min: EVITAR SU USO (efecto antianabólico con elevación severa de BUN).',
      hepaticAdjustment: 'Usar con precaución; evitar dosis elevadas por riesgo de esteatosis hepática aguda.',
      routes: ['Oral', 'Tópica', 'Oftálmica'],
      administrationNotes: 'Ingerir con el paciente sentado o de pie con abundante agua, al menos 1 hora antes de acostarse para prevenir ulceración esofágica. Separar de lácteos y antiácidos.'
    },
    safety: {
      contraindications: ['Niños menores de 8 años', 'Embarazo y lactancia', 'Insuficiencia renal moderada a grave', 'Hipersensibilidad a tetraciclinas'],
      warnings: ['Decoloración permanente dental (tinción parda o amarilla) e hipoplasia del esmalte dental', 'Fotosensibilidad cutánea grave ante luz solar', 'Hipertensión intracraneal benigna (Pseudotumor cerebri)', 'Síndrome de Fanconi (acidosis tubular) si se ingieren cápsulas vencidas'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno probado: tinción dental definitiva, hipoplasia del esmalte y alteración del crecimiento de huesos largos en el feto.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche y quelata calcio en el lactante.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas, vómitos y epigastralgia', 'Diarrea', 'Fotosensibilidad con eritema solar intenso'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Pigmentación de uñas y mucosas', 'Esofagitis y úlceras esofágicas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Pseudotumor cerebri con cefalea y papiledema', 'Hepatotoxicidad con esteatosis grasa microvesicular', 'Síndrome de Fanconi por productos degradados'] }
    ],
    interactions: [
      { id: 'int-tet-1', interactingSubstance: 'Lácteos, Calcio, Hierro oral, Antiácidos con Magnesio/Aluminio', severity: 'Mayor', clinicalEffect: 'Quelación química intraluminal con formación de complejos insolubles no absorbibles; reduce la absorción hasta en un 90%.', recommendation: 'Separar la toma al menos 2 a 3 horas de cualquier derivado lácteo o suplemento catiónico.' },
      { id: 'int-tet-2', interactingSubstance: 'Retinoides orales (Isotretinoína)', severity: 'Contraindicada', clinicalEffect: 'Riesgo multiplicado de hipertensión intracraneal benigna (pseudotumor cerebri grave).', recommendation: 'Asociación formalmente contraindicada.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-oxitetraciclina',
    name: 'Oxitetraciclina',
    brandNames: ['Terramicina', 'Oxitetraciclina Clorhidrato'],
    atcCode: 'J01AA06',
    description: 'Tetraciclina natural producida por Streptomyces rimosus, empleada ampliamente en forma de pomada oftálmica, cutánea e inyecciones intramusculares para infecciones por clamidias y rickettsias.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-oxi-1', form: 'Pomada oftálmica y tópica (con Polimixina B)', concentration: '5 mg / g (al 0.5%)', route: 'Oftálmica', packaging: 'Tubo oftálmico de 3.5 g', excipients: 'Vaselina líquida, cera microcristalina' },
      { id: 'p-oxi-2', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 16 cápsulas', excipients: 'Lactosa' },
      { id: 'p-oxi-3', form: 'Solución inyectable IM', concentration: '50 mg / ml (vial de 2 ml = 100 mg)', route: 'Intramuscular', packaging: 'Ampolla inyectable con lidocaína al 2%', excipients: 'Propilenglicol, magnesio cloruro' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de proteínas bacterianas por fijación reversible al sitio aminoacídico del ribosoma 30S bacteriano.',
      detailed: 'Similar a las demás tetraciclinas, detiene la elongación peptídica. Su formulación oftálmica asociada a polimixina B amplía su cobertura bactericida sobre bacilos Gram negativos como Pseudomonas aeruginosa.',
      targetReceptor: 'Subunidad ribosomal 30S',
      keyPoints: ['Muy utilizada en formulaciones tópicas y oftálmicas para conjuntivitis infecciosa y tracoma', 'Iguales precauciones de quelación y contraindicación en menores de 8 años que tetraciclina', 'Fotosensibilizante']
    },
    indications: {
      approved: [
        'Conjuntivitis bacteriana aguda, queratitis y blefaritis (vía oftálmica)',
        'Infecciones cutáneas bacterianas superficiales y quemaduras infectadas',
        'Infecciones urogenitales por Chlamydia trachomatis y Ureaplasma urealyticum',
        'Rickettsiosis y fiebre Q por Coxiella burnetii'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía oftálmica: aplicar una pequeña cantidad de pomada (1 cm) en el fondo de saco conjuntival inferior 2 a 4 veces al día. Vía oral: 250 a 500 mg cada 6 horas en ayunas. Vía IM: 250 mg cada 24 horas o 100 mg cada 8-12 horas.',
      pediatric: 'Contraindicado en menores de 8 años.',
      renalAdjustment: 'Evitar uso sistémico en insuficiencia renal.',
      hepaticAdjustment: 'Precaución en disfunción hepática.',
      routes: ['Oftálmica', 'Tópica', 'Oral', 'Intramuscular'],
      administrationNotes: 'En aplicación oftálmica puede provocar visión borrosa transitoria.'
    },
    safety: {
      contraindications: ['Menores de 8 años', 'Embarazo y lactancia', 'Insuficiencia renal moderada-severa (vía sistémica)'],
      warnings: ['Decoloración dental permanente en odontogénesis', 'Fotosensibilidad'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado por depósito óseo y dental.',
      lactation: 'Contraindicado',
      lactationNotes: 'Evitar en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Irritación ocular local o escozor transitorio tras aplicación oftálmica', 'Molestias digestivas y diarrea (vía oral)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Reacciones anafilácticas', 'Fotosensibilidad grave'] }
    ],
    interactions: [
      { id: 'int-oxi-1', interactingSubstance: 'Cationes metálicos polivalentes (Hierro, Calcio, Antiácidos)', severity: 'Mayor', clinicalEffect: 'Quelación e inactivación de la absorción oral.', recommendation: 'Separar tomas 3 horas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-doxiciclina',
    name: 'Doxiciclina Hiclato / Monohidrato',
    brandNames: ['Vibramicina', 'Doxiclat', 'Proderma', 'Doryx', 'Oracea'],
    atcCode: 'J01AA02',
    description: 'Tetraciclina semisintética de segunda generación altamente lipofílica con biodisponibilidad oral casi del 100%, eliminación no renal y posología cómoda cada 12 o 24 horas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-dox-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '100 mg y 50 mg', route: 'Oral', packaging: 'Caja x 14 y 28 comprimidos', excipients: 'Celulosa microcristalina, sacarosa' },
      { id: 'p-dox-2', form: 'Polvo para solución para perfusión IV', concentration: '100 mg', route: 'Intravenosa', packaging: 'Vial x 100 mg', excipients: 'Ácido ascórbico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica fijándose a la subunidad 30S; su elevada lipofilia le confiere extraordinaria penetración tisular y penetración en glándulas sebáceas.',
      detailed: 'Bacteriostático de espectro ampliado sobre intracelulares, Chlamydia, Mycoplasma, Rickettsia, Borrelia burgdorferi, Plasmodium falciparum y cepas comunitarias de SAMR. Posee además efectos antiinflamatorios inhibiendo metaloproteinasas de matriz (MMP-8 y MMP-13).',
      targetReceptor: 'Subunidad ribosomal 30S / Inhibición de colagenasas y MMPs',
      keyPoints: ['Fármaco de elección para Enfermedad de Lyme (Borrelia), Rickettsiosis, Brucelosis y Linfogranuloma venéreo', 'A diferencia de otras tetraciclinas, SE ELIMINA POR VÍA BILIAR-FECAL: NO REQUIERE AJUSTE EN FALLO RENAL', 'Es de las pocas tetraciclinas permitidas en niños para cursos cortos en rickettsiosis/fiebre de las Montañas Rocosas']
    },
    indications: {
      approved: [
        'Enfermedad de Lyme (eritema migratorio temprano y manifestaciones neurológicas)',
        'Infecciones genitales no gonocócicas por Chlamydia trachomatis y Ureaplasma urealyticum',
        'Rickettsiosis (Fiebre manchada de las Montañas Rocosas, tifus murino y endémico)',
        'Infecciones cutáneas por Staphylococcus aureus resistente a meticilina comunitario (CA-MRSA)',
        'Acné vulgar moderado a severo y Rosácea papulopustulosa',
        'Brucelosis humana (en combinación obligatoria con rifampicina o aminoglucósido)',
        'Profilaxis y tratamiento del carbunco / ántrax cutáneo o por inhalación (Bacillus anthracis)',
        'Profilaxis del paludismo / malaria por Plasmodium falciparum resistente a cloroquina'
      ]
    },
    dosageAndPosology: {
      adults: 'Dosis estándar: 200 mg el primer día (100 mg cada 12 h) seguidos de 100 mg cada 24 h (o 100 mg cada 12 h en infecciones severas o Lyme). Chlamydia genital: 100 mg cada 12 h durante 7 días. Profilaxis malaria: 100 mg al día comenzando 1-2 días antes del viaje y hasta 4 semanas postregreso.',
      pediatric: 'Niños > 8 años o < 45 kg: 4.4 mg/kg/día divididos en 2 tomas el día 1, luego 2.2 mg/kg/día. En menores de 8 años: solo indicado en casos de Rickettsiosis potencialmente mortales por curso corto.',
      renalAdjustment: 'NO REQUIERE AJUSTE DOSIS en insuficiencia renal de ningún grado ni en hemodiálisis.',
      hepaticAdjustment: 'Precaución en insuficiencia hepática severa.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'TOMAR SIEMPRE DE PIE CON UN VASO GRANDE DE AGUA (200 ml) y no acostarse en los 30 minutos posteriores para evitar úlcera esofágica inducida por pastillas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a tetraciclinas', 'Embarazo (2º y 3er trimestre)', 'Lactancia materna prolongada', 'Menores de 8 años (salvo rickettsiosis mortal)'],
      warnings: ['Fotosensibilidad severa (evitar exposición solar directa y cámaras de bronceado)', 'Esofagitis química y estenosis esofágica si se toma sin agua o acostado', 'Hipertensión intracraneal idiopática'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Tinción dental e inhibición del crecimiento óseo fetal. Evitar.',
      lactation: 'Precaución',
      lactationNotes: 'Cursos cortos (< 21 días) se consideran compatibles por absorción oral insignificante en presencia del calcio de la leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y dolor epigástrico', 'Fotosensibilidad con quemaduras solares intensas', 'Diarrea'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Esofagitis erosiva', 'Erupción maculopapular'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Pseudotumor cerebri', 'Enterocolitis por C. difficile', 'Hepatotoxicidad'] }
    ],
    interactions: [
      { id: 'int-dox-1', interactingSubstance: 'Antiácidos, Carbonato cálcico, Sulfato ferroso', severity: 'Mayor', clinicalEffect: 'Disminución importante de la absorción oral por quelación de iones.', recommendation: 'Separar la administración de doxiciclina al menos 2 horas de suplementos minerales.' },
      { id: 'int-dox-2', interactingSubstance: 'Antiepilépticos inductores (Fenitoína, Carbamazepina, Fenobarbital)', severity: 'Mayor', clinicalEffect: 'Aceleran drásticamente el aclaramiento hepático de doxiciclina reduciendo su vida media a la mitad.', recommendation: 'Aumentar la dosis de doxiciclina a 100 mg cada 12 horas o monitorizar respuesta clínica.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-minociclina',
    name: 'Minociclina Clorhidrato',
    brandNames: ['Minocin', 'Aknemin', 'Solodyn', 'Minopen'],
    atcCode: 'J01AA08',
    description: 'Tetraciclina semisintética de segunda generación con la mayor lipofilia del grupo, con penetración óptima en el sebo cutáneo, glándula sebácea y sistema nervioso central.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-min-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 cápsulas', excipients: 'Almidón de maíz, lactosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana fijándose a la subunidad 30S; disminuye la fracción de ácidos grasos libres proinflamatorios del sebo producidos por Cutibacterium acnes.',
      detailed: 'Bacteriostático de gran poder penetrante en tejidos ricos en lípidos. Posee acción neuroprotectora y antiinflamatoria por inhibición de la caspasa-1 y microglía.',
      targetReceptor: 'Subunidad 30S ribosomal bacteriana',
      keyPoints: ['Tratamiento de referencia dermatológico para Acné vulgar moderado-severo inflamatorio', 'Mayor frecuencia de efectos adversos vestibulares (vértigo, mareo) que otras tetraciclinas', 'Riesgo de pigmentación azul-grisácea cutánea y síndrome lupus-like en uso prolongado']
    },
    indications: {
      approved: [
        'Acné vulgar moderado a severo pápulo-pustuloso y quístico',
        'Portadores nasofaríngeos asintomáticos de Neisseria meningitidis (erradicación)',
        'Infecciones cutáneas por SAMR comunitario (CA-MRSA)',
        'Nocardiosis por Nocardia asteroides (alternativa a sulfamidas)',
        'Infecciones por Mycobacterium marinum (infección de acuarios)'
      ],
      offLabel: ['Artritis reumatoide (acción anticolagenasa coadyuvante)']
    },
    dosageAndPosology: {
      adults: 'Acné: 50 a 100 mg cada 12 o 24 horas por vía oral con las comidas. Infecciones bacterianas sistémicas: 200 mg dosis inicial, luego 100 mg cada 12 horas.',
      pediatric: 'Contraindicado en menores de 8 años. Mayores de 8 años: 4 mg/kg dosis inicial, luego 2 mg/kg cada 12 horas.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve o moderada; evitar dosis > 200 mg/día si TFG < 30 ml/min.',
      hepaticAdjustment: 'Usar con precaución.',
      routes: ['Oral'],
      administrationNotes: 'Puede tomarse con alimentos o leche (su absorción disminuye muy poco en comparación con la tetraciclina).'
    },
    safety: {
      contraindications: ['Hipersensibilidad a tetraciclinas', 'Menores de 8 años', 'Embarazo y lactancia', 'Insuficiencia hepática grave'],
      warnings: ['Síntomas vestibulares (mareo, ataxia, vértigo y náuseas) especialmente en mujeres jóvenes', 'Pigmentación azul-grisácea irreversible en piel, cicatrices, encías y escleras tras uso prolongado (>1 año)', 'Síndrome lúpico inducido por fármacos y hepatitis autoinmune'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno. Contraindicado.',
      lactation: 'Contraindicado',
      lactationNotes: 'Contraindicado en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Mareos, inestabilidad y vértigo vestibular'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y dispepsia', 'Cefalea', 'Hiperpigmentación cutánea o mucosa azulada en tratamientos crónicos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Lupus eritematoso inducido por fármacos (anticuerpos antinucleares y antihistonas)', 'Hepatitis autoinmune fulminante', 'Síndrome DRESS'] }
    ],
    interactions: [
      { id: 'int-min-1', interactingSubstance: 'Isotretinoína', severity: 'Contraindicada', clinicalEffect: 'Riesgo inaceptable de hipertensión intracraneal benigna (pseudotumor cerebri).', recommendation: 'Dejar transcurrir al menos 14 días entre el fin de minociclina y el inicio de isotretinoína.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- CARBAPENEMES: IMIPENEM, MEROPENEM ---
  // ==========================================
  {
    id: 'med-imipenem',
    name: 'Imipenem + Cilastatina Sódica',
    brandNames: ['Tienam', 'Primaxin', 'Imipenem/Cilastatina Hospira'],
    atcCode: 'J01DH51',
    description: 'Carbapenémico parenteral de ultrarrápido efecto bactericida y espectro ultrancho, formulado en proporción 1:1 con cilastatina (inhibidor competitivo de la deshidropeptidasa-I renal humana).',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-imi-1', form: 'Polvo para solución para perfusión IV', concentration: '500 mg Imipenem / 500 mg Cilastatina', route: 'Intravenosa', packaging: 'Frasco de infusión o vial de 100 ml', excipients: 'Bicarbonato sódico (contiene 37.5 mg de sodio)' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de pared bacteriana fijándose con extrema avidez a PBP2, PBP1A y PBP1B. La cilastatina bloquea la enzima dehidropeptidasa-1 (DHP-1) del túbulo renal proximal evitando la degradación nefrótica del fármaco.',
      detailed: 'Carbapenem ultra-resistente a betalactamasas de espectro extendido (BLEE) y AmpC. El imipenem solo es hidrolizado por la enzima renal DHP-1 a un metabolito nefrotóxico e inactivo; la cilastatina inhibe competitivamente a la DHP-1, asegurando altos niveles urinarios de imipenem activo y protegiendo el túbulo renal.',
      targetReceptor: 'PBPs 2 y 1B bacterianas / DHP-1 renal',
      keyPoints: ['Espectro amplísimo: bacterias Gram positivas, enterobacterias productoras de BLEE, Pseudomonas aeruginosa y anaerobios como Bacteroides fragilis', 'POTENCIAL EPILEPTÓGENO: reduce el umbral convulsivo, especialmente a dosis altas o en insuficiencia renal no ajustada', 'NO INDICADO en meningitis (por neurotoxicidad convulsiva)']
    },
    indications: {
      approved: [
        'Sepsis y shock séptico nosocomial polimicrobiano o de origen desconocido',
        'Infecciones intraabdominales complicadas (peritonitis terciaria, abscesos intraabdominales)',
        'Infecciones nosocomiales graves del tracto respiratorio inferior (neumonía nosocomial y asociada a ventilación)',
        'Infecciones ginecológicas graves, endometritis postparto y sepsis pélvica',
        'Infecciones complicadas de piel, tejidos blandos y pie diabético neuroisquémico infectado',
        'Infecciones urinarias complicadas y pielonefritis'
      ]
    },
    dosageAndPosology: {
      adults: '500 mg cada 6 horas o 1 g cada 8 horas (dosis máxima habitual 4 g/día o 50 mg/kg/día) administrado en infusión intravenosa durante 40 a 60 minutos.',
      pediatric: '60 a 100 mg/kg/día divididos en 4 dosis (cada 6 horas). No recomendado en infecciones del SNC en niños.',
      renalAdjustment: 'OBLIGATORIO AJUSTAR para prevenir crisis epilépticas: TFG 30-50 ml/min: 500 mg cada 8 h; TFG 10-29 ml/min: 500 mg cada 12 h; TFG < 10 ml/min: 250-500 mg cada 12 h solo si hay hemodiálisis.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa'],
      administrationNotes: 'Infusión IV en 40-60 minutos para dosis de 500 mg; infusiones muy rápidas pueden provocar náuseas intensas y vómitos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave a carbapenémicos o anafilaxia a betalactámicos', 'Coadministración con ácido valproico (disminución letal de niveles del anticonvulsivo)'],
      warnings: ['CRISIS CONVULSIVAS y mioclonías (mayor riesgo que meropenem; evitar en pacientes con epilepsia, lesiones cerebrales o insuficiencia renal sin ajuste)', 'Sobreinfección fúngica o por Clostridioides difficile'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar solo si no hay alternativa disponible.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y vómitos (relacionados con la velocidad de infusión)', 'Diarrea', 'Flebitis e induración venosa', 'Exantema cutáneo'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Convulsiones y mioclonías', 'Somnolencia y confusión', 'Test de Coombs directo positivo'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Estado epiléptico', 'Colitis pseudomembranosa', 'Hepatitis colestásica'] }
    ],
    interactions: [
      { id: 'int-imi-1', interactingSubstance: 'Ácido Valproico / Valproato sódico', severity: 'Contraindicada', clinicalEffect: 'Los carbapenemes inducen la hidrólisis del glucurónido de valproato e impiden su reabsorción, provocando una caída súbita del 80-95% en los niveles de ácido valproico en 24 h y desatando crisis epilépticas incontrolables.', recommendation: 'ASOCIACIÓN CONTRAINDICADA. Si se requiere carbapenem, cambiar a levetiracetam u otro anticonvulsivo.' },
      { id: 'int-imi-2', interactingSubstance: 'Ganciclovir', severity: 'Mayor', clinicalEffect: 'Aumento severo del riesgo de crisis convulsivas generalizadas.', recommendation: 'Evitar la administración conjunta a menos que el beneficio supere el riesgo.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-meropenem',
    name: 'Meropenem Trihidrato',
    brandNames: ['Meronem', 'Merrem', 'Meropenem Hospira', 'Optopen'],
    atcCode: 'J01DH02',
    description: 'Carbapenémico semisintético estable frente a la dehidropeptidasa-1 humana que no requiere cilastatina; posee menor potencial epileptógeno que imipenem y excelente penetración en el líquido cefalorraquídeo.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-mer-1', form: 'Polvo para solución inyectable o para perfusión IV', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial de vidrio x 1 g con ampolla de disolvente', excipients: 'Carbonato sódico anhidro (contiene 90.2 mg de sodio por gramo)' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de la pared bacteriana fijándose con alta afinidad a PBP2, PBP3 y PBP4 de enterobacterias y Pseudomonas aeruginosa.',
      detailed: 'Carbapenem de amplio espectro bactericida. Su radical 1-beta-metilo le otorga estabilidad intrínseca frente a la dehidropeptidasa renal humana DHP-1, por lo que no necesita inhibidor enzimático. Penetra activamente el espacio subaracnoideo inflamado.',
      targetReceptor: 'PBPs 2 y 3 bacterianas',
      keyPoints: ['Carbapenem de elección para Meningitis bacteriana nosocomial y en pacientes neuroquirúrgicos', 'Menor riesgo de convulsiones que imipenem (perfil neurotóxico mucho más favorable)', 'Permite infusión extendida de 3 horas o infusión continua para maximizar T > CIM frente a gérmenes multirresistentes']
    },
    indications: {
      approved: [
        'Meningitis bacteriana aguda nosocomial y comunitaria en adultos y niños',
        'Neumonía nosocomial grave y neumonía asociada a ventilación mecánica (NAV)',
        'Infecciones intraabdominales complicadas (peritonitis perforada, abscesos hepáticos y peritonitis postoperatoria)',
        'Sepsis y shock séptico en pacientes críticos y neutropenia febril',
        'Infecciones complicadas del tracto urinario con urosepsis',
        'Infecciones broncopulmonares crónicas en fibrosis quística colonizada por Pseudomonas aeruginosa'
      ]
    },
    dosageAndPosology: {
      adults: 'Dosis estándar: 1 g IV cada 8 horas. En meningitis bacteriana y fibrosis quística: 2 g IV cada 8 horas. Neutropenia febril o shock séptico: 1 a 2 g cada 8 horas en infusión prolongada de 3 horas.',
      pediatric: '> 3 meses: 20 mg/kg cada 8 horas (en meningitis 40 mg/kg cada 8 horas, máx 2 g cada 8 h).',
      renalAdjustment: 'TFG 26-50 ml/min: 1 g cada 12 h; TFG 10-25 ml/min: 500 mg cada 12 h; TFG < 10 ml/min: 500 mg cada 24 h.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa'],
      administrationNotes: 'Bolo IV lento en 3 a 5 minutos (hasta 1 g) o infusión intravenosa en 15 a 30 minutos (o extendida en 3 horas).'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave conocida a meropenem u otros carbapenémicos', 'Hipersensibilidad inmediata grave (anafilaxia) a betalactámicos'],
      warnings: ['Reducción precipitada y profunda de niveles séricos de ácido valproico con pérdida del control convulsivo', 'Colitis pseudomembranosa por Clostridioides difficile'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Uso aceptable durante el embarazo si está clínicamente indicado.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible; se excreta en cantidades clínicamente irrelevantes en leche materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea y dolor abdominal', 'Náuseas y vómitos', 'Cefalea', 'Aumento transitorio de transaminasas y fosfatasa alcalina', 'Trombocitosis'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Candidiasis oral y vulvovaginal', 'Eosinofilia y trombocitopenia', 'Prurito y urticaria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Convulsiones (muy baja frecuencia comparado con imipenem)', 'Colitis pseudomembranosa', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-mer-1', interactingSubstance: 'Ácido Valproico / Divalproex sódico', severity: 'Contraindicada', clinicalEffect: 'Disminución fulminante del 60-90% de los niveles plasmáticos de ácido valproico en pocas horas con riesgo crítico de estado epiléptico.', recommendation: 'NO COADMINISTRAR. Sustituir carbapenem o cambiar el anticonvulsivo.' },
      { id: 'int-mer-2', interactingSubstance: 'Probenecid', severity: 'Mayor', clinicalEffect: 'Inhibe la excreción tubular renal activa de meropenem aumentando su AUC y semivida.', recommendation: 'Evitar la asociación.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- AMINOGLUCÓSIDOS: AMIKACINA, TOBRAMICINA, NETILMICINA ---
  // ==========================================
  {
    id: 'med-amikacina',
    name: 'Amikacina Sulfato',
    brandNames: ['Biklin', 'Amikin', 'Amikacina Braun'],
    atcCode: 'J01GB06',
    description: 'Aminoglucósido semisintético derivado de la kanamicina con la mayor resistencia a las enzimas modificadoras de aminoglucósidos bacterianas (acetiltransferasas, fosfotransferasas y nucleotidiltransferasas).',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-ami-1', form: 'Solución inyectable para perfusión IV/IM', concentration: '500 mg / 2 ml y 1000 mg / 4 ml', route: 'Intravenosa', packaging: 'Vial o ampolla de 2 ml y 4 ml', excipients: 'Metabisulfito sódico, citrato sódico' },
      { id: 'p-ami-2', form: 'Suspensión para inhalación por nebulizador', concentration: '590 mg / 8.4 ml', route: 'Inhalatoria', packaging: 'Vial para nebulizador específico', excipients: 'Colesterol, DPPC (liposomal)' }
    ],
    mechanismOfAction: {
      summary: 'Unión irreversible a la subunidad ribosomal 30S bacteriana provocando lectura errónea del ARNm y síntesis de proteínas aberrantes no funcionales que desestabilizan la membrana celular.',
      detailed: 'Bactericida concentración-dependiente dependiente de transporte activo por oxígeno. Su cadena lateral L-hidroxiaminobutirilo (HABA) bloquea el ataque enzimático de casi todas las enzimas que inactivan a gentamicina y tobramicina.',
      targetReceptor: 'Subunidad ribosomal 30S',
      keyPoints: ['Aminoglucósido de elección frente a bacilos Gram negativos resistentes a gentamicina (Klebsiella, Pseudomonas, Acinetobacter)', 'Actividad antimicobacteriana contra Mycobacterium tuberculosis multirresistente (MDR-TB) y Complejo Mycobacterium avium', 'Monodosis diaria (15-20 mg/kg) recomendada para maximizar eficacia Cmax/CIM y minimizar nefrotoxicidad']
    },
    indications: {
      approved: [
        'Sepsis grave y shock séptico por bacilos Gram negativos resistentes a gentamicina',
        'Infecciones respiratorias graves nosocomiales en combinación con betalactámico',
        'Infecciones complicadas y recurrentes del tracto urinario (pielonefritis)',
        'Infecciones intraabdominales graves y peritonitis',
        'Tuberculosis multirresistente (MDR-TB) de segunda línea',
        'Infección pulmonar por Mycobacterium avium complex en pacientes con bronquiectasias (vía inhalatoria)'
      ]
    },
    dosageAndPosology: {
      adults: 'Monodosis diaria preferida: 15 a 20 mg/kg IV en perfusión de 60 minutos una vez cada 24 horas. Monitorizar niveles valle (< 5 mcg/ml) y pico (55 a 65 mcg/ml). Vía IM: misma dosis.',
      pediatric: 'Neonatos: 15 mg/kg cada 24 h; niños: 15 a 20 mg/kg/día en monodosis única o dividida cada 12 h.',
      renalAdjustment: 'OBLIGATORIO AJUSTAR intervalo según aclaramiento: CrCl > 50 ml/min: cada 24 h; CrCl 30-50 ml/min: cada 36-48 h; CrCl < 30 ml/min: dosificar según niveles plasmáticos valle.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa', 'Intramuscular', 'Inhalatoria'],
      administrationNotes: 'Infusión IV en 30 a 60 minutos en suero salino o glucosado. Monitorear diuresis y creatinina cada 48 horas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a aminoglucósidos', 'Miastenia gravis (riesgo de crisis miasténica y parálisis respiratoria)'],
      warnings: ['OTOTOXICIDAD coclear irreversible con pérdida auditiva de altas frecuencias y acúfenos', 'NEFROTOXICIDAD tubular con necrosis tubular aguda', 'Bloqueo neuromuscular agudo'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno probado: ototoxicidad coclear congénita irreversible en el feto.',
      lactation: 'Compatible',
      lactationNotes: 'Baja absorción oral en el lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de ototoxicidad irreversible bilateral, nefrotoxicidad y bloqueo neuromuscular.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Elevación de creatinina sérica y urea (nefrotoxicidad)', 'Tinnitus y acúfenos', 'Pérdida auditiva subclínica en frecuencias altas'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Vértigo y ataxia vestibular', 'Erupción cutánea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Sordera neurosensorial bilateral permanente', 'Insuficiencia renal anúrica', 'Parálisis respiratoria neuromuscular'] }
    ],
    interactions: [
      { id: 'int-ami-1', interactingSubstance: 'Furosemida o Torasemida IV', severity: 'Contraindicada', clinicalEffect: 'Aumento exponencial de ototoxicidad coclear con sordera permanente irreversible.', recommendation: 'Evitar el uso conjunto de diuréticos de asa y aminoglucósidos.' },
      { id: 'int-ami-2', interactingSubstance: 'Vancomicina / Colistina / Cisplatino', severity: 'Mayor', clinicalEffect: 'Sinergismo nefrotóxico aditivo severo en el túbulo renal.', recommendation: 'Monitorear niveles séricos de ambos fármacos y creatinina diaria.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-tobramicina',
    name: 'Tobramicina Sulfato',
    brandNames: ['Tobrex', 'Nebcin', 'TOBI', 'Tobradex (con dexametasona)'],
    atcCode: 'J01GB01 / S01AA12',
    description: 'Aminoglucósido con la mayor actividad intrínseca in vitro contra Pseudomonas aeruginosa, ampliamente utilizado por vía inhalatoria en fibrosis quística, por vía parenteral y como colirio oftálmico.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-tob-1', form: 'Solución para inhalación por nebulizador', concentration: '300 mg / 5 ml', route: 'Inhalatoria', packaging: 'Ampollas monodosis x 56 ampollas (ciclo 28 días)', excipients: 'Cloruro sódico, agua para inyección' },
      { id: 'p-tob-2', form: 'Colirio oftálmico en solución al 0.3%', concentration: '3 mg / ml', route: 'Oftálmica', packaging: 'Frasco gotero de 5 ml', excipients: 'Cloruro de benzalconio' },
      { id: 'p-tob-3', form: 'Solución inyectable IV/IM', concentration: '100 mg / 2 ml', route: 'Intravenosa', packaging: 'Vial de 2 ml', excipients: 'Edetato disódico, sulfito sódico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana por unión a la subunidad 30S; desorganiza la membrana externa de Pseudomonas aeruginosa facilitando la entrada de betalactámicos.',
      detailed: 'Bactericida concentración-dependiente con Cmax/CIM óptimo > 10. Su actividad sobre P. aeruginosa es de 2 a 4 veces superior a la de gentamicina.',
      targetReceptor: 'Subunidad 30S ribosomal bacteriana',
      keyPoints: ['Terapia inhalatoria estándar en ciclos on/off (28 días sí, 28 días no) para infección bronquial crónica por Pseudomonas en Fibrosis Quística', 'Colirio oftálmico de elección para conjuntivitis y queratitis bacteriana', 'Mayor toxicidad vestibular que auditiva comparada con amikacina']
    },
    indications: {
      approved: [
        'Colonización e infección broncopulmonar crónica por Pseudomonas aeruginosa en pacientes con fibrosis quística de ≥ 6 años (vía inhalatoria)',
        'Conjuntivitis bacteriana, queratitis, blefaritis y úlceras corneales (vía oftálmica)',
        'Infecciones nosocomiales graves por Pseudomonas aeruginosa (sepsis, neumonía nosocomial y quemaduras infectadas por vía IV)'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía inhalatoria (Fibrosis quística): 300 mg nebulizados cada 12 horas en ciclos continuos de 28 días de tratamiento seguidos de 28 días de descanso. Vía oftálmica: 1 a 2 gotas en ojo afectado cada 4 horas (cada 1-2 horas en infecciones graves). Vía IV sistémica: 5 a 7 mg/kg/día en monodosis única diaria (o 3-5 mg/kg divididos cada 8 horas). Nivel valle < 1 mcg/ml.',
      pediatric: 'Inhalatoria (≥ 6 años): 300 mg cada 12 h. Vía IV: 6 a 7.5 mg/kg/día divididos cada 8 h.',
      renalAdjustment: 'Vía IV: ajustar intervalo según aclaramiento de creatinina; vía inhalatoria: no suele requerir ajuste por absorción sistémica baja.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Inhalatoria', 'Oftálmica', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Vía inhalatoria: usar nebulizador de flujo constante. Vía IV: infundir en 30 a 60 minutos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a tobramicina o aminoglucósidos', 'Miastenia gravis'],
      warnings: ['Broncoespasmo paradójico agudo con la vía inhalatoria (administrar broncodilatador previo)', 'Ototoxicidad vestibular y coclear sistémica', 'Nefrotoxicidad'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Ototoxicidad fetal confirmada con la vía sistémica. La vía oftálmica es segura.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible en lactancia por absorción insignificante.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Disfonía, tos y faringitis (vía inhalatoria)', 'Picor y escozor ocular transitorio (vía oftálmica)', 'Elevación de creatinina (vía IV)'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Broncoespasmo agudo', 'Tinnitus y mareos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Sordera coclear irreversible', 'Fallo renal agudo'] }
    ],
    interactions: [
      { id: 'int-tob-1', interactingSubstance: 'Bloqueantes neuromusculares', severity: 'Mayor', clinicalEffect: 'Potenciación del bloqueo neuromuscular con parálisis prolongada.', recommendation: 'Monitorizar función respiratoria.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-netilmicina',
    name: 'Netilmicina Sulfato',
    brandNames: ['Netromicina', 'Netacin', 'Certomycin'],
    atcCode: 'J01GB07 / S01AA23',
    description: 'Aminoglucósido semisintético de amplio espectro derivado de la sisomicina con resistencia a diversas adeniltransferasas y fosfotransferasas bacterianas y menor perfil de oto y nefrotoxicidad que gentamicina.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-net-1', form: 'Solución inyectable para perfusión IV/IM', concentration: '100 mg / ml y 150 mg / 1.5 ml', route: 'Intravenosa', packaging: 'Ampollas de 1.5 ml y 2 ml', excipients: 'Metabisulfito sódico, sulfito sódico' },
      { id: 'p-net-2', form: 'Colirio oftálmico en unidosis al 0.3%', concentration: '3 mg / ml', route: 'Oftálmica', packaging: 'Caja x 20 envases unidosis de 0.4 ml sin conservantes', excipients: 'Agua purificada' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de proteínas bacterianas uniéndose a la subunidad ribosomal 30S provocando disrupción de la traducción y muerte bacteriana.',
      detailed: 'Bactericida con actividad potente contra Enterobacteriaceae, Pseudomonas aeruginosa y estafilococos. Menor susceptibilidad a la inactivación por enzimas bacterianas mediadas por plásmidos.',
      targetReceptor: 'Subunidad ribosomal 30S bacteriana',
      keyPoints: ['Espectro comparable a gentamicina con menor incidencia de ototoxicidad coclear en estudios comparativos', 'Formulaciones oftálmicas sin conservantes ideales para profilaxis y tratamiento ocular perioperatorio', 'Requiere monitorización terapéutica de niveles plasmáticos']
    },
    indications: {
      approved: [
        'Infecciones bacterianas graves nosocomiales del tracto urinario, respiratorio e intraabdominal',
        'Sepsis y bacteriemia por Gram negativos sensibles',
        'Infecciones oculares externas bacterianas y profilaxis pre y postoperatoria en cirugía de cataratas'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía IV/IM: 4 a 6 mg/kg/día administrados en monodosis única diaria o dividida cada 8-12 horas. Infecciones urinarias no complicadas: 3 a 4 mg/kg/día. Colirio: 1-2 gotas cada 4-6 horas.',
      pediatric: 'Neonatos: 4 a 5 mg/kg cada 24 horas; niños: 6 a 7.5 mg/kg/día en 1 a 3 dosis.',
      renalAdjustment: 'Obligatorio ajustar según aclaramiento de creatinina aumentando el intervalo entre dosis.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa', 'Intramuscular', 'Oftálmica'],
      administrationNotes: 'Infusión IV en 30 a 60 minutos diluida en 50-100 ml de suero fisiológico.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a aminoglucósidos', 'Miastenia gravis'],
      warnings: ['Nefrotoxicidad y ototoxicidad', 'Vigilar hidratación del paciente'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Riesgo de ototoxicidad congénita.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Elevación de creatinina plasmática', 'Irritación ocular local (colirio)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Ototoxicidad coclear y vestibular', 'Necrosis tubular aguda', 'Bloqueo neuromuscular'] }
    ],
    interactions: [
      { id: 'int-net-1', interactingSubstance: 'Cefalosporinas y diuréticos de asa', severity: 'Mayor', clinicalEffect: 'Aumento del potencial nefrotóxico u ototóxico.', recommendation: 'Monitorizar función renal y audición.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- BETALACTÁMICO INHIBITORIO Y ANTIBIÓTICOS DIVERSOS ---
  // ==========================================
  {
    id: 'med-tmp-smx',
    name: 'Trimetoprima - Sulfametoxazol (Cotrimoxazol / TMP-SMX)',
    brandNames: ['Bactrim', 'Septrin', 'Soltrim', 'Bactrimel'],
    atcCode: 'J01EE01',
    description: 'Combinación fija en relación 1:5 de una diaminopirimidina (trimetoprima) y una sulfonamida (sulfametoxazol) que ejerce un bloqueo secuencial sinérgico bactericida de la síntesis del ácido fólico bacteriano.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-tmp-1', form: 'Comprimidos orales estándar', concentration: '80 mg TMP / 400 mg SMX', route: 'Oral', packaging: 'Caja x 20 comprimidos', excipients: 'Almidón de maíz, povidona' },
      { id: 'p-tmp-2', form: 'Comprimidos orales de doble concentración (Forte / DS)', concentration: '160 mg TMP / 800 mg SMX', route: 'Oral', packaging: 'Caja x 14, 20 y 30 comprimidos', excipients: 'Estearato magnésico' },
      { id: 'p-tmp-3', form: 'Suspensión oral pediátrica', concentration: '40 mg TMP / 200 mg SMX por 5 ml', route: 'Oral', packaging: 'Frasco de 100 ml con vasito dosificador', excipients: 'Sacarosa, aroma plátano' },
      { id: 'p-tmp-4', form: 'Concentrado para solución para perfusión IV', concentration: '80 mg TMP / 400 mg SMX por ampolla de 5 ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas de 5 ml', excipients: 'Etanol, propilenglicol' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición enzimática secuencial de dos pasos clave en la síntesis del tetrahidrofolato bacteriano: el sulfametoxazol inhibe la dihidropteroato sintasa y la trimetoprima inhibe la dihidrofolato reductasa.',
      detailed: 'Cada componente por separado es bacteriostático, pero juntos producen un efecto sinérgico bactericida letal al vaciar las reservas bacterianas de nucleótidos purínicos, timidina y ADN.',
      targetReceptor: 'Dihidropteroato sintasa (SMX) y Dihidrofolato reductasa (TMP)',
      keyPoints: ['Tratamiento y profilaxis de elección mundial para Neumonía por Pneumocystis jirovecii (PJP/PCP) en pacientes con VIH/inmunodeprimidos', 'Excelente cobertura frente a Nocardia, Stenotrophomonas maltophilia y SAMR comunitario (CA-MRSA)', 'Riesgo de hiperpotasemia severa (la trimetoprima bloquea canales de sodio ENaC en el túbulo colector)']
    },
    indications: {
      approved: [
        'Tratamiento curativo y profilaxis primaria/secundaria de Neumonía por Pneumocystis jirovecii (PJP)',
        'Infecciones cutáneas y abscesos por Staphylococcus aureus resistente a meticilina comunitario (CA-MRSA)',
        'Infecciones del tracto urinario agudas y recidivantes (cistitis y prostatitis aguda/crónica)',
        'Nocardiosis sistémica y cerebral (fármaco de primera elección)',
        'Infecciones por Stenotrophomonas maltophilia (tratamiento de referencia)',
        'Exacerbación aguda de bronquitis crónica y otitis media aguda',
        'Shigelosis y diarrea del viajero por enterobacterias susceptibles'
      ]
    },
    dosageAndPosology: {
      adults: 'Infecciones urinarias/cutáneas: 1 comprimido Forte (160/800 mg) cada 12 horas por vía oral durante 3 a 10 días. Tratamiento de Pneumocystis jirovecii: 15 a 20 mg/kg/día de TMP (con 75-100 mg/kg/día de SMX) IV u oral divididos cada 6 u 8 horas durante 21 días (con corticoterapia si pO2 < 70 mmHg). Profilaxis de P. jirovecii: 1 comprimido Forte diario o 3 veces por semana.',
      pediatric: '> 2 meses: 8 mg/kg/día de TMP y 40 mg/kg/día de SMX divididos en 2 tomas (cada 12 h). En P. jirovecii: 15-20 mg/kg/día de TMP.',
      renalAdjustment: 'TFG 15-30 ml/min: 50% de la dosis estándar; TFG < 15 ml/min: no recomendado.',
      hepaticAdjustment: 'Contraindicado en daño parenquimatoso hepático grave.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Mantener adecuada hidratación del paciente (al menos 1.5 a 2 litros de líquido al día) para prevenir la formación de cristales urinarios de sulfonamida.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a sulfamidas o trimetoprima', 'Recién nacidos y lactantes menores de 6 semanas (riesgo de kernícterus por desplazamiento de bilirrubina)', 'Anemia megaloblástica por deficiencia de folato', 'Insuficiencia hepática o renal grave no dializada', 'Déficit de G6PD (riesgo de hemólisis aguda)'],
      warnings: ['HIPERPOTASEMIA: la trimetoprima actúa como diurético ahorrador de potasio amilorida-like bloqueando canales ENaC', 'Reacciones cutáneas severas (Síndrome de Stevens-Johnson / NET)', 'Mielosupresión (leucopenia, anemia aplásica y trombocitopenia; administrar ácido folínico si se requiere dosis alta crónica)'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado en primer trimestre (antagonista de folatos, defectos del tubo neural) y en el término (kernícterus neonatal).',
      lactation: 'Contraindicado',
      lactationNotes: 'Contraindicado si el neonato tiene menos de 2 meses o sufre hiperbilirrubinemia / déficit de G6PD.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de reacciones cutáneas graves mortales (SJS/NET) y discrasias sanguíneas fatales.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas, vómitos y anorexia', 'Exantema cutáneo morbiliforme y prurito', 'Hiperpotasemia', 'Elevación de creatinina sérica (inhibe secreción tubular sin alterar TFG real)'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Diarrea y glositis', 'Candidiasis oral'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome de Stevens-Johnson y Necrólisis Epidérmica Tóxica', 'Agranulocitosis, trombocitopenia y anemia aplásica', 'Hepatitis fulminante', 'Cristaluria e insuficiencia renal'] }
    ],
    interactions: [
      { id: 'int-tmp-1', interactingSubstance: 'Warfarina y Sintrom', severity: 'Mayor', clinicalEffect: 'Inhibición potente de CYP2C9 por sulfametoxazol: multiplica la vida media de la warfarina con hemorragias masivas.', recommendation: 'Reducir dosis de anticoagulante al 50% y monitorizar INR cada 48 h.' },
      { id: 'int-tmp-2', interactingSubstance: 'Fármacos hiperpotasemiantes (IECAs, ARA-II, Espironolactona)', severity: 'Mayor', clinicalEffect: 'Hiperpotasemia sinérgica severa potencialmente mortal con parada cardíaca.', recommendation: 'Monitorizar potasio sérico estricto.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-cloranfenicol',
    name: 'Cloranfenicol (Levomicetina / Succinato sódico)',
    brandNames: ['Cloromycetin', 'Clorocil', 'Colirio Cloranfenicol', 'Oftalmolosa Cusi Cloranfenicol'],
    atcCode: 'J01BA01 / S01AA01',
    description: 'Antibiótico de amplio espectro prototípico obtenido originalmente de Streptomyces venezuelae con extraordinaria penetración celular y en SNC, restringido hoy en día por su riesgo de toxicidad medular aplásica idiosincrática.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-clo-1', form: 'Polvo para solución inyectable IV (Succinato sódico)', concentration: '1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial x 1 g', excipients: 'Sodio' },
      { id: 'p-clo-2', form: 'Colirio y pomada oftálmica al 0.5% - 1%', concentration: '5 mg / ml', route: 'Oftálmica', packaging: 'Frasco gotero de 10 ml y tubo de 5 g', excipients: 'Ácido bórico, cloruro de benzalconio' },
      { id: 'p-clo-3', form: 'Cápsulas orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 20 cápsulas', excipients: 'Lactosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose reversiblemente a la subunidad ribosomal 50S y bloqueando la enzima peptidiltransferasa.',
      detailed: 'Impide la formación del enlace peptídico bacteriano. También puede inhibir la síntesis proteica en mitocondrias de mamíferos (ribosomas 70S mitocondriales), explicando su toxicidad hematológica dosis-dependiente.',
      targetReceptor: 'Peptidiltransferasa de la subunidad ribosomal 50S bacteriana y 70S mitocondrial',
      keyPoints: ['Espectro amplísimo y penetración insuperable en SNC y líquido cefalorraquídeo', 'SÍNDROME DEL BEBÉ GRIS en neonatos por inmadurez de la glucuroniltransferasa hepática (colapso circulatorio y cianosis grisácea)', 'Riesgo de ANEMIA APLÁSICA irreversible independiente de la dosis (1 en 25,000-40,000 tratamientos)']
    },
    indications: {
      approved: [
        'Fiebre tifoidea y paratifoidea grave por Salmonella enterica serotipo Typhi resistente a otros fármacos',
        'Meningitis bacteriana aguda por Haemophilus influenzae, Neisseria meningitidis o Streptococcus pneumoniae en pacientes con alergia grave anafiláctica a betalactámicos',
        'Infecciones oftálmicas bacterianas graves (conjuntivitis bacteriana purulenta, blefaritis y queratitis)',
        'Abscesos cerebrales y peste por Yersinia pestis'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía IV / Oral: 50 mg/kg/día divididos en 4 dosis (cada 6 horas). En meningitis severa hasta 100 mg/kg/día inicialmente, reduciendo a 50 mg/kg/día tan pronto haya mejoría clínica. Vía oftálmica: 1 gota cada 2 horas el primer día, luego cada 4-6 horas.',
      pediatric: 'Niños: 50 mg/kg/día cada 6 h. Neonatos > 2 semanas: 25 mg/kg/día cada 12 h. Neonatos < 2 semanas: máx 25 mg/kg cada 24 h con monitoreo estricto de niveles séricos (rango terapéutico 10-20 mcg/ml).',
      renalAdjustment: 'No suele requerir ajuste de dosis por eliminación hepática, pero monitorizar niveles en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis obligatoriamente en insuficiencia hepática y vigilar niveles séricos.',
      routes: ['Intravenosa', 'Oral', 'Oftálmica'],
      administrationNotes: 'Infusión IV en 30 minutos. Control hemático completo (hemograma y reticulocitos) cada 48-72 horas durante todo el tratamiento.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a fenicoles', 'Antecedente de depresión medular previa o discrasias sanguíneas', 'Neonatos prematuros y a término (contraindicado a dosis estándar sistémica)'],
      warnings: ['SÍNDROME DEL BEBÉ GRIS: cianosis, flacidez, hipotermia, colapso cardiovascular y muerte por acumulación tóxica', 'ANEMIA APLÁSICA IDIOSINCRÁTICA IRREVERSIBLE: fatal en la mayoría de casos', 'Mielosupresión reversible dosis-dependiente (inhibición mitocondrial)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en el tercer trimestre y parto por riesgo de síndrome gris en el recién nacido.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna; contraindicado por riesgo de toxicidad medular en el lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de anemia aplásica fatal irreversible e idiosincrática. Restringir su uso a infecciones graves sin alternativa.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Anemia, leucopenia y trombocitopenia dependiente de dosis', 'Sabor amargo en boca tras inyección IV', 'Náuseas y vómitos'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Neuritis óptica y neuropatía periférica tras cursos prolongados'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anemia aplásica pancitopénica irreversible y letal', 'Síndrome del bebé gris', 'Encefalopatía y delirio'] }
    ],
    interactions: [
      { id: 'int-clo-1', interactingSubstance: 'Fenitoína / Sulfonilureas / Warfarina', severity: 'Mayor', clinicalEffect: 'El cloranfenicol inhibe de forma potente el CYP2C9 y CYP2C19 hepático, disparando las concentraciones de estos fármacos a niveles tóxicos.', recommendation: 'Monitorizar estrechamente y reducir dosis de los fármacos acompañantes.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-lincomicina',
    name: 'Lincomicina Clorhidrato',
    brandNames: ['Lincocin', 'Frademicina', 'Lincomicina Fabra'],
    atcCode: 'J01FF02',
    description: 'Antibiótico lincosamida natural derivado de Streptomyces lincolnensis con actividad frente a bacterias aerobias Gram positivas y anaerobias, precursor directo de la clindamicina.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-lin-1', form: 'Solución inyectable para inyección IM/IV', concentration: '300 mg / ml y 600 mg / 2 ml', route: 'Intramuscular', packaging: 'Ampollas de 1 ml y 2 ml', excipients: 'Alcohol bencílico' },
      { id: 'p-lin-2', form: 'Cápsulas orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 12 y 24 cápsulas', excipients: 'Lactosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S del ribosoma bacteriano e interfiriendo con la reacción de transpeptidación.',
      detailed: 'Similar a los macrólidos y clindamicina. Se une a la fracción 23S de la subunidad 50S. Posee resistencia cruzada MLSB (macrólidos, lincosamidas y estreptogramina B).',
      targetReceptor: 'Subunidad ribosomal 50S',
      keyPoints: ['Precursor natural de la clindamicina; hoy en día se prefiere clindamicina por mejor biodisponibilidad y potencia', 'Riesgo histórico relevante de Colitis pseudomembranosa por Clostridioides difficile', 'La administración IV rápida puede desencadenar hipotensión grave y paro cardíaco']
    },
    indications: {
      approved: [
        'Infecciones osteoarticulares graves (osteomielitis y artritis séptica) por estafilococos sensibles en pacientes alérgicos a penicilinas',
        'Infecciones cutáneas y de tejidos blandos por cocos Gram positivos',
        'Infecciones respiratorias bacterianas agudas y amigdalitis en alérgicos a betalactámicos'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía IM: 600 mg cada 12 a 24 horas. Vía IV: 600 mg a 1 g cada 8 a 12 horas diluidos en al menos 100 ml de suero e infundidos en 1 hora. Vía oral: 500 mg cada 6 a 8 horas con estómago vacío.',
      pediatric: 'Vía IM: 10 mg/kg cada 12-24 h; vía oral: 30 a 60 mg/kg/día divididos en 3-4 tomas.',
      renalAdjustment: 'TFG < 30 ml/min: reducir dosis al 25-50% del valor estándar.',
      hepaticAdjustment: 'Prolongación de semivida; vigilar dosificación.',
      routes: ['Intramuscular', 'Intravenosa', 'Oral'],
      administrationNotes: 'NUNCA INYECTAR EN BOLO DIRECTO IV. Infundir en al menos 60 minutos para evitar hipotensión grave y arritmias.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a lincosamidas o clindamicina', 'Antecedente de colitis ulcerosa o colitis asociada a antibióticos', 'Neonatos (contiene alcohol bencílico)'],
      warnings: ['COLITIS PSEUDOMEMBRANOSA potencialmente mortal por sobrecrecimiento de Clostridioides difficile', 'Paro cardiopulmonar en inyección IV no diluida'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar solo si es estrictamente necesario.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche; riesgo de diarrea y colitis en el lactante.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea acuosa persistente', 'Náuseas y vómitos', 'Dolor e induración en el sitio IM'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Glositis y estomatitis', 'Exantemas cutáneos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Colitis pseudomembranosa grave', 'Hipotensión y paro cardíaco tras infusión IV rápida', 'Agranulocitosis'] }
    ],
    interactions: [
      { id: 'int-lin-1', interactingSubstance: 'Eritromicina y Macrólidos', severity: 'Mayor', clinicalEffect: 'Antagonismo competitivo in vitro: compiten por el mismo sitio de unión en el ribosoma 50S.', recommendation: 'No coadministrar.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clindamicina',
    name: 'Clindamicina Fosfato / Clorhidrato',
    brandNames: ['Dalacin', 'Cleocin', 'Clindamicina Normon', 'Dalacin T (tópico)'],
    atcCode: 'J01FF01 / D10AF01',
    description: 'Lincosamida semisintética clorada de extraordinaria actividad frente a bacterias anaerobias y cocos Gram positivos; inhibe potentemente la síntesis de exotoxinas estafilocócicas y estreptocócicas (efecto Eagle).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cli-1', form: 'Cápsulas orales (Clorhidrato)', concentration: '150 mg y 300 mg', route: 'Oral', packaging: 'Caja x 16 y 24 cápsulas', excipients: 'Lactosa, almidón de maíz' },
      { id: 'p-cli-2', form: 'Solución inyectable IV/IM (Fosfato)', concentration: '300 mg / 2 ml y 600 mg / 4 ml', route: 'Intravenosa', packaging: 'Ampollas de 2 ml y 4 ml', excipients: 'Alcohol bencílico, edetato disódico' },
      { id: 'p-cli-3', form: 'Gel y solución tópica al 1%', concentration: '10 mg / g', route: 'Tópica', packaging: 'Tubo de 30 g o frasco de 50 ml', excipients: 'Alantoína, propilenglicol' },
      { id: 'p-cli-4', form: 'Crema y óvulos vaginales al 2%', concentration: '100 mg por óvulo', route: 'Vaginal', packaging: 'Caja x 3 o 7 óvulos con aplicadores', excipients: 'Glicéridos semisintéticos' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose a la subunidad 50S (dominio V del ARNr 23S). Inhibe la síntesis de exotoxinas bacterianas (toxina de choque tóxico TSST-1, toxina alfa y leucocidina Panton-Valentine).',
      detailed: 'Bacteriostático y bactericida según concentración. Penetra extraordinariamente en tejido óseo, abscesos y leucocitos polimorfonucleares. Suprime la producción de toxinas virulentas en infecciones invasivas fulminantes (efecto antitoxina).',
      targetReceptor: 'Subunidad ribosomal 50S',
      keyPoints: ['Fármaco fundamental antitoxina en Fascitis necrotizante estreptocócica y Síndrome de Choque Tóxico (asociado a betalactámico)', 'Excelente penetración ósea para Osteomielitis y artritis séptica', 'Antibiótico clásico con el mayor riesgo histórico de Colitis por Clostridioides difficile']
    },
    indications: {
      approved: [
        'Fascitis necrotizante y celulitis fulminante por Streptococcus pyogenes (asociado a Penicilina G)',
        'Síndrome de choque tóxico estafilocócico (SSTS) y estreptocócico',
        'Infecciones anaerobias intraabdominales y pélvicas (abscesos tubo-ováricos, peritonitis)',
        'Infecciones osteoarticulares (osteomielitis aguda y crónica) por SASM o CA-MRSA',
        'Vaginosis bacteriana por Gardnerella vaginalis (vía tópica/vaginal u oral)',
        'Acné vulgar inflamatorio moderado a severo (vía tópica)',
        'Infecciones orofaciales odontógenas graves y abscesos periamigdalinos'
      ],
      offLabel: ['Toxoplasmosis cerebral (asociada a pirimetamina en alérgicos a sulfamidas)', 'Neumonía por Pneumocystis jirovecii (asociada a primaquina)']
    },
    dosageAndPosology: {
      adults: 'Vía oral: 300 a 450 mg cada 6 a 8 horas (máx 1.8 g/día). Vía IV (infecciones graves/shock tóxico): 600 a 900 mg IV cada 8 horas (hasta 2.7 g/día en infusión continua o intermitente). Vía vaginal: 1 aplicador de crema al 2% o 1 óvulo de 100 mg al acostarse por 3-7 noches. Vía tópica: aplicar gel al 1% cada 12 h.',
      pediatric: 'Vía oral: 10 a 25 mg/kg/día divididos en 3 o 4 tomas. Vía IV: 20 a 40 mg/kg/día en 3 o 4 dosis.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis solo en insuficiencia hepática terminal severa.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular', 'Tópica', 'Vaginal'],
      administrationNotes: 'Infusión IV en al menos 30 a 60 minutos (máximo 30 mg/minuto; la inyección rápida causa paro cardíaco). Tomar cápsulas con un vaso entero de agua para evitar esofagitis.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a clindamicina o lincomicina', 'Antecedente de colitis por antibióticos / colitis pseudomembranosa'],
      warnings: ['COLITIS PSEUDOMEMBRANOSA POR CLOSTRIDIOIDES DIFFICILE: puede manifestarse hasta 2-3 meses tras finalizar el antibiótico', 'Suspender de inmediato si aparece diarrea acuosa grave'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el embarazo; de elección en vaginosis bacteriana gestacional.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna; vigilar deposiciones del lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo grave de colitis pseudomembranosa por Clostridioides difficile potencialmente letal.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Diarrea y alteraciones del ritmo intestinal'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Dolor abdominal y náuseas', 'Erupción cutánea maculopapular', 'Esofagitis si se toma sin agua'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Colitis fulminante por C. difficile con megacolon tóxico y perforación', 'Paro cardiopulmonar por inyección IV rápida', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-cli-1', interactingSubstance: 'Relajantes neuromusculares (Atracurio, Vecuronio)', severity: 'Mayor', clinicalEffect: 'Bloqueo neuromuscular aditivo con prolongación del tiempo de recuperación anestésica y depresión respiratoria.', recommendation: 'Monitorizar al paciente durante el despertar anestésico.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-vancomicina',
    name: 'Vancomicina Clorhidrato',
    brandNames: ['Vancocin', 'Vancomicina Hospira', 'Vancomicina Combino'],
    atcCode: 'J01XA01 / A07AA09',
    description: 'Antibiótico glucopéptido bactericida tricíclico de referencia absoluta para infecciones invasivas graves por Staphylococcus aureus resistente a meticilina (SAMR) y enterococos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-van-1', form: 'Polvo para solución para perfusión IV', concentration: '500 mg y 1000 mg (1 g)', route: 'Intravenosa', packaging: 'Vial de vidrio con tapón de goma', excipients: 'Ácido clorhídrico e hidróxido de sodio para ajuste de pH' },
      { id: 'p-van-2', form: 'Cápsulas orales / Solución oral reconstituida', concentration: '125 mg y 250 mg', route: 'Oral', packaging: 'Frasco con 10 y 20 cápsulas (no se absorbe sistémicamente)', excipients: 'Gelatina, óxido de hierro' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de peptidoglicano fijándose con alta afinidad al extremo D-Alanil-D-Alanina de los precursores de la pared celular, impidiendo la polimerización de la pared celular.',
      detailed: 'Bactericida dependiente de área bajo la curva (AUC24/CIM ≥ 400-600). Bloquea mecánicamente tanto la transglucosilación como la transpeptidación. Actúa exclusivamente sobre bacterias Gram positivas (es demasiado grande para atravesar las porinas de Gram negativos).',
      targetReceptor: 'Terminación D-Ala-D-Ala del peptidoglicano bacteriano',
      keyPoints: ['Piedra angular del tratamiento de infecciones por SAMR (neumonía, sepsis, endocarditis, osteomielitis)', 'LA VÍA ORAL NO SE ABSORBE: se usa EXCLUSIVAMENTE para Colitis por Clostridioides difficile', 'SÍNDROME DEL HOMBRE ROJO (Red Man Syndrome): reacción pseudoalérgica por liberación directa de histamina si se infunde rápido', 'Monitorear niveles séricos valle (objetivo 15-20 mcg/ml en infecciones graves)']
    },
    indications: {
      approved: [
        'Bacteriemia, sepsis y shock séptico por Staphylococcus aureus resistente a meticilina (SAMR)',
        'Endocarditis infecciosa por SAMR, Staphylococcus epidermidis y Enterococcus faecalis (asociado a aminoglucósido)',
        'Neumonía nosocomial y asociada a ventilación mecánica por SAMR',
        'Infecciones osteoarticulares complejas (artritis séptica, osteomielitis y prótesis articular)',
        'Meningitis bacteriana bacteriana (asociada a Ceftriaxona o Cefotaxima para neumococo resistente)',
        'Colitis pseudomembranosa por Clostridioides difficile (ESTRICTAMENTE POR VÍA ORAL)'
      ]
    },
    dosageAndPosology: {
      adults: 'Vía IV sistémica: Dosis de carga de 25 a 30 mg/kg en sepsis grave; mantenimiento: 15 a 20 mg/kg cada 8 a 12 horas (habitualmente 1 g cada 12 h o 1.5 g cada 12 h) en infusión lenta en ≥ 60 a 120 minutos. Ajustar para mantener nivel valle entre 15-20 mcg/ml (AUC24/CIM 400-600). Vía oral (Clostridioides difficile): 125 mg cada 6 horas por vía oral durante 10 días (en casos graves 500 mg cada 6 h).',
      pediatric: 'Vía IV: 10 a 15 mg/kg cada 6 u 8 horas (40-60 mg/kg/día). Vía oral (C. difficile): 40 mg/kg/día divididos en 4 tomas (máx 125 mg por dosis).',
      renalAdjustment: 'OBLIGATORIO AJUSTAR SEGÚN NIVELES PLASMÁTICOS Y ACLARAMIENTO: TFG 30-50 ml/min: cada 24 h; TFG < 30 ml/min: dosificar por niveles séricos valle (< 15-20 mcg/ml).',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa', 'Oral'],
      administrationNotes: 'INFUSIÓN IV LENTA OBLIGATORIA: diluir en al menos 200 ml de suero fisiológico o glucosado y administrar a una velocidad NO SUPERIOR a 10 mg/minuto (al menos 60 minutos por cada gramo) para evitar el Síndrome del Hombre Rojo.'
    },
    safety: {
      contraindications: ['Hipersensibilidad confirmada a vancomicina o glucopéptidos'],
      warnings: ['SÍNDROME DEL HOMBRE ROJO: eritema cutáneo masivo en cara, cuello y tronco superior, prurito, hipotensión y broncoespasmo por desgranulación de mastocitos; se previene ralentizando la infusión y con antihistamínicos', 'NEFROTOXICIDAD tubular dosis-dependiente (mayor riesgo con niveles valle > 20 mcg/ml o uso conjunto con piperacilina/tazobactam o aminoglucósidos)', 'Ototoxicidad vestibular y auditiva'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Vía IV solo si no hay alternativa terapéutica para SAMR grave. Vía oral no se absorbe y es segura.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna; absorción nula en tubo digestivo del lactante.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Síndrome del hombre rojo (eritema facial y torácico prurítico por infusión rápida)', 'Flebitis y dolor venoso en el sitio de inyección', 'Elevación de creatinina sérica (nefrotoxicidad)'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Fiebre medicamentosa', 'Eosinofilia', 'Trombocitopenia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Sordera coclear y tinnitus (ototoxicidad)', 'Necrosis tubular aguda anúrica', 'Neutropenia transitoria reversible'] }
    ],
    interactions: [
      { id: 'int-van-1', interactingSubstance: 'Piperacilina / Tazobactam', severity: 'Mayor', clinicalEffect: 'Aumento sinérgico marcado del riesgo de lesión renal aguda (IRA) en comparación con vancomicina sola o combinada con cefepima/meropenem.', recommendation: 'Monitorizar función renal estrechamente o considerar meropenem/cefepima como alternativa.' },
      { id: 'int-van-2', interactingSubstance: 'Aminoglucósidos (Gentamicina, Amikacina)', severity: 'Mayor', clinicalEffect: 'Potenciación aditiva severa de nefrotoxicidad y ototoxicidad.', recommendation: 'Monitorizar niveles valle de ambos fármacos estrictamente.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
