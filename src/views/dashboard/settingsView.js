import React from "react"
import Lang from "../../services/lang"
import { Grid, Paper, Typography, TextField, Box } from "@mui/material"
import { useFormContext, FormProvider } from "react-hook-form"
import DashboardEditAction from "../../components/dashboardEditAction"
//
function GeneralContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {Lang.general}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.title}
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
            label={Lang.description}
            disabled={disabled}
            {...methods.register("description")}
          />
          {/**/}
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.faxNo}
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
          {Lang.APIKeys}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.kakaoKey}
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
            label={Lang.naverKey}
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
            label={Lang.googleKey}
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
            label={Lang.gambiaKey}
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
            label={Lang.nsdiKey}
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
            label={Lang.odcloudKey}
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
export default function SettingsView({
  methods,
  disabled,
  setDisabled,
  onActionCallback,
  onValidateCallback,
  onResetCallback
}) {
  return (
    <Box>
      <Typography
        component="h2"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1, mb: 3 }}
      >
        {Lang.profile}
      </Typography>
      {/**/}
      <FormProvider {...methods}>
        <Grid container spacing={3}>
          <DashboardEditAction
            setDisabled={setDisabled}
            actionCallback={onActionCallback}
            validateCallback={onValidateCallback}
            resetCallback={onResetCallback}
          />
          {/**/}
          <GeneralContent disabled={disabled} />
          {/**/}
          <APIContent disabled={disabled} />
          {/**/}
        </Grid>
      </FormProvider>
    </Box>
  )
}
