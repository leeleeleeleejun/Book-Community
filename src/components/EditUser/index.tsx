import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { userKey, editUserInfo } from "@/types";
import EditProfileImage from "./EditProfileImage";
import FormField from "@/components/common/FormField";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";
import FormButton from "@/components/common/FormButton";
import { EditUserInfoValidate } from "@/utils/validate";
import { ModalContainer, ModalBox } from "@/components/common/ModalContainer";
import CloseButton from "@/assets/CloseButton";
import { closeModal } from "./EditUserSlice";

const EditUser = () => {
  const dispatch = useDispatch();

  const [editUserInfo, setEditUserInfo] = useState<editUserInfo>({
    nickname: "",
    introduction: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
  });
  const [validateError, serValidateError] = useState("");
  const { nickname, introduction, password, confirmPassword, phone_number } =
    editUserInfo;
  const setEditUserInfoFunc = useCallback((value: string, key?: userKey) => {
    if (!key) return;
    setEditUserInfo((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <ModalContainer>
      <ModalBox>
        <button
          className="close"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <CloseButton />
        </button>
        <EditProfileImage />
        <FormField
          name="nickname"
          type="text"
          placeholder="2글자 이상"
          value={nickname}
          onChange={setEditUserInfoFunc}
        />
        <FormField
          name="introduction"
          type="text"
          placeholder="한 줄로 나를 소개해 주세요"
          value={introduction}
          onChange={setEditUserInfoFunc}
        />
        <FormField
          name="password"
          type="password"
          placeholder="특수문자, 문자, 숫자 포함 8~15자"
          value={password}
          onChange={setEditUserInfoFunc}
        />
        <FormField
          name="confirmPassword"
          type="password"
          placeholder="특수문자, 문자, 숫자 포함 8~15자"
          value={confirmPassword}
          onChange={setEditUserInfoFunc}
        />
        <FormField
          name="phone_number"
          type="tel"
          placeholder="01011112222"
          value={phone_number}
          onChange={setEditUserInfoFunc}
        />
        <ValidErrorMessage>{validateError}</ValidErrorMessage>
        <FormButton
          onClick={() => {
            EditUserInfoValidate(editUserInfo, serValidateError);
          }}
        >
          수정하기
        </FormButton>
      </ModalBox>
    </ModalContainer>
  );
};

export default EditUser;
