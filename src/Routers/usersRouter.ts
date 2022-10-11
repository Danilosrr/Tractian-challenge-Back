import { Router } from "express";
import { getAllUser } from "../Controllers/usersController.js";

const usersRouter = Router();

usersRouter.get('/users/:companyId', getAllUser)

export default usersRouter; 