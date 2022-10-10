import { assetsRepositorie } from "../Repositories/assetsRepository.js";

export async function createAsset() {

}

export async function allAssets(companyId: string) {
    const assets = await assetsRepositorie.queryCompanyAssets(companyId);
    let allAssets = [];

    assets.forEach(company => {
        company.units.forEach(unit => {
            allAssets = allAssets.concat(unit.assets);
        });
    });

    const assetsFormat = allAssets.map(asset => { return { name: asset.name, y: asset.health, status: asset.status } });
    return assetsFormat;
}

export async function unitAssets(companyId: string) {
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