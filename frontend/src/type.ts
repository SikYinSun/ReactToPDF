export interface ClientInfo {
  clientName: string;
  school: string;
  phoneNum: string;
  memberQty: number;
}

export interface PhotoSelection {
  photoSelected: string[];
  remark: string;
  totalPhoto: number;
}

export interface FormData extends
  ClientInfo,
  PhotoSelection {}