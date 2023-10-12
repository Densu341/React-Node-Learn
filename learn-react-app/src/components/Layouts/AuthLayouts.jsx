import React from "react";
import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center bg-slate-700 h-screen items-center flex-col">
      <div className="w-full max-w-xs">
        {/* form login */}
        <h1 className="text-white text-3xl font-bold mb-2 text-center">
          {title}
        </h1>
        <p className="text-slate-200 font-medium text-center mb-2">
          Welcome to the Roemah Djogja
        </p>
        {children}
      </div>
      <div className="flex items-center justify-center mt-4">
        <p className="text-sm text-slate-200 dark:text-gray-400 me-2">
          {type === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
        </p>
        <Link
          to={type === "login" ? "/register" : "/login"}
          className="text-blue-700 font-medium"
        >
          {type === "login" ? "Register" : "Login"}
        </Link>
      </div>
    </div>
  );
};

export default AuthLayouts;
