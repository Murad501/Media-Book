import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/router";

function App() {
  return (
    <div>
      <div className="text-primary mx-auto min-h-screen">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
    </div>
  );
}

export default App;
