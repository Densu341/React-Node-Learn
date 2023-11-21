import React from "react";
import Card from "../Card";

const NoteList = ({ notes, deleteNote, archiveNote, searchKeyword }) => {
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
      <h2>Catatan Aktif</h2>
      <div className="note-list">
        {filteredActiveNotes.length === 0 ? (
          <p className="no-notes">Tidak ada catatan aktif</p>
        ) : (
          <>
            {filteredActiveNotes.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            ))}
          </>
        )}
      </div>
      <h2>Catatan Arsip</h2>
      <div className="note-list">
        {filteredArchivedNotes.length === 0 ? (
          <p className="no-notes">Tidak ada catatan arsip</p>
        ) : (
          <>
            {filteredArchivedNotes.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
                archived={note.archived}
                createdAt={note.createdAt}
                deleteNote={deleteNote}
                archiveNote={archiveNote}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default NoteList;
