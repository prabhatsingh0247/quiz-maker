export interface Category {
  trivia_categories: Category[];
  id: number;
  name: string;
}

export interface Quiz {
  amount: number;
  category: string;
  difficulty: string;
  type: string;
}

export interface Result {
  response_code: number;
  results: Array<Questions>;
}

export interface Questions {
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: Array<string>;
}

export interface Answers extends Questions {
  options?: Array<Option> | undefined;
  isCorrectAnswer?: boolean | null;
  selected?: string | null;
  ddd?: null;
}

export interface Option {
  label: string;
  value: string | number;
  isChecked: boolean;
  isIncorrectAnswer?: boolean | null;
}
