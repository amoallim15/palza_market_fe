import React from "react"
import { Box, Typography, Grid, Paper, TextField } from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
import DashboardAlterAction from "../../components/dashboardAlterAction"
//
export default function ReviewAlterView({
  methods,
  disabled,
  setDisabled,
  onActionCallback,
  onValidateCallback,
  onCancelActionCallback,
  mode
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
        {mode.title}
      </Typography>
      {/**/}
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <DashboardAlterAction
            setDisabled={setDisabled}
            actionCallback={onActionCallback}
            validateCallback={onValidateCallback}
            cancelActionCallback={onCancelActionCallback}
            buttonLabel={mode.buttonLabel}
          />
          {/**/}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
              >
                {mode.title}
              </Typography>
              {/**/}
              <Box sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.agencyId}
                  disabled={disabled}
                  {...methods.register("agency_id", { required: true })}
                />
                {/**/}
                <TextField
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.rating}
                  disabled={disabled}
                  {...methods.register("rating", { required: true })}
                />
                {/**/}
                <TextField
                  margin="normal"
                  size="small"
                  multiline
                  required
                  maxRows={10}
                  fullWidth
                  label={Lang.content}
                  disabled={disabled}
                  {...methods.register("content", { required: true })}
                />
              </Box>
            </Paper>
          </Grid>
          {/**/}
        </Grid>
      </FormProvider>
    </Box>
  )
}
