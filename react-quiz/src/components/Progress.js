function Progress({ index, maxQuestions, points, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={maxQuestions}
        value={index + Number(answer !== null)}></progress>
      <p>
        Question <strong>{index + 1}</strong> / {maxQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
