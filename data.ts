import { Question, QuestionType, Language, SurveyContent } from './types';

// Helper to create consistent IDs across languages
const createOption = (id: string, label: string) => ({ id, label, value: id });

export const getSurveyContent = (lang: Language): SurveyContent => {
  // ----------------------------------------------------------------------
  // ENGLISH (Default)
  // ----------------------------------------------------------------------
  if (lang === 'en') {
    return {
      ui: {
        title: 'Student Learning Habits in the AI Era',
        subtitle: 'De-moralization · Quantifying Misalignment · Diagnosing Offloading',
        description: 'Hello! Generative AI (like ChatGPT, Gemini) is changing our lives. Some call it a "cheating tool", others a "second brain". No matter how you use it, we want your honest thoughts. This survey is anonymous and for academic research only.',
        startBtn: 'START JOURNEY',
        backBtn: 'BACK',
        nextBtn: 'NEXT',
        submittingBtn: 'SUBMITTING...',
        lowest: 'LOWEST (1)',
        highest: 'HIGHEST (5)',
        placeholder: 'Please enter your thoughts here...',
        completeTitle: 'Thank You',
        completeText: 'Your responses have been encrypted and stored. This research helps us understand the future of human-AI collaboration in education.',
        returnHome: 'Return to Home',
        neuralAnalysis: 'Neural Analysis',
        patternRecognition: 'Pattern Recognition',
        consentTitle: 'Informed Consent',
        consentText: 'Participation in this survey is completely voluntary. You may withdraw at any time without any consequences. No personally identifiable information (name, school, contact, IP, etc.) will be collected. All data will be used solely for research and educational analysis and will not be disclosed individually.',
        consentCheckbox: 'I have read and agree to the terms above.'
      },
      initialQuestion: {
        id: 'q0_grade',
        type: QuestionType.SINGLE_CHOICE,
        title: 'What is your current grade level?',
        options: [
          createOption('middle', 'Middle School'),
          createOption('high', 'High School / Vocational'),
          createOption('uni', 'University / Graduate School')
        ]
      },
      middleSchoolQuestions: [
        {
          id: 'q1_rank',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Where does your academic performance usually rank in your class? (Self-assessment)',
          options: [
            createOption('top20', 'Top 20%'),
            createOption('20-50', '20%-50% (Above Average)'),
            createOption('50-80', '50%-80% (Below Average)'),
            createOption('bottom20', 'Bottom 20%')
          ]
        },
        {
          id: 'q2_freq',
          type: QuestionType.SINGLE_CHOICE,
          title: 'How often do you use Generative AI tools?',
          options: [
            createOption('daily', 'Almost every day'),
            createOption('weekly', 'Several times a week'),
            createOption('rarely', 'Occasionally'),
            createOption('tried', 'Tried it, but stopped'),
            createOption('never', 'Never used')
          ]
        },
        {
          id: 'q2b_subjects',
          type: QuestionType.MULTI_CHOICE,
          title: 'Which subjects do you use AI for the most? (Select up to 3)',
          maxSelect: 3,
          options: [
            createOption('math', 'Math'),
            createOption('science', 'Science (Physics/Chem/Bio)'),
            createOption('history', 'History/Geography'),
            createOption('lang', 'Native Language/Literature'),
            createOption('foreign', 'Foreign Languages'),
            createOption('cs', 'Computer Science/IT'),
            createOption('arts', 'Arts/Music')
          ]
        },
        {
          id: 'q2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: 'Which AI tools do you use most frequently? (Select up to 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Other')
          ]
        },
        {
          id: 'q3_behavior',
          type: QuestionType.RATING_MATRIX,
          title: 'How do you use AI for the following tasks?',
          description: '1=Never, 3=Mixed, 5=Fully AI Generated',
          subQuestions: [
            { id: 'mech', text: 'A. Mechanical Tasks (Translation, rote memorization)' },
            { id: 'diff', text: 'B. Understanding Difficulties (Explaining physics concepts/texts)' },
            { id: 'struct', text: 'C. Structure Optimization (Outlining essays, polishing logic)' },
            { id: 'idea', text: 'D. Creative Inspiration (Brainstorming, finding counterarguments)' },
            { id: 'logic', text: 'E. Logic Deduction (Solving math/science problems directly)' }
          ]
        },
        {
          id: 'q3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'What is your preferred way of interacting with AI?',
          options: [
            createOption('direct', 'Direct Answer: "Just give me the answer/text"'),
            createOption('socratic', 'Socratic/Guided: "Give me hints, guide me step-by-step"'),
            createOption('mixed', 'Mixed Mode: Depends on the situation')
          ]
        },
        {
          id: 'q4_essay',
          type: QuestionType.SINGLE_CHOICE,
          title: 'For an essay on "Environment", which habit is closest to yours?',
          options: [
            createOption('proxy', 'A. Full Proxy: AI writes it, I submit it.'),
            createOption('collage', 'B. Collage: AI generates parts, I stitch them together.'),
            createOption('mentor', 'C. Mentor: I write the core, AI polishes/checks.'),
            createOption('trad', 'D. Traditional: I write everything myself.')
          ]
        },
        {
          id: 'q5_history',
          type: QuestionType.SINGLE_CHOICE,
          title: 'How do you prefer to master a complex historical event today?',
          options: [
            createOption('disk', 'A. Hard Drive Mode: Memorize all dates and details.'),
            createOption('index', 'B. Index Mode: Understand the logic, look up details via AI.'),
            createOption('box', 'C. Blind Box Mode: Ask AI whenever I need to know.')
          ]
        },
        {
          id: 'q6_opinion_poetry',
          type: QuestionType.LIKERT,
          title: 'Opinion: "Even with AI, memorizing poetry/vocabulary is still crucial for cultural depth."',
          options: [
            createOption('5', 'Strongly Agree'),
            createOption('4', 'Agree'),
            createOption('3', 'Neutral'),
            createOption('2', 'Disagree'),
            createOption('1', 'Strongly Disagree')
          ]
        },
        {
          id: 'q7_opinion_questioning',
          type: QuestionType.LIKERT,
          title: 'Opinion: "Future competitiveness is about ASKING good questions, not ANSWERING them."',
          options: [
            createOption('5', 'Strongly Agree'),
            createOption('4', 'Agree'),
            createOption('3', 'Neutral'),
            createOption('2', 'Disagree'),
            createOption('1', 'Strongly Disagree')
          ]
        },
        {
          id: 'q9_homework',
          type: QuestionType.SINGLE_CHOICE,
          title: 'What type of homework do teachers mostly assign?',
          options: [
            createOption('memory', 'A. Memory/Recall (Easy for AI)'),
            createOption('mixed', 'B. Mixed'),
            createOption('explore', 'C. Open Inquiry/Hands-on (AI can only assist)')
          ]
        },
        {
          id: 'q10_awkward',
          type: QuestionType.MULTI_CHOICE,
          title: 'Have you encountered these awkward situations? (Select all that apply)',
          options: [
            createOption('none', 'None'),
            createOption('cant_tell', 'Teacher cant tell if I used AI, gives high marks for standard answers.'),
            createOption('doubt', 'I used AI for depth, but teacher suspected it wasn\'t mine.'),
            createOption('exam_fail', 'I understood via AI, but failed rote memory exams.')
          ]
        },
        {
          id: 'q11_school_score',
          type: QuestionType.SINGLE_CHOICE,
          title: 'How would you rate your school\'s "AI Adaptability"?',
          options: [
            createOption('conservative', 'Conservative: Strictly prohibited.'),
            createOption('ostrich', 'Ostrich: Ignored, pretending AI doesn\'t exist.'),
            createOption('explorer', 'Explorer: Teachers guide us on correct usage.')
          ]
        },
        {
          id: 'q12_time',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Where does the time saved by AI usually go?',
          options: [
            createOption('ent', 'A. Entertainment/Rest'),
            createOption('more_qs', 'B. More Drills/Study'),
            createOption('deep', 'C. Deep Learning (Cross-disciplinary)'),
            createOption('creative', 'D. Creative Activities (Inventions, writing)')
          ]
        },
        {
          id: 'q14_open',
          type: QuestionType.TEXT,
          title: 'One sentence to education policy makers about AI and exams:',
          description: '(e.g., Please make exams open-book / Teach us how to use AI)'
        }
      ],
      universityQuestions: [
        {
          id: 'u1_stage',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Academic Stage?',
          options: [
            createOption('bachelor', 'Undergraduate'),
            createOption('master', 'Master\'s'),
            createOption('phd', 'PhD')
          ]
        },
        {
          id: 'u2_major',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Major Discipline?',
          options: [
            createOption('stem', 'STEM (Science, Tech, Eng, Math)'),
            createOption('humanities', 'Humanities & Social Sciences'),
            createOption('arts', 'Arts & Design'),
            createOption('business', 'Business/Management')
          ]
        },
        {
          id: 'u2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: 'Which AI tools do you use most frequently? (Select up to 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Other')
          ]
        },
        {
          id: 'u3_usage',
          type: QuestionType.RATING_MATRIX,
          title: 'How do you use AI in research/projects?',
          description: 'Rate 1-5',
          subQuestions: [
            { id: 'low', text: 'Low-level: Formatting, grammar, basic code' },
            { id: 'mid', text: 'Mid-level: Summarizing papers, explaining algorithms' },
            { id: 'high', text: 'High-level: Experimental design, critique, inspiration' }
          ]
        },
        {
          id: 'u3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Preferred way of interacting with AI?',
          options: [
            createOption('direct', 'Result-oriented: "Give me the code/summary"'),
            createOption('socratic', 'Process-oriented (Socratic): "Explain the logic, guide me"'),
            createOption('mixed', 'Mixed Mode')
          ]
        },
        {
          id: 'u4_paper',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Typical approach to a term paper?',
          options: [
            createOption('gen', 'A. Generative Dependency: AI generates most, I edit.'),
            createOption('coop', 'B. Enhanced Collaboration: I write core, AI optimizes.'),
            createOption('trad', 'C. Traditional: No AI, start from scratch.')
          ]
        },
        {
          id: 'u5_value',
          type: QuestionType.RATING_MATRIX,
          title: 'How has the value of these skills changed?',
          description: '1=Less Important, 5=More Important',
          subQuestions: [
            { id: 'store', text: 'Info Storage (Memorizing facts/syntax)' },
            { id: 'filter', text: 'Info Synthesis & Discrimination (Fact-checking)' },
            { id: 'ask', text: 'Asking Original Research Questions' }
          ]
        },
        {
          id: 'u6_expert',
          type: QuestionType.LIKERT,
          title: 'Agree? "Experts are no longer those who KNOW the most, but those who USE AI best."',
          options: [
            createOption('strong_agree', 'Strongly Agree'),
            createOption('agree', 'Agree'),
            createOption('neutral', 'Neutral'),
            createOption('disagree', 'Disagree')
          ]
        },
        {
          id: 'u7_eval',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Your major\'s assessment bias?',
          options: [
            createOption('result', 'Result-oriented (Vulnerable to AI)'),
            createOption('process', 'Process-oriented (Hard for AI, e.g., defense, lab)'),
            createOption('mixed', 'Mixed')
          ]
        },
        {
          id: 'u8_prof',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Professor\'s reaction to AI usage?',
          options: [
            createOption('neg', 'Negative: Views it as cheating.'),
            createOption('unknown', 'Unaware/Indifferent: As long as it passes plagiarism check.'),
            createOption('pos', 'Positive: Encourages smart usage.')
          ]
        },
        {
          id: 'u10_time_uni',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Where does the saved energy go?',
          options: [
            createOption('anxiety', 'Anxiety/Lost: Fear of replacement.'),
            createOption('gpa', 'GPA Grinding: More quantity, same quality.'),
            createOption('deep', 'Deep Research: Theory & Cross-discipline.'),
            createOption('startup', 'Innovation: Startups, side projects.')
          ]
        },
        {
          id: 'u11_open_uni',
          type: QuestionType.TEXT,
          title: 'If you designed a course for the AI era, what would you assess instead of memory?',
        }
      ]
    };
  }
  
  // ----------------------------------------------------------------------
  // SPANISH (Español)
  // ----------------------------------------------------------------------
  if (lang === 'es') {
    return {
      ui: {
        title: 'Hábitos de Aprendizaje en la Era de la IA',
        subtitle: 'Desmoralización · Cuantificación · Diagnóstico',
        description: '¡Hola! La IA generativa (ChatGPT, Gemini) está cambiando nuestras vidas. Algunos la llaman "herramienta de trampa", otros un "segundo cerebro". Queremos conocer tu opinión honesta. Esta encuesta es anónima y para investigación académica.',
        startBtn: 'INICIAR VIAJE',
        backBtn: 'ATRÁS',
        nextBtn: 'SIGUIENTE',
        submittingBtn: 'ENVIANDO...',
        lowest: 'BAJO (1)',
        highest: 'ALTO (5)',
        placeholder: 'Escribe tu respuesta aquí...',
        completeTitle: 'Gracias',
        completeText: 'Sus respuestas han sido cifradas y almacenadas. Esta investigación ayuda a comprender el futuro de la colaboración humano-IA.',
        returnHome: 'Volver al Inicio',
        neuralAnalysis: 'Análisis Neuronal',
        patternRecognition: 'Reconocimiento de Patrones',
        consentTitle: 'Consentimiento Informado',
        consentText: 'La participación en esta encuesta es completamente voluntaria. Puede retirarse en cualquier momento sin consecuencias. No se recopilará información de identificación personal (nombre, escuela, contacto, IP, etc.). Todos los datos se utilizarán únicamente para investigación y análisis educativo y no se divulgarán individualmente.',
        consentCheckbox: 'He leído y acepto los términos anteriores.'
      },
      initialQuestion: {
        id: 'q0_grade',
        type: QuestionType.SINGLE_CHOICE,
        title: '¿Cuál es tu nivel educativo actual?',
        options: [
          createOption('middle', 'Secundaria'),
          createOption('high', 'Bachillerato / FP'),
          createOption('uni', 'Universidad / Posgrado')
        ]
      },
      middleSchoolQuestions: [
        {
          id: 'q1_rank',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Cuál es tu rendimiento académico en clase? (Autoevaluación)',
          options: [
            createOption('top20', 'Top 20%'),
            createOption('20-50', '20%-50% (Medio-Alto)'),
            createOption('50-80', '50%-80% (Medio-Bajo)'),
            createOption('bottom20', '20% Inferior')
          ]
        },
        {
          id: 'q2_freq',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Con qué frecuencia usas herramientas de IA generativa?',
          options: [
            createOption('daily', 'Casi todos los días'),
            createOption('weekly', 'Varias veces por semana'),
            createOption('rarely', 'Ocasionalmente'),
            createOption('tried', 'Lo probé, pero lo dejé'),
            createOption('never', 'Nunca')
          ]
        },
        {
          id: 'q2b_subjects',
          type: QuestionType.MULTI_CHOICE,
          title: '¿En qué asignaturas usas más la IA? (Máx 3)',
          maxSelect: 3,
          options: [
            createOption('math', 'Matemáticas'),
            createOption('science', 'Ciencias (Fís/Quím/Bio)'),
            createOption('history', 'Historia/Geografía'),
            createOption('lang', 'Lengua/Literatura'),
            createOption('foreign', 'Idiomas'),
            createOption('cs', 'Informática/TIC'),
            createOption('arts', 'Artes/Música')
          ]
        },
        {
          id: 'q2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: '¿Qué herramientas de IA usas más? (Máx 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Otro')
          ]
        },
        {
          id: 'q3_behavior',
          type: QuestionType.RATING_MATRIX,
          title: '¿Cómo usas la IA para las siguientes tareas?',
          description: '1=Nunca, 3=Mixto, 5=Generado por IA',
          subQuestions: [
            { id: 'mech', text: 'A. Tareas Mecánicas (Traducción, memorización)' },
            { id: 'diff', text: 'B. Dificultades de Comprensión (Explicar conceptos)' },
            { id: 'struct', text: 'C. Optimización de Estructura (Esquemas, pulir estilo)' },
            { id: 'idea', text: 'D. Inspiración Creativa (Ideas, contraargumentos)' },
            { id: 'logic', text: 'E. Deducción Lógica (Resolver problemas matemáticas)' }
          ]
        },
        {
          id: 'q3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Cuál es tu forma preferida de interactuar con la IA?',
          options: [
            createOption('direct', 'Respuesta Directa: "Dame la solución"'),
            createOption('socratic', 'Socrático/Guiado: "Dame pistas, guíame paso a paso"'),
            createOption('mixed', 'Modo Mixto: Depende de la situación')
          ]
        },
        {
          id: 'q4_essay',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Para un ensayo sobre "Medio Ambiente", ¿qué hábito te describe mejor?',
          options: [
            createOption('proxy', 'A. Proxy Total: La IA lo escribe, yo lo envío.'),
            createOption('collage', 'B. Collage: La IA genera partes, yo las uno.'),
            createOption('mentor', 'C. Mentor: Yo escribo lo esencial, la IA pule.'),
            createOption('trad', 'D. Tradicional: Escribo todo yo mismo.')
          ]
        },
        {
          id: 'q5_history',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Cómo prefieres dominar un evento histórico complejo hoy en día?',
          options: [
            createOption('disk', 'A. Modo Disco Duro: Memorizar fechas y detalles.'),
            createOption('index', 'B. Modo Índice: Entender la lógica, buscar detalles con IA.'),
            createOption('box', 'C. Modo Caja Ciega: Preguntar a la IA cuando sea necesario.')
          ]
        },
        {
          id: 'q6_opinion_poetry',
          type: QuestionType.LIKERT,
          title: 'Opinión: "Incluso con IA, memorizar poesía/vocabulario es crucial para la base cultural."',
          options: [
            createOption('5', 'Totalmente de acuerdo'),
            createOption('4', 'De acuerdo'),
            createOption('3', 'Neutral'),
            createOption('2', 'En desacuerdo'),
            createOption('1', 'Totalmente en desacuerdo')
          ]
        },
        {
          id: 'q7_opinion_questioning',
          type: QuestionType.LIKERT,
          title: 'Opinión: "La competitividad futura está en HACER buenas preguntas, no en RESPONDERLAS."',
          options: [
            createOption('5', 'Totalmente de acuerdo'),
            createOption('4', 'De acuerdo'),
            createOption('3', 'Neutral'),
            createOption('2', 'En desacuerdo'),
            createOption('1', 'Totalmente en desacuerdo')
          ]
        },
        {
          id: 'q9_homework',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Qué tipo de tareas asignan más los profesores?',
          options: [
            createOption('memory', 'A. Memoria/Repetición (Fácil para la IA)'),
            createOption('mixed', 'B. Mixto'),
            createOption('explore', 'C. Indagación Abierta (La IA solo ayuda)')
          ]
        },
        {
          id: 'q10_awkward',
          type: QuestionType.MULTI_CHOICE,
          title: '¿Has encontrado estas situaciones incómodas? (Selecciona todas)',
          options: [
            createOption('none', 'Ninguna'),
            createOption('cant_tell', 'El profesor no distingue si usé IA.'),
            createOption('doubt', 'Usé IA para profundizar, pero el profesor sospechó.'),
            createOption('exam_fail', 'Entendí con IA, pero reprobé exámenes de memoria.')
          ]
        },
        {
          id: 'q11_school_score',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Cómo calificarías la "Adaptabilidad a la IA" de tu escuela?',
          options: [
            createOption('conservative', 'Conservadora: Estrictamente prohibida.'),
            createOption('ostrich', 'Avestruz: Ignorada, fingen que no existe.'),
            createOption('explorer', 'Exploradora: Nos guían en su uso correcto.')
          ]
        },
        {
          id: 'q12_time',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿A dónde va el tiempo ahorrado por la IA?',
          options: [
            createOption('ent', 'A. Entretenimiento/Descanso'),
            createOption('more_qs', 'B. Más ejercicios/Estudio'),
            createOption('deep', 'C. Aprendizaje Profundo'),
            createOption('creative', 'D. Actividades Creativas')
          ]
        },
        {
          id: 'q14_open',
          type: QuestionType.TEXT,
          title: 'Una frase para los responsables de política educativa sobre IA y exámenes:',
          description: '(Ej: Haz exámenes a libro abierto / Enséñanos a usar IA)'
        }
      ],
      universityQuestions: [
        {
          id: 'u1_stage',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Etapa académica?',
          options: [
            createOption('bachelor', 'Grado / Licenciatura'),
            createOption('master', 'Máster'),
            createOption('phd', 'Doctorado')
          ]
        },
        {
          id: 'u2_major',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Disciplina principal?',
          options: [
            createOption('stem', 'STEM (Ciencia, Tec, Ing, Mat)'),
            createOption('humanities', 'Humanidades y Ciencias Sociales'),
            createOption('arts', 'Artes y Diseño'),
            createOption('business', 'Negocios/Gestión')
          ]
        },
        {
          id: 'u2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: '¿Qué herramientas de IA usas más? (Máx 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Otro')
          ]
        },
        {
          id: 'u3_usage',
          type: QuestionType.RATING_MATRIX,
          title: '¿Cómo usas la IA en investigación/proyectos?',
          description: 'Puntúa 1-5',
          subQuestions: [
            { id: 'low', text: 'Nivel bajo: Formato, gramática, código básico' },
            { id: 'mid', text: 'Nivel medio: Resumir papers, explicar algoritmos' },
            { id: 'high', text: 'Nivel alto: Diseño experimental, crítica, inspiración' }
          ]
        },
        {
          id: 'u3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Forma preferida de interactuar con la IA?',
          options: [
            createOption('direct', 'Orientado a resultados: "Dame el código"'),
            createOption('socratic', 'Orientado al proceso (Socrático): "Explica la lógica"'),
            createOption('mixed', 'Modo Mixto')
          ]
        },
        {
          id: 'u4_paper',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Enfoque típico para un trabajo final?',
          options: [
            createOption('gen', 'A. Dependencia Generativa: La IA hace la mayoría.'),
            createOption('coop', 'B. Colaboración Mejorada: Yo escribo lo central, la IA optimiza.'),
            createOption('trad', 'C. Tradicional: Sin IA, desde cero.')
          ]
        },
        {
          id: 'u5_value',
          type: QuestionType.RATING_MATRIX,
          title: '¿Cómo ha cambiado el valor de estas habilidades?',
          description: '1=Menos Importante, 5=Más Importante',
          subQuestions: [
            { id: 'store', text: 'Almacenamiento de Info (Memorizar datos)' },
            { id: 'filter', text: 'Síntesis y Discriminación (Verificar hechos)' },
            { id: 'ask', text: 'Plantear Preguntas de Investigación Originales' }
          ]
        },
        {
          id: 'u6_expert',
          type: QuestionType.LIKERT,
          title: '¿De acuerdo? "Los expertos ya no son los que SABEN más, sino los que USAN mejor la IA."',
          options: [
            createOption('strong_agree', 'Totalmente de acuerdo'),
            createOption('agree', 'De acuerdo'),
            createOption('neutral', 'Neutral'),
            createOption('disagree', 'En desacuerdo')
          ]
        },
        {
          id: 'u7_eval',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Sesgo de evaluación de tu carrera?',
          options: [
            createOption('result', 'Orientado a Resultados (Vulnerable a IA)'),
            createOption('process', 'Orientado al Proceso (Difícil para IA, ej: defensa)'),
            createOption('mixed', 'Mixto')
          ]
        },
        {
          id: 'u8_prof',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿Reacción del profesor al uso de IA?',
          options: [
            createOption('neg', 'Negativa: Lo ve como trampa.'),
            createOption('unknown', 'Indiferente/No se entera.'),
            createOption('pos', 'Positiva: Fomenta el uso inteligente.')
          ]
        },
        {
          id: 'u10_time_uni',
          type: QuestionType.SINGLE_CHOICE,
          title: '¿A dónde va la energía ahorrada?',
          options: [
            createOption('anxiety', 'Ansiedad: Miedo al reemplazo.'),
            createOption('gpa', 'Nota: Más cantidad, misma calidad.'),
            createOption('deep', 'Investigación Profunda: Teoría y Transdisciplina.'),
            createOption('startup', 'Innovación: Startups, proyectos propios.')
          ]
        },
        {
          id: 'u11_open_uni',
          type: QuestionType.TEXT,
          title: 'Si diseñaras un curso para la era de la IA, ¿qué evaluarías en lugar de la memoria?',
        }
      ]
    };
  }

  // ----------------------------------------------------------------------
  // GERMAN (Deutsch)
  // ----------------------------------------------------------------------
  if (lang === 'de') {
    return {
      ui: {
        title: 'Lerngewohnheiten im KI-Zeitalter',
        subtitle: 'Entmoralisierung · Quantifizierung · Diagnose',
        description: 'Hallo! Generative KI (wie ChatGPT, Gemini) verändert unser Leben. Manche nennen es ein "Schummelwerkzeug", andere ein "zweites Gehirn". Wir möchten Ihre ehrliche Meinung hören. Diese Umfrage ist anonym.',
        startBtn: 'REISE BEGINNEN',
        backBtn: 'ZURÜCK',
        nextBtn: 'WEITER',
        submittingBtn: 'SENDEN...',
        lowest: 'NIEDRIG (1)',
        highest: 'HOCH (5)',
        placeholder: 'Bitte geben Sie hier Ihre Gedanken ein...',
        completeTitle: 'Danke',
        completeText: 'Ihre Antworten wurden verschlüsselt und gespeichert. Diese Forschung hilft uns, die Zukunft der Mensch-KI-Zusammenarbeit zu verstehen.',
        returnHome: 'Zurück zur Startseite',
        neuralAnalysis: 'Neuronale Analyse',
        patternRecognition: 'Mustererkennung',
        consentTitle: 'Einverständniserklärung',
        consentText: 'Die Teilnahme an dieser Umfrage ist völlig freiwillig. Sie können jederzeit ohne Konsequenzen zurücktreten. Es werden keine personenbezogenen Daten (Name, Schule, Kontakt, IP usw.) erhoben. Alle Daten werden ausschließlich für Forschungs- und Bildungsanalysen verwendet und nicht einzeln weitergegeben.',
        consentCheckbox: 'Ich habe die oben genannten Bedingungen gelesen und stimme zu.'
      },
      initialQuestion: {
        id: 'q0_grade',
        type: QuestionType.SINGLE_CHOICE,
        title: 'Was ist Ihr aktueller Bildungsstand?',
        options: [
          createOption('middle', 'Mittelstufe'),
          createOption('high', 'Oberstufe / Berufsschule'),
          createOption('uni', 'Universität / Graduiertenschule')
        ]
      },
      middleSchoolQuestions: [
        {
          id: 'q1_rank',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wo liegen Ihre schulischen Leistungen in der Klasse? (Selbsteinschätzung)',
          options: [
            createOption('top20', 'Top 20%'),
            createOption('20-50', '20%-50% (Überdurchschnittlich)'),
            createOption('50-80', '50%-80% (Unterdurchschnittlich)'),
            createOption('bottom20', 'Untere 20%')
          ]
        },
        {
          id: 'q2_freq',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wie oft nutzen Sie generative KI-Tools?',
          options: [
            createOption('daily', 'Fast jeden Tag'),
            createOption('weekly', 'Mehrmals pro Woche'),
            createOption('rarely', 'Gelegentlich'),
            createOption('tried', 'Ausprobiert, aber aufgehört'),
            createOption('never', 'Nie benutzt')
          ]
        },
        {
          id: 'q2b_subjects',
          type: QuestionType.MULTI_CHOICE,
          title: 'In welchen Fächern nutzen Sie KI am meisten? (Max 3)',
          maxSelect: 3,
          options: [
            createOption('math', 'Mathe'),
            createOption('science', 'Naturwissenschaften (Physik/Chemie/Bio)'),
            createOption('history', 'Geschichte/Erdkunde'),
            createOption('lang', 'Sprache/Literatur'),
            createOption('foreign', 'Fremdsprachen'),
            createOption('cs', 'Informatik/IT'),
            createOption('arts', 'Kunst/Musik')
          ]
        },
        {
          id: 'q2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: 'Welche KI-Tools nutzen Sie am häufigsten? (Max 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Andere')
          ]
        },
        {
          id: 'q3_behavior',
          type: QuestionType.RATING_MATRIX,
          title: 'Wie nutzen Sie KI für folgende Aufgaben?',
          description: '1=Nie, 3=Gemischt, 5=Vollständig KI-generiert',
          subQuestions: [
            { id: 'mech', text: 'A. Mechanische Aufgaben (Übersetzung, Auswendiglernen)' },
            { id: 'diff', text: 'B. Verständnisprobleme (Konzepte erklären)' },
            { id: 'struct', text: 'C. Strukturoptimierung (Gliederung, Stil)' },
            { id: 'idea', text: 'D. Kreative Inspiration (Ideen, Gegenargumente)' },
            { id: 'logic', text: 'E. Logische Deduktion (Mathe/Wissenschaft lösen)' }
          ]
        },
        {
          id: 'q3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wie interagieren Sie am liebsten mit KI?',
          options: [
            createOption('direct', 'Direkte Antwort: "Gib mir die Lösung"'),
            createOption('socratic', 'Sokratisch/Geleitet: "Gib mir Hinweise, leite mich"'),
            createOption('mixed', 'Gemischter Modus')
          ]
        },
        {
          id: 'q4_essay',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Bei einem Aufsatz über "Umwelt", welche Gewohnheit trifft zu?',
          options: [
            createOption('proxy', 'A. Vollständiger Proxy: KI schreibt, ich reiche ein.'),
            createOption('collage', 'B. Collage: KI generiert Teile, ich füge sie zusammen.'),
            createOption('mentor', 'C. Mentor: Ich schreibe den Kern, KI poliert.'),
            createOption('trad', 'D. Traditionell: Ich schreibe alles selbst.')
          ]
        },
        {
          id: 'q5_history',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wie lernen Sie heute komplexe historische Ereignisse?',
          options: [
            createOption('disk', 'A. Festplatten-Modus: Alle Details auswendig lernen.'),
            createOption('index', 'B. Index-Modus: Logik verstehen, Details via KI suchen.'),
            createOption('box', 'C. Black-Box-Modus: KI fragen, wenn nötig.')
          ]
        },
        {
          id: 'q6_opinion_poetry',
          type: QuestionType.LIKERT,
          title: 'Meinung: "Auch mit KI ist das Auswendiglernen von Gedichten/Vokabeln wichtig."',
          options: [
            createOption('5', 'Stimme voll zu'),
            createOption('4', 'Stimme zu'),
            createOption('3', 'Neutral'),
            createOption('2', 'Stimme nicht zu'),
            createOption('1', 'Stimme überhaupt nicht zu')
          ]
        },
        {
          id: 'q7_opinion_questioning',
          type: QuestionType.LIKERT,
          title: 'Meinung: "Zukünftige Wettbewerbsfähigkeit liegt im STELLEN guter Fragen, nicht im BEANTWORTEN."',
          options: [
            createOption('5', 'Stimme voll zu'),
            createOption('4', 'Stimme zu'),
            createOption('3', 'Neutral'),
            createOption('2', 'Stimme nicht zu'),
            createOption('1', 'Stimme überhaupt nicht zu')
          ]
        },
        {
          id: 'q9_homework',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Welche Art von Hausaufgaben geben Lehrer meistens auf?',
          options: [
            createOption('memory', 'A. Gedächtnis/Wiedergabe (Leicht für KI)'),
            createOption('mixed', 'B. Gemischt'),
            createOption('explore', 'C. Offene Untersuchung (KI kann nur helfen)')
          ]
        },
        {
          id: 'q10_awkward',
          type: QuestionType.MULTI_CHOICE,
          title: 'Haben Sie diese Situationen erlebt?',
          options: [
            createOption('none', 'Keine'),
            createOption('cant_tell', 'Lehrer merkt KI-Nutzung nicht.'),
            createOption('doubt', 'Ich nutzte KI für Tiefe, Lehrer war misstrauisch.'),
            createOption('exam_fail', 'Mit KI verstanden, aber in Gedächtnisprüfungen versagt.')
          ]
        },
        {
          id: 'q11_school_score',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wie würden Sie die "KI-Anpassungsfähigkeit" Ihrer Schule bewerten?',
          options: [
            createOption('conservative', 'Konservativ: Streng verboten.'),
            createOption('ostrich', 'Strauß: Ignoriert, tut so, als gäbe es KI nicht.'),
            createOption('explorer', 'Entdecker: Lehrer leiten zur korrekten Nutzung an.')
          ]
        },
        {
          id: 'q12_time',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wohin fließt die durch KI gesparte Zeit?',
          options: [
            createOption('ent', 'A. Unterhaltung/Ruhe'),
            createOption('more_qs', 'B. Mehr Übungen/Lernen'),
            createOption('deep', 'C. Tiefes Lernen'),
            createOption('creative', 'D. Kreative Aktivitäten')
          ]
        },
        {
          id: 'q14_open',
          type: QuestionType.TEXT,
          title: 'Ein Satz an Bildungspolitiker über KI und Prüfungen:',
          description: '(z.B. Bitte machen Sie Prüfungen mit offenen Büchern)'
        }
      ],
      universityQuestions: [
        {
          id: 'u1_stage',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Akademischer Grad?',
          options: [
            createOption('bachelor', 'Bachelor'),
            createOption('master', 'Master'),
            createOption('phd', 'PhD/Doktorand')
          ]
        },
        {
          id: 'u2_major',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Fachbereich?',
          options: [
            createOption('stem', 'MINT (Mathe, Info, Naturwiss, Technik)'),
            createOption('humanities', 'Geistes- & Sozialwissenschaften'),
            createOption('arts', 'Kunst & Design'),
            createOption('business', 'Wirtschaft/Management')
          ]
        },
        {
          id: 'u2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: 'Welche KI-Tools nutzen Sie am häufigsten? (Max 2)',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Andere')
          ]
        },
        {
          id: 'u3_usage',
          type: QuestionType.RATING_MATRIX,
          title: 'Wie nutzen Sie KI in Forschung/Projekten?',
          description: 'Bewertung 1-5',
          subQuestions: [
            { id: 'low', text: 'Low-Level: Formatierung, Grammatik, Basis-Code' },
            { id: 'mid', text: 'Mid-Level: Paper zusammenfassen, Algorithmen erklären' },
            { id: 'high', text: 'High-Level: Experimentdesign, Kritik, Inspiration' }
          ]
        },
        {
          id: 'u3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Bevorzugte Interaktion mit KI?',
          options: [
            createOption('direct', 'Ergebnisorientiert: "Gib mir den Code"'),
            createOption('socratic', 'Prozessorientiert (Sokratisch): "Erkläre die Logik"'),
            createOption('mixed', 'Gemischter Modus')
          ]
        },
        {
          id: 'u4_paper',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Typischer Ansatz für eine Hausarbeit?',
          options: [
            createOption('gen', 'A. Generative Abhängigkeit: KI macht das Meiste.'),
            createOption('coop', 'B. Verbesserte Zusammenarbeit: Ich schreibe Kern, KI optimiert.'),
            createOption('trad', 'C. Traditionell: Keine KI, alles selbst.')
          ]
        },
        {
          id: 'u5_value',
          type: QuestionType.RATING_MATRIX,
          title: 'Wie hat sich der Wert dieser Fähigkeiten verändert?',
          description: '1=Weniger wichtig, 5=Wichtiger',
          subQuestions: [
            { id: 'store', text: 'Infospeicherung (Fakten lernen)' },
            { id: 'filter', text: 'Synthese & Unterscheidung (Faktencheck)' },
            { id: 'ask', text: 'Originelle Forschungsfragen stellen' }
          ]
        },
        {
          id: 'u6_expert',
          type: QuestionType.LIKERT,
          title: 'Zustimmung? "Experten sind nicht mehr die, die am meisten WISSEN, sondern die, die KI am besten NUTZEN."',
          options: [
            createOption('strong_agree', 'Stimme voll zu'),
            createOption('agree', 'Stimme zu'),
            createOption('neutral', 'Neutral'),
            createOption('disagree', 'Stimme nicht zu')
          ]
        },
        {
          id: 'u7_eval',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Bewertungsbias Ihres Fachs?',
          options: [
            createOption('result', 'Ergebnisorientiert (Anfällig für KI)'),
            createOption('process', 'Prozessorientiert (Schwer für KI, z.B. Verteidigung)'),
            createOption('mixed', 'Gemischt')
          ]
        },
        {
          id: 'u8_prof',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Reaktion des Professors auf KI-Nutzung?',
          options: [
            createOption('neg', 'Negativ: Sieht es als Betrug.'),
            createOption('unknown', 'Unbewusst/Gleichgültig.'),
            createOption('pos', 'Positiv: Fördert intelligente Nutzung.')
          ]
        },
        {
          id: 'u10_time_uni',
          type: QuestionType.SINGLE_CHOICE,
          title: 'Wohin fließt die gesparte Energie?',
          options: [
            createOption('anxiety', 'Angst: Furcht vor Ersetzung.'),
            createOption('gpa', 'Notenjagd: Mehr Quantität.'),
            createOption('deep', 'Tiefe Forschung: Theorie & Interdisziplinär.'),
            createOption('startup', 'Innovation: Startups, eigene Projekte.')
          ]
        },
        {
          id: 'u11_open_uni',
          type: QuestionType.TEXT,
          title: 'Wenn Sie einen Kurs für das KI-Zeitalter entwerfen würden, was würden Sie bewerten?',
        }
      ]
    };
  }

  // ----------------------------------------------------------------------
  // JAPANESE (日本語)
  // ----------------------------------------------------------------------
  if (lang === 'ja') {
    return {
      ui: {
        title: 'AI時代の学生の学習習慣調査',
        subtitle: '脱道徳化・ミスマッチの定量化・オフローディングの診断',
        description: 'こんにちは！生成AI（ChatGPT、Geminiなど）は私たちの生活を変えています。「カンニングツール」と言う人もいれば、「第二の脳」と言う人もいます。あなたがどう使っているか、率直な意見を聞かせてください。このアンケートは匿名で、学術研究のみに使用されます。',
        startBtn: '探索を開始',
        backBtn: '戻る',
        nextBtn: '次へ',
        submittingBtn: '送信中...',
        lowest: '低い (1)',
        highest: '高い (5)',
        placeholder: 'ここに意見を入力してください...',
        completeTitle: 'ありがとうございます',
        completeText: '回答は暗号化され保存されました。この研究は、教育における人間とAIの協働の未来を理解するのに役立ちます。',
        returnHome: 'ホームに戻る',
        neuralAnalysis: 'ニューラル分析',
        patternRecognition: 'パターン認識',
        consentTitle: 'インフォームド・コンセント',
        consentText: 'このアンケートへの参加は完全に任意です。いつでも不利益なしに撤回できます。個人を特定できる情報（名前、学校、連絡先、IPなど）は収集されません。すべてのデータは研究および教育分析のためにのみ使用され、個別に開示されることはありません。',
        consentCheckbox: '上記の条件を読み、同意します。'
      },
      initialQuestion: {
        id: 'q0_grade',
        type: QuestionType.SINGLE_CHOICE,
        title: '現在の学年は？',
        options: [
          createOption('middle', '中学生'),
          createOption('high', '高校生 / 高専生'),
          createOption('uni', '大学生 / 大学院生')
        ]
      },
      middleSchoolQuestions: [
        {
          id: 'q1_rank',
          type: QuestionType.SINGLE_CHOICE,
          title: 'クラスでの成績はどのくらいですか？（自己評価）',
          options: [
            createOption('top20', '上位 20%'),
            createOption('20-50', '20%-50%（中上位）'),
            createOption('50-80', '50%-80%（中下位）'),
            createOption('bottom20', '下位 20%')
          ]
        },
        {
          id: 'q2_freq',
          type: QuestionType.SINGLE_CHOICE,
          title: '生成AIツールをどのくらいの頻度で使用しますか？',
          options: [
            createOption('daily', 'ほぼ毎日'),
            createOption('weekly', '週に数回'),
            createOption('rarely', 'たまに'),
            createOption('tried', '試したが、今は使っていない'),
            createOption('never', '使ったことがない')
          ]
        },
        {
          id: 'q2b_subjects',
          type: QuestionType.MULTI_CHOICE,
          title: 'AIを最もよく使う科目は？（最大3つ）',
          maxSelect: 3,
          options: [
            createOption('math', '数学'),
            createOption('science', '理科（物理/化学/生物）'),
            createOption('history', '社会（歴史/地理）'),
            createOption('lang', '国語/文学'),
            createOption('foreign', '外国語'),
            createOption('cs', '情報/CS'),
            createOption('arts', '芸術/音楽')
          ]
        },
        {
          id: 'q2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: '最もよく使うAIツールは？（最大2つ）',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Notion AI / その他')
          ]
        },
        {
          id: 'q3_behavior',
          type: QuestionType.RATING_MATRIX,
          title: '以下のタスクでAIをどのように使いますか？',
          description: '1=使わない、3=半々、5=完全にAI生成',
          subQuestions: [
            { id: 'mech', text: 'A. 機械的作業（翻訳、暗記）' },
            { id: 'diff', text: 'B. 理解の補助（概念の解説）' },
            { id: 'struct', text: 'C. 構成の最適化（アウトライン、推敲）' },
            { id: 'idea', text: 'D. 創造的インスピレーション（アイデア出し）' },
            { id: 'logic', text: 'E. 論理的推論（数学/科学の解答）' }
          ]
        },
        {
          id: 'q3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'AIへの質問の仕方は？',
          options: [
            createOption('direct', '直接回答型：「答えを教えて」'),
            createOption('socratic', 'ソクラテス式（誘導的）：「ヒントを出し、段階的に導いて」'),
            createOption('mixed', '混合モード：状況による')
          ]
        },
        {
          id: 'q4_essay',
          type: QuestionType.SINGLE_CHOICE,
          title: '「環境」に関するエッセイの課題が出た場合、あなたの習慣に近いのは？',
          options: [
            createOption('proxy', 'A. 完全代行：AIが書き、提出する。'),
            createOption('collage', 'B. コラージュ：AIが生成した部分を継ぎ接ぎする。'),
            createOption('mentor', 'C. メンター：核心は自分で書き、AIが推敲する。'),
            createOption('trad', 'D. 伝統的：AIを使わず、全て自分で書く。')
          ]
        },
        {
          id: 'q5_history',
          type: QuestionType.SINGLE_CHOICE,
          title: '複雑な歴史的出来事をどのように学びますか？',
          options: [
            createOption('disk', 'A. HDDモード：全ての日付と詳細を暗記する。'),
            createOption('index', 'B. 索引モード：論理を理解し、詳細はAIで検索。'),
            createOption('box', 'C. ブラインドボックス：必要な時にAIに聞く。')
          ]
        },
        {
          id: 'q6_opinion_poetry',
          type: QuestionType.LIKERT,
          title: '意見：「AIがあっても、詩や単語の暗記は文化的教養として重要だ。」',
          options: [
            createOption('5', '強く同意する'),
            createOption('4', '同意する'),
            createOption('3', '中立'),
            createOption('2', '同意しない'),
            createOption('1', '全く同意しない')
          ]
        },
        {
          id: 'q7_opinion_questioning',
          type: QuestionType.LIKERT,
          title: '意見：「将来の競争力は『答える力』ではなく『良い質問をする力』にある。」',
          options: [
            createOption('5', '強く同意する'),
            createOption('4', '同意する'),
            createOption('3', '中立'),
            createOption('2', '同意しない'),
            createOption('1', '全く同意しない')
          ]
        },
        {
          id: 'q9_homework',
          type: QuestionType.SINGLE_CHOICE,
          title: '先生が出す宿題は主にどのタイプですか？',
          options: [
            createOption('memory', 'A. 記憶/再生型（AIには容易）'),
            createOption('mixed', 'B. 混合型'),
            createOption('explore', 'C. 探究型（AIは補助のみ）')
          ]
        },
        {
          id: 'q10_awkward',
          type: QuestionType.MULTI_CHOICE,
          title: 'このような状況に遭遇したことはありますか？（複数選択）',
          options: [
            createOption('none', 'なし'),
            createOption('cant_tell', 'AI使用がバレず、高得点をもらった。'),
            createOption('doubt', 'AIで深堀りしたが、先生に怪しまれた。'),
            createOption('exam_fail', 'AIで理解したが、暗記テストで失敗した。')
          ]
        },
        {
          id: 'q11_school_score',
          type: QuestionType.SINGLE_CHOICE,
          title: 'あなたの学校の「AI適応度」は？',
          options: [
            createOption('conservative', '保守派：厳禁。'),
            createOption('ostrich', 'ダチョウ派：無視し、存在しないふり。'),
            createOption('explorer', '探求派：正しい使い方を指導。')
          ]
        },
        {
          id: 'q12_time',
          type: QuestionType.SINGLE_CHOICE,
          title: 'AIによって節約された時間はどこへ？',
          options: [
            createOption('ent', 'A. 娯楽/休息'),
            createOption('more_qs', 'B. さらなる学習'),
            createOption('deep', 'C. 深い学習'),
            createOption('creative', 'D. 創造的活動')
          ]
        },
        {
          id: 'q14_open',
          type: QuestionType.TEXT,
          title: 'AIと試験について、教育政策立案者に一言：',
          description: '（例：持ち込み可の試験にしてください / AIの使い方を教えて）'
        }
      ],
      universityQuestions: [
        {
          id: 'u1_stage',
          type: QuestionType.SINGLE_CHOICE,
          title: '学位は？',
          options: [
            createOption('bachelor', '学部生'),
            createOption('master', '修士課程'),
            createOption('phd', '博士課程')
          ]
        },
        {
          id: 'u2_major',
          type: QuestionType.SINGLE_CHOICE,
          title: '専攻分野は？',
          options: [
            createOption('stem', 'STEM（理系）'),
            createOption('humanities', '人文社会科学'),
            createOption('arts', '芸術・デザイン'),
            createOption('business', 'ビジネス/経営')
          ]
        },
        {
          id: 'u2c_tools',
          type: QuestionType.MULTI_CHOICE,
          title: '最もよく使うAIツールは？（最大2つ）',
          maxSelect: 2,
          options: [
            createOption('chatgpt', 'ChatGPT'),
            createOption('gemini', 'Gemini (Google)'),
            createOption('claude', 'Claude'),
            createOption('copilot', 'Microsoft Copilot'),
            createOption('perplexity', 'Perplexity'),
            createOption('other', 'Notion AI / その他')
          ]
        },
        {
          id: 'u3_usage',
          type: QuestionType.RATING_MATRIX,
          title: '研究やプロジェクトでAIをどう使いますか？',
          description: '1-5で評価',
          subQuestions: [
            { id: 'low', text: '低レベル：フォーマット、文法、基本コード' },
            { id: 'mid', text: '中レベル：論文要約、アルゴリズム解説' },
            { id: 'high', text: '高レベル：実験設計、批判、インスピレーション' }
          ]
        },
        {
          id: 'u3b_method',
          type: QuestionType.SINGLE_CHOICE,
          title: 'AIとの好ましい対話方法は？',
          options: [
            createOption('direct', '結果重視：「コードを書いて」'),
            createOption('socratic', 'プロセス重視（ソクラテス式）：「論理を説明して」'),
            createOption('mixed', '混合モード')
          ]
        },
        {
          id: 'u4_paper',
          type: QuestionType.SINGLE_CHOICE,
          title: '論文への典型的なアプローチは？',
          options: [
            createOption('gen', 'A. 生成依存：AIが大部分を作成。'),
            createOption('coop', 'B. 協働強化：核は自分で書き、AIが最適化。'),
            createOption('trad', 'C. 伝統的：AIなし、ゼロから書く。')
          ]
        },
        {
          id: 'u5_value',
          type: QuestionType.RATING_MATRIX,
          title: 'これらのスキルの価値はどう変化しましたか？',
          description: '1=重要度低下、5=重要度上昇',
          subQuestions: [
            { id: 'store', text: '情報の記憶（事実の暗記）' },
            { id: 'filter', text: '情報の統合と識別（ファクトチェック）' },
            { id: 'ask', text: '独創的な問いを立てる力' }
          ]
        },
        {
          id: 'u6_expert',
          type: QuestionType.LIKERT,
          title: '同意しますか？「専門家とは、最も知識がある人ではなく、AIを最も上手く使う人だ。」',
          options: [
            createOption('strong_agree', '強く同意する'),
            createOption('agree', '同意する'),
            createOption('neutral', '中立'),
            createOption('disagree', '同意しない')
          ]
        },
        {
          id: 'u7_eval',
          type: QuestionType.SINGLE_CHOICE,
          title: '専攻の評価バイアスは？',
          options: [
            createOption('result', '結果重視（AIに攻略されやすい）'),
            createOption('process', 'プロセス重視（AIには困難、例：口頭試問）'),
            createOption('mixed', '混合')
          ]
        },
        {
          id: 'u8_prof',
          type: QuestionType.SINGLE_CHOICE,
          title: '教授のAI使用への反応は？',
          options: [
            createOption('neg', '否定的：不正と見なす。'),
            createOption('unknown', '無関心/気づかない。'),
            createOption('pos', '肯定的：賢い使用を推奨。')
          ]
        },
        {
          id: 'u10_time_uni',
          type: QuestionType.SINGLE_CHOICE,
          title: '節約されたエネルギーはどこへ？',
          options: [
            createOption('anxiety', '不安：代替への恐れ。'),
            createOption('gpa', 'GPA稼ぎ：量は増えたが質は同じ。'),
            createOption('deep', '深い研究：理論や学際的研究。'),
            createOption('startup', 'イノベーション：起業、個人プロジェクト。')
          ]
        },
        {
          id: 'u11_open_uni',
          type: QuestionType.TEXT,
          title: 'AI時代のコースを設計するなら、記憶の代わりに何を評価しますか？',
        }
      ]
    };
  }

  // ----------------------------------------------------------------------
  // CHINESE (中文 - Default/Existing)
  // ----------------------------------------------------------------------
  return {
    ui: {
      title: 'AI 时代学生学习习惯调查',
      subtitle: '去道德化 · 量化错位 · 诊断卸载',
      description: '同学你好！ChatGPT、豆包、Gemini 等生成式 AI 正在改变我们的生活。有人说它是“作弊神器”，有人说它是“第二大脑”。无论你怎么用，我们都想听听你的真实想法。本问卷完全匿名，仅用于学术研究。',
      startBtn: '开始探索',
      backBtn: '返回',
      nextBtn: '下一题',
      submittingBtn: '提交中...',
      lowest: '完全不用 (1)',
      highest: '完全依赖 (5)',
      placeholder: '请输入您的想法...',
      completeTitle: '感谢参与',
      completeText: '您的回答已加密存储。这项研究有助于我们理解未来人机协作的教育形态。',
      returnHome: '返回首页',
      neuralAnalysis: '神经网络分析',
      patternRecognition: '模式识别模块',
      consentTitle: '知情同意',
      consentText: '本问卷的参与完全自愿。您可以随时退出，不会有任何后果。我们不会收集任何个人身份信息（姓名、学校、联系方式、IP等）。所有数据仅用于研究和教育分析，不会单独披露。',
      consentCheckbox: '我已阅读并同意上述条款。'
    },
    initialQuestion: {
      id: 'q0_grade',
      type: QuestionType.SINGLE_CHOICE,
      title: '你目前所在的年级是？',
      options: [
        createOption('middle', '初中'),
        createOption('high', '高中 / 职高'),
        createOption('uni', '大学 / 研究生')
      ]
    },
    middleSchoolQuestions: [
      {
        id: 'q1_rank',
        type: QuestionType.SINGLE_CHOICE,
        title: '在班级中，你的成绩通常处于什么位置？（自我评估）',
        options: [
          createOption('top20', '前 20%（上游）'),
          createOption('20-50', '20%-50%（中上）'),
          createOption('50-80', '50%-80%（中下）'),
          createOption('bottom20', '后 20%（下游）')
        ]
      },
      {
        id: 'q2_freq',
        type: QuestionType.SINGLE_CHOICE,
        title: '你平时使用生成式 AI 工具的频率是？',
        options: [
          createOption('daily', '几乎每天都用'),
          createOption('weekly', '每周用几次'),
          createOption('rarely', '偶尔用一下'),
          createOption('tried', '尝试过，但现在不用了'),
          createOption('never', '从未听说或未使用')
        ]
      },
      {
        id: 'q2b_subjects',
        type: QuestionType.MULTI_CHOICE,
        title: '你在哪些科目中使用 AI 频率最高？（最多选3项）',
        maxSelect: 3,
        options: [
          createOption('math', '数学'),
          createOption('science', '理综 (物理/化学/生物)'),
          createOption('history', '文综 (历史/地理/政治)'),
          createOption('lang', '语文/文学'),
          createOption('foreign', '外语'),
          createOption('cs', '信息技术/编程'),
          createOption('arts', '艺术/音乐')
        ]
      },
      {
        id: 'q2c_tools',
        type: QuestionType.MULTI_CHOICE,
        title: '你最常用的 AI 工具是？（最多选2项）',
        maxSelect: 2,
        options: [
          createOption('chatgpt', 'ChatGPT'),
          createOption('doubao', '豆包 (Doubao)'),
          createOption('kimi', 'Kimi'),
          createOption('ernie', '文心一言 (Ernie Bot)'),
          createOption('gemini', 'Gemini'),
          createOption('other', '其他')
        ]
      },
      {
        id: 'q3_behavior',
        type: QuestionType.RATING_MATRIX,
        title: '在处理以下学习任务时，你通常如何使用 AI？',
        description: '1=完全不用，3=人机各半，5=完全依赖AI生成',
        subQuestions: [
          { id: 'mech', text: 'A. 机械作业 (单词翻译、死记硬背的填空)' },
          { id: 'diff', text: 'B. 难点理解 (解释不懂的物理概念/文言文)' },
          { id: 'struct', text: 'C. 结构优化 (帮我列作文提纲、润色语言)' },
          { id: 'idea', text: 'D. 创意启发 (寻找反驳观点、头脑风暴)' },
          { id: 'logic', text: 'E. 逻辑推演 (直接做数理化大题的解题过程)' }
        ]
      },
      {
        id: 'q3b_method',
        type: QuestionType.SINGLE_CHOICE,
        title: '你更习惯用哪种方式向 AI 提问？',
        options: [
          createOption('direct', '直接索要答案：“直接告诉我这道题选什么”'),
          createOption('socratic', '苏格拉底式/引导式：“给我一些提示，一步步引导我”'),
          createOption('mixed', '混合模式：视情况而定')
        ]
      },
      {
        id: 'q4_essay',
        type: QuestionType.SINGLE_CHOICE,
        title: '假设老师布置了一篇关于“环保”的论文/作文，以下哪种操作最接近你的真实习惯？',
        options: [
          createOption('proxy', 'A. 直接生成：题目发给AI，生成的文章直接交。'),
          createOption('collage', 'B. 拼凑修改：让AI生成几段，我把它们拼起来。'),
          createOption('mentor', 'C. 辅助润色：我自己写核心，AI查资料、润色。'),
          createOption('trad', 'D. 坚持手写：完全不用AI。')
        ]
      },
      {
        id: 'q5_history',
        type: QuestionType.SINGLE_CHOICE,
        title: '面对一个复杂的历史事件，你认为哪种掌握方式在今天更具安全感？',
        options: [
          createOption('disk', 'A. 死记硬背：背下所有细节。'),
          createOption('index', 'B. 理解脉络：懂逻辑，细节用AI查。'),
          createOption('box', 'C. 现用现查：到时候问AI就行。')
        ]
      },
      {
        id: 'q6_opinion_poetry',
        type: QuestionType.LIKERT,
        title: '观点：“有了 AI，花大量时间背诵古诗文和单词依然非常重要。”',
        options: [
          createOption('5', '非常认同'),
          createOption('4', '比较认同'),
          createOption('3', '一般'),
          createOption('2', '不太认同'),
          createOption('1', '完全反对')
        ]
      },
      {
        id: 'q7_opinion_questioning',
        type: QuestionType.LIKERT,
        title: '观点：“未来的核心竞争力不是‘解答问题’，而是‘向 AI 提出好问题’。”',
        options: [
          createOption('5', '非常认同'),
          createOption('4', '比较认同'),
          createOption('3', '一般'),
          createOption('2', '不太认同'),
          createOption('1', '完全反对')
        ]
      },
      {
        id: 'q9_homework',
        type: QuestionType.SINGLE_CHOICE,
        title: '在你的学校，老师布置的作业主要属于哪一类？',
        options: [
          createOption('memory', 'A. 记忆复现型（AI 极易完成）。'),
          createOption('mixed', 'B. 混合型。'),
          createOption('explore', 'C. 开放探究型（AI 只能辅助）。')
        ]
      },
      {
        id: 'q10_awkward',
        type: QuestionType.MULTI_CHOICE,
        title: '你是否遇到过以下尴尬情况？（多选）',
        options: [
          createOption('none', '没有遇到过。'),
          createOption('cant_tell', '老师分不清，只要像标准答案就给高分。'),
          createOption('doubt', '作业有深度，但老师怀疑我。'),
          createOption('exam_fail', '用 AI 学懂了，但考不过死记硬背的同学。')
        ]
      },
      {
        id: 'q11_school_score',
        type: QuestionType.SINGLE_CHOICE,
        title: '你会怎么给学校的“AI 适应度”打分？',
        options: [
          createOption('conservative', '保守派：严禁使用。'),
          createOption('ostrich', '鸵鸟派：假装 AI 不存在。'),
          createOption('explorer', '探索派：教我们正确使用。')
        ]
      },
      {
        id: 'q12_time',
        type: QuestionType.SINGLE_CHOICE,
        title: '节省下来的时间通常去了哪里？',
        options: [
          createOption('ent', 'A. 娱乐/休息。'),
          createOption('more_qs', 'B. 刷题。'),
          createOption('deep', 'C. 深度学习。'),
          createOption('creative', 'D. 创造性活动。')
        ]
      },
      {
        id: 'q14_open',
        type: QuestionType.TEXT,
        title: '对教育政策专家说一句话（关于 AI 和考试）：',
        description: '(例如：请把考试改成开卷吧)'
      }
    ],
    universityQuestions: [
      {
        id: 'u1_stage',
        type: QuestionType.SINGLE_CHOICE,
        title: '你的学历阶段？',
        options: [
          createOption('bachelor', '本科生'),
          createOption('master', '硕士研究生'),
          createOption('phd', '博士研究生')
        ]
      },
      {
        id: 'u2_major',
        type: QuestionType.SINGLE_CHOICE,
        title: '你的学科大类？',
        options: [
          createOption('stem', '理工科 (STEM)'),
          createOption('humanities', '人文社科'),
          createOption('arts', '艺术与设计'),
          createOption('business', '商科/管理')
        ]
      },
      {
        id: 'u3_usage',
        type: QuestionType.RATING_MATRIX,
        title: '你通常将 AI 用于处理哪类环节？',
        description: '1-5分打分',
        subQuestions: [
          { id: 'low', text: '低阶劳务：格式、语法、基础代码' },
          { id: 'mid', text: '中阶辅助：文献总结、算法解释' },
          { id: 'high', text: '高阶思维：实验设计、批判、灵感' }
        ]
      },
      {
        id: 'u3b_method',
        type: QuestionType.SINGLE_CHOICE,
        title: '你更习惯用哪种方式向 AI 提问？',
        options: [
          createOption('direct', '结果导向：“直接给我代码”'),
          createOption('socratic', '过程导向/苏格拉底式：“解释原理，引导推导”'),
          createOption('mixed', '混合模式')
        ]
      },
      {
        id: 'u4_paper',
        type: QuestionType.SINGLE_CHOICE,
        title: '面对论文，你的典型操作是？',
        options: [
          createOption('gen', 'A. 生成式依赖：AI 生成大纲/正文。'),
          createOption('coop', 'B. 增强式协作：我构建框架，AI 优化。'),
          createOption('trad', 'C. 传统式坚持：从零开始。')
        ]
      },
      {
        id: 'u5_value',
        type: QuestionType.RATING_MATRIX,
        title: '以下能力的价值发生了什么变化？',
        description: '1=变低，5=变高',
        subQuestions: [
          { id: 'store', text: '信息储备量 (背诵)' },
          { id: 'filter', text: '信息整合与鉴别力' },
          { id: 'ask', text: '提出原创研究问题的能力' }
        ]
      },
      {
        id: 'u6_expert',
        type: QuestionType.LIKERT,
        title: '认同吗？“未来的专家是‘最擅长调用 AI 的人’，而不是‘知道最多的人’。”',
        options: [
          createOption('strong_agree', '强烈认同'),
          createOption('agree', '比较认同'),
          createOption('neutral', '持保留意见'),
          createOption('disagree', '反对')
        ]
      },
      {
        id: 'u7_eval',
        type: QuestionType.SINGLE_CHOICE,
        title: '你所在专业的考核主要偏向于？',
        options: [
          createOption('result', '结果导向（容易被 AI 攻破）'),
          createOption('process', '过程导向（AI 难以为继）'),
          createOption('mixed', '混合模式')
        ]
      },
      {
        id: 'u8_prof',
        type: QuestionType.SINGLE_CHOICE,
        title: '导师对使用 AI 的反应？',
        options: [
          createOption('neg', '负面：认为是取巧。'),
          createOption('unknown', '无法识别/不关心。'),
          createOption('pos', '正面：鼓励使用。')
        ]
      },
      {
        id: 'u10_time_uni',
        type: QuestionType.SINGLE_CHOICE,
        title: '节省下来的精力用在了哪里？',
        options: [
          createOption('anxiety', '焦虑/迷茫。'),
          createOption('gpa', '内卷/刷绩点。'),
          createOption('deep', '深度钻研。'),
          createOption('startup', '实践创新。')
        ]
      },
      {
        id: 'u11_open_uni',
        type: QuestionType.TEXT,
        title: '如果设计一门“AI 时代的课程”，你会考核什么能力？',
      }
    ]
  };
};