import TitleText from "./TitleText";
import SearchBar from "./SearchBar";

interface HeaderProps {
  isSelected?: string;
}

export default function Header(props: HeaderProps) {
	return (
		<header className="border py-4 px-4 flex flex-row bg-gray-200 justify-between align-middle"> 
			<div className="main-links flex flex-row bg-gray-200 justify-start align-middle">
				<TitleText text="WudGames" linkUrl="/" isLogo={true}/>
				<TitleText text="About" linkUrl="/about" isSelected={props.isSelected}/>
				<TitleText text="Games" linkUrl="/games" isSelected={props.isSelected}/>
			</div>
			<div className="border divide-blue-50">
				<SearchBar/>
			</div>
			<div className="main-links flex flex-row bg-gray-200 justify-start align-middle">
				<TitleText text="Log In" linkUrl="/login" isSelected={props.isSelected} />
				<TitleText text="Sign up" linkUrl="/signup" isSelected={props.isSelected} />
			</div>

		</header>
	)
}
