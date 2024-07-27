import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./pages/Auth.jsx";
import EmailAuth from "./pages/changePassword/EmailAuth.jsx";
import ChangePassword from "./pages/changePassword/ChangePassword.jsx";
import Details from "./pages/Details.jsx";
import PropertyListings from "./pages/PropertyListings.jsx";
import AddProperty from "./pages/AddProperty.jsx";
import Success from "./pages/Success.jsx";
import Manager from "./pages/Manager.jsx";
import Manager2 from "./pages/Manager2.jsx";
import User from "./pages/User.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This makes the child route match the same path as the parent
        element: <Home />,
      },
      {
        path: "/manage-property/subitem2",
        element: <Manager />,
      },
      {
        path: "/manage-property/subitem1",
        element: <Manager2 />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/properties",
        element: <PropertyListings />,
      },
      {
        path: "/properties/:id",
        element: <Details />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/forgot_password",
        element: <EmailAuth />,
      },
      {
        path: "/change_password",
        element: <ChangePassword />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/addProperty",
        element: <AddProperty />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
