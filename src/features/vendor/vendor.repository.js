import { VendorModel } from "./vendor.schema.js";

export default class VendorRepository {
    
    async add(vendor) {
        try {
            const newVendor = new VendorModel(vendor);
            await newVendor.save();
            return newVendor;
        } catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const vendor = await VendorModel.findById(id);
            return vendor;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
        try {
            const vendors = await VendorModel.find();
            return vendors;
        } catch (error) {
            console.log(error);
        }
    }
    async updateById(id, newVendor) {
        try {
            const vendor = await VendorModel.findByIdAndUpdate(id, newVendor, { new: true });
            return vendor;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id) {
        try {
            const vendor = await VendorModel.findByIdAndDelete(id);
            return vendor;
        } catch (error) {
            console.log(error);
        }
    }
}