import express from 'express';
import bodyParser from 'body-parser';
import { Express } from 'express-serve-static-core';
import { requestLogger } from './utils/requestLogger';
import { serverTimout } from './utils/serverTimeout';
import errorHandlers from './errors/errorHanders';
import ruleRoutes from './routes/ruleRoutes';
import ammoRoutes from './routes/ammoRoutes';
import weaponRoutes from './routes/weaponRoutes';

const app = express();

export const server = async (): Promise<Express> => {
  app.use(serverTimout());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(requestLogger);

  app.use('/rules', ruleRoutes);
  app.use('/ammo', ammoRoutes);
  app.use('/weapons', weaponRoutes);

  app.use(errorHandlers);

  return app;
};

export default server;
