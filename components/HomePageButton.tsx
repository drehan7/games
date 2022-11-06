interface Props {
	text: string;
	onClick?: () => void
}

const onClick = () => {
	alert("Button was clicked");
}

export default function HomePageButton(props: Props) {

	return (
		<button
			className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-4 px-8 border border-blue-500 hover:border-transparent rounded-full"
			onClick={onClick}>
			{props.text ? props.text : "Default button text"}
		</button>
	)

}
