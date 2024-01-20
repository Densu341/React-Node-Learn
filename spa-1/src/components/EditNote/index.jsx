import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ButtonAction from "../ButtonAction";
import { editNote } from "../../utils/local-data";

const EditNote = ({ onEditHandler, note }) => {
  const [editedNote, setEditedNote] = useState({
    id: note.id,
    title: note.title,
    body: note.body,
  });

  useEffect(() => {
    setEditedNote({
      id: note.id,
      title: note.title,
      body: note.body,
    });
  }, [note]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedNote((prevNote) => {
      const updatedNote = { ...prevNote, [name]: value };
      return updatedNote;
    });
  };

  const handleEditNote = (event) => {
    event.preventDefault();
    editNote(editedNote);
    onEditHandler();
  };

  return (
    <div className="flex flex-col">
      <div className=" bg-white rounded-lg shadow-md p-6">
        <form className="flex flex-col w-full" onSubmit={handleEditNote}>
          <input
            type="text"
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Notes Title..."
          />
          <textarea
            name="body"
            value={editedNote.body}
            onChange={handleChange}
            className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Notes Description..."
            rows="10"
          ></textarea>

          <ButtonAction type="submit" style="save">
            Update Note
          </ButtonAction>
        </form>
      </div>
    </div>
  );
};

EditNote.propTypes = {
  onEditHandler: PropTypes.func,
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default EditNote;
