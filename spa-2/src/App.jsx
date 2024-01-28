import { Routes, Route } from "react-router-dom";
import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import ToggleTheme from "./components/ToggleTheme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = () => {
  const { theme } = useTheme();
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute("isDark", theme);

    if (initializing) {
      const fetchData = async () => {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      };

      fetchData();
    }
  }, [theme, initializing]);

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken("");
  };

  if (initializing) {
    return null;
  }

  return (
    <>
      <header className="py-4">
        {authedUser === null ? (
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">Notes App</h1>
            <ToggleTheme />
          </nav>
        ) : (
          <Navigation logout={onLogout} name={authedUser.name} />
        )}
      </header>
      <main>
        <Routes>
          <Route
            path="/*"
            element={
              authedUser === null ? (
                <Login loginSuccess={onLoginSuccess} />
              ) : (
                <Home />
              )
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
