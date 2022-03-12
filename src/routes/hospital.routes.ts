import { Router } from "express";
import { HospitalController } from "../controller";
import { authMiddleware } from "../middleware";
const router = Router();

router.post("/register", () => {});
router.put("/:id", () => {});
router.get("/doctors", authMiddleware, HospitalController.fetchAllDoctors);
export default router;
