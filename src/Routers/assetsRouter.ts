import { Router } from "express";
import { getAllAssets, postAsset } from "../Controllers/assetsController.js";
import validSchema from "../Middlewares/validateSchema.js";
import { newAssetSchema } from "../Schemas/assetsSchema.js";

const assetsRouter = Router();

assetsRouter.post('/assets/:companyId', validSchema(newAssetSchema), postAsset)
assetsRouter.get('/assets/:companyId', getAllAssets)

export default assetsRouter; 