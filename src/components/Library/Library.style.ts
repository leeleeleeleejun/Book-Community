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
    margin-left: 10px;

    @media (max-width: 400px) {
      font-size: var(--font-medium);
    }
  }
`;

export const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, 98px);
  gap: 15px 10px;
  overflow-y: auto;

  width: 100%;
  height: 200px;
  margin-bottom: 30px;
  padding: 5px;
`;

export const BookItemBox = styled.li`
  position: relative;
`;
