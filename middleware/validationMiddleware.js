import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
  Unauthorized,
} from "../errors/customError.js";
import { JOB_STATUS, JOB_TYPE, USER_ROLE } from "../utils/constant.js";
import Job from "../model/jobModel.js";
import User from "../model/userModel.js";

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

        if (errorMessage[0].startsWith("not authorized")) {
          throw new Unauthorized(errorMessage);
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
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid job type value"),
]);

export const validateIdParam = withValidationError([
  param("id").custom(async (value, { req }) => {
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (!isValid) {
      throw new BadRequestError("Invalid MongoDB id");
    }
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError("no job with " + value);

    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && isOwner) {
      throw new Unauthorized("not authorized to  access this job");
    }
  }),
]);

export const validateRegisteredUserInput = withValidationError([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exist");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least  8 character long"),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("location").notEmpty().withMessage("location is required"),
  // body("role").isIn(Object.values(USER_ROLE)).withMessage("invalid role type"),
]);

export const validateLoginInput = withValidationError([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email"),
  body("password").notEmpty().withMessage("password is required"),
]);
