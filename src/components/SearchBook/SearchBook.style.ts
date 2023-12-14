import styled from "styled-components";
import Input from "@/components/common/Input";

export const Title = styled.h4`
  font-size: var(--font-regular);
  margin-bottom: 10px;
  width: 600px;

  @media (max-width: 700px) {
    width: 400px;
    font-size: var(--font-semi-small);
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const SearchInputBox = styled.div`
  display: flex;
  width: 100%;
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main);
  width: 50px;
  height: 37px;
  margin: auto;
`;

export const SearchInput = styled(Input)`
  border-radius: 0;
  height: 25px;
  width: 100%;

  &:focus {
    outline: none;
  }

  @media (max-width: 700px) {
    font-size: var(--font-small);
  }
`;

export const BookListBox = styled.ul`
  max-height: 300px;
  max-width: 600px;
  overflow-y: auto;
  margin-top: 10px;
`;

export const BookListItem = styled.li`
  display: flex;
  padding: 20px 0;
  gap: 20px;
  border-top: 1px solid var(--color-gray-4);
`;

export const BookImg = styled.img`
  @media (max-width: 700px) {
    width: 130px;
    max-height: 170px;
  }

  @media (max-width: 500px) {
    width: 100px;
    max-height: 170px;
    margin: auto;
  }
`;

export const BookInfoBox = styled.div`
  width: 100%;
`;

export const BookTitle = styled.div`
  font-weight: var(--weight-semi-bold);
  margin-bottom: 15px;
  margin-top: 5px;
`;

export const AuthorAndPublisher = styled.div`
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Description = styled.div`
  opacity: 0.6;
  font-size: var(--font-semi-small);
  margin-top: 10px;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CollectButton = styled.button`
  min-width: 29px;
  line-height: 29px;
  padding: 0;
  margin: auto 30px auto 10px;
  color: white;
  background-color: var(--color-sub);
  font-size: 25px;
  font-weight: var(--weight-semi-bold);

  @media (max-width: 700px) {
    margin: auto 20px;
  }
`;
