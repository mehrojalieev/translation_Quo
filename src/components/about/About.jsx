import './about.scss'
import Card1 from '../assets/card1.svg'
import Card2 from '../assets/card2.svg'
import Card3 from '../assets/card3.svg'
import {useTranslation} from 'react-i18next'
const About = () => {
const {t} = useTranslation()
  return (
    <>
      <div className="about-wrapper">
        <h2>{t("about.subtitle")}</h2>
        <p>{t("about.text")}</p>
        <div className="about__card-container">
          <div className="about-card">
            <img src={Card1} />
            <h3>{t("about.card_title1")}</h3>
            <p>{t("about.card_text")}</p>
          </div>
          <div className="about-card">
            <img src={Card2} />
            <h3>{t("about.card_title2")}</h3>
            <p>{t("about.card_text")}</p>
          </div>
          <div className="about-card">
            <img src={Card3} />
            <h3>{t("about.card_title3")}</h3>
            <p>{t("about.card_text")} </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About