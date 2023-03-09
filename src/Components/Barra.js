import React from "react";
import "./Barra.css";

function Barra ({position,aboutme,experience,blog}){
    
        return (
        <nav className="menu">

                <div className="titulo">
                    <a href="#">{position}</a>
                </div>

            <div className="seg">

                <div id="About-me">
                    <a href="">{aboutme}</a>
                </div>

                <div id="Experience">
                    <a href="">{experience}</a>
                </div>

                <div id="Blog">
                    <a href="">{blog}</a>
                </div>

            </div>
        </nav>


        );
    
}

export default Barra;