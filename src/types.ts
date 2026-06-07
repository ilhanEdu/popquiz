export type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number;
};

export type AnswerRecord = {
  questionId: number;
  selectedIndex: number; 
  correct: boolean;
  points: number;
};

export type Flashcard = {
  id: number;
  category: string;
  term: string;
  definition: string;
  emojiUrl: string;
  imageUrl: string;
  gradient: string;
};

export type AiPlayer = {
  name: string;
  initials: string;
  color: string;
  textColor: string;
};
