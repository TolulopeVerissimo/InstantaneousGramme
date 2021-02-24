import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


import { Redirect } from 'react-router-dom';
import { signUp } from '../../services/auth';
import './signup.css'

const SignUpForm = ({ authenticated, setAuthenticated }) => {

  let history = useHistory()
  const loginRedirect = () => {
    history.push('/')
  }
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(name, username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }


  return (
    <>
      <div className="signUpForm">
        <form
          onSubmit={onSignUp}>
          <h2>SIGN UP</h2>
          <div>
            <label></label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              name="repeat_password"
              placeholder="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className="signUpForm__submit" type="submit">Sign Up</button>
        </form>
        <div className="login">
          <span>Don't have an account? </span>
          <span onClick={loginRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Log In </span>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
