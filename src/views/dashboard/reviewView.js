import React from "react"
import Lang from "../../services/lang"
import {
  Typography,
  Box,
  Grid,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TablePagination
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
//
export default function MyReviewView({
  reviewData,
  onEditClick,
  onDeleteClick,
  onPageChange,
  isMy
}) {
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
        {Lang.reviews}
      </Typography>
      {/**/}
      <Grid container spacing={3}>
        {/**/}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>{Lang.agencyId}</TableCell>
                  <TableCell align="center">{Lang.rating}</TableCell>
                  <TableCell align="center">{Lang.content}</TableCell>
                  <TableCell align="center">{Lang.updatedAt}</TableCell>
                  {isMy ? (
                    <>
                      <TableCell align="center">{Lang.createdAt}</TableCell>
                      <TableCell align="right">{Lang.actions}</TableCell>
                    </>
                  ) : (
                    <TableCell align="right">{Lang.createdAt}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {reviewData.data?.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.agency_id}
                    </TableCell>
                    <TableCell align="center">{item.rating}</TableCell>
                    <TableCell align="center">{item.content}</TableCell>
                    <TableCell align="center">{item.updated_at}</TableCell>

                    {isMy ? (
                      <>
                        <TableCell align="center">{item.created_at}</TableCell>
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
                      </>
                    ) : (
                      <TableCell align="right">{item.created_at}</TableCell>
                    )}
                  </TableRow>
                ))}
                {reviewData.data?.length < 1 && (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0, p: 10 }
                    }}
                  >
                    <TableCell
                      align="center"
                      colSpan={isMy ? 6 : 5}
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
            count={reviewData.count}
            rowsPerPage={10}
            page={reviewData.page}
            onPageChange={onPageChange}
            rowsPerPageOptions={[]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
