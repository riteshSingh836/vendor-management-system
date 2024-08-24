import express from 'express';
import vendorRouter from './src/features/vendor/vendor.routes.js';
import orderRouter from './src/features/order/order.routes.js';
import performanceRouter from './src/features/performance/performance.routes.js';

const app = express();

app.use(express.json());

// API Routes
app.use("/vendors", vendorRouter);
app.use("/purchase-orders", orderRouter);
app.use("/vendors", performanceRouter);

export default app;