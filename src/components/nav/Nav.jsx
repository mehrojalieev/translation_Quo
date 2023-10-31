import './nav.scss'
import Logo from '../assets/logo.svg'
import { useTranslation } from "react-i18next"

const Nav = () => {
    const { i18n } = useTranslation()
    const { t } = useTranslation()
    console.log(t)
    const handleLanguageChange = (e) => {
        console.log(e.target.value);
        i18n.changeLanguage(e.target.value)
    }

    return (
        <>
            <nav>
                <img src={Logo} alt="Logo" />
                <div className="nav-items">
                    <select className='money-select'>
                        <option>{t("nav.money_option")}</option>
                    </select>
                    <select defaultValue={localStorage.getItem("lang")} onChange={handleLanguageChange}>
                        <option value="uz">UZ</option>
                        <option value="ru">RU</option>
                        <option value="en">EN</option>
                    </select>
                    <ul>
                        <li>{t("nav.works")}</li>
                        <li>{t("nav.business")}</li>
                        <li>{t("nav.help")}</li>
                    </ul>
                    <div className="register-btn">
                        <button>{t("nav.login")}</button>
                        <button>{t("nav.signup")}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav