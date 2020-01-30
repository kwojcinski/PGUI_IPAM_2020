import React from "react";

// New - import the React Router components, and the NetworkManagement page component
import {Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./components/private/PrivateRoute";
import NetworkManagement from "./components/private/networkManagement/NetworkManagement";
import Homepage from "./components/public/Homepage";
import NavBar from "./components/public/NavBar";
import history from "./utils/history";

class App extends React.Component {

  render() {
    return (
        <div className="App">
          <Router history={history}>

            <header>
              <NavBar/>
            </header>

            <main>
              <Switch>
                <Route path="/" exact render={Homepage}/>
                <PrivateRoute path="/network" component={NetworkManagement}/>
              </Switch>
            </main>

          </Router>
        </div>
    );
  }

}

export default App;