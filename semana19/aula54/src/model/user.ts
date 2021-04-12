export type User = {
  id: string;
  email: string;
  userName: string;
  password: string;
  role: 'NORMAL' | 'ADMIN';
};

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpInput = {
  email: string;
  userName: string;
  password: string;
  role: 'NORMAL' | 'ADMIN';
};

export type SignInInput = {
  email: string;
  password: string;
};
