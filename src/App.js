import React, { Component } from "react";
import SelectPlayer from "./components/SelectPlayer";
import Header from "./components/Header";
import PlayerTable from "./components/PlayerTable";
import NoteInput from "./components/NoteInput";
import NotesTable from "./components/NotesTable";
import uuid from "uuid";
import PlayerData from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      selected: null,
      notes: null
    };
  }

  //Update notes field after selecting a player
  handleClick(id) {
    this.setState({
      selected: id,
      notes: NOTES.find(curr_note => {
        return curr_note.player_id === id;
      })
    });
  }

  delNote = id => {
    var curr_pnote = NOTES.find(curr_note => {
      return curr_note.player_id === this.state.selected;
    });

    curr_pnote.notes = curr_pnote.notes.filter(curr_note => {
      return curr_note.id !== id;
    });

    this.setState({
      notes: curr_pnote
    });
  };


  addNote = content => {
    const newNote = {
      id: uuid.v4(),
      content: content
    };

    var curr_pnote = NOTES.find(curr_note => {
      return curr_note.player_id === this.state.selected;
    });

    //If the current player already has a note entry
    //append to their list of notes
    if (curr_pnote) {
      curr_pnote.notes = [...curr_pnote.notes, newNote];

    //Otherwise create a new note entry for the player
    } else {
      const newNoteListItem = {
        player_id: this.state.selected,
        notes: [newNote]
      };

      NOTES = [...NOTES, newNoteListItem];

      curr_pnote = NOTES.find(curr_note => {
        return curr_note.player_id === this.state.selected;
      });
    }

    //Update notes to reflect the change
    this.setState({
      notes: curr_pnote
    });
  };

  render() {
    const curr_player = PlayerData.find(curr_obj => {
      return curr_obj.player_id_mlbam === this.state.selected;
    });

    return (
      <div className="App">
        <Header />
        <SelectPlayer players={PlayerData.sort((a, b) => (a.lastname > b.lastname) ? 1 : -1)} handler={this.handleClick} />

        {this.state.selected ? (
          <React.Fragment>
            <PlayerTable player={curr_player} />
            <NoteInput addNote={this.addNote} />
            <NotesTable notes={this.state.notes} delNote={this.delNote} />
          </React.Fragment>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

//Sample notes to pre load into list of notes
var NOTES = [
  {
    player_id: 570489,
    notes: [
      { id: 1, content: "This is a sample note" },
      { id: 2, content: "Another sample note" }
    ]
  },
  {
    player_id: 453562,
    notes: [
      { id: 1, content: "Sample note for a different player" },
      { id: 2, content: "Another note for this player" }
    ]
  }
];

export default App;
