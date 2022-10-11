import { Router } from "express";
import assetsRouter from "./assetsRouter.js";
import companyRouter from "./companyRouter.js";
import unitsRouter from "./unitsRouter.js";
import usersRouter from "./usersRouter.js";

const router = Router();

router.use(assetsRouter);
router.use(unitsRouter);
router.use(usersRouter);
router.use(companyRouter);

export default router;
