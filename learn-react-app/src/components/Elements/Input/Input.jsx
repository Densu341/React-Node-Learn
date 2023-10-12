import React from "react";
export const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};
