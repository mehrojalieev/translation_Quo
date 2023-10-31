import './App.scss';
import { useTranslation } from 'react-i18next'
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Balance from "./components/assets/balance.png"
import Stock from "./components/assets/stock.svg"
import Spending from "./components/assets/spending.svg"
import Pie from "./components/assets/pie.svg"
import Lineleft from './components/assets/lineleft.svg'
import Lineright from './components/assets/lineright.svg'
import Google from './components/assets/google.svg'
import Slack from './components/assets/slack.svg'
import Amazon from './components/assets/amazon.svg'
import Dropbox from './components/assets/dropbox.svg'
import Microsoft from './components/assets/microsoft.svg'
import System from './components/system/System';
import About from './components/about/About';

function App() {
  const { t } = useTranslation()

  return (
    <>
      <Nav />
      <Header />
      <div className="diagramma-wrapper">
        <div className='balance-card'>
          <strong>{t("diagramma.balance")}</strong>
          <p className='cost'>$45,450.00</p>
          <img src={Balance} width={250} height={150} />
        </div>

        <img src={Stock} className='stock' />

        <div className="spending-card">
          <p>{t("diagramma.spend_text")}</p>
          <img src={Spending} width={170} height={170} />
        </div>

        <img src={Pie} className='pie-img' />
        <img src={Lineleft} className='lineleft' />
        <img src={Lineright} className='lineright' />
      </div>
      <div className="company-container">
        <h2>{t("diagramma.company_title")}</h2>
        <div className="company-card">
          <img src={Google} />
          <img src={Slack} />
          <img src={Amazon} width={240} height={230} />
          <img src={Dropbox} />
          <img src={Microsoft} />
        </div>
      </div>
      <System />
      <About />
    </>
  );
}

export default App;
