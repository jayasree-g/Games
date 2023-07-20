import React from "react";
import { GameActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import snakebg from "./images/snake_bg.png";

export default function SnakeGame() {
  const dispatch = useDispatch();
  const startGame = () => {
    fetch("http://localhost:5000/start-snake", { method: "POST" })
      .then((response) => {
        if (response.ok) {
          console.log("Game started");
        } else {
          console.error("Failed to start the game.");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <div
      className=" flex flex-col items-center h-screen relative"
      style={{
        backgroundColor: "#7bcf84",
      }}
    >
      <div className=" font-semibold text-2xl" style={{ marginTop: "40px" }}>
        Welcome to the Snake Game!
      </div>
      <div className=" font-semibold text-xl" style={{ marginTop: "40px" }}>
        Rules for the Snake Game:
      </div>
      <div className=" flex flex-col gap-3 mt-4">
        <div className=" font-semibold">
          {"->"} Click on the "Start" button to begin the adventure! A pop-up
          window will take you to the gaming realm.
        </div>
        <div className=" font-semibold">
          {"->"} Control the snake's movement with arrow keys or swipe gestures.
          Navigate it wisely to avoid collisions with walls and its own tail.
        </div>
        <div className=" font-semibold">
          {"->"} As you progress, the snake's speed will increase, making the
          challenge more thrilling. Stay sharp and adapt to the snake's newfound
          agility.
        </div>
        <div className=" font-semibold">
          {"->"} Remember, touching the corners of the game area is not allowed!
          Guide the snake skillfully to avoid any encounters with the
          boundaries.
        </div>
      </div>
      <button
        onClick={startGame}
        className="text-xl font-semibold border p-2"
        style={{ marginTop: "20px" }}
      >
        Start Game
      </button>
      <div className=" absolute bottom-0 left-0">
        <img src={snakebg} alt="Snake Background" />
      </div>
    </div>
  );
}
