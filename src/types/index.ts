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
  introduction: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone_number: string;
  profile: string;
  activity_graph: [Date, number][];
  my_book: string[];
}

export type userKey =
  | "name"
  | "nickname"
  | "introduction"
  | "email"
  | "password"
  | "confirmPassword"
  | "phone_number";

export interface editUserInfo {
  nickname: string;
  introduction: string;
  password: string;
  confirmPassword: string;
  phone_number: string;
}
