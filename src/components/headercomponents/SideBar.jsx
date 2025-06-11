import { Square } from "./Square";
import Star from "../../assets/Logo e Svg/Star.svg";

const SideBar = () => {
	return (
		<>
			<nav className="sidebar">
				<ul>
					<li>
						<Square
							// svg={"../../assets/Logo e Svg/star.svg"}
							svg={Star}
							title={"Giochi"}
						/>
					</li>
					<li>
						<Square
							svg={"../../assets/Logo e Svg/console.svg"}
							title={"Console e accessori"}
						/>
					</li>
					<li>
						<Square
							svg={"../../assets/Logo e Svg/switch.svg"}
							title={"Nintendo Switch Online"}
						/>
					</li>
					<li>
						<Square
							svg={"../../assets/Logo e Svg/shop.svg"}
							title={"Nintendo eShop"}
						/>
					</li>
					<li>
						<Square
							svg={"../../assets/Logo e Svg/nintendostore.svg"}
							title={"My Nintendo Store"}
						/>
					</li>
					<li>
						<Square
							svg={"../../assets/Logo e Svg/rimani_informato.svg"}
							title={"Rimani Informato"}
						/>
					</li>
					<li className="little-square">
						<Square title={"..."} />
					</li>
					<li className="last-square">
						<Square />
						<button className="up-button"></button>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default SideBar;
