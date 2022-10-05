import { Router } from "express";
import { postAsset } from "../Controllers/assetsController.js";
import upload from "../Middlewares/uploadMiddleware.js";

const assetsRouter = Router();

assetsRouter.post('/assets', upload.single('asset'), postAsset)

export default assetsRouter; 