import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import costCheckerRoutes from "./cost-checker/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 13000;

app.use(cors());
app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/", costCheckerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
