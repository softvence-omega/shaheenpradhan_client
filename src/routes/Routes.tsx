import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";
import CorrentBookingPage from "@/pages/user/CorrentBookingPage";
import PastBookingPage from "@/pages/user/PastBookingPage";
import UpcomingBookingPage from "@/pages/user/UpcomingBookingPage";
import HomePage from "@/pages/home/HomePage";
import Reuserable from "@/pages/home/Reuserable";
import { createBrowserRouter } from "react-router-dom";
import StepConfirmBooking from "@/pages/user/StepConfirmBooking";
import UserLayout from "@/layout/UserLayout";
import Dashboard from "@/pages/user/Dashboard";
import BillingInfo from "@/pages/user/BillingInfo";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";

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
        element: <Register />,
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
      {
        path: "past-booking",
        element: <PastBookingPage></PastBookingPage>,
      },
      {
        path: "step-confirm-booking",
        element: <StepConfirmBooking></StepConfirmBooking>,
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
      {
        path: "dashboard",
        element: <Dashboard />,
      },

      /* Booking */
      {
        path: "current-booking",
        element: <CorrentBookingPage></CorrentBookingPage>,
      },
      {
        path: "upcoming-booking",
        element: <UpcomingBookingPage></UpcomingBookingPage>,
      },
      {
        path: "past-booking",
        element: <PastBookingPage></PastBookingPage>,
      },
      {
        path: "step-confirm-booking",
        element: <StepConfirmBooking></StepConfirmBooking>,
      },
      {
        path: "billing",
        element: <BillingInfo></BillingInfo>,
      },
    ],
  },
]);
