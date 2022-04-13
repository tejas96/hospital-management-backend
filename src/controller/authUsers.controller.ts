import { Request, Response } from "express";
import { sendOTP } from "../utility";
import Admin from "../config/firebase";

const otpTable = {
  "123456789": 123456,
} as any;

export const fetchLoggedInUser = async (req: Request, res: Response) => {
  const { uid } = <{ uid: string }>req.query;
  if (!uid) res.status(400).send("Bad request!, check user id in query params");
  const currentlyLoggedInUserData = await Admin.firestore()
    .collection("User")
    .doc(uid)
    .get();
  if (!currentlyLoggedInUserData.data())
    return res.status(400).send("User not found");
  return res.status(200).send(currentlyLoggedInUserData.data());
};

export const sendOtpHandler = async (req: Request, res: Response) => {
  const { phoneNumber } = req.params;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const message = `Your OTP is ${otp}`;
  otpTable[phoneNumber] = otp;
  try {
    sendOTP("+91" + phoneNumber, message);
  } catch (e) {
    return res.status(400).send("Error sending OTP");
  }
  return res.status(200).send("OTP sent successfully");
};

export const verifyOtpHandler = async (req: Request, res: Response) => {
  const { phoneNumber, otp } = req.body;
  if (otpTable[phoneNumber + ""] === Number(otp)) {
    delete otpTable[phoneNumber];
    return res.status(200).send("OTP verified");
  }
  return res.status(400).send("OTP not verified");
};
