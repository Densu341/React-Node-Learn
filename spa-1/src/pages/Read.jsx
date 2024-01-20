import React, { useEffect, useState } from "react";
import ReadNote from "../components/ReadNote";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import ButtonAction from "../components/ButtonAction";

const Read = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(getNote(id));

  useEffect(() => {
    setNote(getNote(id));
    return () => setNote(null);
  }, [id]);

  const onEditHandler = () => {
    navigate(`/edit/${note.id}`);
  };

  const onArchiveNoteHandler = () => {
    archiveNote(id);
    navigate("/");
  };

  const onUnArchiveNoteHandler = () => {
    unarchiveNote(id);
    navigate("/archived");
  };

  const onDeleteNoteHandler = () => {
    deleteNote(id);
    navigate("/");
  };

  return (
    <div className="flex items-center">
      <div className="bg-white w-full rounded-lg mt-4">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
          </div>
        </div>
        <ReadNote {...note} />
        <ButtonAction style="edit" onClick={onEditHandler}>
          Edit
        </ButtonAction>
        {note.archived ? (
          <ButtonAction style="unarchive" onClick={onUnArchiveNoteHandler}>
            Unarchive
          </ButtonAction>
        ) : (
          <ButtonAction style="archive" onClick={onArchiveNoteHandler}>
            Archive
          </ButtonAction>
        )}
        <ButtonAction style="delete" onClick={onDeleteNoteHandler}>
          Delete
        </ButtonAction>
      </div>
    </div>
  );
};

export default Read;
