import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { unitAssets } from "../Services/assetsService.js";

export async function getUnitAssets(req: Request, res: Response) {
    const companyId:string = req.params.companyId;
    if (!companyId) { throw badRequestError() }
  
    const units = await unitAssets(companyId);
    res.status(200).send(units);
}