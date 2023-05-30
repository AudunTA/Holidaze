import React, { useState, useEffect } from "react";
import { SettingContainer } from "../Settings.styled";
import { useSelector } from "react-redux";
import * as S from "../../../styles/Text.styled";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(venue, dateFrom, dateTo) {
  return {
    venue,
    dateFrom: dateFrom.slice(0, 10),
    dateTo: dateTo.slice(0, 10),
  };
}

function MyBookings() {
  const bookings = useSelector((state) => state.profile.profile.bookings);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRows = bookings.map((booking) =>
      createData(booking.venue.name, booking.dateFrom, booking.dateTo)
    );
    setRows(newRows);
  }, [bookings]);

  return (
    <SettingContainer>
      {bookings.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Venue</TableCell>
                <TableCell align="right">date from</TableCell>
                <TableCell align="right">date to</TableCell>
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
                  <TableCell align="right">{row.dateFrom}</TableCell>
                  <TableCell align="right">{row.dateTo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <S.TextGrey>You dont have any bookings yet</S.TextGrey>
      )}
    </SettingContainer>
  );
}

export default MyBookings;
