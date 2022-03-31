import { Router } from "express";
import { authMiddleware } from "../middleware/";
import { IPD_OPDController } from "../controller";
const router = Router();
router.get(
  "/patient/:phoneNumber",
  IPD_OPDController.fetchPatientByPhoneNumber
);
router.get("/patient", () => {});
router.post("/patient", authMiddleware, IPD_OPDController.createPatient);
router.post(
  "/patient/book-appointment",
  authMiddleware,
  IPD_OPDController.bookAppointment
);
router.get(
  "/patient/all/appointments",
  authMiddleware,
  IPD_OPDController.fetchAllAppointments
);
router.put(
  "/patient/book-appointment",
  authMiddleware,
  IPD_OPDController.updateBooking
);
router.put("/patient/:id", () => {});
router.delete("/patient/:id", () => {});

router.get("/patient/:id/invoice", () => {});
router.get("/patient/:id/invoice/:invoiceId", () => {});
router.post("/patient/:id/invoice", () => {});
router.put("/patient/:id/invoice/:invoiceId", () => {});
router.delete("/patient/:id/invoice/:invoiceId", () => {});

export default router;
