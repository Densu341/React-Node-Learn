import React from "react";
import PropTypes from "prop-types";
import NotesItem from "../NoteItem";

function NotesList({ notes }) {
  return (
    <>
      <h2 className="text-lg font-semibold py-4">Daftar Catatan</h2>
      {notes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 justify-between w-full">
          {notes.map((note) => (
            <NotesItem key={note.id} id={note.id} {...note} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3 className="text-lg">Tidak ada list catatan</h3>
        </div>
      )}
    </>
  );
}

NotesList.propType = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
