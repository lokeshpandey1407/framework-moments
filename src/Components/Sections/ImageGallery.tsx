import ImageGallery from "react-image-gallery";

const Gallery = ({ startIndex, images }) => {
  return (
    <ImageGallery
      items={images}
      showPlayButton={false}
      startIndex={startIndex}
    />
  );
};
export default Gallery;
