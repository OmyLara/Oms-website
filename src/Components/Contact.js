import React from "react";
import './Contact.css';
import github from '../Imagenes/github.png';
import whats from '../Imagenes/whatsapp.png';



export default function Contact(){
    return(
<>    
    <form className="contactame">
        <label htmlFor='name'>Name</label>
        <input id="name" type="text" placeholder="Type your name"/><br/><br/>

        <label htmlFor='correo'>E-mail address</label>
        <input id="correo" type="email" placeholder='Type your email address'></input><br/><br/>

        <label htmlFor="suggestion">Request</label>
        <textarea id="suggestion" placeholder="Type your request"></textarea><br/><br/>

        <button>Send</button><br/>
        
    </form>
    <div className="icons">
    <a href="https://wa.me/525951108949/?text=Envía%20un%20mensaje%20a%20Omar%20Lara" target="_blank" rel="noreferrer"><img alt="WA" src={whats} className="ima-1"/></a>
        <img src={github} alt="Github" className="ima-2"/>
    </div>
</>

        
    )
}