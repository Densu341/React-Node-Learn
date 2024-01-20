import React from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteItem from "../components/NoteItem";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Arsip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.slugFromNotes(getArchivedNotes()),
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
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <Link to={`/note/${note.id}`} key={note.id}>
              <NoteItem key={note.id} {...note} id={note.id} notes={note} />
            </Link>
          ))
        ) : (
          <p className="text-center">Tidak Ada Catatan</p>
        )}
      </div>
    );
  }
}

Arsip.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default Arsip;
