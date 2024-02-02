import { Container, IconButton, Stack } from "@mui/material";
import { X } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        gap: 2,
      }}
      component="footer"
    >
      <Stack direction={"row"} spacing={1}>
        <IconButton></IconButton>
        <IconButton>
          <Facebook fontSize="small" />
        </IconButton>
        <IconButton>
          <X fontSize="small" />
        </IconButton>
        <IconButton>
          <Instagram fontSize="small" />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Footer;
