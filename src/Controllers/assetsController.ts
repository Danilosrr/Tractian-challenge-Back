import { Request, Response } from "express";
import { badRequestError, notFoundError } from "../Middlewares/errorHandler.js";
import { createAsset, allAssets } from "../Services/assetsService.js";

export async function postAsset(req: Request, res: Response) {
  await createAsset();
};

export async function getAllAssets(req: Request, res: Response) {
  const companyId:string = req.params.companyId;
  if (!companyId) { throw badRequestError() }

  const status = await allAssets(companyId);
  res.status(200).send(status);
}