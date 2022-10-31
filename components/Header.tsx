import TitleText from "./TitleText";
import { useRouter } from 'next/router';


export default function Header() {
	return (
		<header className="border py-4 px-4 flex flex-row bg-gray-200 justify-start align-middle"> 
			<TitleText text="WudGames" linkUrl="/" isLogo={true}/>
			<TitleText text="About" linkUrl="/about"/>
			<TitleText text="Game Selection" linkUrl="/games"/>
		</header>
	)
}
