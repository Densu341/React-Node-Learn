import { useState } from "react";
import { sculptureList } from "../config/sculpture";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex(index + 1);
    if (index === sculptureList.length - 1) {
      setIndex(0);
    }
  }

  function handlePrevious() {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(sculptureList.length - 1);
    }
  }

  let sculpture = sculptureList[index];
  return (
    <div className="container mx-auto text-center py-4">
      <div className="py-4">
        <Counter></Counter>
      </div>
      <div className="flex justify-center gap-2">
        <Button onClick={handlePrevious} variant="bg-blue-700">
          Previous
        </Button>
        <Button onClick={handleNext} variant="bg-blue-700">
          Next
        </Button>
      </div>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} className="mx-auto" />
      <p>{sculpture.description}</p>
    </div>
  );
}
