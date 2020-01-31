import React, { Component } from "react";
import NoteItem from "./NoteItem";

class NotesTable extends Component {
  render() {
    var curr_notes = [];
    if (this.props.notes) {
      curr_notes = this.props.notes.notes;
    }

    return curr_notes.map(note => (
      <NoteItem note={note} delNote={this.props.delNote} />
    ));
  }
}

export default NotesTable;
