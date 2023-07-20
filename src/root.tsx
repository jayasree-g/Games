import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import home from "./components/home";
import SnakeGame from "./components/snake/SnakeGame";
import GuessTheNumber from "./components/GuessTheNumber/GuessTheNumber";

function root() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={home} />
        <Route path="/snake_game" Component={SnakeGame} />
        <Route path="/guess_the_number" Component={GuessTheNumber} />
      </Routes>
    </Router>
  );
}

export default root;
