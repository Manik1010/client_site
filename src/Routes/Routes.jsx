import { createBrowserRouter } from "react-router-dom";
import Home from "../componements/Home/Home";
import Login from "../componements/User/Login";
// import Registation from "../componements/User/Registation";
import Main from "../Layout/Main"
import Blog from "../componements/Blog/Blog";
import Deshboard from "../Layout/Deshboard";
import AdminDeshboard from "../componements/Deshboard/AdminDeshboard/AdminDeshboard";
import AddItem from "../componements/Deshboard/AddItem/AddItem";
import ManageItem from "../componements/Deshboard/ManageItem/ManageItem";
import Registation from "../componements/User/Registation";
import Colleges from "../componements/Colleges/Colleges";
import Admission from "../componements/Admission/Admission";
import MyCollege from "../componements/MyCollege/MyCollege";
import About from "../componements/About/About";
import ForgotPass from "../componements/User/ForgotPass/ForgotPass";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'admission',
                element: <Admission></Admission>
            },
            {
                path: 'myCollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'forget',
                element: <ForgotPass></ForgotPass>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'registation',
                element: <Registation></Registation>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Deshboard></Deshboard>,
        children: [

            {
                path: 'adminDashboard',
                element: <AdminDeshboard></AdminDeshboard>
            },
            {
                path: 'addItem',
                element: <AddItem></AddItem>
            },
            {
                path: 'manageItem',
                element: <ManageItem></ManageItem>
            },
            {
                path: 'allusers',
                element: <ManageItem></ManageItem>
            }

        ]
    },
]);