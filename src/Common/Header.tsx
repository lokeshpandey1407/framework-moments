import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  navigationItems: prop[];
}
interface prop {
  title: string;
  link: string;
}

const Header = ({ navigationItems }: Props) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FFF8DC",
          padding: "15px",
          maxHeight: "55px",
        }}
      >
        <Stack
          direction={"row"}
          spacing={10}
          justifyContent={{
            md: "center",
            sm: "space-between",
            xs: "space-between",
          }}
          alignItems={"center"}
        >
          <Typography color={"red"} sx={{ display: "inline" }}>
            Logo
          </Typography>
          {navigationItems.map((item) => (
            <Button
              key={item.link}
              disableRipple={true}
              size="medium"
              sx={{
                color: "black",
                "&:hover": {
                  backgroundColor: "transparent",
                  translate: "1px -1px",
                },
                display: { md: "block", sm: "none", xs: "none" },
                padding: "0px",
              }}
              component={Link}
              to={item.link}
            >
              {item.title}
            </Button>
          ))}
          <IconButton
            disableRipple={true}
            sx={{
              color: "black",
              display: { md: "none", sm: "inline", xs: "inline" },
              padding: "0px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuRounded />
          </IconButton>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Header;
