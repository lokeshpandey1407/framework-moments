import React, { useState } from "react";
import { Typography, Container, Box, Paper, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@mui/styles";
import Haldi from "../Wrapper/Haldi";
import PreWedding from "../Wrapper/PreWedding";
import MultiplePhotosFrame from "../Wrapper/MultiplePhotosFrame";
import { useNavigate } from "react-router-dom";
import Frame from "../Wrapper/frameup.jpg";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const images = [
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
];

const useStyles = makeStyles((theme) => ({
  carouselContainer: {
    width: "100%",
    height: "70vh",
    overflow: "hidden",
  },
  carouselItem: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  images: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  caption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
  },
  image: {
    width: "100%",
    objectFit: "cover",
    borderRadius: "8px",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  header: {
    marginBottom: theme.spacing(2),
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    margin: theme.spacing(2, 0),
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  contentContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    flexWrap: "wrap", 
  },
  icon: {
    fontSize: 50,
    color: "#430e0e",
  },
  fadeIn: {
    animation: `$fadeIn 1s ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
}));

const Home = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showPre, setShowPre] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    setShowAllPhotos(section === "all" ? !showAllPhotos : false);
    setShowPhotos(section === "photos" ? !showPhotos : false);
    setShowPre(section === "pre" ? !showPre : false);

    if (section === "all") {
      navigate("/allPhotosPage");
    } else if (section === "photos") {
      navigate("/haldi");
    } else if (section === "pre") {
      navigate("/preWeddingPage");
    }
  };

  const classes = useStyles();

  const Item = ({ item, index }) => (
    <Paper className={classes.carouselItem}>
      <img className={classes.images} src={item} alt={`Slide ${index + 1}`} />
      <Typography variant="h5" className={classes.caption}>
        Slide {index + 1} Caption
      </Typography>
    </Paper>
  );

  return (
    <div>
      <div className={classes.carouselContainer}>
        <Carousel
          animation="slide"
          interval={5000}
          timeout={500}
          indicators={true}
          navButtonsAlwaysInvisible={true}
          stopAutoPlayOnHover={true}
        >
          {images.map((image, index) => (
            <Item key={index} item={image} index={index} />
          ))}
        </Carousel>
      </div>
      <Container>
        <Box mt={4}>
          <Typography variant="body1">
            Thank you for visiting our wedding page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </Typography>
        </Box>
        <div
          className={classes.buttonContainer}
          style={{
            margin: "2rem 0 0 0 ",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <CameraAltIcon className={classes.icon} />
                  <Typography>Wedding photos</Typography>
                </div>
                <img
                  src={Frame}
                  alt="Alt text"
                  className={classes.image}
                  onClick={() => handleButtonClick("all")}
                />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  hic assumenda sed?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum hic assumenda sed?
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <CameraAltIcon className={classes.icon} />
                  <Typography>Wedding photos</Typography>
                </div>
                <img
                  src={Frame}
                  alt="Alt text"
                  className={classes.image}
                  onClick={() => handleButtonClick("photos")}
                />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  hic assumenda sed?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum hic assumenda sed?
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <CameraAltIcon className={classes.icon} />
                  <Typography>Wedding photos</Typography>
                </div>
                <img
                  src={Frame}
                  alt="Alt text"
                  className={classes.image}
                  onClick={() => handleButtonClick("pre")}
                />
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  hic assumenda sed?Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ipsum hic assumenda sed?
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div
          className={classes.contentContainer}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          {showAllPhotos && <MultiplePhotosFrame />}
          {showPhotos && <Haldi />}
          {showPre && <PreWedding />}
        </div>
        <Typography
          variant="body1"
          style={{ color: "grey", textDecoration: "bold", marginTop: "0rem" }}
        >
          Our Latest Work
        </Typography>
        <div>
          <MultiplePhotosFrame />
          <Haldi />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "2rem 0 0 0",
            height: "16rem",
          }}
        >
          <Typography style={{ width: "64%", height: "4rem" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            maxime beatae eius? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Id explicabo at beatae nulla est, animi obcaecati
            aspernatur ut! Porro accusamus obcaecati nobis ea? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Neque necessitatibus ad
            consectetur dolorem perspiciatis omnis consequatur blanditiis optio,
            praesentium rem doloremque debitis magni sit porro. Sapiente, earum
            necessitatibus quisquam laudantium vel autem accusamus atque.
          </Typography>
          <div
            style={{
              width: "50%",
              height: "500px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={Frame}
              alt=""
              style={{ width: "100%", height: "50%", borderRadius: "8px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "2rem 0 0 0",
            height: "20rem",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "428px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={Frame}
              alt=""
              style={{ width: "100%", height: "50%", borderRadius: "8px" }}
            />
          </div>
          <Typography style={{ width: "40%" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            maxime beatae eius? Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Id explicabo at beatae nulla est, animi obcaecati
            aspernatur ut! Porro accusamus obcaecati nobis ea? Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Neque necessitatibus ad
            consectetur dolorem perspiciatis omnis consequatur blanditiis optio,
            praesentium rem doloremque debitis magni sit porro. Sapiente, earum
            necessitatibus quisquam laudantium vel autem accusamus atque.
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Home;
