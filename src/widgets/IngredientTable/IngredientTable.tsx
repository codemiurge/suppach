import {
    useDispatch,
    useSelector
} from "react-redux";

import type { RootState } from "@app/store";

import {
    deleteIngredient,
    type Ingredient
} from "@entities/ingredient/models/ingredientSlice";

import {
    FontAwesomeIcon,
    faPencil,
    faTrash
} from "@shared/icons";

import "./IngredientTable.scss";


interface Props {
    onEdit: (ingredient: Ingredient) => void;
}


export function IngredientTable({
    onEdit
}: Props) {
    const dispatch = useDispatch();

    const ingredients = useSelector(
        (state: RootState) =>
            state.ingredient.list
    );

    const warehouses = useSelector(
        (state: RootState) =>
            state.warehouse.list
    );


    return (
        <div className="ingredientTableWrapper">
            <table>
                <thead>
                    <tr>
                        <th>
                            Название
                        </th>

                        <th>
                            Единица
                        </th>

                        <th>
                            Количество
                        </th>

                        <th>
                            Склад
                        </th>

                        <th>
                            Действия
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {
                        ingredients.map(i => (
                            <tr key={i.id}>
                                <td>
                                    {i.name}
                                </td>

                                <td>
                                    {i.unit}
                                </td>

                                <td>
                                    {i.stock}
                                </td>

                                <td>
                                    {
                                        warehouses.find(
                                            w =>
                                                w.warehouse_id === i.warehouse_id
                                        )?.warehouse_location
                                    }
                                </td>

                                <td>
                                    <button
                                        className="edit"
                                        onClick={() => onEdit(i)}
                                    >
                                        <FontAwesomeIcon icon={faPencil} />
                                    </button>

                                    <button
                                        className="delete"
                                        onClick={() =>
                                            dispatch(
                                                deleteIngredient(i.id)
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