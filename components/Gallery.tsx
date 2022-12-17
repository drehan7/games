import { useRouter } from "next/router";

interface GalleryProps {
    games: Object[];
}

interface GameItem {
    gameItem: GameItem;
    linkName: string;
    gameName: string;
    tags: Array<string>;
}

const GalleryItem = ({ gameItem }: GameItem) => {
    const router = useRouter()

    const handleSelectGame = (e: any, name: string) => {
        e.preventDefault();
        router.push(`games/${name}`);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-3 my-3 bg-slate-400 hover:bg-slate-300"
            onClick={(e) => { handleSelectGame(e, gameItem.linkName) }}>
            <div className="px-6 py-4">
                <div className="underline font-bold text-xl mb-2">{gameItem.gameName}</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="border-dotted border-2 border-black">
                <img className="w-full" src="/img/card-top.jpg" alt="Game Picture Here" />
            </div>
            <div className="px-6 pt-4 pb-2">
                {gameItem.tags.map((tag: string) => {
                    return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-sky-100">{tag}</span>
                })}
            </div>
        </div>
    )

}


export default function Gallery(props: GalleryProps) {
    const { games } = props;
    console.log("games array -> ", props);

    return (
        <div className="flex flex-row justify-center">
            {
                games && games.map((game) => {
                    return <GalleryItem key={game.linkName} gameItem={game} />
                })
            }
        </div>
    )
}
