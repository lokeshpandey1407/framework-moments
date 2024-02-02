import { Box, Container, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  FiberManualRecordRounded,
} from "@mui/icons-material";

type ImageSliderProps = {
  imageUrls: {
    url: string;
    name: string;
  }[];
};

const ImageCarouser = ({ imageUrls }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) {
        return 0;
      } else return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) {
        return imageUrls.length - 1;
      } else return index - 1;
    });
  }
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 4500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          display: "flex",
        }}
      >
        {imageUrls.map((url) => (
          <img
            key={url.url}
            src={url.url}
            alt={url.name}
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
              display: "block",
              flexGrow: 0,
              flexShrink: 0,
              translate: `${-100 * imageIndex}%`,
              transition: "translate .8s ease-in-out",
            }}
          />
        ))}
      </div>

      <IconButton
        aria-label="prev"
        title="Prev"
        sx={{ position: "absolute", top: "40%", left: "2%" }}
        onClick={showPrevImage}
      >
        <KeyboardArrowLeftRounded sx={{ color: "white", fontSize: "40px" }} />
      </IconButton>
      <IconButton
        aria-label="next"
        title="Next"
        sx={{
          position: "absolute",
          top: "40%",
          right: "2%",
          display: "block",
        }}
        onClick={showNextImage}
      >
        <KeyboardArrowRightRounded sx={{ color: "white", fontSize: "40px" }} />
      </IconButton>
      <Container
        sx={{
          position: "absolute",
          bottom: ".5rem",

          left: "50%",
          translate: "-50%",
          textAlign: "center",
        }}
      >
        {imageUrls.map((_, index) => (
          <IconButton
            key={index}
            aria-label="prev"
            title="Prev"
            size="small"
            sx={{
              border: ".5px solid white",
              marginInline: "5px",
            }}
            onClick={() => {
              setImageIndex(index);
            }}
          >
            {index === imageIndex && (
              <FiberManualRecordRounded
                sx={{
                  fontSize: "8px",
                  color: "white",
                }}
              />
            )}
          </IconButton>
        ))}
      </Container>
    </Box>
  );
};

export default ImageCarouser;
