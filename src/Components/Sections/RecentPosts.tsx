import { Box } from "@mui/material";

export type CardData = {
  title: string;
  date: string;
  category: string;
  description: string;
};

const RecentPosts = () => {
  return (
    <Box
      width={"100%"}
      sx={{
        minHeight: "300px",
      }}
    ></Box>
  );
};

export default RecentPosts;
