import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//RootState 및Redux 액션 Import:
import type { RootState } from "@/store";
import { closeWriteMemoModal, setMemoId, setMemoBook } from "./WriteMemoSlice";
import { setTheme } from "@/components/Library/LibrarySlice";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
// 컴포넌트 Import:
import BookItem from "@/components/common/BookItem";
//API 호출 Import:
import { editMemo, getMemo, postMemo } from "@/api/memoAPI";
//SVG 아이콘 및 스타일 관련 Import:
import CloseButton from "@/assets/CloseButton.svg?react";
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
        const memo = response.post;
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
    dispatch(closeWriteMemoModal());
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
          <span>메모 내용</span>
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
