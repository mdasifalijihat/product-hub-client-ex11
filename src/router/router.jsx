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
import PrivateRouter from "./PrivateRouter";
import AddQueries from "../components/Page/MyQueries/AddQueries";
import ViewDetails from "../components/Page/MyQueries/ViewDetails";
import UpdateQuery from "../components/Page/MyQueries/UpdateQuery";
import QueryDetails from "../components/Page/Queries/QueryDetails";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<Error></Error>,
    children:[
        {index:true, Component:Home}, 
        {path:'/queries', Component: Queries},
        {
          path:'/recomendations',
           element:<PrivateRouter> <RecommForMe></RecommForMe></PrivateRouter>
          },
        {path:'/login', Component:Login },
        {path:'/register', Component:Register },
        {
          path:'/myRecommendations', 
          element:<PrivateRouter> <Myrecommendations></Myrecommendations> </PrivateRouter>},
        {
          path:'/myQueries', 
          element:<PrivateRouter><MyQueries></MyQueries></PrivateRouter>
        },
        {
          path:'/addqueries', 
          element:<PrivateRouter><AddQueries></AddQueries></PrivateRouter>
        },
        {
          path:'/query/:id', 
          element:<PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>
        },
        {
          path:'/updatequery/:id', 
          element:<PrivateRouter><UpdateQuery></UpdateQuery></PrivateRouter>
        },
        {
          path:'/queries/:id', 
          element:<PrivateRouter><QueryDetails></QueryDetails></PrivateRouter>
        },
    ]
  },
]);
