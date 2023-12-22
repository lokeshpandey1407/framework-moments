import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";

export const router = createBrowserRouter([
  {
    element: <Wrapper />,
    errorElement: <div>Error 404, Page not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/wedding",
        element: <div>Wedding</div>,
      },
      {
        path: "/pre_wedding",
        element: <div>Pre Wedding</div>,
      },
      {
        path: "/about_us",
        element: <div>About Us</div>,
      },
      {
        path: "/contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);
