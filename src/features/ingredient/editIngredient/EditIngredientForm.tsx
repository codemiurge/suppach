import React, { useState } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import type { RootState } from "@app/store";

import {
    updateIngredient,
    type Ingredient
} from "@entities/ingredient/models/ingredientSlice";

import "./EditIngredientForm.scss";


interface Props {
    ingredient: Ingredient;
    onClose: () => void;
}


export default function EditIngredientForm({
    ingredient,
    onClose
}: Props) {
    const dispatch = useDispatch();

    const warehouses = useSelector(
        (state: RootState) =>
            state.warehouse.list
    );


    const [name, setName] = useState(ingredient.name);
    const [unit, setUnit] = useState(ingredient.unit);
    const [stock, setStock] = useState(ingredient.stock);
    const [warehouseId, setWarehouseId] = useState(
        ingredient.warehouse_id
    );


    function submit(e: React.FormEvent) {
        e.preventDefault();

        dispatch(
            updateIngredient({
                ...ingredient,
                name,
                unit,
                stock,
                warehouse_id: warehouseId
            })
        );

        onClose();
    }


    return (
        <form
            className="editIngredientForm"
            onSubmit={submit}
        >
            <h2>
                Редактирование ингредиента
            </h2>


            <label>
                Название
            </label>

            <input
                value={name}
                required
                onChange={e =>
                    setName(e.target.value)
                }
            />


            <label>
                Единица
            </label>

            <input
                value={unit}
                required
                onChange={e =>
                    setUnit(e.target.value)
                }
            />


            <label>
                Количество
            </label>

            <input
                type="number"
                value={stock}
                required
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
                Сохранить изменения
            </button>
        </form>
    );
}