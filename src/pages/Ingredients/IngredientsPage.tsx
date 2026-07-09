import {
    useEffect,
    useState
} from "react";

import { useDispatch } from "react-redux";

import {
    setIngredients,
    type Ingredient
} from "@entities/ingredient/models/ingredientSlice";

import CreateIngredientForm from "@features/ingredient/createIngredient/CreateIngredientForm";
import EditIngredientForm from "@features/ingredient/editIngredient/EditIngredientForm";

import { IngredientTable } from "@widgets/IngredientTable/IngredientTable";

import {
    FontAwesomeIcon,
    faPlus
} from "@shared/icons";

import "./IngredientsPage.scss";


export default function IngredientsPage() {
    const dispatch = useDispatch();

    const [createOpen, setCreateOpen] = useState(false);

    const [editing, setEditing] = useState<Ingredient | null>(null);

    return (
        <div className="ingredientsPage">
            <div className="pageHeader">
                <div>
                    <h1>
                        Ингредиенты
                    </h1>

                    <p>
                        Управление складскими компонентами
                    </p>
                </div>


                <button
                    className="createButton"
                    onClick={() => setCreateOpen(true)}
                >
                    <FontAwesomeIcon icon={faPlus} />

                    Создать ингредиент
                </button>
            </div>


            <IngredientTable
                onEdit={setEditing}
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

                        <CreateIngredientForm
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

                        <EditIngredientForm
                            ingredient={editing}
                            onClose={() => setEditing(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}