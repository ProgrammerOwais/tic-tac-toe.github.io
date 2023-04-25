import Cell from "./components/Cell";
import { useState, useEffect } from "react";
function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("cross");
  const [winningMessage, setWinningMessage] = useState(null);
  const message = `Its now ${go}'s go`;

  // every time the cell change check winning score function
  useEffect(() => {
    winningScore();
  }, [cells]);
  const winningScore = () => {
    // console.log("the winning score function is invoked");
    // console.log(cells);
    // Winning combination
    const winningComb = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // For circle
    winningComb.forEach((array) => {
      let circleWins = array.every((cell) => cells[cell] === "circle");

      if (circleWins) {
        setWinningMessage("Circle's win");
        return;
      }
    });
    // For cross
    winningComb.forEach((array) => {
      let crossWins = array.every((cell) => cells[cell] === "cross");

      if (crossWins) {
        setWinningMessage("Cross's win");
        return;
      }
    });
  };

  // Lets check who is winning
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            key={index}
            cell={cell}
            cells={cells}
            setCells={setCells}
            go={go}
            setGo={setGo}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  );
}

export default App;
