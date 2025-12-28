import { Comentarios } from "../../comentarios"
import "./style.css"


export const SectionComentarios = () =>{
    return(
        <section className="section-comentarios">
            <h2>Nossas <span>Avaliações</span></h2>
            <div className="comentarios-container">
            <Comentarios/>
            <Comentarios/>
            <Comentarios/>
            <Comentarios/>
            <Comentarios/>
            <Comentarios/>

            </div>
        
        </section>
    )
}