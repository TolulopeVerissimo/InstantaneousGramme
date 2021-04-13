import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { restoreUser } from '../../Store/session'
import { signUp } from '../../services/auth';
import './signup.css'

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const dispatch = useDispatch()
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
        await dispatch(restoreUser())
        setAuthenticated(true);
        loginRedirect()
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
    <div id="signup-wrapper">
      <div className="signUpForm">
        <form
          onSubmit={onSignUp}>
          <h2 className="signUpForm__title">SIGN UP</h2>
          <div>
            <label></label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label></label>
            <input
              type="password"
              name="repeat_password"
              placeholder="Confirm Password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button className="signUpForm__submit" type="submit">Sign Up</button>
        </form>
        <div className="logincontainer">
          <span>Already have an account? </span>
          <span onClick={loginRedirect} style={{ cursor: 'pointer', color: '#0095f6' }}>Log In </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
