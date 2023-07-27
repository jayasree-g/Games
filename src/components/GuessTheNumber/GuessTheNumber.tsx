import React, { useState } from "react";
import wizard from "./wizard.png";
import Close from "../../images/close";

export default function GuessTheNumber() {
  const [status, setStatus] = useState("Make a Guess!");
  const [guess, setGuess] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [range, setRange] = useState({ from: 1, to: 10 });

  const startGame = () => {
    fetch("http://localhost:5000/start_game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ start: range.from, end: range.to }),
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
      style={{
        backgroundColor: `${modalOpen ? "#A9A9A9" : "#dfd9e2"}`,
      }}
    >
      {/* #edd6f8 */}

      <div
        className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-6 shadow-md ${
          modalOpen ? "block" : "hidden"
        }`}
        style={{
          width: "400px",
          maxHeight: "80%",
          overflow: "auto",
          marginLeft: "25%",
          backgroundColor: "#dfd9e2",
        }}
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setModalOpen(false)}
        >
          <Close />
        </button>
        <div>
          <h2 className="text-xl font-semibold mt-4 mb-4">
            Choose Guessing Range
          </h2>
          <div className="mb-4 flex flex-col gap-4">
            <div className=" flex flex-col gap-2">
              Choose Starting Number:
              <input
                value={range.from}
                type="number"
                onChange={(e) =>
                  setRange({ ...range, from: parseInt(e.target.value) })
                }
                placeholder="1"
                className="border border-gray-300 px-2 py-1"
              />
            </div>
            <div>
              Choose Ending Number:
              <input
                type="number"
                value={range.to}
                onChange={(e) =>
                  setRange({ ...range, to: parseInt(e.target.value) })
                }
                placeholder="10"
                className="border border-gray-300 px-2 py-1"
              />
            </div>
          </div>
          <button
            onClick={() => {
              startGame();
              setModalOpen(false);
            }}
            className="text-xl font-semibold border p-2"
            style={{
              marginTop: "40px",
              borderWidth: "2px",
              borderColor: "#FFFEFC",
            }}
          >
            Let's Go
          </button>
        </div>
      </div>

      <div className=" font-semibold text-2xl" style={{ marginTop: "40px" }}>
        Welcome to the GuessTheNumber Game!
      </div>

      {gameStarted ? (
        <div
          className=" flex flex-col gap-6 border p-6 items-center"
          style={{ borderColor: "#7d5ba6", margin: "40px" }}
        >
          <div className=" font-semibold text-xl">
            I am thinking of a number between {range.from}-{range.to}. Can you
            guess it?
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
            onClick={() => setModalOpen(true)}
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
