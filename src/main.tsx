import { ReactKeycloakProvider } from "@react-keycloak/web";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { keycloakInstance } from "./lib";

createRoot(document.getElementById("root")!).render(
  <ReactKeycloakProvider
    authClient={keycloakInstance}
    LoadingComponent={<div>Loading...</div>}
  >
    <App />
  </ReactKeycloakProvider>
);
