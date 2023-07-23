import { createBrowserRouter } from "react-router-dom";
import Home from "../componements/Home/Home";
import Login from "../componements/User/Login";
// import Registation from "../componements/User/Registation";
import Main from "../Layout/Main"
import Blog from "../componements/Blog/Blog";
import Registation from "../componements/User/Registation";
// import Admission from "../componements/Admission/Admission";
import MyCollege from "../componements/MyCollege/MyCollege";
import About from "../componements/About/About";
import ForgotPass from "../componements/User/ForgotPass/ForgotPass";
import Collages from "../componements/Collages/Collages";
import Collage from "../componements/Collages/Collage";
import PrivateRoute from "../providers/PrivateRoute";
import Profile from "../componements/Deshboard/Profile/Profile";
import Edit from "../componements/Deshboard/Profile/Edit";

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
                path: 'collages',
                element: <PrivateRoute><Collages></Collages></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/collages')
            },
          
            {
                path: 'myCollege',
                element: <PrivateRoute><MyCollege></MyCollege></PrivateRoute>
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
                path: "/collage/:_id",
                element: <PrivateRoute><Collage></Collage></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/collages')
            },
            {
                path: "/collageview/:_id",
                element: <PrivateRoute><Collage></Collage></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/collageview')
            },
            {
                path: 'edit',
                element: <Edit></Edit>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
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
    }
]);