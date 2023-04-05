import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react'; // Importando hook

function App() {

  const [numClicks, setNumClicks] = useState(0);

  // Función que aumenta el valor del contador por cada click
  const manejarClick = () => {
    setNumClicks(numClicks + 1); 
  }

  // Función que reinicia el valor del contador
  const reiniciarContador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">

      <div className='contenedor-principal'>
        <Contador 
          numClicks = {numClicks}
        />
        <Boton 
          texto = 'Click'
          esBotonDeClick = {true}
          // Pasando función como prop
          manejarClick = {manejarClick}
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClick = {false}
          // Pasando función como prop
          manejarClick = {reiniciarContador}
        />
      </div>
      
    </div>
  );
}

export default App;
