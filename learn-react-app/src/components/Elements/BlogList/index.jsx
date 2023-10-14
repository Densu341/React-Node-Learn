import React from "react";
import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mx-4">
      {blogs.map((blog) => (
        <BlogItem blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
