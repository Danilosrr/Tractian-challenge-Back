import joi from "joi"

export interface newCompany {
  name: string,
}

export const newCompanySchema = joi.object({
  name: joi.string().required()
});