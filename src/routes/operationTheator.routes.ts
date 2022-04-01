import { Router } from "express";
import { authMiddleware } from "../middleware";
import { OtController } from "../controller";
const router = Router();

router.post("/add-patient", authMiddleware, OtController.addPatient);

export default router;
