import { Typography, Container, Box, Paper, Grid } from "@mui/material";
import ImageCarousel from "../Sections/ImageCarousel";
import { makeStyles } from "@mui/styles";
import Photos from "../../Common/JSON/Photos";
import MultiplePhotosFrame from "../../Common/MultiplePhotosFrame";
import { useNavigate } from "react-router-dom";
import { CardArray, URLS } from "../../Common/JSON/HomePageObj";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    objectFit: "cover",
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const handleButtonClick = (section: string) => {
    if (section === "wedding") {
      navigate("/wedding");
    } else if (section === "haldi") {
      navigate("/haldi");
    } else if (section === "pre_wedding") {
      navigate("/pre_wedding");
    }
  };

  const classes = useStyles();

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxHeight: "80vh",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <ImageCarousel imageUrls={URLS} />
      </Box>
      <Container>
        <Box mt={4}>
          <Typography variant="body1">
            Thank you for visiting our wedding page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </Box>
        <Grid
          container
          marginTop={"2rem"}
          columnSpacing={4}
          justifyContent={"center"}
        >
          {CardArray.map((card, index) => {
            return (
              <Grid item xs={12} sm={8} md={4} key={index + card.title}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: ".5rem",
                    marginBottom: "0.5rem",
                    marginLeft: "1rem",
                    textAlign: "center",
                  }}
                >
                  <card.icon fontSize="small" color="info" />
                  <Typography variant="body2" fontWeight="bold">
                    {card.title}
                  </Typography>
                </div>
                <Paper
                  elevation={0}
                  sx={{
                    padding: ".5rem",
                    transition: "all 0.5s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    cursor: "pointer",
                  }}
                  onClick={() => handleButtonClick(card.category)}
                >
                  <img
                    src={card.imgUrl}
                    alt="Alt text"
                    className={classes.image}
                  />
                  <Typography variant="body2">{card.description}</Typography>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Typography
          variant="body1"
          sx={{
            color: "grey",
            textDecoration: "bold",
            marginTop: "0rem",
          }}
        >
          Our Latest Work
        </Typography>
        <div>
          <MultiplePhotosFrame Images={Photos} />
        </div>
        <Grid container xl={12} spacing={3} sx={{ marginTop: "3rem" }}>
          <Grid item xl={4} md={4} sx={{ order: { xs: 2, md: 1 } }}>
            <img
              src={
                "https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="image"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xl={8} md={8} sx={{ order: { xs: 2, md: 2 } }}>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              maxime beatae eius? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Id explicabo at beatae nulla est, animi
              obcaecati aspernatur ut! Porro accusamus obcaecati nobis ea? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque
              necessitatibus ad consectetur dolorem perspiciatis omnis
              consequatur blanditiis optio, praesentium rem doloremque debitis
            </Typography>
          </Grid>
          <Grid item xl={8} md={8} sx={{ order: { xs: 4, md: 3 } }}>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              maxime beatae eius? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Id explicabo at beatae nulla est, animi
              obcaecati aspernatur ut! Porro accusamus obcaecati nobis ea? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Neque
              necessitatibus ad consectetur dolorem perspiciatis omnis
              consequatur blanditiis optio, praesentium rem doloremque debitis
            </Typography>
          </Grid>
          <Grid item xl={4} md={4} sx={{ order: { xs: 3, md: 4 } }}>
            <img
              src={
                "https://images.pexels.com/photos/2563495/pexels-photo-2563495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="image"
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
