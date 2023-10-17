import React from "react";
import './Experience.css';
import { useState,useEffect } from "react";
import flecha from '../Imagenes/flecha-down.png' ;

export default function Experience(){

    const [color,setColor]=useState('#a317d2');
    const [show,setShow] = useState(false);
    
        useEffect(()=>{
            function onMouseMove(evento){
                if(evento.clientX < window.innerWidth / 2){
                    setColor('rgb(81, 191, 145)');
                }else{
                    setColor('#a317d2');
                }
            }
    
            window.addEventListener('mousemove',onMouseMove);
        },[]);

        const showing = () =>{
            setShow(!show);
        }
        const tab = '\u00A0';

        
        const lista = ['Product Expert Senior Mx & LATAM',
        'Customer Support Mexico & LATAM',
        'Customer Success Specialist',
        'Customer Experience Senior'];
        const listItems = lista.map(cosa => <li key={cosa}>{cosa}</li> );

        
        
    return(
            
            <>
            <div className="fondo" style={{background: color}}>

               <div className="programming">
                <p className="o">{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}C{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}H</p><br/>
                <p><span className="r">J</span>{tab}<span className="o">A</span>{tab}<span className="o">V</span>{tab}<span className="o">A</span>{tab}<span className="r">S</span>{tab}<span className="o">C</span>{tab}<span className="r">R</span>{tab}<span className="o">I{tab}P</span>{tab}<span className="r">T</span></p><br/>
                <p className="o">{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}S{tab}{tab}{tab}{tab}{tab}E{tab}{tab}{tab}{tab}{tab}{tab}M</p><br/>
                <p className="o">{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}A{tab}{tab}{tab}{tab}{tab}{tab}L</p><br/>
                <p className="o">{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}C</p><br/>
                <p className="o">{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}T</p><br/>
               </div>

                <div className="DA">
                    <h2 className="titulo">Previous Positions</h2><br/>
                    <img src={flecha} onClick={showing}></img><br/>
                    {/* esto lo desbloqueamos solo si queremos un botón que cambie la leyenda y no un icono <button onClick={showing}>{show ? 'Ocultar': 'Mostrar'}</button><br/>*/}
                    <ul style={{display: show ? 'block': 'none'}}>{listItems}</ul>
                </div>
                <footer>
                    <a href="https://drive.google.com/drive/folders/1PT6Kvuoa6uPW3uKzlpijKcf8ifyFYV6e?usp=sharing" target="_blank" rel="noreferrer"><p>More info</p></a>
                </footer>
                
                
                

                
                
                
            </div>
            </>
       
    )
}