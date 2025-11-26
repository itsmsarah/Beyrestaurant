import comidaBeyonce from '../../../assets/images/beyonce-prato-chique.jpg'
import { BtnPrimary } from '../../buttons/btnPrimary'
import { BtnSecondary } from '../../buttons/btnSecondary'
import "./style.css"

export const Main = () => {
    return (
        <main>


            <div className="content-main">
                <h1>A melhor experiência <span> com a beyonce sendo chefe</span></h1>
                <p>Assim como a diva, oferecemos pratos divônicos , dignos de serem considerados os melhores do século, assim como a nossa mãe Beyonce.Venha conhecer os pratos
                    que a Beyonce com certeza comeria
                </p>

                <div className='container-btns'>
                    <BtnPrimary />
                    <BtnSecondary />
                </div>
            </div>

            <img src={comidaBeyonce} alt="" />
        </main>
    )
}