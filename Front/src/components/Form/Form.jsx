
import styled from './Form.module.css'
  
import React, { useState } from 'react';


const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Aquí puedes agregar la lógica de envío de datos de inicio de sesión
  };

  return (
    <div className={styled.conteiner}>
      <div className={styled.element}>
        <label className={styled.user}>Username: </label>
        <input
          className={styled.inttext}
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <label className={styled.pass}>Password: </label>
        <input
          className={styled.inpass}
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className={styled.login} onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Form;
