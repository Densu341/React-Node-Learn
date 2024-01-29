import React, { useEffect, useState } from "react";
import ReadNote from "../components/ReadNote";
import { getNote } from "../utils/network-data";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();
  const [notes, setNote] = useState(null);

  useEffect(() => {
    const getSingleNote = async () => {
      const { error, data } = await getNote(params.id);
      if (!error) {
        setNote(data);
      }
    };
    getSingleNote();
  }, [params]);

  if (!notes) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex items-center">
      <div className="bg-white w-full rounded-lg mt-4">
        <ReadNote
          title={notes.title}
          createdAt={notes.createdAt}
          body={notes.body}
        />
      </div>
    </div>
  );
};

export default Detail;
