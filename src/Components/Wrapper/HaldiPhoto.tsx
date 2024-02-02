import { useState } from "react";
import { Button } from "@mui/material";
import MultiplePhotosFrame from "./MultiplePhotosFrame";
import Frame from "./frameup.jpg";

const HaldiPhoto = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [openPhoto, setOpenPhoto] = useState(null);

  const handleClick = () => {
    setShowAllPhotos(!showAllPhotos);
    if (showAllPhotos) {
      setOpenPhoto(null);
    }
  };

  return (
    <div>
      <Button
        onClick={handleClick}
        style={{ backgroundColor: "white", marginTop: "5px" }}
      >
        {showAllPhotos ? "Wedding Photos" : ""}
        {!showAllPhotos && (
          <img src={Frame} style={{ width: "380px", height: "200px" }} />
        )}
      </Button>
      {showAllPhotos && <MultiplePhotosFrame />}
      {openPhoto && (
        <div className="fullscreen-photo">
          <img src={photos} />
          <button onClick={() => setOpenPhoto(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default HaldiPhoto;
