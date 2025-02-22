import { language } from "./lang";
import React from "react";
import clsx from "clsx";
import { getFarewellText, getWords } from "./utils";
import ReactConfetti from "react-confetti";

export default function App() {
  const [guessedLetters, setGuessedLetters] = React.useState([]);
  const [currentWord, setCurrentWord] = React.useState(() => getWords());
  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetter) =>
      prevLetter.includes(letter) ? prevLetter : [...prevLetter, letter]
    );
  }

  function newGame() {
    setCurrentWord(getWords());
    setGuessedLetters([]);
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;

  const isGameLost = wrongGuessCount >= 8;
  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = isGameLost || isGameWon;

  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const keyBoard = alphabet.split("").map((alpha) => {
    const isGuessed = guessedLetters.includes(alpha);
    const isCorrect = isGuessed && currentWord.includes(alpha);
    const isWrong = isGuessed && !currentWord.includes(alpha);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        onClick={() => addGuessedLetter(alpha)}
        disabled={isGameOver}
        aria-disabled={guessedLetters.includes(alpha)}
        key={alpha}
      >
        {alpha.toUpperCase()}
      </button>
    );
  });

  const letterEle = currentWord.split("").map((letter, index) => {
    const reveal = isGameLost || guessedLetters.includes(letter);
    const letterClassName=clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed"
    )
    return <span key={index} className={letterClassName}>{reveal ? letter.toUpperCase() : ""}</span>;
  });

  const languageElements = language.map((lang, index) => {
    const isLangLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color,
    };
    const className = clsx("lang", isLangLost && "lost");
    return (
      <span className={className} style={styles} key={lang.name}>
        {lang.name}
      </span>
    );
  });

  return (
    <main>{
      isGameWon && <ReactConfetti 
      recycle={false}
      numberOfPieces={1000}/>
      }
      <header>
        <h1>Assembly:Endgame</h1>
        <p className="p1">
          Guess the word within 8 attempts to keep the programming world safe
          from Assembly
        </p>
      </header>
      <section>
        {isLastGuessIncorrect && !isGameOver && (
          <p className="farewell">
            {getFarewellText(language[wrongGuessCount - 1].name)}
          </p>
        )}
      </section>
      {isGameWon && (
        <p className="p2">
          You Win! <br />
          Well done! 🎉🎉
        </p>
      )}
      {isGameLost && (
        <p className="p3">
          Game Over! <br />
          You lose! Better start learning Assembly 🙂
        </p>
      )}
      <section className="langs">{languageElements}</section>
      <section className="word">{letterEle}</section>
      <section className="buttons">{keyBoard}</section>
      {isGameOver && (
        <div className="div">
          <button onClick={newGame} className="game">
            New Game
          </button>
        </div>
      )}
    </main>
  );
}
