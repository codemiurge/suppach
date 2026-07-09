import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import {
    setBatches,
    type Batch,
} from "@entities/batch/models/batchSlice";


import CreateBatchForm from "@features/batch/createBatch/CreateBatchForm";
import EditBatchForm from "@features/batch/editBatch/EditBatchForm";

import { BatchTable } from "@widgets/BatchTable/BatchTable";

import {
    FontAwesomeIcon,
    faPlus
} from "@shared/icons";

import "./BatchesPage.scss";


export default function BatchesPage() {

    const dispatch = useDispatch();
    const [createOpen, setCreateOpen] = useState(false);
    const [editingBatch, setEditingBatch] = useState<Batch | null>(null);

    return (
        <div className="batchesPage">
            <div className="pageHeader">
                <div>
                    <h1>
                        Партии
                    </h1>
                    <p>
                        Управление производственными партиями
                    </p>
                </div>

                <button
                    className="createButton"
                    onClick={() => setCreateOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus}/>
                     Создать партию
                </button>

            </div>

            <BatchTable
                onEdit={setEditingBatch}
            />

            {createOpen && (
                <div className="modalOverlay">

                    <div className="modal">

                        <button
                            className="closeButton"
                            onClick={() => setCreateOpen(false)}
                        >
                            ×
                        </button>

                        <CreateBatchForm
                            onClose={() => setCreateOpen(false)}
                        />
                    </div>
                </div>
            )}

            {editingBatch && (
                <div className="modalOverlay">
                    <div className="modal">
                        <button
                            className="closeButton"
                            onClick={() => setEditingBatch(null)}
                        >
                            ×
                        </button>

                        <EditBatchForm
                            batch={editingBatch}
                            onClose={() => setEditingBatch(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}