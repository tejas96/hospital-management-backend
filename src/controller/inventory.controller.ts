import { Request, Response } from "express";
import FirebaseAdmin from "../config/firebase";
export const fetchAllInventory = async (_: Request, res: Response) => {
  const docsRef = await FirebaseAdmin.firestore().collection("Inventory").get();
  const items = docsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.status(200).send(items);
};
