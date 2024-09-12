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
import { allTaskLoader } from "../components/utils/allTaskLoader";
import SideBar from "../components/SideBar";
import Content from "../components/Content";
import { addNewTask } from "../components/utils/addTaskLoader";
import { editTask } from "../components/utils/editTaskLoader";
import { deleteTask } from "../components/utils/deleteTaskLoader";
import { importantTaskLoader } from "../components/utils/importantTaskLoader";
import { completedTaskLoader } from "../components/utils/completedLoader";

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
                                    } else if(request.method === "DELETE"){
                                        return deleteTask({request, params})
                                    }
                                },
                                element: <AllTask />,
                            },
                            {
                                path: "importantTask",
                                loader: importantTaskLoader,
                                action: async ({ params, request }) => {
                                    if (request.method === "POST") {
                                            return addNewTask({request, params})
                                    } else if (request.method === "PUT") {
                                            return editTask({request, params})
                                    } else if(request.method === "DELETE"){
                                        return deleteTask({request, params})
                                    }
                                },
                                element: <ImportantTask />,
                            },
                            {
                                path: "completedTask",
                                loader: completedTaskLoader,
                                action: async ({ params, request }) => {
                                    if (request.method === "POST") {
                                            return addNewTask({request, params})
                                    } else if (request.method === "PUT") {
                                            return editTask({request, params})
                                    } else if(request.method === "DELETE"){
                                        return deleteTask({request, params})
                                    }
                                },
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