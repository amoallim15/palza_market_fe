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
  IconButton,
  TablePagination
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
//
export default function MagazineView({
  magazineData,
  onCreateClick,
  onEditClick,
  onDeleteClick,
  onPageChange
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
        {Lang.notices}
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
                  <TableCell>{Lang.externalUrl}</TableCell>
                  <TableCell align="center">{Lang.storeCount}</TableCell>
                  <TableCell align="center">{Lang.monthlySales}</TableCell>
                  <TableCell align="center">{Lang.startingCost}</TableCell>
                  <TableCell align="center">{Lang.updatedAt}</TableCell>
                  <TableCell align="center">{Lang.createdAt}</TableCell>
                  <TableCell align="right">{Lang.actions}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {magazineData.data?.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.external_url}
                    </TableCell>
                    <TableCell align="center">{item.store_count}</TableCell>
                    <TableCell align="center">{item.monthly_sales}</TableCell>
                    <TableCell align="center">{item.starting_cost}</TableCell>
                    <TableCell align="center">{item.updated_at}</TableCell>
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
                  </TableRow>
                ))}
                {magazineData.data?.length < 1 && (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0, p: 10 }
                    }}
                  >
                    <TableCell
                      align="center"
                      colSpan={7}
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
            count={magazineData.count}
            rowsPerPage={10}
            page={magazineData.page}
            onPageChange={onPageChange}
            rowsPerPageOptions={[]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
