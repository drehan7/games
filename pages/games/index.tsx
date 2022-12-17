import Header from "../../components/Header";
import Gallery from "../../components/Gallery";


export default function GamesPage() {

  // Some test data
  const gamesArray = [
    {
      "gameName": "Sudoku",
      "linkName": "sudoku",
      "gameDescription": "",
      "gameCategory": "Puzzle",
      "tags": ["Numbers", "Puzzle", "Brain", "Logic"],
      "difficulties": ["Easy", "Medium", "Hard"],
      "gamePreviewImage": ""
    },
    {
      "gameName": "Memory Cards",
      "linkName": "memorycards",
      "gameDescription": "Test your memory!",
      "gameCategory": "Memory",
      "tags": ["Brain", "Memory"],
      "difficulties": ["Easy", "Medium", "Hard"],
      "gamePreviewImage": ""
    },
    {
      "gameName": "Aim Trainer",
      "linkName": "aimtrainer",
      "gameDescription": "Hit the targets!",
      "gameCategory": "Memory",
      "tags": ["Accuracy", "Reflex"],
      "difficulties": ["Easy", "Medium", "Hard"],
      "gamePreviewImage": ""
    },
  ]
	return (
    <>
      <Header isSelected="Games"/>
      <Gallery games={gamesArray} />
    </>
  )
}
