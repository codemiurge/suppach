import { createBrowserRouter} from "react-router-dom";
import MainLayout from "./MainLayout";
import BatchesPage from "@pages/Batches/BatchesPage";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout />,
    children:[
        {index: true, element:<BatchesPage/>}
    ]
}])