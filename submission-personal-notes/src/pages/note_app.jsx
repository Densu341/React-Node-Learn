import React from "react";
import Navbar from "../components/Navbar";
import AddNote from "../components/AddNote";
import NoteList from "../components/NoteList";
import { getInitialData } from "../utils";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      keyword: "",
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.archiveNote = this.archiveNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(keyword) {
    this.setState({ keyword });
  }

  onAddNoteHandler({ title, body, createdAt, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  archiveNote(id) {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    this.setState({ notes: updatedNotes });
  }

  deleteNote(id) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes: updatedNotes });
  }

  render() {
    const { notes, keyword } = this.state;
    return (
      <div>
        <Navbar onSearch={this.handleSearch} />
        <AddNote onAddNoteHandler={this.onAddNoteHandler} />
        <NoteList
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          archiveNote={this.archiveNote}
          searchKeyword={keyword}
        />
      </div>
    );
  }
}

export default NoteApp;
