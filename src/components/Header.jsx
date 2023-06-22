import React from 'react';
import agua from "../assets/image/AGUA.png";

function Header() {
  return (
    <header className="w-screen h-16 bg-gray-100 flex items-start">
    <div className="flex items-center">
        <img className="w-10 h-10 ml-16" src={agua} alt="" />
        <h3 className="ml-2 text-black">Aguitas Bien</h3>
    </div>
    </header>

  );
}

export default Header;
