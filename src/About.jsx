import './About.css'
import girl_coding from './assets/girl_coding.png';

function About(){
    return(
        <>
        <h2 className="about-title">About Me!</h2>
        <div className='about-container'>
            <div className='image-container'>
            <img className="code-img" src={girl_coding} alt="Cartoon girl coding" />
            <a className='img-attribute' href="https://www.freepik.com/free-vector/cute-girl-hacker-operating-laptop-cartoon-vector-icon-illustration-people-technology-isolated-flat_65309450.htm#fromView=keyword&page=1&position=1&uuid=9a92a69a-d386-41dd-85c0-3d507e7e81ab&new_detail=true">
            Image by catalyststuff on Freepik</a>
            </div>
            <div className="about-content">
                <h3>Who I Am</h3>
                <p>
                    Hi, I'm Veronica! I'm a CS student attending UCF. I've loved computers since I was young, so I'm thrilled to be pursuing a career in tech.
                </p>

                <h3>What I Do</h3>
                <p>
                    I enjoy coding and am always trying to learn new things and apply my knowledge in all the projects I work on. While I have more experience in front-end development, I don't mind working on the back-end
            side of things; I'm always eager to learn and appreciate the challenge that may come with it.
            I also love video games and making them. I had the opportunity to be part of the team that won Best Game in Show of the semester.
            Don't worry, you'll catch a sneak peek of it further down and play a demo!

                </p>

                <h3>Mentorship & Community</h3>
                <p>
                    Helping others is another passion of mine. As a proud member of Girls Who Code and a tutor for Intro to C and CS1, I mentor and inspire new programmers to grow their skills and confidence in tech.
                </p>

            </div>
        </div>
        </>
    );
}

export default About;
