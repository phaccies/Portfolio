
import pfp from './assets/profile-pic.jpeg';

import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";

function Card()
{
    return(
        <>
        <div className="card-container">
        <div className="card">
            <img className="card-image" src={pfp} alt="Profile Picture" />
            <h2 className="card-title">Veronica Vargas</h2>
            <p className="card-text">Hi! I'm currently a CS student at UCF. </p>
            <div className='buttons-container'>
               <a target='_blank' href='https://github.com/phaccies' ><button title='GitHub'> <FaGithub /> </button> </a>
               <a target='_blank' href='https://www.linkedin.com/in/veronica-vargas-2687a1327/'> <button title='LinkedIn'> <CiLinkedin /> </button> </a>
               <a target='_blank' href='/Veronica_Vargas Resume.pdf'><button title='Resume'> <IoDocumentTextOutline /> </button></a>
            </div>
        </div>
        </div>
        </>
    );
}

export default Card
