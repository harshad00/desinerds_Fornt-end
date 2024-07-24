import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import Auth from "./pages/Auth.jsx";
// import ChangePassword from "./pages/ChangePassword.jsx";
import EmailAuth from "./pages/changePassword/EmailAuth.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Manager from "./pages/Manager.jsx";
import Manager2 from "./pages/Manager2.jsx";
import Details from "./pages/Details.jsx"; 
// import Property from "./pages/Property.jsx";
import PropertyListings  from "./pages/PropertyListings.jsx";
import ChangePassword from "./pages/changePassword/ChangePassword.jsx";
import AddProperty from "./pages/AddPropary.jsx";
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
        path: "/",
        element: <Details />,
      },
      {
        path: "/properties",
        element: <PropertyListings />,
      },
      {
        path: "/properties/:id",
        element:<Details/>,
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
        path: "/forgot_pasword",
        element: <EmailAuth />,
      },
      {
        path: "/change_password",
        element: <ChangePassword />,
      },
      {
        path: "/addPropary",
        element: <AddProperty/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
