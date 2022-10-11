import { Router } from "express";
import assetsRouter from "./assetsRouter.js";
import unitsRouter from "./unitsRouter.js";
import usersRouter from "./usersRouter.js";

const router = Router();

router.use(assetsRouter);
router.use(unitsRouter);
router.use(usersRouter);

export default router;
