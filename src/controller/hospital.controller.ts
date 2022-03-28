import { Request, Response } from "express";
import Admin from "../config/firebase";

export const fetchAllDoctors = async (req: Request, res: Response) => {
  const allDoctors = await Admin.firestore().collection("Doctors").get();
  const doctors = allDoctors.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  if (!doctors.length) {
    return res.status(404).json({
      message: "No doctors found",
    });
  }
  return res.status(200).send(doctors);
};

export const bookRequest = async (req: Request, res: Response) => {};
