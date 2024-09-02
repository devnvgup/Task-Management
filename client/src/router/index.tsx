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
import { addNewTask, allTaskLoader, editTask } from "../components/utils/allTaskLoader";
import SideBar from "../components/SideBar";
import Content from "../components/Content";

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
                        element: <SideBar />,
                    },
                    {
                        element: <Content />,
                        children: [
                            {
                                path: "allTask",
                                loader: allTaskLoader,
                                action: async ({ params, request }) => {
                                    if (request.method === "POST") {
                                            return addNewTask({request, params})
                                    } else if (request.method === "PUT") {
                                            return editTask({request, params})
                                    }
                                },
                                element: <AllTask />,
                            },
                            {
                                path: "importantTask",
                                element: <ImportantTask />,
                            },
                            {
                                path: "completedTask",
                                element: <CompletedTask />,
                            },
                            {
                                path: "doItNowTask",
                                element: <DoItNowTask />,
                            }
                        ]
                    },
                ]
            }
        ],
    },
]);

export default router