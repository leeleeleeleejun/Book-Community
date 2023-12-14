import SettingIcon from "@/assets/SettingIcon";
import MemoList from "@/components/memo/MemoList";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/components/User/UserSlice";
import { RootState } from "@/store";
import BasicUserIcon from "@/components/common/BasicUserIcon";
import { API_USER_IMG } from "@/constants/path";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnotherUserInfo } from "@/api/userAPI";
import { userInfo } from "@/types";

const UserMemoPage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const loginUser = useSelector((state: RootState) => state.UserSlice.userInfo);
  const [targetUser, setTargetUser] = useState<userInfo | null>(null);

  useEffect(() => {
    (async () => {
      if (userId !== loginUser?._id) {
        const response = await getAnotherUserInfo(userId || "");
        if (response) {
          const result = await response.json();
          setTargetUser(result.user);
        }
      } else {
        setTargetUser(loginUser);
      }
    })();
  }, [userId, loginUser]);

  if (!targetUser) return null;

  return (
    <>
      <Banner>이곳에서 당신의 이야기를 만나보세요.</Banner>
      <UserInfo>
        {targetUser.profile.length > 30 ? (
          <UserImg alt="UserImg" src={API_USER_IMG + targetUser.profile} />
        ) : (
          <BasicUserIcon size={70} />
        )}

        <TextBox>
          <UserNicName>{targetUser.nickname} 님의 메모장</UserNicName>
          <p>{targetUser.introduction || "글로 남기는 나만의 기록장"}</p>
        </TextBox>
        {userId === loginUser?._id && (
          <button onClick={() => dispatch(openModal())}>
            <SettingIcon />
          </button>
        )}
      </UserInfo>
      <MemoList user={targetUser._id || ""} />
    </>
  );
};
export default UserMemoPage;

const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 230px;
  background-color: var(--color-light-black-3);
  color: #ecf0f1;
  font-size: 19px;
  font-weight: var(--weight-light);
  text-align: center;
  line-height: 230px;

  @media (max-width: 800px) {
    display: none;
  }
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

  @media (max-width: 800px) {
    margin-top: 20px;
  }
`;

const TextBox = styled.div`
  margin-left: 20px;

  @media (max-width: 400px) {
    font-size: var(--font-semi-small);
  }
`;

const UserImg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const UserNicName = styled.h2`
  font-size: var(--font-large);
  font-weight: var(--weight-semi-bold);
  margin-bottom: 10px;

  @media (max-width: 400px) {
    font-size: var(--font-medium);
  }
`;
