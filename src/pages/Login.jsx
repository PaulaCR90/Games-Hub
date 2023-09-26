import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Buttons/Button";
import "./Login.css";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate(); // Utiliza useNavigate para acceder a la navegación

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleButtonClick = () => {
    if (password === "Luigi") {
      // Navegar a la página de inicio si la contraseña es correcta
      navigate("/home"); // Utiliza navigate para redirigir a la ruta "/home"
    } else {
      // Mostrar la alerta si la contraseña es incorrecta
      setShowAlert(true);
    }
  };

  return (
    <article className="login-article">
      <section className="login-section">
        <h3>Welcome!</h3>
        <img
          className="login-img"
          src="./assets/login.png"
          alt="Mario picture"
        />
        <h4 className="login">Please, enter the password to continue.</h4>
        <input
          className="user"
          placeholder="Nickname here"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <input
          className="password"
          placeholder="password"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text={"Submit"} onClick={handleButtonClick} />
        {showAlert && <div className="alert">⛔ Incorrect password</div>}
      </section>
    </article>
  );
};

export default Login;
