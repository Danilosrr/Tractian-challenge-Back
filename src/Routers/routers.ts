import { Router } from "express";
import assetsRouter from "./assetsRouter.js";
import unitsRouter from "./unitsRouter.js";

const router = Router();

router.use(assetsRouter);
router.use(unitsRouter);

export default router;
