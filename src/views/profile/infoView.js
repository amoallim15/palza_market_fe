import React from "react"
import { Grid, Paper, Typography, TextField, Box, Button } from "@mui/material"
import Lang from "../../services/lang"
import { useFormContext, FormProvider } from "react-hook-form"
//
function ClientContent({ disabled }) {
  const methods = useFormContext()
  //
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          {Lang.profile}
        </Typography>
        {/**/}
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            fullWidth
            label={Lang.name}
            disabled
            variant="filled"
            value={methods.getValues("name")}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.username}
            autoFocus
            disabled={disabled}
            {...methods.register("username", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.email}
            autoComplete="email"
            disabled={disabled}
            {...methods.register("email", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.displayName}
            disabled={disabled}
            {...methods.register("display_name", { required: true })}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.phoneNo}
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
          {Lang.agencySettings}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            fullWidth
            label={Lang.managerPhoneNo}
            disabled={disabled}
            {...(methods.register("manager_phone_no") || "")}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.businessName}
            disabled
            variant="filled"
            value={methods.getValues("business_name") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.businessRepresentative}
            disabled
            variant="filled"
            value={methods.getValues("business_representative") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.brokerageRecordNo}
            disabled
            variant="filled"
            value={methods.getValues("brokerage_record_no") || ""}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            label={Lang.legalAddress}
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
export default function InfoView({
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
            sx={{ my: 1, mx: 1.5 }}
          >
            {mode.buttonLabel}
          </Button>
        </Grid>
        {/**/}
        <ClientContent disabled={mode.disabled} />
        {/**/}
        {isAgency && <AgencyContent disabled={mode.disabled} />}
      </Grid>
    </FormProvider>
  )
}
