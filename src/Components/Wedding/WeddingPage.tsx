import { useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Cards } from "../../Common/JSON/weddingCards";
import Frame from "../../assets/frameup.jpg";
import CollectionsIcon from "@mui/icons-material/Collections";
import CropDinOutlinedIcon from "@mui/icons-material/CropDinOutlined";

const WeddingPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // const navigate = useNavigate();

  // const handleButtonClick = (section) => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   if (section === "all") {
  //     navigate("/allPhotosPage");
  //   } else if (section === "photos") {
  //     navigate("/haldi");
  //   } else if (section === "pre") {
  //     navigate("/preWeddingPage");
  //   }
  // };

  return (
    <Box>
      <div
        style={{
          marginTop: "2.5rem",
          width: "100%",
          height: "70vh",
          backgroundImage: `url(${Frame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h2">Wedding Photos</Typography>
          <Typography variant="body1">
            Your subheading or description
          </Typography>
        </div>
      </div>
      <Grid
        container
        sx={{ marginTop: "4rem", paddingInline: "2rem" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
      >
        {Cards.map((card) => {
          return (
            <Grid item xs={12} sm={4} md={3} key={card.title} sx={{}}>
              <Paper
                elevation={0}
                sx={{
                  margin: "0px 30px",
                  position: "relative",
                  ":hover .fullscreen-icon": {
                    opacity: 1,
                  },
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img
                  src={card.imgUrl}
                  alt="Alt text"
                  style={{
                    width: "100%",
                    height: "100%",

                    objectFit: "cover",
                  }}
                  // onClick={() => handleButtonClick("all")}
                />
                <CollectionsIcon
                  className="fullscreen-icon"
                  sx={{
                    position: "absolute",
                    fontSize: "20px",
                    top: "50%",
                    left: "50%",
                    color: "rgba(280,280,250,01)",
                    transform: "translate(-50%, -50%)",
                    height: "50%",
                    width: "50%",
                    overflow: "hidden",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                  }}
                />
              </Paper>
              <Typography variant="subtitle1" textAlign={"center"}>
                {card.title}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default WeddingPage;
