import { Router } from "express";

const router = Router();

router.get("/patient", () => {});
router.get("/patient/:id", () => {});
router.post("/patient", () => {});
router.put("/patient/:id", () => {});
router.delete("/patient/:id", () => {});

router.get("/patient/:id/invoice", () => {});
router.get("/patient/:id/invoice/:invoiceId", () => {});
router.post("/patient/:id/invoice", () => {});
router.put("/patient/:id/invoice/:invoiceId", () => {});
router.delete("/patient/:id/invoice/:invoiceId", () => {});

export default router;
