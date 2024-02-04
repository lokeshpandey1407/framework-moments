import { Box, Typography } from "@mui/material";
import MultiplePhotosFrame from "./MultiplePhotosFrame";
import Photos from "./Photos";

const PreWedding = () => {
  return (
    <Box sx={{ marginTop: "7rem" }}>
      <Typography
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
            backgroundColor: "green",
            borderRadius: "5px",
          },
        }}
      >
        Pre - Wedding
      </Typography>
      <MultiplePhotosFrame Images={Photos} />
    </Box>
  );
};

export default PreWedding;
