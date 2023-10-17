import React from "react";
import './Contact.css';
import github from '../Imagenes/github.png';
import whats from '../Imagenes/whatsapp.png';
import linkedin from '../Imagenes/linkedin.png'



export default function Contact(){
    return(
<div className="un">   
{/*
<form className="contactame">
        <label htmlFor='name'>Name</label>
        <input id="name" type="text" placeholder="Type your name"/><br/><br/>

        <label htmlFor='correo'>E-mail address</label>
        <input id="correo" type="email" placeholder='Type your email address'></input><br/><br/>

        <label htmlFor="suggestion">Request</label>
        <textarea id="suggestion" placeholder="Type your request"></textarea><br/><br/>

        <button>Send</button><br/>
        
    </form>
*/} 
    
    <div className="icons">
    <a href="https://wa.me/525951108949/?text=Envía%20un%20mensaje%20a%20Omar%20Lara" target="_blank" rel="noreferrer"><span>What's App</span><br/><br/><img alt="WA" src={whats} className="ima-1"/><br/></a><br/><br/><br/><br/>
    <a href="https://github.com/OmyLara" target="_blank" rel="noreferrer"><span>Github</span><br/><br/><img src={github} alt="Github" className="ima-2"/><br/></a><br/><br/><br/><br/>
    <a href="https://www.linkedin.com/in/lara-omar" target="_blank" rel="noreferrer"><span>LinkedIn</span><br/><br/><img src={linkedin} alt="Linkedin" className="ima-3"/><br/><br/></a>

    </div>
</div>

        
    )
}