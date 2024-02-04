import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";
import Contact from "./Components/Wrapper/Contact";
import About from "./Components/Wrapper/About";
import SinglePhotoPage from "./Components/Wrapper/SinglePhotoPage";
import Haldi from "./Components/Wrapper/Haldi";
import PreWedding from "./Components/Wrapper/PreWedding";
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
        element: <SinglePhotoPage />,
      },
      {
        path: "/pre_wedding",
        element: <PreWedding />,
      },
      {
        path: "/about_us",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/haldi",
        element: <Haldi />,
      },
    ],
  },
]);
