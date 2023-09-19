import React from "react";
import { imageSources, categories } from "../data/data";

function Portfolio() {
  return (
    <div className="py-4" id="portfolio">
      <div className="flex items-center justify-center md:py-8 flex-wrap py-4">
        {categories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`${
              index === 0
                ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                : "text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300"
            } rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 ${
              index > 0 ? "dark:text-white dark:focus:ring-gray-800" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 justify-items-center">
        {imageSources.map((src, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
