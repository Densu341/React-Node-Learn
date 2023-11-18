import React, { useState } from "react";
// import './styles.css'; // Import file CSS

const initialData = [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: "2022-04-14T04:27:34.572Z",
  },
];

const App = () => {
  const [notes, setNotes] = useState(initialData);
  const [newNote, setNewNote] = useState({
    id: +new Date(),
    title: "",
    body: "",
    archived: false,
    createdAt: new Date().toISOString(),
  });
  const [searchKeyword, setSearchKeyword] = useState("");

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

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  const handleTitleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 50) {
      setNewNote({ ...newNote, title: inputValue });
    }
  };

  const characterCount = 50 - newNote.title.length;

  const filteredActiveNotes = notes.filter(
    (note) =>
      !note.archived &&
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const filteredArchivedNotes = notes.filter(
    (note) =>
      note.archived &&
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <h1>Aplikasi Catatan Pribadi</h1>

      <input
        type="text"
        placeholder="Cari catatan..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      <div className="active-notes">
        <h2>Catatan Aktif</h2>
        {filteredActiveNotes.length === 0 ? (
          <p className="no-notes">Tidak ada catatan aktif</p>
        ) : (
          <ul>
            {filteredActiveNotes.map((note) => (
              <li key={note.id}>
                <div className="card">
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <p>Created At: {note.createdAt}</p>
                  <button onClick={() => deleteNote(note.id)}>Hapus</button>
                  <button onClick={() => archiveNote(note.id)}>Arsipkan</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="archived-notes">
        <h2>Catatan Diarsipkan</h2>
        {filteredArchivedNotes.length === 0 ? (
          <p className="no-notes">Tidak ada catatan diarsipkan</p>
        ) : (
          <ul>
            {filteredArchivedNotes.map((note) => (
              <li key={note.id}>
                <div className="card archived">
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                  <p>Created At: {note.createdAt}</p>
                  <button onClick={() => deleteNote(note.id)}>Hapus</button>
                  <button onClick={() => archiveNote(note.id)}>
                    Kembalikan
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2>Tambah Catatan Baru</h2>
      <form>
        <label>
          Judul:
          <input
            type="text"
            value={newNote.title}
            onChange={handleTitleChange}
          />
          <span className="character-count">
            {characterCount} karakter tersisa
          </span>
        </label>

        <label>
          Isi:
          <textarea
            value={newNote.body}
            onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
          />
        </label>

        <button type="button" onClick={addNote}>
          Tambah Catatan
        </button>
      </form>
    </div>
  );
};

export default App;
