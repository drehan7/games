import { text } from "stream/consumers";
import { useRouter } from 'next/router';

interface TitleTextProps {
	text: string;
	linkUrl: string;
	isLogo?: boolean;
}

export default function TitleText(props: TitleTextProps) {

	const router = useRouter();

	const handleClick = (e: any) => {
		e.preventDefault();
		router.push(props.linkUrl);
	}

	const handleIsLogo = () => {
		let ret: string;
		if (!props.isLogo) {
			ret = "border border mx-2 my-4 text-center"
		}
		else {
			ret =  "border border mx-2 my-2 text-3xl text-center text-red-400"
		}

		return ret;
	}


	return (
	<div className={handleIsLogo()}>
		<button className="align-middle"onClick={handleClick}>
		{props.text}
		</button>
	</div>
	)


}
