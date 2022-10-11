import { Router } from "express";
import { getUnitAssets, postUnit } from "../Controllers/unitsController.js";
import validSchema from "../Middlewares/validateSchema.js";
import { newUnitSchema } from "../Schemas/unitSchema.js";

const unitsRouter = Router();

unitsRouter.get('/units/:companyId', getUnitAssets)
unitsRouter.post('/units/:companyId', validSchema(newUnitSchema), postUnit)

export default unitsRouter; 