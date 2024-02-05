import { useEffect } from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Cards } from "../../Common/JSON/weddingCards";
import Frame from "../../assets/frameup.jpg";

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
            <Grid item xs={12} sm={5} md={3} key={card.title}>
              <Paper elevation={0}>
                <img
                  src={card.imgUrl}
                  alt="Alt text"
                  style={{ width: "100%", objectFit: "cover" }}
                  // onClick={() => handleButtonClick("all")}
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
