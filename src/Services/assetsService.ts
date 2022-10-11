import { notFoundError } from "../Middlewares/errorHandler.js";
import { assetsRepositorie } from "../Repositories/assetsRepository.js";
import { newAsset } from "../Schemas/assetsSchema.js";

export interface createAsset extends newAsset {
    unitId: string
}

async function createNewAsset(newAsset:newAsset) {
    const unit = await assetsRepositorie.queryUnitName(newAsset.unit)
    if (!unit) throw notFoundError();

    const createAsset:createAsset = {...newAsset,unitId: unit.id}

    const asset = await assetsRepositorie.createNewAsset(createAsset)
    return asset
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
                asset => { return { name: asset.name, y: asset.health, status: asset.status, company: assets[0].name } })
        }
    });

    return assetsFormat;
}

export const assetsService = {
    createNewAsset,
    allAssets,
    formatAllAssets,
    unitAssets
}