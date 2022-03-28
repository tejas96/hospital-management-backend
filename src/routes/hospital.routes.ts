import { Router } from "express";
import { HospitalController } from "../controller";
const router = Router();

router.post("/register", () => {});
router.put("/:id", () => {});
router.get("/doctors", HospitalController.fetchAllDoctors);
router.post("/book-request", HospitalController.fetchAllDoctors);
export default router;
