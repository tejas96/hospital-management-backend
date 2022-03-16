import { Request, Response } from "express";
import { Booking, Patient as PatientDTO } from "../model";
import { Booking as BookingRepo, Patient } from "../repository";
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

export const bookAppointment = async (req: Request, res: Response) => {
  const patientBook: Booking = req.body;
  patientBook.createdAt = new Date().getTime().toString();
  patientBook.updatedAt = new Date().getTime().toString();
  patientBook.isCancelled = false;
  const booking = await BookingRepo.createAppointment(patientBook);
  if (booking?.id) {
    res.status(200).send(booking.id);
  } else {
    res.status(500).send("Error creating booking");
  }
};

export const fetchAllAppointments = async (req: Request, res: Response) => {
  const allAppointments = await BookingRepo.fetchAllAppointments();
  if (allAppointments.length > 0) {
    res.status(200).send(allAppointments);
  } else {
    res.status(500).send("Error fetching all appointments");
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const patientBook: Booking = req.body;
  patientBook.updatedAt = new Date().getTime().toString();

  const { id, ...restData } = patientBook;

  if (id) {
    const updateRes = await BookingRepo.updateAppointment(id, restData).catch(
      (err) => {
        return null;
      }
    );
    if (updateRes) return res.status(200).send("Record updated successfully");
    else return res.status(500).send("Unable to update record");
  } else {
    return res.status(401).send("Id not present in request");
  }
};
