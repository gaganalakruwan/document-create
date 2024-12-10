import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Main";
import Home from "../pages/Home";
import Bank from "../pages/Bank";

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
  {
    path: "/bank",
    element: <Bank></Bank>,
  },
]);

export default router;
