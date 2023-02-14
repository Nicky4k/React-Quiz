import { useEffect, useState } from "react";
import "./App.css";
import Screen1 from "./components/UI/Screen1";
import Screen2 from "./components/UI/Screen2";
import Screen3 from "./components/UI/Screen3";

function App() {
  const [questions, setQuestions] = useState([]);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [score, setScore] = useState(0);

  const startQuizHandler = () => {
    setStartQuiz(true);
  };

  const endQuizHandler = (score) => {
    setScore(score);
    setEndQuiz(true);
  };

  const resetGamehandler = () => {
    setEndQuiz(false);
    setStartQuiz(false);
  };

  useEffect(() => {
    const fetchQuizData = async function () {
      const url = `https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple`;
      const res = await fetch(url);
      const quizData = await res.json();
      if (quizData) {
        // console.log(quizData.results);
        setQuestions(quizData.results);
      }
    };
    fetchQuizData();
  }, []);

  return (
    <div className="App">
      {!startQuiz && !endQuiz && (
        <Screen1 startQuizHandler={startQuizHandler} />
      )}
      {startQuiz && !endQuiz && (
        <Screen2 endQuizHandler={endQuizHandler} questions={questions} />
      )}
      {endQuiz && <Screen3 score={score} resetGamehandler={resetGamehandler} />}
    </div>
  );
}

export default App;
