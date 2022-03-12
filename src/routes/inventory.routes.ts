import { Router } from "express";
import { authMiddleware } from "../middleware";
import { InventoryController } from "../controller";

const router = Router();

router.get("/", authMiddleware, InventoryController.fetchAllInventory);
router.get("/:id", () => {});
router.post("/", () => {});
router.put("/:id", () => {});
router.delete("/:id", () => {});

export default router;
