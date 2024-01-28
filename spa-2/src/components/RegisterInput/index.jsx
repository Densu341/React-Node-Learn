import React from "react";
import PropTypes from "prop-types";
import useInput from "../../hooks/useInput";

function RegisterInput({ register }) {
  const [name, setName] = useInput("");
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form onSubmit={onSubmitHandler} className="space-y-4">
      <input
        className="form-control"
        type="text"
        placeholder="Nama"
        value={name}
        onChange={setName}
      />
      <input
        className="form-control"
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <input
        className="form-control"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={setPassword}
      />
      <button className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign up
      </button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
