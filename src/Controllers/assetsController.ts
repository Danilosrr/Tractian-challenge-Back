import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { newAsset } from "../Schemas/assetsSchema.js";
import { assetsService } from "../Services/assetsService.js";

export async function postAsset(req: Request, res: Response) {
  const newAsset:newAsset = req.body;

  const companyId:string = req.params.companyId;
  if (!companyId) { throw badRequestError() }

  const asset = await assetsService.createNewAsset(newAsset);
  res.status(200).send(asset);
};

export async function getAllAssets(req: Request, res: Response) {
  const companyId:string = req.params.companyId;
  if (!companyId) { throw badRequestError() }

  const assets = await assetsService.allAssets(companyId);

  const assetsFormat = await assetsService.formatAllAssets(assets);

  res.status(200).send(assetsFormat);
}