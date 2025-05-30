import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import AdminLayout from "@/layout/AdminLayout";
import MainLayout from "@/layout/MainLayout";
import PastBookingPage from "@/pages/user/PastBookingPage";
import UpcomingBookingPage from "@/pages/user/UpcomingBookingPage";
import HomePage from "@/pages/home/HomePage";

import { createBrowserRouter, Navigate } from "react-router-dom";
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
import CurrentBookingPage from "@/pages/user/CorrentBookingPage";
import UserProfilePage from "@/pages/user/UserProfilePage";
import NotificationPage from "@/pages/user/NotificationPage";
import AssistantLayout from "@/layout/AssistantLayout";
import AssistantDashboardPage from "@/pages/assistant/AssistantDashboardPage";
import AssistantBilling from "@/components/assistant/AssistantBilling/AssistantBilling";
import AssistantBillingPage from "@/pages/assistant/AssistantBillingPage";
import AssistantProfilePage from "@/pages/assistant/AssistantProfilePage";
import MytaskInformation from "@/pages/assistant/MytaskInformation";
import TaskBookingRequest from "@/pages/assistant/TaskBookingRequest";
import TaskCurrentPage from "@/pages/assistant/TaskCurrentPage";
import TaskUpcomingPage from "@/pages/assistant/TaskUpcomingPage";
import TaskCompletedPages from "@/pages/assistant/TaskCompletedPages";
import CardCurrentPage from "@/pages/assistant/CardCurrentPage";
import CardUpcamingPage from "@/pages/assistant/CardUpcamingPage";
import CardBookingRequestPage from "@/pages/assistant/CardBookingRequestPage";
import CardCompletedPage from "@/pages/assistant/CardCompletedPage";
import EducationPage from "@/pages/home/EducationPage";
import PersonalInfoPage from "@/pages/home/PersonalInfoPage";
import WorkPreferencePage from "@/pages/home/WorkPreferencePage";
import ExperienceSkillPage from "@/pages/home/ExperienceSkillPage";
import Reuserable from "@/components/home/Reuserable";

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
      /* Arfin form */
      {
        path: "personal-info",
        element: <PersonalInfoPage />,
      },
      {
        path: "work-preferance",
        element: <WorkPreferencePage />,
      },
      {
        path: "experience-skill",
        element: <ExperienceSkillPage />,
      },
      {
        path: "education",
        element: <EducationPage />,
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
        element: <Navigate to="home" replace />,
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
        path: "current-task",
        element: <CardCurrentPage />,
      },
      {
        path: "upcoming-task",
        element: <CardUpcamingPage />,
      },
      {
        path: "booking-task",
        element: <CardBookingRequestPage />,
      },
      {
        path: "completed-task",
        element: <CardCompletedPage />,
      },
      /* Booking-123 by ID */
      {
        path: "current-task-1",
        element: <TaskCurrentPage />,
      },
      {
        path: "upcoming-task-2",
        element: <TaskUpcomingPage />,
      },
      {
        path: "booking-task-3",
        element: <TaskBookingRequest />,
      },
      {
        path: "completed-task-4",
        element: <TaskCompletedPages />,
      },

      /* Billing card */
      {
        path: "assistant-billing",
        element: <AssistantBillingPage />,
      },
    ],
  },
]);
