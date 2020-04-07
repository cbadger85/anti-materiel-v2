import ruleRoutes from './api/ruleRoutes';
import ammoRoutes from './api/ammoRoutes';
import weaponRoutes from './api/weaponRoutes';
import infoWarAttackRoutes from './api/infoWarAttackRoutes';
import unitRoutes from './api/unitRoutes';
import entryRoutes from './api/entryRoutes';
import allDataRoutes from './api/allDataRoutes';
import express from 'express';

const apiRouter = express.Router();

apiRouter.use('/rules', ruleRoutes);
apiRouter.use('/ammo', ammoRoutes);
apiRouter.use('/weapons', weaponRoutes);
apiRouter.use('/info-war-attacks', infoWarAttackRoutes);
apiRouter.use('/units', unitRoutes);
apiRouter.use('/entries', entryRoutes);
apiRouter.use('/all', allDataRoutes);

export default apiRouter;
