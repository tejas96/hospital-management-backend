import { Request, Response } from "express";
import { Ot } from "../repository";
export const addPatient = async (req: Request, res: Response) => {
  const patient = req.body;
  patient.createdAt = new Date();
  patient.updatedAt = new Date();
  await Ot.addPatient(patient);
  res.send({
    message: "Patient added successfully",
  });
};
