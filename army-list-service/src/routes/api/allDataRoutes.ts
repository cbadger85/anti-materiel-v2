import express from 'express';
import { getAllData } from '../../handlers/allDataHandlers';
import { asyncHandler } from '../../handlers/asyncHandler';

const dataRoutes = express.Router();

dataRoutes.get('/', asyncHandler(getAllData));

export default dataRoutes;
