import React from "react";

export const Options = ({ question, dispatch, answer }) => {
  const answered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            answered ? (i === question.correctOption ? "correct" : "wrong") : ""
          }`}
          key={option}
          disabled={answered}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
