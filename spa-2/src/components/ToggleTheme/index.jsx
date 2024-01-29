// import React, { useContext } from "react";
// import ThemeContext from "../../contexts/ThemeContext";

// const ToggleTheme = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       className={`text-slate-600  px-4 py-2 rounded-md hover:bg-${theme}-700`}
//     >
//       {theme === "light" ? <FaMoon /> : <FaSun />}
//     </button>
//   );
// };

// export default ToggleTheme;
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button onClick={handleToggle}>
      {theme === "dark" ? (
        <FaMoon size={20} className="text-gray-100" />
      ) : (
        <FaSun size={20} />
      )}
    </button>
  );
};

export default ToggleTheme;
