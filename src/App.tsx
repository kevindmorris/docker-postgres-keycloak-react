import { useKeycloak } from "@react-keycloak/web";
import "./App.css";

function App() {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized)
    return (
      <div>
        <p>The authentication service is not connected.</p>
      </div>
    );

  return (
    <div>
      {!!keycloak.authenticated ? (
        <><p>Hello, {keycloak.tokenParsed?.given_name}!</p>
        <button type="button" onClick={() => keycloak.logout()}>
          Sign Out
        </button></>
      ) : (
        <button type="button" onClick={() => keycloak.login()}>
          Sign In
        </button>
      )}
    </div>
  );
}

export default App;
