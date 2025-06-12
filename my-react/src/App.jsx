import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'

function App() {

  //Eventos y estado
  /***
   * 1. Crear la variable de estado
   * 2. Decidir donde visualizar esa variable
   * 3. Asociar el cambio a un evento
   * 4. Crear la funciona manejadora
   * 5. Dentro de esa función actualizar el estado.
   * 
   */

  const [contador, setContador] = useState(0); //let contador = 0;

  const handleClickAdd = () => {
    setContador(contador + 1)
  }
  const handleClickSubtract = () => {
    setContador(contador - 1)
  }
  const handleClickReset = () => {
    setContador(0)
  }

  // Ejercicio 2
  const [message, setMessage] = useState('Tienes activado el Light Mode');

  const handleClickMode = () => {
    const body = document.querySelector('body');
    body.classList.toggle('darkMode');
    if (message == 'Tienes activado el Light Mode') {
      setMessage('Tienes activado el Dark Mode');
    } else {
      setMessage('Tienes activado el Light Mode');
    }
  }

  // Ejercicio 3
  const handleClickShowMenu = () => {
    
  }



  return (
    <>
    <div>
      <i class="fa-solid fa-bars" onClick={handleClickShowMenu}></i>
      <div className=''>
      <i class="fa-solid fa-arrow-left"></i>
        <ul>
          <li>home</li>
          <li>capitulo 1</li>
          <li>capitulo 2</li>
        </ul>
      </div>
    </div>

    <h1>Hola</h1>
    <h2>Subtitle</h2>
      
      <div>
        <p>Contador: {contador}</p>
        <button onClick={handleClickAdd}>Incrementar</button>
        <button onClick={handleClickSubtract}>Restar</button>
        <button onClick={handleClickReset}>Reset</button>
      </div>

      <div>
        <button onClick={handleClickMode}>Des/activar Dark Mode</button>
        <p>{message}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quam sunt officiis nobis enim amet unde earum voluptas perferendis, quo laborum ea eos incidunt voluptates laboriosam iusto. Nobis, placeat quidem?</p>
      </div>

    </>
  )
}

export default App
