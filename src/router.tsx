import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {MovieDetailsPage} from "./pages/";

const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'/movies/'}/>
            },
            {
                path:'movies', element:<MoviesPage/>,
            },
            {
                path: 'movies/:id', element:<MovieDetailsPage/>
            }
        ]
    }
]);

export {
    router
}