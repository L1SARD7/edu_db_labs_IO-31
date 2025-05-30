import { app } from './app.js';
import { runDB } from './db/db.js';

const PORT = process.env.PORT || 1235;

const StartAPI = async () => {
  await runDB();
  app.listen(PORT, () => {
    console.log('Server started on port', PORT);
  });
};

StartAPI();