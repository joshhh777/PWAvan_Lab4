import React, { useState} from 'react';
import Estadisticas from './componentes/estadisticas';
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
      <Estadisticas bueno={bueno} normal={normal} malo={malo} promedio={promedio} total={total} positivo={positivo}/>
    </div>
  )
}

export default App
