import React from "react";
import { showFormattedDate } from "../../utils/index";
import PropTypes from "prop-types";

const ReadNote = ({ title, body, createdAt }) => {
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
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ReadNote;
