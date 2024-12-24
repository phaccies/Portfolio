
import './Intro.css';

function Intro() {
    return(
        <>
         <div className="intro-wrapper">
            <div className='type-container'>
            <h1 className='type-text'>Hi, I'm Veronica Vargas!&#128075;</h1>
            </div>
            <div className='roles-container'>
                <span class="static-text">I am a </span>
                <ul className='roles'>
                    <li><span>UCF CS Major Student &#128218;</span></li>
                    <li><span>Video Game Developer &#127918;</span></li>
                    <li><span>Front-end Developer &#128187;&#127912; </span></li>
                    <li><span>Back-end Developer &#128187;&#128173;</span></li>
                </ul>
            </div>
         </div>
        </>

    );
}

export default Intro