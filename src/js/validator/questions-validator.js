import { body, param } from 'express-validator';

export const createQuestionValidation = [
  body('survey_id').isInt(),
  body('question_text').isLength({ min: 3 }),
  body('question_type').isIn(['text', 'single_choice', 'multiple_choice']),
  body('question_order').optional().isInt()
];

export const updateQuestionValidation = [
  param('id').isInt(),
  body('question_text').optional().isLength({ min: 3 }),
  body('question_type').optional().isIn(['text', 'single_choice', 'multiple_choice']),
  body('question_order').optional().isInt()
];

export const questionIdValidation = [
  param('id').isInt()
];
export default {
  createQuestionValidation,
  updateQuestionValidation,
  questionIdValidation
};
