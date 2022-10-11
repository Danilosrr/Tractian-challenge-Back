import { usersRepositorie } from "../Repositories/usersRepository.js";

async function allUsers(companyId:string) {
    return await usersRepositorie.queryCompanyUsers(companyId);
}

export const usersService = {
    allUsers
}