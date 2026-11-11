import { Medication } from '../../types/pharmacy';

export const ANTISEPTICS_ANTIBIOTICS_MEDICATIONS: Medication[] = [
  // --- 4.1. ANTISÉPTICOS TÓPICOS ---
  {
    id: 'med-povidona-yodada',
    name: 'Povidona Yodada (Iodopovidona)',
    brandNames: ['Betadine', 'Isodine', 'Povidona'],
    atcCode: 'D08AG02',
    description: 'Complejo químico soluble de yodo elemental con polivinilpirrolidona (PVP) que libera yodo libre sostenido con actividad microbicida de amplísimo espectro sobre bacterias, hongos, esporas y virus.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antisepticos'],
    presentations: [
      { id: 'p-pvd-1', form: 'Solución dérmica tópica al 10%', concentration: '100 mg / ml (1% de yodo disponible)', route: 'Tópica', packaging: 'Frasco de 50 ml, 125 ml y 500 ml', excipients: 'Glicerol, fosfato disódico' },
      { id: 'p-pvd-2', form: 'Gel dérmico al 10%', concentration: '100 mg / g', route: 'Tópica', packaging: 'Tubo de 30 g y 100 g', excipients: 'Macrogol 400 y 4000' },
      { id: 'p-pvd-3', form: 'Jabón quirúrgico / solución jabonosa al 7.5%', concentration: '75 mg / ml', route: 'Tópica', packaging: 'Frasco dosificador de 500 ml', excipients: 'Lauriléter sulfato sódico' }
    ],
    mechanismOfAction: {
      summary: 'Yodación y oxidación letal de proteínas estructurales, enzimas metabólicas y ácidos nucleicos bacterianos.',
      detailed: 'El polímero PVP actúa como reservorio que libera gradualmente yodo diatómico libre (I2) activo. El yodo penetra las membranas microbianas y oxida los grupos sulfhidrilo (-SH) y fenólicos de aminoácidos esenciales (cisteína, tirosina), precipitando las proteínas celulares y destruyendo la integridad estructural de la envoltura celular y material genético.',
      targetReceptor: 'Proteínas y lípidos de la pared y membrana celular bacteriana',
      keyPoints: ['Antiséptico de amplísimo espectro (bacterias Gram+, Gram-, micobacterias, hongos, virus con y sin envoltura)', 'Requiere secado en piel (al menos 2 minutos) para liberar el yodo activo y ejercer su máxima acción', 'Se inactiva en presencia de pus, sangre o materia orgánica abundante']
    },
    indications: {
      approved: ['Antisepsia preoperatoria del campo quirúrgico en piel intacta', 'Lavado quirúrgico de manos del personal sanitario', 'Desinfección de heridas superficiales, quemaduras leves y abrasiones'],
      offLabel: ['Pleurodesis química en derrame pleural recidivante']
    },
    dosageAndPosology: {
      adults: 'Aplicar directamente sin diluir sobre la piel limpia y seca de la zona a desinfectar. Dejar actuar durante 2 minutos hasta el secado espontáneo para fijar la película antiséptica.',
      pediatric: 'Contraindicado en neonatos y prematuros por absorción transcutánea de yodo y riesgo de hipotiroidismo.',
      renalAdjustment: 'Evitar uso en quemaduras extensas si hay insuficiencia renal por toxicidad del yodo absorbido.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'No mezclar nunca con derivados mercuriales (Merbromina) porque forma yoduro de mercurio fuertemente cáustico.'
    },
    safety: {
      contraindications: ['Hipersensibilidad al yodo', 'Hipertiroidismo activo, bocio nodular o enfermedad tiroidea autoinmune', 'Neonatos de bajo peso (< 32 semanas)', 'Tratamiento simultáneo con radioyodo'],
      warnings: ['Absorción sistémica significativa si se aplica en heridas abiertas extensas o grandes quemados (riesgo de acidosis metabólica y nefrotoxicidad)'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'El yodo cruza la placenta y la piel del feto provocando bocio e hipotiroidismo congénito.',
      lactation: 'Contraindicado',
      lactationNotes: 'El yodo se concentra en la leche materna causando hipotiroidismo neonatal.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Irritación cutánea local leve', 'Dermatitis de contacto alérgica', 'Tinción marrón transitoria de la piel'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hipotiroidismo inducido por efecto Wolff-Chaikoff', 'Acidosis metabólica e hipernatremia (en quemaduras masivas)'] }
    ],
    interactions: [
      { id: 'int-pvd-1', interactingSubstance: 'Derivados de plata (Sulfadiazina argéntica) o Mercurio', severity: 'Contraindicada', clinicalEffect: 'Formación de precipitados químicos cáusticos e inactivación mutua.', recommendation: 'No asociar con mercurio o plata.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-hipoclorito-sodico',
    name: 'Hipoclorito Sódico (Solución de Dakin / Antiséptico)',
    brandNames: ['Solución de Dakin', 'Amukina', 'Hipoclorito al 0.05% - 0.5%'],
    atcCode: 'D08AX07',
    description: 'Agente oxidante halogenado clorado que libera ácido hipocloroso (HOCl), eficaz desbridante químico y bactericida en heridas crónicas colonizadas y lechos ulcerosos necróticos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antisepticos'],
    presentations: [
      { id: 'p-hcl-1', form: 'Solución acuosa tamponada al 0.05% y 0.5%', concentration: '0.5 mg/ml (0.05%) y 5 mg/ml (0.5% solución de Dakin modificada)', route: 'Tópica', packaging: 'Frasco de 250 ml y 500 ml opaco', excipients: 'Bicarbonato de sodio (para tamponar el pH)' }
    ],
    mechanismOfAction: {
      summary: 'Oxidación de grupos sulfhidrilo de enzimas bacterianas y disolución proteolítica de tejido necrótico.',
      detailed: 'En solución acuosa genera ácido hipocloroso (HOCl) e ion hipoclorito (OCl-). El HOCl es neutro y difunde velozmente a través de las paredes celulares bacterianas oxidando irreversiblemente cadenas respiratorias y proteínas transportadoras. Posee además una acción lítica suave sobre la fibrina y exudado necrótico facilitando la limpieza de heridas tórpidas.',
      targetReceptor: 'Pared celular, enzimas bacterianas y matriz necrótica',
      keyPoints: ['Potente acción desodorizante en heridas infectadas fétidas', 'Elimina biofilm bacteriano en úlceras por presión', 'Debe mantenerse en frascos opacos protegidos de la luz porque se descompone velozmente']
    },
    indications: {
      approved: ['Irrigación y desbridamiento químico de úlceras por presión y pie diabético infectado', 'Curación de heridas abiertas con tejido desvitalizado o abundante pus'],
      offLabel: ['Irrigación de conductos radiculares en endodoncia (concentraciones específicas)']
    },
    dosageAndPosology: {
      adults: 'Irrigación directa de la herida o aplicación mediante gasas empapadas durante 10 a 15 minutos en la cura de heridas infectadas, una o dos veces al día.',
      pediatric: 'Uso diluido bajo control médico.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'Proteger la piel perilesional sana con pasta de zinc o vaselina para evitar maceración o dermatitis química.'
    },
    safety: {
      contraindications: ['Hipersensibilidad al cloro', 'No aplicar en cavidades corporales cerradas o directamente sobre meninges o tejido nervioso'],
      warnings: ['Irritante sobre tejido de granulación sano en concentraciones > 0.5%'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en uso tópico limitado.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Sensación de ardor o escozor local', 'Irritación de bordes de herida'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Dermatitis de contacto cáustica por exceso de concentración'] }
    ],
    interactions: [
      { id: 'int-hcl-1', interactingSubstance: 'Ácidos o Peróxido de hidrógeno', severity: 'Mayor', clinicalEffect: 'Liberación de gas cloro tóxico o neutralización química violenta.', recommendation: 'No mezclar con otros antisépticos.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-benzalconio-benzetonio',
    name: 'Cloruro de Benzalconio y Benzetonio',
    brandNames: ['Bactine', 'Merthiolate nuevo', 'Benzal', 'Drapolene'],
    atcCode: 'D08AJ01',
    description: 'Surfactantes catiónicos pertenecientes a la familia de los amonios cuaternarios con propiedades detergentes, antisépticas y desinfectantes bactericidas contra Gram positivos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antisepticos'],
    presentations: [
      { id: 'p-bzk-1', form: 'Solución tópica y spray dérmico al 0.13%', concentration: '1.3 mg / ml', route: 'Tópica', packaging: 'Frasco pulverizador de 100 ml y 200 ml', excipients: 'Agua purificada' }
    ],
    mechanismOfAction: {
      summary: 'Disrupción de la membrana citoplasmática bacteriana mediada por carga electrostática positiva.',
      detailed: 'Al ser cationes tensioactivos cargados positivamente, se adsorben a los fosfolípidos aniónicos de la membrana celular de las bacterias Gram positivas. Desestabilizan la bicapa lipídica, alteran la permeabilidad selectiva y provocan la pérdida inmediata de iones potasio intracelulares y la lisis osmótica del microorganismo.',
      targetReceptor: 'Membrana citoplasmática celular microbiana',
      keyPoints: ['Excelente acción frente a Gram positivos (Staphylococcus, Streptococcus)', 'Eficacia débil frente a Pseudomonas aeruginosa y micobacterias', 'SE INACTIVAN TOTALMENTE EN PRESENCIA DE JABONES COMUNES (surfactantes aniónicos)']
    },
    indications: {
      approved: ['Antisepsia de primeros auxilios en raspaduras, rasguños y cortes menores', 'Conservante antimicrobiano en colirios y preparados nasales'],
      offLabel: ['Limpieza de instrumental no crítico']
    },
    dosageAndPosology: {
      adults: 'Aplicar una pequeña cantidad o pulverizar directamente sobre la zona afectada limpia 1 a 3 veces al día.',
      pediatric: 'Apto para niños mayores de 2 años.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'Enjuagar exhaustivamente todo residuo de jabón con agua antes de aplicar el amonio cuaternario, ya que el jabón anula por completo su acción.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a amonios cuaternarios', 'Heridas punzantes profundas o mordeduras animales graves'],
      warnings: ['Toxicidad corneal si se usa en altas concentraciones'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Uso tópico seguro en heridas pequeñas.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Irritación cutánea transitoria'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Dermatitis alérgica de contacto'] }
    ],
    interactions: [
      { id: 'int-bzk-1', interactingSubstance: 'Jabones aniónicos tradicionales', severity: 'Contraindicada', clinicalEffect: 'Neutralización química completa de la acción bactericida.', recommendation: 'Enjuagar exhaustivamente antes de aplicar.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-peroxido-hidrogeno',
    name: 'Peróxido de Hidrógeno (Agua Oxigenada)',
    brandNames: ['Agua Oxigenada Foret al 3%', 'Agua Oxigenada 10 volúmenes'],
    atcCode: 'D08AX01',
    description: 'Agente oxidante que libera radicales libres hidroxilo altamente reactivos y efervescencia mecánica de oxígeno para desbridamiento de coágulos y detritos.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antisepticos'],
    presentations: [
      { id: 'p-h2o2-1', form: 'Solución dérmica tópica al 3% (10 volúmenes)', concentration: '30 mg / ml', route: 'Tópica', packaging: 'Frasco opaco de 250 ml, 500 ml y 1000 ml', excipients: 'Ácido fosfórico (estabilizante)' }
    ],
    mechanismOfAction: {
      summary: 'Generación de radicales libres hidroxilo (-OH) oxidantes y efervescencia mecánica por acción de la catalasa tisular.',
      detailed: 'Al entrar en contacto con la sangre y tejidos lesionados, la enzima catalasa descompone rápidamente el H2O2 en agua y oxígeno gaseoso (O2). El burbujeo efervescente desprende mecánicamente coágulos, pus, bacterias anaerobias y detritos celulares. Los radicales libres oxidan lípidos de membrana y ADN microbiano.',
      targetReceptor: 'Lípidos de membrana celular y enzimas celulares',
      keyPoints: ['Eficacia bactericida débil y transitoria por descomposición casi instantánea por la catalasa', 'Excelente limpiador mecánico y hemostático capilar en hemorragias superficiales', 'NUNCA irrigar a presión en cavidades cerradas por riesgo mortal de embolia gaseosa']
    },
    indications: {
      approved: ['Limpieza mecánica y desodorización de heridas sucias con detritos y costras', 'Hemostático capilar leve en hemorragias superficiales', 'Antiséptico bucal en gargarismos (diluido al 1.5%) para gingivitis'],
      offLabel: ['Remoción de cerumen ótico impactado']
    },
    dosageAndPosology: {
      adults: 'Aplicar directamente sin diluir sobre la herida mediante gasa empapada para desprender costras. Como colutorio: diluir 1:1 con agua.',
      pediatric: 'Apto para uso externo.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'NUNCA inyectar ni irrigar en heridas cerradas, fístulas o cavidades no drenadas (riesgo de embolia gaseosa de oxígeno en vasos sanguíneos).'
    },
    safety: {
      contraindications: ['Irrigación de cavidades corporales cerradas o fístulas profundas'],
      warnings: ['Retrasa la cicatrización si se usa repetidamente en heridas limpias por citotoxicidad sobre fibroblastos'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en uso cutáneo.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Escozor y quemazón transitoria', 'Blanqueamiento temporal de la piel'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Embolia gaseosa mortal si se instila en cavidades'] }
    ],
    interactions: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-clorhexidina',
    name: 'Clorhexidina (Gluconato / Digluconato)',
    brandNames: ['Cristalmina', 'Hibiscrub', 'ChloraPrep', 'Bexident'],
    atcCode: 'D08AC02',
    description: 'Bisbiguanida catiónica antiséptica de amplio espectro con una extraordinaria persistencia y sustantividad cutánea (remanencia antibacteriana de más de 6 a 24 horas).',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antisepticos'],
    presentations: [
      { id: 'p-clx-1', form: 'Solución acuosa o alcohólica dérmica al 2% (gluconato)', concentration: '20 mg / ml (en alcohol isopropílico al 70%)', route: 'Tópica', packaging: 'Aplicadores estériles desechables de 1.5, 3 y 26 ml', excipients: 'Alcohol isopropílico al 70%' },
      { id: 'p-clx-2', form: 'Solución acuosa en spray transparente al 1%', concentration: '10 mg / ml', route: 'Tópica', packaging: 'Frasco nebulizador de 25 ml y 100 ml', excipients: 'Agua purificada' },
      { id: 'p-clx-3', form: 'Colutorio bucal al 0.12% y 0.2%', concentration: '1.2 mg/ml y 2 mg/ml', route: 'Tópica', packaging: 'Frasco de 250 ml y 500 ml', excipients: 'Xilitol, aroma menta' }
    ],
    mechanismOfAction: {
      summary: 'Adsorción a la pared microbiana con rotura de la membrana citoplasmática y precipitación irreversible del contenido intracelular.',
      detailed: 'Es una base dicatiónica que se une fuertemente a los fosfolípidos y lipopolisacáridos aniónicos de la pared bacteriana. A concentraciones bajas altera la permeabilidad celular produciendo fuga de iones potasio y fósforo. A concentraciones bactericidas (> 0.1%) penetra al citoplasma causando la coagulación y precipitación irreversible de proteínas y ácidos nucleicos. Posee alta sustantividad uniéndose a las proteínas del estrato córneo cutáneo y esmalte dental.',
      targetReceptor: 'Membrana bacteriana y estrato córneo',
      keyPoints: ['Antiséptico de elección estándar de oro para inserción de catéteres vasculares y campo quirúrgico', 'Persistencia antimicrobiana prolongada de hasta 24 horas sobre la piel', 'OTOTÓXICA Y NEUROTÓXICA: jamás aplicar en oído medio o sobre tejido cerebral/meninges']
    },
    indications: {
      approved: ['Preparación preoperatoria de la piel y desinfección del punto de inserción de catéteres venosos centrales', 'Antisepsia de heridas y quemaduras superficiales', 'Control de placa bacteriana, gingivitis y periodontitis en odontología (colutorio)'],
      offLabel: ['Baños diarios de clorhexidina en pacientes de UCI para prevenir bacteriemias']
    },
    dosageAndPosology: {
      adults: 'Piel para punción vascular / cirugía: Aplicar solución al 2% en alcohol y frotar activamente durante 30 segundos; dejar secar al aire durante al menos 2 minutos. Enjuague bucal: 15 ml de solución al 0.12% durante 1 minuto dos veces al día.',
      pediatric: 'Apto para niños; usar con cautela en prematuros extremos < 28 semanas por riesgo de quemadura química.',
      renalAdjustment: 'No precisa ajuste.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Tópica'],
      administrationNotes: 'DEJAR SECAR POR COMPLETO antes de usar electrobisturí cuando se empleen formulaciones alcohólicas para evitar inflamación y fuego quirúrgico.'
    },
    safety: {
      contraindications: ['Cirugía de oído medio o perforación timpánica (ototoxicidad con sordera neurosensorial irreversible)', 'Contacto directo con meninges o tejido nervioso cerebral (neurotoxicidad grave)', 'Cirugía oftalmológica (toxicidad corneal)'],
      warnings: ['Riesgo de anafilaxia alérgica grave mediada por IgE en pacientes sensibilizados'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Absorción dérmica nula; muy segura.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Tinción marrón reversible de dientes y lengua con el colutorio bucal', 'Alteración transitoria del gusto (disgeusia)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Anafilaxia por clorhexidina', 'Sordera neurosensorial por entrada al oído medio'] }
    ],
    interactions: [
      { id: 'int-clx-1', interactingSubstance: 'Jabones aniónicos o Povidona yodada', severity: 'Mayor', clinicalEffect: 'Precipitación química e inactivación de la clorhexidina.', recommendation: 'Enjuagar exhaustivamente la piel antes de aplicar clorhexidina.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- ANTISÉPTICOS URINARIOS Y FLUOROQUINOLONAS POR GENERACIONES ---
  {
    id: 'med-nitrofurantoina',
    name: 'Nitrofurantoína',
    brandNames: ['Furantoina', 'Macrodantin', 'Macrobid'],
    atcCode: 'J01XE01',
    description: 'Antibacteriano sintético nitrofurano de uso oral con acción exclusiva en la luz del tracto urinario. Fármaco de primera línea para cistitis aguda no complicada.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antisepticos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-ntf-1', form: 'Cápsulas de macrocristales y comprimidos', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 cápsulas', excipients: 'Lactosa monohidrato, almidón' }
    ],
    mechanismOfAction: {
      summary: 'Reducción intracelular bacteriana a intermediarios electrofílicos reactivos que atacan el ADN ribosomal.',
      detailed: 'Es reducida por las nitrorreductasas bacterianas hacia intermediarios reactivos altamente inestables que atacan de forma múltiple las proteínas ribosomales bacterianas, el ADN, la respiración celular y la síntesis de pared. Su multidiánica actividad previene el desarrollo de resistencias bacterianas tras décadas de uso.',
      targetReceptor: 'Ribosomas, enzimas y ADN bacteriano',
      keyPoints: ['Concentraciones plasmáticas nulas (NO USAR EN PIELONEFRITIS NI PROSTATITIS)', 'Excreción renal masiva alcanzando concentraciones urinarias bactericidas muy elevadas', 'Ineficaz y tóxica si el filtrado glomerular es < 30-45 ml/min']
    },
    indications: {
      approved: ['Tratamiento de primera línea de la cistitis aguda bacteriana no complicada en mujeres', 'Profilaxis de infecciones urinarias bajas recurrentes no complicadas'],
      offLabel: ['Bacteriuria asintomática en la embarazada (primer y segundo trimestre)']
    },
    dosageAndPosology: {
      adults: 'Cistitis aguda: 100 mg cada 12 horas (macrocristales) o 50 mg cada 6 horas con las comidas durante 5 a 7 días. Profilaxis recurrente: 50 a 100 mg una vez al día al acostarse.',
      pediatric: '5 a 7 mg/kg/día en 4 tomas.',
      renalAdjustment: 'CONTRAINDICADO si ClCr < 45 ml/min (no alcanza concentraciones urinarias eficaces y se acumula en sangre causando polineuropatía).',
      hepaticAdjustment: 'Contraindicado en colestasis o disfunción hepática previa.',
      routes: ['Oral'],
      administrationNotes: 'Tomar siempre con las comidas o con un vaso de leche para maximizar su biodisponibilidad y tolerabilidad digestiva.'
    },
    safety: {
      contraindications: ['Insuficiencia renal con TFG < 45 ml/min', 'Embarazo a término (semanas 38-42) y durante el parto por riesgo de anemia hemolítica neonatal', 'Déficit de glucosa-6-fosfato deshidrogenasa'],
      warnings: ['Toxicidad pulmonar aguda (neumonitis alérgica) y crónica (fibrosis pulmonar irreversible en tratamientos > 6 meses)', 'Neuropatía periférica sensitivo-motora grave en fallo renal'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en 1er y 2do trimestre; contraindicado a término (semana 38+) por riesgo de anemia hemolítica neonatal por inmadurez enzimática eritrocitaria.',
      lactation: 'Precaución',
      lactationNotes: 'Evitar si el lactante tiene < 1 mes o déficit de G6PD.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Náuseas', 'Coloración marrón-amarillenta oscura inocua de la orina'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Cefalea', 'Pérdida de apetito', 'Gases'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Fibrosis pulmonar crónica intersticial', 'Hepatitis colestásica autoinmune', 'Neuropatía periférica grave'] }
    ],
    interactions: [
      { id: 'int-ntf-1', interactingSubstance: 'Antiácidos con Trisilicato de Magnesio', severity: 'Mayor', clinicalEffect: 'Adsorben la nitrofurantoína en el tracto digestivo impidiendo su absorción.', recommendation: 'Separar las tomas al menos 2 horas.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-acido-nalidixico',
    name: 'Ácido Nalidíxico (Fluoroquinolona de 1ª Generación)',
    brandNames: ['Wintomylon', 'Nalidixic Acid'],
    atcCode: 'J01MB02',
    description: 'Quinolona clásica de primera generación sin átomo de flúor con actividad restringida exclusivamente a enterobacterias en orina.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antisepticos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-nalx-1', form: 'Comprimidos orales', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 20 comprimidos', excipients: 'Almidón, celulosa' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la subunidad A de la ADN girasa (topoisomerasa II) bacteriana.',
      detailed: 'Bloquea el enrollamiento del ADN durante la transcripción y replicación bacteriana en enterobacterias (E. coli, Proteus, Klebsiella). Carece de flúor en posición 6, lo que restringe su actividad frente a Gram positivos y Pseudomonas.',
      targetReceptor: 'ADN girasa bacteriana (Topoisomerasa II)',
      keyPoints: ['Quinolona de 1ª generación', 'No alcanza niveles terapéuticos sistémicos en sangre ni tejidos (solo urinarios)', 'Rápida emergencia de resistencias cromosómicas']
    },
    indications: {
      approved: ['Infecciones urinarias bajas no complicadas causadas por enterobacterias susceptibles']
    },
    dosageAndPosology: {
      adults: '1 g cada 6 horas por vía oral durante 7 a 14 días. En tratamientos crónicos reducir a 500 mg cada 6h.',
      pediatric: 'Contraindicado en niños menores de 3 meses.',
      renalAdjustment: 'Contraindicado si TFG < 30 ml/min.',
      hepaticAdjustment: 'Usar con cautela.',
      routes: ['Oral'],
      administrationNotes: 'Tomar con el estómago vacío 1 hora antes de las comidas.'
    },
    safety: {
      contraindications: ['Antecedente de convulsiones', 'Déficit de G6PD', 'Insuficiencia renal severa'],
      warnings: ['Hipertensión intracraneal benigna en niños (abombamiento fontanelar)', 'Fotosensibilidad'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Evitar en gestación.',
      lactation: 'Contraindicado',
      lactationNotes: 'Riesgo de hemólisis en el lactante.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas', 'Vómitos', 'Fotosensibilidad cutánea', 'Cefalea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Convulsiones', 'Hipertensión endocraneana pseudotumor cerebri'] }
    ],
    interactions: [],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ciprofloxacino',
    name: 'Ciprofloxacino (Fluoroquinolona de 2ª Generación)',
    brandNames: ['Ciproxina', 'Baycip', 'Cipro', 'Rigoran'],
    atcCode: 'J01MA02',
    description: 'Fluoroquinolona de segunda generación de amplio espectro con extraordinaria actividad bactericida contra bacilos Gram negativos, incluyendo Pseudomonas aeruginosa.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antisepticos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-cip-1', form: 'Comprimidos recubiertos', concentration: '250 mg, 500 mg y 750 mg', route: 'Oral', packaging: 'Caja x 14 y 20 comprimidos', excipients: 'Almidón de maíz, hipromelosa' },
      { id: 'p-cip-2', form: 'Solución para perfusión intravenosa', concentration: '200 mg / 100 ml y 400 mg / 200 ml', route: 'Intravenosa', packaging: 'Bolsa de infusión IV', excipients: 'Ácido láctico, glucosa' },
      { id: 'p-cip-3', form: 'Gotas óticas y oftálmicas', concentration: '3 mg / ml (0.3%)', route: 'Oftálmica', packaging: 'Frasco gotero de 5 ml', excipients: 'Acetato de sodio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición dual de la ADN girasa (topoisomerasa II) y topoisomerasa IV bacterianas.',
      detailed: 'El átomo de flúor en posición 6 y el anillo piperazina en posición 7 potencian su penetración y fijación al complejo ADN-girasa. Impide la relajación del superenrollamiento negativo del ADN bacteriano durante la horquilla de replicación provocando roturas en la doble hélice y muerte bacteriana rápida.',
      targetReceptor: 'ADN girasa bacteriana (GyrA) y Topoisomerasa IV (ParC)',
      keyPoints: ['Fluoroquinolona más potente frente a Pseudomonas aeruginosa', 'Excelente biodisponibilidad oral (70-80%) y penetración en tejido prostático y óseo', 'Black Box Warning: tendinitis y rotura del tendón de Aquiles']
    },
    indications: {
      approved: ['Infecciones urinarias complicadas y pielonefritis aguda', 'Prostatitis bacteriana aguda y crónica', 'Gastroenteritis bacteriana grave y fiebre tifoidea (Salmonella, Shigella)', 'Infecciones respiratorias graves por Pseudomonas en fibrosis quística', 'Profilaxis de meningitis meningocócica (dosis única oral)'],
      offLabel: ['Otitis externa maligna']
    },
    dosageAndPosology: {
      adults: 'Oral: 500 a 750 mg cada 12 horas. Infecciones urinarias no complicadas: 250 a 500 mg cada 12h por 3 días. Vía IV: 400 mg cada 8 a 12 horas en infusión de 60 minutos.',
      pediatric: 'Uso restringido a infecciones graves por Pseudomonas en fibrosis quística o ántrax por riesgo de artropatía de articulaciones de carga.',
      renalAdjustment: 'ClCr 30-50 ml/min: 250-500 mg cada 12h. ClCr < 30 ml/min: 250-500 mg cada 24h.',
      hepaticAdjustment: 'No precisa ajuste.',
      routes: ['Oral', 'Intravenosa', 'Oftálmica'],
      administrationNotes: 'NO tomar con leche, yogur o antiácidos con calcio, magnesio o aluminio (quelación masiva que impide la absorción).'
    },
    safety: {
      contraindications: ['Hipersensibilidad a fluoroquinolonas', 'Antecedente de tendinitis o rotura tendinosa previa por quinolonas', 'Uso concomitante con tizanidina'],
      warnings: ['Tendinitis y rotura del tendón de Aquiles (cesar inmediatamente si aparece dolor tendinoso)', 'Aneurisma y disección aórtica (advertencia de seguridad)', 'Neuropatía periférica sensitiva y prolongación del intervalo QT'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo (artropatía y lesión del cartílago de crecimiento fetal en estudios animales).',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de tendinitis y rotura tendinosa, neuropatía periférica potencialmente irreversible y efectos graves del SNC.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas', 'Diarrea', 'Vómitos', 'Cefalea', 'Insomnio'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Tendinitis aquilea', 'Artralgias', 'Fotosensibilidad'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Rotura completa del tendón de Aquiles', 'Disección aórtica', 'Colitis pseudomembranosa por C. difficile'] }
    ],
    interactions: [
      { id: 'int-cip-1', interactingSubstance: 'Cationes multivalentes (Calcio, Hierro, Magnesio, Aluminio)', severity: 'Contraindicada', clinicalEffect: 'Formación de quelatos insolubles con caída de la absorción de ciprofloxacino en un 90%.', recommendation: 'Separar la toma al menos 2 horas antes o 4 horas después de lácteos o suplementos minerales.' },
      { id: 'int-cip-2', interactingSubstance: 'Teofilina', severity: 'Mayor', clinicalEffect: 'Ciprofloxacino inhibe el CYP1A2 duplicando los niveles de teofilina con convulsiones y arritmias graves.', recommendation: 'Reducir la dosis de teofilina a la mitad y monitorizar niveles.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-levofloxacino',
    name: 'Levofloxacino (Fluoroquinolona de 3ª Generación)',
    brandNames: ['Tavanic', 'Levaquin', 'Levogastrol'],
    atcCode: 'J01MA12',
    description: 'Fluoroquinolona de tercera generación ("quinolona respiratoria"), enantiómero L activo del ofloxacino con cobertura reforzada frente a Streptococcus pneumoniae y patógenos atípicos intracelulares.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antisepticos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-lev-1', form: 'Comprimidos recubiertos ranurados', concentration: '250 mg y 500 mg', route: 'Oral', packaging: 'Caja x 7 y 14 comprimidos', excipients: 'Crospovidona, hipromelosa' },
      { id: 'p-lev-2', form: 'Solución para perfusión intravenosa', concentration: '500 mg / 100 ml', route: 'Intravenosa', packaging: 'Frasco de infusión IV', excipients: 'Cloruro de sodio' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición selectiva balanceada de la ADN girasa y Topoisomerasa IV.',
      detailed: 'Es el S-(-)-enantiómero ópticamente activo con una potencia bactericida 8 a 128 veces superior a su enantiómero D. Ejerce una actividad muy superior contra neumococos resistentes a penicilina y bacterias atípicas intracelulares (Legionella pneumophila, Mycoplasma pneumoniae, Chlamydia pneumoniae) gracias a su concentración tisular pulmonar masiva.',
      targetReceptor: 'Topoisomerasa IV y ADN girasa bacterianas',
      keyPoints: ['Quinolona respiratoria de referencia', 'Biodisponibilidad oral del 99% (dosis oral e intravenosa idénticas)', 'Monodosis una vez al día cada 24 horas']
    },
    indications: {
      approved: ['Neumonía adquirida en la comunidad (NAC) moderada a grave', 'Exacerbación aguda de EPOC y bronquitis crónica', 'Pielonefritis aguda e infecciones urinarias complicadas', 'Prostatitis bacteriana crónica', 'Infecciones complicadas de piel y tejidos blandos']
    },
    dosageAndPosology: {
      adults: 'NAC / Infecciones complicadas: 500 mg una vez al día (o 500 mg cada 12 horas en neumonías graves) durante 7 a 14 días. Vía IV infundir 500 mg en 60 minutos.',
      pediatric: 'Contraindicado en niños y adolescentes en desarrollo.',
      renalAdjustment: 'ClCr 20-50 ml/min: 250 o 500 mg inicial, luego 250 mg cada 24h. ClCr < 20 ml/min: 250 o 500 mg inicial, luego 125 mg cada 24h.',
      hepaticAdjustment: 'No precisa ajuste (eliminación 85% renal inalterado).',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Infusión IV en no menos de 60 minutos.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a quinolonas', 'Epilepsia', 'Antecedente de tendinopatía aquilea por fluoroquinolonas', 'Menores de 18 años'],
      warnings: ['Tendinitis y rotura del tendón de Aquiles', 'Prolongación del intervalo QTc', 'Trastornos psiquiátricos agudos (delirio, alucinaciones, ideación suicida)'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en gestación.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche materna.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de tendinitis, rotura tendinosa, neuropatía periférica y disección aórtica.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Insomnio', 'Cefalea', 'Diarrea', 'Náuseas', 'Flebitis en sitio IV'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Tendinitis', 'Prolongación de intervalo QT', 'Candidiasis'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Rotura tendinosa', 'Torsades de Pointes', 'Hepatitis fulminante'] }
    ],
    interactions: [
      { id: 'int-lev-1', interactingSubstance: 'Corticoides sistémicos (Prednisona)', severity: 'Mayor', clinicalEffect: 'Aumento sinérgico masivo del riesgo de rotura bilateral del tendón de Aquiles.', recommendation: 'Evitar terminantemente la asociación simultánea de quinolonas y corticoides.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-moxifloxacino',
    name: 'Moxifloxacino (Fluoroquinolona de 4ª Generación)',
    brandNames: ['Actira', 'Avelox', 'Vigamox'],
    atcCode: 'J01MA14',
    description: 'Fluoroquinolona de cuarta generación de amplio espectro con sustitución metoxi en posición C8. Destaca por su potente actividad contra bacterias anaerobias y Gram positivos.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antisepticos', 'c-antibacterianos'],
    presentations: [
      { id: 'p-mox-1', form: 'Comprimidos recubiertos con película', concentration: '400 mg', route: 'Oral', packaging: 'Caja x 5 y 10 comprimidos', excipients: 'Lactosa monohidrato' },
      { id: 'p-mox-2', form: 'Solución para perfusión intravenosa', concentration: '400 mg / 250 ml', route: 'Intravenosa', packaging: 'Bolsa de infusión', excipients: 'Cloruro sódico' },
      { id: 'p-mox-3', form: 'Colirio oftálmico en solución al 0.5%', concentration: '5 mg / ml', route: 'Oftálmica', packaging: 'Frasco de 5 ml', excipients: 'Ácido bórico' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición equilibrada simultánea de ADN girasa y Topoisomerasa IV con espectro antianaeróbico.',
      detailed: 'El grupo metoxi en C8 confiere mayor actividad frente a mutantes bacterianos resistentes y menor propensión a generar resistencias por expulsión mediante bombas de eflujo. Cubre anaerobios intraabdominales (Bacteroides fragilis) y anaerobios orales sin requerir metronidazol adicional.',
      targetReceptor: 'ADN girasa y Topoisomerasa IV bacteriana',
      keyPoints: ['Quinolona con cobertura anaeróbica y frente a Gram positivos', 'Eliminación predominantemente hepática (NO ALCANZA CONCENTRACIONES EN ORINA: INEFICAZ EN ITU)', 'No requiere ajuste de dosis en insuficiencia renal de ningún grado']
    },
    indications: {
      approved: ['Neumonía adquirida en la comunidad grave', 'Enfermedad pélvica inflamatoria leve a moderada', 'Infecciones complicadas intraabdominales y de tejidos blandos'],
      offLabel: ['Tuberculosis multirresistente (fármaco de segunda línea)']
    },
    dosageAndPosology: {
      adults: '400 mg una vez al día por vía oral o infusión IV (en 60 minutos) durante 7 a 14 días.',
      pediatric: 'Contraindicado en menores de 18 años.',
      renalAdjustment: 'NO PRECISA AJUSTE EN NINGÚN GRADO DE INSUFICIENCIA RENAL NI EN HEMODIÁLISIS.',
      hepaticAdjustment: 'Contraindicado en insuficiencia hepática severa (Child-Pugh C) o transaminasas > 5 veces el valor normal.',
      routes: ['Oral', 'Intravenosa', 'Oftálmica'],
      administrationNotes: 'No usar en infecciones del tracto urinario por excreción urinaria activa insuficiente.'
    },
    safety: {
      contraindications: ['Insuficiencia hepática grave', 'Prolongación congénita o adquirida del intervalo QT', 'Uso concomitante con otros fármacos que prolongan el QT'],
      warnings: ['Es la fluoroquinolona con mayor potencial de prolongación del intervalo QT y arritmias ventriculares'],
      pregnancyCategory: 'C',
      pregnancyNotes: 'Contraindicado en embarazo.',
      lactation: 'Contraindicado',
      lactationNotes: 'Pasa a leche.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de tendinitis, rotura tendinosa, neuropatía periférica e insuficiencia hepática aguda fulminante.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea', 'Náuseas', 'Mareos', 'Prolongación del intervalo QT'] },
      { frequency: 'Poco frecuentes (0.1-1%)', effects: ['Palpitaciones', 'Aumento de enzimas hepáticas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatitis fulminante letal', 'Torsades de Pointes', 'Rotura tendinosa'] }
    ],
    interactions: [
      { id: 'int-mox-1', interactingSubstance: 'Antiarrítmicos clase IA (Quinidina, Procainamida) y clase III (Amiodarona, Sotalol)', severity: 'Contraindicada', clinicalEffect: 'Aumento sinérgico masivo del intervalo QTc con riesgo inminente de fibrilación ventricular.', recommendation: 'Combinación absolutamente contraindicada.' }
    ],
    updatedAt: new Date().toISOString()
  },

  // --- 4.2. ANTIBACTERIANOS CLÁSICOS ---
  {
    id: 'med-azitromicina',
    name: 'Azitromicina',
    brandNames: ['Zithromax', 'Zitromax', 'Vinzam', 'Toraseptol'],
    atcCode: 'J01FA10',
    description: 'Macrólido azalida semisintético de 15 átomos con prolongadísima vida media tisular (68 horas) y concentración masiva dentro de los fagocitos y macrófagos alveolares.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-azi-1', form: 'Comprimidos recubiertos', concentration: '500 mg', route: 'Oral', packaging: 'Caja x 3 comprimidos (pauta de 3 días)', excipients: 'Almidón pregelatinizado, hipromelosa' },
      { id: 'p-azi-2', form: 'Polvo para suspensión oral pediátrica', concentration: '200 mg / 5 ml', route: 'Oral', packaging: 'Frasco de 15 ml y 30 ml', excipients: 'Sacarosa, fosfato trisódico' },
      { id: 'p-azi-3', form: 'Polvo para solución para perfusión IV', concentration: '500 mg', route: 'Intravenosa', packaging: 'Vial de infusión', excipients: 'Ácido cítrico anhidro' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis proteica bacteriana por unión a la subunidad ribosomal 50S.',
      detailed: 'Se une reversiblemente al ARN ribosomal 23S de la subunidad 50S del ribosoma bacteriano, bloqueando la translocación del peptidil-ARNt e inhibiendo la elongación de la cadena polipeptídica. Es transportada activamente por leucocitos polimorfonucleares y macrófagos directamente hacia el foco inflamatorio, donde se liberan concentraciones hasta 50 veces superiores a las plasmáticas.',
      targetReceptor: 'Subunidad ribosomal 50S (sitio 23S)',
      keyPoints: ['Pauta corta de 3 días (500 mg/día) o 5 días debido a su efecto post-antibiótico tisular de 10 días', 'Excelente cobertura contra gérmenes atípicos (Mycoplasma, Chlamydia, Legionella)', 'Menor inhibición del citocromo CYP3A4 comparada con claritromicina']
    },
    indications: {
      approved: ['Infecciones respiratorias agudas (neumonía adquirida en la comunidad, exacerbación de EPOC, sinusitis)', 'Uretritis y cervicitis no gonocócica por Chlamydia trachomatis (1 g oral dosis única)', 'Infecciones de piel y tejidos blandos en alérgicos a betalactámicos', 'Profilaxis de infección diseminada por Mycobacterium avium complex (MAC) en VIH'],
      offLabel: ['Tratamiento antiinflamatorio e inmunomodulador crónico en bronquiectasias']
    },
    dosageAndPosology: {
      adults: 'Infecciones respiratorias: 500 mg una vez al día durante 3 días consecutivos (o 500 mg el día 1, seguido de 250 mg/día del día 2 al 5). Uretritis por Chlamydia: 1 g en dosis única oral.',
      pediatric: '10 mg/kg una vez al día durante 3 días.',
      renalAdjustment: 'No precisa ajuste si ClCr > 10 ml/min.',
      hepaticAdjustment: 'Usar con cautela en insuficiencia hepática.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Los comprimidos pueden tomarse con o sin comida.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a macrólidos o ketólidos', 'Antecedente de ictericia colestásica por azitromicina'],
      warnings: ['Prolongación del intervalo QT y arritmias ventriculares (Torsades de Pointes) en pacientes de riesgo'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Macrólido de elección seguro en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Baja transferencia a leche.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Diarrea y deposiciones blandas', 'Dolor abdominal'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas', 'Cefalea', 'Dispepsia'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Torsades de Pointes', 'Ictericia colestásica', 'Sordera transitoria a dosis muy altas'] }
    ],
    interactions: [
      { id: 'int-azi-1', interactingSubstance: 'Fármacos que prolongan el intervalo QT (Amiodarona, Haloperidol)', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de taquicardia ventricular polimórfica.', recommendation: 'Monitorear electrocardiograma.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-gentamicina',
    name: 'Gentamicina',
    brandNames: ['Gentalyn', 'Gentamicina Braun', 'Colircusi Gentamicina'],
    atcCode: 'J01GB03',
    description: 'Aminoglucósido bactericida de acción rápida y dependiente de concentración con potente actividad frente a bacilos Gram negativos aerobios y sinergismo clásico con betalactámicos en endocarditis.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-gen-1', form: 'Ampollas inyectables IV/IM', concentration: '40 mg / 2 ml y 80 mg / 2 ml', route: 'Intravenosa', packaging: 'Caja x 5 ampollas', excipients: 'Metabisulfito sódico, edetato disódico' },
      { id: 'p-gen-2', form: 'Colirio oftálmico en solución al 0.3%', concentration: '3 mg / ml', route: 'Oftálmica', packaging: 'Frasco gotero de 10 ml', excipients: 'Cloruro de benzalconio' }
    ],
    mechanismOfAction: {
      summary: 'Unión irreversible a la subunidad ribosomal 30S con lectura errónea del código genético bacteriano.',
      detailed: 'Requiere transporte activo dependiente de oxígeno a través de la membrana bacteriana (por lo que carece de actividad contra bacterias anaerobias). Se une irreversiblemente a la subunidad 30S del ribosoma impidiendo la iniciación de la síntesis proteica e introduciendo aminoácidos incorrectos en la cadena peptídica. Las proteínas aberrantes anómalas se insertan en la membrana celular bacteriana, alterando su permeabilidad y causando lisis celular rápida.',
      targetReceptor: 'Subunidad ribosomal 30S bacteriana',
      keyPoints: ['Bactericida concentración-dependiente (Cmax / CIM)', 'Efecto post-antibiótico prolongado (permite administración en monodosis única diaria)', 'Nefrotoxicidad tubular y ototoxicidad cocleovestibular irreversible']
    },
    indications: {
      approved: ['Sepsis bacteriana grave y shock séptico de origen urinario, intraabdominal o ginecológico', 'Endocarditis bacteriana enterocócica o estreptocócica (sinergismo obligado con ampicilina o ceftriaxona)', 'Pielonefritis aguda grave', 'Infecciones oculares bacterianas externas'],
      offLabel: ['Fiebre neutropénica en combinación con betalactámico antipseudomónico']
    },
    dosageAndPosology: {
      adults: 'Pauta de monodosis diaria (preferida): 5 a 7 mg/kg IV en infusión de 30-60 minutos una vez cada 24 horas. Sinergismo en endocarditis: 3 mg/kg/día divididos cada 8 o 12 horas. Monitorizar niveles valle (< 1 mcg/ml) para evitar nefrotoxicidad.',
      pediatric: 'Neonatos: 4 a 5 mg/kg cada 24-36 horas; niños: 6 a 7.5 mg/kg/día en 1 o 3 tomas.',
      renalAdjustment: 'OBLIGATORIO AJUSTAR según aclaramiento de creatinina: espaciar el intervalo a 36-48 horas o reducir dosis.',
      hepaticAdjustment: 'No precisa ajuste (eliminación 100% renal inalterada).',
      routes: ['Intravenosa', 'Intramuscular', 'Oftálmica'],
      administrationNotes: 'Infusión IV en 30 a 60 minutos en suero salino o glucosado. Monitorear creatinina y diuresis cada 48 horas.'
    },
    safety: {
      contraindications: ['Hipersensibilidad a aminoglucósidos', 'Miastenia gravis (los aminoglucósidos bloquean la liberación de acetilcolina en la placa motora agravando la debilidad)'],
      warnings: ['Nefrotoxicidad por necrosis tubular aguda (generalmente reversible)', 'Ototoxicidad vestibular y auditiva permanente e irreversible', 'Bloqueo neuromuscular y parálisis respiratoria si se inyecta en bolo IV rápido'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Teratógeno probado: ototoxicidad y sordera bilateral congénita fetal.',
      lactation: 'Compatible',
      lactationNotes: 'Baja absorción oral en el lactante.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de ototoxicidad coclear y vestibular irreversible, nefrotoxicidad y bloqueo neuromuscular.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Elevación de creatinina sérica y proteinuria (nefrotoxicidad)', 'Tinnitus', 'Vértigo y mareos vestibulares'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Sordera neurosensorial bilateral permanente', 'Fallo renal agudo anúrico', 'Parálisis neuromuscular'] }
    ],
    interactions: [
      { id: 'int-gen-1', interactingSubstance: 'Furosemida o Ácido Etacrínico', severity: 'Contraindicada', clinicalEffect: 'Potenciación extrema de ototoxicidad coclear y sordera permanente.', recommendation: 'Evitar asociar aminoglucósidos con diuréticos de asa.' },
      { id: 'int-gen-2', interactingSubstance: 'Relajantes neuromusculares (Atracurio, Rocuronio)', severity: 'Mayor', clinicalEffect: 'Prolongación severa del bloqueo neuromuscular y apnea respiratoria.', recommendation: 'Revertir con gluconato de calcio si ocurre bloqueo prolongado.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
