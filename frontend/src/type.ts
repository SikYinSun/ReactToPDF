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

// Product Selection

export interface StudioDepartment {
  palace: boolean;
  moreThan: boolean;
  approved: string;
}
export interface DepartmentData {
  studio: StudioDepartment;
  photograph: string[];
  design: string[];
  product: string[];
}

export interface FormData extends
  ClientInfo,
  PhotoSelection,
  DepartmentData {
    studio: StudioDepartment;
  }