import { Request, Response } from "express";
import { newCompany } from "../Schemas/companySchema.js";
import { companyService } from "../Services/companyService.js";

export async function getCompanies(req: Request, res: Response) {
    const companies = await companyService.allCompanies();
    res.status(200).send(companies);
}

export async function postCompany(req: Request, res: Response) {
    const newCompany:newCompany = req.body;

    const company = await companyService.createCompany(newCompany);
    res.status(200).send(company);
}