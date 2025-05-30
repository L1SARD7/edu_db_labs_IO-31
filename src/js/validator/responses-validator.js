import { body, param } from 'express-validator';

export const createResponseValidation = [
  body('survey_id').isInt(),
  body('user_id').isInt()
];

export const updateResponseValidation = [
  param('id').isInt(),
  body('survey_id').optional().isInt(),
  body('user_id').optional().isInt()
];

export const responseIdValidation = [
  param('id').isInt()
];

export default {
  createResponseValidation,
  responseIdValidation,
  updateResponseValidation
};
