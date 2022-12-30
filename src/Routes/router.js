import Chat from "../Layout/Chat";
import Login from "../Layout/Login";
import Main from "../Layout/Main";
import Signup from "../Layout/Signup";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <Media></Media>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/message",
    element: <Chat></Chat>,
    children: [
      {
        path: "/message",
        element: <Message></Message>,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signin",
    element: <Login></Login>,
  },
]);

export default router;
