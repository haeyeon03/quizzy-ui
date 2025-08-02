import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import "./App.css";
function App() {
  return (
    <>
      <RouterProvider router={root} />
    </>
  );
}

export default App;
