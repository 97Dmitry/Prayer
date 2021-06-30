import httpClient from "./server";

interface ISingIn {
  email: string;
  password: string;
}
export const singIn = async (data: ISingIn) => {
  return await httpClient.post("auth/sign-in", data);
};

interface ISingUp {
  email: string;
  name: string;
  password: string;
}
export const singUp = async (data: ISingUp) => {
  return await httpClient.post("auth/sign-up", data);
};
