import { Router } from "express";
import { authMiddleware } from "../middleware/";
import { sendOTP } from "../utility";
import { IPD_OPDController } from "../controller";
const router = Router();
router.get(
  "/patient/:phoneNumber",
  authMiddleware,
  IPD_OPDController.fetchPatientByPhoneNumber
);
router.get("/patient", () => {});
router.post("/patient", authMiddleware, IPD_OPDController.createPatient);
router.put("/patient/:id", () => {});
router.delete("/patient/:id", () => {});

router.get("/patient/:id/invoice", () => {});
router.get("/patient/:id/invoice/:invoiceId", () => {});
router.post("/patient/:id/invoice", () => {});
router.put("/patient/:id/invoice/:invoiceId", () => {});
router.delete("/patient/:id/invoice/:invoiceId", () => {});

export default router;
