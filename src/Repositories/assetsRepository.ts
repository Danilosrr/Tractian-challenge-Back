import { prisma } from "../config/database.js";
import { createAsset } from "../Services/assetsService.js";

async function createNewAsset(asset:createAsset) {
    const{health,model,name,owner,description,image,status,unitId} = asset;
    return await prisma.assets.create({
        data:{health,model,name,owner,description,image,status,unitId}
    })
}

async function queryCompanyAssets(companyId: string) {
    return await prisma.company.findMany({
        where: { id: companyId },
        include: {
            units: {
                include: {
                    assets: { 
                        include: { 
                            unit: true
                        }
                    }
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

async function queryUnitName(name: string) {
    return await prisma.units.findFirst({
        where: { name },
    })
}

export const assetsRepositorie = {
    createNewAsset,
    queryCompanyAssets,
    queryUnits,
    queryUnitName
};