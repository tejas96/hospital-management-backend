import { Router } from "express";
import { authMiddleware } from "../middleware";
import { HospitalController } from "../controller";
const router = Router();

router.post("/register", () => {});
router.put("/:id", () => {});
router.get("/doctors", HospitalController.fetchAllDoctors);
router.post("/book-request", HospitalController.bookRequest);
router.get(
  "/online-booking-requests",
  authMiddleware,
  HospitalController.fetchAllOnlineBookingRequests
);
router.delete(
  "/online-book-request/:id/:status/:phoneNumber",
  authMiddleware,
  HospitalController.deleteBookRequest
);

export default router;
