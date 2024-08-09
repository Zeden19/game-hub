import { createBrowserRouter } from "react-router-dom";
import Navigation from "../components/Navigation.tsx";
import GameDetailsPage from "./GameDetailsPage.tsx";
import HomePage from "./HomePage.tsx";
import ErrorPage from "./ErrorPage.tsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailsPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default routes;
