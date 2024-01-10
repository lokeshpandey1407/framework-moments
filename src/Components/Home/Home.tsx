import { Box } from "@mui/material";
import ImageCarousel from "../Sections/ImageCarousel";

export const URLS = [
  {
    url: "https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "image1",
  },
  {
    url: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "image1",
  },
  {
    url: "https://images.unsplash.com/photo-1431440869543-efaf3388c585?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "image1",
  },
];

const Home = () => {
  return (
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
  );
};

export default Home;
