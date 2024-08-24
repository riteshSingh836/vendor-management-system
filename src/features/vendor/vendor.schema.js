import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contactDetails: { type: String, required: true },
    address: { type: String, required: true },
    vendorCode: { type: String, required: true, unique: true },
    onTimeDeliveryRate: { type: Number, default: 0 },
    qualityRatingAvg: { type: Number, default: 0 },
    averageResponseTime: { type: Number, default: 0 },
    fulfillmentRate: { type: Number, default: 0 }
});

export const VendorModel = mongoose.model("Vendor", vendorSchema);