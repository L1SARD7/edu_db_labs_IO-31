import { Router } from 'express';
import { QuestionsRepository } from '../repositories/questions-repository.js';
import { createQuestionValidation, updateQuestionValidation, questionIdValidation } from '../validator/questions-validator.js';
import { validationResult } from 'express-validator';

export const QuestionsRouter = Router();

QuestionsRouter.get('/', async (_, res) => {
  const questions = await QuestionsRepository.findAll();
  res.status(200).json(questions);
});

QuestionsRouter.get('/:id', questionIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const question = await QuestionsRepository.findById(req.params.id);
  if (question) res.status(200).json(question);
  else res.status(404).send();
});

QuestionsRouter.post('/', createQuestionValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await QuestionsRepository.create(req.body);
  res.status(201).json(created);
});

QuestionsRouter.put('/:id', updateQuestionValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await QuestionsRepository.update(req.params.id, req.body);
  if (updated) {
    const question = await QuestionsRepository.findById(req.params.id);
    res.status(200).json(question);
  } else res.status(404).send();
});

QuestionsRouter.delete('/:id', questionIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await QuestionsRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});
export default QuestionsRouter;
