import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import './css/index.css'
import './css/fonts.css'
import './css/style.css'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

library.add(fab, fas, far)