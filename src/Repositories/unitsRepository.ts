import { prisma } from "../config/database.js";
import { createUnit } from "../Services/unitsService.js";

async function createNewUnit(unit: createUnit) {
  const { name, companyId } = unit;
  return await prisma.units.create({
    data: { name, companyId }
  })
}

export const unitsRepositorie = {
  createNewUnit
};
