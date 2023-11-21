import React from "react";
import Button from "../Button";

class AddNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newNote: {
        title: "",
        body: "",
      },
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    if (this.state.newNote.title.length < 50) {
      this.setState(() => {
        return {
          newNote: {
            ...this.state.newNote,
            title: event.target.value,
          },
        };
      });
    }
  }

  handleBodyChange(event) {
    this.setState(() => {
      return {
        newNote: {
          ...this.state.newNote,
          body: event.target.value,
        },
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddNoteHandler(this.state.newNote);
  }

  render() {
    const maxCharacterCount = 50;
    const characterCount = maxCharacterCount - this.state.newNote.title.length;
    return (
      <div className="container">
        <h2>Tambah Catatan Baru</h2>
        <form className="add-note-form" onSubmit={this.handleSubmit}>
          <span className="character-count">
            {characterCount} karakter tersisa
          </span>
          <input
            className="title-input"
            type="text"
            name="title"
            value={this.state.newNote.title}
            onChange={this.handleTitleChange}
            placeholder="Judul Catatan"
          />

          <textarea
            className="body-input"
            name="body"
            value={this.state.newNote.body}
            onChange={this.handleBodyChange}
            placeholder="Isi Catatan"
          />

          <Button variant="add" type="submit">
            Tambah Catatan
          </Button>
        </form>
      </div>
    );
  }
}

export default AddNote;
