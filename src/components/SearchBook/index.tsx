import { ModalContainer, ModalBox } from "@/components/common/ModalContainer";
import CloseButton from "@/assets/CloseButton";
import { closeModal } from "./SearchBookSlice";
import { useDispatch } from "react-redux";
import SearchIcon from "@/assets/SearchIcon";
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
import { useState } from "react";
import { searchAPI } from "@/api/searchAPI";
import { bookListItemType } from "@/types";
import { pushMyBookListItem } from "@/api/userAPI";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { setUser } from "@/components/User/UserSlice";
import LoadingIcon from "@/assets/LoadingIcon";
import { setMemoBook } from "@/components/memo/WriteMemo/WriteMemoSlice";

const SearchBook = () => {
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
          my_book: {
            ...user.my_book,
            [theme]: [...user.my_book[theme], book_info],
          },
        })
      );
    }
  };

  const chooseMemoBookFunc = (cover: string, title: string) => {
    const book_info = { cover, title };
    dispatch(setMemoBook(book_info));
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
                        : chooseMemoBookFunc(cover, title);
                    }}
                  >
                    +
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
