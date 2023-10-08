import { useState } from 'react';
import './index.css'
import Alert from '../Alert';

const Formulario = ({msg, setMsgErr}) => {
  const [submit, setSubmit] = useState(false)
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [err, setError] = useState(false)

const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e);
    setSubmit(true);
if(nombre.trim() === "" || 
    pass !== confirmPass || 
    pass === "" || 
    pass.length < 6 || 
    !email.includes('@')){
    setError(true)
}   else {
    setError(false)
    setMsgErr('Excelente! Su registro ha sido exitoso')
    };
}
  return (
    <>
      <form onSubmit={handleSubmit} className="formulario" autoComplete='off'>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            placeholder='Nombre'
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder='tuemail@ejemplo.cl'
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="pass"
            placeholder='contraseña'
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="confirmPass"
            placeholder='Confirmar Contraseña'
            className="form-control"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </div>
        <button type="submit" className="btn btn-success btn-small">
          Enviar
        </button>
      </form>
      {submit === true ? <Alert msg={msg} /> : ""}
    </>
  );
};

export default Formulario;
