import { editUserInfo, userInfo } from "@/types";

export const LoginValidate = (
  email: string,
  password: string,
  serValidateError: React.Dispatch<React.SetStateAction<string>>
) => {
  // 이메일 유효성 평가
  if (emailValidate(email)) {
    serValidateError(errors.email);
    return;
  }

  // 비밀번호 유효성 평가
  if (PasswordValidate(password)) {
    serValidateError(errors.password);
    return;
  }
};

export const SignupValidate = (
  signUPInfo: userInfo,
  serValidateError: React.Dispatch<React.SetStateAction<string>>
) => {
  const { name, nickname, email, password, confirmPassword, phone_number } =
    signUPInfo;

  // 이름 유효성 평가
  if (nameValidate(name)) {
    serValidateError(errors.name);
    return;
  }

  // 닉네임 유효성 평가
  if (nameValidate(nickname)) {
    serValidateError(errors.nickname);
    return;
  }

  // 이메일 유효성 평가
  if (emailValidate(email)) {
    serValidateError(errors.email);
    return;
  }

  // 비밀번호 유효성 평가
  if (PasswordValidate(password)) {
    serValidateError(errors.password);
    return;
  }

  // 비밀번호 확인 유효성 평가
  if (confirmPasswordValidate(confirmPassword || "", password)) {
    serValidateError(errors.confirmPassword);
    return;
  }

  // 전화번호 유효성 평가
  if (phone_numberdValidate(phone_number)) {
    serValidateError(errors.phone_number);
    return;
  }
  serValidateError("");

  return true;
};

export const EditUserInfoValidate = (
  editUserInfo: editUserInfo,
  serValidateError: React.Dispatch<React.SetStateAction<string>>
) => {
  const { nickname, password, confirmPassword, phone_number } = editUserInfo;

  // 닉네임 유효성 평가
  if (nameValidate(nickname)) {
    serValidateError(errors.nickname);
    return;
  }

  // 비밀번호 유효성 평가
  if (PasswordValidate(password)) {
    serValidateError(errors.password);
    return;
  }

  // 비밀번호 확인 유효성 평가
  if (confirmPasswordValidate(confirmPassword, password)) {
    serValidateError(errors.confirmPassword);
    return;
  }

  // 전화번호 유효성 평가
  if (phone_numberdValidate(phone_number)) {
    serValidateError(errors.phone_number);
    return;
  }
  serValidateError("");
};

const nameValidate = (value: string) => {
  if (value.trim().length < 2) {
    return true;
  }
};

const emailValidate = (value: string) => {
  const isEmailValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!isEmailValid.test(value) || value.length < 1) {
    return true;
  }
};

const PasswordValidate = (value: string) => {
  const isPasswordValid =
    /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  if (!isPasswordValid.test(value) || value.length < 1) {
    return true;
  }
};

const confirmPasswordValidate = (value: string, password: string) => {
  if (value !== password || value.length < 1) {
    return true;
  }
};

const phone_numberdValidate = (value: string) => {
  const isphone_numberValid = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
  if (!isphone_numberValid.test(value) || value.length < 1) {
    return true;
  }
};

const errors = {
  name: "이름을 확인해주세요",
  nickname: "닉네임을 확인해주세요",
  email: "이메일을 확인해주세요",
  password: "비밀번호를 확인해주세요",
  confirmPassword: "비밀번호가 일치하지 않습니다.",
  phone_number: "전화번호를 확인해주세요",
};
