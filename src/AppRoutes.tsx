import { createHashRouter } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { CollectionPage } from "./pages/CollectionPage/CollectionPage";

const AppRoutes = createHashRouter([
  {
    path: '',
    element: <AuthLayout />,
    children: [

      { path: '', element: <HomePage /> },
      { path: "/collection/:id", element: <CollectionPage /> },
    ]
  },

]);

export default AppRoutes;