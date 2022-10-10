import { assetsRepositorie } from "../Repositories/assetsRepository.js";

export async function createAsset() {

}

export async function allAssets(companyId: string) {
    const assets = await assetsRepositorie.queryStatus(companyId);
    let allAssets = [];

    assets.forEach(company => {
        company.units.forEach(unit => {
            allAssets = allAssets.concat(unit.assets);
        });
    });

    const assetsFormat = allAssets.map(asset => { return { name: asset.name, y: asset.health, status: asset.status } })

    return assetsFormat;
}