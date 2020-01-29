import React from "react";

// New - import the React Router components, and the Profile page component
import {Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import RegisterDevice from "./components/private/RegisterDevice";
import VLANPage from "./components/private/vlan/VLANPage";
import DefineNAT from "./components/private/DefineNAT";
import Profile from "./components/private/Profile";
import Homepage from "./components/public/Homepage";
import NavBar from "./components/public/NavBar";
import history from "./utils/history";

class App extends React.Component {

  render() {
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
                <PrivateRoute path="/registerVLAN" component={VLANPage}/>
                <PrivateRoute path="/defineNAT" component={DefineNAT}/>
              </Switch>
            </main>

          </Router>
        </div>
    );
  }

}

export default App;