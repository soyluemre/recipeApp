import "./App.css";
import AppRouter from "../src/router/AppRouter";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/globalStyles/theme";
import { useState } from "react";
import { LoginContext } from "./context/LoginContext";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(false);
  return (
    <LoginContext.Provider value={{ login, setLogin, user, setUser }}>
      <ThemeProvider theme={theme}>
        <AppRouter props={{ login, setLogin }} />
      </ThemeProvider>
    </LoginContext.Provider>
  );
}

export default App;
