import { LoginButtonBox } from "./Login.style";

const LoginButton = ({
  openLoginModalFunc,
}: {
  openLoginModalFunc: () => void;
}) => {
  return (
    <LoginButtonBox onClick={openLoginModalFunc}>
      <div>독서일기 시작하기</div>
      <p>로그인/회원가입</p>
    </LoginButtonBox>
  );
};

export default LoginButton;
