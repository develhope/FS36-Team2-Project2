import { Square } from "./Square";

const SideBar = () => {
	return (
		<>
			<nav className="sidebar">
				<ul>
					<li>
						<Square
							svg={"/star.svg"}
							title={"Giochi"}
						/>
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
						<Square
							svg={"/shop.svg"}
							title={"Nintendo eShop"}
						/>
					</li>
					<li>
						<Square
							svg={"/store.svg"}
							title={"My Nintendo Store"}
						/>
					</li>
					<li>
						<Square
							svg={"/info.svg"}
							title={"Rimani Informato"}
						/>
					</li>
					<li className="little-square">
            ...
					</li>
					<div>
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
