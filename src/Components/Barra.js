import React from "react";
import "./Barra.css";
import { Link, Outlet} from "react-router-dom";

export default function Barra (){

    
        return (

<>
<nav className="menu">

        <div className="titulo">
            <Link to='/'>Front End Developer</Link>
        </div>

        <div className="seg">

            <div id="About-me">
                <Link to="./About-me">About Me</Link>
            </div>

            <div id="Experience">
                <Link to="./Experience">Experience</Link>
            </div>

            <div id="Contact">
                <Link to="./Contact">Contact</Link>
            </div>

        </div>
</nav>
<Outlet />
</>
            


        );
    
}

