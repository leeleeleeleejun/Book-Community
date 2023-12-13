import { useDispatch, useSelector } from "react-redux";
import CloseButton from "@/assets/CloseButton";
import { closeModal, setMemoId } from "./WriteMemoSlice";
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
  Input,
  BookItemBox,
  CheckBoxWrap,
  Content,
} from "./WriteMemo.style";
import { useEffect, useState } from "react";
import type { RootState } from "@/store";
import BookItem from "@/components/common/BookItem";
import { setMemoBook } from "./WriteMemoSlice";
import { editMemo, getMemo, postMemo } from "@/api/memoAPI";

const WriteMemo = () => {
  const dispatch = useDispatch();
  const memoId = useSelector((state: RootState) => state.WriteMemoSlice.memoId);
  const bookInfo = useSelector(
    (state: RootState) => state.WriteMemoSlice.memoBook
  );

  const author = useSelector((state: RootState) => state.UserSlice.userInfo);
  const [chooseBookCheck, setChooseBookCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    (async () => {
      if (memoId) {
        const response = await getMemo(memoId);
        const memo = response.memo;
        setTitle(memo.title);
        setContent(memo.content);
        setDescription(memo.description);
        if (memo.book_info.title) {
          setChooseBookCheck(true);
          dispatch(setMemoBook(memo.book_info));
        }
      }
    })();
  }, []);

  const cancelMemoBookFunc = () => {
    const bookInfo = { cover: "", title: "" };
    dispatch(setMemoBook(bookInfo));
  };

  const writeMemoFunc = async () => {
    if (!author) return;

    if (!title) {
      alert("제목을 입력해 주세요.");
      return;
    }

    if (!description) {
      alert("소개글을 입력해 주세요.");
      return;
    }

    if (!content) {
      alert("내용을 입력해 주세요.");
      return;
    }

    const memoInfo = {
      author,
      title,
      description,
      content,
      ...(chooseBookCheck && { book_info: bookInfo }),
    };

    const response = memoId
      ? await editMemo(memoInfo, memoId)
      : await postMemo(memoInfo);

    if (response?.ok) {
      closeModalFunc();
      setTitle("");
      setDescription("");
      setContent("");
      window.location.reload();
    }
  };

  const closeModalFunc = () => {
    cancelMemoBookFunc();
    dispatch(closeModal());
    dispatch(setMemoId(""));
  };

  return (
    <WriteMemoModalContainer>
      <WriteMemoModalBox>
        <button className="close" onClick={closeModalFunc}>
          <CloseButton />
        </button>
        <h3>메모 글{memoId ? " 수정" : " 작성"}</h3>
        <Content>
          <span>제목</span>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <CheckBoxWrap htmlFor="choose-book">
            <input
              checked={chooseBookCheck}
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
              {bookInfo.title ? (
                <BookItemBox>
                  <BookItem
                    cover={bookInfo.cover}
                    title={bookInfo.title}
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
          <span>한 줄 소개</span>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Quill
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
          />
          <ButtonBox>
            <RegisterButton onClick={writeMemoFunc}>
              {memoId ? "수정" : "등록"}하기
            </RegisterButton>
            <CancelButton onClick={closeModalFunc}>취소하기</CancelButton>
          </ButtonBox>
        </Content>
      </WriteMemoModalBox>
    </WriteMemoModalContainer>
  );
};

export default WriteMemo;
