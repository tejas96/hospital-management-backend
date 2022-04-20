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
router.get(
  "/patient/ipd/:patientId",
  authMiddleware,
  IPD_OPDController.fetchIpdPatient
);
router.delete("/patient/:id", () => {});
router.get(
  "/patient/bookings/:patientId",
  IPD_OPDController.fetchPatientBookings
);
// router.get("/booking/reject", authMiddleware, IPD_OPDController.rejectBooking);
router.put("/patient/:id", authMiddleware, IPD_OPDController.updatePatient);
export default router;
