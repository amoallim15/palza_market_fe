import React from "react"
import Lang from "../../services/lang"
import {
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination
} from "@mui/material"
//
export default function SMSView({ SMSData, onCreateClick, onPageChange }) {
  //
  return (
    <Box>
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, mb: 3 }}
      >
        {Lang.smsMessages}
      </Typography>
      {/**/}
      <Grid container spacing={3}>
        {/**/}
        <Grid
          item
          xs={12}
          sx={{ flexDirection: "row-reverse", display: "flex" }}
        >
          <Button
            onClick={onCreateClick}
            variant="contained"
            sx={{ my: 1, ml: 1.5 }}
          >
            {Lang.create}
          </Button>
        </Grid>
        {/**/}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{Lang.recieverPhoneNo}</TableCell>
                  <TableCell align="center">{Lang.title}</TableCell>
                  <TableCell align="center">{Lang.content}</TableCell>
                  <TableCell align="right">{Lang.createdAt}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {SMSData.data?.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.reciever_phone_no}
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">{item.content}</TableCell>
                    <TableCell align="right">{item.created_at}</TableCell>
                  </TableRow>
                ))}
                {SMSData.data?.length < 1 && (
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
          <TablePagination
            component="div"
            count={SMSData.count}
            rowsPerPage={10}
            page={SMSData.page}
            onPageChange={onPageChange}
            rowsPerPageOptions={[]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
