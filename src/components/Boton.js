import React from "react";
import '../style/Boton.css'

// manejarClick = Función para EventListener
function Boton({texto, esBotonDeClick, manejarClick}) {
    return (
        //La clase se asigna dinámicamente utilizando el operador ternario y se usa un EventListener
        <button className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'} onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;