import SettingIcon from "@/assets/SettingIcon";
import MemoList from "@/components/memo/MemoList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { openModal } from "@/components/EditUser/EditUserSlice";

const MyMemoPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Banner>이곳에서 당신의 이야기를 만나보세요.</Banner>
      <UserInfo>
        <UserImg src="carouselImg/1.jpg" />
        <div>
          <UserNicName>
            <span>이준석</span> 님의 메모장
          </UserNicName>
          <UserIntroduction>글로 남기는 나만의 기록장</UserIntroduction>
        </div>
        <button onClick={() => dispatch(openModal())}>
          <SettingIcon />
        </button>
      </UserInfo>
      <MemoList />
    </>
  );
};
export default MyMemoPage;

const Banner = styled.div`
  position: absolute;
  top: 0;
  width: 90%;
  height: 230px;
  background-color: var(--color-light-black-3);
  color: #ecf0f1;
  font-size: 19px;
  font-weight: var(--weight-light);
  text-align: center;
  line-height: 230px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 200px;
  margin-bottom: 30px;
  border: 1px solid var(--color-gray-4);
  padding: 20px;

  button {
    margin-left: auto;
  }
`;

const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserNicName = styled.h2`
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);
  margin-bottom: 10px;
`;

const UserIntroduction = styled.p``;
