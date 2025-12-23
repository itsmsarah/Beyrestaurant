import './style.css'
import { CardPrato } from "../../cardsPrato"
import imgPrato1 from '../../../assets/images/prato-destaque-1.svg'
import imgPrato2 from '../../../assets/images/prato-destaque-2.svg'
import imgPrato3 from '../../../assets/images/prato-destaque-3.svg'
import imgPrato4 from '../../../assets/images/prato-destaque-4.svg'

export const PratosDestaque = () =>{
    return(
        <>
        <section className="pratos-destaque">
            <h2>Pratos em <span>Destaque</span></h2>
            <div className="pratos-destaque-container">

            <div className="cards-pratos-container">
                <CardPrato imgCardPrato={imgPrato1}
                h3="Bacon & Ovos Gourmet"
                p="Ovos fritos no ponto perfeito, acompanhados de fatias crocantes de bacon, batatas douradas, 
                tomatinhos frescos, rabanete e folhas verdes selecionadas."/>
            </div>
            <div className="cards-pratos-container">
                <CardPrato imgCardPrato={imgPrato2}
                h3="Bife Grelhado  Gourmet"
                p="Suculento bife grelhado ao ponto, servido com rúcula fresca, tomates assados,
                 e uma rodela de limão siciliano tostado para realçar os sabores."/>
            </div>
            <div className="cards-pratos-container">
                <CardPrato imgCardPrato={imgPrato3}
                h3="Fusilli Mediterrâneo"
                p="Massa fusilli al dente, envolta em molho de tomate fresco, berinjela assada, 
                tomates cereja e manjericão fresco, finalizada com um toque de azeite extra virgem."/>
            </div>
            <div className="cards-pratos-container">
                <CardPrato imgCardPrato={imgPrato4}
                h3="Spaghetti Gourmet"
                p="Massa al dente envolta em rico molho bolognesa artesanal, com tomates cereja selecionados
                , parmesão ralado e folhas frescas de manjericão."/>
            </div>
            </div>


               <a className='btn-primary' href="">Ver cardapio</a>
        </section>
        </>
    )
}