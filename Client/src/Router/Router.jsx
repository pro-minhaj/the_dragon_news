import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News_Datelis from "../Pages/News_Datelis/News_Datelis";
import Main_Content from "../Componets/Main_Content/Main_Content";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            children : [
              {
                path: '/',
                element: <Main_Content></Main_Content>,
                loader: () => fetch('http://localhost:5000/news')
              },
              {
                path: 'news/category/:id',
                element: <Main_Content></Main_Content>,
                loader: ({params}) => fetch(`http://localhost:5000/news/category/${params.id}`)
              }
            ]
            ,
        },
        {
          path: 'news/details/:id',
          element: <News_Datelis></News_Datelis>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
          path: '/categories/:newsData',
          element: <News_Datelis></News_Datelis>,
          loader: ({params}) => fetch(`http://localhost:5000/categories/${params.newsData}`)
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'career',
            element: <Career></Career>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
            path: '/*',
            element: <div>404 No Found</div>
        }
    ]
  },
]);

export default router;