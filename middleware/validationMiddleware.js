import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constant.js";
import Job from "../model/jobModel.js";

import mongoose from "mongoose";

const withValidationError = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const errorMessage = error.array().map((err) => err.msg);

        if (errorMessage[0].startsWith("no job")) {
          throw new NotFoundError(errorMessage);
        }
        throw new BadRequestError(errorMessage);
      }
      next();
    },
  ];
};

// export const validateTest = withValidationError([
//   body("company")
//     .notEmpty()
//     .withMessage("name is required")
//     .isLength({ min: 3, max: 30 })
//     .withMessage("name must be between 3 and 50 characters long")
//     .trim(),
// ]);

export const validateJobInput = withValidationError([
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("jobLocation").notEmpty().withMessage("jobLocation is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid job status value"),
  body("jobType")
    .isIn(["pending", "interview", "declined"])
    .withMessage("Invalid job type value"),
]);

export const validateIdParam = withValidationError([
  param("id").custom(async (value) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) {
      throw new BadRequestError("Invalid MongoDB id");
    }
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError("no job with " + value);
  }),
]);
