import { Router } from "express";
import { RfpController } from "../controller";
import { authMiddleware } from "../middleware";

const router = Router();

router.get("/", authMiddleware, RfpController.fetchAllRfp);
router.get("/:status", authMiddleware, RfpController.fetchRfpByStatus);
router.get("/:id", () => {});
router.post("/", authMiddleware, RfpController.createRfp);
router.post("/action/:id/:status", authMiddleware, RfpController.rfpAction);
router.put("/:id", () => {});
router.delete("/:id", () => {});

export default router;
