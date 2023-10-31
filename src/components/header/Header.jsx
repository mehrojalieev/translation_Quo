import './header.scss'
import Player from "../assets/player.svg"
import { useTranslation } from 'react-i18next'

const Header = () => {
    const {t} = useTranslation()
    return (
        <header>
            <h2>{t("header.title")}</h2>
            <p>{t("header.text")}</p>
            <button><img src={Player} />{t("header.watch_btn")}</button>
        </header>
    )
}

export default Header