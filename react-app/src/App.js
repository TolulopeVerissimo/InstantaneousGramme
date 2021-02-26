import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
// import Home from './components/Home'
import Splash from "./components/SplashPage";
import Profile from './components/ProfilePage'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import LandingPage from "./components/LandingPage";
import { useDispatch } from "react-redux";
import { restoreUser } from "./Store/session";
import FollowUser from "./components/FollowUser";
import { getUsers } from "./Store/user";

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUser())
      const users = await dispatch(getUsers())
      // const user = await authenticate()
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

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
            {authenticated && <LandingPage authenticated={authenticated} />}
            {!authenticated && (
              <Splash
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            )}


          </Route>
          <ProtectedRoute path="/profile/:id" exact={true} authenticated={authenticated}>
            <Profile />
          </ProtectedRoute>
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
          <Route path="/followUserTest/:id" >
            <FollowUser />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <SmoothProvider skew={false}/> */}
    </>
  );
}

export default App;
