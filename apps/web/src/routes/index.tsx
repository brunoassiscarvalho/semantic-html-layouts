import { createBrowserRouter } from "react-router";
import { Home } from "../features/Home";
import { Login } from "../features/login/Login";
import Onboarding from "../features/onboarding/Onboarding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  { path: "*", element: <div>404 Not Found</div> },
]);
