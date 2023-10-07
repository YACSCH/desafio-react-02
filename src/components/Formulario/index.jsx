import { useState } from 'react';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  
  
  return (
    <>
      <form >
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
    </>
  );
};

export default Formulario;
