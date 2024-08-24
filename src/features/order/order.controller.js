import OrderRepository from "./order.repository.js";

// Object creation
const orderRepository = new OrderRepository();

export default class OrderController {

    async add(req,res) {
        try {
            const po = await orderRepository.add(req.body);
            res.status(201).json(po);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getById(req,res) {
        try {
            const po = await orderRepository.getById(req.params.poId);
            if (!po) {
              return res.status(404).json({ message: "Purchase Order not found" });
            }
            res.status(200).json(po);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async getAll(req,res) {
        try {
            const filter = req.query.vendor ? { vendor: req.query.vendor } : {};
            const po = await orderRepository.getAll(filter);
            res.status(200).json(po);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async updateById(req,res) {
        try {
            const po = await orderRepository.updateById(req.params.poId, req.body);
            if (!po) {
              return res.status(404).json({ message: "Purchase Order not found" });
            }
            res.status(200).json(po);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async deleteById(req,res) {
        try {
            const po = await orderRepository.deleteById(req.params.poId);
            if (!po) {
              return res.status(404).json({ message: "Purchase Order not found" });
            }
            res.status(200).json({ message: "Purchase Order deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}