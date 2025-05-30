import { Router } from 'express';
import { AnswersRepository } from '../repositories/answers-repository.js';
import { createAnswerValidation, updateAnswerValidation, answerIdValidation } from '../validator/answers-validator.js';
import { validationResult } from 'express-validator';

export const AnswersRouter = Router();

AnswersRouter.get('/', async (_, res) => {
  const answers = await AnswersRepository.findAll();
  res.status(200).json(answers);
});

AnswersRouter.get('/:id', answerIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const answer = await AnswersRepository.findById(req.params.id);
  if (answer) res.status(200).json(answer);
  else res.status(404).send();
});

AnswersRouter.post('/', createAnswerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await AnswersRepository.create(req.body);
  res.status(201).json(created);
});

AnswersRouter.put('/:id', updateAnswerValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await AnswersRepository.update(req.params.id, req.body);
  if (updated) {
    const answer = await AnswersRepository.findById(req.params.id);
    res.status(200).json(answer);
  } else res.status(404).send();
});

AnswersRouter.delete('/:id', answerIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await AnswersRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});
export default AnswersRouter;
