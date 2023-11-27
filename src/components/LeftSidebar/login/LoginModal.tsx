import { Link } from "react-router-dom";
import { LoginButtonContainer, LoginModalBox } from "./Login.style";
import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
import CloseButton from "@/assets/CloseButton";

const LoginModal = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <LoginButtonContainer>
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
          <Link to={"/"}>회원가입</Link>
        </div>
      </LoginModalBox>
    </LoginButtonContainer>
  );
};

export default LoginModal;
