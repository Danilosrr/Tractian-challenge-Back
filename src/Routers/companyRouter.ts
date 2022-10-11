import { Router } from "express";
import { getCompanies } from "../Controllers/companyController.js";

const companyRouter = Router();

companyRouter.get('/company', getCompanies)

export default companyRouter; 