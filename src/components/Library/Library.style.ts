import styled from "styled-components";

export const LibraryHeaderBox = styled.div`
  display: flex;
  padding-bottom: 17px;
  border-bottom: 1px solid var(--color-gray-3);
  margin-bottom: 20px;

  p {
    font-size: 24px;
    font-weight: var(--weight-semi-bold);
    line-height: 45px;
  }
`;

export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Title = styled.div`
  display: flex;
  font-size: 22px;
  font-weight: var(--weight-regular);

  svg {
    margin-right: 5px;
  }
`;

export const BookListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const BookListTitle = styled.span`
  font-size: var(--font-semi-small);
`;

export const BookListEditButton = styled.button`
  border-radius: 4px;
  padding: 2px 12px;
  border: 1px solid var(--color-gray-light-3);
`;

export const BookListBody = styled.ul`
  display: flex;
  max-width: 690px;
  height: 200px;
  overflow-x: auto;
  margin-bottom: 50px;
  padding: 5px;
`;

export const BookItem = styled.li`
  width: 98px;
  margin-right: 10px;
`;

export const BookImg = styled.img`
  width: 98px;
  height: 142px;
  border-radius: 4px;
`;

export const BookTitle = styled.div`
  max-height: 31.2px;
  height: 31.2px;
  font-size: var(--font-micro);
  font-weight: var(--weight-regular);
  padding: 0 2px;
  margin: 4px auto;
  line-height: 1.3;

  display: -webkit-box;
  display: -ms-flexbox;
  text-overflow: ellipsis;

  overflow: hidden;

  word-break: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
