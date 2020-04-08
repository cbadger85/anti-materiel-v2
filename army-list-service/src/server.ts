import express from 'express';
import bodyParser from 'body-parser';
import { Express } from 'express-serve-static-core';
import { requestLogger } from './utils/requestLogger';
import { serverTimout } from './utils/serverTimeout';
import errorHandlers from './errors/errorHanders';
import apiRoutes from './routes/apiRoutes';
import path from 'path';

const app = express();

export const server = async (): Promise<Express> => {
  app.use(serverTimout());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static(path.resolve(process.cwd(), 'static')));

  app.use(requestLogger);

  app.use('/api', apiRoutes);

  app.use(errorHandlers);

  return app;
};

export default server;
