export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedDrugName?: string;
  relatedDrugId?: string;
  therapeuticArea?: string;
}

export interface ReviewQuiz {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  estimatedMinutes: number;
  iconType: 'opioid' | 'nsaid' | 'steroid' | 'cns' | 'global';
  questions: QuizQuestion[];
}

export const REVIEW_QUIZZES: ReviewQuiz[] = [
  {
    id: 'quiz-opioides',
    title: 'Cuestionario 1: Analgésicos Narcóticos (Opioides) y Dolor Agudo/Crónico',
    subtitle: 'Morfina, Meperidina, Metadona, Buprenorfina, Nalbufina y Antídotos',
    description: 'Evalúa tus conocimientos sobre mecanismos de acción en receptores Mu, Kappa y Delta, metabolitos activos, techo respiratorio, antídotos y contraindicaciones críticas.',
    badge: '10 Preguntas Clínicas',
    difficulty: 'Intermedio',
    estimatedMinutes: 8,
    iconType: 'opioid',
    questions: [
      {
        id: 'q-op-1',
        question: '¿Cuál es el mecanismo de acción a nivel celular de los analgésicos opioides agonistas puros como la Morfina?',
        options: [
          'Unión a receptores acoplados a Gi/o, cierre de canales presinápticos de calcio y apertura de canales postsinápticos de potasio.',
          'Inhibición de la ciclooxigenasa-1 y aumento de la síntesis de tromboxano A2 en la médula espinal.',
          'Bloqueo reversible de canales de sodio dependientes de voltaje en la membrana axonal periférica.',
          'Inhibición irreversible de la enzima monoaminooxidasa mitocondrial presináptica.'
        ],
        correctIndex: 0,
        explanation: 'La morfina se une a receptores opioides Mu (µ) acoplados a proteína Gi/o. Esto inhibe la adenilato ciclasa, cierra canales presinápticos de Ca2+ voltaje-dependientes (inhibiendo la liberación de sustancia P y glutamato) y abre canales de K+ postsinápticos provocando hiperpolarización neuronal.',
        relatedDrugName: 'Morfina',
        relatedDrugId: 'med-morfina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-2',
        question: '¿Por qué la Meperidina (Demerol) está contraindicada en pacientes con insuficiencia renal o para tratamientos de dolor crónico oncológico?',
        options: [
          'Porque produce precipitación masiva de sales insolubles en los túbulos renales.',
          'Por la acumulación de normeperidina, un metabolito activo de larga semivida con potente neurotoxicidad y riesgo de convulsiones.',
          'Porque bloquea la síntesis de surfactante pulmonar desencadenando edema alveolar.',
          'Porque genera hiponatremia dilucional inmediata por elevación de vasopresina.'
        ],
        correctIndex: 1,
        explanation: 'La meperidina se metaboliza a normeperidina, un metabolito proconvulsivante con semivida de 15 a 30 horas. En insuficiencia renal se acumula rápidamente provocando hiperreflexia, temblores y crisis convulsivas graves.',
        relatedDrugName: 'Meperidina',
        relatedDrugId: 'med-meperidina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-3',
        question: 'Un paciente en programa de desintoxicación por adicción a opiáceos va a iniciar tratamiento con Metadona. ¿Qué estudio diagnóstico debe realizarse antes de titular dosis elevadas?',
        options: [
          'Endoscopia digestiva alta para descartar úlcera gástrica oculta.',
          'Electrocardiograma para medir el intervalo QTc, debido al riesgo de Torsades de Pointes.',
          'Resonancia magnética cerebral para descartar hidrocefalia normotensiva.',
          'Gasometría arterial basal para evaluar el gradiente alvéolo-arterial de oxígeno.'
        ],
        correctIndex: 1,
        explanation: 'La metadona puede prolongar el intervalo QT de forma dosis-dependiente y desencadenar taquicardias ventriculares polimórficas potencialmente mortales (Torsades de Pointes). Se recomienda realizar un ECG basal.',
        relatedDrugName: 'Metadona',
        relatedDrugId: 'med-metadona',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-4',
        question: '¿Por qué la Buprenorfina es considerada el opioide de elección en pacientes con insuficiencia renal crónica avanzada o en diálisis?',
        options: [
          'Porque se excreta al 100% por vía pulmonar mediante el aire espirado.',
          'Porque sufre eliminación principalmente biliar y fecal, sin acumulación de metabolitos activos nefrotóxicos.',
          'Porque induce vasodilatación de la arteriola eferente aumentando el filtrado glomerular.',
          'Porque no se une a proteínas plasmáticas y se dializa fácilmente en cada sesión.'
        ],
        correctIndex: 1,
        explanation: 'La buprenorfina no se elimina de forma activa por el riñón y sus metabolitos no poseen toxicidad renal significativa, por lo que las guías internacionales la consideran el opioide estándar de oro en fallo renal y diálisis.',
        relatedDrugName: 'Buprenorfina',
        relatedDrugId: 'med-buprenorfina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-5',
        question: '¿Qué fenómeno clínico ocurre si se administra Pentazocina o Nalbufina a un paciente que consume crónicamente Morfina a dosis altas?',
        options: [
          'Potenciación sinérgica de la analgesia con sedación comatosa profunda.',
          'Reversión brusca de la analgesia y precipitación inmediata de un síndrome de abstinencia agudo.',
          'Desarrollo súbito de agranulocitosis con fiebre y faringoamigdalitis ulcerada.',
          'Aumento irreversible de la presión arterial sistólica con emergencia hipertensiva.'
        ],
        correctIndex: 1,
        explanation: 'La pentazocina y la nalbufina poseen propiedades antagonistas o agonistas parciales sobre los receptores Mu. Si se administran a alguien dependiente de un agonista puro (morfina), desplazan a la morfina del receptor Mu precipitando abstinencia brusca y dolor intenso.',
        relatedDrugName: 'Pentazocina',
        relatedDrugId: 'med-pentazocina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-6',
        question: '¿Cuál es el antídoto específico de elección ante una sobredosis de opioides con depresión respiratoria grave y miosis puntiforme?',
        options: [
          'Flumazenil intravenoso.',
          'N-acetilcisteína oral.',
          'Naloxona intravenosa (0.4 a 2 mg).',
          'Bicarbonato de sodio molar.'
        ],
        correctIndex: 2,
        explanation: 'La Naloxona es un antagonista puro competitivo de los receptores opioides (Mu, Kappa, Delta) que revierte de manera inmediata la depresión respiratoria y la sedación inducida por opioides.',
        relatedDrugName: 'Morfina',
        relatedDrugId: 'med-morfina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-7',
        question: '¿Cuál de las siguientes afirmaciones respecto a la Nalbufina en la práctica anestésica es CORRECTA?',
        options: [
          'Carece de efecto techo para la depresión respiratoria, superando a la morfina en toxicidad.',
          'Es un agonista kappa y antagonista mu, útil para revertir el prurito inducido por opioides neuroaxiales sin perder completamente la analgesia.',
          'Está absolutamente contraindicada durante el trabajo de parto por toxicidad miocárdica fetal directa.',
          'Su vía de administración principal es la tópica en parches matriciales de 7 días.'
        ],
        correctIndex: 1,
        explanation: 'La nalbufina es agonista kappa (mantiene analgesia) y antagonista mu (revierte el prurito y la depresión respiratoria inducida por morfina o fentanilo epidural), presentando además efecto techo respiratorio.',
        relatedDrugName: 'Nalbufina',
        relatedDrugId: 'med-nalbufina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-8',
        question: '¿Qué metabolito activo de la morfina se acumula en pacientes con tasa de filtración glomerular baja y puede causar neurotoxicidad y mioclonías?',
        options: [
          'Morfina-3-glucurónido y Morfina-6-glucurónido (M6G).',
          'Ácido homogentísico oxidado.',
          'Normeperidina fosforilada.',
          'N-acetil-benzoquinona imina (NAPQI).'
        ],
        correctIndex: 0,
        explanation: 'La morfina se conjuga en hígado a M3G (neuroexcitador) y M6G (analgésico muy potente). Ambos se eliminan por riñón; si el filtrado glomerular cae, se acumulan provocando sedación prolongada, depresión respiratoria y mioclonías.',
        relatedDrugName: 'Morfina',
        relatedDrugId: 'med-morfina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-9',
        question: '¿Cuál es la combinación farmacológica ABSOLUTAMENTE CONTRAINDICADA con Meperidina debido al riesgo de hiperpirexia maligna, convulsiones y colapso cardiovascular?',
        options: [
          'Inhibidores de la Bomba de Protones (Omeprazol).',
          'Inhibidores de la Monoaminooxidasa (IMAO como Fenelzina o Selegilina).',
          'Paracetamol a dosis terapéuticas.',
          'Antihistamínicos H1 de segunda generación.'
        ],
        correctIndex: 1,
        explanation: 'La combinación de Meperidina con IMAO está absolutamente contraindicada: bloquea la recaptación de serotonina y desata una crisis serotoninérgica fulminante con hiperpirexia, rigidez, convulsiones y muerte.',
        relatedDrugName: 'Meperidina',
        relatedDrugId: 'med-meperidina',
        therapeuticArea: 'Algiología y Anestesiología'
      },
      {
        id: 'q-op-10',
        question: '¿Cuál de los siguientes efectos adversos de los opioides NO desarrolla tolerancia farmacológica a lo largo del tratamiento crónico?',
        options: [
          'La analgesia somática.',
          'La sedación y somnolencia.',
          'El estreñimiento y la miosis pupilar.',
          'Las náuseas y los vómitos iniciales.'
        ],
        correctIndex: 2,
        explanation: 'El estreñimiento (constipación) y la miosis pupilar son los dos efectos opioides en los cuales casi NO se desarrolla tolerancia farmacológica, por lo que el paciente siempre requerirá laxantes mientras reciba opioides.',
        relatedDrugName: 'Morfina',
        relatedDrugId: 'med-morfina',
        therapeuticArea: 'Algiología y Anestesiología'
      }
    ]
  },
  {
    id: 'quiz-aines',
    title: 'Cuestionario 2: AINES, Antipiréticos y Antiagregantes Plaquetarios',
    subtitle: 'Aspirina, Metamizol, Ibuprofeno, Ketorolaco, Naproxeno, Diclofenaco y Coxibes',
    description: 'Preguntas esenciales sobre la cascada del ácido araquidónico, selectividad COX-1 vs COX-2, límites de duración terapéutica, toxicidad y riesgos clínicos.',
    badge: '10 Preguntas Clínicas',
    difficulty: 'Intermedio',
    estimatedMinutes: 8,
    iconType: 'nsaid',
    questions: [
      {
        id: 'q-ai-1',
        question: '¿A qué se debe el efecto antiagregante plaquetario irreversible del Ácido Acetilsalicílico (Aspirina)?',
        options: [
          'A la acetilación irreversible de la Serina 530 en el canal catalítico de la COX-1 plaquetaria, bloqueando la síntesis de Tromboxano A2 durante toda la vida de la plaqueta.',
          'Al antagonismo reversible de receptores de adenosina difosfato P2Y12 en la superficie endotelial.',
          'A la inhibición de la enzima fosfodiesterasa-5 con elevación sostenida de GMP cíclico.',
          'A la destrucción lítica de los megacariocitos en la médula ósea.'
        ],
        correctIndex: 0,
        explanation: 'La aspirina acetila covalentemente el residuo Serina 530 de la COX-1. Como las plaquetas carecen de núcleo, no pueden sintetizar nuevas enzimas COX-1, quedando inhibida la producción de TXA2 durante sus 7 a 10 días de vida útil.',
        relatedDrugName: 'Ácido Acetilsalicílico (Aspirina)',
        relatedDrugId: 'med-asa',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-2',
        question: '¿Por qué está contraindicada la Aspirina en niños y adolescentes con varicela o cuadros gripales virales agudos?',
        options: [
          'Por riesgo de desencadenar Síndrome de Reye (encefalopatía aguda y degeneración grasa hepática fulminante).',
          'Por riesgo de calcificación prematura de los cartílagos de crecimiento epifisiarios.',
          'Por producción inmediata de anemia aplásica autoinmune mediada por anticuerpos IgG.',
          'Por riesgo de fibrosis quística adquirida pulmonar.'
        ],
        correctIndex: 0,
        explanation: 'El uso de ácido acetilsalicílico en niños con infecciones virales activas (varicela, influenza) se asocia al Síndrome de Reye, caracterizado por daño mitocondrial, microesteatosis hepática aguda y edema cerebral con alta mortalidad.',
        relatedDrugName: 'Ácido Acetilsalicílico (Aspirina)',
        relatedDrugId: 'med-asa',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-3',
        question: '¿Cuál es la reacción adversa idiosincrásica potencialmente letal asociada al Metamizol (Dipirona) que motiva su advertencia clínica especial?',
        options: [
          'Agranulocitosis (neutropenia profunda < 500/mm³) de base inmunológica.',
          'Rabdomiólisis masiva con mioglobinuria pigmentaria.',
          'Hipertermia maligna por mutación del receptor de rianodina.',
          'Fibrosis retroperitoneal idiopática.'
        ],
        correctIndex: 0,
        explanation: 'El metamizol puede causar agranulocitosis por mecanismo inmunoalérgico con destrucción aguda de granulocitos. Los pacientes deben consultar inmediatamente ante fiebre inexplicable, odinofagia o úlceras bucales.',
        relatedDrugName: 'Metamizol',
        relatedDrugId: 'med-metamizol',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-4',
        question: '¿Cuál es el tiempo MÁXIMO estricto recomendado para el tratamiento parenteral con Ketorolaco en el posoperatorio agudo?',
        options: [
          'Máximo 5 días, debido al elevado riesgo de úlceras digestivas perforadas, sangrado y necrosis tubular renal.',
          'Máximo 30 días con monitorización de transaminasas.',
          'Máximo 14 días si se acompaña de protectores gástricos anti-H2.',
          'No tiene límite de tiempo si la creatinina sérica es menor a 1.2 mg/dl.'
        ],
        correctIndex: 0,
        explanation: 'El ketorolaco es un AINE con gran potencia analgésica y fuerte afinidad por COX-1. Su uso parenteral está estrictamente restringido a un máximo de 5 días debido al riesgo exponencial de hemorragia digestiva alta, perforación y fallo renal agudo.',
        relatedDrugName: 'Ketorolaco',
        relatedDrugId: 'med-ketorolaco',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-5',
        question: 'En un paciente con alto riesgo cardiovascular (antecedente de infarto agudo de miocardio) que requiere forzosamente un AINE oral, ¿cuál es el que presenta el MENOR riesgo aterotrombótico relativo según las guías cardiológicas?',
        options: [
          'Diclofenaco.',
          'Celecoxib a dosis altas.',
          'Naproxeno (500 mg cada 12 horas, coadministrado con un IBP).',
          'Nimesulida.'
        ],
        correctIndex: 2,
        explanation: 'El Naproxeno tiene una semivida de 12-15 horas y produce una inhibición sostenida de la COX-1 plaquetaria cercana al 100%, lo que minimiza el desequilibrio protrombótico en comparación con diclofenaco o coxibes.',
        relatedDrugName: 'Naproxeno',
        relatedDrugId: 'med-naproxeno',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-6',
        question: '¿Qué fármaco AINE de la familia indolacética es considerado el estándar de oro diagnóstico y terapéutico para la Hemicránea Continua y ataques agudos de gota?',
        options: [
          'Indometacina.',
          'Metamizol.',
          'Paracetamol.',
          'Ketoprofeno.'
        ],
        correctIndex: 0,
        explanation: 'La respuesta positiva absoluta a la Indometacina forma parte de los criterios diagnósticos internacionales de la Hemicránea Continua (prueba de indometacina) y es un pilar clásico en crisis gotosas.',
        relatedDrugName: 'Indometacina',
        relatedDrugId: 'med-indometacina',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-7',
        question: '¿Por qué la Nimesulida tiene restringido su uso a un máximo estricto de 15 días y está contraindicada en pacientes con hepatopatías?',
        options: [
          'Por riesgo severo de insuficiencia hepática aguda fulminante y necrosis hepatocelular.',
          'Por riesgo de ceguera nocturna irreversible por depósito retiniano.',
          'Por causar hiperuricemia severa refractaria a alopurinol.',
          'Por provocar estenosis esofágica por quemadura química cáustica.'
        ],
        correctIndex: 0,
        explanation: 'Las agencias reguladoras (EMA, COFEPRIS) limitan la nimesulida a 15 días como fármaco de segunda línea debido a los casos documentados de hepatotoxicidad fulminante con necesidad de trasplante hepático.',
        relatedDrugName: 'Nimesulida',
        relatedDrugId: 'med-nimesulida',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-8',
        question: '¿Cuál es la principal ventaja clínica de los inhibidores selectivos de la COX-2 como el Celecoxib frente a los AINEs no selectivos clásicos?',
        options: [
          'Menor incidencia de toxicidad ulcerosa y complicaciones gastrointestinales altas (perforación y sangrado).',
          'Efecto cardioprotector similar a la aspirina frente a trombosis coronarias.',
          'Ausencia de eliminación renal, siendo seguro en anuria terminal.',
          'Inhibición simultánea de la transcripción de receptores histaminérgicos H1.'
        ],
        correctIndex: 0,
        explanation: 'Al no inhibir la enzima constitutiva COX-1 de la mucosa gástrica, el Celecoxib reduce aproximadamente a la mitad las complicaciones ulcerosas gastrointestinales, aunque carece de efecto antiagregante plaquetario.',
        relatedDrugName: 'Celecoxib',
        relatedDrugId: 'med-celecoxib',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-9',
        question: '¿En qué consiste la combinación conocida en farmacología clínica como "Triple Whammy" (Triple Golpe Renal)?',
        options: [
          'Coadministración de AINE + IECA/ARA-II + Diurético, que provoca insuficiencia renal aguda por caída crítica del filtrado glomerular.',
          'Uso simultáneo de tres antibióticos aminoglucósidos en meningitis.',
          'Asociación de tres opioides de diferente potencia en dolor leve.',
          'Combinación de insulina rápida + intermedia + basal en una sola inyección.'
        ],
        correctIndex: 0,
        explanation: 'El diurético reduce la volemia, el IECA/ARA-II vasodilata la arteriola eferente y el AINE bloquea las prostaglandinas vasoconstrayendo la arteriola aferente. Esto causa una pérdida abrupta de la presión de filtración glomerular con fracaso renal agudo anúrico.',
        relatedDrugName: 'Ibuprofeno',
        relatedDrugId: 'med-ibuprofeno',
        therapeuticArea: 'Reumatología y Analgesia'
      },
      {
        id: 'q-ai-10',
        question: '¿Cuál es la vía de administración que NUNCA debe utilizarse para el Metamizol inyectable debido al riesgo de colapso cardiovascular e hipotensión súbita?',
        options: [
          'Inyección en bolo intravenoso directo rápido.',
          'Infusión intravenosa lenta diluida en 100 ml de solución salina durante 20 minutos.',
          'Inyección intramuscular profunda en glúteo.',
          'Vía oral en solución gotero.'
        ],
        correctIndex: 0,
        explanation: 'El metamizol administrado en bolo IV rápido produce vasodilatación masiva periférica con colapso circulatorio hemodinámico grave e hipotensión arterial severa. Siempre debe infundirse lentamente en al menos 15-20 minutos.',
        relatedDrugName: 'Metamizol',
        relatedDrugId: 'med-metamizol',
        therapeuticArea: 'Reumatología y Analgesia'
      }
    ]
  },
  {
    id: 'quiz-corticosteroides',
    title: 'Cuestionario 3: Corticosteroides, Inmunomoduladores y Endocrinología',
    subtitle: 'Dexametasona, Hidrocortisona, Prednisona, Metilprednisolona y Betametasona',
    description: 'Preguntas sobre mecanismos genómicos y no genómicos, diferencias mineralocorticoides vs glucocorticoides, esquemas prenatales y manejo del eje HHA.',
    badge: '10 Preguntas Clínicas',
    difficulty: 'Intermedio',
    estimatedMinutes: 8,
    iconType: 'steroid',
    questions: [
      {
        id: 'q-cs-1',
        question: '¿Cuál de los siguientes corticosteroides tiene mayor potencia antiinflamatoria intrínseca y prácticamente CERO actividad mineralocorticoide retenedora de sodio?',
        options: [
          'Dexametasona (potencia 25-30 veces superior al cortisol).',
          'Hidrocortisona.',
          'Fludrocortisona.',
          'Aldosterona endógena.'
        ],
        correctIndex: 0,
        explanation: 'La dexametasona y la betametasona poseen una potencia glucocorticoide unas 25 a 30 veces mayor que el cortisol/hidrocortisona y carecen de efecto retenedor de sodio, por lo que son de elección cuando se desea evitar edemas e hipertensión.',
        relatedDrugName: 'Dexametasona',
        relatedDrugId: 'med-dexametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-2',
        question: '¿Por qué la Hidrocortisona es el fármaco de elección indispensable en la Crisis Suprarrenal Aguda (Addisoniana)?',
        options: [
          'Porque aporta tanto actividad glucocorticoide como mineralocorticoide equilibrada para restaurar la volemia y la tensión arterial.',
          'Porque destruye selectivamente los anticuerpos anti-corteza suprarrenal en 1 hora.',
          'Porque no se metaboliza en el hígado y se excreta directamente por la bilis.',
          'Porque es el único corticoide que no eleva los niveles de glucemia plasmática.'
        ],
        correctIndex: 0,
        explanation: 'El shock addisoniano se debe al déficit de cortisol y aldosterona. La hidrocortisona restaura ambas funciones: estimula la gluconeogénesis y el tono vascular, y promueve la reabsorción tubular renal de sodio y agua.',
        relatedDrugName: 'Hidrocortisona',
        relatedDrugId: 'med-hidrocortisona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-3',
        question: '¿Por qué la Prednisona es el corticoide sistémico de elección para tratar a una madre gestante con brote de lupus sin afectar significativamente al feto?',
        options: [
          'Porque la enzima placentaria 11-beta-hidroxiesteroide deshidrogenasa tipo 2 (11beta-HSD2) la inactiva a prednisona antes de llegar al feto.',
          'Porque la molécula de prednisona es demasiado grande para atravesar la placenta.',
          'Porque los receptores fetales de glucocorticoides no maduran hasta la semana 38.',
          'Porque se une al 100% al líquido amniótico neutralizándose químicamente.'
        ],
        correctIndex: 0,
        explanation: 'La placenta humana contiene abundantes niveles de 11beta-HSD2, la cual transforma la prednisolona activa en prednisona inactiva, protegiendo al feto de la exposición a dosis farmacológicas altas mientras la madre recibe tratamiento.',
        relatedDrugName: 'Prednisona',
        relatedDrugId: 'med-prednisona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-4',
        question: '¿Cuál es el esquema farmacológico prenatal estándar de oro con Betametasona para maduración pulmonar fetal en amenaza de parto prematuro (semanas 24 a 34)?',
        options: [
          '12 mg por vía intramuscular cada 24 horas por un total de 2 dosis (24 mg en total).',
          '4 mg por vía intravenosa cada 6 horas durante 7 días continuos.',
          '50 mg en bolo único intraamniótico guiado por ecografía.',
          '100 mg por vía oral con el desayuno durante 3 días.'
        ],
        correctIndex: 0,
        explanation: 'El protocolo estandarizado por el Colegio Americano de Obstetras y Ginecólogos (ACOG) y la OMS consiste en 2 dosis de 12 mg IM de betametasona separadas por 24 horas para inducir la síntesis de surfactante pulmonar en neumocitos tipo II.',
        relatedDrugName: 'Betametasona',
        relatedDrugId: 'med-betametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-5',
        question: '¿Cuál es la razón fisiológica por la que un tratamiento prolongado con corticosteroides (> 2 a 3 semanas) NUNCA debe suspenderse de forma brusca?',
        options: [
          'Por riesgo de insuficiencia suprarrenal aguda potencialmente mortal debido a la atrofia del eje hipotálamo-hipófiso-suprarrenal (HHA).',
          'Porque genera hiperpotasemia refractaria inmediata que produce asistolia en menos de 1 hora.',
          'Porque desencadena necrosis avascular masiva de todas las articulaciones periféricas.',
          'Porque produce hipotiroidismo primario irreversible por anticuerpos anti-TPO.'
        ],
        correctIndex: 0,
        explanation: 'Los corticoides exógenos suprimen por retroalimentación negativa la liberación de CRH y ACTH. Tras semanas de supresión, la corteza suprarrenal se atrofia y es incapaz de producir cortisol endógeno si el fármaco se retira de golpe.',
        relatedDrugName: 'Dexametasona',
        relatedDrugId: 'med-dexametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-6',
        question: 'En un paciente con brote grave y fulminante de lupus eritematoso sistémico o esclerosis múltiple, ¿qué corticosteroide se emplea en "pulsos" de megadosis intravenosa (500 a 1000 mg/día durante 3 días)?',
        options: [
          'Metilprednisolona (succinato sódico).',
          'Triamcinolona tópica.',
          'Fludrocortisona.',
          'Budesonida inhalada.'
        ],
        correctIndex: 0,
        explanation: 'La Metilprednisolona es el esteroide estándar para terapias de choque ("pulsos") en bolos de 500-1000 mg IV debido a sus efectos no genómicos inmediatos sobre linfocitos y su baja toxicidad mineralocorticoide.',
        relatedDrugName: 'Metilprednisolona',
        relatedDrugId: 'med-metilprednisolona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-7',
        question: '¿A qué hora del día se recomienda administrar la dosis única de Prednisona en pautas orales crónicas matutinas y cuál es el motivo?',
        options: [
          'A las 22:00 horas antes de dormir para inducir el sueño fisiológico.',
          'Entre las 7:00 y las 9:00 horas con el desayuno, para sincronizarse con el pico circadiano endógeno de ACTH/cortisol y reducir la supresión del eje HHA.',
          'Al mediodía con el almuerzo para que coincida con el nadir de filtrado glomerular.',
          'En tres tomas fraccionadas nocturnas cada 4 horas.'
        ],
        correctIndex: 1,
        explanation: 'El pico fisiológico matutino de cortisol ocurre a primeras horas de la mañana. Tomar la prednisona a esa hora imita la secreción endógena, respeta la ritmicidad circadiana y minimiza el insomnio y la supresión adrenal.',
        relatedDrugName: 'Prednisona',
        relatedDrugId: 'med-prednisona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-8',
        question: '¿Cuál es la complicación osteomuscular silente más frecuente y temible del uso crónico de glucocorticoides que requiere profilaxis preventiva con calcio, vitamina D y bifosfonatos?',
        options: [
          'Osteoporosis esteroidea y fracturas vertebrales por compresión.',
          'Hipertrofia muscular proximal acelerada.',
          'Osteopetrosis congénita con calcificación de conductos auditivos.',
          'Rigidez matutina articular sin pérdida de densidad ósea.'
        ],
        correctIndex: 0,
        explanation: 'Los glucocorticoides inhiben la formación ósea por osteoblastos, aumentan la reabsorción por osteoclastos y disminuyen la absorción intestinal de calcio, provocando osteoporosis acelerada y fracturas patológicas.',
        relatedDrugName: 'Prednisona',
        relatedDrugId: 'med-prednisona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-9',
        question: '¿Por qué la Dexametasona es el glucocorticoide de primera elección en el edema cerebral vasogénico secundario a tumores cerebrales?',
        options: [
          'Porque penetra eficazmente la barrera hematoencefálica y carece de actividad mineralocorticoide, evitando retención de agua en el parénquima cerebral.',
          'Porque destruye directamente las células endoteliales de la barrera hematoencefálica.',
          'Porque actúa como agonista dopaminérgico en el cuerpo estriado disminuyendo la presión de LCR.',
          'Porque aumenta la osmolaridad plasmática de forma idéntica al manitol hipertónico.'
        ],
        correctIndex: 0,
        explanation: 'La dexametasona sella las uniones estrechas del endotelio cerebral, reduce la permeabilidad vascular del tumor y, al no retener sodio ni agua, no agrava el edema intracraneal vasogénico.',
        relatedDrugName: 'Dexametasona',
        relatedDrugId: 'med-dexametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-cs-10',
        question: '¿Qué alteración analítica hematológica es común y esperable observar a las pocas horas de administrar una dosis de corticosteroide sistémico?',
        options: [
          'Leucocitosis con neutrofilia (por demarginación de neutrófilos del endotelio vascular) y eosinopenia.',
          'Pancitopenia severa con trombocitopenia aislada.',
          'Agranulocitosis completa sin fiebre.',
          'Eosinofilia masiva superior al 25%.'
        ],
        correctIndex: 0,
        explanation: 'Los glucocorticoides desprenden a los neutrófilos que están adheridos al endotelio vascular hacia la circulación (demarginación), produciendo una leucocitosis reactiva no infecciosa acompañada de eosinopenia y linfopenia.',
        relatedDrugName: 'Dexametasona',
        relatedDrugId: 'med-dexametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      }
    ]
  },
  {
    id: 'quiz-psicofarmacos',
    title: 'Cuestionario 4: Sistema Nervioso Central (Ansiolíticos, Barbitúricos y Antidepresivos)',
    subtitle: 'Diazepam, Lorazepam, Fenobarbital, Tiopental, Fenelzina, Amitriptilina y Venlafaxina',
    description: 'Modulación alostérica GABAérgica, diferencias BZD vs Barbitúricos, antídotos, inducción hepática, crisis por tiramina y cardiotoxicidad por tricíclicos.',
    badge: '10 Preguntas Clínicas',
    difficulty: 'Avanzado',
    estimatedMinutes: 9,
    iconType: 'cns',
    questions: [
      {
        id: 'q-snc-1',
        question: '¿Cuál es la diferencia fundamental en el mecanismo de acción sobre el receptor GABA-A entre las Benzodiacepinas y los Barbitúricos?',
        options: [
          'Las benzodiacepinas aumentan la FRECUENCIA de apertura del canal de Cl-, mientras que los barbitúricos prolongan la DURACIÓN del tiempo de apertura.',
          'Las benzodiacepinas abren directamente el canal sin GABA, mientras que los barbitúricos requieren acetilcolina presináptica.',
          'Los barbitúricos bloquean los canales de cloro impidiendo la entrada de iones negativos.',
          'No existe diferencia: ambos comparten el mismo sitio de unión y la misma cinética.'
        ],
        correctIndex: 0,
        explanation: 'Las benzodiacepinas son moduladores que aumentan la frecuencia de apertura del canal en presencia de GABA. Los barbitúricos prolongan la duración de apertura del canal y a dosis altas pueden abrirlo directamente sin GABA (carecen de efecto techo, lo que explica su letalidad en sobredosis).',
        relatedDrugName: 'Diazepam',
        relatedDrugId: 'med-diazepam',
        therapeuticArea: 'Psiquiatría y Anestesia'
      },
      {
        id: 'q-snc-2',
        question: '¿Cuál es el antídoto específico de elección para revertir la depresión del sistema nervioso central inducida por Benzodiacepinas?',
        options: [
          'Flumazenil (antagonista competitivo del receptor BZD en GABA-A).',
          'Naloxona intravenosa.',
          'Fisostigmina.',
          'Pralidoxima.'
        ],
        correctIndex: 0,
        explanation: 'El Flumazenil es un antagonista neutro competitivo que se une al sitio benzodiacepínico del receptor GABA-A y revierte la sedación y coma producidos por benzodiacepinas.',
        relatedDrugName: 'Diazepam',
        relatedDrugId: 'med-diazepam',
        therapeuticArea: 'Psiquiatría y Anestesia'
      },
      {
        id: 'q-snc-3',
        question: '¿Por qué el Lorazepam y el Oxazepam son las benzodiacepinas de elección en pacientes ancianos o con hepatopatía crónica (cirrosis hepática)?',
        options: [
          'Porque no dependen del citocromo P450; se metabolizan exclusivamente por glucuronidación directa en metabolitos inactivos sin acumulación.',
          'Porque aumentan el flujo portal y regeneran los hepatocitos dañados.',
          'Porque se excretan intactos por el sudor y la saliva sin pasar por el hígado.',
          'Porque bloquean los receptores opioides kappa protegiendo la función biliar.'
        ],
        correctIndex: 0,
        explanation: 'Lorazepam, Oxazepam y Temazepam (regla mnemotécnica LOT) sufren glucuronoconjugación directa sin pasar por oxidación microsomal hepática (CYP450). Por tanto, no forman metabolitos activos de semivida prolongada y son seguros en hepatopatías.',
        relatedDrugName: 'Lorazepam',
        relatedDrugId: 'med-lorazepam',
        therapeuticArea: 'Psiquiatría y Anestesia'
      },
      {
        id: 'q-snc-4',
        question: '¿En qué tipo de crisis convulsivas el Fenobarbital sigue siendo el tratamiento estándar de primera elección en las guías pediátricas internacionales?',
        options: [
          'Convulsiones neonatales en recién nacidos.',
          'Ausencias típicas infantiles escolares.',
          'Crisis atónicas en el adulto joven.',
          'Espasmos de sollozo.'
        ],
        correctIndex: 0,
        explanation: 'El fenobarbital es el fármaco de primera línea de elección en las convulsiones neonatales debido a su eficacia anticonvulsivante consolidada y farmacocinética bien conocida en el recién nacido.',
        relatedDrugName: 'Fenobarbital',
        relatedDrugId: 'med-fenobarbital',
        therapeuticArea: 'Neurología'
      },
      {
        id: 'q-snc-5',
        question: 'La corta duración del efecto anestésico del Tiopental Sódico (5 a 10 minutos tras un bolo IV) se debe principalmente a:',
        options: [
          'La rápida redistribución del fármaco desde el encéfalo altamente perfundido hacia el músculo esquelético y tejido adiposo.',
          'Una destrucción enzimática ultrarrápida por pseudocolinesterasas plasmáticas en 60 segundos.',
          'Una filtración glomerular masiva inmediata con aclaramiento renal del 100%.',
          'La inactivación instantánea por el pH ácido de la sangre venosa.'
        ],
        correctIndex: 0,
        explanation: 'El tiopental es muy liposoluble y entra al cerebro en 30 segundos. El despertar rápido ocurre porque el fármaco se redistribuye físicamente a tejidos con menor perfusión (músculo y grasa). Su metabolismo hepático posterior es lento (semivida de 11 horas).',
        relatedDrugName: 'Tiopental Sódico',
        relatedDrugId: 'med-tiopental',
        therapeuticArea: 'Psiquiatría y Anestesia'
      },
      {
        id: 'q-snc-6',
        question: 'Un paciente que toma Fenelzina (antidepresivo IMAO) consume queso curado maduro y vino tinto. ¿Qué cuadro clínico grave se desencadena y cuál es el motivo?',
        options: [
          'Crisis hipertensiva maligna aguda ("efecto queso") por acumulación masiva de tiramina no degradada que libera noradrenalina.',
          'Shock anafiláctico inmediato mediado por IgE contra caseína láctea.',
          'Coma hipoglucémico por estimulación de células beta pancreáticas.',
          'Acidosis láctica fulminante por desacoplamiento mitocondrial.'
        ],
        correctIndex: 0,
        explanation: 'La MAO intestinal degrada normalmente la tiramina de la dieta. Al inhibir la MAO con fenelzina, la tiramina entra al torrente sanguíneo, entra a las vesículas adrenérgicas y desplaza masivamente noradrenalina, causando vasoconstricción letal y crisis hipertensiva.',
        relatedDrugName: 'Fenelzina',
        relatedDrugId: 'med-fenelzina',
        therapeuticArea: 'Psiquiatría'
      },
      {
        id: 'q-snc-7',
        question: '¿Cuál es la causa de muerte más frecuente en sobredosis agudas con antidepresivos tricíclicos como Amitriptilina o Imipramina y qué hallazgo en el ECG alerta de este peligro?',
        options: [
          'Arritmias ventriculares letales por bloqueo de canales de sodio cardíacos (Nav1.5), evidenciadas por ensanchamiento del complejo QRS > 100 ms.',
          'Edema laríngeo por anafilaxia aguda con elevación del segmento ST.',
          'Hemorragia alveolar difusa con aplanamiento de la onda T.',
          'Bloqueo auriculoventricular de 1er grado con intervalo PR menor a 120 ms.'
        ],
        correctIndex: 0,
        explanation: 'Los tricíclicos bloquean canales de sodio rápidos miocárdicos (efecto quinidina-like). En sobredosis ensanchan el QRS > 100 ms y causan taquicardias ventriculares mortales. El tratamiento de rescate es la alcalinización con Bicarbonato de Sodio IV.',
        relatedDrugName: 'Amitriptilina',
        relatedDrugId: 'med-amitriptilina',
        therapeuticArea: 'Psiquiatría'
      },
      {
        id: 'q-snc-8',
        question: '¿Por qué la Amitriptilina a dosis bajas (10 a 25 mg/noche) es un fármaco de primera línea para el dolor neuropático y profilaxis de migraña?',
        options: [
          'Porque potencia las vías analgésicas monoaminérgicas descendentes en el asta dorsal de la médula espinal y estabiliza membranas neuronales.',
          'Porque paraliza los nervios periféricos sensitivos de forma irreversible.',
          'Porque destruye los receptores TRPV1 en las terminaciones libres de la piel.',
          'Porque estimula la liberación masiva de cortisol por las glándulas suprarrenales.'
        ],
        correctIndex: 0,
        explanation: 'A dosis subantidepresivas, la amitriptilina inhibe la recaptación de serotonina y noradrenalina en las vías inhibitorias descendentes del tronco encefálico hacia el asta dorsal, bloqueando la transmisión del dolor neuropático.',
        relatedDrugName: 'Amitriptilina',
        relatedDrugId: 'med-amitriptilina',
        therapeuticArea: 'Psiquiatría'
      },
      {
        id: 'q-snc-9',
        question: '¿Cuál es el efecto adverso cardiovascular dosis-dependiente característico de la Venlafaxina (IRSN) que requiere monitorización médica periódica?',
        options: [
          'Elevación persistente de la presión arterial sistólica y diastólica debido a la inhibición de la recaptura de noradrenalina.',
          'Bradicardia sinusal severa con pausas sinusales > 3 segundos.',
          'Insuficiencia aórtica por engrosamiento valvular fibroso.',
          'Hipotensión ortostática por bloqueo alfa-1 periférico.'
        ],
        correctIndex: 0,
        explanation: 'La venlafaxina a dosis terapéuticas moderadas a altas (≥ 150 mg/día) inhibe intensamente el transportador de noradrenalina (NET), aumentando el tono adrenérgico sistémico y elevando la presión arterial en el 5-10% de los pacientes.',
        relatedDrugName: 'Venlafaxina',
        relatedDrugId: 'med-venlafaxina',
        therapeuticArea: 'Psiquiatría'
      },
      {
        id: 'q-snc-10',
        question: '¿Qué antidepresivo heterocíclico derivado de la loxapina bloquea receptores dopaminérgicos D2 y por ello puede causar síntomas extrapiramidales y galactorrea?',
        options: [
          'Amoxapina.',
          'Sertralina.',
          'Citalopram.',
          'Duloxetina.'
        ],
        correctIndex: 0,
        explanation: 'La Amoxapina se metaboliza a 7-hidroxiamoxapina, un potente antagonista de los receptores dopaminérgicos D2. Esto le permite tratar depresiones psicóticas, pero confiere el riesgo de discinesia tardía, parkinsonismo y galactorrea.',
        relatedDrugName: 'Amoxapina',
        relatedDrugId: 'med-amoxapina',
        therapeuticArea: 'Psiquiatría'
      }
    ]
  },
  {
    id: 'quiz-simulacro-global',
    title: 'Cuestionario 5: Simulacro Global de Farmacología Clínica',
    subtitle: 'Examen de Integración: Mecanismos de Acción, Interacciones Críticas y Antídotos',
    description: 'Prueba integradora que reúne preguntas clínicas interdisciplinarias basadas en las clasificaciones del vademécum de PharmaPedia.',
    badge: '12 Preguntas Integradoras',
    difficulty: 'Avanzado',
    estimatedMinutes: 12,
    iconType: 'global',
    questions: [
      {
        id: 'q-glob-1',
        question: 'Empareja el fármaco con su antídoto específico de elección ante intoxicación aguda:',
        options: [
          'Morfina: Naloxona // Diazepam: Flumazenil // Paracetamol: N-acetilcisteína // Antidepresivos Tricíclicos: Bicarbonato de Sodio.',
          'Morfina: Flumazenil // Diazepam: Naloxona // Paracetamol: Atropina // Tricíclicos: Fisostigmina.',
          'Morfina: Pralidoxima // Diazepam: Protamina // Paracetamol: Naloxona // Tricíclicos: Vitamina K.',
          'Morfina: Glucagón // Diazepam: Calcio // Paracetamol: Azul de metileno // Tricíclicos: Neostigmina.'
        ],
        correctIndex: 0,
        explanation: 'Morfina se revierte con Naloxona (antagonista mu); Diazepam con Flumazenil (antagonista GABA-A); Paracetamol con N-acetilcisteína (restituye glutatión hepático frente a NAPQI); Tricíclicos con Bicarbonato de Sodio (alcaliniza y desplaza el bloqueo de canales de sodio cardíacos).',
        therapeuticArea: 'Toxicología y Farmacología Médica'
      },
      {
        id: 'q-glob-2',
        question: '¿Cuál de los siguientes antibióticos betalactámicos se caracteriza por una semivida de 8 horas que permite dosificación cada 24 horas y tiene contraindicación letal si se mezcla con soluciones con Calcio?',
        options: [
          'Ceftriaxona (cefalosporina de 3ª generación).',
          'Amoxicilina oral.',
          'Penicilina G sódica.',
          'Eritromicina.'
        ],
        correctIndex: 0,
        explanation: 'La Ceftriaxona tiene una semivida de 8 horas que permite monodosis cada 24h. Está estrictamente contraindicada su administración conjunta con soluciones que contengan calcio (como Ringer Lactato) debido a la formación de precipitados insolubles letales en pulmón y riñón.',
        relatedDrugName: 'Ceftriaxona',
        relatedDrugId: 'med-ceftriaxona',
        therapeuticArea: 'Infectología y Medicina Interna'
      },
      {
        id: 'q-glob-3',
        question: '¿Qué mecanismo celular explica la acción antiinflamatoria de los glucocorticoides a través de la lipocortina-1 (anexina A1)?',
        options: [
          'Inhibición de la enzima Fosfolipasa A2, frenando la liberación de ácido araquidónico desde los fosfolípidos de membrana.',
          'Inhibición de la dihidrofolato reductasa en linfocitos T.',
          'Bloqueo de la captación de glucosa por receptores GLUT-2.',
          'Apertura directa de canales de calcio dependientes de ligando.'
        ],
        correctIndex: 0,
        explanation: 'Los glucocorticoides inducen la síntesis de anexina A1 (lipocortina-1), la cual inhibe la fosfolipasa A2. Al no liberarse ácido araquidónico, se frena el sustrato para ambas vías: prostaglandinas (COX) y leucotrienos (LOX).',
        relatedDrugName: 'Dexametasona',
        relatedDrugId: 'med-dexametasona',
        therapeuticArea: 'Endocrinología e Inmunología'
      },
      {
        id: 'q-glob-4',
        question: '¿Por qué está contraindicado el uso concomitante de Ibuprofeno en pacientes que toman Aspirina a dosis bajas para prevención secundaria cardiovascular?',
        options: [
          'Porque el ibuprofeno compite por el canal catalítico de la COX-1 impidiendo el acceso y la acetilación irreversible de la aspirina.',
          'Porque el ibuprofeno destruye químicamente a la aspirina en el lumen gástrico.',
          'Porque provoca una inducción metabólica que elimina a la aspirina en segundos.',
          'Porque alcaliniza la orina forzando la excreción tubular de salicilato.'
        ],
        correctIndex: 0,
        explanation: 'El ibuprofeno se une reversiblemente al canal de la COX-1 cerca de la Serina 530 y bloquea estéricamente el acceso de la aspirina. Si se toma primero, anula la cardioprotección irreversible de la aspirina.',
        relatedDrugName: 'Ácido Acetilsalicílico (Aspirina)',
        relatedDrugId: 'med-asa',
        therapeuticArea: 'Cardiología'
      },
      {
        id: 'q-glob-5',
        question: '¿Cuál es el fármaco de primera línea para revertir crisis distónicas agudas y parkinsonismo inducido por antipsicóticos típicos como el Haloperidol?',
        options: [
          'Biperideno o Difenhidramina (anticolinérgicos centrales).',
          'Naloxona intravenosa.',
          'Carbamazepina oral.',
          'Ácido valproico.'
        ],
        correctIndex: 0,
        explanation: 'El bloqueo masivo de receptores D2 en la vía nigroestriada desequilibra la balanza dopamina/acetilcolina a favor de la hiperactividad colinérgica. Un anticolinérgico antimuscarínico central (como Biperideno) restaura el equilibrio y resuelve la distonía aguda.',
        therapeuticArea: 'Psiquiatría y Neurología'
      },
      {
        id: 'q-glob-6',
        question: '¿Qué prueba diagnóstica y terapéutica distingue a la Hemicránea Continua de otras cefaleas trigémino-autonómicas?',
        options: [
          'Respuesta completa y rápida a la Indometacina.',
          'Respuesta a dosis altas de morfina intravenosa.',
          'Mejoría inmediata con parches de nicotina.',
          'Alivio exclusivo con oxígeno al 100% en mascarilla.'
        ],
        correctIndex: 0,
        explanation: 'La respuesta absoluta a la Indometacina es un criterio patognomónico estipulado por la Sociedad Internacional de Cefaleas para el diagnóstico diferencial de Hemicránea Continua y Hemicránea Paroxística.',
        relatedDrugName: 'Indometacina',
        relatedDrugId: 'med-indometacina',
        therapeuticArea: 'Neurología'
      },
      {
        id: 'q-glob-7',
        question: '¿Cuál es el mecanismo de acción de los hipoglucemiantes orales de la familia de las Biguanidas (Metformina)?',
        options: [
          'Activación de la proteína quinasa activada por AMP (AMPK) hepática, con inhibición de la gluconeogénesis y mejora de la sensibilidad periférica a la insulina.',
          'Cierre de canales de potasio sensibles a ATP en las células beta pancreáticas forzando la secreción de insulina.',
          'Inhibición del cotransportador renal de sodio-glucosa tipo 2 (SGLT2) en el túbulo contorneado proximal.',
          'Inhibición competitiva de la enzima dipeptidil peptidasa-4 (DPP-4).'
        ],
        correctIndex: 0,
        explanation: 'La metformina activa la enzima AMPK en el hepatocito, disminuye la expresión de genes gluconeogénicos frenando la producción hepática de glucosa y aumenta la translocación de GLUT-4 en el músculo esquelético.',
        therapeuticArea: 'Endocrinología y Diabetes'
      },
      {
        id: 'q-glob-8',
        question: '¿Cuál de los siguientes diuréticos actúa inhibiendo el cotransportador Na+/K+/2Cl- en la rama ascendente gruesa del asa de Henle y se conoce como "diurético de techo alto"?',
        options: [
          'Furosemida.',
          'Hidroclorotiazida.',
          'Espironolactona.',
          'Acetazolamida.'
        ],
        correctIndex: 0,
        explanation: 'La Furosemida es el prototipo de diurético de asa (de techo alto). Inhibe el cotransportador NKCC2 en la porción gruesa del asa de Henle, provocando una natriuresis y diuresis rápida y potente.',
        therapeuticArea: 'Nefrología y Cardiología'
      },
      {
        id: 'q-glob-9',
        question: '¿Qué régimen de quimioterapia bactericida de cuatro fármacos constituye la primera línea estándar para Mycobacterium tuberculosis (Tuberculosis pulmonar)?',
        options: [
          'Régimen RIPE: Rifampicina, Isoniazida, Pirazinamida y Etambutol.',
          'Ceftriaxona, Azitromicina, Doxiciclina y Ciprofloxacino.',
          'Metronidazol, Vancomicina, Meropenem y Gentamicina.',
          'Aciclovir, Oseltamivir, Ganciclovir y Ribavirina.'
        ],
        correctIndex: 0,
        explanation: 'El tratamiento de primera línea de la tuberculosis activa consiste en la fase intensiva con el régimen RIPE (Rifampicina, Isoniazida, Pirazinamida y Etambutol) durante 2 meses, seguido de 4 meses de consolidación con RIF + INH.',
        therapeuticArea: 'Neumología y Tisiología'
      },
      {
        id: 'q-glob-10',
        question: '¿Por qué la Clonidina o los Betabloqueantes no deben suspenderse de manera abrupta en pacientes hipertensos?',
        options: [
          'Por riesgo de crisis hipertensiva por rebote simpático hiperadrenérgico agudo.',
          'Por riesgo de calcificación renal nefrocalcinósica.',
          'Por producción de broncorrea profusa con insuficiencia respiratoria.',
          'Por transformación neoplásica de las células cromafines suprarrenales.'
        ],
        correctIndex: 0,
        explanation: 'La suspensión brusca produce una reactivación aguda de la descarga simpática adrenérgica (aumento de catecolaminas circulantes y up-regulation de receptores), provocando taquicardia severa y crisis hipertensiva por rebote.',
        therapeuticArea: 'Cardiología'
      },
      {
        id: 'q-glob-11',
        question: '¿Cuál es la función del Ácido Clavulánico cuando se asocia a la Amoxicilina en formulaciones antibacterianas?',
        options: [
          'Actúa como un inhibidor suicida irreversible de las enzimas betalactamasas producidas por bacterias resistentes.',
          'Aumenta la absorción intestinal de la amoxicilina alcalinizando el jugo gástrico.',
          'Bloquea la síntesis de ARN polimerasa vírica.',
          'Inhibe la subunidad 50S del ribosoma bacteriano.'
        ],
        correctIndex: 0,
        explanation: 'El ácido clavulánico tiene una estructura betalactámica que se une covalentemente al sitio activo de las betalactamasas bacterianas (inhibidor suicida), protegiendo a la amoxicilina de su degradación enzimática.',
        relatedDrugName: 'Amoxicilina con Ácido Clavulánico',
        relatedDrugId: 'med-amox-clav',
        therapeuticArea: 'Infectología y Medicina Interna'
      },
      {
        id: 'q-glob-12',
        question: '¿Qué fármaco antifúngico poliénico actúa uniéndose al ergosterol de la membrana fúngica formando poros líticos y requiere monitorización estrecha de nefrotoxicidad y potasio?',
        options: [
          'Anfotericina B.',
          'Fluconazol.',
          'Griseofulvina.',
          'Tolnaftato.'
        ],
        correctIndex: 0,
        explanation: 'La Anfotericina B se une con avidez al ergosterol de la membrana de hongos patógenos formando canales o poros iónicos que provocan la fuga de potasio y muerte celular. Su principal limitación es la vasoconstricción renal y necrosis tubular (nefrotoxicidad).',
        therapeuticArea: 'Infectología y Dermatología'
      }
    ]
  }
];
