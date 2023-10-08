import { useState } from "react";
import "./index.css";
import Alert from "../Alert";

const Formulario = ({ msg, setMsgErr }) => {
  const [submit, setSubmit] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [err, setError] = useState(false);
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    setSubmit(true);
    if (nombre === "" || email === "" || pass === "" || confirmPass === "") {
      setError(true);
      setMsgErr("Error! Todos los campos son obligatorios");
      setColor("alert alert-danger");
      return;
    }
    if (pass !== confirmPass) {
      setError(true);
      setMsgErr("Error! Las contraseñas deben ser iguales");
      setColor("alert alert-danger");
      return;
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/;

    if (!emailRegex.test(email)) {
      setError(true);
      setMsgErr("Error! Mail no valido!!!!!!!");
      setColor("alert alert-danger");
      return;
    }
      setError(false);
      setMsgErr("Excelente! Su registro ha sido exitoso");
      setColor("alert alert-success");
    
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="formulario" autoComplete="off">
        <div className="form-group">
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

      {submit === true ? <Alert msg={msg} color={color} /> : ""}
    </>
  );
};

export default Formulario;
