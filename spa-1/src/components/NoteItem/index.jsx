import React from "react";
import { showFormattedDate } from "../../utils/index";

const NoteItem = ({ notes }) => {
  return (
    <div className="flex items-center">
      <div className="bg-white w-full rounded-lg">
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
        <div className="card__content text-dark p-4">
          <h1 className="text-lg font-bold">{notes.title}</h1>
          <p className="text-sm font-semibold text-primary">
            {showFormattedDate(notes.createdAt)}
          </p>
          <p className="text-sm">{notes.slug}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
