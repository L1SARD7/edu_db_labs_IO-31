import { body, param } from 'express-validator';

export const createOptionValidation = [
  body('question_id').isInt(),
  body('option_text').isLength({ min: 1 })
];

export const updateOptionValidation = [
  param('id').isInt(),
  body('option_text').optional().isLength({ min: 1 })
];

export const optionIdValidation = [
  param('id').isInt()
];

export default {
  createOptionValidation,
  updateOptionValidation,
  optionIdValidation
};
