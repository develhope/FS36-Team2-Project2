import { Square } from "./Square"
const SideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <ul >
        <img src="../../assets/Logo e Svg/assistenza.svg"/> 
          <li><Square svg={"../../assets/Logo e Svg/star.svg"} title={"Giochi"}/></li>
          <li><Square svg ={"../../assets/Logo e Svg/console.svg"} title={"Console e accessori"} /></li>
          <li><Square svg={"../../assets/Logo e Svg/switch.svg"} title={"Nintendo Switch Online"} /></li>
          <li><Square svg={"../../assets/Logo e Svg/shop.svg"} title={"Nintendo eShop"} /></li>
          <li><Square svg={"../../assets/Logo e Svg/nintendostore.svg"} title={"My Nintendo Store"} /></li>
          <li><Square svg={"../../assets/Logo e Svg/rimani_informato.svg"} title={"Rimani Informato"} /></li>
          <li className="little-square"><Square title={"..."}/></li>
          <li className="last-square"><Square/><button className="up-button"></button></li>
        </ul>
      </nav>
    </>
  )
}

export default SideBar