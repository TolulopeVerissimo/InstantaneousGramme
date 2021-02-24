import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
// import Home from './components/Home'
import Splash from "./components/SplashPage";
// import Profile from './components/ProfilePage'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingPage from "./components/LandingPage";

import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* <SmoothProvider skew={false}> */}
      <BrowserRouter>
        {authenticated && <NavBar setAuthenticated={setAuthenticated} />}

        <Switch>
          <Route path='/' exact={true}>
            {authenticated && <LandingPage />}
            {!authenticated && (
              <Splash
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            )}
            {/* <Route path="/profile" User={User} UsersList={UsersList}>
              {authenticated && <Profile />}
              {!authenticated && <Splash authenticated={authenticated}
                setAuthenticated={setAuthenticated} />}
            </Route> */}
            {/*             {authenticated && <Home />}
            {!authenticated && <Splash authenticated={authenticated}
              setAuthenticated={setAuthenticated} />}
            <Route path="/profile" User={User} UsersList={UsersList}>
              {authenticated && <Profile />}
              {!authenticated && <Splash authenticated={authenticated}
                setAuthenticated={setAuthenticated} />}
            </Route> */}
          </Route>
          <Route path='/sign-up' exact={true}>
            <SignUpForm
              // authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <ProtectedRoute
            path='/users'
            exact={true}
            authenticated={authenticated}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path='/users/:userId'
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path='/' exact={true} authenticated={authenticated}>
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
      {/* <SmoothProvider skew={false}/> */}
    </>
  );
}

export default App;
