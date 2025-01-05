import './Experience.css'
import typing from './assets/typing_code.png';
import C_lang from './assets/C_Logo.png';
import CSharp_lang from './assets/Logo_C_sharp.png';



import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { SiLua } from "react-icons/si";
import { FaDartLang } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";


function Experience(){
    return(
        <>
        <h2 className='experience-title'>Experience!</h2>
        <div className='exp-container'>
        <div className='img-typing-container'>
            <img className="typing-img" src={typing} alt="Typing code image" />
            <a className='typing-cred' href="https://www.freepik.com/free-vector/hand-coding-concept-illustration_21864184.htm#fromView=search&page=1&position=8&uuid=00540510-c8ee-43e0-9794-a273dbcca4c5&new_detail=true">
            Image by storyset on Freepik</a>
        </div>
        <div className='exp-content'>
        <h3 className='code-header'>Coding Languages</h3>
        <div className='c-langs'>

                <button title='C'> <img  className='c-imgs' src={C_lang}  /> </button>
                <button title='C#'> <img  className='c-imgs2' src={CSharp_lang}  /> </button>
                <button title = 'Python'> <FaPython /> </button>
                <button title='Java'> <FaJava /> </button>
                
        </div>
        <h3 className='code-header'>Web Development</h3>
        <div className='c-langs'>
        <button title='HTML'> <FaHtml5 /> </button>
                <button title='CSS'> <IoLogoCss3 /> </button>
                <button title='React'> <FaReact /> </button>
                <button title='TypeScript'> <SiTypescript /> </button>
                <button title='JavaScript'> <FaJsSquare /> </button>
                <button title='Node.js'> <FaNodeJs /> </button>
                <button title='PHP'>  <FaPhp/>  </button>
                <button title='SQL'> <AiOutlineConsoleSql /> </button>
                <button title='MongoDB'> <BiLogoMongodb /> </button>
        </div>

        <h3 className='code-header'>Game Development</h3>
        <div className='c-langs'>
            <button title='C#'> <img  className='c-imgs2' src={CSharp_lang}  /> </button>
            <button title='Unity'> <FaUnity /> </button>
            <button title='Lua'> <SiLua /> </button>
        </div>

        <h3 className='code-header'>Tools</h3>
        <div className='c-langs'>
            <button title='Visual Studio Code'> <BiLogoVisualStudio /> </button>
            <button title='Git'> <FaGitAlt /> </button>
            <button title='Postman'> <SiPostman /> </button>
        </div>

        <h3 className='code-header'>Spoken Languages:</h3>
        <div className='spoken-langs'>
            <button title='English'>English</button>
            <button title='Spanish'>Spanish</button>
            <button title='Portuguese'>Portuguese</button>
        </div>
        </div>
        </div>
        </>
    );
}

export default Experience
