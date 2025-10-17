import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import animalRouter from './routes/animal.routes';
import reportRouter from './routes/report.routes';
import { errorHandler } from './middlewares/error-handler';
import path from "path";

const app = express();

app.use(cors({
  origin: process.env.APP_ORIGIN || 'http://localhost:5173'
}));

app.use("/images", express.static(path.join(process.cwd(), "public", "images")));

app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/animal', animalRouter);
app.use('/api/report', reportRouter);

app.use(errorHandler);

const server = app.listen(3001, () => {
  console.log(`Server ready at: http://localhost:3001`);
});
