import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customError.js";

const withValidationError = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const errorMessage = error.array().map((err) => err.msg);
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

export const validateTest = withValidationError([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 30 })
    .withMessage("name must be between 3 and 50 characters long")
    .trim(),
]);
