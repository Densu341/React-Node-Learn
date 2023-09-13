import Button from "./Button";
import { useState } from "react";
export default function Counter({ initialValue }) {
  const [count, setCount] = useState(initialValue);
  function handleClick() {
    // const nextCount = count + 1;
    setCount((prevState) => prevState + 1);
    // console.log({ count, nextCount });
  }
  return (
    <>
      <h1 className="text-5xl font-bold text-center">{count}</h1>
      <div className="mt-5 mx-auto flex justify-center gap-2">
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}
        >
          +3
        </Button>
      </div>
    </>
  );
}
