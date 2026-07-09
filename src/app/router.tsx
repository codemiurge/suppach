import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import BatchesPage from "@pages/Batches/BatchesPage";
import WarehousesPage from "@pages/Warehouses/WarehousesPage";
import IngredientsPage from "@pages/Ingredients/IngredientsPage";
import RecipesPage from "@pages/Recipes/RecipesPage";
import DashboardPage from "@pages/Dashboard/DashboardPage";
import NotFoundPage from "@pages/NotFoundPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {index: true, element: <DashboardPage /> },
        {path: "batches", element:<BatchesPage/>},
        {path:"warehouses", element:<WarehousesPage/>},
        {path:"ingredients", element:<IngredientsPage/>},
        {path:"recipes", element: <RecipesPage/>},
        {path: "*", element: <NotFoundPage/>}
    ]
}])