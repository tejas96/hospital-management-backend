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

export const onlineBookingRequest = async (payload: any) => {
  const res = await Admin.firestore()
    .collection("OnlineBookingRequests")
    .add(payload);
  return res;
};

export const fetchAllOnlineBookingRequests = async () => {
  const allDocs = await Admin.firestore()
    .collection("OnlineBookingRequests")
    .get();
  return allDocs;
};

export const deleteBookRequest = async (id: string) => {
  const res = await Admin.firestore()
    .collection("OnlineBookingRequests")
    .doc(id)
    .delete();
  return res;
};

export const fetchIpdPatientById = async (
  patientId: string
): Promise<Admin.firestore.DocumentData | null> => {
  const patient = await Admin.firestore()
    .collection("Bookings")
    .where("patientId", "==", patientId)
    .where("isCancelled", "==", false)
    .where("wardType", "==", "IPD")
    .get();
  if (patient.empty) {
    return null;
  } else {
    return { id: patient.docs[0].id, ...patient.docs[0].data() };
  }
};
