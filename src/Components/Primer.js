import { useState,  } from "react";
import "./Primer.css";
import Marvel from '../Imagenes/MC.png';
import Calcu from '../Imagenes/calcu.png';
import Prescription from '../Imagenes/prescription.png';
import todo from '../Imagenes/TO-DO.jpeg';
import guitar from '../Imagenes/guitar.jpeg';



function Primer() {

    

    const [index, setIndex] = useState(0);

    const arrayToShow = ["is a Frontend Developer", "has a lot of great ideas", "is willing to learn", "wants to help people"];

    const handleClick = () => {
        if (index < arrayToShow.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    


    return (
        
        <>
         <div className="texto">

            <div className="contenedor">
                <h1>Omar Lara </h1>

            </div>
            <p className="uno">{arrayToShow[index]}</p>
            <button className="but1" onClick={handleClick}/>
            
        
        </div>
        <section className="part-two">

            <div className="my-proy">
            <h1>My Startup Projects</h1>
            <p>Over the years I've learned about project management, user experience and supporting people.<br /> Today I am combining my soft skills with my coding knowledge to bring solutions to problems in the best possible way.</p>
            </div>

            <div className="proyectos">
                <div className="p1"><a href="https://marvel-champions-lifecounter.netlify.app"><span ><img src={Marvel} alt="Img Marvel"/><br/></span><h1>Board Game Counter</h1></a><br/><br/><p>You can now play Marvel Champions replacing life counters with this easy app.<br/><br/><a href="https://www.fantasyflightgames.com/en/products/marvel-champions-the-card-game/" >More about Marvel Champions here.</a></p></div>
                <div className="p2"><a href="https://calculator-w-react.netlify.app"><span ><img src={Calcu} alt="Calculadora"/><br/></span><h1>Calculator</h1></a><br/><br/><p>Always a good project to start with when coding.<br/><br/>Use this calculator for your daily math problems.<br/><br/><br/></p></div>
                <div className="p3"><a href="https://citas-pacientes-vite.netlify.app"><span ><img src={Prescription} alt="Img Marvel"/><br/></span><h1>Medical appointments</h1></a><br/><br/><p>No more issues when registering patients and creating appointments for your facility.<br/><br/>All patients' info in one place.<br/><br/></p></div>
                <div className="p4"><a href="https://guitarshop-la.netlify.app/"><span ><img src={guitar} alt="Guitar"/><br/></span><h1>Guitar LA</h1></a><br/><br/><p>Explore our online store and find the perfect guitar to bring your music to life!<br/><br/></p></div>
                <div className="p5"><a href="https://addyourtasks-app.netlify.app/todo"><span ><img src={todo} alt="Tasks"/><br/></span><h1>Add tasks, stay organized!</h1></a><br/><br/><p>Stay organized and in control. Add, track, and complete tasks effortlessly with our app—your productivity, simplified!<br/><br/>All patients' info in one place.<br/><br/></p></div>

            </div>
            <footer>
            </footer>

        </section>
        
        
        </>
       
        


    );
}


export default Primer;