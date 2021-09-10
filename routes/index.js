import express from 'express';
import demoRouter from './demoRouter.js';
import todoRouter from './todoRouter.js';

const router = express.Router();

demoRouter(router);
todoRouter(router);

export default router;