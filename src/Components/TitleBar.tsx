type TitleBarProps = {
	darkmode: boolean;
	toggleDarkmode: () => void;
};

function TitleBar({ darkmode, toggleDarkmode }: TitleBarProps) {
	const darkmodeLogoImg = !darkmode ? "../assets/images/icon-moon.svg" : "../assets/images/icon-sun.svg";
	const darkmodeLogoAlt = !darkmode ? "Moon Icon" : "Sun Icon";

	return (
		<div className="title-bar">
			<h1>TODO</h1>
			<button onClick={toggleDarkmode}>
				<img src={darkmodeLogoImg} alt={darkmodeLogoAlt} />
			</button>
		</div>
	);
}

export default TitleBar;
