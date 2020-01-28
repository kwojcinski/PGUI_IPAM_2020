import React from "react";
import NavBar from "./components/public/NavBar";

// New - import the React Router components, and the Profile page component
import {Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import RegisterDevice from "./components/private/RegisterDevice";
import RegisterVLAN from "./components/private/RegisterVLAN";
import DefineNAT from "./components/private/DefineNAT";
import Profile from "./components/private/Profile";
import Homepage from "./components/public/Homepage";
import history from "./utils/history";

function App() {
  return (
      <div className="App">
        {/* Don't forget to include the history module */}
        <Router history={history}>

          <header>
            <NavBar/>
          </header>

          <main>
            <Switch>
              <Route path="/" exact render={Homepage}/>
              <PrivateRoute path="/profile" component={Profile}/>
              <PrivateRoute path="/registerDevice" component={RegisterDevice}/>
              <PrivateRoute path="/registerVLAN" component={RegisterVLAN}/>
              <PrivateRoute path="/defineNAT" component={DefineNAT}/>
            </Switch>
          </main>

        </Router>
      </div>
  );
}

export default App;