import { useState } from "react";
import { useLocation } from "react-router-dom";
//Redux 액션 Import 및 훅 사용
import { closeModal } from "./SearchBookSlice";
import { useDispatch } from "react-redux";
//사용자 정보 및 메모 관련 Redux 액션 Import:
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setUser } from "@/components/User/UserSlice";
import { setMemoBook } from "@/components/memo/WriteMemo/WriteMemoSlice";
import { setGatherClubBook } from "@/components/bookClub/WriteGather/WriteGatherSlice";
//컴포넌트 Import:
import { ModalContainer, ModalBox } from "@/components/common/ModalContainer";
// type 및  API 호출 Import:
import { searchAPI } from "@/api/searchAPI";
import { pushMyBookListItem } from "@/api/userAPI";
import { bookListItemType } from "@/types";
// 아이콘 및 스타일 Import:
import LoadingIcon from "@/components/common/LoadingIcon";
import PlusIcon from "@/assets/PlusIcon.svg?react";
import SearchIcon from "@/assets/SearchIcon.svg?react";
import CloseButton from "@/assets/CloseButton.svg?react";
import {
  SearchInput,
  SearchButton,
  SearchInputBox,
  Title,
  BookListItem,
  BookListBox,
  BookTitle,
  CollectButton,
  AuthorAndPublisher,
  Description,
  BookInfoBox,
  BookImg,
} from "./SearchBook.style";

const SearchBook = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  const theme = useSelector((state: RootState) => state.LibrarySlice.theme);

  const [searchValue, setSearchValue] = useState("");
  const [bookList, setBookList] = useState<bookListItemType[]>();
  const [loading, setLoading] = useState(false);
  if (!user) return null;

  const searchFunc = async () => {
    if (searchValue) {
      setLoading(true);
      const response = await searchAPI(searchValue);
      if (response.length === 0) {
        alert("검색 결과가 없습니다");
      }
      setLoading(false);
      setBookList(response);
    } else {
      alert("검색어를 입력해주세요");
    }
  };

  const pushMyBookListItemFunc = async (cover: string, title: string) => {
    if (!theme) return;

    const book_info = { cover, title };
    const response = await pushMyBookListItem({ theme, book_info });
    if (response?.ok) {
      dispatch(
        setUser({
          ...user,
          myBook: {
            ...user.myBook,
            [theme]: [...user.myBook[theme], book_info],
          },
        })
      );
    }
  };

  const chooseBookFunc = (cover: string, title: string) => {
    const book_info = { cover, title };

    location === "/"
      ? dispatch(setMemoBook(book_info))
      : dispatch(setGatherClubBook(book_info));
    dispatch(closeModal());
  };

  return (
    <ModalContainer>
      <ModalBox>
        <button className="close" onClick={() => dispatch(closeModal())}>
          <CloseButton />
        </button>
        <Title>제목 검색</Title>
        <SearchInputBox>
          <SearchInput
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
                searchFunc();
              }
            }}
            placeholder="책 제목으로 검색해주세요"
          />
          <SearchButton onClick={searchFunc}>
            {loading ? <LoadingIcon /> : <SearchIcon />}
          </SearchButton>
        </SearchInputBox>
        {bookList && (
          <BookListBox>
            {bookList.map((item) => {
              const { isbn, cover, title, author, publisher, description } =
                item;
              return (
                <BookListItem key={isbn}>
                  <BookImg src={cover} />
                  <BookInfoBox>
                    <BookTitle>{title}</BookTitle>
                    <AuthorAndPublisher>작가: {author}</AuthorAndPublisher>
                    <AuthorAndPublisher>출판사: {publisher}</AuthorAndPublisher>
                    <Description>{description}</Description>
                  </BookInfoBox>
                  <CollectButton
                    onClick={() => {
                      theme
                        ? pushMyBookListItemFunc(cover, title)
                        : chooseBookFunc(cover, title);
                    }}
                  >
                    <PlusIcon />
                  </CollectButton>
                </BookListItem>
              );
            })}
          </BookListBox>
        )}
      </ModalBox>
    </ModalContainer>
  );
};

export default SearchBook;
