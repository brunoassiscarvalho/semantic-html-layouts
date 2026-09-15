import { createBrowserRouter } from "react-router";
import { Home } from "../features/Home";
import { Login } from "../features/login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  { path: "*", element: <div>404 Not Found</div> },
]);
