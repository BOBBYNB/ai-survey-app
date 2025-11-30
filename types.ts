export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTI_CHOICE = 'MULTI_CHOICE',
  RATING_MATRIX = 'RATING_MATRIX',
  LIKERT = 'LIKERT',
  TEXT = 'TEXT',
  INFO = 'INFO'
}

export interface Option {
  id: string;
  label: string;
  value: string;
}

export interface SubQuestion {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  title: string;
  description?: string;
  options?: Option[];
  subQuestions?: SubQuestion[];
  minSelect?: number;
  maxSelect?: number;
}

export interface SurveyResponse {
  [questionId: string]: string | string[] | { [subId: string]: number };
}

export interface SurveyData {
  id: string;
  timestamp: number;
  answers: SurveyResponse;
  path: 'middle_school' | 'high_school' | 'university' | 'teacher';
}

export type Language = 'en' | 'es' | 'de' | 'ja' | 'zh';

export interface UIStrings {
  title: string;
  subtitle: string;
  description: string;
  startBtn: string;
  backBtn: string;
  nextBtn: string;
  submittingBtn: string;
  lowest: string;
  highest: string;
  placeholder: string;
  completeTitle: string;
  completeText: string;
  returnHome: string;
  neuralAnalysis: string;
  patternRecognition: string;
  consentTitle: string;
  consentText: string;
  consentCheckbox: string;
}

export interface SurveyContent {
  ui: UIStrings;
  initialQuestion: Question;
  middleSchoolQuestions: Question[];
  universityQuestions: Question[];
  teacherQuestions: Question[];
}