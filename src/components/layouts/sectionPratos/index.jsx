import './style.css'
import { CardPrato } from "../../cardsPrato"
import imgPrato1 from '../../../assets/images/prato-destaque-1.svg'


export const PratosDestaque = () =>{
    return(
        <>
        <section className="pratos-destaque">

            <div className="cards-pratos-container">
                <CardPrato imgCardPrato={imgPrato1}
                h3="Bacon & Ovos Gourmet"
                p="Ovos fritos no ponto perfeito, acompanhados de fatias crocantes de bacon, batatas douradas, tomatinhos frescos, rabanete e folhas verdes selecionadas."/>
            </div>

               <a className='btn-primary' href="">Ver cardapio</a>
        </section>
        </>
    )
}