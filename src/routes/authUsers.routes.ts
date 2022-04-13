import { Router } from "express";
import { AuthUserController } from "../controller";
const router = Router();

router.get("/loggedInUser", AuthUserController.fetchLoggedInUser);
router.get("/sendOtp/:phoneNumber", AuthUserController.sendOtpHandler);
router.post("/verifyOtp", AuthUserController.verifyOtpHandler);
export default router;
