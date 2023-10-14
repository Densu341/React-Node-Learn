import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { blogList } from "../config/data";
import Chip from "../components/Elements/Chip";
import EmptyList from "../components/Elements/EmptyList";
import { Link } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link
        className="text-decoration-none text-xl text-purple-700 font-medium mb-8 d-block"
        to="/"
      >
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className="max-w-2xl mx-auto">
          <header className="text-center">
            <p className="text-sm text-gray-600 font-medium">
              Published {blog.createdAt}
            </p>
            <h1>{blog.title}</h1>
            <div className="flex justify-center">
              {blog.subCategory.map((category, i) => (
                <div key={i} className="m-4">
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt="cover" className="w-full" />
          <p className="p-4 mt-6">{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;
