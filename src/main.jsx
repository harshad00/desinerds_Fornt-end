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
import AboutCompany from "./components/Footer/About.jsx";
import HowItWorks from "./components/Footer/HowItWorks.jsx";
import UserPage from "./pages/UserPage.jsx";
import MatchesPage from "./pages/MatchesPage.jsx";
import RoommateForm from "./components/RoomMate/RoomMateForm.jsx";
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
        path: "/About",
        element: <AboutCompany/>,
      },
      {
        path: "/howitworks",
        element: <HowItWorks/>,
      },
      {
        path:"/user/:id",
        element:<UserPage/>
      },
      {
        path:"/matches",
        element:<MatchesPage/>
      },
      {
        path:"/mateform",
        element:<RoommateForm/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
