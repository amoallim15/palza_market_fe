import React from "react"
import DashboardAppBar from "../../components/dashboardAppBar"
import DashboardSideMenu from "../../components/dashboardSideMenu"
import { Box } from "@mui/material"

export default function Dashboard() {
  const [open, setOpen] = React.useState(true)
  const handleDrawer = () => setOpen(!open)
  const handleItemClick = (e, item) => console.log(item)
  //
  return (
    <Box sx={{ display: "flex" }} style={{ height: "100%" }}>
      <DashboardAppBar open={open} handleDrawer={handleDrawer} />
      <DashboardSideMenu
        open={open}
        handleDrawer={handleDrawer}
        handleItemClick={handleItemClick}
      />
    </Box>
  )
}
