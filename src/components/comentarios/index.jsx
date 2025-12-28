import "./style.css"
import ftComentario from '../../assets/images/comentador.svg'
import estrelinhaCheia from '../../assets/images/full-star.svg'
import estrelinhaVazia from '../../assets/images/empty-star.svg'


export const Comentarios = () =>{
    return(
           <div className="comentario-container">
              
                    <div className="comentario-content">
                        <img src={ftComentario} alt="" />
                        <div className="pessoa-comentario">
                        <h3>David <span> Silva</span></h3>
                        <ul className="estrelinhas">
                            <li><img src={estrelinhaCheia} alt="" /></li>
                            <li><img src={estrelinhaCheia} alt="" /></li>
                            <li><img src={estrelinhaCheia} alt="" /></li>
                            <li><img src={estrelinhaCheia} alt="" /></li>
                            <li><img src={estrelinhaVazia} alt="" /></li>
                        </ul>

                        </div>
                    </div>
                    <p>Comida maravilhosa e atendimento impecável! 
                    O ambiente é aconchegante e perfeito para um jantar a dois. Voltarei com certeza.</p>
               
            </div>
    )
}