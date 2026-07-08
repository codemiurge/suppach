import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import BatchesPage from "@pages/Batches/BatchesPage";
import WarehousesPage from "@pages/Warehouses/WarehousesPage";
import IngredientsPage from "@pages/Ingredients/IngredientsPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {index: true, element:<BatchesPage/>},
        {path:"warehouses", element:<WarehousesPage/>},
        {path:"ingredients", element:<IngredientsPage/>}
    ]
}])