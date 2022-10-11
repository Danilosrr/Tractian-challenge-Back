import joi from "joi"

export interface newAsset {
  image?: string,
  name: string,
  description?: string,
  model: string,
  owner: string,
  status: enumStatus,
  health: number,
  unit: string,
}

export enum enumStatus {
  Running = 'Running',
  Alerting = 'Alerting',
  Stopped = 'Stopped'
}

export const newAssetSchema = joi.object({
  image: joi.string().uri(),
  name: joi.string().required(),
  description: joi.string(),
  model: joi.string().required(),
  owner: joi.string().required(),
  status: joi.string().valid('Running', 'Alerting', 'Stopped').required(),
  health: joi.number().required(),
  unit: joi.string().required(),
});
