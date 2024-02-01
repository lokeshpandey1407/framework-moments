import React, { useState } from "react";
import { Container, Drawer, IconButton, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

const navigationItems = [
  { title: "Home", link: "/" },
  { title: "Wedding", link: "/wedding" },
  { title: "Pre Wedding", link: "/pre_wedding" },
  { title: "About Us", link: "/about_us" },
  { title: "Contact", link: "/contact" },
];

const Wrapper = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        navigationItems={navigationItems}
        onMenuToggle={handleDrawerToggle}
        isSmallScreen={isSmallScreen}
      />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "60%",
          },
        }}
      >
        <Container>
          {navigationItems.map((item) => (
            <div key={item.title} onClick={() => setDrawerOpen(false)}>
              <Link
                to={item.link}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </Container>
      </Drawer>

      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
        sx={{
          display: isSmallScreen ? "block" : "none",
          zIndex: 1200,
          position: "fixed",
          top: "1rem",
          right: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <MenuIcon />
      </IconButton>

      <div
        style={{
          marginTop: "3.5rem",
          backgroundColor: "white",
        }}
      >
        <Outlet />
      </div>

      <Footer />
    </ThemeProvider>
  );
};

export default Wrapper;
