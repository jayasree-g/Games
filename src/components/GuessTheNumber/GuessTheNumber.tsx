import React, { useState } from "react";
import wizard from "./wizard.png";

export default function GuessTheNumber() {
  const [status, setStatus] = useState("Make a Guess!");
  const [guess, setGuess] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    fetch("http://localhost:5000/start_game", {
      method: "POST",
    })
      .then(() => {
        setGameStarted(true);
      })
      .catch((error) => {
        console.error("Error starting the game", error);
      });
  };

  const checkGuess = () => {
    setStatus("");
    fetch("http://localhost:5000/check_guess", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ guess: parseInt(guess) }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("Error checking the guess", error);
      });
  };

  return (
    <div
      className=" flex flex-col items-center h-screen relative"
      style={{ backgroundColor: "#dfd9e2" }}
    >
      {/* #edd6f8 */}
      <div className=" font-semibold text-2xl" style={{ marginTop: "40px" }}>
        Welcome to the GuessTheNumber Game!
      </div>

      {gameStarted ? (
        <div
          className=" flex flex-col gap-6 border p-6 items-center"
          style={{ borderColor: "#7d5ba6", margin: "40px" }}
        >
          <div className=" font-semibold text-xl">
            I am thinking of a number between 1-100. Can you guess it?
          </div>
          <div className=" font-semibold">{status}</div>
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border"
          />
          <button
            onClick={checkGuess}
            className="text-xl font-semibold border p-2"
            style={{
              borderWidth: "2px",
              borderColor: "#FFFEFC",
            }}
          >
            Guess
          </button>
        </div>
      ) : (
        <>
          <div className="font-semibold text-xl" style={{ margin: "40px" }}>
            Rules for Guess The Number Game:
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <div className="font-semibold">
              {"->"} Click on the "Start Game" button to start the Guess The
              Number challenge! Get ready to test your guessing skills and
              intuition.
            </div>
            <div className="font-semibold">
              {"->"} You will be given a specific number range within which the
              secret number is hidden. Use your logic and deduction to guess the
              correct number.
            </div>
            <div className="font-semibold">
              {"->"} Make your first guess! The game will guide you with hints
              whether your guess is too high or too low.
            </div>
            <div className="font-semibold">
              {"->"} Continue making guesses until you find the secret number.
              Can you guess it correctly with the fewest attempts possible?
            </div>
            <div className="font-semibold">
              {"->"} Challenge yourself and aim for the best score! Sharpen your
              guessing prowess and enjoy the thrill of revealing the mystery
              number.
            </div>
          </div>
          <button
            onClick={startGame}
            className="text-xl font-semibold border p-2"
            style={{
              marginTop: "40px",
              borderWidth: "2px",
              borderColor: "#FFFEFC",
            }}
          >
            Start Game
          </button>
        </>
      )}
      <img
        alt="Guess The Number"
        src={wizard}
        className=" absolute bottom-0 left-0"
      />
    </div>
  );
}
