import { body, param } from 'express-validator';

export const createSurveyValidation = [
  body('title').isLength({ min: 3 }),
  body('description').optional().isString(),
  body('author_id').isInt(),
];

export const updateSurveyValidation = [
  param('id').isInt(),
  body('title').optional().isLength({ min: 3 }),
  body('description').optional().isString(),
  body('is_active').optional().isBoolean(),
  body('closed_at').optional().isString(), // формат: YYYY-MM-DD HH:MM:SS
];

export const surveyIdValidation = [
  param('id').isInt()
];
export default {
  createSurveyValidation,
  updateSurveyValidation,
  surveyIdValidation
};
