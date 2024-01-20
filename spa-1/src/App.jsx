import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MobileSidebarButton from "./components/MobileSidebarButton";
import SearchBar from "./components/SearchBar";
import Home from "./pages/Home";
import Arsip from "./pages/Arsip";
import Add from "./pages/Add";
import Error from "./pages/Error";
import Read from "./pages/Read";
import Edit from "./pages/Edit";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="container-fluid bg-light">
      <header className="sticky top-0 mx-4 p-4 flex flex-row items-center bg-secondary opacity-90 rounded-lg">
        <MobileSidebarButton />
        <Link
          to="/"
          className="brand flex items-center gap-2 text-dark hover:text-primary me-auto"
        >
          <figure>
            <img src="/img/logo.png" alt="logo" className="w-10" />
          </figure>
          <h1 className="text-3xl font-bold ">Notes</h1>
        </Link>
        <SearchBar onChange={handleSearchChange} value={searchQuery} />
      </header>
      <main className="flex mt-4">
        <aside className="hidden md:block w-64 ps-4 h-screen md:fixed">
          <Sidebar />
        </aside>
        <section className="w-full px-4 md:ms-64 h-screen">
          <Routes>
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route
              path="/archived"
              element={<Arsip searchQuery={searchQuery} />}
            />
            <Route path="/add" element={<Add />} />
            <Route path="/note/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </section>
      </main>
    </div>
  );
};

export default App;
