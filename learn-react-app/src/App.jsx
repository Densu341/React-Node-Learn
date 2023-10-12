import React from "react";
import Button from "./components/Elements/Button";
import InputForm from "./components/Elements/Input";

function App() {
  return (
    <>
      <div className="flex justify-center bg-slate-700 h-screen items-center">
        <div className="w-full max-w-xs">
          {/* form login */}
          <h1 className="text-white text-3xl font-bold mb-2 text-center">
            Login
          </h1>
          <p className="text-slate-200 font-medium text-center mb-2">
            Welcom to the login page Roemah Djogja
          </p>
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
              <Button variant="bg-blue-500 w-full">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
