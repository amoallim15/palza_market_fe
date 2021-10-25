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
  TablePagination,
  Chip
} from "@mui/material"
//
export default function CrontabView({
  crontabData,
  onCreateClick,
  onPageChange,
  onRefreshClick,
  chipColors
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
        {Lang.crontabs}
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
          <Button
            onClick={onRefreshClick}
            variant="contained"
            sx={{ my: 1, ml: 1.5 }}
          >
            {Lang.refresh}
          </Button>
        </Grid>
        {/**/}
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">{Lang.status}</TableCell>
                  <TableCell align="center">{Lang.progress}</TableCell>
                  <TableCell align="center">{Lang.updatedAt}</TableCell>
                  <TableCell align="center">{Lang.createdAt}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {crontabData.data?.map((item, index) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      <Chip
                        label={item.status}
                        color={chipColors[item.status]}
                      />
                    </TableCell>
                    <TableCell align="center">{`${item.progress}%`}</TableCell>
                    <TableCell align="center">{item.updated_at}</TableCell>
                    <TableCell align="center">{item.created_at}</TableCell>
                  </TableRow>
                ))}
                {crontabData.data?.length < 1 && (
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
            count={crontabData.count}
            rowsPerPage={10}
            page={crontabData.page}
            onPageChange={onPageChange}
            rowsPerPageOptions={[]}
          />
        </Grid>
      </Grid>
    </Box>
  )
}
