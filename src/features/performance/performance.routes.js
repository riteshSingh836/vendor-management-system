import express from 'express';
import PerformanceController from './performance.controller.js';

const performanceRouter = express.Router();

// Object creation
const performanceController = new PerformanceController();

performanceRouter.get("/:vendorId/performance", performanceController.get);

export default performanceRouter;