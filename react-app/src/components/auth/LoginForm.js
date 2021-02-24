import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../Store/session';
import './LoginForm.css';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await dispatch(login(email, password));
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <form className="loginForm" onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="loginForm__textField"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="loginForm__textField"
          value={password}
          onChange={updatePassword}
        />
        <button className="loginForm__button" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
