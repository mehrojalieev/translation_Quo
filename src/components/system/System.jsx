import './system.scss'
import Hand from '../assets/hand.svg'
import {BsArrowRight} from 'react-icons/bs'
import { useTranslation } from 'react-i18next'

const System = () => {

    const {t} = useTranslation()

    return (
        <>
            <section>
                <div className="system-content">
                    <h2>{t("system.title")}</h2>
                    <p> {t("system.text")} </p>
                    <button>{t("system.exp_btn")}<BsArrowRight/> </button>
                </div>
                <div className="system-card">
                    <img src={Hand} width={130} height={125} />
                </div>
                <div className="system-form">
                        
                </div>
            </section>
        </>
    )
}

export default System