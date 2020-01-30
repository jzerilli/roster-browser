import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const PlayerAttributes = {
  firstname: "First Name",
  lastname: "Last Name",
  dob_dte: "Date of Birth",
  weight: "Weight",
  height: "Height",
  birth_place: "Birthplace",
  school: "School",
  bats: "Bats",
  throws: "Throws",
  position: "Position",
  mlb_debut: "Debut Date",
  org: "Team"
};

class PlayerTable extends Component {
  render() {
    var player = this.props.player;
    return (
      <TableContainer
        component={Paper}
        style={{
          tableLayout: "auto",
          width: "50%",
          margin: "0 auto",
          marginTop: "10px",
          marginBottom: "10px"
        }}
      >
        <Table size="small" aria-label="a dense table">
          <TableBody>
            {Object.keys(PlayerAttributes).map((row, asdf) => (
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontWeight: "bold" }}
                >
                  {PlayerAttributes[row]}
                </TableCell>

                <TableCell component="th" scope="row">
                  {player[row]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default PlayerTable;
