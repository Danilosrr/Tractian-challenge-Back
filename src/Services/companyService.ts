import { companyRepositorie } from "../Repositories/companyRepository.js";
import { newCompany } from "../Schemas/companySchema.js";

async function allCompanies() {
    return await companyRepositorie.queryCompanies();
}

async function createCompany(company:newCompany) {
    return await companyRepositorie.createCompany(company);
}

export const companyService = {
    allCompanies,
    createCompany
}