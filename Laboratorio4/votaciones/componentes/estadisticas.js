import React, { Component } from 'react';


const Estadisticas = (props) =>{
  return(
    <div className="estadistica">
    <h2 className="textestadistica">Estadisticas</h2>
    <p className="textvoto">Votaciones de Bueno: {props.bueno}</p>
    <p className="textvoto">Votaciones de Normal: {props.normal}</p>
    <p className="textvoto">Votaciones de Malo: {props.malo}</p>
    <p className="textvoto">Total de Votos: {props.total}</p>
    <p className="textvoto">Promedio de Votos: {props.promedio}</p>
    <p className="textvoto">Votos Positivos: {props.positivo}%</p>
  </div>
  )
}

export default Estadisticas