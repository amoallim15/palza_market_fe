import React from "react"
import TabPanel from "../../components/tabPanel"
import { Box, Tabs, Tab, Typography } from "@mui/material"
import Lang from "../../services/lang"
import ProfileInfoView from "./profileInfoView"
import ProfilePwdView from "./profilePwdView"
//
export default function ProfileView({
  isAgency,
  currentTab,
  onTabChange,
  infoMethods,
  pwdMethods,
  onInfoActionCallback,
  onInfoValidateCallback,
  onInfoResetCallback,
  onPwdActionCallback,
  onPwdValidateCallback,
  onPwdResetCallback,
  infoDisabled,
  setInfoDisabled,
  pwdDisabled,
  setPwdDisabled
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
        {Lang.profile}
      </Typography>
      <Tabs value={currentTab} onChange={onTabChange}>
        <Tab label={Lang.info} />
        <Tab label={Lang.changePassword} />
      </Tabs>
      {/**/}
      <TabPanel value={currentTab} index={0}>
        <ProfileInfoView
          isAgency={isAgency}
          methods={infoMethods}
          onActionCallback={onInfoActionCallback}
          onValidateCallback={onInfoValidateCallback}
          onResetCallback={onInfoResetCallback}
          disabled={infoDisabled}
          setDisabled={setInfoDisabled}
        />
      </TabPanel>
      <TabPanel value={currentTab} index={1}>
        <ProfilePwdView
          methods={pwdMethods}
          onActionCallback={onPwdActionCallback}
          onValidateCallback={onPwdValidateCallback}
          onResetCallback={onPwdResetCallback}
          disabled={pwdDisabled}
          setDisabled={setPwdDisabled}
        />
      </TabPanel>
    </Box>
  )
}
