import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import firebase_config from "./config/firebase_config.json";
import { Auth0Provider } from "./auth/react-auth0-spa";
import auth_config from "./config/auth_config.json";
import history from "./utils/history";
import './index.css'


// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Auth0Provider
    domain={auth_config.domain}
    client_id={auth_config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
