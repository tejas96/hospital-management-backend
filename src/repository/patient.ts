import { Patient } from "../model";
import Admin from "../config/firebase";
export const findPatientByPhoneNumber = async (
  phoneNumber: string
): Promise<Admin.firestore.DocumentData | null> => {
  const patient = await Admin.firestore()
    .collection("Patients")
    .where("phoneNumber", "==", phoneNumber)
    .get();
  if (patient.empty) {
    return null;
  } else {
    return { id: patient.docs[0].id, ...patient.docs[0].data() };
  }
};

export const createPatient = async (
  patientObject: Patient
): Promise<Admin.firestore.DocumentReference> => {
  const patient = await Admin.firestore()
    .collection("Patients")
    .add(patientObject);
  return patient;
};

export const updatePatient = async (id: string, patientObject: Patient) => {
  const patient = await Admin.firestore()
    .collection("Patients")
    .doc(id)
    .update(patientObject)
    .then(() => true)
    .catch(() => false);
  return patient;
};
