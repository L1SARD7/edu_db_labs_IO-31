import { Router } from 'express';
import { SurveysRepository } from '../repositories/surveys-repository.js';
import { createSurveyValidation, updateSurveyValidation, surveyIdValidation } from '../validator/surveys-validator.js';
import { validationResult } from 'express-validator';
import { BasicAuthMiddleware } from '../auth/authenticator.js';

export const SurveysRouter = Router();

SurveysRouter.get('/', async (_, res) => {
  const surveys = await SurveysRepository.findAll();
  res.status(200).json(surveys);
});

SurveysRouter.get('/:id', surveyIdValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const survey = await SurveysRepository.findById(req.params.id);
  if (survey) res.status(200).json(survey);
  else res.status(404).send();
});

SurveysRouter.post('/', createSurveyValidation, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const created = await SurveysRepository.create(req.body);
  res.status(201).json(created);
});

SurveysRouter.put('/:id', updateSurveyValidation, BasicAuthMiddleware(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const updated = await SurveysRepository.update(req.params.id, req.body);
  if (updated) {
    const survey = await SurveysRepository.findById(req.params.id);
    res.status(200).json(survey);
  } else res.status(404).send();
});

SurveysRouter.delete('/:id', surveyIdValidation, BasicAuthMiddleware(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const deleted = await SurveysRepository.delete(req.params.id);
  if (deleted) res.status(204).send();
  else res.status(404).send();
});

export default SurveysRouter;
