import { useCallback, useState } from "react";
import { userInfo, userKey } from "@/types";
import { SignupValidate } from "@/utils/validate";
import FormFiled from "@/components/common/FormField";
import FormButton from "@/components/common/FormButton";
import ValidErrorMessage from "@/components/common/ValidErrorMessage";
import styled from "styled-components";
import Carousel from "@/components/RightSidebar/SidebarCarousel";
import Footer from "@/components/RightSidebar/Footer";
import { signUpAPI } from "@/api/userAPI";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDayOfWeek);

  const week = Array(7).fill(0);
  const activity_graph_empty: [Date, number[]][] = Array(20)
    .fill(0)
    .map((_, index) => {
      const weekStartDay = new Date(startOfWeek);
      weekStartDay.setDate(startOfWeek.getDate() - index * 7);
      return [weekStartDay, week];
    });

  const [signUPInfo, setSignUPInfo] = useState<userInfo>({
    name: "",
    nickname: "",
    introduction: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    profile: "",
    activity_graph: activity_graph_empty.reverse(),
    my_book: [],
  });

  const [validateError, serValidateError] = useState("");

  const { name, nickname, email, password, confirmPassword, phone_number } =
    signUPInfo;

  const setSignUPInfoFunc = useCallback((value: string, key?: userKey) => {
    if (!key) return;
    setSignUPInfo((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <Container>
      <CarouselBox>
        <Logo src="logo.jpg" />
        <Carousel signUp={true} />
        <Footer signUp={true} />
      </CarouselBox>
      <main>
        <PageTitle>회원가입</PageTitle>
        <FormFiled
          name="name"
          type="text"
          placeholder="2글자 이상"
          value={name}
          onChange={setSignUPInfoFunc}
        />
        <FormFiled
          name="nickname"
          type="text"
          placeholder="2글자 이상"
          value={nickname}
          onChange={setSignUPInfoFunc}
        />
        <FormFiled
          name="email"
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={setSignUPInfoFunc}
        />
        <FormFiled
          name="password"
          type="password"
          placeholder="특수문자, 문자, 숫자 포함 8~15자"
          value={password}
          onChange={setSignUPInfoFunc}
        />
        <FormFiled
          name="confirmPassword"
          type="password"
          placeholder="특수문자, 문자, 숫자 포함 8~15자"
          value={confirmPassword || ""}
          onChange={setSignUPInfoFunc}
        />
        <FormFiled
          name="phone_number"
          type="tel"
          placeholder="01011112222"
          value={phone_number}
          onChange={setSignUPInfoFunc}
        />
        <ValidErrorMessage>{validateError}</ValidErrorMessage>
        <FormButton
          type="button"
          onClick={async () => {
            if (SignupValidate(signUPInfo, serValidateError)) {
              const copyData = { ...signUPInfo };
              delete copyData.confirmPassword;
              const result = await signUpAPI(copyData);

              if (result) {
                navigate("/");
              }
            }
          }}
        >
          가입하기
        </FormButton>
      </main>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  display: flex;
  div,
  main {
    width: 50%;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  margin: 30px 0;
`;

const CarouselBox = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 26px 23px 36px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-sidebar);

  div {
    margin: auto;
  }
`;

const Logo = styled.img`
  width: 300px;
  margin: 50px auto;
`;
