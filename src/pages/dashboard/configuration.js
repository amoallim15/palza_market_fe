import React from "react"
import DashboardLayout from "./dashboardLayout"
import { Grid, Paper, Typography, TextField, Box, Button } from "@mui/material"
import EN from "../../services/lang"
import { useFormContext, useForm, FormProvider } from "react-hook-form"
import AppContext from "../../services/context"
import { updateSettings } from "../../services/api"
import { useCookies } from "react-cookie"
//
function GeneralContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {EN.general}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.title}
            disabled={disabled}
            {...methods.register("title", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            multiline
            maxRows={4}
            fullWidth
            label={EN.description}
            disabled={disabled}
            {...methods.register("description")}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.faxNo}
            disabled={disabled}
            {...methods.register("fax_no", { required: true })}
          />
        </Box>
      </Paper>
    </Grid>
  )
}
//
function APIContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {EN.APIKeys}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.kakaoKey}
            autoFocus
            disabled={disabled}
            {...methods.register("kakao_key", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.naverKey}
            autoFocus
            disabled={disabled}
            {...methods.register("naver_key", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.googleKey}
            autoFocus
            disabled={disabled}
            {...methods.register("google_key", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.gambiaKey}
            autoFocus
            disabled={disabled}
            {...methods.register("gabia_key", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.nsdiKey}
            autoFocus
            disabled={disabled}
            {...methods.register("nsdi_key", { required: true })}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={EN.odcloudKey}
            autoFocus
            disabled={disabled}
            {...methods.register("odcloud_key", { required: true })}
          />
        </Box>
      </Paper>
    </Grid>
  )
}
//
export default function Configuration() {
  const { appState } = React.useContext(AppContext)
  const [cookies] = useCookies(["token"])
  const methods = useForm({
    criteriaMode: "all",
    mode: "onSubmit",
    defaultValues: appState.appSettings
  })
  const [mode, setMode] = React.useState({
    buttonLabel: EN.edit,
    buttonDisabled: false,
    disabled: true,
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
    const result = await updateSettings(data, cookies["token"])
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
              disabled={mode.buttonDisabled}
            >
              {mode.buttonLabel}
            </Button>
          </Grid>
          {/**/}
          <GeneralContent disabled={mode.disabled} />
          {/**/}
          <APIContent disabled={mode.disabled} />
        </Grid>
      </FormProvider>
    </DashboardLayout>
  )
}
