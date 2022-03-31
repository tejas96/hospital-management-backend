import { Request, Response } from "express";
import Admin from "../config/firebase";
import { Booking } from "../repository";
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

export const bookRequest = async (req: Request, res: Response) => {
  await Booking.onlineBookingRequest(req.body);
  return res.status(200).send({
    message: "Booking request sent successfully",
  });
};

export const fetchAllOnlineBookingRequests = async (
  req: Request,
  res: Response
) => {
  const allDocs = await Booking.fetchAllOnlineBookingRequests();
  const data = [] as any;
  allDocs.docs.forEach((doc) => {
    if (doc.data()) data.push({ id: doc.id, ...doc.data() });
  });
  return res.status(200).send(data);
};

export const deleteBookRequest = async (req: Request, res: Response) => {
  try {
    await Booking.deleteBookRequest(req.params.id);
  } catch (e) {
    return res.status(500).send({
      message: "Internal server error",
    });
  }
  return res.status(200).send({
    message: "Booking request deleted successfully",
  });
};
