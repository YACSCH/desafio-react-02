import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'

function App() {
  const [msgErr, setMsgErr] = useState('Error! Todos los campos son obligatorios');
  return (
    <>
      <Registro msgErr={msgErr} error={setMsgErr}/>
    </>
  )
}

export default App;
