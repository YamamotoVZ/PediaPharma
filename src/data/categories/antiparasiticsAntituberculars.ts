import { Medication } from '../../types/pharmacy';

export const ANTIPARASITICS_ANTITUBERCULARS_MEDICATIONS: Medication[] = [
  // ==========================================
  // --- 4.5 ANTIPROTOZOARIOS Y ANTIPALÚDICOS ---
  // ==========================================
  {
    id: 'med-metronidazol',
    name: 'Metronidazol',
    brandNames: ['Flagyl', 'Metronidazol Normon', 'Metronidazol Braun', 'Rozex (tópico)'],
    atcCode: 'J01XD01 / P01AB01 / G01AF01',
    description: 'Antiprotozoario sintético y antibacteriano del grupo de los 5-nitroimidazoles con potente actividad bactericida frente a anaerobios obligados y protozoos microaerófilos mediante la generación de radicales libres citotóxicos.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antiprotozoarios', 'c-antibacterianos'],
    presentations: [
      { id: 'p-mtz-1', form: 'Comprimidos orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos', excipients: 'Almidón de trigo, povidona' },
      { id: 'p-mtz-2', form: 'Solución para perfusión IV', concentration: '500 mg / 100 ml (5 mg / ml)', route: 'Intravenosa', packaging: 'Frasco o bolsa de infusión de 100 ml', excipients: 'Cloruro sódico, fosfato disódico' },
      { id: 'p-mtz-3', form: 'Óvulos y crema vaginal', concentration: '500 mg por óvulo', route: 'Vaginal', packaging: 'Caja x 10 óvulos', excipients: 'Glicéridos semisintéticos' },
      { id: 'p-mtz-4', form: 'Gel y crema dérmica al 0.75%', concentration: '7.5 mg / g', route: 'Tópica', packaging: 'Tubo de 30 g', excipients: 'Alcohol bencílico, carbómero' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco activado selectivamente por reducción intracelular por la enzima ferredoxina o flavodoxina en microorganismos anaerobios; los metabolitos reducidos intermedios de vida corta rompen las hebras de ADN provocando muerte celular.',
      detailed: 'Los organismos aerobios carecen de transportadores de electrones con potencial redox suficientemente bajo para reducir el grupo nitro del metronidazol, lo que le confiere una selectividad antibacteriana y antiparasitaria exquisita contra anaerobios obligados (Bacteroides, Clostridium) y protozoos (Entamoeba histolytica, Trichomonas vaginalis, Giardia lamblia).',
      targetReceptor: 'ADN de organismos anaerobios y protozoos',
      keyPoints: ['Fármaco de elección para Amebiasis invasiva intestinal y Absceso hepático amebiano (tisular)', 'Tratamiento de elección para Tricomoniasis urogenital (tratar a la pareja sexual simultáneamente) y Giardiasis intestinal', 'EFECTO DISULFIRAM / ANTABÚS: la ingesta de alcohol provoca náuseas violently violentas, rubor, taquicardia y vómitos', 'Sabor metálico característico en la boca y oscurecimiento de la orina']
    },
    indications: {
      approved: [
        'Amebiasis invasiva intestinal (disentería amebiana) y extraintestinal (absceso hepático amebiano)',
        'Tricomoniasis urogenital por Trichomonas vaginalis en mujeres y hombres (uretritis y vaginitis)',
        'Giardiasis intestinal (enteritis por Giardia duodenalis / lamblia)',
        'Vaginosis bacteriana por Gardnerella vaginalis y anaerobios asociados',
        'Infecciones intraabdominales graves y abscesos peritoneales por Bacteroides fragilis (en combinación)',
        'Rosácea papulopustulosa facial (vía tópica gel al 0.75%)',
        'Gingivitis ulceronecrotizante aguda (GUNA) e infecciones periodontales odontógenas graves'
      ],
      offLabel: ['Enfermedad de Crohn perianal fistulizante']
    },
    dosageAndPosology: {
      adults: 'Amebiasis tisular / absceso hepático: 500 a 750 mg cada 8 horas por vía oral o IV durante 7 a 10 días (seguido obligatoriamente de un amebicida intraluminal como diloxanida). Tricomoniasis: 2 g por vía oral en dosis única (o 500 mg cada 12 h por 7 días; tratar a la pareja obligatoriamente). Giardiasis: 250 a 500 mg cada 8 horas por 5 a 7 días. Infecciones anaerobias IV: 500 mg cada 8 horas.',
      pediatric: 'Amebiasis: 35 a 50 mg/kg/día divididos en 3 tomas por 10 días; Giardiasis: 15 mg/kg/día divididos en 3 tomas por 5 días.',
      renalAdjustment: 'TFG < 10 ml/min: administrar el 50% de la dosis estándar; dializable en hemodiálisis.',
      hepaticAdjustment: 'Reducir la dosis al 50% en insuficiencia hepática grave (metabolismo hepático intensivo).',
      routes: ['Oral', 'Intravenosa', 'Vaginal', 'Tópica'],
      administrationNotes: 'EVITAR TOTALMENTE BEBIDAS ALCOHÓLICAS durante el tratamiento y hasta 48 horas después para evitar la reacción tipo disulfiram. Puede teñir la orina de color pardo-rojizo.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a derivados nitroimidazólicos', 'Consumo de alcohol durante el tratamiento y 48 horas posteriores', 'Primer trimestre del embarazo (salvo necesidad imperiosa)'],
      warnings: ['EFECTO DISULFIRAM: inhibe la aldehído deshidrogenasa; el consumo con alcohol genera acumulación de acetaldehído con cefalea pulsátil, náuseas, vómitos profusos y colapso circulatorio', 'Neurotoxicidad periférica y central (encefalopatía, ataxia y neuropatía sensitiva en tratamientos prolongados)'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Evitar en primer trimestre; seguro en segundo y tercer trimestre para amebiasis o tricomoniasis.',
      lactation: 'Precaución',
      lactationNotes: 'Pasa a leche materna y confiere sabor amargo; si se usa dosis única de 2 g, suspender lactancia 24 horas.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Sabor amargo o metálico característico en la boca', 'Náuseas y anorexia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Cefalea y mareo', 'Molestias epigástricas y vómitos', 'Oscurecimiento inocuo de la orina (color rojizo-marrón)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Encefalopatía y convulsiones con ataxia', 'Neuropatía periférica sensitiva persistente', 'Pancreatitis aguda', 'Reacción disulfiram grave con colapso'] }
    ],
    interactions: [
      { id: 'int-mtz-1', interactingSubstance: 'Alcohol etílico / Medicamentos con alcohol', severity: 'Contraindicada', clinicalEffect: 'Inhibición de aldehído deshidrogenasa: reacción tipo disulfiram severa con taquicardia, hipotensión, náuseas y rubor facial intenso.', recommendation: 'Abstención estricta de alcohol hasta 48 horas tras la última dosis.' },
      { id: 'int-mtz-2', interactingSubstance: 'Warfarina y derivados cumarínicos', severity: 'Mayor', clinicalEffect: 'Inhibición del metabolismo de warfarina con duplicación de semivida y riesgo hemorrágico crítico.', recommendation: 'Reducir la dosis de warfarina y controlar INR frecuentemente.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-diloxanida',
    name: 'Furoato de Diloxanida (Antiamebiano Luminal)',
    brandNames: ['Furamide', 'Entamide', 'Diloxanide Furoate'],
    atcCode: 'P01AC01',
    description: 'Antiamebiano luminal de contacto directo de elección mundial para erradicar quistes asintomáticos de Entamoeba histolytica en la luz colónica y consolidar el tratamiento de la amebiasis tisular tras metronidazol.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antiprotozoarios'],
    presentations: [
      { id: 'p-dlx-1', form: 'Comprimidos orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja o frasco x 30 comprimidos', excipients: 'Almidón de maíz, lactosa' }
    ],
    mechanismOfAction: {
      summary: 'El furoato de diloxanida es un éster que en la luz intestinal se hidroliza parcialmente liberando diloxanida libre, la cual ejerce una potente acción amebicida de contacto directo sobre trofozoítos y previene la formación y liberación de quistes.',
      detailed: 'Actúa casi exclusivamente en la luz intestinal (amebicida intraluminal). La fracción absorbida es metabolizada a glucurónido y rápidamente excretada por orina sin toxicidad sistémica.',
      targetReceptor: 'Trofozoítos luminales y quistes de Entamoeba histolytica',
      keyPoints: ['Fármaco de elección para portadores asintomáticos de quistes de Entamoeba histolytica (evita diseminación comunitaria)', 'COMPLEMENTO OBLIGATORIO tras metronidazol en amebiasis invasiva o absceso hepático (metronidazol mata trofozoítos tisulares pero no erradica quistes luminales)', 'Excelente perfil de tolerancia clínica']
    },
    indications: {
      approved: [
        'Amebiasis intestinal asintomática (portadores crónicos o eliminadores de quistes de Entamoeba histolytica)',
        'Erradicación luminal obligatoria tras el tratamiento con metronidazol de la amebiasis intestinal invasiva o del absceso hepático amebiano'
      ]
    },
    dosageAndPosology: {
      adults: '500 mg cada 8 horas (3 veces al día) por vía oral durante 10 días consecutivos inmediatamente después de las comidas.',
      pediatric: 'Niños y adolescentes: 20 mg/kg/día por vía oral divididos en 3 tomas (cada 8 horas) durante 10 días.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No suele requerir ajuste.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con o inmediatamente tras las comidas para reducir la flatulencia y molestias digestivas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad al furoato de diloxanida', 'Embarazo (primer trimestre)'],
      warnings: ['No es eficaz en monoterapia para absceso hepático amebiano ni amebiasis invasiva sintomática (requiere metronidazol previo)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en primer trimestre; usar con precaución en segundo y tercer trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Datos limitados; suspender lactancia durante el tratamiento si es factible.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Flatulencia y distensión abdominal (efecto más común)'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y pirosis', 'Cólicos abdominales leves', 'Diarrea transitoria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Urticaria y prurito cutáneo'] }
    ],
    interactions: [
      { id: 'int-dlx-1', interactingSubstance: 'Metronidazol / Tinidazol', severity: 'Menor', clinicalEffect: 'Sinergismo terapéutico secuencial: el metronidazol cura el tejido invasivo y la diloxanida erradica los quistes intestinales.', recommendation: 'Régimen secuencial recomendado por la OMS.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-cloroquina',
    name: 'Cloroquina Fosfato / Sulfato (4-Aminoquinolina)',
    brandNames: ['Aralen', 'Resochin', 'Cloroquina'],
    atcCode: 'P01BA01',
    description: 'Antipalúdico histórico del grupo de las 4-aminoquinolinas que bloquea la polimerización del hemo en eritrocitos parasitados; utilizado además como fármaco modificador de la enfermedad en artritis reumatoide y lupus eritematoso sistémico.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antiprotozoarios'],
    presentations: [
      { id: 'p-clq-1', form: 'Comprimidos orales (Fosfato)', concentration: '250 mg (equivalente a 155 mg de cloroquina base)', route: 'Oral', packaging: 'Caja x 20 y 30 comprimidos', excipients: 'Almidón de maíz, talco' }
    ],
    mechanismOfAction: {
      summary: 'Se concentra selectivamente en la vacuola digestiva ácida del parásito intraeritrocitario e inhibe la enzima hemo-polimerasa; el hemo libre no polimerizado (ferroprotoporfirina IX) es tóxico y lisa las membranas del Plasmodium.',
      detailed: 'Esquizonticida eritrocítico potente y rápido contra Plasmodium malariae, P. ovale, P. knowlesi y cepas de P. vivax y P. falciparum sensibles a cloroquina. Inactiva frente a hipnozoítos hepáticos (requiere asociar primaquina). Posee propiedades inmunomoduladoras y antiinflamatorias elevando el pH endosómico celular en macrófagos.',
      targetReceptor: 'Hemo-polimerasa de la vacuola alimentaria de Plasmodium spp.',
      keyPoints: ['Fármaco de elección para malaria no falciparum sensible y amebiasis hepática refractaria', 'RETINOPATÍA POR CLOROQUINA: maculopatía irreversible en "ojo de buey" con dosis acumuladas > 300-400 g (exámenes oftalmológicos anuales obligatorios)', 'Estrecho margen de seguridad: sobredosis aguda potencialmente letal por parada cardiorrespiratoria']
    },
    indications: {
      approved: [
        'Tratamiento y profilaxis del paludismo / malaria por Plasmodium vivax, P. ovale, P. malariae y cepas sensibles de P. falciparum',
        'Absceso hepático amebiano refractario o en alérgicos a nitroimidazoles (asociada a diloxanida)',
        'Lupus eritematoso sistémico y discoide (inmunomodulador)',
        'Artritis reumatoide activa'
      ]
    },
    dosageAndPosology: {
      adults: 'Tratamiento de ataque malaria: Día 1: 600 mg de base (1000 mg de fosfato), seguido de 300 mg de base 6 horas después; Días 2 y 3: 300 mg de base una vez al día (dosis total acumulada 1500 mg base en 48 h). Profilaxis: 300 mg base una vez a la semana comenzando 1-2 semanas antes del viaje y 4 semanas posteriores. Absceso hepático amebiano: 600 mg base/día por 2 días, luego 300 mg base/día por 2-3 semanas.',
      pediatric: 'Ataque de malaria: Día 1: 10 mg base/kg, luego 5 mg base/kg a las 6 h; Días 2 y 3: 5 mg base/kg/día.',
      renalAdjustment: 'TFG < 10 ml/min: reducir la dosis al 50%.',
      hepaticAdjustment: 'Usar con precaución (acumulación hepática elevada).',
      routes: ['Oral'],
      administrationNotes: 'Tomar siempre con las comidas o un vaso de leche para reducir las náuseas y el sabor amargo.'
    },
    safety: {
      contraindications: ['Retinopatía preexistente o alteraciones del campo visual', 'Hipersensibilidad a 4-aminoquinolinas', 'Déficit severo de glucosa-6-fosfato deshidrogenasa (G6PD) por riesgo de hemólisis aguda'],
      warnings: ['RETINOPATÍA IRREVERSIBLE ("ojo de buey"): pérdida permanente de la visión central en tratamientos prolongados', 'Prolongación del intervalo QTc y miocardiopatía tóxica', 'Prurito intenso en individuos de raza negra'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Puede usarse para el tratamiento y profilaxis de la malaria en embarazadas cuando el beneficio lo amerite (la malaria es muy letal en la gestante).',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia; dosis excretada muy pequeña.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Prurito cutáneo intenso (muy común en personas de fototipo oscuro)', 'Cefalea y visión borrosa transitoria por fallo de acomodación', 'Náuseas, vómitos y diarrea'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Despigmentación del cabello o piel', 'Depresión y labilidad emocional'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Retinopatía macular en "ojo de buey" irreversible', 'Cardiotoxicidad con arritmias y bloqueo AV', 'Anemia hemolítica en déficit de G6PD', 'Convulsiones'] }
    ],
    interactions: [
      { id: 'int-clq-1', interactingSubstance: 'Fármacos que prolongan el intervalo QT (Amiodarona, Haloperidol, Moxifloxacino)', severity: 'Mayor', clinicalEffect: 'Aumento significativo del riesgo de arritmias ventriculares letales (Torsades de Pointes).', recommendation: 'Evitar la asociación y monitorizar electrocardiograma.' },
      { id: 'int-clq-2', interactingSubstance: 'Antiácidos y sales de caolín', severity: 'Moderada', clinicalEffect: 'Reducen la absorción gastrointestinal de la cloroquina.', recommendation: 'Separar las tomas al menos 4 horas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-primaquina',
    name: 'Primaquina Fosfato (8-Aminoquinolina)',
    brandNames: ['Primaquina', 'Neo-Quipenyl'],
    atcCode: 'P01BA03',
    description: 'Antipalúdico del grupo de las 8-aminoquinolinas esencial para la curación radical de la malaria al destruir los hipnozoítos hepáticos latentes de Plasmodium vivax y Plasmodium ovale y actuar como gametocida para cortar la transmisión.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antiprotozoarios'],
    presentations: [
      { id: 'p-prq-1', form: 'Comprimidos orales', concentration: '15 mg de base (26.3 mg de difosfato) y 7.5 mg de base', route: 'Oral', packaging: 'Frasco o blister x 14 y 28 comprimidos', excipients: 'Celulosa microcristalina, estearato magnésico' }
    ],
    mechanismOfAction: {
      summary: 'Genera especies reactivas de oxígeno (estrés oxidativo citotóxico) e interfiere con el transporte de electrones mitocondrial del parásito provocando la lisis selectiva de los hipnozoítos hepáticos tisulares y gametocitos.',
      detailed: 'Esquizonticida tisular hepático primario y secundario. Es el único fármaco de amplio acceso capaz de destruir la forma durmiente (hipnozoíto) en el hepatocito que causa las recaídas meses o años después en infecciones por P. vivax y P. ovale. Destruye también los gametocitos de todas las especies de Plasmodium (incluyendo P. falciparum).',
      targetReceptor: 'Mitocondrias y cadena de transporte de electrones del parásito',
      keyPoints: ['OBLIGATORIO MEDIR GLUCOSA-6-FOSFATO DESHIDROGENASA (G6PD) ANTES DE PRESCRIBIR (causa hemólisis intravascular masiva fatal si hay déficit enzimático)', 'Fármaco insustituible para evitar recaídas (cura radical) en malaria por P. vivax y P. ovale', 'ESTRICTAMENTE CONTRAINDICADA EN EL EMBARAZO']
    },
    indications: {
      approved: [
        'Cura radical y prevención de recaídas de malaria por Plasmodium vivax y Plasmodium ovale (eliminación de hipnozoítos hepáticos durmientes)',
        'Acción gametocida contra Plasmodium falciparum en dosis única para bloquear la transmisión comunitaria al mosquito vector Anopheles',
        'Neumonía moderada a grave por Pneumocystis jirovecii (asociada a Clindamicina en pacientes intolerantes a TMP-SMX)'
      ]
    },
    dosageAndPosology: {
      adults: 'Cura radical P. vivax / P. ovale: 15 mg de base (1 comprimido) una vez al día con alimentos durante 14 días consecutivos tras el tratamiento esquizonticida sanguíneo con cloroquina o ACT (en cepas resistentes del Pacífico/Sudeste Asiático: 30 mg de base/día por 14 días). Gametocida para P. falciparum: 0.25 mg/kg base en dosis única el día 1.',
      pediatric: 'Cura radical en niños: 0.25 a 0.5 mg base/kg/día una vez al día durante 14 días (con screening previo de G6PD normal).',
      renalAdjustment: 'Usar con precaución en insuficiencia renal grave.',
      hepaticAdjustment: 'Precaución en daño hepático.',
      routes: ['Oral'],
      administrationNotes: 'TOMAR SIEMPRE CON LAS COMIDAS para minimizar cólicos abdominales y náuseas. DETERMINAR PREVIAMENTE NIVELES DE G6PD.'
    },
    safety: {
      contraindications: ['Déficit de glucosa-6-fosfato deshidrogenasa (G6PD) moderado a grave', 'EMBARAZO (se desconoce el estado de G6PD del feto; riesgo de muerte fetal por hemólisis masiva)', 'Lactancia en lactante con déficit de G6PD o estado no determinado', 'Enfermedades autoinmunes como lupus o artritis reumatoide con tendencia a granulocitopenia'],
      warnings: ['HEMÓLISIS INTRAVASCULAR AGUDA GRAVE con hemoglobinuria (orinas negras) en pacientes con deficiencia de G6PD', 'METAHEMOGLOBINEMIA dosis-dependiente: cianosis con saturación disminuida; administrar azul de metileno si metahemoglobina > 20%'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'CONTRAINDICADA EN EL EMBARAZO: cruza la placenta y provoca hemólisis fulminante letal en el feto si tiene deficiencia de G6PD.',
      lactation: 'Contraindicado',
      lactationNotes: 'Contraindicado salvo que se certifique que el lactante tiene niveles normales de G6PD.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de hemólisis masiva potencialmente fatal en pacientes con deficiencia de G6PD. Es imperativo realizar prueba diagnóstica de G6PD antes de iniciar el tratamiento.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas y vómitos', 'Dolor cólico abdominal y epigastralgia', 'Metahemoglobinemia leve asintomática'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Cianosis labial y ungueal por metahemoglobina', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hemólisis intravascular aguda masiva con fallo renal anúrico', 'Agranulocitosis e hipoplasia medular', 'Arritmias cardíacas'] }
    ],
    interactions: [
      { id: 'int-prq-1', interactingSubstance: 'Fármacos mielotóxicos o hemolíticos (Dapsona, Sulfamidas)', severity: 'Mayor', clinicalEffect: 'Aumento severo del riesgo de metahemoglobinemia y hemólisis aditiva.', recommendation: 'Evitar el uso conjunto.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-quinina',
    name: 'Quinina Sulfato / Diclorhidrato',
    brandNames: ['Quinimax', 'Quinina Chibret', 'Qualaquin'],
    atcCode: 'P01BC01 / M09AA01',
    description: 'Alcaloide natural extraído de la corteza del árbol de la quina (Cinchona) con potente acción esquizonticida eritrocitaria rápida, fármaco histórico de rescate para la malaria grave y complicada por Plasmodium falciparum.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antiprotozoarios'],
    presentations: [
      { id: 'p-qui-1', form: 'Comprimidos orales (Sulfato)', concentration: '300 mg (equivalente a 250 mg de quinina base)', route: 'Oral', packaging: 'Caja x 20 comprimidos', excipients: 'Sacarosa, almidón' },
      { id: 'p-qui-2', form: 'Solución inyectable para perfusión IV lenta (Diclorhidrato)', concentration: '600 mg / 2 ml', route: 'Intravenosa', packaging: 'Ampolla de 2 ml', excipients: 'Agua para inyección' }
    ],
    mechanismOfAction: {
      summary: 'Interfiere con la digestión de la hemoglobina en la vacuola parasitaria, bloqueando la polimerización del hemo citotóxico e intercalándose en el ADN del parásito.',
      detailed: 'Esquizonticida sanguíneo activo frente a todas las especies de Plasmodium. Posee además efectos bloqueantes de canales de potasio en el músculo esquelético humano que prolongan el período refractario (reduciendo calambres musculares nocturnos) y estimula fuertemente las células beta pancreáticas liberando insulina.',
      targetReceptor: 'Hemo-polimerasa parasitaria / Canales de potasio y células beta pancreáticas',
      keyPoints: ['Fármaco de rescate para Malaria grave y paludismo por Plasmodium falciparum multirresistente', 'CINCONISMO: constelación de síntomas neurosensoriales (tinnitus, sordera transitoria, cefalea pulsátil, náuseas y visión borrosa)', 'HIPOGLUCEMIA SEVERA: estimula la secreción masiva de insulina endógena (monitorear glucemia capilar cada 4 horas)', 'La inyección IV rápida es mortal por arritmias y paro cardíaco']
    },
    indications: {
      approved: [
        'Tratamiento de la malaria / paludismo grave y complicado por Plasmodium falciparum (monoterapia inicial IV o combinada con doxiciclina/clindamicina)',
        'Malaria no complicada por P. falciparum resistente a cloroquina',
        'Babesiosis humana por Babesia microti (asociada a Clindamicina)',
        'Calambres musculares nocturnos idiopáticos dolorosos refractarios en adultos (uso restringido)'
      ]
    },
    dosageAndPosology: {
      adults: 'Malaria grave IV (Diclorhidrato): Dosis de carga de 20 mg/kg en infusión IV lenta de 4 horas en suero glucosado al 5-10%, seguida de dosis de mantenimiento de 10 mg/kg cada 8 horas (en infusión de 4 h) hasta tolerancia oral; pasar a Sulfato oral: 600 mg cada 8 horas por 7 días (asociado a doxiciclina 100 mg cada 12 h o clindamicina).',
      pediatric: 'Malaria grave: Carga de 20 mg/kg en 4 h; mantenimiento: 10 mg/kg cada 8 horas en infusión continua de glucosa.',
      renalAdjustment: 'Insuficiencia renal grave (TFG < 10 ml/min): omitir la dosis de carga inicial y reducir la dosis de mantenimiento en un tercio a la mitad.',
      hepaticAdjustment: 'Reducir dosis en insuficiencia hepática.',
      routes: ['Intravenosa', 'Oral'],
      administrationNotes: 'NUNCA INYECTAR EN BOLO IV DIRECTO (causa colapso cardiovascular y parada cardíaca inmediata). Infundir siempre en 4 horas diluido en suero glucosado para contrarrestar la hipoglucemia.'
    },
    safety: {
      contraindications: ['Prolongación del intervalo QT o arritmias ventriculares', 'Miastenia gravis (la quinina agrava la debilidad neuromuscular)', 'Neuritis óptica o tinnitus previo grave', 'Hemoglobinuria de aguas negras (blackwater fever)'],
      warnings: ['CINCONISMO: acúfenos, hipoacusia, mareo, cefalea y vómitos universales en casi todos los pacientes; no es indicación de suspensión salvo que haya sordera o arritmias', 'HIPOGLUCEMIA PROFUNDA POR HIPERINSULINISMO (muy frecuente en gestantes y pacientes graves)', 'Cardiotoxicidad con ensanchamiento del QRS y QT'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'En malaria grave por P. falciparum que amenaza la vida, el beneficio supera el riesgo materno-fetal; controlar rigurosamente la glucemia materna.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false,
      blackBoxWarning: 'No debe emplearse de forma indiscriminada para calambres nocturnos comunes debido al riesgo de trombocitopenia inmunomediada fatal, arritmias y fallo renal.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Cinconismo (acúfenos, mareos, cefalea y sordera transitoria)', 'Hipoglucemia sintomática severa por liberación de insulina', 'Náuseas y dispepsia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Sudoración profusa y sofocos', 'Visión borrosa y diplopía'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Trombocitopenia inmunitaria mortal (púrpura trombopénica por quinina)', 'Fiebre de aguas negras con hemoglobinuria masiva y fallo renal', 'Arritmias ventriculares y parada cardíaca por infusión rápida'] }
    ],
    interactions: [
      { id: 'int-qui-1', interactingSubstance: 'Digoxina', severity: 'Mayor', clinicalEffect: 'La quinina duplica los niveles séricos de digoxina por inhibición de la glicoproteína P renal.', recommendation: 'Reducir la dosis de digoxina al 50% y vigilar digoxinemia.' },
      { id: 'int-qui-2', interactingSubstance: 'Fármacos que prolongan el QT (Moxifloxacino, Amiodarona, Haloperidol)', severity: 'Contraindicada', clinicalEffect: 'Efecto proarrítmico letal con riesgo crítico de torsades de pointes y fibrilación ventricular.', recommendation: 'Asociación contraindicada.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- 4.6 ANTIHELMÍNTICOS ---
  // ==========================================
  {
    id: 'med-albendazol',
    name: 'Albendazol',
    brandNames: ['Eskazole', 'Zentel', 'Albenza', 'Lurdex'],
    atcCode: 'P02CA03',
    description: 'Antihelmíntico benzimidazol de amplísimo espectro activo frente a nematodos intestinales y tisulares, larvas y cestodos, fármaco de primera elección para neurocisticercosis y quiste hidatídico.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihelminticos'],
    presentations: [
      { id: 'p-alb-1', form: 'Comprimidos masticables orales', concentration: '200 mg y 400 mg', route: 'Oral', packaging: 'Caja x 1, 2, 6 y 30 comprimidos', excipients: 'Sacarosa, ciclamato sódico, aroma de vainilla' },
      { id: 'p-alb-2', form: 'Suspensión oral', concentration: '100 mg / 5 ml y 400 mg / 10 ml', route: 'Oral', packaging: 'Frasco de 20 ml con vasito dosificador', excipients: 'Glicerol, sorbitol, ácido benzoico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la polimerización de la tubulina en los microtúbulos citoplasmáticos de los helmintos fijándose a la beta-tubulina parasitaria, bloqueando la captación de glucosa y agotando el ATP del parásito hasta su muerte e inmovilización.',
      detailed: 'Produce degeneración selectiva de las organelas celulares del parásito sin afectar la tubulina de mamíferos a dosis terapéuticas. Su metabolito primario hepático, albendazol sulfóxido, es el compuesto activo con excelente penetración en quistes hidatídicos y parénquima cerebral.',
      targetReceptor: 'Beta-tubulina de helmintos',
      keyPoints: ['Para parasitosis intestinales se toma en ayunas; para INFECCIONES TISULARES (neurocisticercosis, hidatidosis) DEBE TOMARSE CON COMIDAS GRASAS (aumenta la biodisponibilidad por 5)', 'Tratamiento de elección de Neurocisticercosis (coadministrar con corticoides)', 'Teratogénico: contraindicado de forma estricta en el embarazo']
    },
    indications: {
      approved: [
        'Neurocisticercosis parenquimatosa activa debida a lesiones larvarias de Taenia solium',
        'Equinococosis quística / hidatidosis (quiste hidatídico hepático, pulmonar o peritoneal por Echinococcus granulosus) como tratamiento médico o coadyuvante pre y postquirúrgico',
        'Parasitosis intestinales por nematodos: Ascaris lumbricoides, Enterobius vermicularis (oxiuros), Ancylostoma duodenale, Necator americanus y Trichuris trichiura',
        'Estrongiloidiasis por Strongyloides stercoralis',
        'Larva migrans cutánea y visceral (Toxocariasis)'
      ],
      offLabel: ['Giardiasis resistente en niños', 'Microsporidiosis intestinal']
    },
    dosageAndPosology: {
      adults: 'Parasitosis intestinales comunes (Áscaris, oxiuros, uncinarias): 400 mg dosis única en ayunas (en oxiuriasis repetir a los 14 días a toda la familia). Neurocisticercosis tisular: 15 mg/kg/día divididos en 2 tomas (habitualmente 400 mg cada 12 h) TOMADOS CON COMIDA RICA EN GRASAS durante 8 a 30 días (asociar dexametasona y anticonvulsivo). Hidatidosis: 400 mg cada 12 h con comidas en ciclos de 28 días con 14 días de descanso (hasta 3 ciclos).',
      pediatric: 'Niños > 2 años: misma dosis que adultos para nematodos (400 mg dosis única). Niños de 1 a 2 años: 200 mg dosis única. Neurocisticercosis en niños: 15 mg/kg/día divididos cada 12 h.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Contraindicado en cirrosis hepática descompensada; monitorizar transaminasas en tratamientos tisulares prolongados.',
      routes: ['Oral'],
      administrationNotes: 'En infecciones luminales puede masticarse o tragarse entero. En infecciones sistémicas/tisulares tomar obligatoriamente con alimentos grasos (aceite, mantequilla, leche entera) para multiplicar por 5 su absorción sistémica.'
    },
    safety: {
      contraindications: ['Embarazo confirmado o sospecha (teratogénico)', 'Lactancia', 'Hipersensibilidad a benzimidazoles'],
      warnings: ['EN NEUROCISTICEROSIS ES OBLIGATORIO ASOCIAR CORTICOIDES (dexametasona): la muerte de los cisticercos desencadena edema cerebral grave, hipertensión intracraneal y convulsiones', 'Hepatotoxicidad y leucopenia reversible en tratamientos prolongados (> 14 días); monitorizar transaminasas y hemograma completo'],
      pregnancyCategory: 'X',
      pregnancyNotes: 'TERATOGÉNICO Y EMBRIOTÓXICO: prueba de embarazo negativa previa obligatoria y anticoncepción estricta durante el tratamiento y 1 mes después.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna; contraindicado en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Cefalea y mareo', 'Elevación transitoria de enzimas hepáticas (ALT/AST)', 'Dolor abdominal, náuseas y vómitos', 'Fiebre y alopecia reversible en tratamientos prolongados'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Leucopenia y neutropenia', 'Exantema y urticaria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Pancitopenia y agranulocitosis', 'Hipertensión intracraneal aguda por lisis parasitaria', 'Hepatitis fulminante'] }
    ],
    interactions: [
      { id: 'int-alb-1', interactingSubstance: 'Dexametasona / Praziquantel / Cimetidina', severity: 'Moderada', clinicalEffect: 'Aumentan las concentraciones plasmáticas de albendazol sulfóxido en un 50% (sinergismo clínico buscado en neurocisticercosis).', recommendation: 'Monitorear posible incremento de efectos adversos hepáticos.' },
      { id: 'int-alb-2', interactingSubstance: 'Carbamazepina / Fenitoína / Fenobarbital', severity: 'Mayor', clinicalEffect: 'Inducción enzimática masiva que disminuye drásticamente las concentraciones de albendazol sulfóxido.', recommendation: 'Monitorizar respuesta terapéutica y considerar aumentar la dosis de albendazol.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-mebendazol',
    name: 'Mebendazol',
    brandNames: ['Lomper', 'Vermox', 'Mebendazol Normon'],
    atcCode: 'P02CA01',
    description: 'Antihelmíntico benzimidazol sintético de muy baja absorción gastrointestinal (< 10%), lo que concentra su acción parasiticida letal en la luz intestinal con un extraordinario perfil de inocuidad clínica para oxiuriasis y helmintiasis comunes.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihelminticos'],
    presentations: [
      { id: 'p-meb-1', form: 'Comprimidos orales masticables', concentration: '100 mg', route: 'Oral', packaging: 'Caja x 6 comprimidos', excipients: 'Sacarina sódica, almidón de maíz' },
      { id: 'p-meb-2', form: 'Suspensión oral', concentration: '100 mg / 5 ml (20 mg / ml)', route: 'Oral', packaging: 'Frasco de 30 ml con vasito dosificador', excipients: 'Sacarosa, celulosa microcristalina, aroma plátano' }
    ],
    mechanismOfAction: {
      summary: 'Bloquea irreversiblemente la captación de glucosa y otros nutrientes en helmintos intestinales uniéndose a la tubulina parasitaria, despolimerizando microtúbulos y provocando la autolisis parasitaria intestinal.',
      detailed: 'Provoca vacuolización y lisis de las células del intestino del helminto. No produce hiperglucemia en el hospedero humano. Al absorberse menos del 5-10% por vía oral, su acción es óptimamente selectiva sobre nematodos intraluminales.',
      targetReceptor: 'Tubulina de nematodos intestinales',
      keyPoints: ['Tratamiento de elección familiar para Oxiuros (Enterobius vermicularis / prurito anal nocturno infantil)', 'PAUTA DE REPETICIÓN A LOS 15 DÍAS OBLIGATORIA (para destruir los vermes eclosionados a partir de los huevos)', 'Tratar simultáneamente a todos los convivientes del hogar']
    },
    indications: {
      approved: [
        'Enterobiasis / Oxiuriasis (Enterobius vermicularis)',
        'Ascariasis (Ascaris lumbricoides)',
        'Tricuriasis (Trichuris trichiura / tricocefalosis)',
        'Anquilostomiasis y Necatoriasis (Ancylostoma duodenale y Necator americanus)',
        'Infestaciones mixtas intestinales por nematodos'
      ]
    },
    dosageAndPosology: {
      adults: 'Oxiuriasis: 1 comprimido masticable (100 mg) en dosis única; REPETIR UNA SEGUNDA DOSIS DE 100 MG A LOS 14 DÍAS (esencial para erradicar ciclo biológico). Ascariasis, tricuriasis y uncinariasis: 100 mg cada 12 horas (mañana y noche) durante 3 días consecutivos.',
      pediatric: 'Niños > 2 años: exactamente la misma dosis que adultos (100 mg dosis única para oxiuros, repetida a las 2 semanas). No recomendado en menores de 1 año.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste en cursos cortos intestinales.',
      routes: ['Oral'],
      administrationNotes: 'Los comprimidos pueden masticarse, tragarse enteros o triturarse y mezclarse con la comida. No requiere laxantes ni ayuno previo. Tratar a toda la familia en oxiuriasis.'
    },
    safety: {
      contraindications: ['Embarazo (especialmente primer trimestre)', 'Lactancia', 'Hipersensibilidad a mebendazol', 'Coadministración con metronidazol (riesgo de Síndrome de Stevens-Johnson / NET)'],
      warnings: ['NO ASOCIAR CON METRONIDAZOL (asociación epidemiológica causal con Síndrome de Stevens-Johnson y Necrólisis Epidérmica Tóxica letal)', 'Contraindicado en menores de 1 año por reportes de convulsiones'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Teratogénico en animales; contraindicado en gestación.',
      lactation: 'Contraindicado',
      lactationNotes: 'Evitar en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Dolor cólico abdominal transitorio y diarrea leve (por expulsión masiva de vermes)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Síndrome de Stevens-Johnson / NET (asociado a metronidazol)', 'Neutropenia y agranulocitosis (solo en dosis altas prolongadas)', 'Convulsiones en lactantes'] }
    ],
    interactions: [
      { id: 'int-meb-1', interactingSubstance: 'Metronidazol', severity: 'Contraindicada', clinicalEffect: 'Aparición severa de Síndrome de Stevens-Johnson y Necrólisis Epidérmica Tóxica (NET).', recommendation: 'COMBINACIÓN FORMALMENTE CONTRAINDICADA.' },
      { id: 'int-meb-2', interactingSubstance: 'Cimetidina', severity: 'Menor', clinicalEffect: 'Inhibe el metabolismo de mebendazol aumentando levemente sus niveles sistémicos.', recommendation: 'Precaución en uso prolongado.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-praziquantel',
    name: 'Praziquantel (Pirazinoisoquinolina)',
    brandNames: ['Biltricide', 'Cisticid', 'Cesol'],
    atcCode: 'P02BA01',
    description: 'Antihelmíntico sintético derivado de la pirazinoisoquinolina, estándar de oro mundial para el tratamiento de todas las formas de Esquistosomiasis (bilharziasis) y cestodiasis humanas.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihelminticos'],
    presentations: [
      { id: 'p-prz-1', form: 'Comprimidos orales ranurados', concentration: '600 mg', route: 'Oral', packaging: 'Frasco x 6 comprimidos', excipients: 'Almidón de maíz, estearato magnésico' }
    ],
    mechanismOfAction: {
      summary: 'Aumenta drásticamente la permeabilidad de las membranas celulares del parásito a los iones de calcio (Ca2+), provocando una contractura tetánica sostenida inmediata, parálisis espástica y vacuolización letal del tegumento del helminto.',
      detailed: 'Al desintegrar el tegumento del parásito, expone sus antígenos internos ocultos al sistema inmunológico del hospedero, facilitando su fagocitosis y destrucción por anticuerpos y células del sistema inmune.',
      targetReceptor: 'Canales de calcio dependientes de voltaje del tegumento parasitario',
      keyPoints: ['Fármaco de elección mundial de la OMS para Esquistosomiasis (Schistosoma mansoni, S. haematobium, S. japonicum)', 'Fármaco de referencia para Teniasis (Taenia solium, T. saginata) e Himenolepiasis', 'Sabor extremadamente amargo: no masticar para evitar náuseas y arcadas']
    },
    indications: {
      approved: [
        'Esquistosomiasis en todas sus fases y especies: Schistosoma mansoni (intestinal/hepatoesplénica), S. haematobium (urinaria con hematuria), S. japonicum e intercalatum',
        'Infecciones por duelas hepáticas y pulmonares (Clonorquiasis, Opistorquiasis y Paragonimiasis)',
        'Teniasis intestinal por Taenia saginata y Taenia solium',
        'Himenolepiasis por Hymenolepis nana',
        'Difilobotriasis por Diphyllobothrium latum'
      ]
    },
    dosageAndPosology: {
      adults: 'Esquistosomiasis: 40 a 60 mg/kg/día por vía oral divididos en 2 o 3 tomas en un solo día con las comidas. Teniasis intestinal (T. solium / T. saginata): 5 a 10 mg/kg en dosis única oral. Clonorquiasis / Opistorquiasis: 25 mg/kg cada 8 horas durante 2 o 3 días consecutivos.',
      pediatric: 'Niños ≥ 1 año: misma dosificación ponderal que adultos (40-60 mg/kg/día divididos en 2 o 3 tomas para esquistosomiasis).',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'Reducir dosis o espaciar tomas en insuficiencia hepática grave (menor aclaramiento de primer paso).',
      routes: ['Oral'],
      administrationNotes: 'Los comprimidos deben tragarse enteros inmediatamente con abundante agua durante las comidas. NO MASTICAR (su sabor intensamente amargo puede provocar arcadas y vómitos).'
    },
    safety: {
      contraindications: ['Cisticercosis ocular (la destrucción del parásito en el ojo desencadena ceguera permanente)', 'Hipersensibilidad a praziquantel'],
      warnings: ['En neurocisticercosis cerebral coadministrar corticoides para atenuar la reacción inflamatoria letal por lisis parasitaria', 'Somnolencia y mareo en las horas posteriores: evitar conducir maquinaria pesada'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'La OMS avala su uso en embarazadas en zonas endémicas de esquistosomiasis por su elevado beneficio.',
      lactation: 'Compatible',
      lactationNotes: 'Pasa a leche materna en cantidades pequeñas; puede suspenderse la lactancia 24 horas tras dosis única.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Cefalea y mareo', 'Dolor abdominal y náuseas', 'Somnolencia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Fiebre y urticaria (reacción inmunológica a los antígenos parasitarios liberados)', 'Diarrea y vómitos'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Crisis convulsivas e hipertensión intracraneal en neurocisticercosis no diagnosticada previamente', 'Reacciones anafilactoides'] }
    ],
    interactions: [
      { id: 'int-prz-1', interactingSubstance: 'Rifampicina / Dexametasona / Antiepilépticos inductores', severity: 'Mayor', clinicalEffect: 'La rifampicina induce fuertemente el CYP3A4 reduciendo los niveles plasmáticos de praziquantel en un 80-99% con fracaso terapéutico absoluto.', recommendation: 'Evitar el uso simultáneo de rifampicina.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // ==========================================
  // --- 4.7 ANTIFÍMICOS (ANTITUBERCULOSOS) ---
  // ==========================================
  {
    id: 'med-isoniacida',
    name: 'Isoniacida (INH / H - Hidrazida del Ácido Isonicotínico)',
    brandNames: ['Cemidon', 'Isoniazida Normon', 'Rimifon', 'Rifater (combinado)'],
    atcCode: 'J04AC01',
    description: 'Fármaco antituberculoso bactericida de primera línea fundamental y piedra angular del tratamiento y profilaxis de la infección tuberculosa latente y activa por Mycobacterium tuberculosis.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antifimicos'],
    presentations: [
      { id: 'p-inh-1', form: 'Comprimidos orales', concentration: '100 mg y 300 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos', excipients: 'Almidón de maíz, lactosa' },
      { id: 'p-inh-2', form: 'Solución inyectable IM/IV', concentration: '300 mg / 5 ml', route: 'Intravenosa', packaging: 'Ampolla de 5 ml', excipients: 'Agua para inyección' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco activado por la catalasa-peroxidasa micobacteriana KatG; el radical isonicotinoilo activo se une al NADH e inhibe a la enzima InhA (enoil-ACP reductasa), bloqueando la biosíntesis de los ácidos micólicos esenciales de la pared micobacteriana.',
      detailed: 'Bactericida potente de acción rápida sobre bacilos intra y extracelulares en fase de replicación activa. Produce pérdida de la ácido-alcohol resistencia bacilar. Inhibe además la piridoxina quinasa humana compitiendo con la vitamina B6.',
      targetReceptor: 'Enoil-ACP reductasa (InhA) de Mycobacterium tuberculosis',
      keyPoints: ['Pilar maestro del régimen cuádruple estándar (RIPE) para tuberculosis activa y monoterapia de elección para Tuberculosis latente (9 meses)', 'COADMINISTRAR PIRIDOXINA (Vitamina B6, 25-50 mg/día) para prevenir la neuropatía periférica sensitiva', 'HEPATOTOXICIDAD severa (mayor en acetiladores lentos y alcohólicos): vigilar transaminasas']
    },
    indications: {
      approved: [
        'Tratamiento de la tuberculosis activa pulmonar y extrapulmonar (meníngea, miliar, ganglionar, ósea) en combinación con otros antituberculosos de 1ª línea',
        'Tratamiento de la infección tuberculosa latente (ITBL / quimioprofilaxis) en pacientes con PPD/IGRA positivo o contactos íntimos de bacilíferos'
      ]
    },
    dosageAndPosology: {
      adults: 'Dosis estándar diaria: 300 mg una vez al día por vía oral (o 5 mg/kg/día, máximo 300 mg/día) administrado en ayunas 1 hora antes del desayuno. Pauta intermitente (DOTS supervisado): 10 mg/kg (hasta 900 mg) 3 veces por semana. Asociar Piridoxina (vitamina B6) 25 a 50 mg/día en diabéticos, desnutridos, alcohólicos o embarazadas.',
      pediatric: '10 a 15 mg/kg/día en toma única matutina (máximo 300 mg/día).',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve/moderada; en diálisis administrar tras la sesión.',
      hepaticAdjustment: 'Suspender si transaminasas se elevan > 3 veces el límite superior con síntomas o > 5 veces asintomáticas.',
      routes: ['Oral', 'Intravenosa', 'Intramuscular'],
      administrationNotes: 'TOMAR EN AYUNAS (1 hora antes o 2 horas después de alimentos). Evitar quesos curados, atún y vino (síndrome de intoxicación por histamina y tiramina por inhibición de la monoaminooxidasa).'
    },
    safety: {
      contraindications: ['Hepatopatía grave inducida por isoniacida previa o hepatitis aguda activa de cualquier etiología', 'Hipersensibilidad a isoniacida'],
      warnings: ['HEPATOTOXICIDAD SEVERA Y FATAL: necrosis hepática masiva (mayor riesgo con la edad > 35 años y consumo de alcohol)', 'NEUROPATÍA PERIFÉRICA SENSITIVA en "guante y calcetín" por depleción de vitamina B6; prevenir con piridoxina oral', 'Lupus eritematoso inducido por fármacos (anticuerpos antihistona)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Se utiliza en el embarazo para tuberculosis activa (asociada a piridoxina suplementaria obligatoria).',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna; suplementar vitamina B6 al lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de hepatitis grave y potencialmente letal. Monitorear síntomas de anorexia, náuseas, vómitos, coluria e ictericia mensualmente.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Elevación asintomática de transaminasas (AST/ALT)', 'Neuropatía periférica (parestesias y disestesias en pies y manos)', 'Náuseas y dolor epigástrico'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Hepatitis tóxica sintomática', 'Neuritis óptica', 'Confusión mental y convulsiones'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis fulminante que requiere trasplante hepático', 'Lupus medicamentoso', 'Agranulocitosis'] }
    ],
    interactions: [
      { id: 'int-inh-1', interactingSubstance: 'Fenitoína / Carbamazepina', severity: 'Mayor', clinicalEffect: 'La isoniacida inhibe potentemente el metabolismo hepático de fenitoína, disparando sus niveles a rango tóxico con ataxia y nistagmo.', recommendation: 'Monitorizar niveles de fenitoína y reducir su dosis.' },
      { id: 'int-inh-2', interactingSubstance: 'Alimentos con Tiramina e Histamina (Quesos añejos, vino, atún)', severity: 'Mayor', clinicalEffect: 'Inhibición de MAO y DAO por isoniacida con crisis hipertensiva, rubor, cefalea y palpitaciones.', recommendation: 'Evitar alimentos curados o fermentados durante el tratamiento.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-etambutol',
    name: 'Etambutol Clorhidrato (EMB / E)',
    brandNames: ['Myambutol', 'Etambutol Normon', 'Rimactazid (asociado)'],
    atcCode: 'J04AK02',
    description: 'Antituberculoso sintético de primera línea que actúa impidiendo la polimerización del arabinogalactano de la pared celular micobacteriana; previene activamente la aparición de resistencias a otros antifímicos.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antifimicos'],
    presentations: [
      { id: 'p-emb-1', form: 'Comprimidos orales recubiertos', concentration: '400 mg', route: 'Oral', packaging: 'Caja x 30 y 100 comprimidos', excipients: 'Povidona, estearato magnésico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la enzima arabinosiltransferasa III (codificada por el operón embB), bloqueando la polimerización de arabinosa en arabinogalactano y lipoarabinomanano, componentes esenciales de la pared celular micobacteriana.',
      detailed: 'Bacteriostático de acción específica sobre Mycobacterium spp. Aumenta la permeabilidad de la envoltura celular facilitando la entrada de otros agentes antituberculosos bactericidas como rifampicina.',
      targetReceptor: 'Arabinosiltransferasa (gen embB) micobacteriana',
      keyPoints: ['Componente del cuarteto estándar inicial (fase intensiva de 2 meses) de la tuberculosis', 'TOXICIDAD PRINCIPAL: NEURITIS ÓPTICA RETROBULBAR dependiente de dosis (disminución de agudeza visual y pérdida de visión de colores rojo-verde)', 'Evaluación oftalmológica (test de Ishihara) basal y periódica obligatoria']
    },
    indications: {
      approved: [
        'Tratamiento de la tuberculosis activa en combinación con isoniacida, rifampicina y pirazinamida durante la fase inicial de inducción',
        'Infecciones por micobacterias no tuberculosas o atípicas (Mycobacterium avium complex, Mycobacterium kansasii)'
      ]
    },
    dosageAndPosology: {
      adults: '15 a 20 mg/kg/día por vía oral en dosis única diaria (habitualmente 800 a 1200 mg/día) tomado por la mañana con el desayuno o en ayunas. Tratamiento intermitente supervisado: 30 mg/kg 3 veces por semana.',
      pediatric: '15 a 25 mg/kg/día en niños capaces de cooperar en la evaluación visual. Usar con extrema precaución en menores de 5 años por la imposibilidad de evaluar la visión.',
      renalAdjustment: 'OBLIGATORIO AJUSTAR: El 80% se excreta inalterado por el riñón. TFG < 30 ml/min o hemodiálisis: 15-25 mg/kg 3 veces por semana (NUNCA DIARIO para evitar neuritis óptica irreversible).',
      hepaticAdjustment: 'No suele requerir ajuste.',
      routes: ['Oral'],
      administrationNotes: 'Instruir al paciente para que suspenda inmediatamente el fármaco y acuda a consulta si nota cualquier cambio en la visión o en la percepción de los colores.'
    },
    safety: {
      contraindications: ['Neuritis óptica preexistente', 'Hipersensibilidad al etambutol', 'Pacientes incapaces de manifestar cambios visuales (niños muy pequeños o pacientes comatosos/con demencia severa)'],
      warnings: ['NEURITIS ÓPTICA RETROBULBAR: disminución bilateral de agudeza visual, escotomas centrales y pérdida de discriminación cromática rojo-verde; es reversible si se suspende de inmediato, pero permanente si se continúa', 'HIPERURICEMIA por inhibición de la excreción de ácido úrico (puede precipitar crisis de gota)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Se considera seguro en el embarazo cuando está indicado para tuberculosis activa.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia; niveles en leche bajos.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Hiperuricemia y artralgias por depósito de uratos', 'Náuseas y malestar gastrointestinal'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Neuritis óptica retrobulbar con daltonismo rojo-verde y pérdida de agudeza visual'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Atrofia óptica y ceguera permanente por suspensión tardía', 'Neuropatía periférica', 'Trombocitopenia'] }
    ],
    interactions: [
      { id: 'int-emb-1', interactingSubstance: 'Antiácidos con hidróxido de aluminio', severity: 'Moderada', clinicalEffect: 'Disminuyen la absorción oral de etambutol.', recommendation: 'Separar la administración al menos 2 horas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-rifampicina',
    name: 'Rifampicina (RIF / R)',
    brandNames: ['Rifaldin', 'Rimactan', 'Rifater (combinado)', 'Rifina'],
    atcCode: 'J04AB02',
    description: 'Antibiótico ansamicina semisintético de penetración intracelular insuperable, bactericida esterilizante esencial contra Mycobacterium tuberculosis y Mycobacterium leprae; además es un inductor universal masivo del citocromo P450.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antifimicos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-rif-1', form: 'Cápsulas y comprimidos orales', concentration: '300 mg y 600 mg', route: 'Oral', packaging: 'Caja x 24 y 30 cápsulas', excipients: 'Lactosa, dióxido de titanio' },
      { id: 'p-rif-2', form: 'Solución para perfusión IV', concentration: '600 mg por vial', route: 'Intravenosa', packaging: 'Vial de vidrio con ampolla de disolvente', excipients: 'Agua para inyección' },
      { id: 'p-rif-3', form: 'Jarabe oral pediátrico', concentration: '100 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 120 ml', excipients: 'Sacarosa, aroma de frambuesa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la subunidad beta de la ARN polimerasa dependiente de ADN bacteriana (codificada por rpoB), impidiendo la iniciación de la síntesis del ARN mensajero micobacteriano.',
      detailed: 'Bactericida esterilizante muy potente que destruye tanto bacilos en multiplicación rápida como bacilos persistentes en fase de letargo o metabolismo lento intra-macrófago. Es el inductor enzimático más potente conocido del citocromo P450 (CYP3A4, CYP2C9, CYP2C19) y transportador de membrana P-gp.',
      targetReceptor: 'Subunidad beta de la ARN polimerasa dependiente de ADN (rpoB)',
      keyPoints: ['Fármaco esterilizante esencial para prevenir recaídas de tuberculosis y lepra (acorta la duración del tratamiento a 6 meses)', 'TINCIÓN ANARANJADA-ROJIZA DE FLUIDOS CORPORALES: orina, sudor, lágrimas y saliva se tiñen de rojo/naranja (advertir al paciente que tiñe lentes de contacto de forma permanente)', 'INDUCTOR ENZIMÁTICO UNIVERSAL EXTREMO: inutiliza anticonceptivos orales, anticoagulantes y antirretrovirales']
    },
    indications: {
      approved: [
        'Tratamiento de todas las formas de Tuberculosis activa (fase intensiva y fase de mantenimiento)',
        'Tratamiento de la Lepra (Enfermedad de Hansen por Mycobacterium leprae) en terapia combinada con dapsona y clofazimina',
        'Quimioprofilaxis urgente de contactos cercanos de Meningitis meningocócica (Neisseria meningitidis)',
        'Profilaxis de infecciones por Haemophilus influenzae tipo b',
        'Infecciones graves sobre material protésico o biopelículas por Staphylococcus aureus resistente (en combinación con vancomicina o fluoroquinolona)'
      ]
    },
    dosageAndPosology: {
      adults: 'Tuberculosis: 10 mg/kg/día por vía oral (habitualmente 600 mg una vez al día para peso > 50 kg; 450 mg/día para peso < 50 kg) tomado en ayunas 1 hora antes de alimentos. Quimioprofilaxis meningocócica: 600 mg cada 12 horas durante 2 días consecutivos (4 dosis en total). Infección de prótesis por estafilococo: 300 a 450 mg cada 12 h asociada a otro antibiótico.',
      pediatric: 'Tuberculosis: 10 a 20 mg/kg/día en dosis única matutina (máximo 600 mg/día). Profilaxis meningococo en niños: 10 mg/kg cada 12 h por 2 días.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal; eliminación hepático-biliar.',
      hepaticAdjustment: 'Usar con extrema precaución en hepatopatía activa.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'TOMAR EN AYUNAS CON UN VASO DE AGUA (los alimentos reducen notablemente su absorción). ADVERTIR SOBRE LA COLORACIÓN ROJIZA/NARANJA DE ORINA Y LÁGRIMAS (mancha lentillas blandas irreversibles).'
    },
    safety: {
      contraindications: ['Coadministración con inhibidores de la proteasa del VIH potenciados o fármacos antivirales para hepatitis C (disminución total de niveles antivirales)', 'Hipersensibilidad a rifamicinas', 'Ictericia o daño hepático grave preexistente'],
      warnings: ['INDUCTOR ENZIMÁTICO MASIVO: interacciones farmacológicas innumerables (anticonceptivos orales fallan provocando embarazos no deseados; usar preservativo)', 'Hepatotoxicidad colestásica y citolítica (potenciada por isoniacida y pirazinamida)', 'Síndrome gripal / flu-like en pautas intermitentes'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Fármaco de primera línea insustituible en el tratamiento de la tuberculosis en el embarazo.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Coloración rojo-anaranjada intensa de orina, saliva, esputo, sudor y lágrimas', 'Náuseas y pirosis'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Elevación transitoria de bilirrubina y transaminasas', 'Prurito con o sin exantema'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Síndrome pseudogripal (flu syndrome: fiebre, escalofríos, cefalea y mialgias) en dosis intermitentes'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis tóxica severa', 'Trombocitopenia inmunológica', 'Insuficiencia renal aguda por nefritis tubulointersticial'] }
    ],
    interactions: [
      { id: 'int-rif-1', interactingSubstance: 'Anticonceptivos orales hormonales', severity: 'Contraindicada', clinicalEffect: 'Acelera el metabolismo de estrógenos y progestágenos provocando fallo anticonceptivo absoluto y embarazo.', recommendation: 'Utilizar métodos anticonceptivos no hormonales de barrera durante todo el tratamiento y 1 mes después.' },
      { id: 'int-rif-2', interactingSubstance: 'Anticoagulantes orales (Warfarina, Acenocumarol, DOACs)', severity: 'Mayor', clinicalEffect: 'Disminución crítica del 50-80% del efecto anticoagulante con trombosis masiva.', recommendation: 'Aumentar sustancialmente la dosis de anticoagulante y monitorizar INR o evitar DOACs.' },
      { id: 'int-rif-3', interactingSubstance: 'Inmunosupresores (Tacrolimus, Ciclosporina)', severity: 'Mayor', clinicalEffect: 'Caída precipitada de niveles séricos con rechazo agudo del órgano trasplantado.', recommendation: 'Monitorear niveles diarios y cuadruplicar dosis según farmacocinética.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-pirazinamida',
    name: 'Pirazinamida (PZA / Z)',
    brandNames: ['Pirazinamida Prodes', 'Zinamide', 'Rifater (combinado)'],
    atcCode: 'J04AK01',
    description: 'Antifímico esterilizante potente análogo sintético de la nicotinamida que actúa específicamente sobre bacilos micobacterianos intracelulares en el medio ácido de macrófagos y focos de necrosis caseosa, permitiendo acortar la terapia de la tuberculosis a 6 meses.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antifimicos'],
    presentations: [
      { id: 'p-pza-1', form: 'Comprimidos orales', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 24 y 100 comprimidos', excipients: 'Almidón de trigo, talco' }
    ],
    mechanismOfAction: {
      summary: 'Profármaco convertido a ácido pirazinoico (POA) activo por la enzima micobacteriana pirazinamidasa (pncA); el POA acidifica el citoplasma bacteriano, desestabiliza el potencial de membrana e inhibe la síntesis de ácidos grasos (sintasa I de ácidos grasos / FAS I).',
      detailed: 'Actúa de manera óptima a pH ácido (pH < 5.5), exactamente el microambiente encontrado en el interior de los fagosomas de macrófagos inflamatorios y lesiones caseosas tuberculosas necróticas. Su acción esterilizante esteriliza los reservorios cerrados que de otro modo causarían recaídas.',
      targetReceptor: 'Sintasa de ácidos grasos micobacteriana FAS I y transporte transmembrana',
      keyPoints: ['Es el fármaco clave que permitió históricamente reducir el tratamiento antituberculoso de 9 a 6 meses', 'HIPERURICEMIA Y ARTRALGIAS casi universales (el ácido pirazinoico compite con el ácido úrico en el transportador URAT1 renal)', 'EL MÁS HEPATOTÓXICO del régimen antituberculoso RIPE']
    },
    indications: {
      approved: [
        'Tratamiento de la tuberculosis activa en fase inicial o intensiva (primeros 2 meses de tratamiento) en combinación con isoniacida, rifampicina y etambutol'
      ]
    },
    dosageAndPosology: {
      adults: '20 a 30 mg/kg/día por vía oral en dosis única diaria (habitualmente 1500 mg para peso 40-55 kg; 2000 mg para peso > 55-70 kg; máximo 2 g/día). Pauta intermitente supervisada: 35 mg/kg (hasta 2.5-3 g) 3 veces por semana durante los 2 primeros meses.',
      pediatric: '30 a 40 mg/kg/día en dosis única matutina (máximo 1.5 a 2 g/día).',
      renalAdjustment: 'TFG < 30 ml/min o hemodiálisis: 25 a 35 mg/kg 3 veces por semana tras la diálisis (NUNCA DIARIO para evitar acumulación tóxica de POA).',
      hepaticAdjustment: 'CONTRAINDICADO en insuficiencia hepática preexistente grave.',
      routes: ['Oral'],
      administrationNotes: 'Tomar preferentemente con el desayuno o comidas para reducir la irritación gástrica.'
    },
    safety: {
      contraindications: ['Hepatopatía grave activa', 'Gota úrica aguda refractaria', 'Hipersensibilidad a pirazinamida'],
      warnings: ['ES EL FÁRMACO MÁS HEPATOTÓXICO DE LOS ANTITUBERCULOSOS: puede causar necrosis hepática fulminante dosis-dependiente', 'HIPERURICEMIA Y ARTRALGIAS POLIARTICULARES (hombros, rodillas, dedos): se tratan sintomáticamente con paracetamol o AINES sin requerir suspensión salvo artritis gotosa aguda'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Aprobado por la OMS en embarazadas con tuberculosis activa; en algunas guías de EE.UU. se reserva si no es imprescindible.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Hiperuricemia (a menudo asintomática)', 'Artralgias y mialgias'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas, vómitos y anorexia', 'Elevación de transaminasas hepáticas', 'Rubor facial'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis tóxica aguda severa con ictericia', 'Crisis aguda de gota articular', 'Fotosensibilidad severa con pelagra'] }
    ],
    interactions: [
      { id: 'int-pza-1', interactingSubstance: 'Alopurinol / Probenecid', severity: 'Moderada', clinicalEffect: 'La pirazinamida inhibe la secreción de ácido úrico antagonizando el efecto de los fármacos uricosúricos.', recommendation: 'Ajustar la dosis para control de hiperuricemia.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-estreptomicina',
    name: 'Estreptomicina Sulfato (SM / S)',
    brandNames: ['Estreptomicina Sulfato', 'Streptomycin'],
    atcCode: 'J01GA01 / J04AB01',
    description: 'Primer antibiótico aminoglucósido descubierto en la historia (a partir de Streptomyces griseus) con acción bactericida rápida contra Mycobacterium tuberculosis extracelular y patógenos zoonóticos graves como Francisella tularensis y Yersinia pestis.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antifimicos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-str-1', form: 'Polvo para solución inyectable IM', concentration: '1000 mg (1 g)', route: 'Intramuscular', packaging: 'Vial de vidrio con ampolla de agua para inyección', excipients: 'Sin conservantes' }
    ],
    mechanismOfAction: {
      summary: 'Inhibe la síntesis proteica bacteriana uniéndose irreversiblemente a la proteína S12 de la subunidad ribosomal 30S micobacteriana provocando lectura errónea del código genético y lisis celular bacteriana.',
      detailed: 'Bactericida potente de acción rápida dependiente de concentración. Su acción se limita a bacilos extracelulares en cavidades tuberculosas activas ricas en oxígeno con pH neutro o alcalino (inactiva en el medio intracelular ácido de los macrófagos).',
      targetReceptor: 'Proteína S12 del ARNr 16S en la subunidad ribosomal 30S',
      keyPoints: ['Primer antituberculoso de la historia; hoy reservado para retratamientos, alergia grave a etambutol o tuberculosis multirresistente (MDR-TB)', 'Fármaco de primera elección absoluta para Peste (Yersinia pestis) y Tularemia (Francisella tularensis)', 'Ototoxicidad vestibular irreversible (ataxia y vértigo) y nefrotoxicidad']
    },
    indications: {
      approved: [
        'Tuberculosis activa resistente o retratamientos en pautas combinadas de rescate',
        'Peste bubónica, septicémica y neumónica por Yersinia pestis (fármaco de elección)',
        'Tularemia glandular, ulceroglandular y tifoidea por Francisella tularensis (estándar de oro)',
        'Brucelosis aguda grave (en combinación obligatoria con doxiciclina)',
        'Endocarditis estreptocócica y enterocócica por Enterococcus faecalis (sinergismo con penicilina G)'
      ]
    },
    dosageAndPosology: {
      adults: 'Tuberculosis: 15 mg/kg/día (habitualmente 750 mg a 1 g) por vía intramuscular profunda una vez al día (o 2 a 3 veces por semana en pautas intermitentes supervisadas). Reducir a 500-750 mg/día en pacientes > 60 años o < 50 kg. Tularemia / Peste: 1 g IM cada 12 horas durante 10 a 14 días. Brucelosis: 1 g IM al día durante 14 a 21 días (asociado a doxiciclina oral 45 días).',
      pediatric: 'Tuberculosis: 20 a 40 mg/kg/día por vía IM profunda en dosis única (máximo 1 g/día).',
      renalAdjustment: 'OBLIGATORIO AJUSTAR SEGÚN ACLARAMIENTO: TFG 10-50 ml/min: administrar cada 24-72 horas o dosificar por niveles plasmáticos valle (< 2 mcg/ml).',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Intramuscular'],
      administrationNotes: 'INYECCIÓN EXCLUSIVAMENTE POR VÍA INTRAMUSCULAR PROFUNDA en cuadrante superior externo del glúteo. Alternar los sitios de punción.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a aminoglucósidos', 'Miastenia gravis', 'Embarazo (ototoxicidad y sordera congénita severa en el feto)', 'Hipoacusia o daño vestibular previo'],
      warnings: ['OTOTOXICIDAD VESTIBULAR IRREVERSIBLE: ataxia, vértigo intenso, nistagmo y desequilibrio; monitorear función vestibular y auditiva', 'NEFROTOXICIDAD tubular con necrosis tubular aguda', 'Bloqueo neuromuscular'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'TERATÓGENO PROBADO: causa sordera neurosensorial bilateral congénita irreversible en el feto.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con la lactancia materna; baja absorción digestiva en el lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de ototoxicidad vestibular y coclear irreversible, nefrotoxicidad y bloqueo neuromuscular con paro respiratorio.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Vértigo, inestabilidad y mareo vestibular', 'Tinnitus y disminución de agudeza auditiva', 'Elevación de urea y creatinina (nefrotoxicidad)', 'Dolor e induración en el sitio de inyección IM'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Parestesias periorales y entumecimiento facial transitorio tras la inyección'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Sordera neurosensorial bilateral permanente', 'Insuficiencia renal aguda anúrica', 'Bloqueo neuromuscular y parálisis respiratoria'] }
    ],
    interactions: [
      { id: 'int-str-1', interactingSubstance: 'Furosemida / Ácido Etacrínico', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico crítico de ototoxicidad cocleovestibular irreversible.', recommendation: 'Evitar asociar aminoglucósidos con diuréticos de asa.' },
      { id: 'int-str-2', interactingSubstance: 'Relajantes musculares (Pancuronio, Rocuronio)', severity: 'Mayor', clinicalEffect: 'Potenciación del bloqueo neuromuscular con apnea respiratoria prolongada.', recommendation: 'Vigilar en anestesia y revertir con calcio.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
