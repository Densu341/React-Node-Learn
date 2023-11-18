import React, { useState } from "react";

const AddNote = () => {
  const [newNote, setNewNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    archived: false,
    createdAt: new Date().toISOString(),
  });

  const addNote = () => {
    if (newNote.title.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote({
        id: +new Date(),
        title: "",
        body: "",
        archived: false,
        createdAt: new Date().toISOString(),
      });
    }
  };

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setNewNote({ ...newNote, title: inputValue });
    }
  };

  const characterCount = 50 - newNote.title.length;

  return (
    <div className="container">
      <h2>Tambah Catatan Baru</h2>
      <form className="add-note-form">
        <span className="character-count">
          {characterCount} karakter tersisa
        </span>
        <input
          className="title-input"
          type="text"
          value={newNote.title}
          onChange={handleTitleChange}
          placeholder="Judul Catatan"
        />

        <textarea
          className="body-input"
          value={newNote.body}
          onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
          placeholder="Isi Catatan"
        />

        <button type="button" onClick={addNote}>
          Tambah Catatan
        </button>
      </form>
    </div>
  );
};

export default AddNote;
