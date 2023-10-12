import React from "react";
import './Experience.css';
import { useState,useEffect } from "react";
import flecha from '../Imagenes/flecha-down.png' ;

export default function Experience(){

    const [color,setColor]=useState('#a317d2');
    const [show,setShow] = useState(false);
    const [show2,setShow2] = useState(false);

    
        useEffect(()=>{
            function onMouseMove(evento){
                if(evento.clientX < window.innerWidth / 2){
                    setColor('rgb(76, 233, 212)');
                }else{
                    setColor('#a317d2');
                }
            }
    
            window.addEventListener('mousemove',onMouseMove);
        },[]);

        const showing = () =>{
            setShow(!show);
        }

        const showing2 = () =>{
            setShow2(!show2);
        }
        
        const lista = ['Data analysis for new developments in Latin America',
        'Make sure features are released quickly, hassle-free and with quality',
        'Spread knowledge of features for our internal clients',
        'Identify and report bugs from our product to global product teams',
        'Management of product projects launched globally'];
        const listItems = lista.map(cosa => <li>{cosa}</li> );

        const lista2 = ['Customer Support Mexico & LATAM at Doctoralia','Customer Success Senior at Doctoralia','Customer Experience Senior at Cabify'];
        const listItems2 = lista2.map(cosa => <li>{cosa}</li> );

        const tab = '\u00A0';
        
    return(
        <div className="main">
            
            <div className="circulo"></div>
            <div className="linea"></div>
            
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
                    <h2 className="titulo">Product Expert Senior at Doctoralia</h2><br/>
                    <img src={flecha} onClick={showing}></img><br/>
                    {/* esto lo desbloqueamos solo si queremos un botón que cambie la leyenda y no un icono <button onClick={showing}>{show ? 'Ocultar': 'Mostrar'}</button><br/>*/}
                    <ul style={{display: show ? 'block': 'none'}}>{listItems}</ul>
                </div>
                

                <div className="DA-2">
                    <h2 className="titulo">More Jobs</h2><br/>
                    <img src={flecha} onClick={showing2}></img><br/>
                    <ul style={{display: show2 ? 'block': 'none'}}>{listItems2}</ul>
                </div>
                

            </div>
        </div>
       
    )
}