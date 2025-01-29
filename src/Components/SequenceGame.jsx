import React, { useState, useEffect, useCallback } from "react";
import Typewriter from "./Typing";
const GRID_SIZE = 5 * 5; 

let HIGHLIGHT_DURATION = 1000;
let DELAY_BETWEEN_HIGHLIGHTS = 500;

const MemorySequence = () => {
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [gameState, setGameState] = useState("idle");
  const [currentHighlight, setCurrentHighlight] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState("easy"); 
  const [sequenceLength, setSequenceLength] = useState(6);

  const generateSequence = useCallback(() => {
    const newSequence = [];
    for (let i = 0; i < sequenceLength; i++) {
      newSequence.push(Math.floor(Math.random() * GRID_SIZE));
    }
    return newSequence;
  }, [sequenceLength]);

  const startGame = useCallback(() => {
    const newSequence = generateSequence();
    setSequence(newSequence);
    setUserSequence([]);
    setGameState("showing");
    setScore(0);
    showSequence(newSequence);
  }, [generateSequence]);

  const showSequence = useCallback((seq) => {
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < seq.length) {
        setCurrentHighlight(seq[i]);
        setTimeout(() => setCurrentHighlight(null), HIGHLIGHT_DURATION);
        i++;
      } else {
        clearInterval(intervalId);
        setGameState("userTurn");
      }
    }, HIGHLIGHT_DURATION + DELAY_BETWEEN_HIGHLIGHTS);
  }, []);

  const handleBoxClick = useCallback(
    (index) => {
      if (gameState !== "userTurn") return;

      const newUserSequence = [...userSequence, index];
      setUserSequence(newUserSequence);

      if (
        newUserSequence[newUserSequence.length - 1] !==
        sequence[newUserSequence.length - 1]
      ) {
        setGameState("gameOver");
        if (score > highScore) {
          setHighScore(score);
        }
      } else if (newUserSequence.length === sequence.length) {
        setScore(score + 1);
        const newSequence = [
          ...sequence,
          Math.floor(Math.random() * GRID_SIZE),
        ];
        setSequence(newSequence);
        setUserSequence([]);
        setGameState("showing");
        setTimeout(() => showSequence(newSequence), 1000);
      }
    },
    [gameState, userSequence, sequence, score, highScore, showSequence]
  );

  useEffect(() => {
    if (difficulty === "easy") {
      setSequenceLength(6);
      HIGHLIGHT_DURATION = 1000;
      DELAY_BETWEEN_HIGHLIGHTS = 500;
    } else if (difficulty === "medium") {
      setSequenceLength(9);
      HIGHLIGHT_DURATION = 800;
      DELAY_BETWEEN_HIGHLIGHTS = 400;
    } else if (difficulty === "hard") {
      setSequenceLength(15);
      HIGHLIGHT_DURATION = 600;
      DELAY_BETWEEN_HIGHLIGHTS = 300;
    }
  }, [difficulty]);

  const renderGrid = () => {
    return (
      <div className="grid grid-cols-5 gap-2 mb-4">
        {[...Array(GRID_SIZE)].map((_, index) => (
          <div
            key={index}
            className={`w-12 h-12 border-2 border-gray-300 cursor-pointer transition-colors duration-200 ${
              currentHighlight === index ? "bg-blue-500" : "bg-white"
            }`}
            onClick={() => handleBoxClick(index)}
          ></div>
        ))}
      </div>
    );
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        
      <h1 className="text-3xl font-mono mb-4"> <Typewriter   text={`Memory Sequence Game`} speed={50}/></h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        {renderGrid()}
        <div className="flex justify-between mb-4">
          <p className="font-mono">Score: {score}</p>
          <p className="font-mono">High Score: {highScore}</p>
        </div>
        <div className="flex justify-between mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-mono py-2 px-4 rounded"
            onClick={startGame}
            disabled={gameState !== "idle" && gameState !== "gameOver"}
          >
            {gameState === "idle" ? "Start Game" : "Restart"}
          </button>
          <select
            className="bg-gray-200 font-mono py-2 px-4 rounded"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy (6 sequence)</option>
            <option value="medium">Medium (9 sequence)</option>
            <option value="hard">Hard (15 sequence)</option>
          </select>
        </div>
        <p className="text-center font-mono mb-4">
          {gameState === "showing" && "Watch the sequence..."}
          {gameState === "userTurn" && "Your turn! Repeat the sequence."}
          {gameState === "gameOver" &&
            'Game Over! Click "Restart" to play again.'}
        </p>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-mono mb-4">How to Play</h2>
        <ol className="list-decimal list-inside font-mono space-y-2">
          <li>
            Select a difficulty level: Easy (6 sequence), Medium (9 sequence),
            or Hard (15 sequence).
          </li>
          <li>Click "Start Game" to begin.</li>
          <li>Watch carefully as the boxes light up in sequence.</li>
          <li>
            After the sequence is shown, repeat it by clicking the boxes in the
            same order.
          </li>
          <li>
            If you get the sequence right, you'll move to the next round with an
            additional step.
          </li>
          <li>The game continues until you make a mistake.</li>
          <li>Try to beat your high score!</li>
        </ol>
      </div>
    </div>
  );
};

export default MemorySequence;
