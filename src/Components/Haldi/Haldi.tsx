import { Box, Typography } from "@mui/material";
import MultiplePhotosFrame from "../../Common/MultiplePhotosFrame";
import Photos from "../../Common/JSON/Photos";

const Haldi = () => {
  return (
    <Box sx={{ marginTop: "7rem" }}>
      <Typography
        textAlign={"center"}
        fontWeight={"bold"}
        sx={{
          width: "fit-content",
          margin: "auto",
          ":after": {
            content: `""`,
            height: "3px",
            textAlign: "center",
            width: "120%",
            display: "block",
            backgroundColor: "gold",
            borderRadius: "5px",
          },
        }}
      >
        Haldi Photos
      </Typography>
      <MultiplePhotosFrame Images={Photos} />
    </Box>
  );
};

export default Haldi;
