import { createBrowserRouter } from "react-router-dom";
import {
  DirectorDashboardLayout,
  UserAuthLayout,
  HomeLayout,
  UserDashboardLayout,
  StationDashboardlayout,
} from "../components";
import {
  AgentHome,
  AgentRegister,
  Feedback,
  Landing,
  MakePayment,
  MakeRequest,
  Profile,
  StationHome,
  UserHome,
  UserLogin,
  UserRegister,
} from "../pages";
import { ErrorBoundary, NotFound } from "../utils";
import Registermallam from "../pages/stationdashboard/Registermallam";
import Notification from "../pages/stationdashboard/Notification";
import AssignMallam from "../pages/stationdashboard/AssignMallam";
import Verification from "../components/commons/props/Verification";
import DirectorAuth from "../components/layouts/directorAurhLayout/DirectorAuth";

export const element = createBrowserRouter([
  // landing page routes
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //userDashboard routes
  {
    path: "/user/home",
    element: <UserDashboardLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makepayment",
        element: <MakePayment />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "makerequest",
        element: <MakeRequest />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "feedback",
        element: <Feedback />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "profile",
        element: <Profile />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //user Authentication routes
  {
    path: "/user/register",
    element: <UserAuthLayout />,
    children: [
      {
        index: true,
        element: <UserRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/user/login",
    element: <UserAuthLayout />,
    children: [
      {
        index: true,
        element: <UserLogin />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //director Authentication routes
  {
    path: "/director/home",
    element: <DirectorDashboardLayout />,
    children: [
      {
        index: true,
        element: <AgentHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },
  {
    path: "/director/register",
    element: <DirectorAuth />,
    children: [
      {
        index: true,
        element: <AgentRegister />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //station  routes
  {
    path: "/station",
    element: <StationDashboardlayout />,
    children: [
      {
        index: true,
        element: <StationHome />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/mallam",
        element: <Registermallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/Notify",
        element: <Notification />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
      {
        path: "/station/assign",
        element: <AssignMallam />,
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
      },
    ],
  },

  //OTP Routes
  {
    path: "/Verification",
    element: <Verification />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
