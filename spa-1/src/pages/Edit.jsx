import React, { useState } from "react";
import PropTypes from "prop-types";
import EditNote from "../components/EditNote";
import { getNote } from "../utils/local-data";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(getNote(id));

  const onEditHandler = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">Edit Note</h1>
      <EditNote
        note={note}
        onEditHandler={onEditHandler}
        onNoteUpdated={(updatedNote) => {
          setNote(updatedNote);
        }}
      />
    </div>
  );
};

Edit.propTypes = {
  id: PropTypes.string,
};

export default Edit;
