import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import NoteApp from "./pages/note_app";

const root = createRoot(document.getElementById("root"));
root.render(<NoteApp />);
