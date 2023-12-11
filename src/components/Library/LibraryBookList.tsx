import {
  BookItemBox,
  BookListBody,
  BookListEditButton,
  BookListHeader,
  BookListTitle,
} from "./Library.style";
import PencilIcon from "@/assets/PecilIcon";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
import { BookListThemeObjType } from "@/types";
import { setTheme } from "./LibrarySlice";
import { RootState } from "@/store";
import { deleteMyBookListItem } from "@/api/userAPI";
import { setUser } from "@/components/User/UserSlice";
import BookItem from "@/components/common/BookItem";

const LibraryBookList = ({ theme }: { theme: BookListThemeObjType }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.UserSlice.userInfo);
  if (!user) return;

  const openSearchModal = () => {
    dispatch(openModal());
    dispatch(setTheme(theme));
  };

  const deleteMyBookListItemFunc = async (cover: string, title: string) => {
    const userAnswer = confirm("해당 책을 삭제하겠습니까?");

    if (!userAnswer) return;

    const book_info = { cover, title };
    const response = await deleteMyBookListItem({ theme, book_info });

    if (response?.ok) {
      const editBookList = user.my_book[theme].filter(
        (item) => item.title !== title
      );

      dispatch(
        setUser({
          ...user,
          my_book: {
            ...user.my_book,
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
          {bookListThemeObj[theme]} ({user.my_book[theme].length}/29)
        </BookListTitle>
        <BookListEditButton onClick={openSearchModal}>
          <PencilIcon />
        </BookListEditButton>
      </BookListHeader>
      <BookListBody>
        {user.my_book[theme].map((item, index) => {
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
