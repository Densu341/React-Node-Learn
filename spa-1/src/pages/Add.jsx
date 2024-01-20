import React from "react";
import AddNote from "../components/AddNote";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Add = () => {
  const navigate = useNavigate();
  const handleNoteAdded = (note) => {
    addNote(note);
    navigate("/");
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">Add Note</h1>
      <AddNote onNoteAdded={handleNoteAdded} />
    </div>
  );
};

Add.propTypes = {
  onNoteAdded: PropTypes.func,
  note: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    archived: PropTypes.bool,
    id: PropTypes.string,
  }),
};

export default Add;
