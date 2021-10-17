import React from "react"
import DashboardLayout from "./dashboardLayout"
import { Grid, Paper, Typography } from "@mui/material"
import EN from "../../services/lang"

export default function Profile() {
  return (
    <DashboardLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {EN.profile}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              {EN.agencySettings}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}
