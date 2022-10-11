import { companyRepositorie } from "../Repositories/companyRepository.js";

async function allCompanies() {
    return await companyRepositorie.queryCompanies();
}

export const companyService = {
    allCompanies
}