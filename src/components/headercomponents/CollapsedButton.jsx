import { useState } from "react"

export function CollapsedButton(){

    const [collapsed, setCollapsed] = useState(false)

    function handleToggleCollapse(){
        setCollapsed(t => ! t)
    }
    return(
         <>
        <div className="collapsed">
        <img className="nintendo-logo-footer" src="/nintendo-logo.svg" />
            <button className="collapsed-button" onClick={handleToggleCollapse}>
                <img src="/globe.svg" />
                Italia
                    <div className="arrow-globe">
                        <img src="/arrow-globe1.svg" />
                        <img src="/arrow-globe2.svg" />
                    </div>
                </button>
            {collapsed && 
            <div className="collapsedBox">
                <ul>
                    <li><a href="">België</a></li>
                    <li><a href="">Belgique</a></li>
                    <li><a href="">Deutschland</a></li>
                    <li><a href="">España</a></li>
                    <li><a href="">France</a></li>
                </ul>
                <ul>
                    <li><a href="">Italia</a></li>
                    <li><a href="">Nederland</a></li>
                    <li><a href="">Österreich</a></li>
                    <li><a href="">Portugal</a></li>
                    <li><a href="">Schweiz</a></li>
                </ul>
                <ul>
                    <li><a href="">Suisse</a></li>
                    <li><a href="">Svizzera</a></li>
                    <li><a href="">South Africa</a></li>
                    <li><a href="">UK & Ireland</a></li>
                    <li>     .............</li>
                    <li style={
                        {fontWeight : "bold"}
                    }><a href="">Altre Regioni</a></li>
                </ul>
            </div>}
        </div>
        </>
    )
}