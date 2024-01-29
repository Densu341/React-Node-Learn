import React from "react";
import showFormattedDate from "../../utils/date";
import PropTypes from "prop-types";

const ReadNote = ({ title, createdAt, body }) => {
  console.log("title:", title);
  console.log("createdAt:", createdAt);
  console.log("body:", body);
  if (!title || !createdAt || !body) {
    return (
      <div className="card__content text-dark p-4">
        <p>Data catatan tidak lengkap.</p>
      </div>
    );
  }

  return (
    <div className="card__content text-dark p-4">
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="text-sm font-semibold text-primary">
        {showFormattedDate(createdAt)}
      </p>
      <p className="text-sm">{body}</p>
    </div>
  );
};

ReadNote.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  body: PropTypes.string,
};

export default ReadNote;
