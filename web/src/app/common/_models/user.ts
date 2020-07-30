export class User {
  role?: string;
  token?: string;
}

export class UserProfile {
  firstname: string;
  lastname: string;
  picture: string;
}

export class Registrationform {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export class LoginCredential {
  email: string;
  password: string;
}

export interface UsersList {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  status: string;
}

export interface ResetPassword {
  email: string;
  password: string;
  resettoken: string;
}
