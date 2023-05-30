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
import { Link } from "react-router-dom";
function createData(venue, edit, remove) {
  return { venue, edit, remove };
}

function MyVenues() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  /**
   * Deletes a venue.
   *
   * @param {string} venueId - The ID of the venue to be deleted.
   */
  const dltVenue = (venueId) => {
    deleteVenue(venueId, auth().token, dispatch);
  };
  const venues = useSelector((state) => state.profile.profile.venues);
  const [rows, setRows] = useState([]);
  const [editVenueId, setEditVenueId] = useState();
  const handleShowModal = (venueID) => {
    setEditVenueId(venueID);
    setShowModal(true);
  };
  useEffect(() => {
    const newRows = venues.map((venue) =>
      createData(
        <Link to={`/Venue/${venue.id}`} className="pointer">
          {venue.name}
        </Link>,
        <EditButton>Edit</EditButton>,
        <RemoveButton onClick={() => dltVenue(venue.id)}>Delete</RemoveButton>
      )
    );
    setRows(newRows);
  }, [venues]);

  return (
    <>
      <SettingContainer>
        {venues.length > 0 ? (
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
        ) : (
          <S.TextGrey>You dont have any venues yet</S.TextGrey>
        )}
      </SettingContainer>
    </>
  );
}

export default MyVenues;
