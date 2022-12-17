import React from "react";
const initBoard = () => [
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
  [0, 0, 0, 0, 0, 0, 0, 0 ,0],
]


export default function SudokuBoard() {
  const init = initBoard();
  const [board, setBoard] = React.useState([...init])

  const handleGridChange = (e, board, rowIdx, colIdx) => {
    let updatedGrid = [...board];

    const val = e.target.value;

    updatedGrid[rowIdx][colIdx] = e.target.value;

    setBoard(updatedGrid);
  }

  console.log("Board -> ", board);
  return (
    <>
      <div>
        <div className="main-board ">
          {board.map((row, rowIdx) => (
            <div key={rowIdx} className="grid grid-cols-9 grid-rows-9 ">
              {row.map((col, colIdx) => (
                <div key={colIdx} className="flex justify-center align-center border-2 border-solid border-white w-20 h-20">
                  {board[rowIdx][colIdx]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

