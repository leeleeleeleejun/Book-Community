import { LoginButtonBox } from "./LoginStyle";

const LoginButton = ({
  login,
  setLogin,
}: {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <LoginButtonBox
      onClick={() => {
        setLogin(!login);
      }}
    >
      <div>독서일기 시작하기</div>
      <p>로그인/회원가입</p>
    </LoginButtonBox>
  );
};

export default LoginButton;
