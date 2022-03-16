import { Booking } from "../model";
import Admin from "../config/firebase";

export const createAppointment = async (
  patientBooking: Booking
): Promise<Admin.firestore.DocumentReference | null> => {
  const bookedAppointment = await Admin.firestore()
    .collection("Bookings")
    .add(patientBooking);
  return bookedAppointment;
};

export const fetchAllAppointments = async (): Promise<Booking[]> => {
  const allAppointments = await Admin.firestore()
    .collection("Bookings")
    .where("isCancelled", "==", false)
    .get();
  return allAppointments.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Booking)
  );
};

export const updateAppointment = async (id: string, data: Booking) => {
  const res = await Admin.firestore()
    .collection("Bookings")
    .doc(id)
    .update(data);
  return res;
};
