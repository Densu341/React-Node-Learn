import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";

function Login({ loginSuccess }) {
  const navigate = useNavigate();

  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
      navigate("/");
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center transform transition duration-500 ease-in-out">
      <div className="h-96 flex items-center justify-center ">
        <div
          id="form-container"
          className="p-16 rounded-lg border border-gray-200  shadow-2xl w-96 "
        >
          <h2 id="form-title" className="text-center text-3xl font-bold mb-10">
            Login
          </h2>
          <LoginInput login={onLogin} />
          <div className="flex justify-center mt-2 ">
            <p className="text-sm me-1">Don't have an account?</p>
            <Link to="/register" className="text-blue-500 text-sm">
              Register
            </Link>
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
