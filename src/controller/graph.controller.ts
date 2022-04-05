import { Request, Response } from "express";
import Admin from "../config/firebase";

export const fetchDisease = async (req: Request, res: Response) => {
  const snapshot = await Admin.firestore().collection("Bookings").get();

  const treatmentTypeMap = {} as any;
  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    if (data.treatmentType) {
      if (treatmentTypeMap[data.treatmentType]) {
        treatmentTypeMap[data.treatmentType] += 1;
      } else {
        treatmentTypeMap[data.treatmentType] = 1;
      }
    }
  });

  if (Object.keys(treatmentTypeMap).length === 0) {
    return res.status(400).json({
      message: "No data found",
    });
  } else {
    return res.status(200).send(treatmentTypeMap);
  }
};
