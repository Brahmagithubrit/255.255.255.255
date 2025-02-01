import React, { useState, useEffect, useCallback } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const puzzles = [
  {
    fen: "3r1rk1/1pp2ppp/1p6/3P4/1P2Q3/P7/1B3PPP/R4RK1 w - - 0 1",
    solution: "Qe8+",
    explanation: "Queen sacrifice leading to checkmate",
  },
  {
    fen: "2r3k1/1p3ppp/p3p3/8/P2n4/3B4/1P3PPP/2R3K1 w - - 0 1",
    solution: "Rc8+",
    explanation: "Rook sacrifice leading to checkmate",
  },
  {
    fen: "4r1k1/ppp2ppp/8/4P3/1P6/P1N5/2P2PPP/3qR1K1 w - - 0 1",
    solution: "e6",
    explanation: "Pawn move blocks the queen and threatens mate",
  },
];

const ChessPuzzleGame = () => {
  const [game, setGame] = useState(new Chess());
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [message, setMessage] = useState("Find the winning move!");
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    newPuzzle();
  }, []);

  const newPuzzle = useCallback(() => {
    const newGame = new Chess();
    newGame.load(puzzles[currentPuzzle].fen);
    setGame(newGame);
    setMessage("Find the winning move!");
    setShowSolution(false);
  }, [currentPuzzle]);

  const onDrop = (sourceSquare, targetSquare) => {
    const move = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) return false;

    if (move.san === puzzles[currentPuzzle].solution) {
      setMessage("Correct! Well done!");
    } else {
      setMessage("Incorrect. Try again!");
      setTimeout(() => {
        game.undo();
        setGame(new Chess(game.fen()));
      }, 500);
    }

    return true;
  };

  const handleNextPuzzle = () => {
    setCurrentPuzzle((prev) => (prev + 1) % puzzles.length);
    newPuzzle();
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setMessage(
      `Solution: ${puzzles[currentPuzzle].solution} - ${puzzles[currentPuzzle].explanation}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">
        Chess Puzzle: One Move to Win
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          boardWidth={400}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
          }}
        />
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-700 mb-2">{message}</p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleNextPuzzle}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Next Puzzle
            </button>
            <button
              onClick={handleShowSolution}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Show Solution
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Play</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>Examine the chess position carefully.</li>
          <li>Find the one move that leads to a winning position.</li>
          <li>Make your move by dragging and dropping the piece.</li>
          <li>If correct, you'll see a success message.</li>
          <li>If incorrect, the move will be undone.</li>
          <li>Use "Show Solution" if you're stuck.</li>
          <li>Click "Next Puzzle" to try another challenge.</li>
        </ol>
      </div>
    </div>
  );
};

export default ChessPuzzleGame;
