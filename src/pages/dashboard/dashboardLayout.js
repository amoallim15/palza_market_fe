import React from "react"
import DashboardAppBar from "../../components/dashboardAppBar"
import DashboardSideMenu from "../../components/dashboardSideMenu"
import { Box } from "@mui/material"
import theme from "../../services/dashboardTheme"
import { ThemeProvider } from "@mui/material/styles"

export default function Dashboard({ children }) {
  const [open, setOpen] = React.useState(true)
  const handleDrawer = () => setOpen(!open)
  const handleItemClick = (e, item) => console.log(item)
  //
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} style={{ height: "100%" }}>
        <DashboardAppBar open={open} handleDrawer={handleDrawer} />
        <DashboardSideMenu
          open={open}
          handleDrawer={handleDrawer}
          handleItemClick={handleItemClick}
        />
        {/**/}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto"
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  )
}
