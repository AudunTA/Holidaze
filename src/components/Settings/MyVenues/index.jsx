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
  return { venue, dateFrom, dateTo };
}

function MyVenues() {
  const venues = useSelector((state) => state.profile.profile.venues);
  console.log(venues);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const newRows = venues.map((venue) =>
      createData(venue.name, venue.price, <button>edit</button>)
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
              <TableCell align="right">price</TableCell>
              <TableCell align="right">edit</TableCell>
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
    </SettingContainer>
  );
}

export default MyVenues;
