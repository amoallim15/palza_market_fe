import React from "react"
import { Grid, Button, CircularProgress } from "@mui/material"
import Lang from "../services/lang"

export default function DashboardAlterAction({
  setDisabled,
  actionCallback,
  cancelActionCallback,
  validateCallback,
  children,
  buttonLabel
}) {
  const [mode, setMode] = React.useState({
    actionButtonLabel: buttonLabel,
    actionButtonDisabled: false,
    saving: false
  })
  //
  const onActionClick = async (e) => {
    if (!(await validateCallback())) return
    //
    await setDisabled(true)
    await setMode({
      actionButtonLabel: Lang.pending,
      saving: true,
      actionButtonDisabled: true
    })
    //
    window.setTimeout(async () => {
      await actionCallback()
    }, 1000)
  }
  //
  return (
    <Grid item xs={12} sx={{ flexDirection: "row-reverse", display: "flex" }}>
      <Button
        onClick={onActionClick}
        variant="contained"
        sx={{ my: 1, ml: 1.5 }}
        disabled={mode.actionButtonDisabled}
      >
        {mode.actionButtonLabel}
        {mode.saving === true && (
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
      {/**/}
      <Button
        onClick={cancelActionCallback}
        variant="contained"
        sx={{ my: 1, ml: 1.5 }}
      >
        {Lang.cancel}
      </Button>
      {children}
    </Grid>
  )
}
