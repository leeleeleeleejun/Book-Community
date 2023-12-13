import { CLIENT_PATH } from "@/constants/path";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";

const UserLinkBox = ({
  userId,
  showLinkBox,
}: {
  userId: string;
  showLinkBox: boolean;
}) => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <LinkBox $showLinkBox={showLinkBox}>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (userId) {
            navigate(CLIENT_PATH.USER_MEMO.replace(":userId", userId));
          } else {
            alert("존재하지 않는 유저입니다.");
          }
        }}
      >
        메모장 방문하기
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (userId) {
            navigate(CLIENT_PATH.LIBRARY.replace(":userId", userId));
          } else {
            alert("존재하지 않는 유저입니다.");
          }
        }}
      >
        서재 방문하기
      </button>
    </LinkBox>
  );
};

export default UserLinkBox;

const LinkBox = styled.div<{ $showLinkBox: boolean }>`
  ${({ $showLinkBox }) => ($showLinkBox ? "display: flex;" : "display: none;")}

  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  border: 1px solid var(--color-gray);
  position: absolute;
  margin-top: 5px;

  button {
    padding: 8px;
    font-size: 11px;
    font-weight: var(--weight-light);
  }

  button:first-child {
    border-bottom: 1px solid var(--color-gray);
  }
`;
