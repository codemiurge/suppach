import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {
    setWarehouses,
    type Warehouse
} from "@entities/warehouse/models/warehouseSlice";

import CreateWarehouseForm from "@features/warehouse/createWarehouse/CreateWarehouseForm";
import EditWarehouseForm from "@features/warehouse/editWarehouse/EditWarehouseForm";

import { WarehouseTable } from "@widgets/WarehouseTable/WarehouseTable";

import {
    FontAwesomeIcon,
    faPlus
} from "@shared/icons";

import "./WarehousesPage.scss";


export default function WarehousesPage() {
    const dispatch = useDispatch();

    const [createOpen, setCreateOpen] = useState(false);
    const [editing, setEditing] = useState<Warehouse | null>(null);

    return (
        <div className="warehousesPage">
            <div className="pageHeader">
                <div>
                    <h1>Склады</h1>
                    <p>Управление складскими помещениями</p>
                </div>

                <button
                    className="createButton"
                    onClick={() => setCreateOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus} />
                    Создать склад
                </button>
            </div>

            <WarehouseTable onEdit={setEditing} />

            {createOpen && (
                <div className="modalOverlay">
                    <div className="modal">
                        <button
                            className="closeButton"
                            onClick={() => setCreateOpen(false)}
                        >
                            ×
                        </button>

                        <CreateWarehouseForm
                            onClose={() => setCreateOpen(false)}
                        />
                    </div>
                </div>
            )}

            {editing && (
                <div className="modalOverlay">
                    <div className="modal">
                        <button
                            className="closeButton"
                            onClick={() => setEditing(null)}
                        >
                            ×
                        </button>

                        <EditWarehouseForm
                            warehouse={editing}
                            onClose={() => setEditing(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}