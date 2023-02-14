import React from "react";

const Question = (props) => {
  const correctAnswerHandler = (option) => {
    if (option === "A") {
      props.messageHandler("Your Answer is correct");
      props.incrementScore();
    } else {
      props.messageHandler("Your Answer is wrong");
    }
  };

  return (
    <div className="question__box" key={props.id}>
      <h3>{props.question.question}</h3>
      <div className="question__answers">
        <button
          className="question__button"
          onClick={() => correctAnswerHandler("A")}
        >
          A. {props.question.correct_answer}
        </button>
        <button
          className="question__button"
          onClick={() => correctAnswerHandler("B")}
        >
          B. {props.question.incorrect_answers[0]}
        </button>
        <button
          className="question__button"
          onClick={() => correctAnswerHandler("C")}
        >
          C. {props.question.incorrect_answers[1]}
        </button>
        <button
          className="question__button"
          onClick={() => correctAnswerHandler("D")}
        >
          D. {props.question.incorrect_answers[2]}
        </button>
      </div>
    </div>
  );
};

export default Question;
