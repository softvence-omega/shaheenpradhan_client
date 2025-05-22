import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";
import Dashboard from "@/pages/Admin/Dashboard";
import HomePage from "@/pages/Home/HomePage";
import Login from "@/pages/Home/Login";
import SignUp from "@/pages/Home/Signup";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },

  /* Admin Layout */
  {
    path: "admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
