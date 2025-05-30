import { body, param } from 'express-validator';

export const userCreateValidation = [
  body('login').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4 }),
];

export const userUpdateValidation = [
  param('id').isInt(),
  body('login').optional().isLength({ min: 3 }),
  body('email').optional().isEmail(),
  body('password').optional().isLength({ min: 4 }),
];

export const userIdValidation = [
  param('id').isInt(),
];

export default {
  userCreateValidation,
  userUpdateValidation,
  userIdValidation
};
