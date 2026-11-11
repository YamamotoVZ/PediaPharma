import { Medication } from '../../types/pharmacy';

export const CORTICOSTEROID_MEDICATIONS: Medication[] = [
  {
    id: 'med-dexametasona',
    name: 'Dexametasona',
    brandNames: ['Fortecortin', 'Decadron', 'Dexafree', 'Maxidex'],
    atcCode: 'H02AB02',
    description: 'Glucocorticoide sintético de acción prolongada con extraordinaria potencia antiinflamatoria (25-30 veces superior a la hidrocortisona) y prácticamente nula actividad mineralocorticoide.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-corticosteroides'],
    presentations: [
      { id: 'p-dex-1', form: 'Ampollas inyectables IV/IM', concentration: '4 mg / ml y 8 mg / 2 ml', route: 'Intravenosa', packaging: 'Caja x 3 y 10 ampollas', excipients: 'Creatinina, citrato de sodio' },
      { id: 'p-dex-2', form: 'Comprimidos orales', concentration: '1 mg, 4 mg y 8 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-dex-3', form: 'Colirio oftálmico en suspensión', concentration: '1 mg/ml (0.1%)', route: 'Oftálmica', packaging: 'Frasco gotero de 5 ml', excipients: 'Cloruro de benzalconio' }
    ],
    mechanismOfAction: {
      summary: 'Agonismo del receptor glucocorticoide citosólico con transrepresión de factores proinflamatorios (NF-kB y AP-1).',
      detailed: 'Difunde a través de la membrana celular y se une al receptor de glucocorticoides intracelular (GR). El complejo esteroide-GR se transloca al núcleo donde inhibe la transcripción de citoquinas proinflamatorias (IL-1, IL-2, IL-6, TNF-alfa), inducible óxido nítrico sintasa (iNOS) y ciclooxigenasa-2 (COX-2) mediante transrepresión de NF-kB. Induce la síntesis de anexina A1 (lipocortina-1), la cual inhibe la fosfolipasa A2 frenando la liberación de ácido araquidónico. Carece de efecto retenedor de sodio.',
      targetReceptor: 'Receptor de Glucocorticoides nuclear (GR-alfa)',
      keyPoints: ['No causa retención hidrosalina ni hipertensión por mineralocorticoides', 'Semivida biológica tisular prolongada (36 a 54 horas)', 'Pasa eficazmente la barrera hematoencefálica (fármaco de elección en edema cerebral vasogénico)']
    },
    indications: {
      approved: ['Edema cerebral secundario a tumores cerebrales o metástasis', 'Shock anafiláctico y reacciones alérgicas agudas graves', 'Crup laringotraqueal pediátrico y síndrome de distrés respiratorio agudo', 'Profilaxis y tratamiento de náuseas y vómitos inducidos por quimioterapia', 'COVID-19 grave que requiere oxigenoterapia (estudio RECOVERY)'],
      offLabel: ['Maduración pulmonar fetal en amenaza de parto pretérmino (24 a 34 semanas)']
    },
    dosageAndPosology: {
      adults: 'Edema cerebral: 10 a 20 mg IV en bolo inicial, luego 4 mg cada 6 horas hasta mejoría clínica. Antiinflamatorio / COVID-19 grave: 6 mg una vez al día por vía oral o IV durante hasta 10 días.',
      pediatric: 'Crup laríngeo: 0.15 a 0.6 mg/kg en dosis única oral o IM (máx 16 mg).',
      renalAdjustment: 'No precisa ajuste de dosis en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis en cirrosis hepática por disminución del metabolismo hepático.',
      routes: ['Intravenosa', 'Oral', 'Intramuscular', 'Oftálmica', 'Tópica'],
      administrationNotes: 'En tratamientos > 2 semanas, realizar retirada gradual y progresiva para evitar insuficiencia suprarrenal aguda por atrofia del eje hipotálamo-hipófiso-suprarrenal.'
    },
    safety: {
      contraindications: ['Infecciones fúngicas o bacterianas sistémicas no controladas con tratamiento antimicrobiano específico', 'Administración de vacunas con virus vivos atenuados durante el tratamiento'],
      warnings: ['Hiperglucemia grave en diabéticos', 'Riesgo de reactivación de tuberculosis latente o estrongiloidiasis', 'Supresión del eje corticosuprarrenal'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Atraviesa la placenta; se utiliza deliberadamente para madurar pulmones fetales en parto prematuro inminente.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible a dosis cortas.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hiperglucemia', 'Insomnio', 'Aumento del apetito', 'Retención de líquidos transitoria'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Leucocitosis reactiva por demarginación', 'Inestabilidad emocional / euforia', 'Gastritis'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Psicosis esteroidea aguda', 'Necrosis avascular de la cabeza femoral', 'Infecciones oportunistas fulminantes', 'Úlcera péptica perforada'] }
    ],
    interactions: [
      { id: 'int-dex-1', interactingSubstance: 'AINEs (Ibuprofeno, Ketorolaco, Diclofenaco)', severity: 'Mayor', clinicalEffect: 'Aumento sinérgico masivo del riesgo de úlcera gastroduodenal y hemorragia digestiva.', recommendation: 'Evitar asociación o añadir obligatoriamente IBP a dosis plenas.' },
      { id: 'int-dex-2', interactingSubstance: 'Antidiabéticos orales e Insulina', severity: 'Mayor', clinicalEffect: 'Atenuación severa del control glucémico por inducción de resistencia a la insulina y aumento de gluconeogénesis.', recommendation: 'Aumentar las dosis de insulina y monitorizar glucemias capilares continuas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-hidrocortisona',
    name: 'Hidrocortisona (Cortisol)',
    brandNames: ['Actocortina', 'Solu-Cortef', 'Hidroaltesona', 'Lactisona'],
    atcCode: 'H02AB09',
    description: 'Glucocorticoide natural idéntico al cortisol endógeno humano, con acción glucocorticoide y mineralocorticoide equilibrada (retención de sodio y agua). Fármaco de rescate en crisis addisonianas.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-corticosteroides'],
    presentations: [
      { id: 'p-hid-1', form: 'Polvo y disolvente para solución inyectable (succinato sódico)', concentration: '100 mg y 500 mg', route: 'Intravenosa', packaging: 'Vial liofilizado con ampolla de agua de 2 ml', excipients: 'Fosfato monobásico de sodio' },
      { id: 'p-hid-2', form: 'Comprimidos orales', concentration: '10 mg y 20 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-hid-3', form: 'Crema tópica al 1%', concentration: '10 mg/g', route: 'Tópica', packaging: 'Tubo de 30 g y 60 g', excipients: 'Alcohol cetoestearílico' }
    ],
    mechanismOfAction: {
      summary: 'Agonista fisiológico de receptores glucocorticoides y mineralocorticoides en riñón y vasos.',
      detailed: 'Replica las acciones del cortisol endógeno secretado por la zona fasciculada de la corteza suprarrenal. Estimula la gluconeogénesis hepática, inhibe la síntesis de citoquinas inflamatorias y, al actuar también sobre receptores mineralocorticoides en el túbulo distal renal, promueve la reabsorción de sodio y excreción de potasio e hidrogeniones, manteniendo la volemia y tono vascular.',
      targetReceptor: 'Receptor de Glucocorticoides (GR) y Receptor Mineralocorticoide (MR)',
      keyPoints: ['Efecto mineralocorticoide significativo (retiene sodio y agua)', 'Acción corta y rápida (semivida biológica de 8 a 12 horas)', 'Tratamiento de elección indispensable para crisis suprarrenal aguda']
    },
    indications: {
      approved: ['Insuficiencia suprarrenal aguda (crisis addisoniana / shock suprarrenal)', 'Terapia de reemplazo en insuficiencia suprarrenal crónica primaria (enfermedad de Addison) o secundaria', 'Shock séptico refractario a vasopresores y fluidoterapia', 'Dermatitis inflamatoria superficial leve (vía tópica)'],
      offLabel: ['Tiroiditis subaguda severa']
    },
    dosageAndPosology: {
      adults: 'Crisis suprarrenal aguda: 100 mg en bolo IV inmediato, seguido de 50 a 100 mg cada 6 horas en infusión continua (o 200 mg/24h) junto con suero salino isotónico. Reemplazo crónico oral: 15 a 25 mg/día divididos (2/3 por la mañana, 1/3 por la tarde).',
      pediatric: 'Crisis suprarrenal en niños: 50 a 100 mg/m² en bolo inicial.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis de mantenimiento.',
      routes: ['Intravenosa', 'Intramuscular', 'Oral', 'Tópica'],
      administrationNotes: 'En situación de estrés quirúrgico o infección grave en pacientes con Addison, duplicar o triplicar la dosis habitual de mantenimiento.'
    },
    safety: {
      contraindications: ['Hipersensibilidad al fármaco', 'Infecciones micóticas sistémicas'],
      warnings: ['Retención hídrica e hipertensión arterial por efecto mineralocorticoide', 'Hipopotasemia grave a dosis altas'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Seguro y vital para gestantes con insuficiencia suprarrenal.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia a dosis de sustitución.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Retención de sodio y edema', 'Hipopotasemia', 'Hipertensión', 'Insomnio'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia cardíaca congestiva en pacientes predispuestos', 'Síndrome de Cushing iatrogénico'] }
    ],
    interactions: [
      { id: 'int-hid-1', interactingSubstance: 'Diuréticos tiazídicos o de asa (Furosemida)', severity: 'Mayor', clinicalEffect: 'Excreción masiva de potasio con riesgo de hipopotasemia crítica y arritmias.', recommendation: 'Monitorear niveles séricos de potasio con regularidad.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-prednisona',
    name: 'Prednisona',
    brandNames: ['Dacortin', 'Prednisona Alonga', 'Deltasone', 'Meticorten'],
    atcCode: 'H02AB07',
    description: 'Glucocorticoide sintético de acción intermedia (semivida tisular de 18 a 36 horas) de administración oral más empleado en patología inflamatoria y autoinmune.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-corticosteroides'],
    presentations: [
      { id: 'p-pred-1', form: 'Comprimidos orales ranurados', concentration: '5 mg, 10 mg, 30 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato, almidón' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco hepático convertido a prednisolona activa con potente inmunosupresión y transrepresión genómica.',
      detailed: 'Es biológicamente inactiva hasta que la enzima hepática 11-beta-hidroxiesteroide deshidrogenasa tipo 1 (11beta-HSD1) la convierte en prednisolona activa. Suprime la activación y proliferación de linfocitos T colaboradores, bloquea la producción de interleucina-2 y reduce los eosinófilos y monocitos circulantes.',
      targetReceptor: 'Receptor Glucocorticoide citosólico',
      keyPoints: ['Requiere activación hepática a prednisolona (en cirrosis severa se prefiere prednisolona directa)', '4 veces más potente que la hidrocortisona como antiinflamatorio', 'Pauta matutina en monodosis para respetar el ritmo circadiano del cortisol']
    },
    indications: {
      approved: ['Enfermedades autoinmunes sistémicas (Lupus eritematoso, polimialgia reumática, vasculitis)', 'Exacerbación aguda grave de asma bronquial y EPOC', 'Glomerulonefritis y síndrome nefrótico', 'Púrpura trombocitopénica idiopática y anemia hemolítica inmune', 'Artritis reumatoide y enfermedad inflamatoria intestinal'],
      offLabel: ['Parálisis facial de Bell idiopática aguda']
    },
    dosageAndPosology: {
      adults: 'Dosis inicial: 20 a 60 mg/día por la mañana en toma única según severidad. En polimialgia reumática: 15 mg/día. En crisis asmática: 40-50 mg/día por 5-7 días.',
      pediatric: '1 a 2 mg/kg/día en 1 o 2 tomas (máximo 60 mg/día).',
      renalAdjustment: 'No requiere ajuste en fallo renal.',
      hepaticAdjustment: 'En hepatopatía avanzada preferir prednisolona por deficiencia de bioactivación.',
      routes: ['Oral'],
      administrationNotes: 'Tomar íntegramente por la mañana entre las 7:00 y las 9:00 horas con el desayuno para sincronizarse con el pico de secreción endógena de ACTH y minimizar el insomnio.'
    },
    safety: {
      contraindications: ['Infecciones virales activas (herpes zóster ocular, varicela)', 'Micosis sistémicas no tratadas'],
      warnings: ['Osteoporosis esteroidea: en tratamientos > 3 meses indicar profilaxis con calcio, vitamina D y bifosfonatos', 'Cataratas subcapsulares posteriores y glaucoma en uso crónico', 'Supresión adrenal'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'La placenta contiene 11beta-HSD2 que inactiva la mayor parte de la prednisolona protegiendo al feto (corticosteroide de elección para tratar a la madre gestante sin sobreexponer al feto).',
      lactation: 'Compatible',
      lactationNotes: 'Esperar 3-4 horas tras la toma antes de amamantar si la dosis supera los 20 mg/día.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Facies cushingoide ("cara de luna llena")', 'Aumento de peso y redistribución centrípeta de grasa', 'Hiperglucemia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Osteopenia / osteoporosis', 'Estrías cutáneas violáceas y fragilidad capilar', 'Hipertensión arterial'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Fracturas vertebrales por compresión', 'Ruptura del tendón de Aquiles', 'Psicosis maniacodepresiva'] }
    ],
    interactions: [
      { id: 'int-pred-1', interactingSubstance: 'AINEs', severity: 'Mayor', clinicalEffect: 'Duplica el riesgo de úlceras sangrantes gastroduodenales.', recommendation: 'Asociar IBP si la combinación es inevitable.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-metilprednisolona',
    name: 'Metilprednisolona',
    brandNames: ['Urbason', 'Solu-Medrol', 'Medrol'],
    atcCode: 'H02AB04',
    description: 'Glucocorticoide sintético de acción intermedia con potencia antiinflamatoria 5 veces superior a la hidrocortisona y mínima acción mineralocorticoide. Empleado en "pulsos" intravenosos de rescate.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-corticosteroides'],
    presentations: [
      { id: 'p-mpred-1', form: 'Polvo y disolvente para solución inyectable (succinato sódico)', concentration: '20 mg, 40 mg, 125 mg, 500 mg y 1000 mg', route: 'Intravenosa', packaging: 'Vial liofilizado con ampolla de agua para inyección', excipients: 'Fosfato sódico' },
      { id: 'p-mpred-2', form: 'Comprimidos orales ranurados', concentration: '4 mg, 16 mg y 40 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inmunosupresión intensa rápida e inhibición de la migración leucocitaria mediada por receptores GR.',
      detailed: 'Produce una transrepresión masiva de citoquinas inflamatorias y bloquea la activación de linfocitos T y B. A dosis altas ("pulsos" de 500-1000 mg IV) genera efectos no genómicos inmediatos mediante alteración de la fluidez de membranas celulares y bloqueo de canales iónicos linfocitarios en pocos minutos.',
      targetReceptor: 'Receptor Glucocorticoide citoplasmático y efectos no genómicos de membrana',
      keyPoints: ['Fármaco de elección en megadosis ("pulsos") para brotes autoinmunes fulminantes', 'Excelente penetración en tejido pulmonar e intersticio', 'Menor retención de agua que la hidrocortisona']
    },
    indications: {
      approved: ['Pulsos de choque en brotes graves de esclerosis múltiple, lupus activo o vasculitis ANCA', 'Crisis asmática aguda grave en urgencias (status asmaticus)', 'Rechazo agudo de trasplante de órganos sólidos', 'Shock anafiláctico'],
      offLabel: ['Neuritis óptica aguda']
    },
    dosageAndPosology: {
      adults: 'Pulsos de rescate en autoinmunidad grave: 500 a 1000 mg IV en infusión lenta en 1-2 horas durante 3 días consecutivos. Crisis asmática / EPOC: 40 a 80 mg IV cada 12 horas. Dosis oral de mantenimiento: 4 a 16 mg/día.',
      pediatric: 'Pulsos en UCIP: 10 a 30 mg/kg/día IV en 3 días (máximo 1 g/día).',
      renalAdjustment: 'No requiere ajuste en insuficiencia renal.',
      hepaticAdjustment: 'Reducir dosis de mantenimiento.',
      routes: ['Intravenosa', 'Intramuscular', 'Oral'],
      administrationNotes: 'La infusión rápida de megadosis (> 500 mg en < 10 minutos) puede provocar colapso cardiovascular y arritmias ventriculares letales.'
    },
    safety: {
      contraindications: ['Infecciones fúngicas sistémicas', 'Hipersensibilidad al fármaco'],
      warnings: ['Arritmias cardíacas en pulsos IV rápidos: infundir en no menos de 45 a 60 minutos con monitorización cardíaca continua'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uso en gestantes solo ante riesgo vital materno.',
      lactation: 'Compatible',
      lactationNotes: 'Esperar 2 a 4 horas tras la infusión antes de amamantar.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sabor metálico transitorio durante la infusión', 'Rubefacción facial', 'Hiperglucemia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipertensión arterial aguda', 'Insomnio severo', 'Infecciones bacterianas secundarias'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Arritmias ventriculares letales (en pulsos rápidos)', 'Bradicardia sinusal', 'Psicosis aguda'] }
    ],
    interactions: [
      { id: 'int-mpred-1', interactingSubstance: 'Inhibidores potentes de CYP3A4 (Ketoconazol, Claritromicina)', severity: 'Mayor', clinicalEffect: 'Aumento marcado de los niveles de metilprednisolona con síndrome de Cushing acelerado.', recommendation: 'Reducir la dosis de metilprednisolona.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-betametasona',
    name: 'Betametasona',
    brandNames: ['Celestone', 'Diproderm', 'Betnovate', 'Diprospan'],
    atcCode: 'H02AB01',
    description: 'Glucocorticoide sintético de acción prolongada y alta potencia, isómero estereoquímico de la dexametasona. Es el corticosteroide estándar de oro prenatal para la prevención del síndrome de dificultad respiratoria neonatal.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg', '/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-corticosteroides'],
    presentations: [
      { id: 'p-beta-1', form: 'Suspensión inyectable en ampollas (fosfato disódico + dipropionato)', concentration: '6 mg / ml y 12 mg / 2 ml', route: 'Intramuscular', packaging: 'Caja con 1 ampolla de 2 ml', excipients: 'Alcohol bencílico, edetato disódico' },
      { id: 'p-beta-2', form: 'Crema y pomada tópica al 0.05% y 0.1%', concentration: '0.5 mg/g y 1 mg/g', route: 'Tópica', packaging: 'Tubo de 30 g y 60 g', excipients: 'Vaselina blanca, parafina líquida' },
      { id: 'p-beta-3', form: 'Solución en gotas orales', concentration: '0.5 mg / ml', route: 'Oral', packaging: 'Frasco gotero de 30 ml', excipients: 'Propilenglicol' }
    ],
    mechanismOfAction: {
      summary: 'Inducción de la síntesis de surfactante pulmonar fetal y potente inmunosupresión sin retención hídrica.',
      detailed: 'Difunde activamente a través de la barrera placentaria sin sufrir inactivación significativa por la 11beta-HSD2 fetal. En los neumocitos tipo II del feto prematuro, estimula la expresión de proteínas del surfactante (SP-A, SP-B y SP-C) y la síntesis de dipalmitoilfosfatidilcolina, acelerando la maduración pulmonar y reduciendo la tensión superficial alveolar.',
      targetReceptor: 'Receptor de Glucocorticoides celular',
      keyPoints: ['Atraviesa la placenta intacta sin ser hidrolizada', 'Reduce mortalidad neonatal, hemorragia intraventricular y enterocolitis necrotizante en prematuros', 'Pauta estricta prenatal de 2 dosis de 12 mg IM separadas por 24 horas']
    },
    indications: {
      approved: ['Inducción de maduración pulmonar fetal en amenaza de parto prematuro entre semanas 24 y 34 de gestación', 'Tratamiento de dermatosis inflamatorias graves resistentes (eccemas, psoriasis) vía tópica', 'Infiltraciones intraarticulares en artritis e inflamaciones bursales crónicas'],
      offLabel: ['Alopecia areata en placas (infiltración intralesional)']
    },
    dosageAndPosology: {
      adults: 'Maduración pulmonar fetal: 12 mg IM cada 24 horas por 2 dosis únicas (total 24 mg). Infiltración articular: 1.5 a 6 mg según tamaño de la articulación.',
      pediatric: 'Uso tópico breve en eccemas graves.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intramuscular', 'Tópica', 'Oral'],
      administrationNotes: 'Vía IM exclusivamente profunda en región glútea. No administrar vía IV la presentación combinada con dipropionato (depósito).'
    },
    safety: {
      contraindications: ['Infección sistémica activa o corioamnionitis materna', 'Infecciones fúngicas sistémicas'],
      warnings: ['En gestantes diabéticas eleva marcadamente las glucemias durante 48 a 72 horas requiriendo ajuste de insulina', 'Atrofia cutánea con uso tópico continuado'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Fármaco de elección indicado por las guías mundiales de obstetricia para maduración fetal.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperglucemia materna transitoria', 'Disminución transitoria de la variabilidad de la frecuencia cardíaca fetal', 'Atrofia dérmica y telangiectasias (tópico)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Supresión adrenal fetal transitoria', 'Infecciones perinatales en presencia de bolsa rota'] }
    ],
    interactions: [
      { id: 'int-beta-1', interactingSubstance: 'Insulina y fármacos hipoglucemiantes', severity: 'Mayor', clinicalEffect: 'Descompensación hiperglucémica aguda materna en las 48-72 horas siguientes a la inyección.', recommendation: 'Monitoreo estricto de glucemias horarias y aumento temporal de insulina.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
