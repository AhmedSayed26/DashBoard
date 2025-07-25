import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TopBar from "./Components/TopBar/TopBar";
import SidBar from "./Components/SidBar/SidBar";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "./Components/Theme/Theme";
import { Outlet } from "react-router-dom";
// import { useState } from "react";

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }));
  const [mode, setmode] = React.useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          mode={mode}
          setmode={setmode}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
        />
        <SidBar open={open} handleDrawerClose={handleDrawerClose}></SidBar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

          {/* <Typography sx={{ marginBottom: 2 }}> */}
          <Outlet></Outlet>
          {/* </Typography> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
