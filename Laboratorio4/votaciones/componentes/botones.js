import React, { Component } from 'react';


const Botones = (props) =>{
  return(
    <div className ="secbotones">
    <button className ="boton" onClick={props.clickbueno}> BUENO </button>
    <button className ="boton" onClick={props.clicknormal} >NORMAL </button>
    <button className ="boton" onClick={props.clickmalo}>MALO </button>
  </div>
  )
}

export default Botones