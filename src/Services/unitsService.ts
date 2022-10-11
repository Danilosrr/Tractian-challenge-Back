import { unitsRepositorie } from "../Repositories/unitsRepository.js";
import { newUnit } from "../Schemas/unitSchema.js";

export interface createUnit extends newUnit {
    companyId: string
};

async function createNewUnit(createUnit:createUnit) {
    const asset = await unitsRepositorie.createNewUnit(createUnit);
    return asset
}

export const unitsService = {
    createNewUnit
}