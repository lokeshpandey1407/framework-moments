import React, { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  Button,
  Backdrop,
  useMediaQuery,
} from "@mui/material";
import Photos from "./Photos";

const MultiplePhotosFrame = () => {
  const [openPhotoIndex, setOpenPhotoIndex] = useState<number | null>(null);
  const isExtraSmallScreen = useMediaQuery("(max-width:400px)");
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery("(max-width:960px)");

  const cols = isExtraSmallScreen
    ? 1
    : isSmallScreen
    ? 2
    : isMediumScreen
    ? 3
    : 5;

  const handlePhotoClick = (photoIndex: number) => {
    setOpenPhotoIndex(photoIndex);
  };

  const handleCloseModal = () => {
    setOpenPhotoIndex(null);
  };

  const handleNextPhoto = () => {
    if (openPhotoIndex !== null && openPhotoIndex < Photos.length - 1) {
      setOpenPhotoIndex(openPhotoIndex + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (openPhotoIndex !== null && openPhotoIndex > 0) {
      setOpenPhotoIndex(openPhotoIndex - 1);
    }
  };

  return (
    <div>
      <ImageList sx={{ width: "100%" }} cols={cols}>
        {Photos.map((photo, index) => (
          <ImageListItem
            key={photo.img}
            onClick={() => handlePhotoClick(index)}
          >
            <img
              srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
              alt={photo.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        open={openPhotoIndex !== null}
        onClose={handleCloseModal}
        BackdropComponent={Backdrop}
      >
        <div>
          {openPhotoIndex !== null && (
            <div>
              <img
                src={Photos[openPhotoIndex].img}
                alt={Photos[openPhotoIndex].title}
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                  marginTop: "60px",
                }}
              />
              <div style={{ textAlign: "center", backgroundColor: "white" }}>
                <Button onClick={handlePrevPhoto}>Previous</Button>
                <Button onClick={handleNextPhoto}>Next</Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MultiplePhotosFrame;
