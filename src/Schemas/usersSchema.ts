import joi from "joi"

export interface newUser {
  name: string,
  role?: string,
  phone: string,
  email?: string,
  picture?: string,
}

export const newUserSchema = joi.object({
  name: joi.string().required(),
  role: joi.string(),
  phone: joi.string().required(),
  email: joi.string(),
  picture: joi.string(),
});