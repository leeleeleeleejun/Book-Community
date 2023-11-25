import { Link } from "react-router-dom";
import { LoginButtonContainer, LoginModalBox } from "./LoginStyle";

const LoginModal = () => {
  return (
    <LoginButtonContainer>
      <LoginModalBox>
        <img src="logo.jpg" />
        <button>X</button>
        <input placeholder="이메일" />
        <input placeholder="비밀번호" />
        <button>로그인</button>
        <div>
          <p>아직 회원이 아니신가요?</p>
          <Link to={"/"}>회원가입</Link>
        </div>
      </LoginModalBox>
    </LoginButtonContainer>
  );
};

export default LoginModal;
