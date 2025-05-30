import { Router } from 'express';
import { ResponsesRepository } from '../repositories/responses-repository.js';
import { createResponseValidation, updateResponseValidation, responseIdValidation } from '../validator/responses-validator.js';
import { validationResult } from 'express-validator';

export const ResponsesRouter = Router();

ResponsesRouter.get('/', async (_, res) => {
  const responses = await ResponsesRepository.findAll();
  res.status(200).json(responses);
});

ResponsesRouter.get('/:id', responseIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const response = await ResponsesRepository.findById(req.params.id);
  if (response) res.status(200).json(response);
  else res.status(404).send();
});

ResponsesRouter.post('/', createResponseValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await ResponsesRepository.create(req.body);
  res.status(201).json(created);
});

ResponsesRouter.put('/:id', updateResponseValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await ResponsesRepository.update(req.params.id, req.body);
  if (updated) {
    const response = await ResponsesRepository.findById(req.params.id);
    res.status(200).json(response);
  } else res.status(404).send();
});

ResponsesRouter.delete('/:id', responseIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await ResponsesRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});
export default ResponsesRouter;
