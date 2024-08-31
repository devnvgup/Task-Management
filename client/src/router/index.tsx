import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import AuthProvider from "../context/AuthProvider";

const AuthLayout = () => {
    return (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    );
  };

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        errorElement: "",
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/",
                element: <Homepage />,
            }
        ],
    },
]);

export default router