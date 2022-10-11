import { Request, Response } from "express";
import { badRequestError } from "../Middlewares/errorHandler.js";
import { assetsService } from "../Services/assetsService.js";

export async function postAsset(req: Request, res: Response) {
  await assetsService.createAsset();
};

export async function getAllAssets(req: Request, res: Response) {
  const companyId:string = req.params.companyId;
  if (!companyId) { throw badRequestError() }

  const assets = await assetsService.allAssets(companyId);

  const assetsFormat = assetsService.formatAllAssets(assets);

  res.status(200).send(assetsFormat);
}