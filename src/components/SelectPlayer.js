import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export class SelectPlayer extends Component {
  handleClick(value) {
    this.props.handler(value);
  }

  render() {
    return (
      <Autocomplete
        id="combo-box-demo"
        options={this.props.players}
        getOptionLabel={option => option.firstname + " " + option.lastname}
        style={{
          width: 300,
          marginTop: "10px",
          marginBottom: "10px",
          margin: "0 auto",
          background: "#fff"
        }}
        onChange={(event, value) =>
          value
            ? this.handleClick(value.player_id_mlbam)
            : this.handleClick(null)
        }
        renderInput={params => (
          <TextField
            {...params}
            label="Type Name or Select a Player"
            variant="outlined"
            fullWidth
          />
        )}
      />
    );
  }
}

export default SelectPlayer;
