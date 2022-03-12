import { Request, Response } from "express";
import Admin from "../config/firebase";

export const fetchLoggedInUser = async (req: Request, res: Response) => {
  const { uid } = <{ uid: string }>req.query;
  if (!uid) res.status(400).send("Bad request!, check user id in query params");
  const currentlyLoggedInUserData = await Admin.firestore()
    .collection("User")
    .doc(uid)
    .get();
  if (!currentlyLoggedInUserData.data())
    return res.status(400).send("User not found");
  return res.status(200).send(currentlyLoggedInUserData.data());
};
