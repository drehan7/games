import Header from "../../../components/Header";
import {useRouter} from "next/router";
import SudokuBoard from "./SudokuBoard";


// Main sudoku game
export default function Sudoku() {

  
  return (
    <>
     <Header isSelected={"games"}/>
      <h1>Sudoku Game</h1>
      <div className="rounded md:container md:mx-auto mx-2 my-3 border-2 border-solid border-black max-h-fit">
        <SudokuBoard/>
      </div>
    </>
  )
}
