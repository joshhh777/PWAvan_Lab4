import React, { useState} from 'react'

import "./css/app.css";

const App = () => {
  //save clicks of each button to its own state
  const [bueno, setBueno] = useState(0)
  const [normal, setNormal] = useState(0)
  const [malo, setMalo] = useState(0)

  

  const total = bueno + malo + normal
  const promedio = total / 3
  const positivo = (bueno*100)/total

  const clickbueno = () => {
    console.log("estoy haciendo click")
    setBueno(bueno +1)
    
  }

  const clicknormal = () => {
    console.log("estoy haciendo click") 
    setNormal(normal +1)   
   

  }

  const clickmalo = () => {
    console.log("estoy haciendo click")
    setMalo(malo +1)  
    

  }


  return (
    <div className="container">
      <h1 className="titulo" >TU OPINION IMPORTA</h1>
      <div className ="secbotones">
        <button className ="boton" onClick={clickbueno}> BUENO </button>
        <button className ="boton" onClick={clicknormal} >NORMAL </button>
        <button className ="boton" onClick={clickmalo}>MALO </button>
      </div>
      <div className="estadistica">
        <h2 className="textestadistica">Estadisticas</h2>
        <p className="textvoto">Votaciones de Bueno: {bueno}</p>
        <p className="textvoto">Votaciones de Normal: {normal}</p>
        <p className="textvoto">Votaciones de Malo: {malo}</p>
        <p className="textvoto">Total de Votos: {total}</p>
        <p className="textvoto">Promedio de Votos: {promedio}</p>
        <p className="textvoto">Votos Positivos: {positivo}%</p>
      </div>
    </div>
  )
}

export default App
