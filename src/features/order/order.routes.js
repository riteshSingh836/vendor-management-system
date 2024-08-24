import express from 'express';
import OrderController from './order.controller.js';

const orderRouter = express.Router();

// Object creation
const orderController = new OrderController();

orderRouter.post("/", orderController.add);                   // creating
orderRouter.get("/", orderController.getAll);                 // retrieving all with optional vendor filter
orderRouter.get("/:poId", orderController.getById);         // retrieve one
orderRouter.put("/:poId", orderController.updateById);      // update one
orderRouter.delete("/:poId", orderController.deleteById);   // delete one

export default orderRouter;