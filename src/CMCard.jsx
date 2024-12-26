
import contact_manager from './assets/contact_manager.png';

import { FaGithub } from "react-icons/fa";

function CMCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={contact_manager} alt="Profile Picture" />
            <h2 className="CMcard-title">TTYL: Contact Manager</h2>
            <p className="CMcard-role">Front-end Role</p>
            <p className='CMcard-text'>Contact manager that makes use of basic CRUD operations. 
                I used HTML/CSS to design the web app and JavaScript to write functions and connect the APIs.</p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/phaccies/TTYL-Contact-Manager'><button title='GitHub'> <FaGithub /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default CMCard
