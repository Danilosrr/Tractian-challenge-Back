import { Router } from "express";
import { getAllAssets, postAsset } from "../Controllers/assetsController.js";
import upload from "../Middlewares/uploadMiddleware.js";

const assetsRouter = Router();

assetsRouter.post('/assets', upload.single('asset'), postAsset)
assetsRouter.get('/assets/:companyId', getAllAssets)

export default assetsRouter; 