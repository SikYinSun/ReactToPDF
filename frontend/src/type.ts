export interface ClientInfo {
  clientName: string;
  school: string;
  phoneNum: string;
  memberQty: number;
}

export interface PhotoSelection {
  photoSelected: string[];
  remark: string;
  giftVideo: boolean;
  baEffect: boolean;
  totalPhoto: number;
}

export interface FormData extends
  ClientInfo,
  PhotoSelection {}