import React from "react";
import Navbar from "../components/Navbar";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";

function NotesApp() {
  return (
    <div>
      <Navbar />
      <AddNote />
      <NoteList />
    </div>
  );
}

export default NotesApp;
