import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import BrowseJobs from "./pages/BrowseJobs/BrowseJobs.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ContactUs from "./pages/ContactUs/ContactUs.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import PostaJob from "./pages/PostaJob/PostaJob.jsx";
import Hero from "./pages/Hero/Hero.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import DashBoard from "./Dashboard.jsx";
import Home from "./pages/Home/Home.jsx";
import ManageVacancies from "./pages/ManageVacancies/ManageVacancies.jsx";
import ManageApplicants from "./pages/ManageApplicants/ManageApplicants.jsx";
import TestResults from "./pages/TestResults/TestResults.jsx";
import TestSetup from "./pages/TestSetup/TestSetup.jsx";
import Messages from "./pages/Messages/Messages.jsx";
import CompanyProfile from "./pages/Companyprofile/CompanyProfile.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import NeedHelp from "./pages/NeedHelp/NeedHelp.jsx";
import store, { persistor } from "./features/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/browsejobs",
        element: <BrowseJobs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/postajob",
        element: <PostaJob />,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard/>,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/managevacancies",
        element: <ManageVacancies />,
      },
      {
        path: "/dashboard/manageapplicants",
        element: <ManageApplicants />,
      },
      {
        path: "/dashboard/testresult",
        element: <TestResults />,
      },
      {
        path: "/dashboard/testsetup",
        element: <TestSetup />,
      },
      {
        path: "/dashboard/messages",
        element: <Messages/>,
      },
      {
        path: "/dashboard/companyprofile",
        element: <CompanyProfile />,
      },
      {
        path: "/dashboard/settings",
        element: <Settings />,
      },
      {
        path: "/dashboard/needhelp",
        element: <NeedHelp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);