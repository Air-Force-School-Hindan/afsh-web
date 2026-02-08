export interface AlumniFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  batchYear: string;
  passingYear: string;
  currentOccupation: string;
  company: string;
  designation: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
  linkedInProfile: string;
  achievements: string;
  message: string;
  allowContact: boolean;
  newsletter: boolean;
}

export interface AlumniRegistrationResponse {
  message?: string;
  error?: string;
  success: boolean;
}
