import { Router } from "express";
import { getUnitAssets } from "../Controllers/unitsController.js";

const unitsRouter = Router();

unitsRouter.get('/units/:companyId', getUnitAssets)

export default unitsRouter; 