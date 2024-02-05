import { useState } from "react";
import {
  ImageList,
  ImageListItem,
  Modal,
  useMediaQuery,
  Container,
} from "@mui/material";
import Gallery from "../Components/Sections/ImageGallery";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";

const MultiplePhotosFrame = ({ Images }) => {
  const [openPhotoModal, setOpenPhotoModal] = useState<boolean>(false);
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
    setOpenPhotoModal(true);
  };

  const handleCloseModal = () => {
    setOpenPhotoModal(false);
  };

  return (
    <Container maxWidth="lg">
      <ImageList sx={{ width: "100%" }} cols={cols} gap={10} variant="quilted">
        {Images.map((photo, index) => (
          <ImageListItem
            key={photo.img}
            onClick={() => handlePhotoClick(index)}
            sx={{
              cursor: "pointer",
              position: "relatve",

              ":hover .fullscreen-icon": {
                opacity: 1,
              },
            }}
          >
            <img
              srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
              alt={photo.title}
              loading="lazy"
            />
            <ViewCarouselIcon
              fontSize="large"
              className="fullscreen-icon"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                color: "rgba(248,248,255,0.6)",
                transform: "translate(-50%, -50%)",
                height: "100%",
                width: "100%",
                opacity: 0,
                transition: "opacity 0.5s ease",
                backgroundColor: "rgba(28,28,25,0.5)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal open={openPhotoModal} onClose={handleCloseModal}>
        <Gallery startIndex={index} images={Images} />
      </Modal>
    </Container>
  );
};

export default MultiplePhotosFrame;
