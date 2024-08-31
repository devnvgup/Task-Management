import {
    Outlet,
    createBrowserRouter,
} from "react-router-dom";
import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginPage";
import AuthProvider from "../context/AuthProvider";
import AllTask from "../components/AllTask";
import ImportantTask from "../components/ImportantTask";
import CompletedTask from "../components/CompletedTask";
import DoItNowTask from "../components/DoItNowTask";

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
                children: [
                    {
                        path: "/allTask",
                        element: <AllTask />,
                    },
                    {
                        path: "/importantTask",
                        element: <ImportantTask />,
                    },
                    {
                        path: "/completedTask",
                        element: <CompletedTask />,
                    },
                    {
                        path: "/doItNowTask",
                        element: <DoItNowTask />,
                    }
                ]
            }
        ],
    },
]);

export default router