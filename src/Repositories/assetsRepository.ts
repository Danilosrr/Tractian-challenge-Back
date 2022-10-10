import { prisma } from "../config/database.js";

async function queryStatus(companyId: string) {
    return await prisma.company.findMany({
        where: { id: companyId },
        include: {
            units: { 
                include: { 
                    assets: true 
                } 
            }
        }
    })
}

export const assetsRepositorie = {
    queryStatus
};