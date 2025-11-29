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
  path: 'middle_school' | 'university';
}