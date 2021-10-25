import React from "react"
import { Box, Typography, Grid, Paper, TextField } from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
import DashboardAlterAction from "../../components/dashboardAlterAction"
import ImageUpload from "../../components/dashboardImageUpload"
//
export default function FranchiseAlterView({
  methods,
  disabled,
  setDisabled,
  onActionCallback,
  onValidateCallback,
  onCancelActionCallback,
  onImageUpload,
  onImageChange,
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
                  label={Lang.externalUrl}
                  disabled={disabled}
                  {...methods.register("external_url", { required: true })}
                />
                {/**/}
                <TextField
                  type="number"
                  min="1"
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.storeCount}
                  disabled={disabled}
                  {...methods.register("store_count", { required: true })}
                />
                {/**/}
                <TextField
                  type="number"
                  min="0"
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.monthlySales}
                  disabled={disabled}
                  {...methods.register("monthly_sales", { required: true })}
                />
                {/**/}
                <TextField
                  type="number"
                  min="0"
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  label={Lang.startingCost}
                  disabled={disabled}
                  {...methods.register("starting_cost", { required: true })}
                />
                {/**/}
                <ImageUpload
                  url={methods.getValues("thumbnail_url")}
                  onImageUpload={onImageUpload}
                  onImageChange={onImageChange}
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
