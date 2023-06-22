import React from 'react';
import casita from '../assets/image/casa.png';
import exito from '../assets/image/exito.png';
import grafica from '../assets/image/grafico.png';
import imagen from '../assets/image/imagen.png';


function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-100">
      <div className="flex justify-center items-center p-4">
        <img src={casita} alt="" className="w-8 h-8 mr-36"/>
        <img src={exito} alt="" className="w-8 h-8 mr-36"/>
        <img src={grafica} alt="" className="w-8 h-8 mr-36"/>
        <img src={imagen} alt="" className="w-8 h-8"/>
      </div>
    </footer>
  );
}

export default Footer;

