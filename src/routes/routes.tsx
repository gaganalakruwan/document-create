import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // children: [
    //   {
    //     path: "/home",
    //     element: <Home></Home>,
    //   },
    // ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
]);

export default router;
