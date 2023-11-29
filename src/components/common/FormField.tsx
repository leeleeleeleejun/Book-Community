import { styled } from "styled-components";
import Input from "./Input";
import { FormFiledProps, userKey } from "@/types";
import autoHyphen from "@/utils/autoHyphen";
import React from "react";

const FormFiled = ({
  name,
  type,
  placeholder,
  value,
  onChange,
}: FormFiledProps) => {
  return (
    <FormFiledStyle>
      <Label htmlFor={name}>{labelText(name)}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        maxLength={
          name === "phone_number"
            ? 13
            : name === "password"
            ? 15
            : name === "confirmPassword"
            ? 15
            : undefined
        }
        onChange={(e) => {
          if (name === "phone_number") {
            e.target.value = autoHyphen(e.target.value);
          }
          onChange(e.target.value, name);
        }}
      />
    </FormFiledStyle>
  );
};

export default React.memo(FormFiled);

const FormFiledStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  justify-content: center;
`;

const Label = styled.label`
  width: 280px;
  margin: 5px auto;
`;

const labelText = (name: userKey) => {
  switch (name) {
    case "name":
      return "이름";
    case "nickname":
      return "닉네임";
    case "introduction":
      return "한줄소개";
    case "email":
      return "이메일";
    case "password":
      return "비밀번호";
    case "confirmPassword":
      return "비밀번호 확인";
    case "phone_number":
      return "전화번호";
    default:
      "";
  }
};
