import Admin from "../config/firebase";
export const addPatient = async (patient: any) => {
  const patientRef = await Admin.firestore().collection("Ot").add(patient);
  return patientRef;
};

export const getPatient = async () => {
  const patient = await Admin.firestore()
    .collection("Ot")
    .where("operation", "==", "")
    .get();
  return patient.docs;
};

export const updateStatus = async (id: string, status: string) => {
  return await Admin.firestore()
    .collection("Ot")
    .doc(id)
    .update({ operation: status });
};

export const getBirthAndDeath = async () => {
  const patient = await Admin.firestore()
    .collection("Ot")
    .where("operation", "in", ["Birth", "Death"])
    .get();
  return patient.docs;
};
