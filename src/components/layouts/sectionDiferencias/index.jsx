import { Card } from "../../cardsDiferenciais"
import "./style.css"
import imgTomato from '../../assets/images/tomato.svg'
import imgChef from '../../assets/images/icon-chef.svg'
import imgCalendar from '../../assets/images/icon-calendar.svg'
import imgAmbient from '../../assets/images/icon-ambient.svg'

export const Diferencias =()=>{
    return(
        <section className="diferenciais">
            <h2>nossos <span>diferenciais</span> </h2>
            <div className="diferencias-container">
            <Card imgCard={imgTomato}
            h3="Ingredientes Frescos"
            p="Selecionados diariamente para garantir o melhor sabor."/>
            <Card imgCard={imgChef}
            h3="Chef Especializado"
            p="Receitas únicas criadas por nosso chef premiado."/>
            <Card imgCard={imgAmbient}
            h3="Ambiente Aconchegante"
            p="Espaço perfeito para momentos especiais."/>
            <Card imgCard={imgCalendar}
            h3="Reserva Simples"
            p="Garanta sua mesa com apenas alguns cliques."/>
            </div>


        </section>
    )
}