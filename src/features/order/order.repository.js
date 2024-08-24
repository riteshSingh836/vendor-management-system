import { OrderModel } from "./order.schema.js";

export default class OrderRepository {
    
    async add(purchase) {
        try {
            const po = new OrderModel(purchase);
            await po.save();
            return po;
        } catch (error) {
            console.log(error);
        }
    }
    async getById(id) {
        try {
            const po = await OrderModel.findById(id).populate("vendor");
            return po;
        } catch (error) {
            console.log(error);
        }
    }
    async getAll() {
        try {
            const pos = await OrderModel.find(filter).populate("vendor");
            return pos;
        } catch (error) {
            console.log(error);
        }
    }
    async updateById(id, newPo) {
        try {
            const po = await OrderModel.findByIdAndUpdate(id, newPo, { new: true });
            return po;
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id) {
        try {
            const po = await OrderModel.findByIdAndDelete(id);
            return po;
        } catch (error) {
            console.log(error);
        }
    }
}