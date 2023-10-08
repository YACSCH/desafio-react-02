import { useState } from 'react';
import './App.css'
import Registro from './components/Registro'



function App() {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('')
  

  return (
    <>
      <Registro 
        error = { error }
        setError = { setError }  
        message = { message }
        setMessage = { setMessage }  
        color = { color }
        setColor= { setColor }  
       
      />
    </>
  )
}

export default App
