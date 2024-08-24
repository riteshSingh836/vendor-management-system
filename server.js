import app from "./index.js";
import { connectUsingMongoose } from "./src/config/db.js";

app.listen(5000, async() => {
    await connectUsingMongoose();
    console.log("Server is listening to 5000");
});