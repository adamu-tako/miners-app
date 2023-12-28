export interface IMinerForm {
  fullName: string;
  phoneNumber: string;
  state: string;
  lga: string;
  ward: string;
  address: string;
  experience: string;
  companyName: string;
  guarantor: string;
  guarantorPhone: string;
}

export interface ISave {
  key?: "minerId" | "compnayId";
  minerId?: string;
  companyId?: string;
}

export interface MinerDataI {
  minerId: string;
  fullName: string;
  companyName: string;
  companyId: string;
  address: string;
  phoneNumber: string;
  state: string;
  lga: string;
  ward: string;
  guarantor: string;
  guarantorPhone: string;
  experience: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}