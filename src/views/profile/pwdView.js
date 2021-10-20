import React from "react"
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress
} from "@mui/material"
import Lang from "../../services/lang"
import { FormProvider } from "react-hook-form"
//
export default function PwdView({
  methods,
  isAgency,
  mode,
  onSubmit,
  onActionClick
}) {
  return (
    <FormProvider {...methods}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{ flexDirection: "row-reverse", display: "flex" }}
        >
          <Button
            onClick={onActionClick}
            variant="contained"
            sx={{ my: 1, ml: 1.5 }}
            disabled={mode.buttonDisabled}
          >
            {mode.buttonLabel}
            {mode.editing === null && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px"
                }}
              />
            )}
          </Button>
        </Grid>
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
                disabled={mode.disabled}
                {...methods.register("password", { required: true })}
              />
              <TextField
                type="password"
                margin="normal"
                size="small"
                required
                fullWidth
                label={Lang.newPassword}
                disabled={mode.disabled}
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
                disabled={mode.disabled}
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
