import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostListBox = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const PostListItem = styled(Link)`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  padding: 15px;
  box-shadow: 2px 2px 10px #eee;
  margin: 10px 0;
  border-radius: 8px;

  & > div {
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    @media (max-width: 900px) {
      gap: 5px;
    }
  }
`;

export const PostTitle = styled.h3`
  height: 50px;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);

  @media (max-width: 900px) {
    height: 35px;
    font-size: 17px;

    overflow: hidden;

    display: -webkit-box;
    display: -ms-flexbox;
    white-space: normal;
    text-overflow: ellipsis;

    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const Excerpt = styled.div`
  padding: 10px;
  background-color: var(--color-gray-light);
  border-radius: 6px;

  p {
    line-height: 1.5;
    font-size: var(--font-semi-small);
    color: var(--color-light-black-2);
    overflow: hidden;

    display: -webkit-box;
    display: -ms-flexbox;
    white-space: normal;
    text-overflow: ellipsis;

    word-break: break-word;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const BookImg = styled.img`
  width: 90px;
  height: 130px;
  margin: auto;
  margin-left: 15px;
  border-radius: 6px;

  @media (max-width: 450px) {
    height: 110px;
    width: 80px;
  }
`;

export const LogoImg = styled.img`
  width: 90px;
  height: 25px;
  margin: 50px 0 50px 15px;
  border-radius: 6px;

  @media (max-width: 450px) {
    width: 70px;
    height: 20px;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
  color: var(--color-gray-2);
  position: relative;
`;

export const WriterInfo = styled.div`
  display: flex;
  height: 10px;
  align-items: center;

  @media (max-width: 900px) {
    margin: 10px 0;
  }
`;

export const WriterImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;

export const WriterNicName = styled.div`
  margin-left: 10px;
  font-size: var(--font-semi-small);

  &:hover {
    color: var(--color-light-black-2);
  }
`;

export const WriteDate = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 3px;
  }
`;
