import {
  BookItemBox,
  BookListBody,
  BookListEditButton,
  BookListHeader,
  BookListTitle,
} from "./Library.style";
import PencilIcon from "@/assets/PecilIcon";
import { useDispatch } from "react-redux";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
import { BookListThemeObjType, userInfo } from "@/types";
import { setTheme } from "./LibrarySlice";
import { deleteMyBookListItem } from "@/api/userAPI";
import { setUser } from "@/components/User/UserSlice";
import BookItem from "@/components/common/BookItem";

const LibraryBookList = ({
  theme,
  targetUser,
  authUser,
}: {
  theme: BookListThemeObjType;
  targetUser: userInfo | null;
  authUser: boolean;
}) => {
  const dispatch = useDispatch();
  if (!targetUser) return;

  const openSearchModal = () => {
    if (!authUser) {
      alert("권한이 없습니다.");
      return;
    }

    dispatch(openModal());
    dispatch(setTheme(theme));
  };

  const deleteMyBookListItemFunc = async (cover: string, title: string) => {
    if (!authUser) {
      alert("권한이 없습니다.");
      return;
    }

    const userAnswer = confirm("해당 책을 삭제하겠습니까?");

    if (!userAnswer) return;

    const book_info = { cover, title };
    const response = await deleteMyBookListItem({ theme, book_info });

    if (response?.ok) {
      const editBookList = targetUser.my_book[theme].filter(
        (item) => item.title !== title
      );

      dispatch(
        setUser({
          ...targetUser,
          my_book: {
            ...targetUser.my_book,
            [theme]: editBookList,
          },
        })
      );
    }
  };

  return (
    <>
      <BookListHeader>
        <BookListTitle>
          {bookListThemeObj[theme]} ({targetUser.my_book[theme].length}/29)
        </BookListTitle>
        <BookListEditButton onClick={openSearchModal}>
          <PencilIcon />
        </BookListEditButton>
      </BookListHeader>
      <BookListBody>
        {targetUser.my_book[theme].map((item, index) => {
          const { cover, title } = item;
          return (
            <BookItemBox key={index}>
              <BookItem
                deleteFunc={deleteMyBookListItemFunc}
                cover={cover}
                title={title}
              />
            </BookItemBox>
          );
        })}
      </BookListBody>
    </>
  );
};

export default LibraryBookList;

const bookListThemeObj = {
  bestBook: "인생책",
  readBook: "읽은책",
  hopeBook: "읽고싶은책",
};
