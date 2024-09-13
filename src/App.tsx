import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./components/elements/Sidebar";
import Dashboard from "./components/elements/Dashboard";

function App() {
  // return <RouterProvider router={router} />;
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;

library.add(fab, fas, far);
