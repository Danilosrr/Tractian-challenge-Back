import { prisma } from "../config/database.js";

async function queryCompanies() {
    return await prisma.company.findMany({
        where: { }
    })
}

export const companyRepositorie = {
    queryCompanies
};