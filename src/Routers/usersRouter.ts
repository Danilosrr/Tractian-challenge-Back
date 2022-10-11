import { Router } from "express";
import { getAllUser, postUser } from "../Controllers/usersController.js";
import validSchema from "../Middlewares/validateSchema.js";
import { newUserSchema } from "../Schemas/usersSchema.js";

const usersRouter = Router();

usersRouter.get('/users/:companyId', getAllUser)
usersRouter.post('/users/:companyId', validSchema(newUserSchema), postUser)

export default usersRouter; 