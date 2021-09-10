import express from 'express';
import demoRouter from './demoRouter.js';

const router = express.Router();

demoRouter(router);



export default router;