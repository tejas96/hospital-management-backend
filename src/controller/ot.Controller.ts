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

export const getPatient = async (req: Request, res: Response) => {
  const patients = await Ot.getPatient();
  const result = patients.map((item) => ({ id: item.id, ...item.data() }));
  res.send(result);
};

export const updateStatus = async (req: Request, res: Response) => {
  const { id, status } = req.params;
  try {
    await Ot.updateStatus(id, status);
  } catch (er: any) {
    return res.status(500).send("Something went wrong");
  }
  return res.status(200).send("updated");
};
