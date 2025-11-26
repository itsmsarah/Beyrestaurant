import "./style.css"
// import imgCard from "../../assets/images/tomato.svg"

export const Card =({imgCard,h3,p})=>{
    return(
        <>
        <div className="container-card">
            <img src={imgCard} alt="" />
            <h3>{h3}</h3>
            <p>{p}</p>
        </div>
        </>
    )
}