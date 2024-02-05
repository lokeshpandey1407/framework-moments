import { createBrowserRouter } from "react-router-dom";
import Wrapper from "./Common/Wrapper";
import Home from "./Components/Home/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Haldi from "./Components/Haldi/Haldi";
import PreWedding from "./Components/Pre_Wedding/PreWedding";
import WeddingPage from "./Components/Wedding/WeddingPage";
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
        element: <WeddingPage />,
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
