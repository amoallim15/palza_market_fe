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
  IconButton,
  TablePagination
} from "@mui/material"
import Lang from "../../services/lang"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
//
export default function NoticeListView({
  noticeData,
  noticeCategoryMap,
  onCreateClick,
  onEditClick,
  onDeleteClick,
  onPageChange
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
                <TableCell align="center">{Lang.category}</TableCell>
                <TableCell align="center">{Lang.updatedAt}</TableCell>
                <TableCell align="center">{Lang.createdAt}</TableCell>
                <TableCell align="right">{Lang.actions}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {noticeData.data?.map((item, index) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="center">
                    {noticeCategoryMap[item.category_id]}
                  </TableCell>
                  <TableCell align="center">{item.created_at}</TableCell>
                  <TableCell align="center">{item.updated_at}</TableCell>
                  <TableCell align="right">
                    {/**/}
                    <IconButton onClick={(e) => onEditClick(e, item)}>
                      <EditIcon />
                    </IconButton>
                    {/**/}
                    <IconButton onClick={(e) => onDeleteClick(e, item)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
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
                    colSpan={5}
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
          count={noticeData.count}
          rowsPerPage={10}
          page={noticeData.page}
          onPageChange={onPageChange}
          rowsPerPageOptions={[]}
        />
      </Grid>
      {/**/}
    </Grid>
  )
}
