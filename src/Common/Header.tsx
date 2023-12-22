import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  navigationItems: prop[];
}
interface prop {
  title: string;
  link: string;
}

const Header = ({ navigationItems }: Props) => {
  const location = useLocation();
  const [url, setUrl] = useState<string>(location.pathname);

  const handleActiveLink = (link: string) => {
    if (url == link) {
      return "green";
    } else return "black";
  };

  useEffect(() => {
    setUrl(location.pathname);
  }, [location.pathname]);

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          padding: "15px",
          backdropFilter: "blur(10px)",
        }}
      >
        <Stack direction={"row"} spacing={10} justifyContent={"center"}>
          <Typography color={"red"}>Logo</Typography>
          {navigationItems.map((item) => (
            <Button
              key={item.link}
              disableRipple={true}
              size="medium"
              sx={{
                color: handleActiveLink(item.link),
                "&:hover": { backgroundColor: "transparent" },
                padding: "0px",
              }}
              component={Link}
              to={item.link}
            >
              {item.title}
            </Button>
          ))}
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Header;
