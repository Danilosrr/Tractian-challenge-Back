import { Router } from "express";
import assetsRouter from "./assetsRouter.js";

const router = Router();

router.use(assetsRouter);
//router.use(newRouter);

export default router;