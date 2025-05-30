import { Router } from 'express';
import { UsersRepository } from '../repositories/users-repository.js';
import { userCreateValidation, userUpdateValidation, userIdValidation } from '../validator/users-validator.js';
import { validationResult } from 'express-validator';

export const UsersRouter = Router();

UsersRouter.get('/', async (_, res) => {
  const users = await UsersRepository.findAll();
  res.status(200).json(users);
});

UsersRouter.get('/:id', userIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const user = await UsersRepository.findById(req.params.id);
  if (user) res.status(200).json(user);
  else res.status(404).send();
});

UsersRouter.post('/', userCreateValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await UsersRepository.create(req.body);
  res.status(201).json(created);
});

UsersRouter.put('/:id', userUpdateValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await UsersRepository.update(req.params.id, req.body);
  if (updated) {
    const user = await UsersRepository.findById(req.params.id);
    res.status(200).json(user);
  } else res.status(404).send();
});

UsersRouter.delete('/:id', userIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await UsersRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});

export default UsersRouter;
