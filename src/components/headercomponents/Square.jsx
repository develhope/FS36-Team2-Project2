export function Square({title, svg}){
    return(
        <>
            <div className="square">
                <img src={svg}/>
                <span>{title}</span>
            </div>
        </>
    )
}