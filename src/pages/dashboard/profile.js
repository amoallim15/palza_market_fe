import React from "react"
import DashboardLayout from "./dashboardLayout"
import { Grid, Paper, Typography, TextField, Box, Button } from "@mui/material"
import EN from "../../services/lang"
import { useFormContext, useForm, FormProvider } from "react-hook-form"
import AppContext from "../../services/context"
import { updateUser } from "../../services/api"
import { useCookies } from "react-cookie"
//
function ProfileContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {EN.profile}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            fullWidth
            label={EN.name}
            disabled
            variant="filled"
            value={methods.getValues("name")}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.username}
            autoFocus
            disabled={disabled}
            {...methods.register("username", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.email}
            autoComplete="email"
            disabled={disabled}
            {...methods.register("email", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.displayName}
            disabled={disabled}
            {...methods.register("display_name", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.phoneNo}
            disabled={disabled}
            {...methods.register("phone_no", { required: true })}
          />
        </Box>
      </Paper>
    </Grid>
  )
}
//
function AgencyContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {EN.agencySettings}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            fullWidth
            label={EN.managerPhoneNo}
            disabled={disabled}
            {...(methods.register("manager_phone_no") || "")}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.businessName}
            disabled
            variant="filled"
            value={methods.getValues("business_name") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.businessRepresentative}
            disabled
            variant="filled"
            value={methods.getValues("business_representative") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.brokerageRecordNo}
            disabled
            variant="filled"
            value={methods.getValues("brokerage_record_no") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.legalAddress}
            disabled
            variant="filled"
            value={methods.getValues("legal_address") || ""}
          />
        </Box>
      </Paper>
    </Grid>
  )
}
//
export default function Profile() {
  const { appState } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: appState.currentUser
  })
  //
  const [mode, setMode] = React.useState({
    disabled: true,
    buttonLabel: EN.edit,
    buttonDisabled: false,
    editing: false
  })
  //
  const onActionClick = async (e) => {
    if (mode.editing === false) {
      await setMode({
        disabled: false,
        buttonLabel: EN.save,
        editing: true,
        buttonDisabled: false
      })
    } else if (mode.editing === true) {
      if (!(await methods.trigger())) return
      //
      await setMode({
        disabled: true,
        buttonLabel: EN.pending,
        editing: null,
        buttonDisabled: true
      })
      await methods.handleSubmit(onSubmit)()
      await setMode({
        disabled: true,
        buttonLabel: EN.edit,
        editing: false,
        buttonDisabled: false
      })
    } else {
      return
    }
  }
  //
  const onSubmit = async (data) => {
    const result = await updateUser(data, cookies["token"])
    if (!result) return
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
            <Button
              onClick={onActionClick}
              variant="contained"
              sx={{ my: 1, mx: 1.5 }}
            >
              {mode.buttonLabel}
            </Button>
          </Grid>
          {/**/}
          <ProfileContent disabled={mode.disabled} />
          {/**/}
          {appState.currentUser.user_type === "AGENCY" && (
            <AgencyContent disabled={mode.disabled} />
          )}
        </Grid>
      </FormProvider>
    </DashboardLayout>
  )
}
