import { Question, QuestionType } from './types';

export const introText = {
  title: 'Student Learning Habits in the AI Era',
  subtitle: 'De-moralization · Quantifying Mismatch · Diagnosing Offloading',
  description: 'Hello! Generative AI like ChatGPT is changing our lives. Some call it a "cheating tool", others a "second brain". However you use it, we want your honest thoughts. This survey is anonymous and for academic research only.'
};

// Initial Question to determine path
export const initialQuestion: Question = {
  id: 'q0_grade',
  type: QuestionType.SINGLE_CHOICE,
  title: 'What is your current grade level?',
  options: [
    { id: 'middle', label: 'Middle School', value: 'middle' },
    { id: 'high', label: 'High School / Vocational', value: 'high' },
    { id: 'uni', label: 'University / Graduate School', value: 'uni' }
  ]
};

// Middle/High School Path
export const middleSchoolQuestions: Question[] = [
  {
    id: 'q1_rank',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Where does your academic performance usually rank in your class?',
    options: [
      { id: 'top20', label: 'Top 20%', value: 'top20' },
      { id: '20-50', label: '20%-50%', value: '20-50' },
      { id: '50-80', label: '50%-80%', value: '50-80' },
      { id: 'bottom20', label: 'Bottom 20%', value: 'bottom20' }
    ]
  },
  {
    id: 'q2_freq',
    type: QuestionType.SINGLE_CHOICE,
    title: 'How often do you use generative AI tools?',
    options: [
      { id: 'daily', label: 'Almost every day', value: 'daily' },
      { id: 'weekly', label: 'Several times a week', value: 'weekly' },
      { id: 'rarely', label: 'Occasionally', value: 'rarely' },
      { id: 'tried', label: 'Tried, but stopped', value: 'tried' },
      { id: 'never', label: 'Never used', value: 'never' }
    ]
  },
  {
    id: 'q3_behavior',
    type: QuestionType.RATING_MATRIX,
    title: 'How do you use AI for the following tasks?',
    description: '1=Not at all, 3=Half-half, 5=Fully AI generated',
    subQuestions: [
      { id: 'mech', text: 'A. Mechanical Tasks (Translation, rote filling)' },
      { id: 'diff', text: 'B. Understanding Difficulties (Concepts, ancient texts)' },
      { id: 'struct', text: 'C. Structure Optimization (Outlining, polishing)' },
      { id: 'idea', text: 'D. Creative Inspiration (Brainstorming)' },
      { id: 'logic', text: 'E. Logic Deduction (Solving math/science problems)' }
    ]
  },
  {
    id: 'q4_essay',
    type: QuestionType.SINGLE_CHOICE,
    title: 'For an essay on "Environment", which habit is closest to yours?',
    options: [
      { id: 'proxy', label: 'A. Full Proxy: Generate and submit.', value: 'proxy' },
      { id: 'collage', label: 'B. Collage: Generate parts and assemble.', value: 'collage' },
      { id: 'mentor', label: 'C. Mentor: I write core points, AI adds data/checks.', value: 'mentor' },
      { id: 'trad', label: 'D. Traditional: No AI used.', value: 'trad' }
    ]
  },
  {
    id: 'q5_history',
    type: QuestionType.SINGLE_CHOICE,
    title: 'How do you prefer to master a complex historical event today?',
    options: [
      { id: 'disk', label: 'A. Hard Drive: Memorize everything.', value: 'disk' },
      { id: 'index', label: 'B. Index: Know the logic, search for details.', value: 'index' },
      { id: 'box', label: 'C. Blind Box: Just ask AI when needed.', value: 'box' }
    ]
  },
  {
    id: 'q6_opinion_poetry',
    type: QuestionType.LIKERT,
    title: 'Opinion: Memorizing poetry/vocab is still crucial with AI.',
    options: [
      { id: '5', label: 'Strongly Agree', value: '5' },
      { id: '4', label: 'Agree', value: '4' },
      { id: '3', label: 'Neutral', value: '3' },
      { id: '2', label: 'Disagree', value: '2' },
      { id: '1', label: 'Strongly Disagree', value: '1' }
    ]
  },
  {
    id: 'q7_opinion_questioning',
    type: QuestionType.LIKERT,
    title: 'Opinion: Future competitiveness is about asking AI good questions, not answering them.',
    options: [
      { id: '5', label: 'Strongly Agree', value: '5' },
      { id: '4', label: 'Agree', value: '4' },
      { id: '3', label: 'Neutral', value: '3' },
      { id: '2', label: 'Disagree', value: '2' },
      { id: '1', label: 'Strongly Disagree', value: '1' }
    ]
  },
  {
    id: 'q9_homework',
    type: QuestionType.SINGLE_CHOICE,
    title: 'What type of homework do teachers mostly assign?',
    options: [
      { id: 'memory', label: 'A. Memory Recall: Rote memorization.', value: 'memory' },
      { id: 'mixed', label: 'B. Mixed.', value: 'mixed' },
      { id: 'explore', label: 'C. Open Inquiry: Real-life projects, debates.', value: 'explore' }
    ]
  },
  {
    id: 'q10_awkward',
    type: QuestionType.MULTI_CHOICE,
    title: 'Have you encountered these awkward situations with AI homework? (Multi-select)',
    options: [
      { id: 'none', label: 'None.', value: 'none' },
      { id: 'cant_tell', label: 'Teacher cant tell difference, gives high score for AI look.', value: 'cant_tell' },
      { id: 'doubt', label: 'Teacher suspected my high-quality AI-assisted work.', value: 'doubt' },
      { id: 'exam_fail', label: 'Understood via AI, but failed rote memory exams.', value: 'exam_fail' }
    ]
  },
  {
    id: 'q11_school_score',
    type: QuestionType.SINGLE_CHOICE,
    title: 'How would you rate your school\'s "AI Adaptability"?',
    options: [
      { id: 'conservative', label: 'Conservative: Strictly prohibited.', value: 'conservative' },
      { id: 'ostrich', label: 'Ostrich: Ignores AI existence.', value: 'ostrich' },
      { id: 'explorer', label: 'Explorer: Teaches usage, allows AI homework.', value: 'explorer' }
    ]
  },
  {
    id: 'q12_time',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Where does the time saved by AI usually go?',
    options: [
      { id: 'ent', label: 'A. Entertainment/Rest.', value: 'ent' },
      { id: 'more_qs', label: 'B. More drills.', value: 'more_qs' },
      { id: 'deep', label: 'C. Deep learning.', value: 'deep' },
      { id: 'creative', label: 'D. Creative activities.', value: 'creative' }
    ]
  },
  {
    id: 'q14_open',
    type: QuestionType.TEXT,
    title: 'If you could say one sentence to education policy makers about AI and exams, what would it be?',
  }
];

// University Path
export const universityQuestions: Question[] = [
  {
    id: 'u1_stage',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Academic Stage?',
    options: [
      { id: 'bachelor', label: 'Bachelor', value: 'bachelor' },
      { id: 'master', label: 'Master', value: 'master' },
      { id: 'phd', label: 'PhD', value: 'phd' }
    ]
  },
  {
    id: 'u2_major',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Major Discipline?',
    options: [
      { id: 'stem', label: 'STEM', value: 'stem' },
      { id: 'humanities', label: 'Humanities & Social Sciences', value: 'humanities' },
      { id: 'arts', label: 'Arts & Design', value: 'arts' },
      { id: 'business', label: 'Business/Management', value: 'business' }
    ]
  },
  {
    id: 'u3_usage',
    type: QuestionType.RATING_MATRIX,
    title: 'How do you use AI in research/projects?',
    description: '1-5 Scale',
    subQuestions: [
      { id: 'low', text: 'Low-level: Formatting, grammar, basic code' },
      { id: 'mid', text: 'Mid-level: Summarizing, explaining, translating' },
      { id: 'high', text: 'High-level: Design, critical thinking, inspiration' }
    ]
  },
  {
    id: 'u4_paper',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Typical approach to a term paper?',
    options: [
      { id: 'gen', label: 'A. Generative Dependency.', value: 'gen' },
      { id: 'coop', label: 'B. Enhanced Collaboration.', value: 'coop' },
      { id: 'trad', label: 'C. Traditional Persistence.', value: 'trad' }
    ]
  },
  {
    id: 'u5_value',
    type: QuestionType.RATING_MATRIX,
    title: 'How has the value of these skills changed?',
    description: '1=Less important, 3=Same, 5=More important',
    subQuestions: [
      { id: 'store', text: 'Info Storage (Memorization)' },
      { id: 'filter', text: 'Info Synthesis & Discrimination' },
      { id: 'ask', text: 'Original Research Questioning' }
    ]
  },
  {
    id: 'u6_expert',
    type: QuestionType.LIKERT,
    title: 'Agree? Future experts are those best at using AI, not knowing most facts.',
    options: [
      { id: 'strong_agree', label: 'Strongly Agree', value: 'strong_agree' },
      { id: 'agree', label: 'Agree', value: 'agree' },
      { id: 'neutral', label: 'Neutral', value: 'neutral' },
      { id: 'disagree', label: 'Disagree', value: 'disagree' }
    ]
  },
  {
    id: 'u7_eval',
    type: QuestionType.SINGLE_CHOICE,
    title: 'What is your major\'s assessment bias?',
    options: [
      { id: 'result', label: 'Result-oriented.', value: 'result' },
      { id: 'process', label: 'Process-oriented.', value: 'process' },
      { id: 'mixed', label: 'Mixed.', value: 'mixed' }
    ]
  },
  {
    id: 'u8_prof',
    type: QuestionType.SINGLE_CHOICE,
    title: 'If your professor finds you used AI heavily, their reaction?',
    options: [
      { id: 'neg', label: 'Negative: Academic misconduct.', value: 'neg' },
      { id: 'unknown', label: 'Unaware: Doesn\'t care/notice.', value: 'unknown' },
      { id: 'pos', label: 'Positive: Evaluates usage quality.', value: 'pos' }
    ]
  },
  {
    id: 'u10_time_uni',
    type: QuestionType.SINGLE_CHOICE,
    title: 'Where does your saved time go?',
    options: [
      { id: 'anxiety', label: 'Anxiety/Lost.', value: 'anxiety' },
      { id: 'gpa', label: 'GPA Grinding.', value: 'gpa' },
      { id: 'deep', label: 'Deep Dive.', value: 'deep' },
      { id: 'startup', label: 'Innovation/Startup.', value: 'startup' }
    ]
  },
  {
    id: 'u11_open_uni',
    type: QuestionType.TEXT,
    title: 'If you designed a course for the AI era, what would you assess instead of memory?',
  }
];