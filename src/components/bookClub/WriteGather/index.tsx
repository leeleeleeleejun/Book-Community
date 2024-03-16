import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WriteMemoModalBox,
  Quill,
  modules,
  ChooseBook,
  RegisterButton,
  CancelButton,
  ButtonBox,
  WriteMemoModalContainer,
  BookItemBox,
  Content,
} from "@/components/memo/WriteMemo/WriteMemo.style";
import { setTheme } from "@/components/Library/LibrarySlice";
import { openModal } from "@/components/SearchBook/SearchBookSlice";
import CloseButton from "@/assets/CloseButton.svg?react";
import { RootState } from "@/store";
import {
  closeWriteGatherModal,
  setGatherId,
  setMemoBook,
} from "./WriteGatherSlice";
import BookItem from "@/components/common/BookItem";
import { Input, RadioBox } from "./WriteGather.style";

const WriteGather = () => {
  const dispatch = useDispatch();
  const gatherId = useSelector(
    (state: RootState) => state.WriteGatherSlice.gatherId
  );
  const bookInfo = useSelector(
    (state: RootState) => state.WriteMemoSlice.memoBook
  );
  const [content, setContent] = useState("");

  const closeModalFunc = () => {
    const bookInfo = { cover: "", title: "" };
    dispatch(setMemoBook(bookInfo));
    dispatch(closeWriteGatherModal());
    dispatch(setGatherId(""));
  };

  const cancelMemoBookFunc = () => {
    const bookInfo = { cover: "", title: "" };
    dispatch(setMemoBook(bookInfo));
  };

  const member = ["one", "two", "three", "four", "five", "six", "seven"];
  const period = [1, 2, 3, 4, 5, 6];

  return (
    <WriteMemoModalContainer>
      <WriteMemoModalBox>
        <button className="close" onClick={closeModalFunc}>
          <CloseButton />
        </button>
        <h3>모임 모집하기</h3>
        <Content>
          <span>제목</span>
          <Input
            type="text"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />
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
          <span>인원</span>
          <RadioBox>
            {member.map((item, index) => (
              <label key={item}>
                <input
                  type="radio"
                  name="member"
                  value={item}
                  checked={index === 0}
                />
                {index + 1}명
              </label>
            ))}
          </RadioBox>

          <span>기간</span>
          <RadioBox>
            {period.map((item, index) => (
              <label key={item}>
                <input
                  type="radio"
                  name="day"
                  value={item}
                  checked={index === 0}
                />
                {item * 5}일
              </label>
            ))}
          </RadioBox>
          <span>활동 내용 및 규칙</span>
          <Quill
            theme="snow"
            modules={modules}
            value={content}
            onChange={setContent}
          />
          <ButtonBox>
            <RegisterButton onClick={() => {}}>
              {gatherId ? "수정" : "등록"}하기
            </RegisterButton>
            <CancelButton onClick={closeModalFunc}>취소하기</CancelButton>
          </ButtonBox>
        </Content>
      </WriteMemoModalBox>
    </WriteMemoModalContainer>
  );
};

export default WriteGather;
