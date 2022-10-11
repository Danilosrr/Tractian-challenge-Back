import { Router } from "express";
import { getCompanies, postCompany } from "../Controllers/companyController.js";

const companyRouter = Router();

companyRouter.get('/company', getCompanies)
companyRouter.post('/company', postCompany)

export default companyRouter; 