import React from "react";
import { Link } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";

function Error() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
          Something's missing.
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 ">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.{" "}
        </p>
        <Link
          to="/"
          className="inline-flex text-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center  my-4 hover:text-gray-900"
        >
          <GrFormPreviousLink className="mx-2" /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}

export default Error;
