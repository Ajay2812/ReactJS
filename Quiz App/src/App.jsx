import { useState } from "react";

export default function App() {
  const questions = [
    {
      question: "Which is largest animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue Whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Giraffe", correct: false },
      ],
    },
    {
      question: "Which is smallest country in the world?",
      answers: [
        { text: "Vatican City", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "Ice Land", correct: false },
      ],
    },
    {
      question: "Which is largest desert in the world?",
      answers: [
        { text: "Kalahari", correct: false },
        { text: "Gobi", correct: false },
        { text: "Sahara", correct: true },
        { text: "Thar", correct: false },
      ],
    },
    {
      question: "Which is largest continent in the world?",
      answers: [
        { text: "Africa", correct: false },
        { text: "Antartica", correct: false },
        { text: "Australia", correct: false },
        { text: "Asia", correct: true },
      ],
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAns, setSelectedAns] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAns(null);
      setIsAnswered(false);
    } else {
      setShowScore(true);
    }
  }
  function reStart() {
    setCurrentIndex(0);
    setSelectedAns(null);
    setScore(0);
    setShowScore(false);
    setIsAnswered(false);
  }
  function handleClick(answer, index) {
    if (isAnswered) {
      return;
    }

    setSelectedAns(index);
    setIsAnswered(true);
    if (answer.correct) {
      setScore((prev) => prev + 1);
    }
  }
  return (
    <div className="container">
      <h1>Simple Quiz</h1>
      <div className="quiz">
        {showScore ? (
          <div>
            <h2>
              You have Scored {score} out of {questions.length}
            </h2>
            <button onClick={reStart} className="next-btn">
              Play Again
            </button>
          </div>
        ) : (
          <>
            <h2>{questions[currentIndex].question}</h2>

            <div id="answers">
              {questions[currentIndex].answers.map((ans, index) => {
                const isCorrect = ans.correct;
                const isSelected = selectedAns === index;
                const reveal =
                  isAnswered &&
                  isCorrect &&
                  selectedAns !== null &&
                  ans.correct;
                return (
                  <button
                    onClick={() => handleClick(ans, index)}
                    className={`btn
                 ${
                   isSelected
                     ? isCorrect
                       ? "correct"
                       : "incorrect"
                     : reveal
                     ? "correct"
                     : ""
                 }`}
                    disabled={isAnswered}
                  >
                    {ans.text}
                  </button>
                );
              })}
            </div>
            {isAnswered ? (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="next-btn"
              >
                {currentIndex + 1 === questions.length ? "Show Score" : "Next"}
              </button>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
}
