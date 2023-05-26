import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Root from "./Pages/Root/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import Error from "./Pages/Error/Error";
import "./index.css";
import "boxicons";
import Statistics from "./Pages/Statistics/Statistics";
import JobDetails from "./Pages/JobDetails/JobDetails";
import Applied from "./Pages/Applied/Applied";
import { getData, singelData } from "./utility/helper";
import Blog from "./Pages/Blog/Blog";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: getData,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "applied",
        element: <Applied></Applied>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader :  ({params}) => singelData(params.id)
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
