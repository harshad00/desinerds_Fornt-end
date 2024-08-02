import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundaries.jsx";
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
import UpdateProperty from "./pages/UpdateProperty.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UpdateUser from "./pages/UpdateUser.jsx";
import Admin from "./pages/admin/Admin.jsx";
import AdminLayout from "./pages/admin/AdminLayout.jsx";
import UserManage from "./pages/admin/UserManage.jsx";
import PropertyManage from "./pages/admin/PropertyManage.jsx";
import AdminLogin from "./pages/admin/Adminlogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
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
        element: <ProtectedRoute element={<ChangePassword />} />,
      },
      {
        path: "/user",
        element: <ProtectedRoute element={<User />} />,
      },
      {
        path: "/addProperty",
        element: <ProtectedRoute element={<AddProperty />} />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/updateProperty/:id",
        element: <ProtectedRoute element={<UpdateProperty />} />,
      },
      {
        path: "/UpdateUser/:id",
        element: <ProtectedRoute element={<UpdateUser />} />,
      },
      {
        path: "/admin",
        element: <AdminLayout />, 
        children: [
          {
            index: true,
            element: <Admin />,
          },
          {
            path: "/admin/adminlogin",
            element: <AdminLogin/>,
          },
          {
            path: "/admin/usermanagement",
            element: <UserManage/>,
          },
          {
            path: "/admin/propertymanagement",
            element: <PropertyManage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>
);
