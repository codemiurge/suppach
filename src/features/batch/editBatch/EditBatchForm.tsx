import React, { useState } from "react";

import {
    useDispatch,
    useSelector
} from "react-redux";

import {
    updateBatch,
    BATCH_STATUSES,
    type Batch,
    type BatchStatus
} from "@entities/batch/models/batchSlice";

import type { RootState } from "@app/store";

import "./editBatchForm.scss";


interface Props {
    batch: Batch;
    onClose: () => void;
}


export default function EditBatchForm({
    batch,
    onClose
}: Props) {
    const dispatch = useDispatch();

    const recipes = useSelector(
        (state: RootState) =>
            state.recipe.list
    );


    const [name, setName] =
        useState(batch.name);

    const [status, setStatus] =
        useState<BatchStatus>(
            batch.status
        );

    const [quantity, setQuantity] =
        useState(
            batch.quantity_units
        );

    const [capsulesPerUnit, setCapsulesPerUnit] =
        useState(
            batch.capsules_per_unit
        );

    const [recipeId, setRecipeId] =
        useState<string | null>(
            batch.recipe_id
        );


    function handleSubmit(
        e: React.FormEvent
    ) {
        e.preventDefault();

        dispatch(
            updateBatch({
                ...batch,

                name,

                status,

                recipe_id: recipeId,

                quantity_units: quantity,

                capsules_per_unit:
                    capsulesPerUnit,

                total_capsules:
                    quantity * capsulesPerUnit
            })
        );

        onClose();
    }


    return (
        <form
            className="editBatchForm"
            onSubmit={handleSubmit}
        >
            <h2>
                Редактирование партии
            </h2>


            <label>
                Название партии
            </label>

            <input
                value={name}
                required
                onChange={
                    e =>
                        setName(
                            e.target.value
                        )
                }
            />


            <label>
                Рецептура
            </label>

            <select
                value={recipeId ?? ""}
                onChange={
                    e =>
                        setRecipeId(
                            e.target.value || null
                        )
                }
            >
                <option value="">
                    Без рецептуры
                </option>

                {
                    recipes.map(recipe => (
                        <option
                            key={recipe.recipe_id}
                            value={recipe.recipe_id}
                        >
                            {recipe.name}
                        </option>
                    ))
                }
            </select>


            <label>
                Количество единиц
            </label>

            <input
                type="number"
                min={0}
                value={quantity}
                required
                onChange={
                    e =>
                        setQuantity(
                            Number(e.target.value)
                        )
                }
            />


            <label>
                Капсул в единице
            </label>

            <input
                type="number"
                min={0}
                value={capsulesPerUnit}
                required
                onChange={
                    e =>
                        setCapsulesPerUnit(
                            Number(e.target.value)
                        )
                }
            />


            <label>
                Статус
            </label>

            <select
                value={status}
                onChange={
                    e =>
                        setStatus(
                            e.target.value as BatchStatus
                        )
                }
            >
                {
                    BATCH_STATUSES.map(status => (
                        <option
                            key={status}
                            value={status}
                        >
                            {status}
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