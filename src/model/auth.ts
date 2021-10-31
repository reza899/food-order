export interface LoginForm {
  username: string;
  password: string;
}

export interface User {
  objectId: string;
  username: string;
  sessionToken: string;
  email?: string;
}
