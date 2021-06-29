export interface IUser {
  name: string;
  email: string;
  token: string | null;
  id: number | null;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IRegistration {
  email: string;
  name: string;
  password: string;
}
