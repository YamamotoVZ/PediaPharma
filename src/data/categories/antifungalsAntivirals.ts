import { Medication } from '../../types/pharmacy';

export const ANTIFUNGALS_ANTIVIRALS_MEDICATIONS: Medication[] = [
  // ==========================================
  // --- 4.3 ANTIMICÓTICOS TÓPICOS Y ORALES ---
  // ==========================================
  {
    id: 'med-nistatina',
    name: 'Nistatina',
    brandNames: ['Mycostatin', 'Nistatina Normon', 'Nistatina Llorens'],
    atcCode: 'A07AA02 / D01AA01',
    description: 'Antimicótico poliénico macrólido producido por Streptomyces noursei que no se absorbe en el tracto gastrointestinal ni en piel intacta, de primera elección para candidiasis orofaríngea, digestiva y cutánea.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-nis-1', form: 'Suspensión oral', concentration: '100,000 UI / ml', route: 'Oral', packaging: 'Frasco de 60 ml con cuentagotas graduado a 1 ml', excipients: 'Sacarosa, glicerol, aroma de cereza' },
      { id: 'p-nis-2', form: 'Comprimidos y óvulos vaginales', concentration: '100,000 UI y 500,000 UI', route: 'Vaginal', packaging: 'Caja x 12 óvulos', excipients: 'Lactosa, dióxido de titanio' },
      { id: 'p-nis-3', form: 'Pomada dérmica', concentration: '100,000 UI / g', route: 'Tópica', packaging: 'Tubo de 30 g', excipients: 'Vaselina blanca, polietileno' }
    ],
    mechanismOfAction: {
      summary: 'Fijación irreversible al ergosterol de la membrana fúngica formando poros y canales transmembrana que provocan salida masiva de potasio y muerte celular fúngica.',
      detailed: 'Fungicida y fungistático según concentración. El anillo poliénico interactúa con los esteroles de membrana (especialmente ergosterol) creando poros polares que desestabilizan el gradiente osmótico. Al no absorberse sistémicamente por vía oral, su acción es puramente tópica intraluminal y de contacto mucoso.',
      targetReceptor: 'Ergosterol de la membrana celular de hongos (Candida spp.)',
      keyPoints: ['NO SE ABSORBE en tubo digestivo ni en piel intacta: se excreta íntegra por las heces', 'Fármaco de elección para el muguet oral (candidiasis orofaríngea) en lactantes y pacientes con prótesis dentales o corticoides inhalados', 'Excelente perfil de seguridad sistémica']
    },
    indications: {
      approved: [
        'Candidiasis orofaríngea (muguet oral infantil y en pacientes inmunodeprimidos o usuarios de corticoides inhalados)',
        'Candidiasis esofágica e intestinal en combinación con azoles sistémicos',
        'Candidiasis cutánea, intertrigo candidiásico y dermatitis del pañal infectada por Candida albicans',
        'Candidiasis vulvovaginal aguda (vía vaginal)'
      ]
    },
    dosageAndPosology: {
      adults: 'Candidiasis orofaríngea: 400,000 a 600,000 UI (4 a 6 ml) 4 veces al día (tras comidas y al acostarse). Mantener la suspensión en la boca el mayor tiempo posible (enjuagar durante 2-3 minutos) y luego tragarla. Candidiasis vaginal: 1 óvulo vaginal de 100,000 UI al acostarse durante 14 días.',
      pediatric: 'Neonatos: 100,000 UI (1 ml) 4 veces al día repartido en ambos lados de la boca; lactantes y niños: 200,000 a 400,000 UI (2-4 ml) 4 veces al día tras las tomas.',
      renalAdjustment: 'No precisa ajuste (absorción sistémica nula).',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oral', 'Tópica', 'Vaginal'],
      administrationNotes: 'Retirar prótesis dentales antes del enjuague y desinfectarlas también con la suspensión. No comer ni beber durante 30 minutos tras la aplicación.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a la nistatina'],
      warnings: ['No apto para micosis sistémicas o invasivas profundas (no se absorbe)', 'Contiene sacarosa en suspensión oral: precaución en pacientes diabéticos'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el embarazo; absorción sistémica insignificante por vía oral o tópica.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y mal sabor de boca', 'Diarrea leve a dosis orales altas', 'Irritación local transitoria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Reacciones alérgicas cutáneas (erupción, prurito)', 'Síndrome de Stevens-Johnson (extremadamente raro)'] }
    ],
    interactions: [
      { id: 'int-nis-1', interactingSubstance: 'Alimentos y líquidos inmediatos', severity: 'Menor', clinicalEffect: 'Lavado mecánico del fármaco de la mucosa bucal antes de ejercer su acción de contacto.', recommendation: 'Evitar comer o beber 30 minutos después de la aplicación.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-tolnaftato',
    name: 'Tolnaftato',
    brandNames: ['Tinactin', 'Tolnacen', 'Aftate'],
    atcCode: 'D01AE18',
    description: 'Antifúngico sintético tiocarbamato de aplicación exclusivamente tópica, de alta eficacia contra dermatofitos causantes de tiña del pie (pie de atleta), tiña crural y tiña corporal.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-tol-1', form: 'Crema tópica al 1%', concentration: '10 mg / g', route: 'Tópica', packaging: 'Tubo de 15 g y 30 g', excipients: 'Alcohol cetoestearílico, polietilenglicol' },
      { id: 'p-tol-2', form: 'Solución en aerosol / polvo en spray al 1%', concentration: '10 mg / g', route: 'Tópica', packaging: 'Bote spray de 100 g', excipients: 'Isobutano, talco' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición reversible de la enzima escualeno epoxidasa en la ruta de biosíntesis del ergosterol fúngico, distorsionando las hifas y deteniendo el crecimiento micelial.',
      detailed: 'Fungistático selectivo sobre dermatofitos (Trichophyton rubrum, Trichophyton mentagrophytes, Epidermophyton floccosum y Microsporum canis). Inactivo contra levaduras como Candida albicans y bacterias.',
      targetReceptor: 'Escualeno monooxigenasa / epoxidasa fúngica',
      keyPoints: ['Específico para dermatofitosis (tiñas); INEFICAZ contra Candida o Malassezia', 'Formulación en polvo y spray excelente para calzado y prevención de reinfección interdigital', 'No irrita la piel ni tiñe la ropa']
    },
    indications: {
      approved: [
        'Tiña del pie (Tinea pedis / pie de atleta interdigital y plantar)',
        'Tiña crural (Tinea cruris / prurito del jinete)',
        'Tiña corporal (Tinea corporis) por dermatofitos susceptibles',
        'Tiña versicolor / Pitiriasis versicolor'
      ]
    },
    dosageAndPosology: {
      adults: 'Aplicar una capa fina de crema o rociar spray sobre la zona afectada limpia y seca 2 veces al día (mañana y noche) durante 2 a 4 semanas (hasta 4 a 6 semanas en tiña pedis). Continuar 1 a 2 semanas tras la resolución clínica.',
      pediatric: 'Niños ≥ 2 años: misma pauta que adultos. No recomendado en menores de 2 años sin indicación médica.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'Lavar y secar muy bien los espacios interdigitales antes de la aplicación. Rociar spray en el interior de calcetines y calzado.'
    },
    safety: {
      contraindications: ['Hipersensibilidad al tolnaftato'],
      warnings: ['No aplicar en ojos ni mucosas genitales', 'Si no hay mejoría en 4 semanas, reconsiderar diagnóstico (probable infección por Candida o bacteriana)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Absorción dérmica mínima; usar con precaución bajo prescripción.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible; evitar aplicación directa en el pezón antes del amamantamiento.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Irritación cutánea local leve', 'Sensación de ardor y escozor transitorio', 'Dermatitis de contacto por hipersensibilidad'] }
    ],
    interactions: [
      { id: 'int-tol-1', interactingSubstance: 'Ninguna conocida de relevancia clínica', severity: 'Menor', clinicalEffect: 'No se registran interacciones sistémicas con fármacos orales.', recommendation: 'Uso tópico seguro.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clotrimazol',
    name: 'Clotrimazol (Imidazol Tópico y Vaginal)',
    brandNames: ['Canesten', 'Gine-Canesten', 'Clotrimazol Normon', 'Lotrimin'],
    atcCode: 'D01AC01 / G01AF02',
    description: 'Antifúngico azólico derivado del imidazol de amplio espectro, de enorme difusión clínica para dermatomitosis, pitiriasis versicolor y candidiasis vulvovaginal.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-clo-1', form: 'Crema dérmica al 1%', concentration: '10 mg / g', route: 'Tópica', packaging: 'Tubo de 20 g y 30 g', excipients: 'Alcohol cetoestearílico, octildodecanol' },
      { id: 'p-clo-2', form: 'Comprimidos y crema vaginal al 1% y 2%', concentration: '100 mg y 500 mg (monodosis)', route: 'Vaginal', packaging: 'Caja x 1 comprimido de 500 mg o 6 comprimidos de 100 mg con aplicador', excipients: 'Lactosa, crospovidona' },
      { id: 'p-clo-3', form: 'Solución tópica para gotas al 1%', concentration: '10 mg / ml', route: 'Tópica', packaging: 'Frasco cuentagotas de 30 ml', excipients: 'Macrogol 400' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la enzima fúngica 14-alfa-desmetilasa dependiente de CYP51, impidiendo la conversión de lanosterol en ergosterol y alterando la permeabilidad de la membrana plasmática fúngica.',
      detailed: 'Fungistático y fungicida a concentraciones elevadas. Provoca acumulación tóxica de esteroles 14-metilados en la membrana lipídica celular del hongo y peroxidación de ácidos grasos celulares.',
      targetReceptor: '14-alfa-desmetilasa fúngica (CYP51)',
      keyPoints: ['Espectro amplio: Candida albicans, Trichophyton rubrum, Malassezia furfur y Corynebacterium minutissimum (eritrasma)', 'La pauta de comprimido vaginal de 500 mg en dosis única asegura cumplimiento excelente en vulvovaginitis', 'Puede debilitar los preservativos de látex durante el tratamiento vaginal']
    },
    indications: {
      approved: [
        'Candidiasis vulvovaginal aguda y recurrente (prurito, leucorrea blanquecina grumosa y eritema vulvar)',
        'Dermatofitosis: tiña del pie (pie de atleta), tiña del cuerpo, tiña crural y tiña de la barba',
        'Pitiriasis versicolor por Malassezia furfur',
        'Balanitis candidiásica en la pareja sexual',
        'Eritrasma por Corynebacterium minutissimum'
      ]
    },
    dosageAndPosology: {
      adults: 'Candidiasis vaginal: 1 comprimido vaginal de 500 mg en dosis única al acostarse (o 1 comprimido de 100 mg diario durante 6 días consecutivos). Crema dérmica: aplicar capa fina 2 a 3 veces al día en la piel limpia y seca durante 2 a 4 semanas. Balanitis: aplicar crema en glande y prepucio 2-3 veces al día por 7-14 días.',
      pediatric: 'Uso cutáneo seguro en niños a partir de los 2 años.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica', 'Vaginal'],
      administrationNotes: 'Introducir el comprimido vaginal profundamente en la vagina por la noche con la paciente recostada. No usar tampones durante el tratamiento vaginal.'
    },
    safety: {
      contraindications: ['Hipersensibilidad conocida a clotrimazol u otros imidazoles'],
      warnings: ['Los excipientes de las cremas vaginales pueden alterar la resistencia de preservativos y diafragmas de látex, reduciendo su eficacia anticonceptiva y protectora'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el 2º y 3er trimestre de la gestación (en el primer trimestre usar solo bajo valoración médica estricta y sin aplicador introductorio).',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Escozor y sensación de quemazón vaginal o cutánea local', 'Prurito transitorio'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Dermatitis alérgica de contacto', 'Exantema y edema local'] }
    ],
    interactions: [
      { id: 'int-clt-1', interactingSubstance: 'Tacrolimus tópico o sistémico', severity: 'Menor', clinicalEffect: 'Aumento leve de absorción sistémica de tacrolimus.', recommendation: 'Evitar aplicar simultáneamente en la misma zona.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ketoconazol',
    name: 'Ketoconazol',
    brandNames: ['Fungarest', 'Nizoral', 'Panfungol', 'Ketoisdin'],
    atcCode: 'J02AB02 / D01AC08',
    description: 'Imidazol de amplio espectro disponible en champú, gel dérmico y comprimidos orales; además de su acción antifúngica, inhibe enzimas esteroidogénicas adrenales y gonadales humanas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-ket-1', form: 'Champú medicamentoso al 2%', concentration: '20 mg / g', route: 'Tópica', packaging: 'Frasco de 100 ml y 120 ml', excipients: 'Lauril éter sulfato sódico, colorante rojo Ponceau' },
      { id: 'p-ket-2', form: 'Crema dérmica al 2%', concentration: '20 mg / g', route: 'Tópica', packaging: 'Tubo de 30 g', excipients: 'Propilenglicol, alcohol cetílico' },
      { id: 'p-ket-3', form: 'Comprimidos orales', concentration: '200 mg', route: 'Oral', packaging: 'Caja x 10 y 30 comprimidos (uso restringido)', excipients: 'Lactosa, almidón de maíz' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis de ergosterol bloqueando la 14-alfa-desmetilasa fúngica. A dosis orales inhibe las enzimas del citocromo P450 humanas CYP11B1, CYP17 y CYP11A1 bloqueando la esteroidogénesis adrenal de cortisol y testosterona.',
      detailed: 'Fungistático de amplio espectro. Por vía tópica erradica Malassezia furfur y dermatofitos sin toxicidad sistémica. Por vía oral se reserva actualmente para el hipercortisolismo endógeno (Síndrome de Cushing) debido a su riesgo de hepatotoxicidad fulminante.',
      targetReceptor: 'CYP51 fúngico / CYP11B1 y CYP17 adrenales humanos',
      keyPoints: ['Champú al 2% es el tratamiento de elección para Dermatitis seborreica y caspa refractaria', 'La vía oral tiene una ALERTA NEGRA por hepatotoxicidad letal y prolongación del intervalo QT', 'Requiere acidez gástrica estricta para absorberse por vía oral']
    },
    indications: {
      approved: [
        'Dermatitis seborreica del cuero cabelludo, caspa severa y pitiriasis capitis (champú al 2%)',
        'Pitiriasis versicolor y tiña corporal (vía tópica)',
        'Síndrome de Cushing endógeno en adultos y adolescentes (vía oral para inhibir la síntesis adrenal de cortisol)',
        'Micosis sistémicas o cutáneas severas SOLO cuando no existan otras alternativas terapéuticas disponibles'
      ]
    },
    dosageAndPosology: {
      adults: 'Dermatitis seborreica / caspa: aplicar champú al 2% sobre el cuero cabelludo húmedo, masajear, dejar actuar de 3 a 5 minutos y aclarar con agua; usar 2 veces por semana durante 2 a 4 semanas. Pitiriasis versicolor tópica: aplicar crema 1 vez al día durante 2-3 semanas. Síndrome de Cushing oral: 400 a 1200 mg/día divididos en 2 o 3 tomas con alimentos.',
      pediatric: 'Champú al 2%: seguro en adolescentes mayores de 12 años.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'CONTRAINDICADO POR VÍA ORAL en insuficiencia hepática aguda o crónica.',
      routes: ['Tópica', 'Oral'],
      administrationNotes: 'Vía tópica: dejar actuar el champú en contacto con el cuero cabelludo al menos 3 a 5 minutos antes de aclarar. Vía oral: tomar con alimentos y evitar antiácidos o IBPs.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a imidazoles', 'Hepatopatía aguda o crónica activa (vía oral)', 'Coadministración oral con terfenadina, astemizol, cisaprida, simvastatina o colchicina'],
      warnings: ['VÍA ORAL: RIESGO DE HEPATOTOXICIDAD GRAVE Y MORTAL (insuficiencia hepática fulminante que requiere trasplante)', 'Ginecomastia, oligospermia e impotencia por inhibición de testosterona', 'Prolongación del intervalo QTc'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Teratógeno a dosis altas orales; vía tópica se considera segura.',
      lactation: 'Compatible',
      lactationNotes: 'Vía tópica compatible; vía oral contraindicada.',
      controlledSubstance: false,
      blackBoxWarning: 'Vía oral: riesgo de hepatotoxicidad mortal, arritmias ventriculares por prolongación de QT e insuficiencia adrenal.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Irritación, ardor o sequedad del cuero cabelludo con el champú', 'Náuseas y dolor abdominal (vía oral)'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Elevación asintomática de transaminasas (vía oral)', 'Alopecia o cambio de textura capilar'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia hepática fulminante y necrosis hepática (vía oral)', 'Insuficiencia adrenal aguda', 'Ginecomastia dolorosa'] }
    ],
    interactions: [
      { id: 'int-ket-1', interactingSubstance: 'Inhibidores de la bomba de protones (Omeprazol) y Antiácidos', severity: 'Mayor', clinicalEffect: 'La elevación del pH gástrico suprime la disolución y absorción oral de ketoconazol en más del 80%.', recommendation: 'Tomar con bebidas ácidas de cola si es imprescindible o separar al menos 2 horas.' },
      { id: 'int-ket-2', interactingSubstance: 'Fármacos metabolizados por CYP3A4 (Midazolam, Triazolam, Estatinas)', severity: 'Contraindicada', clinicalEffect: 'Inhibición enzimática extrema con acumulación y toxicidad letal.', recommendation: 'Evitar el uso oral simultáneo.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-anfotericina-b',
    name: 'Anfotericina B (Complejo Desoxicolato y Formulación Liposomal)',
    brandNames: ['AmBisome (Liposomal)', 'Fungizone (Desoxicolato convencional)', 'Abelcet (Complejo lipídico)'],
    atcCode: 'J02AA01',
    description: 'Polieno macrólido parenteral de rescate de amplio espectro fungicida y referencia histórica para micosis invasivas profundas potencialmente mortales; la formulación liposomal (AmBisome) reduce drásticamente su nefrotoxicidad.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-anf-1', form: 'Polvo para dispersión para perfusión IV Liposomal (AmBisome)', concentration: '50 mg por vial', route: 'Intravenosa', packaging: 'Vial de vidrio con filtro de jeringa específico', excipients: 'Fosfatidilcolina, colesterol, succinato disódico' },
      { id: 'p-anf-2', form: 'Polvo para solución para perfusión IV Desoxicolato clásico', concentration: '50 mg por vial', route: 'Intravenosa', packaging: 'Vial de vidrio x 50 mg', excipients: 'Desoxicolato sódico' }
    ],
    mechanismOfAction: {
      summary: 'Se une con gran avidez al ergosterol de las membranas fúngicas formando agregados macromoleculares en forma de poros transmembrana cilíndricos que provocan la fuga masiva de iones intracelulares (K+ y Mg2+) y lisis celular fúngica rápida.',
      detailed: 'Fungicida concentración-dependiente de amplísimo espectro. La formulación liposomal encapsula el fármaco en liposomas esféricos bicapa; esto permite que el fármaco circule sin interaccionar directamente con el colesterol de los túbulos renales humanos, liberándose preferentemente en los focos inflamatorios fúngicos gracias a las fosfolipasas del patógeno.',
      targetReceptor: 'Ergosterol de la membrana fúngica',
      keyPoints: ['Estándar de oro para Meningitis criptocócica (asociada a 5-flucitosina), Aspergilosis invasiva y Mucormicosis por Mucorales (cigomicosis)', 'Tratamiento de elección para Leishmaniasis visceral (Kala-azar)', 'NEFROTOXICIDAD Y TUBULOPATÍA con hipopotasemia e hipomagnesemia severas (requiere prehidratación salina obligatoria)']
    },
    indications: {
      approved: [
        'Meningitis por Cryptococcus neoformans en pacientes con VIH/SIDA (fase de inducción combinada con Flucitosina)',
        'Mucormicosis invasiva y rinocerebral por Rhizopus, Mucor y Cunninghamella',
        'Aspergilosis invasiva pulmonar y diseminada refractaria o intolerante a voriconazol',
        'Candidiasis invasiva grave y candidemia con afectación visceral',
        'Leishmaniasis visceral (Kala-azar) y cutánea mucosa',
        'Tratamiento empírico de neutropenia febril persistente con sospecha de micosis invasiva',
        'Histoplasmosis y Coccidioidomicosis grave diseminada'
      ]
    },
    dosageAndPosology: {
      adults: 'Anfotericina B Liposomal (AmBisome): 3 a 5 mg/kg/día en infusión IV de 2 horas (hasta 5-10 mg/kg/día en Mucormicosis o meningitis criptocócica grave). Leishmaniasis visceral: 3 mg/kg/día los días 1-5, 14 y 21 (dosis acumulada de 18-24 mg/kg). Anfotericina B Desoxicolato convencional: 0.5 a 1 mg/kg/día IV en 4-6 horas tras premedicación.',
      pediatric: 'Liposomal: 3 a 5 mg/kg/día IV en infusión de 2 horas; tolerada favorablemente en niños.',
      renalAdjustment: 'Liposomal: no requiere ajuste automático, pero monitorizar creatinina y electrolitos a diario; si creatinina se duplica, espaciar o reducir dosis.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa'],
      administrationNotes: 'DILUIR EXCLUSIVAMENTE EN SUERO GLUCOSADO AL 5% (precipita inmediatamente con suero salino fisiológico). Prehidratación obligatoria con 500-1000 ml de suero fisiológico antes y después para proteger el túbulo renal.'
    },
    safety: {
      contraindications: ['Hipersensibilidad confirmada a anfotericina B'],
      warnings: ['NEFROTOXICIDAD TUBULAR: vasoconstricción de arteriola aferente y pérdida tubular de K+ y Mg2+; monitorear electrolitos séricos diariamente', 'Reacciones infusionales agudas (escalofríos violentos "shake and bake", fiebre, disnea e hipotensión en la primera hora de infusión); premediar con paracetamol e hidrocortisona'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Fármaco de elección para micosis sistémicas invasivas mortales en el embarazo.',
      lactation: 'Precaución',
      lactationNotes: 'Uso hospitalario especializado; valorar suspensión temporal de lactancia.',
      controlledSubstance: false,
      blackBoxWarning: 'La anfotericina B convencional desoxicolato debe utilizarse exclusivamente para micosis invasivas progresivas que amenazan la vida, nunca para micosis no invasivas.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Escalofríos intensos y temblores con fiebre durante la perfusión', 'Hipopotasemia e hipomagnesemia graves', 'Elevación de creatinina y urea sérica (nefrotoxicidad)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Anemia normocítica normocrómica por supresión de eritropoyetina', 'Náuseas y vómitos', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia renal anúrica irreversible', 'Arritmias ventriculares por hipopotasemia', 'Anafilaxia y broncoespasmo'] }
    ],
    interactions: [
      { id: 'int-anf-1', interactingSubstance: 'Fármacos nefrotóxicos (Ciclosporina, Tacrolimus, Aminoglucósidos, Cisplatino)', severity: 'Mayor', clinicalEffect: 'Aumento exponencial del riesgo de necrosis tubular y fallo renal agudo terminal.', recommendation: 'Monitorización diaria estricta de función renal.' },
      { id: 'int-anf-2', interactingSubstance: 'Digoxina', severity: 'Mayor', clinicalEffect: 'La hipopotasemia e hipomagnesemia inducidas por anfotericina disparan la toxicidad digitálica letal con paro cardíaco.', recommendation: 'Reponer suplementos de potasio y magnesio IV para mantener K > 4 mEq/L.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-caspofungina',
    name: 'Caspofungina Acetato (Equinocandina)',
    brandNames: ['Cancidas', 'Caspofungin MSD'],
    atcCode: 'J02AX04',
    description: 'Equinocandina lipopéptida parenteral semisintética que actúa como inhibidor selectivo de la síntesis de la pared celular fúngica (el "betalactámico de los hongos"), de primera elección para candidiasis invasiva.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-cas-1', form: 'Polvo para concentrado para perfusión IV', concentration: '50 mg y 70 mg', route: 'Intravenosa', packaging: 'Vial de vidrio x 50 mg y 70 mg', excipients: 'Sacarosa, manitol, ácido acético glacial' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición no competitiva de la enzima fúngica 1,3-beta-D-glucano sintasa, bloqueando la síntesis del polímero estructural esencial de la pared celular fúngica.',
      detailed: 'Fungicida contra Candida spp. (incluyendo cepas resistentes a fluconazol como C. glabrata y C. krusei) y fungistático contra Aspergillus spp. Las células de mamíferos carecen de 1,3-beta-D-glucano sintasa, lo que le confiere un perfil de toxicidad humana extraordinariamente bajo.',
      targetReceptor: '1,3-beta-D-glucano sintasa fúngica (subunidad Fks1p)',
      keyPoints: ['Tratamiento de primera línea de Candidemia y Candidiasis invasiva en pacientes críticos', 'Tratamiento de rescate de Aspergilosis invasiva refractaria', 'Excelente tolerancia: carece por completo de la nefrotoxicidad de la anfotericina B']
    },
    indications: {
      approved: [
        'Candidiasis invasiva y candidemia en pacientes adultos y pediátricos no neutropénicos y neutropénicos',
        'Aspergilosis invasiva en pacientes refractarios o intolerantes a anfotericina B o voriconazol',
        'Terapia empírica antifúngica en pacientes con neutropenia febril persistente con sospecha de micosis',
        'Candidiasis esofágica en pacientes con intolerancia o resistencia a azoles orales'
      ]
    },
    dosageAndPosology: {
      adults: 'Día 1: dosis de carga única de 70 mg IV en infusión de 60 minutos; a partir del día 2: 50 mg IV cada 24 horas (en pacientes con peso > 80 kg, mantener 70 mg/día). Candidiasis esofágica: 50 mg/día sin dosis de carga.',
      pediatric: '≥ 3 meses: Dosis de carga de 70 mg/m² de superficie corporal el día 1, seguida de 50 mg/m²/día (máximo 70 mg/día).',
      renalAdjustment: 'No precisa ajuste de dosis en insuficiencia renal de ningún grado ni en diálisis.',
      hepaticAdjustment: 'Insuficiencia hepática moderada (Child-Pugh 7-9): 70 mg carga, luego reducir a 35 mg/día.',
      routes: ['Intravenosa'],
      administrationNotes: 'Diluir en suero fisiológico o Ringer lactato; NO diluir en soluciones glucosadas (se degrada con glucosa).'
    },
    safety: {
      contraindications: ['Hipersensibilidad a caspofungina o equinocandinas'],
      warnings: ['Vigilar enzimas hepáticas (elevación transitoria de transaminasas)', 'No usar simultáneamente con ciclosporina salvo que el beneficio supere el riesgo (aumento de toxicidad hepática)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Toxicidad embrionaria en modelos animales; usar solo si el beneficio supera los riesgos.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche en animales; evaluar lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Fiebre y cefalea', 'Fiebre y flebitis venosa', 'Elevación de transaminasas y fosfatasa alcalina', 'Erupción cutánea y prurito por liberación de histamina'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Hipopotasemia', 'Tromboflebitis', 'Anemia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatotoxicidad severa', 'Anafilaxia'] }
    ],
    interactions: [
      { id: 'int-cas-1', interactingSubstance: 'Ciclosporina A', severity: 'Mayor', clinicalEffect: 'Aumento del 35% del AUC de caspofungina y mayor incidencia de elevación de transaminasas hepáticas.', recommendation: 'Monitorear enzimas hepáticas si se coadministra.' },
      { id: 'int-cas-2', interactingSubstance: 'Inductores enzimáticos (Rifampicina, Efavirenz, Nevirapina, Fenitoína)', severity: 'Moderada', clinicalEffect: 'Aceleran el aclaramiento de caspofungina reduciendo su concentración plasmática.', recommendation: 'Incrementar la dosis de mantenimiento a 70 mg/día.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-anidulafungina',
    name: 'Anidulafungina (Equinocandina)',
    brandNames: ['Ecalta', 'Eraxis'],
    atcCode: 'J02AX06',
    description: 'Equinocandina lipopéptida semisintética de degradación química espontánea no enzimática en plasma, con nulas interacciones hepáticas por CYP450 y sin necesidad de ajuste en insuficiencia renal o hepática.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-ani-1', form: 'Polvo para concentrado para solución para perfusión IV', concentration: '100 mg por vial', route: 'Intravenosa', packaging: 'Vial de vidrio x 100 mg con disolvente', excipients: 'Fructosa, manitol, polisorbato 80' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe de forma no competitiva la 1,3-beta-D-glucano sintasa fúngica. Su degradación es exclusivamente por biotransformación química espontánea (apertura del anillo lipopéptido a pH y temperatura corporales).',
      detailed: 'Fungicida rápido frente a Candida spp. Su eliminación no depende del metabolismo hepático ni de la excreción renal, careciendo prácticamente de interacciones medicamentosas.',
      targetReceptor: '1,3-beta-D-glucano sintasa',
      keyPoints: ['DEGRADACIÓN QUÍMICA ESPONTÁNEA: no depende de CYP450 ni de riñón ni de hígado', 'Fármaco de elección en pacientes críticos politratados o con insuficiencia hepatorrenal severa', 'No requiere ningún ajuste de dosis en insuficiencia renal ni hemodiálisis']
    },
    indications: {
      approved: [
        'Candidiasis invasiva y candidemia en pacientes adultos no neutropénicos y neutropénicos',
        'Candidiasis esofágica en pacientes adultos'
      ]
    },
    dosageAndPosology: {
      adults: 'Candidiasis invasiva: dosis de carga única de 200 mg IV el día 1 (infusión a velocidad no mayor de 1.1 mg/minuto), seguida de 100 mg IV una vez al día a partir del día 2. Continuar al menos 14 días tras el último hemocultivo positivo.',
      pediatric: 'Poco estudiado en pediatría.',
      renalAdjustment: 'NO REQUIERE AJUSTE DOSIS en ningún grado de insuficiencia renal.',
      hepaticAdjustment: 'NO REQUIERE AJUSTE DOSIS en insuficiencia hepática leve, moderada o grave.',
      routes: ['Intravenosa'],
      administrationNotes: 'Infusión IV lenta; no superar 1.1 mg/min para evitar reacciones asociadas a liberación de histamina (rubor, disnea).'
    },
    safety: {
      contraindications: ['Hipersensibilidad a anidulafungina o equinocandinas'],
      warnings: ['Síntomas mediados por histamina si se infunde rápido (rubor facial, prurito, hipotensión)', 'Monitorizar transaminasas hepáticas'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar solo si el beneficio supera el riesgo.',
      lactation: 'Precaución',
      lactationNotes: 'Evaluar riesgo/beneficio.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea y náuseas', 'Cefalea', 'Elevación de ALT/AST y fosfatasa alcalina', 'Hipopotasemia', 'Rubor cutáneo e hipotensión transitoria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Broncoespasmo agudo', 'Hepatotoxicidad severa'] }
    ],
    interactions: [
      { id: 'int-ani-1', interactingSubstance: 'Tacrolimus / Ciclosporina / Voriconazol', severity: 'Menor', clinicalEffect: 'No se observan interacciones farmacocinéticas clínicamente significativas.', recommendation: 'Puede administrarse con seguridad en pacientes trasplantados.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-micafungina',
    name: 'Micafungina Sódica (Equinocandina)',
    brandNames: ['Mycamine'],
    atcCode: 'J02AX05',
    description: 'Equinocandina lipopéptida aprobada para profilaxis y tratamiento de infecciones por Candida en adultos, niños, prematuros y neonatos de cualquier edad gestacional.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antimicoticos'],
    presentations: [
      { id: 'p-mic-1', form: 'Polvo para solución para perfusión IV', concentration: '50 mg y 100 mg', route: 'Intravenosa', packaging: 'Vial de vidrio protegido de la luz con bolsa opaca', excipients: 'Lactosa monohidrato, ácido cítrico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la 1,3-beta-D-glucano sintasa fúngica destruyendo la integridad estructural de la pared celular.',
      detailed: 'Fungicida contra Candida y activa contra biopelículas fúngicas formadas sobre catéteres venosos centrales. Se metaboliza a derivados catecol y metoxi por arilsulfatasa y catecol-O-metiltransferasa.',
      targetReceptor: '1,3-beta-D-glucano sintasa fúngica',
      keyPoints: ['Única equinocandina con aprobación formal en neonatos y prematuros', 'Fármaco de elección en profilaxis de infección fúngica en trasplante alogénico de progenitores hematopoyéticos', 'No requiere dosis de carga inicial']
    },
    indications: {
      approved: [
        'Candidiasis invasiva y candidemia en adultos, niños y recién nacidos (incluyendo prematuros)',
        'Candidiasis esofágica en pacientes que requieran tratamiento intravenoso',
        'Profilaxis de infección por Candida en pacientes sometidos a trasplante alogénico de células madre hematopoyéticas (TCMH) o pacientes neutropénicos'
      ]
    },
    dosageAndPosology: {
      adults: 'Candidiasis invasiva: 100 mg IV una vez al día en infusión de 60 minutos (no requiere dosis de carga). Candidiasis esofágica: 150 mg IV al día. Profilaxis en TCMH: 50 mg IV al día.',
      pediatric: 'Niños ≥ 4 meses y ≤ 40 kg: 2 mg/kg/día (hasta 4 mg/kg en infecciones graves). Neonatos y lactantes < 4 meses: 4 a 10 mg/kg/día.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal de ningún grado.',
      hepaticAdjustment: 'No requiere ajuste en disfunción hepática leve o moderada.',
      routes: ['Intravenosa'],
      administrationNotes: 'Proteger la bolsa de infusión de la luz directa. Infundir en al menos 60 minutos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a micafungina o equinocandinas'],
      warnings: ['Advertencia en ficha técnica europea sobre tumores hepáticos observados en modelos de roedores tras exposición prolongada (evaluar beneficio/riesgo en hepatopatía grave)', 'Monitoreo de enzimas hepáticas'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar solo si es estrictamente imprescindible.',
      lactation: 'Precaución',
      lactationNotes: 'Evaluar riesgo/beneficio.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Leucopenia y anemia', 'Hipopotasemia e hipomagnesemia', 'Fiebre y cefalea', 'Elevación de transaminasas, fosfatasa alcalina y bilirrubina'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anemia hemolítica intravascular aguda', 'Shock anafiláctico'] }
    ],
    interactions: [
      { id: 'int-mic-1', interactingSubstance: 'Sirolimus / Nifedipino', severity: 'Moderada', clinicalEffect: 'Aumento del 20-30% en los niveles de sirolimus y nifedipino.', recommendation: 'Monitorizar niveles de sirolimus y ajustar dosis si es necesario.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- 4.4 ANTIVIRALES ---
  // ==========================================
  {
    id: 'med-zidovudina',
    name: 'Zidovudina (AZT / Azidotimidina - Antirretroviral ITIAN)',
    brandNames: ['Retrovir', 'Zidovudina Combino', 'Combivir (con lamivudina)'],
    atcCode: 'J05AF01',
    description: 'Análogo sintético de timidina e inhibidor de la transcriptasa inversa análogo de nucleósidos (ITIAN), fármaco pionero en el tratamiento del VIH-1 y VIH-2 y de referencia para la prevención de la transmisión vertical madre-hijo periparto.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antivirales'],
    presentations: [
      { id: 'p-zid-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '100 mg, 250 mg y 300 mg', route: 'Oral', packaging: 'Frasco o caja x 60 comprimidos', excipients: 'Almidón de maíz, carboximetilalmidón sódico' },
      { id: 'p-zid-2', form: 'Solución oral', concentration: '50 mg / 5 ml (10 mg / ml)', route: 'Oral', packaging: 'Frasco de 200 ml con jeringa dosificadora', excipients: 'Glicerol, sacarosa, aroma de fresa' },
      { id: 'p-zid-3', form: 'Solución para perfusión IV', concentration: '200 mg / 20 ml (10 mg / ml)', route: 'Intravenosa', packaging: 'Vial de vidrio x 20 ml', excipients: 'Agua para inyección, ácido clorhídrico' }
    ],
    mechanismOfAction: {
      summary: 'Fosforilación intracelular a zidovudina trifosfato (AZT-TP) por quinasas celulares; compite con el sustrato natural celular (dTTP) e incorpora un terminador de cadena en el ADN proviral por carecer del grupo 3\'-OH.',
      detailed: 'Inhibidor competitivo de la transcriptasa inversa retroviral. Tras la incorporación de AZT en la cadena naciente de ADN viral, es imposible la formación del enlace fosfodiéster 5\'-3\', deteniendo la síntesis del genoma viral de forma irreversible.',
      targetReceptor: 'Transcriptasa inversa del VIH-1 y VIH-2',
      keyPoints: ['Pilar histórico en la prevención de la transmisión maternofilial del VIH durante el parto y en el neonato', 'MIELOSUPRESIÓN SEVERA: causa anemia macrocítica profunda y neutropenia dosis-dependiente', 'Toxicidad mitocondrial por inhibición de la ADN polimerasa-gamma humana (lipodistrofia, miopatía y acidosis láctica)']
    },
    indications: {
      approved: [
        'Tratamiento de la infección por el Virus de la Inmunodeficiencia Humana (VIH-1 y VIH-2) en combinación con otros antirretrovirales',
        'Prevención de la transmisión materno-fetal periparto del VIH (infusión intraparto a la madre y profilaxis oral al recién nacido durante 4-6 semanas)',
        'Profilaxis post-exposición (PEP) ocupacional o no ocupacional al VIH (en combinación)'
      ]
    },
    dosageAndPosology: {
      adults: 'Tratamiento VIH oral: 300 mg cada 12 horas (asociado a lamivudina y tercer agente). Prevención intraparto materna IV: dosis de carga de 2 mg/kg IV en 1 hora al inicio del parto, seguida de infusión continua de 1 mg/kg/hora hasta el pinzamiento del cordón umbilical.',
      pediatric: 'Profilaxis neonatal: iniciar en las primeras 6-12 horas de vida: 4 mg/kg cada 12 horas por vía oral durante 4 a 6 semanas (reducir a 1.5-2 mg/kg cada 12 h en prematuros < 35 semanas).',
      renalAdjustment: 'TFG < 15 ml/min o hemodiálisis: 100 mg cada 6-8 horas o 300 mg una vez al día.',
      hepaticAdjustment: 'Precaución en insuficiencia hepática; acumulación de fármaco por menor glucuronidación.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Monitorear hemograma completo con recuento de reticulocitos cada 2 semanas al inicio.'
    },
    safety: {
      contraindications: ['Neutropenia grave basal (< 750 neutrófilos/mm³)', 'Anemia severa basal (< 7.5 g/dl de hemoglobina)', 'Hipersensibilidad a zidovudina'],
      warnings: ['TOXICIDAD HEMATOLÓGICA GRAVE: anemia macrocítica severa (requiere transfusión frecuente o cambio de antirretroviral) y neutropenia', 'ACIDOSIS LÁCTICA Y ESTEATOSIS HEPÁTICA GRAVE por toxicidad mitocondrial', 'Miopatía y cardiomiopatía mitocondrial en uso crónico'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Indicado formalmente en el embarazo para prevenir la transmisión del VIH al feto.',
      lactation: 'Contraindicado',
      lactationNotes: 'La lactancia materna está contraindicada en madres VIH positivas para evitar la transmisión del virus.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de neutropenia grave, anemia profunda, miopatía sintomática, acidosis láctica fatal y hepatomegalia con esteatosis.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Anemia macrocítica (VCM > 100 fl universal)', 'Neutropenia / leucopenia', 'Náuseas y vómitos', 'Cefalea intensa'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Astenia y mialgias', 'Pigmentación oscura ungueal (melanoniquia)', 'Elevación de enzimas hepáticas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Acidosis láctica letal', 'Aplasia pura de serie roja', 'Miopatía severa con rabdomiólisis'] }
    ],
    interactions: [
      { id: 'int-zid-1', interactingSubstance: 'Estavudina (d4T)', severity: 'Contraindicada', clinicalEffect: 'Antagonismo competitivo intracelular directo: ambos fármacos compiten por la misma enzima timidina quinasa para su fosforilación activa.', recommendation: 'Combinación formalmente prohibida.' },
      { id: 'int-zid-2', interactingSubstance: 'Ganciclovir / Sulfametoxazol / Antineoplásicos', severity: 'Mayor', clinicalEffect: 'Potenciación extrema de mielosupresión con pancitopenia severa y neutropenia febril.', recommendation: 'Evitar o monitorizar hemograma cada 48-72 horas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-aciclovir',
    name: 'Aciclovir (Acicloguanosina)',
    brandNames: ['Zovirax', 'Aciclovir Normon', 'Virherpes', 'Herpesan'],
    atcCode: 'J05AB01 / D06BB03 / S01AD03',
    description: 'Análogo acíclico de la guanosina con activación selectiva viral por la timidina quinasa del virus del herpes, fármaco de primera línea para infecciones por virus herpes simple (VHS-1, VHS-2) y virus varicela-zóster (VVZ).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antivirales'],
    presentations: [
      { id: 'p-aci-1', form: 'Comprimidos orales', concentration: '200 mg y 800 mg', route: 'Oral', packaging: 'Caja x 25 y 35 comprimidos', excipients: 'Celulosa microcristalina, estearato magnésico' },
      { id: 'p-aci-2', form: 'Polvo para solución para perfusión IV', concentration: '250 mg y 500 mg', route: 'Intravenosa', packaging: 'Vial de vidrio x 250 mg y 500 mg', excipients: 'Hidróxido sódico (contiene sodio)' },
      { id: 'p-aci-3', form: 'Crema dérmica al 5%', concentration: '50 mg / g', route: 'Tópica', packaging: 'Tubo de 2 g y 15 g', excipients: 'Propilenglicol, vaselina' },
      { id: 'p-aci-4', form: 'Pomada oftálmica al 3%', concentration: '30 mg / g', route: 'Oftálmica', packaging: 'Tubo de 4.5 g', excipients: 'Vaselina blanca' }
    ],
    mechanismOfAction: {
      summary: 'Activación selectiva en tres pasos: la timidina quinasa viral lo monofosforila exclusivamente en células infectadas, luego las quinasas celulares lo convierten en aciclovir trifosfato (ACV-TP), el cual inhibe la ADN polimerasa viral y causa terminación de la cadena de ADN.',
      detailed: 'Fármaco con altísima selectividad viral: su afinidad por la timidina quinasa del herpes es 200 veces superior a la celular humana. Al carecer del grupo 3\'-OH en la cadena de desoxirribosa acíclica, bloquea irreversiblemente la elongación del ADN vírico.',
      targetReceptor: 'ADN polimerasa viral de VHS y VVZ',
      keyPoints: ['Tratamiento de elección urgente para Encefalitis herpética por VHS-1 (10 mg/kg cada 8 horas IV)', 'Fármaco de referencia para Herpes zóster oftálmico y varicela en adultos o inmunodeprimidos', 'Riesgo de Nefropatía por precipitación de cristales intratubulares en infusión IV rápida (requiere hiperhidratación)']
    },
    indications: {
      approved: [
        'Encefalitis por virus del herpes simple (VHS-1) y meningitis herpética (emergencia neurológica IV)',
        'Herpes zóster agudo y prevención de neuralgia postherpética en adultos inmunocompetentes e inmunodeprimidos',
        'Herpes zóster oftálmico con compromiso del nervio trigémino',
        'Herpes genital primario y recurrente por VHS-2 (tratamiento y terapia supresiva crónica)',
        'Varicela complicada en adultos, embarazadas, adolescentes o inmunodeprimidos',
        'Herpes mucocutáneo grave y eccema herpético de Kaposi',
        'Queratitis herpética dendrítica epitelial (vía oftálmica)'
      ]
    },
    dosageAndPosology: {
      adults: 'Encefalitis herpética: 10 mg/kg IV cada 8 horas durante 14 a 21 días en infusión lenta de 60 minutos con hidratación. Herpes zóster oral: 800 mg cada 4 horas (5 veces al día omitiendo dosis nocturna) durante 7 días. Herpes genital primario: 400 mg cada 8 horas o 200 mg 5 veces al día durante 7-10 días. Herpes labial tópico: aplicar crema 5 veces al día por 5 días.',
      pediatric: 'Encefalitis neonatal: 20 mg/kg IV cada 8 horas durante 21 días. Varicela en niños > 2 años: 20 mg/kg cada 6 horas por vía oral (máximo 800 mg/dosis).',
      renalAdjustment: 'OBLIGATORIO AJUSTAR EN FALLO RENAL: TFG 25-50 ml/min: dosis completa cada 12 h; TFG 10-25 ml/min: dosis completa cada 24 h; TFG < 10 ml/min: 50% de la dosis cada 24 h (para evitar neurotoxicidad y coma).',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oral', 'Intravenosa', 'Tópica', 'Oftálmica'],
      administrationNotes: 'LA INFUSIÓN IV DEBE DURAR AL MENOS 60 MINUTOS con abundante hidratación intravenosa (diuresis objetivo > 50-100 ml/hora) para evitar la cristalización renal de aciclovir en los túbulos colectores.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a aciclovir o valaciclovir'],
      warnings: ['NEFROPATÍA POR CRISTALES: precipitación intratubular de agujas cristalinas de aciclovir si se inyecta en bolo rápido o sin hidratación adecuada', 'NEUROTOXICIDAD: alucinaciones, temblores, confusión y coma en pacientes con insuficiencia renal no corregida'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en el embarazo; de elección para herpes genital primario en el tercer trimestre y varicela materna.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna; concentraciones seguras.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas, vómitos y dolor abdominal', 'Cefalea y mareo', 'Flebitis e inflamación local en sitio IV', 'Diarrea'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Elevación reversible de creatinina sérica', 'Urticaria y exantema'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia renal aguda obstructiva por cristaluria', 'Neurotoxicidad aguda (confusión, mioclonías, alucinaciones y coma)', 'Púrpura trombocitopénica trombótica (en inmunodeprimidos)'] }
    ],
    interactions: [
      { id: 'int-aci-1', interactingSubstance: 'Fármacos nefrotóxicos (Ciclosporina, Aminoglucósidos)', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de daño tubular renal aditivo.', recommendation: 'Monitorizar función renal y mantener diuresis abundante.' },
      { id: 'int-aci-2', interactingSubstance: 'Probenecid y cimetidina', severity: 'Moderada', clinicalEffect: 'Disminuyen la secreción tubular activa de aciclovir aumentando su concentración y vida media en un 40%.', recommendation: 'Monitorear síntomas de neurotoxicidad.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ribavirina',
    name: 'Ribavirina (Tribavirina)',
    brandNames: ['Rebetol', 'Copegus', 'Virazole', 'Ribavirina Normon'],
    atcCode: 'J05AB04',
    description: 'Análogo sintético de guanosina con actividad antiviral de amplio espectro contra virus ARN y ADN, empleado en infecciones por virus respiratorio sincitial (VRS), fiebres hemorrágicas víricas y hepatitis C.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antivirales'],
    presentations: [
      { id: 'p-rib-1', form: 'Cápsulas y comprimidos recubiertos', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Frasco de 84, 140 y 168 cápsulas', excipients: 'Celulosa microcristalina, lactosa' },
      { id: 'p-rib-2', form: 'Polvo para solución para inhalación por aerosol', concentration: '6 g por vial', route: 'Inhalatoria', packaging: 'Vial para generador SPAG-2', excipients: 'Sin excipientes' }
    ],
    mechanismOfAction: {
      summary: 'Múltiples mecanismos: inhibe la inosina monofosfato deshidrogenasa (IMPDH) vaciando las reservas celulares de GTP vírico, induce mutagénesis letal por catástrofe de errores en virus ARN e inhibe la enzima ARN polimerasa vírica.',
      detailed: 'Fosforilada a ribavirina mono-, di- y trifosfato. El trifosfato compite con el GTP interfiriendo con el capuchón 5\' (capping) del ARNm vírico y forzando mutaciones deletéreas masivas en la replicación genómica de virus ARN.',
      targetReceptor: 'Inosina monofosfato deshidrogenasa (IMPDH) y ARN polimerasa vírica',
      keyPoints: ['POTENTE TERATÓGENO MUTAGÉNICO: contraindicado de forma absoluta en el embarazo y hasta 6 meses después en mujeres Y hombres', 'ANEMIA HEMOLÍTICA dosis-dependiente por acumulación de ribavirina trifosfato en los eritrocitos', 'Vía inhalatoria reservada para bronquiolitis severa por VRS en lactantes de alto riesgo']
    },
    indications: {
      approved: [
        'Infección grave del tracto respiratorio inferior por Virus Respiratorio Sincitial (VRS / bronquiolitis grave) en lactantes de alto riesgo con cardiopatías congénitas o displasia broncopulmonar (vía aerosol)',
        'Hepatitis crónica por virus C (en combinación con interferón pegilado o antivirales de acción directa en regímenes específicos)',
        'Fiebre de Lassa y fiebres hemorrágicas por Arenavirus y Bunyavirus (Fiebre hemorrágica de Crimea-Congo)'
      ]
    },
    dosageAndPosology: {
      adults: 'Hepatitis C oral: 800 a 1200 mg/día divididos en 2 tomas (mañana y noche con comida, según peso corporal < 75 kg = 1000 mg; > 75 kg = 1200 mg). Fiebre de Lassa / fiebres hemorrágicas IV: 30 mg/kg de carga, luego 16 mg/kg cada 6 h por 4 días, luego 8 mg/kg cada 8 h por 6 días.',
      pediatric: 'Aerosol para VRS: solución de 20 mg/ml administrada continuamente mediante generador de aerosol de partículas pequeñas (SPAG-2) durante 12 a 18 horas diarias por 3 a 7 días.',
      renalAdjustment: 'TFG < 50 ml/min: CONTRAINDICADA POR VÍA ORAL (riesgo de hemólisis severa potencialmente mortal).',
      hepaticAdjustment: 'Precaución en cirrosis descompensada.',
      routes: ['Oral', 'Inhalatoria', 'Intravenosa'],
      administrationNotes: 'Tomar los comprimidos orales siempre con alimentos grasos para aumentar su biodisponibilidad. En aerosol, el personal sanitario debe evitar inhalar el fármaco (teratogénico).'
    },
    safety: {
      contraindications: ['EMBARAZO Y LACTANCIA (contraindicación estricta y absoluta)', 'Hombres cuyas parejas estén o planeen quedarse embarazadas', 'Anemia preexistente severa, hemoglobinopatías (talasemia, drepanocitosis)', 'Insuficiencia renal crónica grave (TFG < 50 ml/min)'],
      warnings: ['EXTREMA TERATOGENICIDAD: requiere dos métodos anticonceptivos eficaces durante el tratamiento y hasta 6 meses posteriores a la última dosis tanto en mujeres como en hombres', 'ANEMIA HEMOLÍTICA GRAVE: caída de hemoglobina de 2 a 4 g/dl en las primeras 2-4 semanas'],
      pregnancyCategory: 'X',
      pregnancyNotes: 'TERATÓGENO PROBADO MAYOR: malformaciones craneofaciales, esqueléticas, cardíacas y muerte fetal.',
      lactation: 'Contraindicado',
      lactationNotes: 'Contraindicado de forma absoluta.',
      controlledSubstance: false,
      blackBoxWarning: 'No debe usarse en monoterapia para hepatitis C. Extremadamente teratogénico y embriotóxico. Produce anemia hemolítica fatal en pacientes con cardiopatía isquémica.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Anemia hemolítica extravascular con descenso de hemoglobina', 'Cansancio extremo y debilidad', 'Cefalea', 'Náuseas y anorexia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperuricemia (por destrucción eritrocitaria)', 'Disnea de esfuerzo', 'Insomnio y depresión'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Infarto agudo de miocardio desencadenado por anemia profunda', 'Teratogénesis y muerte fetal'] }
    ],
    interactions: [
      { id: 'int-rib-1', interactingSubstance: 'Zidovudina (AZT)', severity: 'Contraindicada', clinicalEffect: 'Antagonismo competitivo de fosforilación intracelular y potenciación sinérgica de anemia severa profunda.', recommendation: 'Evitar la combinación simultánea de ribavirina con zidovudina.' },
      { id: 'int-rib-2', interactingSubstance: 'Didanosina (ddI)', severity: 'Contraindicada', clinicalEffect: 'Aumento de los niveles tóxicos de didanosina con pancreatitis fulminante letal y acidosis láctica.', recommendation: 'Combinación formalmente contraindicada.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-amantadina',
    name: 'Amantadina Clorhidrato',
    brandNames: ['Mantadan', 'Amantadina Level', 'Symmetrel', 'Gocovri'],
    atcCode: 'N04BC01 / J05AC01',
    description: 'Amina tricíclica sintética que actúa como inhibidor de la proteína M2 del virus Influenza A y como modulador dopaminérgico y antagonista de receptores NMDA utilizado en la enfermedad de Parkinson y discinesias.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antivirales'],
    presentations: [
      { id: 'p-ama-1', form: 'Cápsulas y comprimidos orales', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 20 y 50 comprimidos', excipients: 'Lactosa, dióxido de titanio' },
      { id: 'p-ama-2', form: 'Solución para infusión IV', concentration: '200 mg / 500 ml (0.4 mg/ml)', route: 'Intravenosa', packaging: 'Frasco de infusión de 500 ml', excipients: 'Cloruro sódico, agua para inyección' }
    ],
    mechanismOfAction: {
      summary: 'Acción antiviral: bloquea el canal iónico de protones de la proteína M2 de la envoltura del virus Influenza A impidiendo la acidificación viral interna y la pérdida de la cápside (uncoating). Acción neurológica: promueve la liberación presináptica de dopamina, bloquea la recaptación de dopamina y actúa como antagonista no competitivo de receptores de glutamato NMDA.',
      detailed: 'Fármaco con doble efecto terapéutico. Como antiviral es inactivo contra Influenza B (carece de proteína M2 homóloga) y hoy en día existe resistencia generalizada en cepas circulantes de Influenza A. Como antiparkinsoniano reduce los síntomas extrapiramidales y atenúa las discinesias inducidas por levodopa gracias al antagonismo de receptores NMDA en el cuerpo estriado.',
      targetReceptor: 'Proteína M2 del virus Influenza A / Receptores NMDA y transportador DAT',
      keyPoints: ['Uso antiviral limitado hoy en día por resistencia viral; de gran uso neurológico para la Enfermedad de Parkinson y temblor postraumático', 'Efecto secundario dermatológico característico: LIVEDO RETICULARIS (moteado violáceo en extremidades inferiores)', 'Eliminación 90% renal: riesgo de alucinaciones y confusión si no se ajusta en ancianos']
    },
    indications: {
      approved: [
        'Enfermedad de Parkinson idiopática y parkinsonismo secundario (temblor, rigidez y acinesia)',
        'Tratamiento de discinesias inducidas por levodopa en pacientes parkinsonianos',
        'Neuralgia postherpética (alivio del dolor neuropático por acción anti-NMDA)',
        'Profilaxis y tratamiento de la infección respiratoria por virus Influenza A (solo en cepas sensibles documentadas)'
      ],
      offLabel: ['Recuperación funcional y despertar en pacientes con traumatismo craneoencefálico grave y trastornos de la conciencia']
    },
    dosageAndPosology: {
      adults: 'Enfermedad de Parkinson: 100 mg una vez al día con desayuno durante 1 semana; aumentar a 100 mg cada 12 horas (dosis máxima 400 mg/día repartidos en 2 tomas). Neuralgia postherpética: 100 a 200 mg/día. Profilaxis Influenza A: 100 mg cada 12 o 24 horas por 14 a 21 días.',
      pediatric: 'Uso antiviral en niños > 1 año: 5 mg/kg/día divididos cada 12 o 24 horas (máx 150 mg/día).',
      renalAdjustment: 'OBLIGATORIO AJUSTAR SEGÚN ACLARAMIENTO: TFG 30-50 ml/min: 100 mg al día; TFG 15-29 ml/min: 100 mg cada 48 h; TFG < 15 ml/min o diálisis: 200 mg cada 7 días.',
      hepaticAdjustment: 'No suele requerir ajuste.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Tomar la última dosis por la tarde temprano (antes de las 16:00 h) para evitar insomnio nocturno.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a amantadina', 'Insuficiencia cardíaca congestiva grave', 'Glaucoma de ángulo cerrado', 'Antecedente de psicosis o convulsiones graves'],
      warnings: ['LIVEDO RETICULARIS y edema periférico en miembros inferiores (benigno y reversible al suspender)', 'EFECTOS NEUROPSIQUIÁTRICOS: alucinaciones visuales, confusión, delirio y pesadillas (frecuente en ancianos con daño renal)', 'Prolongación del intervalo QTc e insuficiencia cardíaca'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en el embarazo por riesgo de malformaciones cardiovasculares fetales.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna y suprime la secreción de prolactina.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Livedo reticularis (red vascular violácea en piernas)', 'Edema periférico maleolar'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Alucinaciones visuales y confusión', 'Insomnio y pesadillas vívidas', 'Mareo, ataxia y ortostatismo', 'Boca seca y estreñimiento (anticolinérgico)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Psicosis aguda', 'Convulsiones', 'Insuficiencia cardíaca congestiva', 'Neutropenia'] }
    ],
    interactions: [
      { id: 'int-ama-1', interactingSubstance: 'Fármacos anticolinérgicos (Biperideno, Trihexifenidilo, Amitriptilina)', severity: 'Mayor', clinicalEffect: 'Potenciación extrema de toxicidad anticolinérgica con delirio agudo, alucinaciones, retención urinaria y midriasis.', recommendation: 'Reducir dosis de anticolinérgicos.' },
      { id: 'int-ama-2', interactingSubstance: 'Hidroclorotiazida / Triamtereno', severity: 'Mayor', clinicalEffect: 'Disminuyen el aclaramiento renal de amantadina disparando sus concentraciones con toxicidad neuropsiquiátrica.', recommendation: 'Vigilar estrechamente y ajustar dosis.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
