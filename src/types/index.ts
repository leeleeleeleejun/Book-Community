export interface FormFiledProps {
  name: userKey;
  type: "text" | "email" | "password" | "tel";
  placeholder: string;
  value: string;
  onChange: (value: string, key?: userKey) => void;
}

export interface userInfo {
  name: string;
  nickname: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone_number: string;
  profile: string;
}

export type userKey =
  | "name"
  | "nickname"
  | "email"
  | "password"
  | "confirmPassword"
  | "phone_number";

export interface editUserInfo {
  nickname: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
}
