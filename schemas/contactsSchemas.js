import Joi from "joi";

export const createContactSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "Missing required name field" }),
  number: Joi.string()
    .required()
    .messages({ "any.required": "Missing required number field" }),
 });


