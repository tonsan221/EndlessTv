import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import { AuthProvider } from './services/Auth'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Catalog from './components/Catalog'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/catalog" component={Catalog} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
