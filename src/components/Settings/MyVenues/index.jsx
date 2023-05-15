import React, { useState, useEffect } from "react";
import { SettingContainer } from "../Settings.styled";
import { useSelector } from "react-redux";
import * as S from "../../../styles/Text.styled";
import { useAuthUser } from "react-auth-kit";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { EditButton, RemoveButton } from "../../../styles/Buttons.styled";
import { deleteVenue } from "../../API/venue";
import { useDispatch } from "react-redux";
function createData(venue, edit, remove) {
  return { venue, edit, remove };
}

function MyVenues() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const dltVenue = (venueId) => {
    deleteVenue(venueId, auth().token, dispatch);
  };
  const venues = useSelector((state) => state.profile.profile.venues);
  console.log(venues);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRows = venues.map((venue) =>
      createData(
        venue.name,
        <EditButton>Edit</EditButton>,
        <RemoveButton onClick={() => dltVenue(venue.id)}>Delete</RemoveButton>
      )
    );
    setRows(newRows);
  }, [venues]);

  return (
    <SettingContainer>
      <button onClick={() => console.log(rows)}>log rows</button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Venue</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.venue}
                </TableCell>
                <TableCell align="right">{row.edit}</TableCell>
                <TableCell align="right">{row.remove}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SettingContainer>
  );
}

export default MyVenues;
