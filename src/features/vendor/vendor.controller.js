import VendorRepository from "./vendor.repository.js";

// Object creation
const vendorRepository = new VendorRepository();

export default class VendorController {

    async add(req,res) {
        try {
            const vendor = await vendorRepository.add(req.body);
            res.status(201).json(vendor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getById(req,res) {
        try {
            const vendor = await vendorRepository.getById(req.params.vendorId);
            if (!vendor) {
              return res.status(404).json({ message: "Vendor not found" });
            }
            res.status(200).json(vendor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAll(req,res) {
        try {
            const vendors = await vendorRepository.getAll();
            res.status(200).json(vendors);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async updateById(req,res) {
        try {
            const vendor = await vendorRepository.updateById(req.params.vendorId, req.body);
            if (!vendor) {
              return res.status(404).json({ message: "Vendor not found" });
            }
            res.status(200).json(vendor);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async deleteById(req,res) {
        try {
            const vendor = await vendorRepository.deleteById(req.params.vendorId);
            if (!vendor) {
              return res.status(404).json({ message: "Vendor not found" });
            }
            res.status(200).json({ message: "Vendor deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}