import React from "react"
import { Box, Toolbar, Container, Typography } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { Link } from "react-router-dom"
import DashboardAppBar from "../components/dashboardAppBar"
import DashboardSideMenu from "../components/dashboardSideMenu"
import Lang from "../services/lang"
import theme from "../services/dashboardTheme"
import { DashboardRoutes } from "../services/routes"
import RouterContainer from "../components/routerContainer"

export default function DashboardView({
  drawerOpen,
  handleDrawer,
  handleItemClick
}) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }} style={{ height: "100%" }}>
        <DashboardAppBar drawerOpen={drawerOpen} handleDrawer={handleDrawer} />
        <DashboardSideMenu
          drawerOpen={drawerOpen}
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
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <RouterContainer routes={DashboardRoutes} />
            {/**/}
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ pt: 4 }}
            >
              {"Copyright © "}
              <Link color="inherit" to="/">
                {Lang.title}
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
