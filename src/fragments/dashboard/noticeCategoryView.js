import React from "react"
import {
  Grid,
  Paper,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton
  // TablePagination
} from "@mui/material"
import Lang from "../../services/lang"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
//
export default function NoticeCategoryView({ noticeCategoryData }) {
  //
  return (
    <Grid container spacing={3}>
      {/**/}
      <Grid item xs={12} sx={{ flexDirection: "row-reverse", display: "flex" }}>
        <Button variant="contained" sx={{ my: 1, ml: 1.5 }}>
          {Lang.create}
        </Button>
      </Grid>
      {/**/}
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{Lang.label}</TableCell>
                <TableCell align="center">{Lang.updatedAt}</TableCell>
                <TableCell align="center">{Lang.createdAt}</TableCell>
                <TableCell align="right">{Lang.actions}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {noticeCategoryData.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.label}
                  </TableCell>
                  <TableCell align="center">{item.updated_at}</TableCell>
                  <TableCell align="center">{item.created_at}</TableCell>
                  <TableCell align="right">
                    {/**/}
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    {/**/}
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              {noticeCategoryData.length < 1 && (
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0, p: 10 }
                  }}
                >
                  <TableCell
                    align="center"
                    colSpan={4}
                    component="th"
                    scope="row"
                  >
                    {Lang.noDataAvailable}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}
