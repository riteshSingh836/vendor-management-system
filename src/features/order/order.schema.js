import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    poNumber: { type: String, required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
    orderDate: { type: Date, required: true },
    deliveryDate: { type: Date },
    items: { type: JSON, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: ["pending", "completed", "canceled"], required: true },
    qualityRating: { type: Number, min: 1, max: 5 },
    issueDate: { type: Date, required: true },
    acknowledgmentDate: { type: Date }
});

export const OrderModel = mongoose.model("Order", orderSchema);