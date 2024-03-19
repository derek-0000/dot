import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AuthGuard from "./guards/AuthGuard";
import Header from "./components/Header";
import "./App.css";

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<button onClick={() => loginWithRedirect()}>Login</button>}
        />
        <Route
          path="/dot"
          element={
            <AuthGuard>
              <Header />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
