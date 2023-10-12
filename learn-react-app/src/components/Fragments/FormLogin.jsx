import React from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <InputForm
        label="Email"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        name="password"
        type="password"
        placeholder="********"
      />
      <div className="flex items-center justify-center mb-4">
        <Button variant="bg-blue-700">Login</Button>
      </div>
    </form>
  );
};

export default FormLogin;
