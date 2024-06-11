import cors from "cors";
import express from "express";
import costCheckerRoutes from "./cost-checker/routes";

const app = express();
const port = 13000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/api/", costCheckerRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
