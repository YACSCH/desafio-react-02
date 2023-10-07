import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);

  const validate = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || pass === "" || confirmPass === "") {
      setError(true);
      return;
    }
    setError(false);
    setNombre("");
    setEmail("");
    setPass("");
    setPassConfirm("");
  };
  if (!(pass === confirmPass)) {
    setError(true);
    return;
  }
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  if (!regex.test(email)) {
    onSubmit('danger', 'Por favor, ingrese un correo electrónico válido.');
    return false;
  }
  return (
    <>
      <form onSubmit={validate}>
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
        <button type="submit" className="btn btn-success w-100">
          Enviar
        </button>
      </form>
     
    </>
  );
};

export default Formulario;
