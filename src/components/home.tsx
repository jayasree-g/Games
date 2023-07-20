import React from "react";
import { BiSearch } from "react-icons/bi";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center p-16 h-full text-white"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/teenager-boy-bedroom-interior-computers-desk_107791-2738.jpg?w=1380&t=st=1689785887~exp=1689786487~hmac=2017ac11ebb2cefa0219cec1d9ec6dfd758628eed5635d1f03d3806ad3675f38)",
      }}
    >
      <div className="font-bold" style={{ fontSize: "50px" }}>
        Welcome to Gaming Site!
      </div>
      <div
        className="text-lg font-semibold bg-white text-black p-3 flex rounded-lg gap-3"
        style={{ width: "70vw", marginTop: "30px" }}
      >
        <div className=" mt-1">
          <BiSearch />
        </div>
        Play Games
      </div>
      <div
        className="text-lg font-semibold bg-white text-black p-3 flex rounded-lg gap-3"
        style={{ width: "70vw", marginTop: "30px" }}
      >
        Introducing a collection of classic games. Have fun playing games right
        here on our platform.
      </div>
      <div
        className="text-lg font-semibold bg-white text-black p-3 flex rounded-lg gap-3"
        style={{ width: "70vw", marginTop: "10px" }}
      >
        Challenge your friends and create gaming memories
      </div>
      <div
        className="text-lg font-semibold bg-white text-black p-3 flex rounded-lg gap-3 mb-6"
        style={{ width: "70vw", marginTop: "10px" }}
      >
        Step into a world of imagination and nostalgia.
      </div>
      <div className=" flex gap-6 mb-6">
        <Card
          className=" bg-white text-black p-4 font-bold cursor-pointer"
          style={{ width: "350px" }}
          onClick={() => {
            navigate("/snake_game");
          }}
        >
          <Card.Body>
            <Card.Title>Snake Game</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Classic Snake Game
            </Card.Subtitle>
            <Card.Text className=" font-semibold">
              Experience the nostalgia of the classic Snake game! Control the
              snake and eat the food. Challenge yourself to achieve the highest
              score while avoiding collisions with the walls. Get ready for
              hours of addictive gameplay and see if you can become the ultimate
              Snake master!
            </Card.Text>
            <button className="mt-4">Play</button>
          </Card.Body>
        </Card>
        <Card
          className="bg-white text-black p-4 font-bold cursor-pointer"
          style={{ width: "350px" }}
          onClick={() => {
            navigate("/guess_the_number");
          }}
        >
          <Card.Body>
            <Card.Title>Guess The Number</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Test Your Guessing Skills
            </Card.Subtitle>
            <Card.Text className="font-semibold">
              Get ready for an exciting challenge in the Guess The Number game!
              Sharpen your guessing skills as you attempt to find the mystery
              number within the given range. Use your intuition and logic to
              make the right guesses and win the game!
            </Card.Text>
            <button className="mt-4">Play</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Home;
