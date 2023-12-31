import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
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
            path: '/*',
            element: <div>404 No Found</div>
        }
    ]
  },
]);

export default router;