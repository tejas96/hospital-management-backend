import { Router } from "express";
import { AuthUserController } from "../controller";
import { authMiddleware } from "../middleware";
const router = Router();

router.get("/loggedInUser", AuthUserController.fetchLoggedInUser);

export default router;
