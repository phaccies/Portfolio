
import creta from './assets/creta.png';

import { FaGithub } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoGameController } from "react-icons/io5";

function CretaCard()
{
    return(
        <>
        <div className="CMcard-container">
        <div className="CMcard">
            <img className="cm-image" src={creta} alt="Profile Picture" />
            <h2 className="CMcard-title">Cretastrophe</h2>
            <p className="CMcard-role">Developer</p>
            <p className='CMcard-text'>Cretastrophe is a 2D platformer that allows players to draw on the screen to complete puzzles to beat levels.
                My role was to create the UI in the game and program a basic patrol enemy. I worked on counting collectibles in-game, logic behind
                unlocking doors, adding sound, etc. I am thankful to my amazing teammates, and am proud to say we won best Game in Show of the semester!
            </p>
            <div className='buttons-container'>
               <a target="_blank" href='https://github.com/JosephS0123/Cretastrophe'><button title='GitHub'> <FaGithub /> </button> </a>
               <a target='_blank' href='/241211 UCF Game Awards Best in Show.pdf'>
  <button title='Award'> <GrCertificate /> </button>
</a>
              <a target='_blank' href='https://phaccies.itch.io/cretastrophe-preview'> <button title='Demo!'> <IoGameController /> </button> </a>
            </div>
        </div>
        </div>
        </>
    );
}

export default CretaCard