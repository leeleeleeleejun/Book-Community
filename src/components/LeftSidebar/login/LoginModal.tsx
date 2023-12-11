import { Link } from "react-router-dom";
import { LoginModalBox } from "./Login.style";
import Input from "@/components/common/Input";
import FormButton from "@/components/common/FormButton";
import CloseButton from "@/assets/CloseButton";
import { ModalContainer } from "@/components/common/ModalContainer";
import { CLIENT_PATH } from "@/constants/path";
import { useState } from "react";
import { login } from "@/api/userAPI";

const LoginModal = ({
  closeLoginModalFunc,
}: {
  closeLoginModalFunc: () => void;
}) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunc = async () => {
    const response = await login({ email, password });

    if (response?.ok) {
      closeLoginModalFunc();
      window.location.reload();
    }
  };

  return (
    <ModalContainer>
      <LoginModalBox>
        <button className="close" onClick={closeLoginModalFunc}>
          <CloseButton />
        </button>
        <img src="/logo_2.jpg" />
        <Input
          type="email"
          placeholder="이메일"
          onChange={(e) => {
            setMail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormButton onClick={loginFunc}>로그인</FormButton>
        <div>
          <p>아직 회원이 아니신가요?</p>
          <Link to={CLIENT_PATH.SIGNUP}>회원가입</Link>
        </div>
      </LoginModalBox>
    </ModalContainer>
  );
};

export default LoginModal;
