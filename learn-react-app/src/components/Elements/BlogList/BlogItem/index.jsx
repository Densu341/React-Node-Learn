import React from "react";
import { Link } from "react-router-dom";
import Chip from "../../Chip";

const BlogItem = ({
  blog: {
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    cover,
    category,
    id,
  },
}) => {
  return (
    <div className="flex flex-col">
      <img
        className="w-full h-64 object-cover rounded-3xl mb-2"
        src={cover}
        alt="cover"
      />
      <Chip label={category} />
      <h3 className="mx-0 my-2 flex-1">{title}</h3>
      <p className="relative max-h-12 overflow-hidden pe-2 text-xs text-blue-400">
        <div class="absolute bottom-0 right-0"></div>
        {description}
      </p>
      <footer className="flex items-center justify-between mt-4">
        <div className="flex items-center">
          <img
            src={authorAvatar}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover mr-2 shadow-lg"
          />
          <div>
            <h6>{authorName}</h6>
            <p className="text-xs text-blue-400 font-semibold">{createdAt}</p>
          </div>
        </div>
        <Link className="text-decoration-none text-inherit" to={`/blog/${id}`}>
          ➝
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
