import { Square } from "./Square";

const SideBar = () => {
	return (
		<>
			<nav className="sidebar">
				<ul>
					<li>
						<Square svg={"/star.svg"} title={"Giochi"} />
					</li>
					<li>
						<Square
							svg={"/console.svg"}
							title={"Console e accessori"}
						/>
					</li>
					<li>
						<Square
							svg={"/switch.svg"}
							title={"Nintendo Switch Online"}
						/>
					</li>
					<li>
						<Square svg={"/shop.svg"} title={"Nintendo eShop"} />
					</li>
					<li>
						<Square
							svg={"/store.svg"}
							title={"My Nintendo Store"}
						/>
					</li>
					<li>
						<Square svg={"/info.svg"} title={"Rimani Informato"} />
					</li>
					<div className="little-square-wrapper">
						<ul>
							<li className="little-square">...</li>
						</ul>
					</div>
					<div className="last-square-wrapper">
						<ul>
							<li className="last-square">
								<button className="up-button">
									<img src="/arrow.svg" />
								</button>
							</li>
						</ul>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default SideBar;
