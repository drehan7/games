import TitleText from "./TitleText";
import SearchBar from "./SearchBar";


export default function Header() {
	return (
		<header className="border py-4 px-4 flex flex-row bg-gray-200 justify-between align-middle"> 
			<div className="main-links flex flex-row bg-gray-200 justify-start align-middle">
				<TitleText text="WudGames" linkUrl="/" isLogo={true}/>
				<TitleText text="About" linkUrl="/about"/>
				<TitleText text="Game Selection" linkUrl="/games"/>
			</div>
			<div className="border divide-blue-50">
				<SearchBar/>
			</div>
			<div className="main-links flex flex-row bg-gray-200 justify-start align-middle">
				<TitleText text="Log In" linkUrl="/login"/>
				<TitleText text="Sign up" linkUrl="/signup"/>
			</div>

		</header>
	)
}
