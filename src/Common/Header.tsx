import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { AcUnit } from "@mui/icons-material";
import { useState } from "react";

interface Props {
  navigationItems: prop[];
}
interface prop {
  title: string;
  link: string;
}

const Header = ({ navigationItems }: Props) => {
  const [drawer, setDrawer] = useState(false);
  const theme = useTheme();
  function openDrawer() {
    setDrawer(true);
  }
  function closeDrawer() {
    setDrawer(false);
  }
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#FFF8DC", minHeight: "65px" }}
      >
        <Toolbar>
          <AcUnit sx={{ mr: 3 }} color="action" fontSize="medium" />
          {!isMatch ? (
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
            >
              {navigationItems.map((item) => (
                <Button
                  key={item.link}
                  disableRipple={true}
                  sx={{
                    color: "black",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                  component={Link}
                  to={item.link}
                >
                  {item.title}
                </Button>
              ))}
            </Stack>
          ) : (
            <>
              <IconButton
                disableRipple={true}
                sx={{
                  color: "black",
                  marginLeft: "auto",
                  zIndex: 10,
                  padding: "0px",
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
                onClick={openDrawer}
              >
                <MenuRounded />
              </IconButton>
              <Drawer anchor="right" open={drawer} onClose={closeDrawer}>
                <Stack
                  direction={"column"}
                  width={"50vw"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                >
                  {navigationItems.map((item) => (
                    <Button
                      key={item.link}
                      fullWidth
                      disableRipple={true}
                      sx={{
                        color: "black",
                        padding: "10px",
                        ":hover": {
                          backgroundColor: "#FFF8DC",
                        },
                      }}
                      component={Link}
                      onClick={closeDrawer}
                      to={item.link}
                    >
                      {item.title}
                    </Button>
                  ))}
                </Stack>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
