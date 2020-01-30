import React, { Component } from "react";

export class NoteItem extends Component {
  render() {
    const { id, content } = this.props.note;
    return (
      <div>
        <p
          style={{
            background: "white",
            borderBottom: "1px #ccc dotted",
            padding: "10px"
          }}
        >
          {content}

          <button
            onClick={this.props.delNote.bind(this, id)}
            style={{
              background: "#ff0000",
              color: "#fff",
              border: "none",
              padding: "5px 9px",
              cursor: "pointer",
              float: "right"
            }}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

export default NoteItem;
