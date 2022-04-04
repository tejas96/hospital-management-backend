import { Router } from "express";
import { authMiddleware } from "../middleware";
import { OtController } from "../controller";
const router = Router();

router.post("/add-patient", authMiddleware, OtController.addPatient);
router.get("/patient-list", authMiddleware, OtController.getPatient);
router.put("/status/:id/:status", authMiddleware, OtController.updateStatus);
export default router;
