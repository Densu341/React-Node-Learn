import React from "react";
import Button from "../Button";

const Card = ({
  id,
  title,
  body,
  archived,
  createdAt,
  deleteNote,
  archiveNote,
}) => {
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="note-item">
      <div className="body">
        <h3>{title}</h3>
        <h5>{formattedDate}</h5>
        <p>{body}</p>
      </div>
      <div className="footer">
        <Button variant="delete" onClick={() => deleteNote(id)}>
          Hapus
        </Button>
        <Button variant="archive" onClick={() => archiveNote(id)}>
          {archived ? "Aktifkan" : "Arsipkan"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
