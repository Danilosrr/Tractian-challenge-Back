import { prisma } from "../config/database.js";

async function queryCompanyAssets(companyId: string) {
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

async function queryUnits(companyId: string) {
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
    queryCompanyAssets,
    queryUnits
};