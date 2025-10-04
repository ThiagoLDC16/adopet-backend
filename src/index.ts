import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import animalRouter from './routes/animal.routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(
  cors({
    origin: process.env.APP_ORIGIN || [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:5175',
      'http://localhost:5176',
      'http://localhost:5177',
      'http://localhost:5178',
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/animals', animalRouter);

app.use(errorHandler);

const server = app.listen(3001, () => {
  console.log(`Server ready at: http://localhost:3001`);
});
