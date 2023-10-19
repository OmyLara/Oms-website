import './About-me.css';
import Yop from '../Imagenes/yop.png';

export default function Testimonio(){


 
  return(
    
  
    <div className='contenedor-principal'>
      
      <div className='contenedor-testimonio'>
            <img 
            className='imagen-testimonio'
            src={Yop}
            alt="Foto de persona"  />
          
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio' >Hi, my name is <span>Omar Lara</span></p>
            <p className='texto-testimonio'><br/>I'm an apassionate Frontend Developer and robotics engineer, with a focus on developing solutions that make a difference in people's lives.
            I love the world of technology and how through web development I can create tools that make life easier for others.
            <br/><br/>Every project I get involved in is an opportunity to learn, grow and apply my creative skills to develop innovative solutions. 
            <br/>Furthermore, I enjoy collaborating with multidisciplinary teams, since I believe that working together enriches our ideas and allows us to address challenges from different perspectives.

            <br/><br/> In my portfolio, you will find examples of projects that I have carried out with passion and dedication, always with the purpose of helping people and making a difference in their day to day. 
            <br/> I am excited to continue growing as a professional and continue to develop web solutions that have a positive impact on society.
            <br/><br/> Technologies I mainly work with: Javascript,React,Vite, Node.JS, HTML, CSS, Tailwind, Bootstrap,Github
            
            </p>
          </div>
      </div>
          </div>    
    
    
  );
}

