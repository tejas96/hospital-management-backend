import { Router } from "express";
import { sendOTP } from "../utility";

const router = Router();

router.get("/patient", () => {});
router.get("/patient/:id", () => {});
router.post("/patient", async (req, res) => {
  await sendOTP("+918087823247", "hello there your otp is 12345");
  res.send("ok");
});
router.put("/patient/:id", () => {});
router.delete("/patient/:id", () => {});

router.get("/patient/:id/invoice", () => {});
router.get("/patient/:id/invoice/:invoiceId", () => {});
router.post("/patient/:id/invoice", () => {});
router.put("/patient/:id/invoice/:invoiceId", () => {});
router.delete("/patient/:id/invoice/:invoiceId", () => {});

export default router;
