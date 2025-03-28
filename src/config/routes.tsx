import {Navigate, RouteObject} from "react-router-dom";
import App from "../App";
import Recipes from "../App/pages/Recipes";
import InfoRecipe from "../App/pages/InfoRecipe";

export const routesConfig: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Recipes />
            },
            {
                path: 'recipes',
                element: <Recipes />
            },
            {
                path: 'recipe/:id',
                element: <InfoRecipe />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]
