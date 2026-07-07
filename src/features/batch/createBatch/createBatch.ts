import type { Batch } from "@entities/batch/models/batchSlice";

export async function createBatch(data: Partial<Batch>): Promise<Batch> {
    const quantityUnits = data.quantity_units ?? 0;
    const capsulesPerUnit = data.capsules_per_unit ?? 0;

    return {
        id: crypto.randomUUID(),
        name: data.name ?? "",
        status: data.status ?? "В работе",
        recipe_id: data.recipe_id ?? null,
        quantity_units: quantityUnits,
        capsules_per_unit: capsulesPerUnit,
        total_capsules: quantityUnits * capsulesPerUnit,
    };
}