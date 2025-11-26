import './style.css'
export const CardPrato = ({imgCardPrato,h3,p}) =>{
    return(
        <>
        <div className="card-prato-container">
            <img src={imgCardPrato} alt="" />
                <h3>{h3}</h3>
                <p>{p}</p>
            </div>
       
        </>
    )
}