import { prisma } from "../config/database.js";
import { createUser } from "../Services/usersService.js";

async function queryCompanyUsers(companyId: string) {
    return await prisma.users.findMany({
        where: { companyId: companyId }
    })
}

async function createNewUser(user: createUser) {
    const { name,email,phone,picture,role, companyId } = user;
    return await prisma.users.create({
        data: { name,email, phone,picture,role, companyId }
    })
}

export const usersRepositorie = {
    queryCompanyUsers,
    createNewUser
};
