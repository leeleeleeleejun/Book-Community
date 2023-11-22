import styled from "styled-components";

export const UserBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const UserImg = styled.img`
  width: 70px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const UserName = styled.div`
  font-weight: var(--weight-light);
  div {
    text-align: center;
    padding: 3px 0;
  }
`;
