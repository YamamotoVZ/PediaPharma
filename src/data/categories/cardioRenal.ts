import { Medication } from '../../types/pharmacy';

export const CARDIO_RENAL_MEDICATIONS: Medication[] = [
  // --- ANTIHIPERTENSIVOS ---
  {
    id: 'med-metoprolol',
    name: 'Metoprolol (Tartrato / Succinato)',
    brandNames: ['Lopresor', 'Beloken', 'Toprol XL', 'Seloken'],
    atcCode: 'C07AB02',
    description: 'Betabloqueante cardioselectivo beta-1 sin actividad simpaticomimética intrínseca (ASI). Fármaco clave en cardiopatía isquémica, arritmias e insuficiencia cardíaca con fracción de eyección reducida.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-meto-1', form: 'Comprimidos de liberación prolongada (Succinato)', concentration: '25 mg, 50 mg, 100 mg y 200 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Celulosa microcristalina, polietilenglicol' },
      { id: 'p-meto-2', form: 'Comprimidos de liberación inmediata (Tartrato)', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-meto-3', form: 'Ampollas inyectables IV', concentration: '5 mg / 5 ml (1 mg/ml)', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Cloruro sódico' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo competitivo selectivo de los receptores adrenérgicos beta-1 miocárdicos.',
      detailed: 'Inhibe los efectos cronotrópicos e inotrópicos positivos de las catecolaminas (adrenalina y noradrenalina) en el corazón, reduciendo la frecuencia cardíaca, el gasto cardíaco y la tensión arterial tanto en reposo como en ejercicio. Disminuye la secreción de renina en el aparato yuxtaglomerular renal. A dosis elevadas (> 100-200 mg) puede perder parcialmente la cardioselectividad y bloquear receptores beta-2 bronquiales y vasculares.',
      targetReceptor: 'Adrenorreceptor Beta-1 cardíaco',
      keyPoints: ['Efecto antiisquémico al reducir el consumo miocárdico de oxígeno', 'Formulación succinato aprobada para reducir mortalidad en insuficiencia cardíaca (estudio MERIT-HF)', 'Nunca suspender bruscamente por riesgo de taquicardia de rebote e infarto agudo']
    },
    indications: {
      approved: ['Hipertensión arterial esencial', 'Cardiopatía isquémica crónica, angina de pecho y fase aguda postinfarto', 'Insuficiencia cardíaca crónica estable con fracción de eyección reducida (succinato)', 'Taquiarritmias supraventriculares (fibrilación auricular, taquicardia paroxística)', 'Profilaxis de la migraña'],
      offLabel: ['Ansiedad situacional / temblor esencial']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: 50 a 100 mg/día en 1 o 2 tomas (tartrato) o 50 a 100 mg/día en monodosis matutina (succinato retard), hasta 200 mg/día. Insuficiencia cardíaca: Iniciar con 12.5 a 25 mg/día de succinato, duplicando cada 2 semanas hasta 200 mg/día.',
      pediatric: '1 a 2 mg/kg/día.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis por metabolismo hepático CYP2D6.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Tomar preferentemente con o inmediatamente después de las comidas.'
    },
    safety: {
      contraindications: ['Bloqueo auriculoventricular de 2º o 3º grado sin marcapasos', 'Bradicardia sinusal severa (< 50 lpm)', 'Shock cardiogénico o insuficiencia cardíaca descompensada aguda', 'Asma bronquial grave o broncoespasmo activo'],
      warnings: ['Enmascara los síntomas cardinales de alarma de hipoglucemia (taquicardia, temblor) en diabéticos (excepto la sudoración)', 'Empeoramiento de enfermedad arterial periférica'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Puede causar bradicardia fetal e hipoglucemia neonatal.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Fatiga y astenia', 'Bradicardia sinusal', 'Mareo'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Extremidades frías', 'Cefalea', 'Hipotensión ortostática', 'Disnea de esfuerzo'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Bloqueo AV completo', 'Insuficiencia cardíaca descompensada', 'Broncoespasmo grave'] }
    ],
    interactions: [
      { id: 'int-meto-1', interactingSubstance: 'Verapamilo o Diltiazem IV', severity: 'Contraindicada', clinicalEffect: 'Bradicardia extrema, asistolia y colapso cardiovascular sinérgico.', recommendation: 'Prohibida la coadministración parenteral.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-nifedipino',
    name: 'Nifedipino',
    brandNames: ['Adalat', 'Adalat OROS', 'Procardia XL'],
    atcCode: 'C08CA05',
    description: 'Bloqueador de los canales de calcio dihidropiridínico de primera generación con marcada selectividad vascular periférica y potente acción vasodilatadora arteriolar.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-nif-1', form: 'Comprimidos de liberación osmótica prolongada (OROS)', concentration: '30 mg y 60 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos con sistema push-pull', excipients: 'Hipromelosa, óxido de polietileno' },
      { id: 'p-nif-2', form: 'Cápsulas blandas de liberación inmediata', concentration: '10 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas', excipients: 'Glicerol, gelatina' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición selectiva del influjo de iones calcio a través de los canales lentos tipo L en el músculo liso vascular arteriolar.',
      detailed: 'Se une a la subunidad alfa-1 de los canales de calcio voltaje-dependientes tipo L en el músculo liso de las arterias coronarias y periféricas. Disminuye la resistencia vascular periférica total, reduciendo la poscarga y la presión arterial. Carece prácticamente de efecto depresor sobre el nodo sinusal o contractilidad cardíaca a concentraciones clínicas terapéuticas.',
      targetReceptor: 'Canales de Calcio voltaje-dependientes tipo L (Cav1.2)',
      keyPoints: ['Eficacia hipotensora potente sin alterar la conducción AV cardíaca', 'Uso seguro en asma y diabetes (no causa broncoespasmo ni altera glucemia)', 'PROHIBIDO EL USO SUBLINGUAL DE CÁPSULAS RÁPIDAS en emergencias hipertensivas por riesgo de ictus e infarto por robo coronario']
    },
    indications: {
      approved: ['Hipertensión arterial esencial (formulación OROS de liberación prolongada)', 'Angina de pecho crónica estable y angina vasoespástica de Prinzmetal', 'Fenómeno de Raynaud primario y secundario'],
      offLabel: ['Tocolítico en amenaza de parto prematuro']
    },
    dosageAndPosology: {
      adults: 'Hipertensión / Angina: Iniciar con 30 mg una vez al día con la formulación OROS por la mañana, titulando hasta 60 a 90 mg/día. Tocolisis en parto pretérmino: 20 mg oral inicial, luego 10-20 mg cada 6-8 horas.',
      pediatric: '0.25 a 0.5 mg/kg/día con formulación retard bajo especialista.',
      renalAdjustment: 'No precisa ajuste en fallo renal.',
      hepaticAdjustment: 'Reducir dosis inicial a la mitad en cirrosis hepática.',
      routes: ['Oral'],
      administrationNotes: 'Ingerir enteros los comprimidos OROS sin masticar ni fraccionar. La matriz plástica insoluble puede aparecer en las heces sin que afecte la absorción.'
    },
    safety: {
      contraindications: ['Shock cardiogénico o estenosis aórtica severa', 'Angina inestable o infarto agudo de miocardio reciente (< 1 mes)', 'Uso de formulaciones de acción rápida para hipertensión'],
      warnings: ['Edema maleolar bilateral periférico por vasodilatación precapilar dependiente de dosis (no responde a diuréticos)', 'Cefalea y rubor facial inicial'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Fármaco de primera línea en tocolisis obstétrica y preeclampsia.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Edema periférico en tobillos', 'Cefalea vascular pulsátil', 'Rubor facial y sofocos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Palpitaciones y taquicardia refleja', 'Mareos', 'Estreñimiento'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hipotensión brusca con isquemia miocárdica (con cápsulas rápidas)', 'Hiperplasia gingival'] }
    ],
    interactions: [
      { id: 'int-nif-1', interactingSubstance: 'Zumo de Pomelo (Grapefruit juice)', severity: 'Mayor', clinicalEffect: 'Inhibe el CYP3A4 intestinal duplicando los niveles plasmáticos de nifedipino con hipotensión severa.', recommendation: 'Evitar el consumo de pomelo durante el tratamiento.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-verapamilo',
    name: 'Verapamilo',
    brandNames: ['Manidon', 'Isoptin', 'Veramex'],
    atcCode: 'C08DA01',
    description: 'Bloqueador de canales de calcio no dihidropiridínico (fenilalquilamina) con marcada selectividad miocárdica sobre el nodo AV y propiedades antiarrítmicas de clase IV.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-vrp-1', form: 'Comprimidos recubiertos y retard', concentration: '80 mg, 120 mg y 240 mg retard', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-vrp-2', form: 'Ampollas inyectables IV', concentration: '5 mg / 2 ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Cloruro sódico' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo de los canales de calcio tipo L miocárdicos con enlentecimiento de la conducción auriculoventricular y efecto inotrópico negativo.',
      detailed: 'Se une al dominio transmembrana de los canales lentos de calcio en las células marcapasos del nodo sinusal y nodo AV, enlenteciendo la despolarización diastólica de fase 4 y prolongando el período refractario efectivo del nodo AV. Ejerce una potente reducción de la contractilidad miocárdica.',
      targetReceptor: 'Canales de Calcio tipo L en nodo AV y miocardio ventricular',
      keyPoints: ['Antiarrítmico de elección para revertir taquicardia paroxística supraventricular (TPSV)', 'Control de frecuencia ventricular en fibrilación auricular', 'CONTRAINDICADO en insuficiencia cardíaca sistólica por efecto inotrópico negativo severo']
    },
    indications: {
      approved: ['Control agudo y profilaxis de taquicardia paroxística supraventricular (TPSV)', 'Control de respuesta ventricular en fibrilación auricular y flutter auricular', 'Angina de pecho crónica y vasoespástica de Prinzmetal', 'Hipertensión arterial esencial'],
      offLabel: ['Profilaxis de cefalea en racimos (cluster headache) a dosis altas']
    },
    dosageAndPosology: {
      adults: 'TPSV aguda: 5 a 10 mg IV lenta en 2 minutos (repetible 10 mg a los 30 min si no revierte). Hipertensión / Angina: 120 a 240 mg/día en formulación retard o 80 mg cada 8 horas (máximo 480 mg/día).',
      pediatric: 'TPSV pediátrica: 0.1 a 0.2 mg/kg IV lenta bajo estricta monitorización (evitar en < 1 año por colapso cardiovascular).',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis al 25-30% por marcado metabolismo de primer paso hepático.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Vía IV lenta con monitorización continua de ECG y presión arterial.'
    },
    safety: {
      contraindications: ['Insuficiencia cardíaca congestiva con fracción de eyección reducida', 'Bloqueo auriculoventricular de 2º o 3º grado o disfunción sinusal sin marcapasos', 'Fibrilación auricular con vía accesoria (Síndrome de Wolff-Parkinson-White) por riesgo de fibrilación ventricular'],
      warnings: ['Estreñimiento pertinaz en ancianos', 'Bradicardia y bloqueo AV al asociar con betabloqueantes'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Usar con cautela.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Estreñimiento marcado (inhibición de motilidad cólica)', 'Mareos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Bradicardia sinusal', 'Hipotensión', 'Edema maleolar'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Bloqueo auriculoventricular completo', 'Edema pulmonar agudo', 'Hepatotoxicidad'] }
    ],
    interactions: [
      { id: 'int-vrp-1', interactingSubstance: 'Betabloqueantes (Metoprolol, Atenolol)', severity: 'Contraindicada', clinicalEffect: 'Bradicardia extrema, paro sinusal y shock cardiogénico.', recommendation: 'Evitar asociación intravenosa; vigilar estrechamente por vía oral.' },
      { id: 'int-vrp-2', interactingSubstance: 'Digoxina', severity: 'Mayor', clinicalEffect: 'Aumenta los niveles séricos de digoxina en un 50-70% por inhibición de la glicoproteína P.', recommendation: 'Reducir la dosis de digoxina a la mitad y vigilar litemia/digoxinemia.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-captopril',
    name: 'Captopril',
    brandNames: ['Capoten', 'Cesplon', 'Captopril'],
    atcCode: 'C09AA01',
    description: 'El primer inhibidor de la enzima convertidora de angiotensina (IECA) sintetizado, con grupo sulfhidrilo y acción rápida. Fármaco histórico para urgencias hipertensivas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-cap-1', form: 'Comprimidos orales ranurados', concentration: '25 mg, 50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos', excipients: 'Lactosa monohidrato, ácido esteárico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición competitiva de la enzima convertidora de angiotensina (ECA) y disminución de la degradación de bradicinina.',
      detailed: 'Bloquea la ECA impidiendo la transformación de angiotensina I en angiotensina II (potente vasoconstrictor). Esto disminuye la resistencia vascular periférica, la secreción de aldosterona y la precarga y poscarga cardíacas. Al inhibir la cininasa II, acumula bradicinina vasodilatadora en los tejidos, responsable a su vez de la tos seca refleja característica de los IECAs.',
      targetReceptor: 'Enzima Convertidora de Angiotensina (ECA / Cininasa II)',
      keyPoints: ['Acción rápida (inicio en 15 a 30 minutos)', 'Semivida corta (requiere administración 2 o 3 veces al día en tratamientos crónicos)', 'Tos seca pertinaz e hiperpotasemia']
    },
    indications: {
      approved: ['Hipertensión arterial esencial y renovascular', 'Insuficiencia cardíaca congestiva crónica', 'Infarto agudo de miocardio (mejora de supervivencia post-IAM con disfunción ventricular)', 'Nefropatía diabética en diabetes mellitus tipo 1'],
      offLabel: ['Urgencia hipertensiva sintomática']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: Iniciar con 25 a 50 mg/día divididos en 2 tomas; titular hasta 50 mg cada 12 horas (máx 150 mg/día). Insuficiencia cardíaca: Iniciar con 6.25 a 12.5 mg cada 8 horas.',
      pediatric: '0.3 mg/kg/día en 3 tomas.',
      renalAdjustment: 'FG 10-50 ml/min: administrar el 75% de la dosis. FG < 10 ml/min: 50% de la dosis.',
      hepaticAdjustment: 'No precisa ajuste (es un fármaco activo directo, no profármaco).',
      routes: ['Oral', 'Sublingual'],
      administrationNotes: 'Tomar 1 hora antes de las comidas (los alimentos reducen su absorción un 30-40%).'
    },
    safety: {
      contraindications: ['Antecedente de angioedema relacionado con IECAs', 'Segundo y tercer trimestre del embarazo (fetotoxicidad letal)', 'Estenosis bilateral de la arteria renal'],
      warnings: ['Angioedema de laringe, lengua y glotis potencialmente mortal', 'Tos seca irritativa persistente mediada por bradicinina (cesa tras suspender el fármaco)'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado absolutamente en 2º y 3º trimestre: oligoamnios, hipoplasia pulmonar fetal y anuria neonatal.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Toxicidad fetal grave y muerte neonatal si se utiliza durante el segundo o tercer trimestre del embarazo.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Tos seca irritativa persistente'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hipotensión ortostática', 'Disgeusia (pérdida o alteración del gusto por grupo sulfhidrilo)', 'Hiperpotasemia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Angioedema de vías aéreas superiores', 'Insuficiencia renal aguda', 'Neutropenia'] }
    ],
    interactions: [
      { id: 'int-cap-1', interactingSubstance: 'Suplementos de potasio y Espironolactona', severity: 'Mayor', clinicalEffect: 'Hiperpotasemia severa con riesgo de paro cardíaco en diástole.', recommendation: 'Monitorizar potasio sérico y ajustar diurético.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-candesartan',
    name: 'Candesartán Cilexetilo',
    brandNames: ['Atacand', 'Parapres', 'Blopress'],
    atcCode: 'C09CA06',
    description: 'Antagonista de receptores de angiotensina II (ARA-II) con la mayor afinidad y disociación más lenta del receptor AT1 de toda su familia química.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-can-1', form: 'Comprimidos ranurados', concentration: '8 mg, 16 mg y 32 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos', excipients: 'Lactosa monohidrato, almidón' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo insuperable y altamente selectivo de los receptores AT1 de angiotensina II con disociación lenta.',
      detailed: 'Profármaco que se hidroliza durante la absorción gastrointestinal a candesartán activo. Se une con afinidad 10.000 veces superior a los receptores AT1 que a los AT2. Su cinética de unión es de carácter no competitivo e insuperable, lo que garantiza un control tensional continuo y uniforme durante las 24 horas completas.',
      targetReceptor: 'Receptor de Angiotensina II subtipo AT1',
      keyPoints: ['Mayor potencia y duración de bloqueo AT1 que losartán', 'Beneficio comprobado en reducción de hospitalización por insuficiencia cardíaca (estudios CHARM)', 'Excelente tolerancia con tasa de tos similar a placebo']
    },
    indications: {
      approved: ['Hipertensión arterial esencial en adultos y niños ≥ 6 años', 'Insuficiencia cardíaca crónica con fracción de eyección reducida (alternativa o añadido a betabloqueantes)']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: 8 a 16 mg una vez al día, titulando hasta 32 mg/día en monodosis. Insuficiencia cardíaca: Iniciar con 4 mg/día, duplicando cada 2 semanas hasta 32 mg/día.',
      pediatric: 'Niños ≥ 6 años (< 50 kg): 4 a 8 mg/día; ≥ 50 kg: 8 a 16 mg/día.',
      renalAdjustment: 'Iniciar con 4 mg/día si ClCr < 30 ml/min.',
      hepaticAdjustment: 'Iniciar con 4 mg/día en insuficiencia hepática leve-moderada. Contraindicado en grave.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con o sin alimentos a la misma hora.'
    },
    safety: {
      contraindications: ['2º y 3º trimestre del embarazo', 'Insuficiencia hepática grave o colestasis', 'Uso con aliskireno en diabéticos'],
      warnings: ['Hiperpotasemia y deterioro de función renal en estenosis arterial renal'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Fetotóxico y teratógeno en 2º y 3º trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Preferir alternativas.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Mareos', 'Cefalea', 'Infección respiratoria alta', 'Hipotensión'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Angioedema', 'Hiperpotasemia severa', 'Insuficiencia renal aguda'] }
    ],
    interactions: [
      { id: 'int-can-1', interactingSubstance: 'AINEs', severity: 'Moderada', clinicalEffect: 'Atenuación del efecto hipotensor y riesgo renal.', recommendation: 'Vigilar creatinina y presión arterial.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-valsartan',
    name: 'Valsartán',
    brandNames: ['Diovan', 'Vals', 'Kalpress', 'Tareg'],
    atcCode: 'C09CA03',
    description: 'Antagonista de receptores de angiotensina II de gran respaldo clínico en insuficiencia cardíaca y post-infarto agudo de miocardio.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-val-1', form: 'Comprimidos recubiertos con película', concentration: '80 mg, 160 mg y 320 mg', route: 'Oral', packaging: 'Caja x 28 comprimidos', excipients: 'Celulosa microcristalina, crospovidona' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo competitivo selectivo del receptor AT1 vascular y cardíaco.',
      detailed: 'Inhibe las acciones vasoconstrictoras y secretoras de aldosterona de la angiotensina II. En insuficiencia cardíaca y postinfarto reduce la remodelación patológica del ventrículo izquierdo y la fibrosis miocárdica (estudios Val-HeFT y VALIANT).',
      targetReceptor: 'Receptor de Angiotensina II tipo 1 (AT1)',
      keyPoints: ['No inhibe la cininasa II (sin tos por bradicinina)', 'Fármaco base de la combinación sacubitrilo/valsartán (ARNI)', 'Eliminación predominantemente biliar (70-80%)']
    },
    indications: {
      approved: ['Hipertensión arterial esencial en adultos y niños ≥ 6 años', 'Insuficiencia cardíaca con fracción de eyección reducida', 'Postinfarto agudo de miocardio reciente con disfunción sistólica']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: 80 a 160 mg una vez al día (máx 320 mg/día). Insuficiencia cardíaca: Iniciar con 40 mg cada 12 horas, titulando hasta 160 mg cada 12 horas. Postinfarto: Iniciar a las 12 horas post-IAM con 20 mg cada 12 horas.',
      pediatric: 'Niños ≥ 6 años: 1.3 mg/kg una vez al día.',
      renalAdjustment: 'No precisa ajuste si ClCr > 10 ml/min.',
      hepaticAdjustment: 'No superar 80 mg/día en insuficiencia hepática leve-moderada.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con agua, con o sin alimentos.'
    },
    safety: {
      contraindications: ['2º y 3º trimestre del embarazo', 'Insuficiencia hepática grave o cirrosis biliar'],
      warnings: ['Hiperpotasemia e hipotensión sintomática'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno probado.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Mareos ortostáticos', 'Hipotensión', 'Hiperpotasemia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Deterioro agudo de la función renal', 'Angioedema'] }
    ],
    interactions: [
      { id: 'int-val-1', interactingSubstance: 'Litio', severity: 'Mayor', clinicalEffect: 'Aumento de concentraciones séricas de litio con toxicidad.', recommendation: 'Monitorizar litemia.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 2 DIURÉTICOS ---
  {
    id: 'med-hidroclorotiazida',
    name: 'Hidroclorotiazida (HCTZ)',
    brandNames: ['Esidrex', 'Hidrosaluretil', 'Microzide'],
    atcCode: 'C03AA03',
    description: 'Diurético benzotiazídico de referencia clínica para el tratamiento de primera línea de la hipertensión arterial.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-diureticos', 'c-antihipertensivos'],
    presentations: [
      { id: 'p-hct-1', form: 'Comprimidos ranurados', concentration: '12.5 mg, 25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición del cotransportador Na+/Cl- (NCC) en el túbulo contorneado distal renal.',
      detailed: 'Bloquea el transportador de sodio y cloro en la membrana luminal del túbulo contorneado distal, incrementando la excreción urinaria de sodio, cloro y agua. A largo plazo induce vasodilatación arteriolar directa reduciendo la resistencia vascular periférica. Aumenta la reabsorción tubular de calcio.',
      targetReceptor: 'Cotransportador Na+/Cl- sensible a tiazidas (NCCT)',
      keyPoints: ['Eficacia diurética disminuye notablemente si la TFG es < 30 ml/min', 'Reduce la calciuria (útil en prevención de nefrolitiasis por oxalato cálcico)', 'Efectos metabólicos: hipopotasemia, hiperuricemia (gota) e hiperglucemia']
    },
    indications: {
      approved: ['Hipertensión arterial esencial (en monoterapia o asociado a IECA/ARA-II)', 'Edema asociado a insuficiencia cardíaca, síndrome nefrótico o cirrosis', 'Prevención de litiasis renal cálcica idiopática recurrente', 'Diabetes insípida nefrogénica'],
      offLabel: ['Osteoporosis senil (reducción de pérdida ósea de calcio)']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: 12.5 a 25 mg una vez al día por la mañana (dosis mayores de 50 mg no aumentan eficacia tensional pero sí efectos metabólicos). Edema: 25 a 50 mg/día.',
      pediatric: '1 a 2 mg/kg/día en 1 o 2 tomas.',
      renalAdjustment: 'Ineficaz si TFG < 30 ml/min (usar diuréticos de asa en su lugar).',
      hepaticAdjustment: 'Usar con cautela por riesgo de hipopotasemia que desencadene encefalopatía.',
      routes: ['Oral'],
      administrationNotes: 'Tomar por la mañana con el desayuno para evitar nicturia.'
    },
    safety: {
      contraindications: ['Anuria', 'Insuficiencia renal severa (ClCr < 30 ml/min)', 'Hipopotasemia o hiponatremia refractaria', 'Enfermedad de Addison'],
      warnings: ['Gota aguda por retención de ácido úrico', 'Fotosensibilidad y aumento del riesgo de cáncer cutáneo no melanoma'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Puede reducir la perfusión uteroplacentaria.',
      lactation: 'Contraindicado',
      lactationNotes: 'Inhibe la lactogénesis.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipopotasemia', 'Hiperuricemia asintomática', 'Aumento de colesterol y triglicéridos'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiponatremia', 'Hipomagnesemia', 'Hiperglucemia en diabéticos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Pancreatitis aguda', 'Glaucoma agudo de ángulo cerrado', 'Agranulocitosis'] }
    ],
    interactions: [
      { id: 'int-hct-1', interactingSubstance: 'Digoxina', severity: 'Mayor', clinicalEffect: 'La hipopotasemia inducida por tiazidas desencadena arritmias cardíacas fatales por intoxicación digitálica.', recommendation: 'Monitorizar potasio sérico y mantenerlo > 4 mEq/L.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clortalidona',
    name: 'Clortalidona',
    brandNames: ['Higrotona', 'Hygroton', 'Thalitone'],
    atcCode: 'C03BA04',
    description: 'Diurético tiazida-like ftalimídico de acción ultraprolongada (semivida de 40 a 60 horas) con gran evidencia de reducción de eventos cardiovasculares (estudio ALLHAT).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-diureticos', 'c-antihipertensivos'],
    presentations: [
      { id: 'p-clo-1', form: 'Comprimidos orales ranurados', concentration: '25 mg y 50 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Celulosa microcristalina, carboximetilalmidón' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición del cotransportador Na+/Cl- en el túbulo distal con prolongada fijación a la anhidrasa carbónica eritrocitaria.',
      detailed: 'Mecanismo similar a la hidroclorotiazida pero con una fijación masiva a los glóbulos rojos, que actúan como un reservorio circulante de liberación lenta. Confiere un control tensional sostenido de hasta 48-72 horas, siendo 1.5 a 2 veces más potente que la hidroclorotiazida miligramo a miligramo.',
      targetReceptor: 'Cotransportador Na+/Cl- del túbulo distal',
      keyPoints: ['Mayor potencia y duración que hidroclorotiazida', 'Fármaco diurético de referencia en las guías de hipertensión del ACC/AHA', 'Mayor riesgo de hipopotasemia que HCTZ']
    },
    indications: {
      approved: ['Hipertensión arterial esencial', 'Insuficiencia cardíaca congestiva con edemas periféricos', 'Edemas de origen nefrótico o ascítico']
    },
    dosageAndPosology: {
      adults: 'Hipertensión: Iniciar con 12.5 mg a 25 mg una vez al día por la mañana (o 25 mg en días alternos). Dosis máxima: 50 mg/día. Edemas: 50 a 100 mg/día.',
      pediatric: '1 a 2 mg/kg/día.',
      renalAdjustment: 'Ineficaz si TFG < 30 ml/min.',
      hepaticAdjustment: 'Usar con cautela.',
      routes: ['Oral'],
      administrationNotes: 'Tomar por la mañana con el desayuno.'
    },
    safety: {
      contraindications: ['Anuria', 'Insuficiencia renal o hepática grave', 'Hipopotasemia o hiponatremia rebelde'],
      warnings: ['Monitoreo estricto de electrolitos séricos (potasio y sodio) en el primer mes de tratamiento'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Evitar en gestación.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipopotasemia', 'Hiperuricemia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiponatremia', 'Mareo ortostático', 'Intolerancia a la glucosa'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Trombocitopenia', 'Arritmias cardíacas por hipopotasemia'] }
    ],
    interactions: [
      { id: 'int-clo-1', interactingSubstance: 'Litio', severity: 'Mayor', clinicalEffect: 'Toxicidad grave por litio por disminución de su aclaramiento renal.', recommendation: 'Evitar combinación o monitorizar litemia.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-furosemida',
    name: 'Furosemida',
    brandNames: ['Seguril', 'Lasix', 'Furosemida'],
    atcCode: 'C03CA01',
    description: 'Diurético de asa sulfamoilantranílico de techo alto con acción diurética potente, rápida y eficaz incluso con tasas de filtrado glomerular extremadamente bajas (< 30 ml/min).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-diureticos'],
    presentations: [
      { id: 'p-fur-1', form: 'Comprimidos ranurados', concentration: '40 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-fur-2', form: 'Ampollas inyectables IV/IM', concentration: '20 mg / 2 ml y 250 mg / 25 ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Cloruro sódico, hidróxido sódico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición del cotransportador Na+/K+/2Cl- (NKCC2) en la rama ascendente gruesa del asa de Henle.',
      detailed: 'Bloquea el sitio de fijación del ion cloro en el transportador luminal NKCC2, inhibiendo la reabsorción del 25% de la carga filtrada de sodio y cloro. Abolla el gradiente hiperosmolar medular renal impidiendo la concentración de orina. Aumenta marcadamente la excreción de calcio y magnesio (a diferencia de las tiazidas) y genera vasodilatación venosa inmediata mediada por prostaglandinas renales.',
      targetReceptor: 'Cotransportador Na+/K+/2Cl- luminal (NKCC2)',
      keyPoints: ['Diurético de "techo alto" (a mayor dosis, mayor diuresis)', 'Acción inmediata en 5 minutos por vía IV y 30-60 min oral', 'Eficaz en insuficiencia renal avanzada con ClCr < 20 ml/min y en hipercalcemia aguda']
    },
    indications: {
      approved: ['Edema agudo de pulmón cardiogénico (emergencia médica)', 'Edema por insuficiencia cardíaca congestiva crónica, cirrosis ascítica y síndrome nefrótico', 'Insuficiencia renal aguda o crónica con oliguria', 'Crisis hipertensivas e hipercalcemia sintomática grave'],
      offLabel: ['Hiperpotasemia aguda']
    },
    dosageAndPosology: {
      adults: 'Edema agudo de pulmón: 20 a 40 mg IV en bolo lento directo (repetir 40-80 mg a la hora si persiste congestión). Edema crónico oral: 20 a 80 mg/día en 1 o 2 tomas (titulando en fallo renal hasta 250-500 mg/día).',
      pediatric: 'Oral: 1 a 2 mg/kg/día; IV: 0.5 a 1 mg/kg/dosis.',
      renalAdjustment: 'Requiere dosis progresivamente más altas en insuficiencia renal para alcanzar el sitio tubular activo.',
      hepaticAdjustment: 'Asociar obligatoriamente a espironolactona en ascitis cirrótica para prevenir hipopotasemia y coma hepático.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'Velocidad de inyección IV no superior a 4 mg/minuto por riesgo de ototoxicidad y sordera transitoria o permanente.'
    },
    safety: {
      contraindications: ['Anuria que no responde a dosis de prueba', 'Hipopotasemia o hiponatremia graves', 'Hipersensibilidad a sulfamidas', 'Encefalopatía hepática preexistente'],
      warnings: ['Ototoxicidad (tinnitus, hipoacusia) con dosis altas o infusión rápida', 'Depleción de volumen con deshidratación e hipotensión ortostática'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Pasa a la placenta; monitorizar crecimiento fetal.',
      lactation: 'Contraindicado',
      lactationNotes: 'Inhibe la lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hipopotasemia', 'Hipomagnesemia', 'Deshidratación y hemoconcentración'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperuricemia asintomática', 'Hipocalcemia', 'Hipotensión'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Ototoxicidad y sordera neurosensorial irreversible', 'Nefritis intersticial alérgica', 'Colapso circulatorio'] }
    ],
    interactions: [
      { id: 'int-fur-1', interactingSubstance: 'Antibióticos Aminoglucósidos (Gentamicina, Amikacina)', severity: 'Contraindicada', clinicalEffect: 'Potenciación sinérgica de ototoxicidad y nefrotoxicidad irreversibles con sordera permanente.', recommendation: 'Evitar combinación o controlar audiometría y función renal.' },
      { id: 'int-fur-2', interactingSubstance: 'AINEs (Ibuprofeno, Indometacina)', severity: 'Mayor', clinicalEffect: 'Los AINEs inhiben las prostaglandinas renales vasodilatadoras anulando el efecto diurético de la furosemida.', recommendation: 'Evitar AINEs en pacientes con insuficiencia cardíaca edematosa.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-manitol',
    name: 'Manitol',
    brandNames: ['Manitol al 10% y 20% Braun', 'Osmitrol'],
    atcCode: 'B05BC01',
    description: 'Poliol diurético osmótico no metabolizable que expande el volumen intravascular y extrae agua libre del parénquima cerebral y humor acuoso ocular.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-diureticos'],
    presentations: [
      { id: 'p-man-1', form: 'Solución para perfusión intravenosa al 20%', concentration: '200 g / L (20%) en frascos de 250 ml y 500 ml', route: 'Intravenosa', packaging: 'Frasco de infusión de 250 ml (50 g de manitol)', excipients: 'Agua para inyectables (osmolaridad: 1100 mOsm/L)' }
    ],
    mechanismOfAction: {
      summary: 'Elevación de la presión osmótica plasmática y del filtrado glomerular tubular, impidiendo la reabsorción pasiva de agua.',
      detailed: 'Sustancia osmóticamente activa que no atraviesa la barrera hematoencefálica intacta. Al infundirse IV, crea un gradiente osmótico transendotelial que extrae agua del parénquima cerebral hacia el torrente vascular, reduciendo rápidamente el edema cerebral y la presión intracraneal (PIC) en 15 a 30 minutos. En el riñón se filtra libremente en el glomérulo sin reabsorberse, reteniendo agua en la luz tubular e induciendo diuresis acuosa masiva.',
      targetReceptor: 'Gradiente osmótico físico intravascular y tubular',
      keyPoints: ['Efecto en 15-30 minutos con duración de 4 a 6 horas', 'Tratamiento de emergencia de la hipertensión intracraneal y glaucoma agudo', 'Riesgo de sobrecarga de volumen aguda inicial y edema de pulmón en cardiópatas']
    },
    indications: {
      approved: ['Reducción urgente de la presión intracraneal en edema cerebral agudo y traumatismo craneoencefálico', 'Reducción de la presión intraocular elevada en crisis de glaucoma de ángulo cerrado agudo', 'Promoción de la eliminación urinaria de tóxicos en intoxicaciones agudas'],
      offLabel: ['Profilaxis de insuficiencia renal aguda en cirugía de pinzamiento aórtico']
    },
    dosageAndPosology: {
      adults: 'Hipertensión intracraneal / Glaucoma: 0.25 a 1 g/kg IV en infusión rápida durante 20 a 30 minutos (habitualmente 250 ml al 20% en 30 min). Puede repetirse cada 6-8 horas monitorizando la osmolaridad sérica (mantener < 320 mOsm/kg).',
      pediatric: '0.25 a 0.5 g/kg IV en 30 minutos.',
      renalAdjustment: 'Contraindicado en anuria establecida que no responde a dosis de prueba.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intravenosa'],
      administrationNotes: 'Vía IV exclusiva con filtro en la línea de infusión (a bajas temperaturas puede cristalizar; calentar ligeramente si se observan cristales antes de infundir).'
    },
    safety: {
      contraindications: ['Anuria bien establecida por necrosis tubular aguda', 'Insuficiencia cardíaca congestiva severa o edema pulmonar activo (la expansión osmótica inicial causa edema masivo)', 'Hemorragia intracraneal activa no intervenida (salvo durante craneotomía)'],
      warnings: ['Deshidratación hipertónica grave e insuficiencia renal inducida por hiperosmolaridad si la osmolaridad sérica supera 320 mOsm/kg'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uso en emergencias neuroquirúrgicas.',
      lactation: 'Compatible',
      lactationNotes: 'Uso hospitalario agudo.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Deshidratación hipernatrémica', 'Sed intensa', 'Cefalea por hipotensión intracraneal'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Edema pulmonar inicial por sobrecarga de volumen', 'Tromboflebitis local', 'Náuseas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Insuficiencia renal osmótica aguda', 'Colapso hemodinámico'] }
    ],
    interactions: [
      { id: 'int-man-1', interactingSubstance: 'Furosemida IV', severity: 'Moderada', clinicalEffect: 'Diuresis masiva sinérgica con riesgo de deshidratación severa y shock hipovolémico.', recommendation: 'Monitorización horaria de balance hidroelectrolítico.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-espironolactona',
    name: 'Espironolactona',
    brandNames: ['Aldactone', 'Aldactazine', 'Spiroctan'],
    atcCode: 'C03DA01',
    description: 'Antagonista competitivo esteroideo selectivo de la aldosterona y diurético ahorrador de potasio con gran eficacia antifibrótica y de reducción de mortalidad en insuficiencia cardíaca.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-diureticos', 'c-antihipertensivos'],
    presentations: [
      { id: 'p-esp-1', form: 'Comprimidos orales ranurados', concentration: '25 mg, 50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 20 y 50 comprimidos', excipients: 'Lactosa monohidrato, sulfato cálcico' }
    ],
    mechanismOfAction: {
      summary: 'Antagonismo competitivo del receptor mineralocorticoide citosólico en el túbulo colector renal.',
      detailed: 'Bloquea los receptores intracelulares de aldosterona en las células principales del túbulo contorneado distal y túbulo colector. Impide la transcripción de proteínas transportadoras (canales de sodio epiteliales ENaC y bomba Na+/K+ ATPasa basolateral), inhibiendo la reabsorción de sodio y reteniendo potasio e hidrogeniones. Además, ejerce un potente efecto antagonista en receptores androgénicos y progestágenos.',
      targetReceptor: 'Receptor Mineralocorticoide (MR) y Receptor Androgénico (bloqueo secundario)',
      keyPoints: ['Diurético de elección en ascitis cirrótica (hiperaldosteronismo secundario)', 'Reduce mortalidad cardiovascular en insuficiencia cardíaca (estudio RALES)', 'Ginecomastia dolorosa en varones (hasta en 10-15% de casos) por efecto antiandrogénico']
    },
    indications: {
      approved: ['Insuficiencia cardíaca crónica con fracción de eyección reducida (clases II-IV NYHA)', 'Ascitis y edemas secundarios a cirrosis hepática', 'Hipertensión arterial resistente (cuarto fármaco de elección)', 'Hiperaldosteronismo primario (Síndrome de Conn)'],
      offLabel: ['Acné hormonal e hirsutismo en mujeres con síndrome de ovario poliquístico']
    },
    dosageAndPosology: {
      adults: 'Insuficiencia cardíaca: Iniciar con 25 mg una vez al día (o 12.5 mg si hay riesgo de hiperpotasemia); titular hasta 50 mg/día. Ascitis cirrótica: 100 a 400 mg/día en dosis matutina única (habitualmente combinada con furosemida en ratio 100:40). Hipertensión resistente: 25 a 50 mg/día.',
      pediatric: '1 a 3 mg/kg/día en 1 o 2 tomas.',
      renalAdjustment: 'Contraindicado absolutamente si TFG < 30 ml/min o potasio sérico > 5.0 mEq/L.',
      hepaticAdjustment: 'Dosis plena requerida en cirrosis hepática.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con las comidas por la mañana.'
    },
    safety: {
      contraindications: ['Hiperpotasemia basal (> 5.0 mEq/L)', 'Insuficiencia renal severa (TFG < 30 ml/min)', 'Enfermedad de Addison', 'Uso concomitante con eplerenona u otros diuréticos ahorradores de potasio'],
      warnings: ['Hiperpotasemia severa mortal: realizar ionograma sérico a la semana, al mes y cada 3-6 meses'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Efecto antiandrogénico puede feminizar fetos masculinos.',
      lactation: 'Compatible',
      lactationNotes: 'Baja excreción en leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hiperpotasemia', 'Ginecomastia dolorosa uni o bilateral en varones', 'Irregularidades menstruales en mujeres'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Disfunción eréctil', 'Somnolencia', 'Náuseas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Arritmias cardíacas ventriculares letales por hiperpotasemia', 'Acidosis metabólica hiperclorémica'] }
    ],
    interactions: [
      { id: 'int-esp-1', interactingSubstance: 'IECAs y ARA-II (Enalapril, Losartán)', severity: 'Mayor', clinicalEffect: 'Riesgo sinérgico crítico de hiperpotasemia mortal y fallo renal.', recommendation: 'Monitorización periódica estricta de potasio y creatinina.' },
      { id: 'int-esp-2', interactingSubstance: 'Suplementos de potasio o sustitutos de sal con cloruro potásico', severity: 'Contraindicada', clinicalEffect: 'Aporte exógeno de potasio en presencia de bloqueo de excreción renal que produce hiperpotasemia fulminante.', recommendation: 'Prohibir suplementos de potasio.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
