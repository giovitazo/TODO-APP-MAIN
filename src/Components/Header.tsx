import TitleBar from "./TitleBar";

type HeaderProps = {
	darkmode: boolean;
	toggleDarkmode: () => void;
};
function Header({ darkmode, toggleDarkmode }: HeaderProps) {
	const backgroundImg = darkmode ? "bg-desktop-dark.jpg" : "bg-desktop-light.jpg";
	const backgroundImgM = darkmode ? "bg-mobile-dark.jpg" : "bg-mobile-light.jpg";

	return (
		<header>
			<div className="img-container">
				<picture className="img-hero">
					<source srcSet={`/assets/images/${backgroundImg}`} media="(min-width: 768px)" />
					<source srcSet={`/assets/images/${backgroundImgM}`} media="(max-width: 767px)" />
					<img src={`/assets/images/${backgroundImgM}`} loading="eager" alt="" />
				</picture>
			</div>
			<TitleBar darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
		</header>
	);
}

export default Header;
