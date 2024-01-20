import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonAction from "../ButtonAction";

const AddNote = ({ onNoteAdded }) => {
  const [note, setNote] = useState({ title: "", body: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleAddNote = (event) => {
    event.preventDefault();

    const { title, body } = note;

    if (title && body) {
      const newNote = {
        id: `notes-${Date.now()}`,
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      onNoteAdded(newNote);
      setNote({ title: "", body: "" });
    }
  };

  return (
    <div className="flex flex-col">
      <div className=" bg-white rounded-lg shadow-md p-6">
        <form className="flex flex-col" onSubmit={handleAddNote}>
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Notes Title..."
          />
          <textarea
            name="body"
            value={note.body}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Notes Description..."
            rows="10"
          ></textarea>

          <ButtonAction type="submit" style={"save"}>
            Save Note
          </ButtonAction>
        </form>
      </div>
    </div>
  );
};

AddNote.propTypes = {
  onNoteAdded: PropTypes.func,
};

export default AddNote;
