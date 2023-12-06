import { useDispatch, useSelector } from "react-redux";
import CloseButton from "@/assets/CloseButton";
import { closeModal } from "./WriteMemoSlice";
import { setTheme } from "@/components/Library/LibrarySlice";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
import {
  WriteMemoModalBox,
  Quill,
  modules,
  ChooseBook,
  RegisterButton,
  CancelButton,
  ButtonBox,
  WriteMemoModalContainer,
  TitleInput,
  BookItemBox,
  CheckBoxWrap,
} from "./WriteMemo.style";
import { useState } from "react";
import type { RootState } from "@/store";
import BookItem from "@/components/common/BookItem";
import { setMemoBook } from "./WriteMemoSlice";
import { postMemo } from "@/api/memoAPI";

const WriteMemo = () => {
  const dispatch = useDispatch();
  const book_info = useSelector(
    (state: RootState) => state.WriteMemoSlice.memoBook
  );
  const author = useSelector((state: RootState) => state.UserSlice.userInfo);
  const [chooseBookCheck, setChooseBookCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const cancelMemoBookFunc = () => {
    const book_info = { cover: "", title: "" };
    dispatch(setMemoBook(book_info));
  };

  const postMemoFunc = async () => {
    if (!author) return;

    if (!title) {
      alert("제목을 입력해 주세요.");
      return;
    }

    if (!content) {
      alert("내용을 입력해 주세요.");
      return;
    }

    const memoInfo = {
      author,
      title,
      content,
      ...(chooseBookCheck && { book_info }),
    };

    const response = await postMemo(memoInfo);

    if (response?.ok) {
      dispatch(closeModal());
      setTitle("");
      setContent("");
    }
  };
  return (
    <WriteMemoModalContainer>
      <WriteMemoModalBox>
        <button className="close" onClick={() => dispatch(closeModal())}>
          <CloseButton />
        </button>
        <h3>메모 글 작성</h3>
        <p>제목</p>
        <TitleInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <CheckBoxWrap htmlFor="choose-book">
          <input
            type="checkbox"
            id="choose-book"
            onChange={() => {
              setChooseBookCheck((prev) => !prev);
            }}
          />
          책 선택하기
        </CheckBoxWrap>
        {chooseBookCheck && (
          <ChooseBook>
            {book_info.title ? (
              <BookItemBox>
                <BookItem
                  cover={book_info.cover}
                  title={book_info.title}
                  cancelFunc={cancelMemoBookFunc}
                />
              </BookItemBox>
            ) : (
              <>
                <span>책을 검색해 주세요</span>
                <button
                  onClick={() => {
                    dispatch(setTheme(null));
                    dispatch(openModal());
                  }}
                >
                  검색
                </button>
              </>
            )}
          </ChooseBook>
        )}

        <Quill
          theme="snow"
          modules={modules}
          value={content}
          onChange={setContent}
        />
        <ButtonBox>
          <RegisterButton onClick={postMemoFunc}>등록하기</RegisterButton>
          <CancelButton>취소하기</CancelButton>
        </ButtonBox>
      </WriteMemoModalBox>
    </WriteMemoModalContainer>
  );
};

export default WriteMemo;
