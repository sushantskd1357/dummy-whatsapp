import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import Settings from '../src/settings/pages/Settings';
import MainNavigation from '../src/shared/components/Navigation/MainNavigation';
import Auth from '../src/user/pages/Auth';
import NewChat from '../src/chats/pages/NewChat';
import { AuthContext } from './shared/context/auth-context';
import UpdateUser from '../src/settings/components/UpdateUser';
// import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true)
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false)
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <React.Fragment>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/chats" exact>
          <NewChat />
        </Route>
        <Route path="/settings" exact>
          <Settings />
        </Route>
        <Route path="/settings/profile" exact>
          <UpdateUser />
        </Route>
        <Route path="/signout" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </React.Fragment>
    );
  } else {
    routes = (
      <Route path="/">
        <Auth />
      </Route>
    )
  }

  return (
    <AuthContext.Provider 
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          {routes}
        </Switch>
      </main>
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
