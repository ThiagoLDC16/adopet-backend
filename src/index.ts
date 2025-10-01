import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import animalRouter from './routes/animal.routes';
import { errorHandler } from './middlewares/error-handler';

const app = express();

app.use(cors({
  origin: process.env.APP_ORIGIN || 'http://localhost:5173'
}));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/animal', animalRouter);

app.use(errorHandler);

const server = app.listen(3001, () => {
  console.log(`Server ready at: http://localhost:3001`);
});
