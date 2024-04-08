import Joi from "joi";

export const registerSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be longer than 6 symbols",
    "any.required": "Password must be longer than 6 symbols",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be a valid address",
    "any.required": "Email is required",
  }),
  name: Joi.string().required().messages({
    "any.required": "Name is required",
  }),
});

export const loginSchema = Joi.object({
  password: Joi.string().min(6).required().messages({
    "any.required": "Enter password",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Enter email",
  }),
});
