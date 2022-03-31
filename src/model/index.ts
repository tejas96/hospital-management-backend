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

export type WardType = "IPD" | "OPD";
export type Booking = {
  id?: string;
  patientId: string;
  doctorId: string;
  dateAndTime: string;
  createdAt?: string;
  updatedAt?: string;
  treatmentType: string;
  paid: boolean;
  amount: number;
  wardType: WardType;
  isCancelled?: boolean;
  patientName: string;
  isOnlineBooking?: boolean;
  phoneNumber?: string;
};
