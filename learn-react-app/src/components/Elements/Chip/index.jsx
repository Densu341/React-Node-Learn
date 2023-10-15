import React from "react";

const Chip = ({ label }) => (
  <p className="text-sm bg-gradient-to-tr from-purple-700 to-purple-400 text-white rounded-md py-1 px-2 w-fit text-uppercase">
    {label}
  </p>
);

export default Chip;
