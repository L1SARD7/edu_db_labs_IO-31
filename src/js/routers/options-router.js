import { Router } from 'express';
import { OptionsRepository } from '../repositories/options-repository.js';
import { createOptionValidation, updateOptionValidation, optionIdValidation } from '../validator/options-validator.js';
import { validationResult } from 'express-validator';

export const OptionsRouter = Router();

OptionsRouter.get('/', async (_, res) => {
  const options = await OptionsRepository.findAll();
  res.status(200).json(options);
});

OptionsRouter.get('/:id', optionIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const option = await OptionsRepository.findById(req.params.id);
  if (option) res.status(200).json(option);
  else res.status(404).send();
});

OptionsRouter.post('/', createOptionValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await OptionsRepository.create(req.body);
  res.status(201).json(created);
});

OptionsRouter.put('/:id', updateOptionValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await OptionsRepository.update(req.params.id, req.body);
  if (updated) {
    const option = await OptionsRepository.findById(req.params.id);
    res.status(200).json(option);
  } else res.status(404).send();
});

OptionsRouter.delete('/:id', optionIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await OptionsRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});
export default OptionsRouter;
