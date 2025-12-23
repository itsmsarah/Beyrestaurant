import './style.css'
export const CardPrato = ({imgCardPrato,h3,p}) =>{
    return(
        <>
      
        <div className="card-prato-contet">
            <img src={imgCardPrato} alt="" />
            <div className="card-prato-descricao">

                <h3>{h3}</h3>
                <p>{p}</p>
            </div>
            </div>
      
    
           
       
        </>
    )
}