import './config/dbConnection';

import cors from 'cors';
import express from 'express';
import routes from './routes/v1/index';
import 'dotenv/config';
import { errorMiddleware } from './middlewares/errorMiddleware';

const app = express();

app.use(
  cors({
    origin: process.env.SERVER_CORS_ACCEPT,
  })
);
app.use(express.json());

app.use('/api', routes);

if (process.env.NODE_ENV !== 'production') {
  const swaggerDocument = require('./docs/swagger-output.json');
  const { swaggerUi } = require('./docs/swagger');
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.use(errorMiddleware);

export default app;
