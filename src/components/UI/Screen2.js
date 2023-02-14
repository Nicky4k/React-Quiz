import React, { useEffect, useState } from "react";
import Question from "./Question";

const Screen2 = (props) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (questionNumber === 9) {
      //   console.log("end");
      props.endQuizHandler(score);
    }
  }, [questionNumber, props, score]);

  const incrementScore = () => {
    setScore((score) => score + 1);
  };

  const nextQuestionHandler = () => {
    setAnswered(false);
    setQuestionNumber((questionNumber) => questionNumber + 1);
  };

  const messageHandler = (msg) => {
    setAnswered(true);
    setMessage(msg);
  };

  //   console.log(props.questions);

  return (
    <div>
      <Question
        messageHandler={messageHandler}
        id={questionNumber}
        question={props.questions[questionNumber]}
        incrementScore={incrementScore}
      />
      {answered && <p>{message}</p>}
      <button onClick={nextQuestionHandler}>NEXT</button>
    </div>
  );
};

export default Screen2;
