import React from "react";

const Screen3 = (props) => {
  //   console.log(props);
  return (
    <div>
      <h2>You have answered {props.score} out of 10 questions correctly</h2>
      <button onClick={props.resetGamehandler}>RETAKE QUIZ</button>
    </div>
  );
};

export default Screen3;
