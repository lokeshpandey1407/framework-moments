import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
  return (
    <ThemeProvider theme={theme}>
      <Header navigationItems={navigationItems} />
      <Container maxWidth="lg" sx={{ minHeight: "70vh", marginTop: "4rem" }}>
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default Wrapper;
