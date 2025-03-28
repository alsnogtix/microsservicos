import express from "express";
import * as db from "./config/db/initialData.js";
import UserRoutes from "./modules/user/routes/UserRoutes.js";

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;

db.createInitialData();

app.use(express.json());
app.use(UserRoutes);

app.get("/api/status", (req, res) => {
    return res.status(200).json({
        service: "Auth-api",
        status: "up",
        httpStatus: 200,
    })
})


app.listen(PORT, () => {
    console.info(`Server started succesfully at PORT ${PORT}`);
})