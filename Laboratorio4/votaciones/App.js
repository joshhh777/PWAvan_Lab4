import React, { useState} from 'react'

import "./css/app.css";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div className="container">
      <h1 className="titulo" >TU OPINION IMPORTA</h1>
      <div className ="secbotones">
        <button className ="boton" > BUENO</button>
        <button className ="boton"  >MEDIO </button>
        <button className ="boton" >MALO </button>
      </div>
      <div className="estadistica">
        <h2 className="textestadistica">Estadisticas</h2>
        <p className="textvoto">Votaciones de Bueno</p>
        <p className="textvoto">Votaciones de Medio</p>
        <p className="textvoto">Votaciones de Malo</p>
      </div>
    </div>
  )
}

export default App
