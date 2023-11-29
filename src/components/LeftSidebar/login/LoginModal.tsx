import { Link } from "react-router-dom";
import { LoginModalBox } from "./Login.style";
import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
import CloseButton from "@/assets/CloseButton";
import { ModalContainer } from "@/components/common/ModalContainer";
import { CLIENT_PATH } from "@/constants/path";

const LoginModal = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ModalContainer>
      <LoginModalBox>
        <button
          className="close"
          onClick={() => {
            setLogin(!login);
          }}
        >
          <CloseButton />
        </button>
        <img src="logo_2.jpg" />
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" />
        <FormButton>로그인</FormButton>
        <div>
          <p>아직 회원이 아니신가요?</p>
          <Link to={CLIENT_PATH.SIGNUP}>회원가입</Link>
        </div>
      </LoginModalBox>
    </ModalContainer>
  );
};

export default LoginModal;
