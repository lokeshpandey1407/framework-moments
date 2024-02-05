import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PhotoIcon from "@mui/icons-material/Photo";
import CameraIcon from "@mui/icons-material/Camera";

export const URLS = [
  {
    url: "https://images.pexels.com/photos/10955585/pexels-photo-10955585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "image1",
  },
  {
    url: "https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "image2",
  },
  {
    url: "https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "image3",
  },
];

export const CardArray = [
  {
    title: "Wedding Photos",
    imgUrl: `https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    description:
      "In this enchanting wedding photograph, the bride and groom stand bathed in the soft glow of sunlight, creating an ethereal ambiance that encapsulates the romance of their special day. The couple shares a tender moment. ",
    category: "wedding",
    icon: CameraAltIcon,
  },
  {
    title: "Haldi Photos",
    imgUrl: `https://images.pexels.com/photos/20020353/pexels-photo-20020353/free-photo-of-haldi-ceremony-fotographiya.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    description:
      "The bride's flowing white gown and the groom's sharp attire harmonize elegantly, symbolizing the union of two souls destined to journey through life together. Surrounding them, nature provides a picturesque backdrop.",
    category: "haldi",
    icon: PhotoIcon,
  },
  {
    title: "Pre Wedding Photos",
    imgUrl: `https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
    description:
      " This photograph beautifully captures the timeless essence of a wedding day, portraying a couple embracing the promise of forever amidst the serenity of their shared joy.",
    category: "pre_wedding",
    icon: CameraIcon,
  },
];
