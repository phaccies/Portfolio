
import PL from './assets/Premier-League.jpg';

import { FaGithub } from "react-icons/fa";

function PLCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={PL} alt="Profile Picture" />
            <h2 className="CMcard-title">Premier Predictor</h2>
            <p className="CMcard-role">Developer</p>
            <p className='CMcard-text'>PremierPredictor is a Python-based app that scrapes current Premier League data from the Sky Sports website using BeautifulSoup. 
                The app provides visualizations and predictions for the league's outcome at the end of the season based on Monte Carlo simulations.</p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/phaccies/PremierPredictor'><button title='GitHub'> <FaGithub /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default PLCard