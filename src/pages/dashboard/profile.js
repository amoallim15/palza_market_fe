import React from "react"
import DashboardLayout from "./dashboardLayout"
import { Grid, Paper, Typography, TextField, Box, Button } from "@mui/material"
import EN from "../../services/lang"
import { useFormContext, useForm, FormProvider } from "react-hook-form"
import AppContext from "../../services/context"
//
function ProfileContent() {
  const methods = useFormContext()
  //
  console.log(methods.formState)
  //
  return (
    <Box sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label={EN.username}
        autoFocus
        disabled
        {...methods.register("username", { required: true })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label={EN.email}
        autoComplete="email"
        disabled
        {...methods.register("email", { required: true })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label={EN.displayName}
        disabled
        {...methods.register("display_name", { required: true })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label={EN.name}
        disabled
        {...methods.register("name", { required: true })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label={EN.phoneNo}
        disabled
        {...methods.register("phone_no", { required: true })}
      />
    </Box>
  )
}
//
export default function Profile() {
  const { appState } = React.useContext(AppContext)
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: appState.currentUser
  })
  //
  const onSubmit = (data) => {
    console.log(data)
  }
  //
  return (
    <DashboardLayout>
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sx={{ flexDirection: "row-reverse", display: "flex" }}
          >
            <Button variant="contained" sx={{ my: 1, mx: 1.5 }}>
              {EN.edit}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Typography
                  component="h2"
                  variant="h6"
                  color="primary"
                  gutterBottom
                >
                  {EN.profile}
                </Typography>
                {/**/}
                <ProfileContent />
              </form>
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
      </FormProvider>
    </DashboardLayout>
  )
}
