import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { newUser } from "../Schemas/usersSchema.js";
import { usersService } from "../Services/usersService.js";

export async function getAllUser(req: Request, res: Response) {
    const companyId:string = req.params.companyId;
    if (!companyId) { throw badRequestError() }
  
    const users = await usersService.allUsers(companyId);
    res.status(200).send(users);
}

export async function postUser(req: Request, res: Response) {
    const newUser: newUser = req.body;

    const companyId:string = req.params.companyId;
    if (!companyId) { throw badRequestError() }
  
    const users = await usersService.createNewUser({...newUser, companyId});
    res.status(200).send(users);
}