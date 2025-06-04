import {
  createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Error from "../components/Page/error/Error";
import Home from "../components/Page/home/Home";
import Queries from "../components/Page/Queries/Queries";
import RecommForMe from "../components/Page/RecommForMe/RecommForMe";
import Login from "../components/Auth/Login";
import Myrecommendations from "../components/Page/Myrecommendations/Myrecommendations";
import MyQueries from "../components/Page/MyQueries/MyQueries";
import Register from "../components/Auth/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true, Component:Home}, 
        {path:'/queries', Component: Queries},
        {path:'/recomendations', element: <RecommForMe></RecommForMe>},
        {path:'/login', Component:Login },
        {path:'/register', Component:Register },
        {path:'/myRecommendations', element:<Myrecommendations></Myrecommendations>},
        {path:'/myQueries', element:<MyQueries></MyQueries>},
    ]
  },
]);
