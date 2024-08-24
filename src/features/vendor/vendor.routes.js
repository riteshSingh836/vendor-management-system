import express from 'express';
import VendorController from './vendor.controller.js';

const vendorRouter = express.Router();

// Object creation
const vendorController = new VendorController();

vendorRouter.post("/", vendorController.add);                   // creating
vendorRouter.get("/", vendorController.getAll);                 // retrieving all
vendorRouter.get("/:vendorId", vendorController.getById);       // retrieve one
vendorRouter.put("/:vendorId", vendorController.updateById);    // update one
vendorRouter.delete("/:vendorId", vendorController.deleteById); // delete one

export default vendorRouter;