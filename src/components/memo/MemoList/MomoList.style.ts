import styled from "styled-components";

export const MemoListBox = styled.ul``;

export const MemoListItem = styled.li`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  padding-top: 15px;
  & > div {
    display: flex;
    width: 95%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const MemoTitle = styled.h3`
  height: 60px;
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
`;

export const Excerpt = styled.div`
  padding: 10px;
  margin-top: 15px;
  background-color: var(--color-gray-light);
  border-radius: 6px;

  p {
    line-height: 1.5;
    font-size: 14px;
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
  width: 110px;
  margin: 0 10px;
  border-radius: 6px;
`;

export const MemoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-small);
  color: var(--color-gray-2);
`;

export const WriterInfo = styled.div`
  display: flex;
  height: 10px;
`;

export const WriterImg = styled.img`
  width: 25px;
  height: 25px;
  margin-top: -8%;
  margin-right: 7px;
  border-radius: 50%;
`;

export const WriterNicName = styled.div``;

export const WriteDate = styled.div`
  svg {
    margin-right: 3px;
  }
`;
