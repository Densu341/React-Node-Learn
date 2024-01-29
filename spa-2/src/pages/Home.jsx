import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { addNote, getActiveNotes } from "../utils/network-data";
import NotesList from "../components/NoteList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [notes, setNotes] = useState([]);
  const [defaultKeyword, setDefaultKeyword] = useState(keyword);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getActiveNotes();
        console.log("Data from API:", data); // Tambahkan baris ini
        setNotes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onKeywordChangeHandler = (newKeyword) => {
    setDefaultKeyword(newKeyword);
    setSearchParams({ keyword: newKeyword });
  };

  const filteredNotes = notes.filter((note) => {
    return (
      note.title &&
      typeof note.title === "string" &&
      note.title.toLowerCase().includes(defaultKeyword.toLowerCase())
    );
  });

  return (
    <section className="p-4 w-full">
      <SearchBar
        keyword={defaultKeyword}
        onKeywordChange={onKeywordChangeHandler}
      />
      {isLoading ? <p>Loading...</p> : <NotesList notes={filteredNotes} />}
    </section>
  );
}

export default Home;
