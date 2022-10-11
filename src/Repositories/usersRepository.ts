import { prisma } from "../config/database.js";

async function queryCompanyUsers(companyId: string) {
    return await prisma.users.findMany({
        where: { companyId: companyId }
    })
}

export const usersRepositorie = {
    queryCompanyUsers
};
