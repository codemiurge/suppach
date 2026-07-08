import React, { useState } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import type { RootState } from "@app/store";

import {
    addIngredient
} from "@entities/ingredient/models/ingredientSlice";

import "./CreateIngredientForm.scss";


interface Props {
    onClose: () => void;
}


export default function CreateIngredientForm({
    onClose
}: Props) {
    const dispatch = useDispatch();

    const warehouses = useSelector(
        (state: RootState) =>
            state.warehouse.list
    );


    const [name, setName] = useState("");
    const [unit, setUnit] = useState("г");
    const [stock, setStock] = useState(0);
    const [warehouseId, setWarehouseId] = useState("");


    function submit(e: React.FormEvent) {
        e.preventDefault();

        dispatch(
            addIngredient({
                id: crypto.randomUUID(),
                name,
                unit,
                stock,
                warehouse_id: warehouseId
            })
        );

        setName("");
        setStock(0);

        onClose();
    }


    return (
        <form
            className="createIngredientForm"
            onSubmit={submit}
        >
            <h2>
                Создание ингредиента
            </h2>


            <label>
                Название
            </label>

            <input
                value={name}
                placeholder="Например: Магний"
                onChange={e => setName(e.target.value)}
                required
            />


            <label>
                Единица измерения
            </label>

            <input
                value={unit}
                onChange={e => setUnit(e.target.value)}
                required
            />


            <label>
                Количество на складе
            </label>

            <input
                type="number"
                min={0}
                required
                value={stock}
                onChange={e =>
                    setStock(
                        Number(e.target.value)
                    )
                }
            />


            <label>
                Склад
            </label>

            <select
                value={warehouseId}
                onChange={e =>
                    setWarehouseId(e.target.value)
                }
            >
                <option value="">
                    Выберите склад
                </option>

                {
                    warehouses.map(w => (
                        <option
                            key={w.warehouse_id}
                            value={w.warehouse_id}
                        >
                            {w.warehouse_location}
                        </option>
                    ))
                }
            </select>


            <button>
                Создать ингредиент
            </button>
        </form>
    );
}