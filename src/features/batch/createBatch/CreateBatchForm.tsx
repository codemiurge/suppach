import React, { useState } from "react";

import { useDispatch } from "react-redux";

import {
    addBatch,
    BATCH_STATUSES,
    type BatchStatus,
} from "@entities/batch/models/batchSlice";

import "./createBatchForm.scss";


interface Props {
    onClose: () => void;
}


export default function CreateBatchForm({ onClose }: Props) {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [status, setStatus] = useState<BatchStatus>("В работе");
    const [quantity, setQuantity] = useState(0);
    const [capsulesPerUnit, setCapsulesPerUnit] = useState(10);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();


        dispatch(
            addBatch({
                id: crypto.randomUUID(),
                name,
                status,
                recipe_id: null,
                quantity_units: quantity,
                capsules_per_unit: capsulesPerUnit,
                total_capsules: quantity * capsulesPerUnit,
            })
        );

        setName("");
        setQuantity(0);
        setCapsulesPerUnit(10);

        onClose();
    }


    return (
        <form
            className="createBatchForm"
            onSubmit={handleSubmit}
        >
            <h2>Создание партии</h2>
            <label>Название партии</label>

            <input
                value={name}
                required
                placeholder="Например: Магний бисглицинат"
                onChange={e => setName(e.target.value)}
            />

            <label>Количество единиц</label>

            <input
                type="number"
                value={quantity}
                required
                min={0}
                onChange={e => setQuantity(Number(e.target.value))}
            />


            <label>Капсул в единице</label>

            <input
                type="number"
                value={capsulesPerUnit}
                required
                min={0}
                onChange={e => setCapsulesPerUnit(Number(e.target.value))}
            />

            <label>Статус</label>
            <select
                value={status}
                onChange={e => setStatus(e.target.value as BatchStatus)}
            >
                {BATCH_STATUSES.map(status => (
                    <option
                        key={status}
                        value={status}
                    >
                        {status}
                    </option>
                ))}
            </select>

            <button>Создать партию</button>
        </form>
    );
}