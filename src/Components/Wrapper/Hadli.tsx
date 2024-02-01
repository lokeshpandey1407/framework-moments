import React, { useState } from 'react';
import { ImageList, ImageListItem, Modal, Button, Backdrop, useMediaQuery, ThemeProvider, createTheme } from '@mui/material';
import Photos from './Photos';

const theme = createTheme();

const Haldi = () => {
  const [openPhotoIndex, setOpenPhotoIndex] = useState<number | null>(null);
  const isMobile = useMediaQuery('(max-width:900px)');

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
    <ThemeProvider theme={theme}>
      <div>
        <ImageList
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            marginBottom: isMobile ? '20px' : '0',
          }}
          cols={isMobile ? 1 : 3}
        >
          {Photos.map((photo, index) => (
            <ImageListItem
              key={photo.img}
              onClick={() => handlePhotoClick(index)}
              sx={{
                width: isMobile ? '100%' : '30%',
                marginBottom: isMobile ? '10px' : '0',
                cursor: 'pointer',
              }}
            >
              <img
                srcSet={`${photo.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${photo.img}?w=164&h=164&fit=crop&auto=format`}
                alt={photo.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Modal open={openPhotoIndex !== null} onClose={handleCloseModal} BackdropComponent={Backdrop}>
          <div style={{ textAlign: 'center' }}>
            {openPhotoIndex !== null && (
              <>
                <img
                  src={Photos[openPhotoIndex].img}
                  alt={Photos[openPhotoIndex].title}
                  style={{
                    width: '100%',
                    maxHeight: isMobile ? '80vh' : 'auto',
                    objectFit: 'contain',
                    marginTop: isMobile ? '60px' : '0',
                  }}
                />
                <div style={{ textAlign: 'center', backgroundColor: 'white' }}>
                  <Button onClick={handlePrevPhoto}>Previous</Button>
                  <Button onClick={handleNextPhoto}>Next</Button>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default Haldi;
