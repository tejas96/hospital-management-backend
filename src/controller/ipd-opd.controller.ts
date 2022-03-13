import { Request, Response } from "express";
import { Patient as PatientDTO } from "../model";
import { Patient } from "../repository";
import { ParameterDictionary } from "./RequestParamsDictionary";
export const fetchPatientByPhoneNumber = async (
  req: Request<ParameterDictionary>,
  res: Response
) => {
  const { phoneNumber } = req.params;
  const patient = await Patient.findPatientByPhoneNumber(phoneNumber);
  if (patient) {
    res.status(200).send(patient);
  } else {
    res.status(404).send("Patient not found");
  }
};

export const createPatient = async (req: Request, res: Response) => {
  const patientObject: PatientDTO = req.body;
  const patient = await Patient.createPatient(patientObject);
  if (patient.id) {
    res.status(200).send(patient.id);
  } else {
    res.status(500).send("Error creating patient");
  }
};
