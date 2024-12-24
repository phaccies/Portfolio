
import portfolio_pic from './assets/portfolio_pic.png';

import { FaGithub } from "react-icons/fa";

function PCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={portfolio_pic} alt="Profile Picture" />
            <h2 className="CMcard-title">Portfolio</h2>
            <p className="CMcard-role">Front-end Role</p>
            <p className='CMcard-text'>This website is something I challenged myself to do. I considered using pre-built ones to showcase
                my portfolio, but I knew that coding everything manually would be a great learning experience and help me get more comfortable 
                with React and CSS since it's something I struggled with in a previous project. I'm happy I chose this route because I learned a 
                lot creating this website and was able to get creative! Thank you for taking the time to visit. 
            </p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/dewlb/LP1'><button title='GitHub'> <FaGithub /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default PCard