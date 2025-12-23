function Progress({ numQuestions, index, answer, points, maxPossiblePoints }) {
  return (
    <div className="progress">
      <progress max={numQuestions} value={index + (answer !== null)} />
      <p>
        Question <strong>{index + 1} </strong>/ {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </div>
  );
}

export default Progress;
