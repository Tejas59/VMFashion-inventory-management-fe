export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserData  {
  success: boolean;
  message: string;
  user: UserLoginPayload;
}
