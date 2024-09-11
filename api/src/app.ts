import express from "express";
import morgan from "morgan";
import cors from "cors";
import characterRoutes from "./Routes/characters.routes";
import swaggerUi from "swagger-ui-express";
import specs from "./docs/swagger";


const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/docus", swaggerUi.serve, swaggerUi.setup(specs))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use("/api", characterRoutes)

export default app