import styled from "styled-components";

export const UserBox = styled.div`
  background-color: var(--color-sidebar-active);
  border-radius: 8px;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const UserImg = styled.img`
  width: 70px;
  height: 70px;
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
