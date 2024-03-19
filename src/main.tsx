import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const VITE_AUTH_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const VITE_AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={VITE_AUTH_DOMAIN}
      clientId={VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin + "/dot",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
