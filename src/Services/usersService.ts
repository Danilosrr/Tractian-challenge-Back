import { usersRepositorie } from "../Repositories/usersRepository.js";
import { newUser } from "../Schemas/usersSchema.js";

export interface createUser extends newUser {
    companyId: string
}

async function allUsers(companyId:string) {
    return await usersRepositorie.queryCompanyUsers(companyId);
}

async function createNewUser(newUser:createUser) {
    return await usersRepositorie.createNewUser(newUser);
}

export const usersService = {
    allUsers,
    createNewUser
}