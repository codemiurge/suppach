import React, {useState} from "react";

import {useDispatch} from "react-redux";

import {
    addWarehouse
} from "@entities/warehouse/models/warehouseSlice";


import "./CreateWarehouseForm.scss";

interface Props{
    onClose:()=>void;
}

export default function CreateWarehouseForm({
    onClose
}:Props){

    const dispatch = useDispatch();
    const [location,setLocation] = useState("");
    const [maxVolume,setMaxVolume] = useState(0);

    function handleSubmit(e:React.FormEvent){
        e.preventDefault();

        dispatch(
            addWarehouse({

                warehouse_id:
                    crypto.randomUUID(),

                warehouse_location:
                    location,

                warehouse_volume:
                    0,

                max_volume:
                    maxVolume

            })
        );

        setLocation("");
        setMaxVolume(0);

        onClose();

    }

    return (
        <form
            className="createWarehouseForm"
            onSubmit={handleSubmit}
        >

            <h2>Создание склада</h2>

            <label>Расположение склада</label>

            <input
                value={location}
                placeholder="Например: Липецк, ул. Тестовая, 5"
                onChange={
                    e=>setLocation(e.target.value)
                }

            />


            <label>Максимальный объем</label>

            <input
                type="number"
                min={0}
                value={maxVolume}
                onChange={
                    e=>
                    setMaxVolume(
                        Number(e.target.value)
                    )
                }

            />
            <button>Создать склад</button>
        </form>

    );

}