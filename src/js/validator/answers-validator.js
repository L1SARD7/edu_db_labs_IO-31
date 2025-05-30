import { body, param } from 'express-validator';

export const createAnswerValidation = [
  body('response_id').isInt(),
  body('question_id').isInt(),
  body('answer_text').optional().isString(),
  body('selected_option_ids').optional().isString()
];

export const updateAnswerValidation = [
  param('id').isInt(),
  body('answer_text').optional().isString(),
  body('selected_option_ids').optional().isString()
];

export const answerIdValidation = [
  param('id').isInt()
];

export default {
  createAnswerValidation,
  updateAnswerValidation,
  answerIdValidation
};
