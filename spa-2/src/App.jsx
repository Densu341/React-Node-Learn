import { Routes, Route } from "react-router-dom";
import React from "react";
import { useTheme } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import ToggleTheme from "./components/ToggleTheme";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Archive from "./pages/Archive";
import Detail from "./pages/Detail";

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
    document.documentElement.setAttribute("data-theme", theme);

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
      <main className="px-4 mx-auto flex h-screen ">
        <div className="hidden md:block">{authedUser && <Sidebar />}</div>
        <Routes>
          {!authedUser && (
            <>
              <Route
                path="/*"
                element={<Login loginSuccess={onLoginSuccess} />}
              />
              <Route path="/register" element={<Register />} />
            </>
          )}
          {authedUser && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/note/:id" element={<Detail />} />
            </>
          )}
        </Routes>
      </main>
    </>
  );
};

export default App;
