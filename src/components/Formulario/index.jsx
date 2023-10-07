import { useState } from "react";

const Formulario = ({ setError, setMessage, setColor }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  

  const validate = (e) => {
    e.preventDefault();
     
    if (nombre === "" || email === "" || pass === "" || confirmPass === "") {
      setError(true);
      setMessage('Favor Completar todos los campos')
      setColor("alert alert-danger")
      return;
    }
    if (pass !== confirmPass) {
      setError(true);
      setMessage('Las contraseñas deben ser iguales!!!!!')
      setColor("alert alert-danger")
      return;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError(true);
      setMessage('Email no Valido!!!!!')
      setColor("alert alert-danger")
      return;
    }

    setError(false);
    /* setNombre('');
    setEmail('');
    setPass('');
    setConfirmPass(''); */
    setMessage('Todos los campos completados Correctamente!!!!!')
    setColor("alert alert-success")
    


  };
  

  return (
    <>
      <form onSubmit={validate} className="mt-2">
        <div className="form-group mb-2">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            name="email"
            placeholder="tuemail@ejemplo.cl"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group  mb-2">
          <input
            type="text"
            name="pass"
            placeholder="contraseña"
            className="form-control"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div className="form-group  mb-2">
          <input
            type="text"
            name="confirmPass"
            placeholder="Confirmar Contraseña"
            className="form-control"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 mb-3">
          Enviar
        </button>
      </form>
      
    </>
  );
};

export default Formulario;
