import Admin from "../config/firebase";
export const addPatient = async (patient: any) => {
  const patientRef = await Admin.firestore().collection("Ot").add(patient);
  return patientRef;
};
