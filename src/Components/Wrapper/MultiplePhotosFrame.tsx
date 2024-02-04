import { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  useMediaQuery,
  Container,
} from "@mui/material";
import Photos from "./Photos";
import Gallery from "../Sections/ImageGallery";

const MultiplePhotosFrame = ({ Images }) => {
  const [openPhotoIndex, setOpenPhotoIndex] = useState<number | null>(null);
  const [index, setIndex] = useState<number>(0);
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
    setIndex(photoIndex);

    setOpenPhotoIndex(photoIndex);
  };

  const handleCloseModal = () => {
    setOpenPhotoIndex(null);
  };

  return (
    <Container maxWidth="lg">
      <ImageList sx={{ width: "100%" }} cols={cols} gap={10} variant="quilted">
        {Images.map((photo, index) => (
          <ImageListItem
            key={photo.img}
            onClick={() => handlePhotoClick(index)}
            sx={{ cursor: "pointer" }}
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

      <Modal open={openPhotoIndex !== null} onClose={handleCloseModal}>
        <Gallery startIndex={index} images={Images} />
      </Modal>
    </Container>
  );
};

export default MultiplePhotosFrame;
