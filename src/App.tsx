import { useState } from 'react';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Flashcards from './components/Flashcards';

import { ALL_QUESTIONS } from './data';
import { shuffleArray } from './utils';
import { AnswerRecord } from './types';

const QUESTIONS_PER_ROUND = 15;

type Screen = "home" | "welcome" | "quiz" | "results" | "flashcards";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [username, setUsername] = useState("");
  
  const [sessionQuestions, setSessionQuestions] = useState<any[]>([]);

  // Results State
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [maxStreak, setMaxStreak] = useState(0);

  const startQuiz = (name: string) => {
    setUsername(name);
    // Picks QUESTIONS_PER_ROUND random questions
    const shuffled = shuffleArray(ALL_QUESTIONS).slice(0, QUESTIONS_PER_ROUND);
    setSessionQuestions(shuffled);
    setScreen("quiz");
  };

  const handleFinish = (
    finalScore: number,
    finalCorrect: number,
    finalWrong: number,
    finalAnswers: AnswerRecord[],
    finalMaxStreak: number
  ) => {
    setScore(finalScore);
    setCorrectCount(finalCorrect);
    setWrongCount(finalWrong);
    setAnswers(finalAnswers);
    setMaxStreak(finalMaxStreak);
    setScreen("results");
  };

  const handlePlayAgain = () => {
    setScreen("home");
  };

  return (
    <div className="min-h-screen w-full flex flex-col pt-12 pb-16 px-4 md:px-8 relative overflow-hidden">
      {screen === "home" && (
        <Home onSelect={(mode) => setScreen(mode === "quiz" ? "welcome" : "flashcards")} />
      )}
      {screen === "welcome" && (
        <Welcome onStart={startQuiz} onBack={() => setScreen("home")} />
      )}
      {screen === "flashcards" && (
        <Flashcards onBack={() => setScreen("home")} />
      )}
      {screen === "quiz" && (
        <Quiz 
          questions={sessionQuestions}
          onFinish={handleFinish} 
        />
      )}
      {screen === "results" && (
        <Results 
          score={score}
          correctCount={correctCount}
          wrongCount={wrongCount}
          maxStreak={maxStreak}
          answers={answers}
          totalQuestions={sessionQuestions.length}
          username={username}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}
