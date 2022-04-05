import { Router } from "express";
import { GraphController } from "../controller";
import { authMiddleware } from "../middleware";
const router = Router();

router.get("/disease", authMiddleware, GraphController.fetchDisease);

export default router;
