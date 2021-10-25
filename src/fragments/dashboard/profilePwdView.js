import React from "react"
import { Grid, Paper, Typography, TextField, Box } from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
import DashboardEditAction from "../../components/dashboardEditAction"
//
export default function ProfilePwdView({
  methods,
  onActionCallback,
  onValidateCallback,
  onResetCallback,
  setDisabled,
  disabled
}) {
  return (
    <FormProvider {...methods}>
      <Grid container spacing={3}>
        {/**/}
        <DashboardEditAction
          setDisabled={setDisabled}
          actionCallback={onActionCallback}
          validateCallback={onValidateCallback}
          resetCallback={onResetCallback}
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
              {Lang.changePassword}
            </Typography>
            {/**/}
            <Box sx={{ mt: 1 }}>
              <TextField
                type="password"
                margin="normal"
                size="small"
                fullWidth
                label={Lang.currentPassword}
                disabled={disabled}
                {...methods.register("password", { required: true })}
              />
              <TextField
                type="password"
                margin="normal"
                size="small"
                required
                fullWidth
                label={Lang.newPassword}
                disabled={disabled}
                {...methods.register("new_password", {
                  required: true,
                  pattern: /^((?=.*\d)(?=.*[a-z])(?=.*[\W]).{8,16})$/
                })}
              />
              <TextField
                type="password"
                margin="normal"
                size="small"
                required
                fullWidth
                label={Lang.confirmNewPassword}
                disabled={disabled}
                {...methods.register("confirm_new_password", {
                  required: true,
                  validate: {
                    unmatched: (v) => v === methods.getValues("new_password")
                  }
                })}
              />
              {/**/}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </FormProvider>
  )
}
