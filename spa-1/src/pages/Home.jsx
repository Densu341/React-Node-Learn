import React from "react";
import NoteItem from "../components/NoteItem";
import { getActiveNotes } from "../utils/local-data";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.slugFromNotes(getActiveNotes()),
    };
  }

  slugFromNotes = (notes) => {
    return notes.map((note) => {
      const words = note.body.split(/\s+/);
      const truncatedWords = words.slice(0, 10);
      const slug = truncatedWords.join(" ") + "...";
      return { ...note, slug };
    });
  };

  render() {
    const { notes } = this.state;
    const { searchQuery } = this.props;

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="container mx-auto py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredNotes.map((note) => (
          <Link to={`/note/${note.id}`} key={note.id}>
            <NoteItem key={note.id} {...note} id={note.id} notes={note} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Home;
