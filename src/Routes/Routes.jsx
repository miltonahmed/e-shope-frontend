import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import ContactPage from "../Pages/ContactPage";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element:<HomePage/>
      },
      {
        path: '/',
        element:<HomePage/>
      },
      {
        path: '/contact',
        element:<ContactPage/>
      }
    ]
    
  }
])