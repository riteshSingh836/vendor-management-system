import PerformanceRepository from "./performance.repository.js";

// Object creation
const performanceRepository = new PerformanceRepository();

export default class PerformanceController {

    async get(req,res) {
        try {
            const vendor = await performanceRepository.get(req.params.vendorId);
            if (!vendor) {
                return res.status(404).json({ message: "Vendor not found" });
              }
              res.status(200).json({
                onTimeDeliveryRate: vendor.onTimeDeliveryRate,
                qualityRatingAvg: vendor.qualityRatingAvg,
                averageResponseTime: vendor.averageResponseTime,
                fulfillmentRate: vendor.fulfillmentRate,
              });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}