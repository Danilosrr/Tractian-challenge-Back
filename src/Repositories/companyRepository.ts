import { prisma } from "../config/database.js";
import { newCompany } from "../Schemas/companySchema.js";

async function queryCompanies() {
    return await prisma.company.findMany({
        where: { }
    })
}

async function createCompany(company:newCompany) {
    return await prisma.company.create({
        data: {name:company.name}
    })
}

export const companyRepositorie = {
    queryCompanies,
    createCompany
};