import mongoose from "mongoose";

const performanceSchema = new mongoose.Schema({
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
    date: { type: Date, required: true },
    onTimeDeliveryRate: { type: Number, default: 0 },
    qualityRatingAvg: { type: Number, default: 0 },
    averageResponseTime: { type: Number, default: 0 },
    fulfillmentRate: { type: Number, default: 0 }
});

export const PerformanceModel = mongoose.model("Performance", performanceSchema);