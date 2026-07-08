import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import BatchesPage from "@pages/Batches/BatchesPage";
import WarehousesPage from "@pages/Warehouses/WarehousesPage";
import IngredientsPage from "@pages/Ingredients/IngredientsPage";
import RecipesPage from "@pages/Recipes/RecipesPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {path: "batches", element:<BatchesPage/>},
        {path:"warehouses", element:<WarehousesPage/>},
        {path:"ingredients", element:<IngredientsPage/>},
        {path:"recipes", element: <RecipesPage/>},
    ]
}])