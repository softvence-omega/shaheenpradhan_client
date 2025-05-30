import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";
import PastBookingPage from "@/pages/user/PastBookingPage";
import UpcomingBookingPage from "@/pages/user/UpcomingBookingPage";
import HomePage from "@/pages/home/HomePage";
import Reuserable from "@/components/home/Reuserable";
import { createBrowserRouter } from "react-router-dom";
import StepConfirmBooking from "@/pages/user/StepConfirmBooking";
import UserLayout from "@/layout/UserLayout";
import Dashboard from "@/pages/user/Dashboard";
import BillingInfo from "@/pages/user/BillingInfo";
import PendingPage from "@/pages/user/PendingPage";
import ConfirmBookPage from "@/pages/user/ConfirmBookPage";
import ConfirmRequestPage from "@/pages/user/ConfirmRequestPage";
import UserHomePage from "@/pages/user/UserHomePage";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "@/pages/profile/Profile";
import CurrentBookingPage from "@/pages/user/CorrentBookingPage";
import UserProfilePage from "@/pages/user/UserProfilePage";
import NotificationPage from "@/pages/user/NotificationPage";
import AssistantLayout from "@/layout/AssistantLayout";
import AssistantDashboardPage from "@/pages/assistant/AssistantDashboardPage";
import AssistantBilling from "@/components/assistant/AssistantBilling/AssistantBilling";
import AssistantBillingPage from "@/pages/assistant/AssistantBillingPage";
import AssistantProfilePage from "@/pages/assistant/AssistantProfilePage";
import AiMatchMaking from "@/pages/ai-match/AiMatchMaking";
import AssistantsPage from "@/pages/AssistantsPage/AssistantsPage";
import { SignupTabs } from "@/pages/signup/SignupTabs";

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
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "ai-match",
        element: <AiMatchMaking />,
      },
      {
        path: "assistants",
        element: <AssistantsPage />,
      },
      {
        path: "signups",
        element: <SignupTabs />,
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
        path: "home",
        element: <UserHomePage />,
      },

      /* Find Assistant */
      {
        path: "assistant-booking",
        element: <ConfirmBookPage />,
      },

      {
        path: "assistant-request-confirm",
        element: <ConfirmRequestPage />,
      },
      {
        path: "user-profile",
        element: <UserProfilePage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
      /* Booking */
      {
        path: "current-booking",
        element: <CurrentBookingPage />,
      },
      {
        path: "upcoming-booking",
        element: <UpcomingBookingPage />,
      },
      {
        path: "pending",
        element: <PendingPage />,
      },
      {
        path: "past-booking",
        element: <PastBookingPage />,
      },

      {
        path: "step-confirm-booking",
        element: <StepConfirmBooking />,
      },

      {
        path: "billing",
        element: <BillingInfo />,
      },
    ],
  },

  /** ASSISTANT LAYOUT **/
  {
    path: "assistant",
    element: <AssistantLayout />,
    children: [
      {
        index: true,
        element: <AssistantDashboardPage />,
      },
      {
        path: "home",
        element: <AssistantDashboardPage />,
      },
      {
        path: "availability",
        element: <UserHomePage />,
      },

      {
        path: "assistant-profile",
        element: <AssistantProfilePage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
      /* Booking */
      {
        path: "current-booking",
        element: <CurrentBookingPage />,
      },
      {
        path: "upcoming-booking",
        element: <UpcomingBookingPage />,
      },
      {
        path: "pending",
        element: <PendingPage />,
      },
      {
        path: "past-booking",
        element: <PastBookingPage />,
      },

      {
        path: "step-confirm-booking",
        element: <StepConfirmBooking />,
      },

      {
        path: "assistant-billingg",
        element: <AssistantBillingPage />,
      },
    ],
  },
]);
