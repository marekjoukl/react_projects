function Option({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            answer !== null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
