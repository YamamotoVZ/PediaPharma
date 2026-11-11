import { Classification, Medication } from '../types/pharmacy';
import { ANALGESIC_MEDICATIONS } from './categories/analgesics';
import { CORTICOSTEROID_MEDICATIONS } from './categories/corticosteroids';
import { CNS_MEDICATIONS } from './categories/cnsDrugs';
import { CARDIO_RENAL_MEDICATIONS } from './categories/cardioRenal';
import { ENDOCRINE_MEDICATIONS } from './categories/endocrine';
import { ANTISEPTICS_ANTIBIOTICS_MEDICATIONS } from './categories/antisepticsAntibiotics';
import { ANTIBACTERIALS_EXTENDED_MEDICATIONS } from './categories/antibacterialsExtended';
import { ANTIFUNGALS_ANTIVIRALS_MEDICATIONS } from './categories/antifungalsAntivirals';
import { ANTIPARASITICS_ANTITUBERCULARS_MEDICATIONS } from './categories/antiparasiticsAntituberculars';

export const INITIAL_CLASSIFICATIONS: Classification[] = [
  {
    id: 'c-narcoticos',
    name: '1. Analgésicos Narcóticos (Opioides)',
    code: 'ATC-N02A',
    therapeuticArea: 'Algiología y Anestesiología',
    description: 'Fármacos agonistas y agonistas-antagonistas de receptores opioides (Mu, Kappa, Delta) para el dolor agudo y crónico moderado a severo.',
    mechanismSummary: 'Unión a receptores opioides acoplados a proteína Gi/o, cierre de canales presinápticos de calcio e hiperpolarización postsináptica de potasio.',
    color: 'rose'
  },
  {
    id: 'c-aines',
    name: '2. AINES y Analgésicos Antipiréticos',
    code: 'ATC-M01A / N02B',
    therapeuticArea: 'Reumatología y Analgesia',
    description: 'Antiinflamatorios no esteroideos, analgésicos y antipiréticos no opioides que modulan la cascada del ácido araquidónico.',
    mechanismSummary: 'Inhibición reversible o irreversible de las enzimas ciclooxigenasa (COX-1 constitutiva y COX-2 inducible).',
    color: 'amber'
  },
  {
    id: 'c-corticosteroides',
    name: '3. Corticosteroides (Glucocorticoides)',
    code: 'ATC-H02AB',
    therapeuticArea: 'Endocrinología e Inmunología',
    description: 'Hormonas esteroideas sintéticas y análogos del cortisol con potente actividad antiinflamatoria, antialérgica e inmunosupresora sistémica y tópica.',
    mechanismSummary: 'Unión al receptor de glucocorticoides nuclear (GR), transrepresión de factores proinflamatorios (NF-kB, AP-1) y síntesis de anexina-1.',
    color: 'emerald'
  },
  {
    id: 'c-ansioliticos',
    name: '4. Ansiolíticos, Sedantes e Hipnóticos',
    code: 'ATC-N05B / N05C',
    therapeuticArea: 'Psiquiatría y Anestesia',
    description: 'Moduladores del sistema inhibidor GABAérgico central divididos en Benzodiacepinas y Barbitúricos para el manejo de la ansiedad, crisis convulsivas e insomnio.',
    mechanismSummary: 'Modulación alostérica positiva del receptor GABA-A aumentando la frecuencia de apertura (BZD) o la duración de apertura (Barbitúricos) del canal de cloruro.',
    color: 'indigo'
  },
  {
    id: 'c-antidepresivos',
    name: '5. Antidepresivos y Estabilizadores',
    code: 'ATC-N06A / N05AN',
    therapeuticArea: 'Psiquiatría',
    description: 'Agentes moduladores de la neurotransmisión monoaminérgica (serotonina, noradrenalina, dopamina) divididos en IMAO, Tricíclicos, Heterocíclicos, ISRS y Litio para depresión maníaca.',
    mechanismSummary: 'Inhibición de recaptura SERT/NET, bloqueo de la enzima monoaminooxidasa o modulación de inositol monofosfatasa (Litio).',
    color: 'violet'
  },
  {
    id: 'c-antipsicoticos',
    name: '6. Antipsicóticos (Neurolépticos)',
    code: 'ATC-N05A',
    therapeuticArea: 'Psiquiatría y Neurología',
    description: 'Antipsicóticos típicos clásicos clasificados en Fenotiazinas (clorpromazina) y Butirofenonas (haloperidol) para el control de psicosis, delirio y agitación aguda.',
    mechanismSummary: 'Antagonismo de alta afinidad de receptores dopaminérgicos D2 postsinápticos en las vías mesolímbica y nigroestriada.',
    color: 'purple'
  },
  {
    id: 'c-anticonvulsivos',
    name: '7. Anticonvulsivos (Antiepilépticos)',
    code: 'ATC-N03A',
    therapeuticArea: 'Neurología',
    description: 'Fármacos para el control y prevención de crisis epilépticas focales y generalizadas, ausencias y neuralgia del trigémino.',
    mechanismSummary: 'Bloqueo uso-dependiente de canales de sodio voltaje-dependientes, inhibición de canales de calcio tipo T talámicos y potenciación de GABA.',
    color: 'blue'
  },
  {
    id: 'c-anestesicos',
    name: '8. Anestésicos Locales',
    code: 'ATC-N01B / S01H',
    therapeuticArea: 'Anestesiología y Cirugía',
    description: 'Aminoamidas y aminoésteres que bloquean de forma reversible la conducción del estímulo nervioso sensorial y motor sin producir pérdida de la conciencia.',
    mechanismSummary: 'Bloqueo del poro interno de los canales de sodio voltaje-dependientes en la membrana axonal impidiendo la despolarización propagada.',
    color: 'cyan'
  },
  {
    id: 'c-antihipertensivos',
    name: '9. Antihipertensivos',
    code: 'ATC-C07 / C08 / C09',
    therapeuticArea: 'Cardiología',
    description: 'Fármacos que regulan la presión arterial sistémica: Betabloqueantes, Calcioantagonistas (DHP y no DHP), IECAs y Antagonistas del Receptor de Angiotensina II (ARA-II).',
    mechanismSummary: 'Bloqueo beta-1 adrenérgico, antagonismo de canales de calcio lentos Cav1.2, inhibición de la ECA o antagonismo competitivo del receptor AT1.',
    color: 'teal'
  },
  {
    id: 'c-diureticos',
    name: '10. Diuréticos',
    code: 'ATC-C03',
    therapeuticArea: 'Nefrología y Cardiología',
    description: 'Moduladores del balance hidroelectrolítico renal: Diuréticos tiazídicos, de asa de techo alto, osmóticos y ahorradores de potasio.',
    mechanismSummary: 'Inhibición de cotransportadores tubulares Na+/Cl- (distal), Na+/K+/2Cl- (asa de Henle), gradiente osmótico físico o antagonismo del receptor mineralocorticoide.',
    color: 'sky'
  },
  {
    id: 'c-antidiabeticos',
    name: '11. Hipoglucemiantes Orales',
    code: 'ATC-A10B',
    therapeuticArea: 'Endocrinología y Diabetes',
    description: 'Fármacos orales no insulínicos para el control metabólico en diabetes mellitus tipo 2: Sulfonilureas secretagogas, Biguanidas sensibilizadoras y Tiazolidinedionas (Glitazonas).',
    mechanismSummary: 'Cierre de canales K-ATP pancreáticos (secretagogos), activación de AMPK hepática o agonismo del receptor nuclear PPAR-gamma.',
    color: 'orange'
  },
  {
    id: 'c-insulinas',
    name: '12. Insulinas (Terapia Insulínica)',
    code: 'ATC-A10A',
    therapeuticArea: 'Endocrinología y Diabetología',
    description: 'Pautas de insulinoterapia basal y prandial clasificadas por perfil cinético: Acción Rápida (prandial), Acción Intermedia (NPH) y Acción Lenta/Prolongada sin picos.',
    mechanismSummary: 'Fijación al receptor de insulina tirosina quinasa con translocación de transportadores GLUT-4 y captación celular activa de glucosa.',
    color: 'red'
  },
  {
    id: 'c-antisepticos',
    name: '13. Antisépticos y Quinolonas',
    code: 'ATC-D08A / J01M',
    therapeuticArea: 'Infectología y Cirugía',
    description: 'DEFINICIÓN DE ANTISÉPTICO: Sustancia antimicrobiana de aplicación tópica sobre tejidos vivos (piel intacta, mucosas o heridas) para destruir o inhibir microorganismos sin dañar el hospedero (a diferencia de los DESINFECTANTES, que se aplican sobre superficies inertes e instrumental inanimado). Incluye antisépticos tópicos, antisépticos urinarios y Fluoroquinolonas clasificadas por generaciones (1ª, 2ª, 3ª y 4ª G).',
    mechanismSummary: 'Oxidación proteica, disrupción de membranas celulares por surfactantes catiónicos e inhibición de topoisomerasas bacterianas (ADN girasa y Topoisomerasa IV).',
    color: 'yellow'
  },
  {
    id: 'c-antibacterianos',
    name: '14. Antibacterianos (Penicilinas, Cefalosporinas, Macrólidos, Carbapenemes, etc.)',
    code: 'ATC-J01',
    therapeuticArea: 'Infectología y Medicina Interna',
    description: 'Antibióticos sistémicos de amplio espectro esenciales: Penicilinas (G, Ampicilina, Dicloxacilina), Cefalosporinas de 1ª, 2ª, 3ª y 4ª Generación, Macrólidos (Eritromicina, Claritromicina, Azitromicina), Tetraciclinas (Oxitetraciclina, Tetraciclina, Doxiciclina, Minociclina), Carbapenemes (Imipenem, Meropenem), Aminoglucósidos (Gentamicina, Amikacina, Tobramicina, Netilmicina), Inhibidor betalactámico (Ácido Clavulánico) y Diversos (TMP-SMX, Cloranfenicol, Lincomicina, Clindamicina, Vancomicina).',
    mechanismSummary: 'Inhibición de la síntesis de peptidoglicano de pared (PBPs), bloqueo de subunidades ribosomales 30S y 50S, o lisis de ADN bacteriano.',
    color: 'emerald'
  },
  {
    id: 'c-antimicoticos',
    name: '15. Antimicóticos Tópicos y Orales',
    code: 'ATC-J02A / D01A',
    therapeuticArea: 'Infectología y Dermatología',
    description: 'Antifúngicos de acción tópica, oral e intravenosa para micosis superficiales, mucocutáneas y sistémicas invasivas: Polienos (Nistatina, Anfotericina B convencional y liposomal), Tiocarbamatos (Tolnaftato), Imidazoles (Clotrimazol, Ketoconazol) y Equinocandinas (Caspofungina, Anidulafungina, Micafungina).',
    mechanismSummary: 'Fijación al ergosterol fúngico formando poros líticos, inhibición de la 14-alfa-desmetilasa (CYP51) o bloqueo de la 1,3-beta-D-glucano sintasa de la pared fúngica.',
    color: 'amber'
  },
  {
    id: 'c-antivirales',
    name: '16. Antivirales y Antirretrovirales',
    code: 'ATC-J05A',
    therapeuticArea: 'Infectología y Virología Clínica',
    description: 'Agentes antivirales de acción directa: Antirretrovirales ITIAN de referencia (Zidovudina / AZT), análogos de guanosina antiherpéticos (Aciclovir), antivirales de amplio espectro (Ribavirina) y bloqueadores de canales M2 / dopaminérgicos (Amantadina).',
    mechanismSummary: 'Terminación obligada de la cadena de ADN proviral/viral, inhibición de la transcriptasa inversa, bloqueo de la ADN polimerasa viral o bloqueo de canales iónicos víricos M2.',
    color: 'blue'
  },
  {
    id: 'c-antiprotozoarios',
    name: '17. Antiprotozoarios y Antipalúdicos',
    code: 'ATC-P01A / P01B',
    therapeuticArea: 'Infectología y Parasitología',
    description: 'Fármacos dirigidos contra protozoos patógenos: Antiamebianos tisulares y tricomonicidas (Metronidazol), antiamebianos intraluminales para quistes (Furoato de Diloxanida), y antipalúdicos de referencia contra Plasmodium (Cloroquina, Primaquina contra hipnozoítos y Quinina para malaria grave).',
    mechanismSummary: 'Generación de radicales citotóxicos reductores que rompen ADN parasitario, estrés oxidativo mitocondrial o inhibición de la hemo-polimerasa parasitaria.',
    color: 'purple'
  },
  {
    id: 'c-antihelminticos',
    name: '18. Antihelmínticos',
    code: 'ATC-P02C / P02B',
    therapeuticArea: 'Parasitología y Medicina Tropical',
    description: 'Agentes parasiticidas para infestaciones intestinales y tisulares por helmintos (nematodos, cestodos y trematodos): Benzimidazoles (Albendazol de amplio espectro y tisular, Mebendazol intraluminal) y Pirazinoisoquinolinas (Praziquantel para esquistosomiasis y teniasis).',
    mechanismSummary: 'Inhibición de la polimerización de microtúbulos fijándose a beta-tubulina parasitaria o incremento masivo de la permeabilidad al calcio con parálisis espástica y destrucción del tegumento.',
    color: 'teal'
  },
  {
    id: 'c-antifimicos',
    name: '19. Antifímicos (Antituberculosos)',
    code: 'ATC-J04A',
    therapeuticArea: 'Neumología y Tisiología',
    description: 'Régimen quimioterápico bactericida y esterilizante de primera línea contra Mycobacterium tuberculosis: Isoniacida (INH/H), Etambutol (EMB/E), Rifampicina (RIF/R), Pirazinamida (PZA/Z) y Estreptomicina (SM/S).',
    mechanismSummary: 'Inhibición de la síntesis de ácidos micólicos (InhA), inhibición de arabinosiltransferasa (embB), inhibición de ARN polimerasa (rpoB), acidificación del citoplasma intracelular (FAS I) e inhibición ribosomal 30S.',
    color: 'rose'
  }
];

// Combine all the exact medications requested by the user
export const INITIAL_MEDICATIONS: Medication[] = [
  ...ANALGESIC_MEDICATIONS,
  ...CORTICOSTEROID_MEDICATIONS,
  ...CNS_MEDICATIONS,
  ...CARDIO_RENAL_MEDICATIONS,
  ...ENDOCRINE_MEDICATIONS,
  ...ANTISEPTICS_ANTIBIOTICS_MEDICATIONS,
  ...ANTIBACTERIALS_EXTENDED_MEDICATIONS,
  ...ANTIFUNGALS_ANTIVIRALS_MEDICATIONS,
  ...ANTIPARASITICS_ANTITUBERCULARS_MEDICATIONS,

  // Reference core medications updated with full classifications
  {
    id: 'med-paracetamol',
    name: 'Paracetamol (Acetaminofén)',
    brandNames: ['Tylenol', 'Panadol', 'Efferalgan', 'Perfalgan', 'Termalgin'],
    atcCode: 'N02BE01',
    description: 'Analgésico y antipirético no opioide ni antiinflamatorio de referencia en medicina clínica, con excelente tolerancia gástrica.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-aines'],
    presentations: [
      { id: 'p-para-1', form: 'Comprimidos orales', concentration: '500 mg y 1000 mg (1 g)', route: 'Oral', packaging: 'Cajas x 20 y 40 comprimidos', excipients: 'Almidón pregelatinizado' },
      { id: 'p-para-2', form: 'Solución oral en gotas / jarabe', concentration: '100 mg / ml', route: 'Oral', packaging: 'Frasco gotero de 30 ml con jeringa graduada', excipients: 'Aroma de fresa, propilenglicol' },
      { id: 'p-para-3', form: 'Solución para perfusión intravenosa', concentration: '10 mg / ml (1 g en 100 ml)', route: 'Intravenosa', packaging: 'Frascos de infusión de 100 ml', excipients: 'Manitol, cisteína clorhidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición central de la síntesis de prostaglandinas mediada por la variante COX-3 y modulación de vías serotoninérgicas y endocannabinoides (AM404).',
      detailed: 'Actúa a nivel del sistema nervioso central inhibiendo la reducción activa del grupo hemo de la ciclooxigenasa cerebral. Su metabolito bioactivo AM404 activa receptores cannabinoides CB1 y vaniloides TRPV1 inhibiendo la recaptación de anandamida y bloqueando la señal nociceptiva en el asta dorsal. No inhibe significativamente la COX en tejidos periféricos inflamados debido al ambiente oxidativo rico en peróxidos.',
      targetReceptor: 'COX cerebral / Receptores Cannabinoides CB1 y TRPV1',
      keyPoints: ['Antipirético y analgésico de primera línea en todas las edades y embarazo', 'No agrede la mucosa gástrica ni altera la coagulación ni la función renal a dosis terapéuticas', 'Antídoto específico ante sobredosis hepatotóxica: N-acetilcisteína (NAC)']
    },
    indications: {
      approved: ['Dolor leve a moderado somático y visceral (cefaleas, odontalgias, mialgias, artrosis)', 'Estados febriles de cualquier etiología en pediatría y adultos', 'Dolor posoperatorio agudo (vía intravenosa)'],
      offLabel: ['Cierre del ductus arterioso en prematuros como alternativa a ibuprofeno']
    },
    dosageAndPosology: {
      adults: 'Oral: 500 mg a 1000 mg cada 6 a 8 horas según necesidad (dosis máxima recomendada: 3000 mg a 4000 mg/día; en ancianos, desnutrición o alcoholismo crónico no superar 2000-3000 mg/día). Infusión IV: 1000 mg en 15 minutos cada 6 horas.',
      pediatric: '10 a 15 mg/kg por toma cada 4 a 6 horas (dosis máxima diaria pediátrica: 60 mg/kg/día sin superar la dosis adulta).',
      renalAdjustment: 'FG 10-50 ml/min: administrar cada 6 horas. FG < 10 ml/min: cada 8 horas.',
      hepaticAdjustment: 'En hepatopatía leve-moderada no superar 2 g/día. Contraindicado en insuficiencia hepática grave.',
      routes: ['Oral', 'Intravenosa', 'Rectal'],
      administrationNotes: 'Infusión IV en 15 minutos. Respetar siempre un intervalo mínimo de 4 horas entre tomas.'
    },
    safety: {
      contraindications: ['Insuficiencia hepatocelular grave o hepatitis vírica activa aguda', 'Hipersensibilidad al paracetamol o propacetamol'],
      warnings: ['Hepatotoxicidad fulminante con necrosis centrolobulillar por sobredosis (> 7.5 - 10 g en adultos) debido a acumulación del metabolito tóxico N-acetil-p-benzoquinoneimina (NAPQI) tras agotarse el glutatión hepático'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Analgésico y antipirético de primera elección indiscutible en todos los trimestres de la gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Fármaco de primera elección en lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Hepatotoxicidad fulminante por necrosis hepática masiva', 'Trombocitopenia y leucopenia', 'Pustulosis exantemática generalizada aguda (PEGA)'] }
    ],
    interactions: [
      { id: 'int-para-1', interactingSubstance: 'Alcohol etílico crónico', severity: 'Mayor', clinicalEffect: 'Inducción de CYP2E1 que incrementa la producción de NAPQI y reduce glutatión, facilitando necrosis hepática con dosis terapéuticas.', recommendation: 'Limitar la dosis a 2 g/día en pacientes con consumo crónico de alcohol.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-losartan',
    name: 'Losartán Potásico',
    brandNames: ['Cozaar', 'Satoren', 'Cardiovasc', 'Simperten'],
    atcCode: 'C09CA01',
    description: 'Antagonista oral potente y altamente selectivo de los receptores de angiotensina II subtipo AT1 con efecto uricosúrico intrínseco y demostrada nefroprotección.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antihipertensivos'],
    presentations: [
      { id: 'p-los-1', form: 'Comprimidos recubiertos con película ranurados', concentration: '50 mg y 100 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos', excipients: 'Lactosa monohidrato' }
    ],
    mechanismOfAction: {
      summary: 'Bloqueo competitivo selectivo del receptor AT1 de angiotensina II por losartán y su metabolito activo ácido E-3174.',
      detailed: 'Bloquea específicamente los receptores AT1 en el músculo liso vascular, glándula suprarrenal y miocardio. Su metabolito E-3174 (10 a 40 veces más potente) ejerce un bloqueo no competitivo de larga duración. Inhibe además el transportador de urato URAT1 en el túbulo proximal renal reduciendo el ácido úrico sérico.',
      targetReceptor: 'Receptor de Angiotensina II tipo 1 (AT1)',
      keyPoints: ['No bloquea la degradación de bradicinina (incidencia de tos seca similar a placebo)', 'Efecto nefroprotector demostrado en diabetes tipo 2 con proteinuria (estudio RENAAL)', 'Leve efecto uricosúrico (beneficioso en pacientes con hiperuricemia asociada)']
    },
    indications: {
      approved: ['Hipertensión arterial esencial en adultos y niños ≥ 6 años', 'Nefropatía diabética en pacientes con diabetes tipo 2 y proteinuria', 'Insuficiencia cardíaca crónica con FEVI reducida en pacientes intolerantes a IECAs', 'Reducción del riesgo de ictus en hipertensos con hipertrofia ventricular izquierda']
    },
    dosageAndPosology: {
      adults: 'Dosis inicial habitual: 50 mg una vez al día con o sin comida. Dosis de mantenimiento: 50 a 100 mg/día en 1 toma o dividida en 2 tomas.',
      pediatric: 'Niños ≥ 6 años (20-50 kg): 0.7 mg/kg una vez al día (hasta 25 mg/día); > 50 kg: 50 mg/día.',
      renalAdjustment: 'No precisa ajuste en insuficiencia renal leve-moderada. Si ClCr < 20 ml/min iniciar con 25 mg/día y vigilar potasio.',
      hepaticAdjustment: 'Iniciar con 25 mg/día en insuficiencia hepática leve-moderada. Contraindicado en grave.',
      routes: ['Oral'],
      administrationNotes: 'Tomar a la misma hora cada día, con o sin alimentos.'
    },
    safety: {
      contraindications: ['Segundo y tercer trimestre del embarazo (fetotoxicidad letal)', 'Insuficiencia hepática grave', 'Uso concomitante con aliskireno en diabéticos'],
      warnings: ['Riesgo de hiperpotasemia en nefropatía o con diuréticos ahorradores de potasio', 'Hipotensión en pacientes con depleción hidrosalina previa'],
      pregnancyCategory: 'D',
      pregnancyNotes: 'Contraindicado absolutamente en 2º y 3º trimestre.',
      lactation: 'Precaución',
      lactationNotes: 'Preferir alternativas.',
      controlledSubstance: false,
      blackBoxWarning: 'Toxicidad fetal severa y muerte fetal si se usa en segundo o tercer trimestre.'
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Mareos', 'Hipotensión ortostática', 'Hiperpotasemia en nefropatía'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Angioedema', 'Deterioro renal agudo', 'Rabdomiólisis'] }
    ],
    interactions: [
      { id: 'int-los-1', interactingSubstance: 'Espironolactona o Suplementos de Potasio', severity: 'Mayor', clinicalEffect: 'Riesgo sinérgico de hiperpotasemia grave y arritmias.', recommendation: 'Monitorizar potasio sérico periódico.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-metformina',
    name: 'Metformina Clorhidrato',
    brandNames: ['Glucophage', 'Dianben', 'Metforal', 'Glufagos'],
    atcCode: 'A10BA02',
    description: 'Biguanida antihiperglucemiante de primera línea mundial para la diabetes mellitus tipo 2, con beneficio protector cardiovascular demostrado y nulo riesgo intrínseco de hipoglucemia.',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antidiabeticos'],
    presentations: [
      { id: 'p-met-1', form: 'Comprimidos de liberación inmediata', concentration: '850 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 30 y 60 comprimidos', excipients: 'Povidona K30, estearato de magnesio' },
      { id: 'p-met-2', form: 'Comprimidos de liberación prolongada (XR / Retard)', concentration: '500 mg, 750 mg y 1000 mg', route: 'Oral', packaging: 'Caja x 30 comprimidos XR', excipients: 'Hipromelosa, carmelosa sódica' }
    ],
    mechanismOfAction: {
      summary: 'Activación de la proteína quinasa dependiente de AMP (AMPK) hepática y reducción de la gluconeogénesis.',
      detailed: 'Inhibe el complejo I de la cadena respiratoria mitocondrial en los hepatocitos disminuyendo la producción de ATP y elevando el ratio AMP/ATP. Esto activa la enzima AMPK, que fosforila e inactiva enzimas clave de la gluconeogénesis hepática (disminución del 30% en la producción hepática basal de glucosa). Aumenta la translocación de GLUT-4 en tejido muscular y reduce la absorción intestinal de carbohidratos.',
      targetReceptor: 'AMPK hepática y Complejo I mitocondrial',
      keyPoints: ['No estimula la secreción de insulina pancreática (no causa hipoglucemia en monoterapia)', 'Promueve la neutralidad o leve pérdida ponderal', 'CONTRAINDICADA si la TFG es < 30 ml/min por riesgo de acidosis láctica']
    },
    indications: {
      approved: ['Tratamiento de primera línea de la diabetes mellitus tipo 2 en adultos y niños ≥ 10 años', 'Prevención de diabetes en personas con prediabetes de alto riesgo'],
      offLabel: ['Síndrome de ovario poliquístico (SOP) con resistencia insulínica']
    },
    dosageAndPosology: {
      adults: 'Iniciar con 500 mg u 850 mg una vez al día con la cena. Titular cada 10-15 días hasta 850 mg dos veces al día o 1000 mg dos veces al día con comidas principales (dosis máxima: 2550 mg/día; formulación XR: máximo 2000 mg/día).',
      pediatric: 'Niños ≥ 10 años: Iniciar con 500 mg/día (máx 2000 mg/día).',
      renalAdjustment: 'TFG 45-59 ml/min: dosis máxima 1000 mg/día. TFG 30-44 ml/min: dosis máxima 500 mg/día. TFG < 30 ml/min: CONTRAINDICADA ABSOLUTAMENTE.',
      hepaticAdjustment: 'Contraindicado en insuficiencia hepática severa por alteración de la depuración de lactato.',
      routes: ['Oral'],
      administrationNotes: 'Tomar siempre durante o inmediatamente al terminar las comidas para prevenir síntomas gastrointestinales.'
    },
    safety: {
      contraindications: ['Tasa de filtración glomerular < 30 ml/min', 'Acidosis metabólica aguda (cetoacidosis)', 'Insuficiencia respiratoria o cardíaca aguda descompensada o shock (hipoperfusión tisular)', 'Insuficiencia hepática grave o alcoholismo agudo'],
      warnings: ['Acidosis láctica: complicación rara pero con 50% de mortalidad', 'Suspender 48 horas antes de estudios radiológicos con contraste yodado intravenoso', 'Déficit de absorción de vitamina B12 en tratamientos a largo plazo (> 3 años)'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Utilizada de forma segura en diabetes gestacional.',
      lactation: 'Compatible',
      lactationNotes: 'Excreción mínima en leche; compatible con lactancia.',
      controlledSubstance: false,
      blackBoxWarning: 'Riesgo de acidosis láctica grave potencialmente mortal en presencia de insuficiencia renal o hipoxia tisular.'
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Diarrea acuosa transitoria', 'Náuseas y vómitos', 'Dolor abdominal cólico', 'Dispepsia'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Sabor metálico característico (disgeusia)'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Acidosis láctica letal', 'Anemia megaloblástica por deficiencia de vitamina B12'] }
    ],
    interactions: [
      { id: 'int-met-1', interactingSubstance: 'Medios de contraste yodados IV', severity: 'Contraindicada', clinicalEffect: 'Nefropatía aguda por contraste que precipita acumulación de metformina y acidosis láctica mortal.', recommendation: 'Suspender metformina antes del procedimiento y reanudar 48 horas después tras verificar función renal.' },
      { id: 'int-met-2', interactingSubstance: 'Alcohol etílico en exceso', severity: 'Mayor', clinicalEffect: 'Aumento del riesgo de acidosis láctica durante intoxicación alcohólica aguda.', recommendation: 'Evitar consumo excesivo de alcohol.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-amox-clav',
    name: 'Amoxicilina con Ácido Clavulánico',
    brandNames: ['Augmentine', 'Clavulin', 'Amoval Duo', 'Curam'],
    atcCode: 'J01CR02',
    description: 'Asociación antibacteriana bactericida de amplio espectro compuesta por amoxicilina (aminopenicilina) y ácido clavulánico (inhibidor suicida irreversible de betalactamasas).',
    images: ['/src/assets/images/pharma_oral_forms_1793460469811.jpg', '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_oral_forms_1793460469811.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-amx-1', form: 'Comprimidos recubiertos', concentration: '875 mg / 125 mg y 500 mg / 125 mg', route: 'Oral', packaging: 'Caja con 20 comprimidos en blíster', excipients: 'Dióxido de silicio coloidal, celulosa' },
      { id: 'p-amx-2', form: 'Polvo para suspensión oral pediátrica', concentration: '400 mg / 57 mg en 5 ml y 250 mg / 62.5 mg', route: 'Oral', packaging: 'Frasco de vidrio para reconstituir a 70 ml', excipients: 'Aspartamo, benzoato sódico' },
      { id: 'p-amx-3', form: 'Polvo para solución inyectable IV', concentration: '1000 mg / 200 mg y 2000 mg / 200 mg', route: 'Intravenosa', packaging: 'Vial de infusión', excipients: 'Sin conservantes' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de pared bacteriana potenciada por el bloqueo enzimático de betalactamasas.',
      detailed: 'La amoxicilina se une covalentemente a las proteínas fijadoras de penicilina (PBPs 1A, 1B, 2 y 3) inhibiendo la transpeptidación terminal en la síntesis de peptidoglicano. El ácido clavulánico actúa como un inhibidor suicida irreversible que forma un complejo acilo estable con el sitio activo de las betalactamasas plasmídicas y cromosómicas (clases A y D de Ambler), impidiendo la destrucción de la amoxicilina.',
      targetReceptor: 'PBPs bacterianas (Transpeptidasas) y enzimas Betalactamasas TEM-1, SHV-1',
      keyPoints: ['Bactericida tiempo-dependiente (%T > CIM)', 'Restaura la actividad frente a cepas productoras de betalactamasas', 'Excelente penetración en secreciones respiratorias y orina']
    },
    indications: {
      approved: ['Sinusitis bacteriana aguda y otitis media aguda', 'Exacerbación aguda de bronquitis crónica y neumonía adquirida en la comunidad', 'Infecciones urinarias complicadas y pielonefritis', 'Infecciones odontogénicas severas con celulitis', 'Infecciones cutáneas y mordeduras animales o humanas'],
      offLabel: ['Profilaxis en cirugía maxilofacial contaminada']
    },
    dosageAndPosology: {
      adults: 'Oral: 875/125 mg cada 8 a 12 horas al inicio de las comidas. Infecciones severas o vía IV: 1000/200 mg cada 8 horas o 2000/200 mg cada 8h.',
      pediatric: '40 a 80 mg/kg/día (basado en amoxicilina) dividido cada 8 o 12 horas según severidad (máximo 3000 mg/día de amoxicilina).',
      renalAdjustment: 'FG 10-30 ml/min: 500/125 mg cada 12 horas. FG < 10 ml/min: 500/125 mg cada 24 horas.',
      hepaticAdjustment: 'Monitorizar enzimas hepáticas; usar con precaución.',
      routes: ['Oral', 'Intravenosa'],
      administrationNotes: 'Tomar inmediatamente antes o al inicio de los alimentos para minimizar intolerancia gastrointestinal y optimizar la absorción.'
    },
    safety: {
      contraindications: ['Hipersensibilidad conocida a penicilinas o betalactámicos', 'Antecedente de ictericia colestásica o disfunción hepática asociada a amoxicilina/clavulánico'],
      warnings: ['Riesgo de colitis pseudomembranosa por Clostridioides difficile', 'Erupción cutánea en mononucleosis infecciosa'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Muy frecuentes (>10%)', effects: ['Diarrea y deposiciones blandas'] },
      { frequency: 'Frecuentes (1-10%)', effects: ['Náuseas', 'Vómitos', 'Candidiasis mucocutánea'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Ictericia colestásica hepatocelular', 'Anafilaxia', 'Síndrome de Stevens-Johnson'] }
    ],
    interactions: [
      { id: 'int-amox-1', interactingSubstance: 'Metotrexato', severity: 'Mayor', clinicalEffect: 'Disminuye la secreción tubular de metotrexato con riesgo de toxicidad hematológica.', recommendation: 'Monitorizar niveles de metotrexato.' }
    ],
    updatedAt: new Date().toISOString()
  },
  {
    id: 'med-ceftriaxona',
    name: 'Ceftriaxona Sódica',
    brandNames: ['Rocephin', 'Cefaxona', 'Cefrine', 'Terbac'],
    atcCode: 'J01DD04',
    description: 'Cefalosporina de tercera generación parenteral de amplio espectro con semivida prolongada de 8 horas y excelente penetración en líquido cefalorraquídeo.',
    images: ['/src/assets/images/pharma_parenteral_vial_1793460481975.jpg'],
    primaryImage: '/src/assets/images/pharma_parenteral_vial_1793460481975.jpg',
    classificationIds: ['c-antibacterianos'],
    presentations: [
      { id: 'p-cef-1', form: 'Polvo y disolvente para solución inyectable IV', concentration: '1 g y 2 g', route: 'Intravenosa', packaging: 'Vial de vidrio con ampolla de agua para inyección de 10 ml', excipients: 'Contiene sodio (3.6 mmol por gramo)' },
      { id: 'p-cef-2', form: 'Polvo y disolvente para inyección IM', concentration: '1 g', route: 'Intramuscular', packaging: 'Vial con ampolla de lidocaína al 1% de 3.5 ml', excipients: 'Lidocaína clorhidrato' }
    ],
    mechanismOfAction: {
      summary: 'Inhibición de la síntesis de peptidoglicano de la pared bacteriana por unión a PBPs 2 y 3.',
      detailed: 'Bactericida dependiente de tiempo. Inhibe la última etapa de transpeptidación bacteriana. Gran resistencia a betalactamasas plasmídicas y excelente paso a través de la barrera hematoencefálica inflamada.',
      targetReceptor: 'PBPs bacterianas (Transpeptidasas)',
      keyPoints: ['Semivida de 8 horas que permite monodosis una vez al día (cada 24 horas)', 'Doble vía de excreción (60% renal y 40% biliar): no precisa ajuste en fallo renal aislado', 'NUNCA mezclar con soluciones intravenosas que contengan calcio (precipitado letal)']
    },
    indications: {
      approved: ['Meningitis bacteriana aguda en adultos y niños', 'Sepsis bacteriana grave y neumonía nosocomial o comunitaria', 'Infección gonocócica no complicada (uretritis, cervicitis gonocócica)', 'Enfermedad de Lyme diseminada y endocarditis estreptocócica']
    },
    dosageAndPosology: {
      adults: '1 a 2 g cada 24 horas por vía IV o IM. En meningitis bacteriana grave: 2 g cada 12 horas (4 g/día). Gonococia no complicada: 500 mg a 1 g IM en dosis única.',
      pediatric: '50 a 80 mg/kg/día en una sola dosis (en meningitis hasta 100 mg/kg/día, máx 4 g/día).',
      renalAdjustment: 'No precisa ajuste si la función hepática está preservada.',
      hepaticAdjustment: 'No precisa ajuste si la función renal está intacta.',
      routes: ['Intravenosa', 'Intramuscular'],
      administrationNotes: 'Infusión IV en 30 minutos. CONTRAINDICADO MEZCLAR O COADMINISTRAR CON SOLUCIONES CON CALCIO (Ringer Lactato).'
    },
    safety: {
      contraindications: ['Hipersensibilidad grave a cefalosporinas o antecedente de anafilaxia a penicilina', 'Neonatos prematuros hasta la edad corregida de 41 semanas', 'Neonatos con hiperbilirrubinemia o que requieran calcio IV (riesgo de precipitados letales y kernícterus)'],
      warnings: ['Pseudolitiasis biliar reversible por precipitación biliar de sales de calcio'],
      pregnancyCategory: 'B',
      pregnancyNotes: 'Seguro en gestación.',
      lactation: 'Compatible',
      lactationNotes: 'Compatible con lactancia.',
      controlledSubstance: false
    },
    adverseEffects: [
      { frequency: 'Frecuentes (1-10%)', effects: ['Diarrea', 'Eosinofilia', 'Elevación transitoria de enzimas hepáticas'] },
      { frequency: 'Raros o Graves (<0.1%)', effects: ['Precipitados mortales en pulmón y riñón con calcio en neonatos', 'Anemia hemolítica inmune severa'] }
    ],
    interactions: [
      { id: 'int-cef-1', interactingSubstance: 'Soluciones con Calcio (Ringer Lactato, Gluconato de Calcio)', severity: 'Contraindicada', clinicalEffect: 'Formación de precipitados insolubles de ceftriaxona-calcio letales en pulmón y riñones.', recommendation: 'Prohibida la administración conjunta o por la misma línea venosa.' }
    ],
    updatedAt: new Date().toISOString()
  }
];
