import joi from "joi"

export interface newUnit {
  name: string,
}

export const newUnitSchema = joi.object({
  name: joi.string().required()
});