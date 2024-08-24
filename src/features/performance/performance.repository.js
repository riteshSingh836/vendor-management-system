import { VendorModel } from "../vendor/vendor.schema.js";
import { PerformanceModel } from "./performance.schema.js";

export default class PerformanceRepository {
   
    async get(id) {
        try {
            const vendor = await VendorModel.findById(id);
            return vendor;
        } catch (error) {
            console.log(error);
        }
    }
}