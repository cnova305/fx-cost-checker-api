import { Router } from "express";
import { addRequest } from "./controller";

const router = Router();

router.post("/data", addRequest);

export default router;
