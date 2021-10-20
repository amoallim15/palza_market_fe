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
  TableBody
  // TablePagination
} from "@mui/material"
import Lang from "../../services/lang"
//
export default function NoticeListView({
  noticeData,
  noticeCategoryMap,
  onCreateClick
}) {
  //
  return (
    <Grid container spacing={3}>
      {/**/}
      <Grid item xs={12} sx={{ flexDirection: "row-reverse", display: "flex" }}>
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
                <TableCell>{Lang.title}</TableCell>
                <TableCell align="right">{Lang.category}</TableCell>
                <TableCell align="right">{Lang.createdAt}</TableCell>
                <TableCell align="right">{Lang.updatedAt}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {noticeData.data?.map((item, index) => (
                <TableRow
                  key={item._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    {noticeCategoryMap[item.category_id]}
                  </TableCell>
                  <TableCell align="right">{item.updated_at}</TableCell>
                  <TableCell align="right">{item.created_at}</TableCell>
                </TableRow>
              ))}
              {noticeData.data?.length < 1 && (
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
        {/*<TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />*/}
      </Grid>
      {/**/}
    </Grid>
  )
}
