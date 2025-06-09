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

export interface PhotographyDepartment {
  photoCheck: string;
  standard: boolean;
  highStandard: boolean;
}

export interface DesignDepartment {
  designer: string;
  designChecker: string;
  standard: boolean;
  highStandard: boolean;
}

export interface ProductionDepartment {
  deliveryDate: string;
}

export interface DepartmentData {
  studio: StudioDepartment;
  photograph: PhotographyDepartment;
  design: DesignDepartment;
  product: ProductionDepartment;
}

export interface FormData extends
  ClientInfo,
  PhotoSelection,
  DepartmentData {
    studio: StudioDepartment;
    photograph: PhotographyDepartment;
    design: DesignDepartment;
    product: ProductionDepartment;
  }