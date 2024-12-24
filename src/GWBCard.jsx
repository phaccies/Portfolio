
import girlswhocode from './assets/girlswhocode.png';

import { FaGithub } from "react-icons/fa";

function GWBCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={girlswhocode} alt="Profile Picture" />
            <h2 className="CMcard-title">Girls Who Budget: Budget Planner [IN DEV]</h2>
            <p className="CMcard-role">Back-end Role</p>
            <p className='CMcard-text'>A budgeting web app that allows users to input their finances and budget based on their needs.
                Users can see how much they spend and see where their money goes. I am creating the database through SQL and will also 
                be writing the APIs in PHP. This is an ongoing project.
            </p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/viannahuynh/Group5GWC'><button title='GitHub'> <FaGithub /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default GWBCard