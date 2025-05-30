import express from 'express';
import  UsersRouter  from './routers/users-router.js';
import { SurveysRouter } from './routers/surveys-router.js';
import { QuestionsRouter } from './routers/questions-router.js';
import { OptionsRouter } from './routers/options-router.js';
import { ResponsesRouter } from './routers/responses-router.js';
import { AnswersRouter } from './routers/answers-router.js';


export const app = express();
app.use(express.json());

app.get('/', (_, res) => res.send('Test'));
app.use('/users', UsersRouter);
app.use('/surveys', SurveysRouter);
app.use('/questions', QuestionsRouter);
app.use('/options', OptionsRouter);
app.use('/responses', ResponsesRouter);
app.use('/answers', AnswersRouter);

export default app;
