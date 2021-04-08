export type User = {
  id: string;
  email: string;
  password: string;
  role: string;
  cep: string;
  numero: string;
  complemento: string;
};

export type LoginCreds = {
  email: string;
  password: string;
};
