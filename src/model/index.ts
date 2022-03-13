export type RFPStatus = "Pending" | "Approved" | "Rejected";
export type RFP = {
  id?: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  createdAt: string;
  updatedAt: string;
  status: RFPStatus;
};

export type Patient = {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  age: number;
};
