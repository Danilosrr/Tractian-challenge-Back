import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { newUnit } from "../Schemas/unitSchema.js";
import { assetsService } from "../Services/assetsService.js";
import { unitsService } from "../Services/unitsService.js";

export async function getUnitAssets(req: Request, res: Response) {
    const companyId:string = req.params.companyId;
    if (!companyId) { throw badRequestError() }
  
    const units = await assetsService.unitAssets(companyId);
    res.status(200).send(units);
}

export async function postUnit(req: Request, res: Response) {
    const newUnit: newUnit = req.body;

    const companyId:string = req.params.companyId;
    if (!companyId) { throw badRequestError() }
  
    const unit = await unitsService.createNewUnit({...newUnit, companyId});
    res.status(200).send(unit);
}