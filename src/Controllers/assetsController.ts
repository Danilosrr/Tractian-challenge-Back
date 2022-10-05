import { Request, Response } from "express";
import { createAsset } from "../Services/assetsService.js";

export async function postAsset(req: Request, res: Response) {
  await createAsset();
}