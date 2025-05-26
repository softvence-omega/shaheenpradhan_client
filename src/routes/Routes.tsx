import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";
import UserLayout from "@/layout/UserLayout";
import CorrentBookingPage from "@/pages/admin/CorrentBookingPage";
import Dashboard from "@/pages/admin/Dashboard";
import UpcomingBookingPage from "@/pages/admin/UpcomingBookingPage";
import HomePage from "@/pages/home/HomePage";
import Login from "@/pages/home/Login";
import Reuserable from "@/pages/home/Reuserable";
import SignUp from "@/pages/home/Signup";

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
      {
        path: "reuserable",
        element: <Reuserable />,
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
      {
        path: "current-booking",
        element: <CorrentBookingPage></CorrentBookingPage>,
      },
      {
        path: "upcoming-booking",
        element: <UpcomingBookingPage></UpcomingBookingPage>,
      },
    ],
  },

  /** USER LAYOUT **/
  {
    path: "user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "user-dashboard",
        element: <UserDashboard />,
      },
    ],
  },
]);
