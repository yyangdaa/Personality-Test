import React, { useState, useEffect } from 'react';
import determineResult from './logic/resultGeneration';

import Home from './components/Home/Home';
import Question1 from './components/Questions/Q1/q1';
import Question2 from './components/Questions/Q2/q2';
import Question3 from './components/Questions/Q3/q3';
import Question4 from './components/Questions/Q4/q4';
import Question5 from './components/Questions/Q5/q5';
import Question6 from './components/Questions/Q6/q6';
import Question7 from './components/Questions/Q7/q7';
import Question8 from './components/Questions/Q8/q8';
import Question9 from './components/Questions/Q9/q9';

import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [resultPage, setResultPage] = useState(null);

  const goToQuestions = () => {
    setCurrentQuestionIndex(1);
  };

  const handleAnswer = (questionNumber, answer) => {
    
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionNumber]: answer
    }));

    if (currentQuestionIndex > 9) { 
      
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex > 9) {
      const determinedResult = determineResult(answers);
      setResultPage(determinedResult);
    }
  }, [currentQuestionIndex, answers]);

  const renderContent = () => {
    if (currentQuestionIndex === 0) {
      return <Home goToNextQuestion={goToQuestions} />;
    } else if (currentQuestionIndex >= 1 && currentQuestionIndex <= 9) {
      const QuestionComponents = [Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9];
      const CurrentQuestion = QuestionComponents[currentQuestionIndex - 1];
      return <CurrentQuestion goToNextQuestion={(answer) => handleAnswer(currentQuestionIndex, answer)} />;
    } else {
      return resultPage; 
    }
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;

