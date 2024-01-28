import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { useTheme } from "../contexts/ThemeContext";

function Login({ loginSuccess }) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div
        className={`h-96 flex items-center justify-center ${
          theme === "dark"
            ? "bg-gradient-to-r from-gray-600 via-gray-700 to-gray-900"
            : "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        }`}
      >
        <div className="relative">
          <div
            className={`absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg ${"bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"} shadow-lg animate-pulse`}
          ></div>
          <div
            id="form-container"
            className={`p-16 rounded-lg shadow-2xl w-96 relative z-10 transform transition duration-500 ease-in-out ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2
              id="form-title"
              className={`text-center text-3xl font-bold mb-10 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Login
            </h2>
            <LoginInput login={onLogin} />
            <div
              className={`flex justify-center mt-2 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <p className="text-sm me-1">Don't have an account?</p>
              <Link to="/register" className="text-blue-500 text-sm">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default Login;
