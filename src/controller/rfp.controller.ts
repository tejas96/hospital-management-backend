import { Request, Response } from "express";
import { RFPStatus } from "../model";
import Admin from "../config/firebase";

export const fetchAllRfp = async (_: Request, res: Response) => {
  const rfps = await Admin.firestore().collection("rfp").get();
  if (rfps.empty) {
    return res.status(404).json({
      message: "No RFPs found",
    });
  }
  const rfpList = rfps.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...(data || {}),
    };
  });
  res.status(200).send(rfpList);
};

export const fetchRfpByStatus = async (req: Request, res: Response) => {
  const { status } = <{ status: RFPStatus }>req.params;
  const rfps = await Admin.firestore()
    .collection("rfp")
    .where("status", "==", status)
    .get();
  if (rfps.empty) {
    return res.status(404).json({
      message: "No RFPs found",
    });
  }
  const rfpList = rfps.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      ...(data || {}),
    };
  });
  res.status(200).send(rfpList);
};

export const createRfp = async (req: Request, res: Response) => {
  const { productName, quantity } = req.body;
  const rfp = await Admin.firestore().collection("rfp").add({
    name: productName,
    qty: quantity,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "Pending",
  });
  res.status(201).json({
    message: "RFP created successfully",
    id: rfp.id,
  });
};

export const rfpAction = async (req: Request, res: Response) => {
  const { id, status } = req.params;
  const rfp = await Admin.firestore().collection("rfp").doc(id).get();
  if (!rfp.exists) {
    return res.status(404).json({
      message: "RFP not found",
    });
  }
  const rfpData = rfp.data();
  if (rfpData?.status === "Approved") {
    return res.status(400).json({
      message: "RFP already approved",
    });
  }
  await Admin.firestore().collection("rfp").doc(id).update({
    status,
    updatedAt: new Date().toISOString(),
  });
  if (status === "Approved") {
    const inventoryItem = await Admin.firestore()
      .collection("Inventory")
      .where("name", "==", rfpData?.name)
      .get();
    await Admin.firestore()
      .collection("Inventory")
      .doc(inventoryItem.docs[0].id)
      .update({
        qty: +inventoryItem.docs[0].data().qty + +rfpData?.qty,
        updatedAt: new Date().toISOString(),
      });
  }
  res.status(200).json({
    message: "RFP action completed successfully",
  });
};
