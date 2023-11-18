import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NotesApp from "./pages/NotesApp";
// import App from "./pages/App";

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
// root.render(<App />);
