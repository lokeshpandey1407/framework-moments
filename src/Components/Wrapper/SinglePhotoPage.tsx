import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import MultiplePhotosFrame from "./MultiplePhotosFrame";
import Frame from "./frameup.jpg";
import Haldi from "./Haldi";
import PreWedding from "./PreWedding";
import { useNavigate } from "react-router-dom";

const SinglePhotoPage = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  const [showPre, setShowPre] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigate = useNavigate();

  const handleButtonClick = (section) => {
    setShowAllPhotos(section === "all" ? !showAllPhotos : false);
    setShowPhotos(section === "photos" ? !showPhotos : false);
    setShowPre(section === "pre" ? !showPre : false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (section === "all") {
      navigate("/allPhotosPage");
    } else if (section === "photos") {
      navigate("/haldi");
    } else if (section === "pre") {
      navigate("/preWeddingPage");
    }
  };

  return (
    <div>
      <div
        style={{
          marginTop: "2.5rem",
          width: "100%",
          height: "70vh",
          backgroundImage: `url(${Frame})`,
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
          <Typography variant="body1">Your subheading or description</Typography>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "-5rem",
        }}
      >
        <div style={{ width: "255px" }}>
          <img
            src={Frame}
            alt="Alt text"
            style={{ width: "100%", borderRadius: "8px" }}
            onClick={() => handleButtonClick("all")}
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?
          </Typography>
        </div>
        <div style={{ width: "255px" }}>
          <img
            src={Frame}
            alt="Alt text"
            style={{ width: "100%", borderRadius: "8px" }}
            onClick={() => handleButtonClick("photos")}
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?
          </Typography>
        </div>
        <div style={{ width: "255px" }}>
          <img
            src={Frame}
            alt="Alt text"
            style={{ width: "100%", borderRadius: "8px" }}
            onClick={() => handleButtonClick("pre")}
          />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum hic
            assumenda sed?
          </Typography>
        </div>
      </div>

      <div
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
      <Container>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontSize: "1.2rem",
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            color: "#333",
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          We are a Boutique Wedding Studio providing a full range of
          professional Wedding Photography & Cinematography to our clients
          across the world. We have been professionally covering weddings for 13
          years and enjoying every moment of it. Our aim is to professionally
          capture the best and most loved moments, without losing their
          originality and natural content. We love to get to know our couples
          and their families and stay friends with them for years. We are not
          just a vendor showing up to do a job. We are Artists creating memories
          for you and your family. We hope you enjoy the stories told and hope
          that your story will be the next.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontSize: "1.2rem",
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            color: "#333",
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          We are a Boutique Wedding Studio providing a full range of
          professional Wedding Photography & Cinematography to our clients
          across the world. We have been professionally covering weddings for 13
          years and enjoying every moment of it. Our aim is to professionally
          capture the best and most loved moments, without losing their
          originality and natural content. We love to get to know our couples
          and their families and stay friends with them for years. We are not
          just a vendor showing up to do a job. We are Artists creating memories
          for you and your family. We hope you enjoy the stories told and hope
          that your story will be the next.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontSize: "1.2rem",
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            color: "#333",
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          We are a Boutique Wedding Studio providing a full range of
          professional Wedding Photography & Cinematography to our clients
          across the world. We have been professionally covering weddings for 13
          years and enjoying every moment of it. Our aim is to professionally
          capture the best and most loved moments, without losing their
          originality and natural content. We love to get to know our couples
          and their families and stay friends with them for years. We are not
          just a vendor showing up to do a job. We are Artists creating memories
          for you and your family. We hope you enjoy the stories told and hope
          that your story will be the next.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Georgia, Times, "Times New Roman", serif',
            fontSize: "1.2rem",
            lineHeight: "1.6",
            letterSpacing: "0.02em",
            color: "#333",
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "justify",
          }}
        >
          We are a Boutique Wedding Studio providing a full range of
          professional Wedding Photography & Cinematography to our clients
          across the world. We have been professionally covering weddings for 13
          years and enjoying every moment of it. Our aim is to professionally
          capture the best and most loved moments, without losing their
          originality and natural content. We love to get to know our couples
          and their families and stay friends with them for years. We are not
          just a vendor showing up to do a job. We are Artists creating memories
          for you and your family. We hope you enjoy the stories told and hope
          that your story will be the next.
        </Typography>
      </Container>
    </div>
  );
};

export default SinglePhotoPage;
