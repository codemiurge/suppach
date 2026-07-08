import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "@app/store";

import {
    deleteWarehouse,
    type Warehouse
} from "@entities/warehouse/models/warehouseSlice";

import {
    FontAwesomeIcon,
    faPencil,
    faTrash
} from "@shared/icons";

import "./WarehouseTable.scss";


interface Props {
    onEdit: (warehouse: Warehouse) => void;
}


export function WarehouseTable({ onEdit }: Props) {
    const dispatch = useDispatch();

    const warehouses = useSelector(
        (state: RootState) => state.warehouse.list
    );

    return (
        <div className="warehouseTableWrapper">
            <table>
                <thead>
                    <tr>
                        <th>
                            Расположение
                        </th>

                        <th>
                            Текущий объем
                        </th>

                        <th>
                            Максимальный объем
                        </th>

                        <th>
                            Действия
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        warehouses.map(warehouse => (
                            <tr key={warehouse.warehouse_id}>
                                <td>
                                    {warehouse.warehouse_location}
                                </td>

                                <td>
                                    {warehouse.warehouse_volume}
                                </td>

                                <td>
                                    {warehouse.max_volume}
                                </td>

                                <td>
                                    <button
                                        className="edit"
                                        onClick={() => onEdit(warehouse)}
                                    >
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() =>
                                            dispatch(
                                                deleteWarehouse(
                                                    warehouse.warehouse_id
                                                )
                                            )
                                        }
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}