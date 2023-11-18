import React, { useState } from "react";
import { getInitialData } from "../../utils";

const NoteList = () => {
  const [notes, setNotes] = useState(getInitialData());

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
    <div className="container">
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
    </div>
  );
};

export default NoteList;
