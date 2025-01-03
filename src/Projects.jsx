import './Projects.css'
import CMCard from './CMCard';
import GPCard from './GPCard';
import CretaCard from './CretaCard';
import GWBCard from './GWBCard';
import PCard from './PCard';
import PLCard from './PLCard'

function Projects(){
    return(
        <>
            <h2 className='experience-title'>Projects!</h2>
            <div className='project-cards-container'>
                <PLCard />
                <CretaCard />
                <GPCard />
                <CMCard />
                <PCard />
                <GWBCard />
            </div>
        </>
    );
}

export default Projects
