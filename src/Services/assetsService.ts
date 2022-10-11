import { Assets } from "@prisma/client";
import { assetsRepositorie } from "../Repositories/assetsRepository.js";

async function createAsset() {

}

async function allAssets(companyId: string) {
    const assets = await assetsRepositorie.queryCompanyAssets(companyId);
    let allAssets = [];

    assets.forEach(company => {
        company.units.forEach(unit => {
            allAssets = allAssets.concat(unit.assets);
        });
    });

    return allAssets;
}

function formatAllAssets(array:any) {
    const format = array.map(asset => { 
        return { 
            name: asset.name, 
            description: asset.description,
            image: asset.image,
            model: asset.model,
            owner: asset.owner,
            status: asset.status,
            unit: asset.unit.name,
            y: asset.health,
        };
    });
    
    return format
}

async function unitAssets(companyId: string) {
    const assets = await assetsRepositorie.queryUnits(companyId);
    let unitAssets = [];

    assets.forEach(company => {
        unitAssets = unitAssets.concat(company.units);
    });

    const assetsFormat = unitAssets.map(unit => {
        return {
            name: unit.name, assets: unit.assets.map(
                asset => { return { name: asset.name, y: asset.health, status: asset.status } })
        }
    });

    return assetsFormat;
}

export const assetsService = {
    createAsset,
    allAssets,
    formatAllAssets,
    unitAssets
}