import React from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Header from '../components/Header';
import Information from '../utils/Information';

function Inicio (){
  return (
    <>
    <Header/>
    <Home/>
    <Information></Information>
    <Footer/>
    </>
  );
};
export default Inicio;


