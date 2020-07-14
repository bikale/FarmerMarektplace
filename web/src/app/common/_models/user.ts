export class User {
  role?: string;
  accessToken?: string;
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
