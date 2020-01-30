import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

export class NoteInput extends Component {
  state = {
    content: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state.content);
    this.setState({ content: "" });
    document.getElementById("outlined-basic").value = "";
  };

  onChange = e => this.setState({ content: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Add a note"
          variant="outlined"
          style={{ background: "white", width: "100%" }}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default NoteInput;
