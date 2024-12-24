
import game_plan from './assets/game_plan.png';

import { FaGithub } from "react-icons/fa";

function GPCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={game_plan} alt="Profile Picture" />
            <h2 className="CMcard-title">GamePlan: Tournament Manager</h2>
            <p className="CMcard-role">Front-end Role</p>
            <p className='CMcard-text'>A tournament manager that allows user to create and manage their sports tournaments. 
                Frontend development involved creating the web application using React and TypeScript, as well as connecting all the APIs to ensure functionality.</p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/dewlb/LP1'><button title='GitHub'> <FaGithub /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default GPCard