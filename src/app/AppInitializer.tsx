import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
    setWarehouses
} from "@entities/warehouse/models/warehouseSlice";


export default function AppInitializer() {

    const dispatch = useDispatch();


    useEffect(() => {

        fetch("/db.json")
            .then(r => r.json())
            .then(data => {

                const warehouses = data.find(
                    (t:any)=>t.name==="warehouse"
                ).data;


                dispatch(
                    setWarehouses(
                        warehouses.map((w:any)=>({
                            ...w,
                            warehouse_volume:Number(w.warehouse_volume),
                            max_volume:Number(w.max_volume)
                        }))
                    )
                );

            });

    },[dispatch]);


    return null;
}