import React, {lazy} from "react";

const Home = lazy(() => import('../pages/Home'))

interface RoutesConfig{
    path:string
    element: React.FC;
    exact?:boolean;
}
export const publicRoutes : RoutesConfig[] = [
    {path: '/home', element: Home, exact:true},
]
// export const publicRoutes : RoutesConfig[] = [
//     {path: '/login', element: Login, exact: true }
// ]