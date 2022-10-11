import { Request, Response } from "express";
import { companyService } from "../Services/companyService.js";

export async function getCompanies(req: Request, res: Response) {
  
    const companies = await companyService.allCompanies();
    res.status(200).send(companies);
}