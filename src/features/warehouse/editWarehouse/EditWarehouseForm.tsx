import React,{useState} from "react";

import {useDispatch} from "react-redux";

import {

    updateWarehouse,

    type Warehouse

}

from "@entities/warehouse/models/warehouseSlice";


import "./EditWarehouseForm.scss";


interface Props{

    warehouse:Warehouse;

    onClose:()=>void;

}



export default function EditWarehouseForm({

    warehouse,

    onClose

}:Props){


    const dispatch = useDispatch();


    const [location,setLocation] =
        useState(
            warehouse.warehouse_location
        );


    const [maxVolume,setMaxVolume] =
        useState(
            warehouse.max_volume
        );



    function submit(
        e:React.FormEvent
    ){

        e.preventDefault();


        dispatch(

            updateWarehouse({

                ...warehouse,

                warehouse_location:
                    location,

                max_volume:
                    maxVolume

            })

        );


        onClose();

    }



    return (

        <form
            className="editWarehouseForm"
            onSubmit={submit}
        >

            <h2>
                Редактирование склада
            </h2>


            <label>Расположение</label>

            <input
                value={location}
                onChange={
                    e=>setLocation(
                        e.target.value
                    )
                }
            />

            <label>Максимальный объем</label>

            <input
                type="number"
                min={0}
                value={maxVolume}
                onChange={
                    e=>setMaxVolume(
                        Number(e.target.value)
                    )
                }
            />

            <button>Сохранить изменения</button>

        </form>

    );

}