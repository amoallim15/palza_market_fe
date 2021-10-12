import React from "react"
import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import EN from "../services/lang"

const drawerWidth = 240

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

export default function DashboardAppBar({ open, handleDrawer }) {
  //
  return (
    <CustomAppBar position="absolute" open={open}>
      <Toolbar
        sx={{
          pr: "24px" // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" })
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {EN.dashboard}
        </Typography>
      </Toolbar>
    </CustomAppBar>
  )
}
