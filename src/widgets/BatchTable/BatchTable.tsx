import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@app/store";

import {
    deleteBatch,
    type Batch,
} from "@entities/batch/models/batchSlice";


import {
    FontAwesomeIcon,
    faPencil, faTrash
} from "@shared/icons";

import "./BatchTable.scss";


interface Props {
    onEdit: (batch: Batch) => void;
}


export function BatchTable({ onEdit }: Props) {
    const dispatch = useDispatch();

    const batches = useSelector(
        (state: RootState) => state.batch.list
    );

    return (
        <div className="batchTableWrapper">
            <table>
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Статус</th>
                        <th>Единицы</th>
                        <th>Капсулы</th>
                        <th>Действия</th>
                    </tr>
                </thead>


                <tbody>
                    {batches.map(batch => (
                        <tr key={batch.id}>
                            <td>{batch.name}</td>

                            <td>
                                <span className="status">
                                    {batch.status}
                                </span>
                            </td>

                            <td>
                                {batch.quantity_units}
                            </td>

                            <td>
                                {batch.total_capsules}
                            </td>


                            <td>
                                <button
                                    className="edit"
                                    onClick={() => onEdit(batch)}
                                >
                                    <FontAwesomeIcon icon={faPencil}/>
                                </button>

                                <button
                                    className="delete"
                                    onClick={() =>
                                        dispatch(
                                            deleteBatch(batch.id)
                                        )
                                    }
                                >
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}